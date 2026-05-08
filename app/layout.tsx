import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_IDS = ["G-HX0QNYHKXD"] as const;

export const metadata: Metadata = {
  title: "Custom CRM, Design, App & Web Development | THE END INFOTECH",
  description:
    "We develop online stores, CRM systems, SaaS solutions, and app platforms — integrating AI into processes and business solutions.",
  keywords: [
    "software development",
    "web development",
    "CRM systems",
    "SaaS",
    "e-commerce",
    "mobile apps",
    "branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Google tag (gtag.js) — separate literal block per GA4 property,
            matching the snippet format the GA admin UI tells you to paste. */}
        {GA_MEASUREMENT_IDS.map((id) => (
          <Script
            key={`gtag-loader-${id}`}
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            strategy="afterInteractive"
          />
        ))}
        {GA_MEASUREMENT_IDS.map((id) => (
          <Script
            key={`gtag-config-${id}`}
            id={`gtag-config-${id}`}
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${id}');
            `}
          </Script>
        ))}
        {/* Popunder ad — Profitable CPM Rate Network */}
        <Script
          src="https://pl29373936.profitablecpmratenetwork.com/28/d0/b4/28d0b4a9eb2745514fba694d0f11c00e.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
