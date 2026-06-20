"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface CountUpProps {
    target: string; // e.g. "1996", "13+", "3"
    duration?: number; // ms
    className?: string;
}

export default function CountUp({
    target,
    duration = 2000,
    className = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [display, setDisplay] = useState("0");
    const hasAnimated = useRef(false);

    // Parse target: extract numeric part and suffix
    const numericMatch = target.match(/^(\d+)(.*)$/);
    const endValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
    const suffix = numericMatch ? numericMatch[2] : "";

    const animate = useCallback(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * endValue);

            setDisplay(`${current}${suffix}`);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [duration, endValue, suffix]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            setDisplay(target);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animate, target]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}
