"use client";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBarProvider from "../context/Sidebarcontext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Resturant Demo",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarProvider>
          <div className="bg-[#1a031d] font-serif text-[#edd092]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </SideBarProvider>
      </body>
    </html>
  );
}
