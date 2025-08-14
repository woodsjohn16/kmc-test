import { Metadata } from "next";
import { Geist, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700"],
  variable: '--font-open-sans',
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Molecular Gastronomy - The Science of Cooking",
  description: "Explore the science behind cooking with Hervé This, the father of molecular gastronomy. Learn about temperature control, flavor development, and the perfect egg technique.",
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className="min-h-screen bg-base-dark text-white selection:bg-white selection:text-base-dark">
        <div className={`${openSans.variable} ${geist.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
