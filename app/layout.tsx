import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Nicolas Papageorgiou | Portfolio",
  description:
    "Graduate Software Engineer (RMIT, 2025). Enterprise delivery across PHP, JavaScript, Vue, MySQL, AWS, and production support.",
  openGraph: {
    title: "Nicolas Papageorgiou | Portfolio",
    description:
      "Graduate Software Engineer with 2+ years delivering enterprise intranet solutions.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>{children}</body>
    </html>
  );
}
