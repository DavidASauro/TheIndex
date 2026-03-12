import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Fraunces,
  Nunito,
  Indie_Flower,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["600", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "400"],
  style: ["italic", "normal"],
});

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Index",
  description: "A place where I can show all the fun things I made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${nunito.variable} ${indieFlower.variable} flex flex-col antialiased `}
        style={{
          backgroundColor: "#3b1c00",
          backgroundImage: `url("/bg-texture.png")`,
          backgroundRepeat: "repeat, repeat",
          backgroundSize: "auto, auto",
          backgroundBlendMode: "overlay",
        }}
      >
        <main className="flex-1">{children}</main>
        <footer className="text-center mb-5 mt-10 font-nunito text-[#805428] italic font-bold">
          Thank you for checking out my work 😊 !
        </footer>
      </body>
    </html>
  );
}

/*className="dark"*/
