// import type { Metadata } from "next";
// import Header from "./components/Header";
// import "./globals.css";

// export const metadata: Metadata = {
//  // Isse apni app ke hisaab se change karna zaroori hai
//  title: "Your App Name Here", 
//  description: "A short description of your application.",
// };

// export default function RootLayout({
//  children,
// }: Readonly<{
//  children: React.ReactNode;
// }>) {
//  return (
//   // Har website ka root element
//   <html lang="en"> 
//    {/* Body tag mein koi extra classes nahi hai */}
//    <body>
//     {/* Children prop mein aapke saare pages (routes) render honge */}
//     <Header/>

//     {children} 
//    </body>
//   </html>
//  );
// }



// src/app/layout.tsx

// import type { Metadata } from "next";
// import Header from "./components/Header"; 
// import Footer from "./components/Footer";
// import AosInit from './components/AosInit'; // ✅ AosInit component import kiya
// import "./globals.css";


// // 1. 🔥 FIX: AOS CSS ko import kiya
// import 'aos/dist/aos.css'; 

// export const metadata: Metadata = {
//     title: "Your App Name Here", 
//     description: "A short description of your application.",
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en"> 
//             <body>
//                 {/* 2. 🔥 FIX: AosInit component ko body ke andar render kiya */}
//                 <AosInit /> 

//                 {/* Aapka Header aur Children (Pages) pehle ki tarah render honge */}
//                 <Header/> 

//                 {children} 
//                 <Footer/>
//             </body>
//         </html>
//     );
// }






// src/app/layout.tsx

"use client"; // 🔥 Poori file Client Component ban gayi

import { usePathname } from 'next/navigation'; // ✅ usePathname hook import kiya
import type { Metadata } from "next"; // Metadata client component mein kaam nahi karta

import Header from "./components/Header";
import Footer from "./components/Footer";
import AosInit from './components/AosInit';
import "./globals.css";
import 'aos/dist/aos.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();

    const shouldShowFooter = pathname !== '/';

    return (
        <html lang="en">
            <body>
                <AosInit />
                <Header />

                {children}
                {shouldShowFooter && <Footer />}
            </body>
        </html>
    );
}