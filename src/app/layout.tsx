import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
 // Isse apni app ke hisaab se change karna zaroori hai
 title: "Your App Name Here", 
 description: "A short description of your application.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  // Har website ka root element
  <html lang="en"> 
   {/* Body tag mein koi extra classes nahi hai */}
   <body>
    {/* Children prop mein aapke saare pages (routes) render honge */}
    <Header/>
    
    {children} 
   </body>
  </html>
 );
}
