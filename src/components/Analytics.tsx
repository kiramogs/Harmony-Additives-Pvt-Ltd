import Script from "next/script";

/**
 * Google Analytics 4. Activates only when NEXT_PUBLIC_GA_ID is set
 * (e.g. NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX in .env.local or the host's env).
 * When unset, renders nothing — no analytics, no extra requests.
 * The CSP in next.config.ts auto-allows the GA domains when this ID is present at build time.
 */
export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', { anonymize_ip: true });
                `}
            </Script>
        </>
    );
}
