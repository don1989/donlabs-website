import { ImageResponse } from "next/og";

export const alt =
  "Don Labs — AI tools built for businesses that know they should be using AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,255,61,0.18) 0%, rgba(10,10,10,0) 70%)",
          padding: "72px 80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: "#c8ff3d",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            D
          </div>
          <div
            style={{
              color: "#f5f3ef",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Don Labs
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            AI, built for your business
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#f5f3ef",
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 1040,
            }}
          >
            <div style={{ display: "flex" }}>You know you should</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
              <div style={{ display: "flex" }}>be using AI.</div>
              <div style={{ display: "flex", color: "#c8ff3d" }}>
                We make it happen.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{ width: 32, height: 2, backgroundColor: "#c8ff3d" }}
            />
            <div>donlabs.ai</div>
          </div>
          <div>Security first · Claude inside</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
