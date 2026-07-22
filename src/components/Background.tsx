"use client"
import { useEffect, useRef } from "react";

/**
 * Interactive site background:
 *  - subtle base grid (always visible, faded toward edges)
 *  - a soft color spotlight that follows the cursor with eased trailing
 *  - a brighter grid that only "lights up" around the cursor
 *  - an anchored violet glow for depth + film grain on top
 */
const Background = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let raf = 0;
        let running = false;
        let tx = window.innerWidth / 2;
        let ty = window.innerHeight * 0.15;
        let cx = tx;
        let cy = ty;

        const tick = () => {
            cx += (tx - cx) * 0.1;
            cy += (ty - cy) * 0.1;
            el.style.setProperty("--mx", `${cx}px`);
            el.style.setProperty("--my", `${cy}px`);
            // settle: stop the loop once we've caught up to the cursor
            if (Math.abs(tx - cx) < 0.5 && Math.abs(ty - cy) < 0.5) {
                running = false;
                return;
            }
            raf = requestAnimationFrame(tick);
        };

        const start = () => {
            if (!running) {
                running = true;
                raf = requestAnimationFrame(tick);
            }
        };

        const onMove = (e: PointerEvent) => {
            tx = e.clientX;
            ty = e.clientY;
            start();
        };

        el.style.setProperty("--mx", `${cx}px`);
        el.style.setProperty("--my", `${cy}px`);
        window.addEventListener("pointermove", onMove);
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="fixed inset-0 z-0 bg-[#0a0a0b]"
            style={{ "--mx": "50vw", "--my": "15vh" } as React.CSSProperties}
        >
            {/* Base grid — subtle, faded toward the edges */}
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent_75%)]" />

            {/* Cursor spotlight — faint acid glow trailing the pointer */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(520px circle at var(--mx) var(--my), rgba(198,242,78,0.07), transparent 65%)",
                }}
            />

            {/* Grid that lights up around the cursor */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(198,242,78,0.30) 1px, transparent 1px), linear-gradient(to bottom, rgba(198,242,78,0.30) 1px, transparent 1px)",
                    backgroundSize: "54px 54px",
                    maskImage:
                        "radial-gradient(260px circle at var(--mx) var(--my), black 0%, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(260px circle at var(--mx) var(--my), black 0%, transparent 70%)",
                }}
            />

            {/* Film grain */}
            <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
        </div>
    );
};

export default Background;
