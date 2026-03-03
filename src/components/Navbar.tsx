"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!navRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#content-start",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav ref={navRef} className="glass-navbar">
            <div className="nav-inner">
                <div className="nav-logo">
                    <div className="nav-logo-icon">
                        <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
                            <path
                                d="M50 5 C50 5 20 45 20 62 C20 79 33 90 50 90 C67 90 80 79 80 62 C80 45 50 5 50 5Z"
                                fill="url(#dropGrad)"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="2"
                            />
                            <circle cx="50" cy="62" r="16" fill="none" stroke="#FF6B35" strokeWidth="3" />
                            <line x1="50" y1="35" x2="50" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                            <defs>
                                <linearGradient id="dropGrad" x1="20" y1="5" x2="80" y2="90">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#1D4ED8" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="nav-brand">Harmony Additives</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#industries">Industries</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a href="tel:+919820780452" className="nav-cta">
                    Ask Expert
                </a>
            </div>
        </nav>
    );
}
