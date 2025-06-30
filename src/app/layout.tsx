import type { Metadata, Viewport } from "next";
import {Source_Sans_3} from "next/font/google"
import "./globals.css";


const font= Source_Sans_3({
  subsets:["latin"] ,
})


export const metadata: Metadata = {
  title: "Marlayer",
  description: "",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
