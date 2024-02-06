import { Inter } from "next/font/google";
import "./globals.css";
import icon from "../public/android-chrome-512x512.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shashank | Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
