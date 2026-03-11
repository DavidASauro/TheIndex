import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Nunito } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${nunito.variable} flex flex-col antialiased bg-[#F5F1E8] noise-bg min-h-screen`}
      >
        <main className="flex-1">{children}</main>
        <footer className="text-center mb-10 font-nunito text-[#805428] italic font-bold">
          Thank you for checking it out.
        </footer>
      </body>
    </html>
  );
}

/*className="dark"*/
