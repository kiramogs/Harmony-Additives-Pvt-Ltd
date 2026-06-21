"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
    { label: "About", href: "/about-us/" },
    { label: "Industries", href: "/industry/" },
    { label: "Products", href: "/products/" },
    { label: "Blog", href: "/blog/" },
    { label: "Ask Expert", href: "/ask-expert/" },
];

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    useEffect(() => {
        if (!navRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!isHomepage || prefersReducedMotion) {
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
    }, [isHomepage]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <>
            <nav ref={navRef} className="glass-navbar">
                <div className="nav-inner">
                    <Link href="/" className="nav-logo" aria-label="Harmony Additives — Home">
                        <div className="nav-logo-icon">
                            <img
                                src="/hlogo-sm.webp"
                                alt="Harmony Additives Logo"
                                width="40"
                                height="40"
                                className="nav-logo-img"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <span className="nav-brand">Harmony Additives</span>
                    </Link>

                    <ul className="nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={pathname === link.href || pathname.startsWith(link.href.replace(/\/$/, "")) ? "nav-link-active" : ""}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/919820780452?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20specialty%20chemical%20additives."
                        className="nav-cta nav-cta--desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                    >
                        Get a Quote
                    </a>

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

            <div
                className={`mobile-menu-overlay ${mobileOpen ? "mobile-menu-overlay--visible" : ""}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />
            <div className={`mobile-menu ${mobileOpen ? "mobile-menu--open" : ""}`}>
                <ul className="mobile-menu-links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} onClick={handleNavClick}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <a
                    href="https://wa.me/919820780452?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20specialty%20chemical%20additives."
                    className="nav-cta mobile-menu-cta"
                    onClick={handleNavClick}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get a Quote
                </a>
            </div>
        </>
    );
}
