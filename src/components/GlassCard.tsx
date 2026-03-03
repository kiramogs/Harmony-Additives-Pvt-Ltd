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

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.92,
                    filter: "blur(10px)",
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 90%",
                        end: "top 50%",
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
