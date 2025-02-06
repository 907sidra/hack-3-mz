import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Announc } from "./components/announcment";
import Header from "./components/Header";
import Footer from "./components/footer";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
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
   <html lang="en">
      <body>
        <ClerkProvider>
        <SignedOut>
                   <SignInButton />
                 </SignedOut>
                 <SignedIn>
                   <UserButton />
                 </SignedIn>
          <Announc />
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
    
          
          
    
  );
}
