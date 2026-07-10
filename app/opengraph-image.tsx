import { ImageResponse } from "next/og";
import { hero } from "@/content/copy";

export const runtime = "edge";
export const alt = "MarIA Consultoria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #3B1D3F 0%, #5B3A5E 100%)",
          color: "#FFF9F6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.7,
            marginBottom: 28,
            fontFamily: "sans-serif",
          }}
        >
          MarIA Consultoria
        </div>
        <div style={{ display: "flex", fontSize: 50, lineHeight: 1.18, maxWidth: 940 }}>
          {hero.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
