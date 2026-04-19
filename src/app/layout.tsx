import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display, Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Boston Bakery & Café | Crafted Fresh. Served Warm.',
  description: 'Experience Bareilly’s most loved café. Fresh coffee, handcrafted desserts, and gourmet meals in a cozy, premium environment.',
  openGraph: {
    "title": "Boston Bakery & Café",
    "description": "Fresh coffee, desserts, and savory treats in Bareilly.",
    "siteName": "Boston Bakery & Café",
    "type": "website"
  },
};

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["600"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
