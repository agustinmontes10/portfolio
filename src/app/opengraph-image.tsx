import { ImageResponse } from "next/og";

export const alt = "Agustín Montes — AI Developer & Automations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

    if (resource) {
        const response = await fetch(resource[1]);
        if (response.status === 200) {
            return await response.arrayBuffer();
        }
    }

    throw new Error("failed to load font data");
}

export default async function Image() {
    const heading = "AGUSTÍN MONTES";
    const monoText = "● AVAILABLE_FOR_WORK v.2026 > AI Developer & Automations — agents · n8n · next.js · llms _";

    const [anton, jetbrains] = await Promise.all([
        loadGoogleFont("Anton", heading),
        loadGoogleFont("JetBrains+Mono", monoText),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#0a0a0b",
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "54px 54px",
                    padding: "56px 72px",
                }}
            >
                {/* Top bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontFamily: "JetBrains Mono",
                        fontSize: 22,
                        color: "#8a8a85",
                    }}
                >
                    <span>agustin.montes</span>
                    <span style={{ color: "#c6f24e" }}>● AVAILABLE_FOR_WORK</span>
                </div>

                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontFamily: "Anton",
                            fontSize: 150,
                            color: "#e8e8e6",
                            lineHeight: 0.95,
                        }}
                    >
                        AGUSTÍN
                    </div>
                    <div
                        style={{
                            fontFamily: "Anton",
                            fontSize: 150,
                            color: "#c6f24e",
                            lineHeight: 0.95,
                        }}
                    >
                        MONTES
                    </div>
                </div>

                {/* Bottom line */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                    }}
                >
                    <div
                        style={{
                            fontFamily: "JetBrains Mono",
                            fontSize: 26,
                            color: "#8a8a85",
                            display: "flex",
                        }}
                    >
                        <span style={{ color: "#c6f24e", marginRight: 14 }}>&gt;</span>
                        AI Developer &amp; Automations — agents · n8n · next.js · llms
                        <span style={{ color: "#c6f24e", marginLeft: 8 }}>_</span>
                    </div>
                    <div style={{ display: "flex", height: 6, width: "100%", backgroundColor: "#c6f24e" }} />
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Anton", data: anton, style: "normal" },
                { name: "JetBrains Mono", data: jetbrains, style: "normal" },
            ],
        }
    );
}
