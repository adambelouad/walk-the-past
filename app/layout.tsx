import type { Metadata } from "next";
import { Young_Serif, Hedvig_Letters_Serif } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
});

const hedvigLetters = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "WalkThePast",
  description: "A walking tour of the northern end of Central Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${hedvigLetters.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Nav />
        {children}
      </body>
    </html>
  );
}
