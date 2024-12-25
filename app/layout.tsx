import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Inter, Nunito } from "next/font/google";

import "./globals.css";

const dinProBOLD = localFont({
  src: "./fonts/DINProBold700.otf",
  variable: "--font-dinPro-mono",
  weight: "700",
  display: "swap",
});

const dinProMedium = localFont({
  src: "./fonts/DINProMedium500.otf",
  variable: "--font-dinPro-medium",
  weight: "500",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Amrutam Assignment",
    default: "Welcome | Amrutam Assignment",
  },
  description:
    "Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${nunito.variable} ${poppins.variable} ${dinProBOLD.variable} ${dinProMedium.variable} `}
    >
      <body className={`h-dvh antialiased relative  flex flex-col`}>
        {/* <body
        className={`h-dvh antialiased relative bg-orange-500 flex flex-col`}
      > */}
        {children}
      </body>
    </html>
  );
}
