"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 87;

function getFramePath(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `/frames/HAHS_${padded}.jpg`;
}

export default function ScrollAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameRef = useRef({ current: 0 });
    const dprRef = useRef(1);
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    // ── Preload all frames at full quality ──
    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();

            // Force full-quality decode — no lazy loading, no compression
            img.decoding = "async";
            img.fetchPriority = i < 10 ? "high" : "auto";
            img.src = getFramePath(i);

            img.onload = () => {
                loadedCount++;
                setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) {
                    imagesRef.current = images;
                    setLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            };
            images.push(img);
        }

        return () => {
            images.length = 0;
        };
    }, []);

    // ── Render a frame at native device resolution ──
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[index];
        if (!img || !img.complete) return;

        const dpr = dprRef.current;
        const cw = canvas.width;   // already scaled by DPR
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Cover-fit at full native resolution
        const scale = Math.max(cw / iw, ch / ih);
        const w = iw * scale;
        const h = ih * scale;
        const x = (cw - w) / 2;
        const y = (ch - h) / 2;

        // Highest quality rendering settings
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, w, h);
    }, []);

    // ── Size canvas to window × device pixel ratio for crisp rendering ──
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 3); // cap at 3x
            dprRef.current = dpr;

            const w = window.innerWidth;
            const h = window.innerHeight;

            // Set internal resolution to native pixel count
            canvas.width = w * dpr;
            canvas.height = h * dpr;

            // Display size stays at CSS pixels
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            renderFrame(Math.round(frameRef.current.current));
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [loaded, renderFrame]);

    // ── GSAP ScrollTrigger — map scroll to frame index ──
    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        renderFrame(0);

        const ctx = gsap.context(() => {
            gsap.to(frameRef.current, {
                current: FRAME_COUNT - 1,
                ease: "none",
                snap: "current",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                    onUpdate: () => {
                        renderFrame(Math.round(frameRef.current.current));
                    },
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [loaded, renderFrame]);

    return (
        <>
            {/* Loading screen */}
            {!loaded && (
                <div className="loading-screen">
                    <div className="loading-content">
                        <div className="loading-logo">
                            <span className="loading-letter">H</span>
                            <span className="loading-letter">A</span>
                        </div>
                        <div className="loading-bar-track">
                            <div
                                className="loading-bar-fill"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="loading-text">{progress}%</p>
                    </div>
                </div>
            )}

            {/* Scroll container */}
            <div
                ref={containerRef}
                className="scroll-container"
                style={{ height: "500vh" }}
            >
                <canvas
                    ref={canvasRef}
                    className="animation-canvas"
                />

                {/* Scroll indicator */}
                {loaded && (
                    <div className="scroll-indicator">
                        <div className="scroll-indicator-mouse">
                            <div className="scroll-indicator-wheel" />
                        </div>
                        <p className="scroll-indicator-text">Scroll to explore</p>
                    </div>
                )}
            </div>
        </>
    );
}
