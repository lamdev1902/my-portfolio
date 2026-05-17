import type { Metadata } from "next";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import "./globals.css";
import { inter, specialElite } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "L",
  description: "Interactive portfolio and immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights/>
        </body>
    </html>
  );
}
