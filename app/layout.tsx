import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Papageorgiou | Portfolio",
  description:
    "Graduate Software Engineer portfolio. PHP, JavaScript, Vue, MySQL, AWS, and enterprise delivery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
