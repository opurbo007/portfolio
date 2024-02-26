import connect from "@/db/config";
import { Project } from "@/models/project.model";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  await connect();

  try {
    const projectData = await Project.find({});

    return NextResponse.json({ projectData, status: 200 });
  } catch (error) {
    NextResponse.json({ error: error }, { status: 405 });
  }
}
