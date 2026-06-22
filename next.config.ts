import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Standardize on trailing-slash URLs to match canonical tags and internal links
  // (avoids 308 redirect hops between /products/defoamers and /products/defoamers/).
  trailingSlash: true,
  async headers() {
    // CSP: next/font self-hosts fonts (font-src 'self'); the chatbot calls the
    // same-origin /api/chat (connect-src 'self'). 'unsafe-inline' is required for
    // Next's hydration bootstrap, inline JSON-LD, and inline component styles.
    // When NEXT_PUBLIC_GA_ID is set at build time, GA4 domains are auto-allowed.
    const gaOn = Boolean(process.env.NEXT_PUBLIC_GA_ID);
    const fbOn = Boolean(process.env.NEXT_PUBLIC_FB_PIXEL_ID);
    const gtm = "https://www.googletagmanager.com";
    const ga = "https://www.google-analytics.com https://*.google-analytics.com";
    const fbScript = "https://connect.facebook.net";
    const fbConnImg = "https://www.facebook.com";
    const scriptExtra = `${gaOn ? ` ${gtm}` : ""}${fbOn ? ` ${fbScript}` : ""}`;
    const connectExtra = `${gaOn ? ` ${ga} ${gtm}` : ""}${fbOn ? ` ${fbConnImg}` : ""}`;
    const imgExtra = `${gaOn ? ` ${ga} ${gtm}` : ""}${fbOn ? ` ${fbConnImg}` : ""}`;
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${scriptExtra}`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: blob:${imgExtra}`,
      "font-src 'self'",
      `connect-src 'self'${connectExtra}`,
      "media-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    return [
      { source: "/:path*", headers: securityHeaders },
      // Long-lived immutable caching for fingerprint-free static assets
      // (logo + scroll-animation frames) so a CDN can cache them aggressively.
      {
        source: "/frames/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:file(hlogo.*|hlogo-sm.*|addbuddy.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
};

export default nextConfig;
