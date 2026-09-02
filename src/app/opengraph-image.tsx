import { ImageResponse } from "next/og";

export const alt = "Opu Pal - Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d1b2a",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 80, fontWeight: 700, letterSpacing: "-1px" }}>
        <span style={{ color: "#5eead4" }}>OPU</span>
        <span style={{ color: "#f1f5f9" }}> PAL</span>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 12, letterSpacing: "3px", textTransform: "uppercase" }}>
        Full-Stack Developer
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 16, fontSize: 18, color: "#5eead4" }}>
        <span>React</span>
        <span>Next.js</span>
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>MongoDB</span>
      </div>
    </div>,
    { ...size },
  );
}