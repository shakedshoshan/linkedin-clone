import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    
    <html lang="en">
        <body className="min-h-screen flex flex-col">
        
          {/* Toaster */}


          {/* Header */}
          <header className="border-b sticky top-0 bg-white z-50">
            <Header />
          </header>


          <div className="bg-[#F4F2ED] flex-1 w-full">
            <main>{children}</main>
          </div>
        </body>
      </html>
      </ClerkProvider>
  );
}
