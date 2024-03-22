import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paper Brain",
  description: "Paper Brain does the Reading, You do the Learning!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <ClerkProvider>
      <Providers>
        
          <body className={inter.className}>{children}</body>
           <Toaster />
      </Providers>
    </ClerkProvider>
    </html>
  );
}
