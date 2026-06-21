import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Prevent the *.vercel.app deployment URL from being indexed alongside the
 * canonical production domain (harmonyadditive.in). Canonicals already point to
 * the .in domain; this adds X-Robots-Tag: noindex on the vercel.app host so the
 * two URLs aren't treated as duplicate content. The production domain is unaffected.
 *
 * Once harmonyadditive.in is set as the primary domain in Vercel, Vercel also
 * 301-redirects the .vercel.app alias to it.
 */
export function middleware(req: NextRequest) {
    const host = req.headers.get("host") ?? "";
    const res = NextResponse.next();
    if (host.endsWith(".vercel.app")) {
        res.headers.set("X-Robots-Tag", "noindex, nofollow");
    }
    return res;
}

export const config = {
    // Run on all routes except Next internals and static assets
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
