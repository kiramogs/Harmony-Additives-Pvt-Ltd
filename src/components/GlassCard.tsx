"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassCard({
    children,
    className = "",
    delay = 0,
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        // Respect reduced-motion preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(cardRef.current, { opacity: 1, y: 0, scale: 1 });
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                {
                    y: 60,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 92%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={cardRef} className={`glass-card ${className}`}>
            {children}
        </div>
    );
}
