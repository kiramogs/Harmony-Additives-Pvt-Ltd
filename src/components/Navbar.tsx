"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (!navRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(navRef.current, { y: 0, opacity: 1 });
            return;
        }

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

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <>
            <nav ref={navRef} className="glass-navbar">
                <div className="nav-inner">
                    <div className="nav-logo">
                        <div className="nav-logo-icon">
                            <img
                                src="/hlogo.png"
                                alt="Harmony Additives Logo"
                                width="40"
                                height="40"
                                className="nav-logo-img"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <span className="nav-brand">Harmony Additives</span>
                    </div>

                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#industries">Industries</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <a href="tel:+919820780452" className="nav-cta nav-cta--desktop">
                        Get a Quote
                    </a>

                    {/* Hamburger button — mobile only */}
                    <button
                        className={`nav-hamburger ${mobileOpen ? "nav-hamburger--open" : ""}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        <span className="nav-hamburger-line" />
                        <span className="nav-hamburger-line" />
                        <span className="nav-hamburger-line" />
                    </button>
                </div>
            </nav>

            {/* Mobile slide-in menu */}
            <div
                className={`mobile-menu-overlay ${mobileOpen ? "mobile-menu-overlay--visible" : ""}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />
            <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
                <ul className="mobile-menu-links">
                    <li><a href="#about" onClick={handleNavClick}>About</a></li>
                    <li><a href="#industries" onClick={handleNavClick}>Industries</a></li>
                    <li><a href="#products" onClick={handleNavClick}>Products</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                </ul>
                <a href="tel:+919820780452" className="nav-cta mobile-menu-cta" onClick={handleNavClick}>
                    Get a Quote
                </a>
            </div>
        </>
    );
}
