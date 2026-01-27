import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Dr. Wakil Ahmed",
  description:
    "Dr. Wakil Ahmed is on of the Best Orthopedic Surgeon in Dhaka, Bangladesh. He trained as an Orthopedic Surgeon in the National Institute of Traumatology and Orthopedic Rehabilitation (NITOR), Dhaka, Bangladesh and advanced training in Sports Medicine, Knee and Shoulder arthroscopy as well as hip/ knee replacement surgery in Singapore General Hospital. A Large portion of his practice is dedicated to Hip and Knee joint replacement surgery and Arthroscopic surgery of knee and shoulder joint. He is well trained in trauma surgery also. He has done more than 5000 arthroscopic surgery of knee and about 300 Total Knee and Hip joint replacement surgery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
