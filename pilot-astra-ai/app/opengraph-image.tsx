import { ImageResponse } from "next/og";

export const alt = "Pilot Astra AI — Connected Growth Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "65px 75px", background: "#050B18", color: "#F4F8FF", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26, letterSpacing: 5 }}><svg width="44" height="44" viewBox="0 0 64 64"><path d="m32 3 7 22 22 7-22 7-7 22-7-22-22-7 22-7Z" fill="#00D9FF" /></svg>PILOT ASTRA AI</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}><div style={{ fontSize: 76, letterSpacing: -3, lineHeight: 1.1 }}>Connected Growth Systems.</div><div style={{ fontSize: 28, color: "#00D9FF" }}>Built around your business.</div></div>
      <div style={{ display: "flex", gap: 20, fontSize: 19, color: "#A9BCD6" }}>Websites · WhatsApp · CRM · AI SDR · Content · SEO / GEO</div>
    </div>, size,
  );
}
