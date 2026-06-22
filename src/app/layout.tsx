import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Chemical Additives Manufacturer India | Harmony Additives",
    template: "%s | Harmony Additives",
  },
  description:
    "Mumbai-based manufacturer & exporter of defoamers, emulsifiers, wetting agents & thickeners. Custom specialty additives since 1996. Request a sample.",
  keywords: [
    "specialty chemical additives",
    "defoamer manufacturer India",
    "emulsifier supplier Mumbai",
    "wetting agent manufacturer",
    "thickener anti-settling agent",
    "chemical additives exporter India",
    "specialty chemicals Mumbai",
    "Harmony Additives",
    "defoamer manufacturer",
    "paint additives India",
  ],
  authors: [{ name: "Harmony Additives Private Limited", url: "https://harmonyadditive.in" }],
  creator: "Harmony Additives Private Limited",
  publisher: "Harmony Additives Private Limited",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://harmonyadditive.in"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harmonyadditive.in",
    siteName: "Harmony Additives",
    title: "Specialty Chemical Additives Manufacturer India | Harmony Additives",
    description:
      "Mumbai-based manufacturer & exporter of defoamers, emulsifiers, wetting agents & thickeners. Custom specialty additives since 1996.",
    images: [
      {
        url: "/hlogo.png",
        width: 1200,
        height: 630,
        alt: "Harmony Additives — Specialty Chemical Additives Manufacturer India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialty Chemical Additives Manufacturer India | Harmony Additives",
    description:
      "Mumbai-based manufacturer & exporter of defoamers, emulsifiers, wetting agents & thickeners since 1996.",
    images: ["/hlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://harmonyadditive.in/#organization",
  name: "Harmony Additives Private Limited",
  alternateName: ["Harmony Additives", "Harmony Additives Pvt Ltd"],
  url: "https://harmonyadditive.in",
  logo: {
    "@type": "ImageObject",
    url: "https://harmonyadditive.in/hlogo.png",
    width: 200,
    height: 200,
  },
  description:
    "Mumbai-based manufacturer and exporter of specialty chemical additives including defoamers, emulsifiers, wetting & dispersing agents, thickeners, surface property enhancers, and tailor-made formulations. ISO 9001 and ISO 14001 certified since 1996.",
  foundingDate: "1996",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gorai-1, Borivali (West)",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400092",
    addressCountry: "IN",
  },
  telephone: "+919820780452",
  email: "sales@additive.in",
  sameAs: [
    "https://www.facebook.com/harmonyadditive",
    "https://www.linkedin.com/company/harmony-additives",
    "https://www.youtube.com/@HarmonyAdditives",
    "https://www.instagram.com/harmonyadditive",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Ethiopia" },
    { "@type": "Country", name: "Nepal" },
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Country", name: "Myanmar" },
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "Ghana" },
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Mauritius" },
    { "@type": "Country", name: "Malaysia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Specialty Chemical Additives — 173 Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Defoamers & Antifoams", description: "70 silicone, mineral-oil and polyether defoamers for aqueous and non-aqueous systems" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Wetting & Dispersing Agents", description: "28 grades for paint, ink, paper and textile applications" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Emulsifiers", description: "15 anionic and non-ionic emulsifiers for agrochemicals, paints and metalworking" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Thickeners & Anti-Settling Agents", description: "27 rheology modifiers for coatings and inks" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Surface Property Enhancers", description: "11 leveling, slip and scratch-resistance additives for coatings" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Specialty & Tailor-Made Additives", description: "22 custom formulations developed to client specifications" },
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://harmonyadditive.in/#localbusiness",
  name: "Harmony Additives Private Limited",
  image: "https://harmonyadditive.in/hlogo.png",
  url: "https://harmonyadditive.in",
  telephone: "+919820780452",
  email: "sales@additive.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gorai-1, Borivali (West)",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400092",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.2307,
    longitude: 72.8567,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Bank Transfer, Letter of Credit",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://harmonyadditive.in/#website",
  url: "https://harmonyadditive.in",
  name: "Harmony Additives",
  description:
    "Specialty chemical additives manufacturer and exporter from Mumbai, India — defoamers, emulsifiers, wetting agents, thickeners since 1996.",
  publisher: { "@id": "https://harmonyadditive.in/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
