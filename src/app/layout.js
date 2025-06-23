/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce App",
  description: "Build by Marsa Dembi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link rel="stylesheet" href="/assets/libs/tiny-slider/tiny-slider.css" />
        <link rel="stylesheet" href="/assets/libs/tobii/css/tobii.min.css" />
        <link rel="stylesheet" href="/assets/libs/choices.js/public/assets/styles/choices.min.css" />
        <link rel="stylesheet" href="/assets/libs/swiper/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/libs/@iconscout/unicons/css/line.css" />
        <link rel="stylesheet" href="/assets/libs/@mdi/font/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/assets/css/tailwind.css" />
        <link rel="stylesheet" href="/assets/css/output.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>

        <script src="/assets/libs/tiny-slider/min/tiny-slider.js" />
        {/* <script src="/assets/libs/gumshoejs/gumshoe.polyfills.min.js" /> */}
        <script src="/assets/libs/tobii/js/tobii.min.js" />
        <script src="/assets/libs/choices.js/public/assets/scripts/choices.min.js" />
        <script src="/assets/libs/swiper/js/swiper.min.js" />
        <script src="/assets/js/easy_background.js" />
        <script src="/assets/libs/feather-icons/feather.min.js" />
        <script src="/assets/js/plugins.init.js" />
        <script src="/assets/js/app.js" />
      </body>
    </html>
  );
}
