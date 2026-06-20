"use client";

const PARTICLES = [
    { size: 3, x: "8%", y: "15%", delay: "0s", dur: "22s", opacity: 0.15 },
    { size: 4, x: "23%", y: "42%", delay: "-5s", dur: "28s", opacity: 0.1 },
    { size: 2, x: "67%", y: "8%", delay: "-10s", dur: "20s", opacity: 0.18 },
    { size: 5, x: "82%", y: "55%", delay: "-3s", dur: "26s", opacity: 0.08 },
    { size: 3, x: "45%", y: "78%", delay: "-15s", dur: "24s", opacity: 0.12 },
    { size: 2, x: "15%", y: "68%", delay: "-8s", dur: "30s", opacity: 0.14 },
    { size: 4, x: "55%", y: "25%", delay: "-12s", dur: "22s", opacity: 0.1 },
    { size: 3, x: "90%", y: "35%", delay: "-7s", dur: "27s", opacity: 0.11 },
    { size: 2, x: "35%", y: "92%", delay: "-18s", dur: "25s", opacity: 0.15 },
    { size: 3, x: "72%", y: "72%", delay: "-2s", dur: "23s", opacity: 0.09 },
    { size: 4, x: "5%", y: "45%", delay: "-14s", dur: "29s", opacity: 0.12 },
    { size: 2, x: "50%", y: "5%", delay: "-9s", dur: "21s", opacity: 0.16 },
];

export default function ParticleField() {
    return (
        <div className="particle-field" aria-hidden="true">
            {PARTICLES.map((p, i) => (
                <div
                    key={i}
                    className="particle-dot"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: p.x,
                        top: p.y,
                        opacity: p.opacity,
                        animationDelay: p.delay,
                        animationDuration: p.dur,
                    }}
                />
            ))}
        </div>
    );
}
