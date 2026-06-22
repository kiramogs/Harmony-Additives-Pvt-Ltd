import Script from "next/script";

/**
 * Analytics & marketing tags. Each activates ONLY when its env var is set, so by
 * default nothing loads (no scripts, no extra requests, no privacy exposure):
 *   - NEXT_PUBLIC_GA_ID        e.g. G-XXXXXXXXXX  (Google Analytics 4)
 *   - NEXT_PUBLIC_FB_PIXEL_ID  e.g. 1234567890    (Meta / Facebook Pixel)
 *
 * The CSP in next.config.ts auto-allows the matching domains when these are set at build time.
 */
export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const fbId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    return (
        <>
            {gaId && (
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
            )}

            {fbId && (
                <>
                    <Script id="fb-pixel" strategy="afterInteractive">
                        {`
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '${fbId}');
                            fbq('track', 'PageView');
                        `}
                    </Script>
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            alt=""
                            src={`https://www.facebook.com/tr?id=${fbId}&ev=PageView&noscript=1`}
                        />
                    </noscript>
                </>
            )}
        </>
    );
}
