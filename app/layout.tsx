import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ads by Effexia — Fueling Brands with Creative Fx",
  description:
    "Ads by Effexia is a creative branding and digital marketing agency helping businesses grow through innovative branding, strategic marketing, content creation, and high-quality media production.",
  metadataBase: new URL("https://adsbyeffexia.com"),
  openGraph: {
    title: "Ads by Effexia — Fueling Brands with Creative Fx",
    description:
      "We transform businesses into memorable brands through strategic marketing, creative storytelling, branding, and digital innovation.",
    siteName: "Ads by Effexia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
