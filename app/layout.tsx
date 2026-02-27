import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

const siteUrl = "https://nicolasp304.github.io/NicolasP304";
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  title: "Nicolas Papageorgiou | Portfolio",
  description:
    "Graduate Software Engineer (RMIT, 2025). Enterprise delivery across PHP, JavaScript, Vue, MySQL, AWS, and production support.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Nicolas Papageorgiou | Portfolio",
    description:
      "Graduate Software Engineer with 2+ years delivering enterprise intranet solutions.",
    type: "website",
    url: siteUrl,
    images: ["/assets/profile.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Papageorgiou | Portfolio",
    description:
      "Graduate Software Engineer with 2+ years delivering enterprise intranet solutions.",
    images: ["/assets/profile.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nicolas Papageorgiou",
    url: siteUrl,
    jobTitle: "Graduate Software Engineer",
    alumniOf: "RMIT University",
    sameAs: [
      "https://github.com/NicolasP304",
      "https://linkedin.com/in/nicolas-r-papageorgiou"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
