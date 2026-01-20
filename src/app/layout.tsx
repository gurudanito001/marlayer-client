import type { Metadata, Viewport } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";


const font= Poppins({
  subsets:["latin"] ,
  weight:["100","200","300","400","500","600","700","800","900"],
})


export const metadata: Metadata = {
  title: "Marlayer",
  description: "",
  icons: {
    icon: '/images/marlayer-logo.svg', // Path relative to the public directory
    apple: '/apple-touch-icon.png', // For Apple devices
    shortcut: '/images/marlayer-logo.svg',
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
