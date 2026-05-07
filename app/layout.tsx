import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_IDS = ["G-K75JLZF63B", "G-HX0QNYHKXD"] as const;

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
        {/* Google tag (gtag.js) — single loader, multiple GA4 properties */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_IDS[0]}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GA_MEASUREMENT_IDS.map((id) => `gtag('config', '${id}');`).join("\n            ")}
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
