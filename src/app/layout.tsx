import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Northshore Handyman — Trusted Handyman in Glenfield & North Shore Auckland | Marc Hall',
  description: 'North Shore\'s most trusted handyman. 11+ years, 93.4% approval across 41 verified ratings. Decks, fencing, painting, repairs, joinery. Free same-day quotes. Call Marc on 022 329 9055.',
  openGraph: {
    "title": "Northshore Handyman — Trusted Handyman in Glenfield & North Shore Auckland",
    "description": "North Shore's most trusted handyman. 11+ years, 93.4% approval across 41 verified ratings.",
    "siteName": "Northshore Handyman",
    "type": "website"
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          
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
