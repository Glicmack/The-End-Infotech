import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom CRM, Design, App & Web Development in India | THE END INFOTECH",
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
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
