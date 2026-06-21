import type { Metadata } from "next";
import AskExpertClient from "./AskExpertClient";

export const metadata: Metadata = {
    title: "Ask a Chemical Additive Expert — Free Technical Consultation",
    description:
        "Get expert guidance on selecting the right defoamer, emulsifier or additive for your formulation. Free consultation from Harmony's chemists. Sample dispatch within the week.",
    alternates: { canonical: "/ask-expert/" },
    openGraph: {
        title: "Ask a Chemical Additive Expert — Free Technical Consultation | Harmony Additives",
        description: "Free technical consultation from Harmony Additives' formulation specialists. Share your challenge — we respond within 1 business day.",
        url: "https://harmonyadditive.in/ask-expert/",
    },
};

export default function AskExpertPage() {
    return <AskExpertClient />;
}
