"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 87;
const INTRO_FADE_VIEWPORTS = 0.342;
const FRAME_START_VIEWPORTS = 0.467;
const HERO_SCROLL_VIEWPORTS = 2.101;
const MAX_CANVAS_DPR = 1.75;

interface DrawMetrics {
    width: number;
    height: number;
    x: number;
    y: number;
    w: number;
    h: number;
}

function getFramePath(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `/frames/HAHS_${padded}.webp`;
}

export default function ScrollAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const drawMetricsRef = useRef<DrawMetrics | null>(null);
    const frameRef = useRef({ current: 0 });
    const rafRef = useRef<number | null>(null);
    const pendingFrameRef = useRef(0);
    const renderedFrameRef = useRef(-1);
    const heroTextRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const images: HTMLImageElement[] = [];
        let loadedCount = 0;
        let cancelled = false;

        const markFrameComplete = () => {
            if (cancelled) return;

            loadedCount++;
            setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

            if (loadedCount === FRAME_COUNT) {
                imagesRef.current = images;
                setLoaded(true);
            }
        };

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();

            img.decoding = "async";
            img.fetchPriority = i < 10 ? "high" : "auto";
            img.src = getFramePath(i);

            img.onload = async () => {
                try {
                    await img.decode();
                } catch {
                    // drawImage can still use images when decode() rejects for an already-loaded frame.
                }

                markFrameComplete();
            };
            img.onerror = () => {
                markFrameComplete();
            };
            images.push(img);
        }

        return () => {
            cancelled = true;
            images.length = 0;
        };
    }, []);

    const getCanvasContext = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return null;

        if (!contextRef.current) {
            contextRef.current = canvas.getContext("2d", {
                alpha: false,
                desynchronized: true,
            });
        }

        const ctx = contextRef.current;

        if (ctx) {
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = "high";
        }

        return ctx;
    }, []);

    const updateDrawMetrics = useCallback(() => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[0];
        if (!canvas || !img) return;

        const width = canvas.width;
        const height = canvas.height;
        const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;

        drawMetricsRef.current = {
            width,
            height,
            x: (width - w) / 2,
            y: (height - h) / 2,
            w,
            h,
        };
    }, []);

    const renderFrameNow = useCallback((index: number) => {
        const ctx = getCanvasContext();
        const metrics = drawMetricsRef.current;
        if (!ctx || !metrics) return;

        const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index)));
        if (renderedFrameRef.current === frameIndex) return;

        const img = imagesRef.current[frameIndex];
        if (!img || !img.complete) return;

        ctx.clearRect(0, 0, metrics.width, metrics.height);
        ctx.drawImage(img, metrics.x, metrics.y, metrics.w, metrics.h);
        renderedFrameRef.current = frameIndex;
    }, [getCanvasContext]);

    const requestFrameRender = useCallback((index: number) => {
        pendingFrameRef.current = index;

        if (rafRef.current !== null) return;

        rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = null;
            renderFrameNow(pendingFrameRef.current);
        });
    }, [renderFrameNow]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1), MAX_CANVAS_DPR);
            const w = window.innerWidth;
            const h = window.innerHeight;

            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;

            renderedFrameRef.current = -1;
            updateDrawMetrics();
            requestFrameRender(frameRef.current.current);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [loaded, requestFrameRender, updateDrawMetrics]);

    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        renderFrameNow(0);

        const ctx = gsap.context(() => {
            if (scrollIndicatorRef.current) {
                gsap.to(scrollIndicatorRef.current, {
                    autoAlpha: 0,
                    y: -18,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `top+=${Math.round(window.innerHeight * INTRO_FADE_VIEWPORTS)} top`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            }

            if (heroTextRef.current) {
                gsap.to(heroTextRef.current, {
                    autoAlpha: 0,
                    y: -40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `top+=${Math.round(window.innerHeight * INTRO_FADE_VIEWPORTS)} top`,
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            }

            gsap.to(frameRef.current, {
                current: FRAME_COUNT - 1,
                ease: "none",
                snap: "current",
                onUpdate: () => {
                    requestFrameRender(frameRef.current.current);
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: () => `top+=${Math.round(window.innerHeight * FRAME_START_VIEWPORTS)} top`,
                    end: "bottom bottom",
                    scrub: 0.2,
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => {
            ctx.revert();

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [loaded, renderFrameNow, requestFrameRender]);

    return (
        <>
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

            <div
                ref={containerRef}
                className="scroll-container"
                style={{ height: `${HERO_SCROLL_VIEWPORTS * 100}vh` }}
            >
                <canvas
                    ref={canvasRef}
                    className="animation-canvas"
                />

                {/* Hero text always rendered (SSR) so the H1 and keyword copy are
                    crawlable by search engines and AI bots, not gated behind client JS.
                    The loading screen covers it until frames load; GSAP fades it on scroll. */}
                <div ref={heroTextRef} className="hero-text-overlay">
                    <span className="hero-eyebrow">Est. 1996 · Mumbai, India · ISO 9001 &amp; 14001</span>
                    <h1 className="hero-h1">
                        Specialty Chemical Additives<br />
                        Manufacturer &amp; Exporter
                    </h1>
                    <p className="hero-tagline">An Eye For Excellence</p>
                    <p className="hero-desc">
                        Defoamers, emulsifiers, wetting &amp; dispersing agents, thickeners,
                        surface enhancers &amp; custom formulations — 173 specialty additives
                        across 6 categories serving 10+ industries in India and 13 countries.
                    </p>
                    <div className="hero-actions">
                        <a href="/products/" className="hero-btn hero-btn--primary">
                            Explore 173 Products
                        </a>
                        <a href="/ask-expert/" className="hero-btn hero-btn--secondary">
                            Request a Sample
                        </a>
                    </div>
                </div>

                {loaded && (
                    <div ref={scrollIndicatorRef} className="scroll-indicator">
                        <div className="scroll-indicator-inner">
                            <div className="scroll-indicator-mouse">
                                <div className="scroll-indicator-wheel" />
                            </div>
                            <p className="scroll-indicator-text">Scroll to Explore</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
