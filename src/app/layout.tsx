import type { Metadata, Viewport } from "next";
import {Source_Sans_3} from "next/font/google"
import "./globals.css";


const font= Source_Sans_3({
  subsets:["latin"] ,
})


export const metadata: Metadata = {
  title: "Marlayer",
  description: "",
  icons: {
    icon: '/favicon.ico', // Path relative to the public directory
    apple: '/apple-touch-icon.png', // For Apple devices
    shortcut: '/favicon-32x32.png',
    other: [
     { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
    ],
  },
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
      <body>{children}</body>
    </html>
  );
}
