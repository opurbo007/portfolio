import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/data/chatbot-data";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1500;

async function callGroq(
  messages: { role: string; content: string }[],
  apiKey: string,
): Promise<string> {
  let lastError: string = "Unknown error";

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * attempt));
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages,
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    if (res.status === 429) {
      lastError = "Rate limited by Groq";
      continue;
    }

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(`Groq API ${res.status}:`, errorBody);
      lastError = `Groq API error ${res.status}: ${errorBody}`;
      if (res.status !== 429) break;
      continue;
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      lastError = "Empty response from Groq";
      continue;
    }

    return reply;
  }

  throw new Error(lastError);
}

export async function POST(request: Request) {
  const { messages } = (await request.json()) as { messages: ChatMessage[] };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: "Messages array is required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey === "gsk_your_key_here") {
    return NextResponse.json(
      { error: "GROQ_API_KEY is not configured. Add your key to .env.local" },
      { status: 500 },
    );
  }

  const systemPrompt = buildSystemPrompt();

  const groqMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  try {
    const reply = await callGroq(groqMessages, apiKey);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    const details = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: details,
        details,
      },
      { status: 502 },
    );
  }
}