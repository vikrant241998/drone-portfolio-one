// src/app/components/AosInit.tsx

"use client"; // 🔥 Ye AOS ko browser mein chalaane ke liye zaroori hai

import { useEffect } from 'react';
import AOS from 'aos';
// AOS CSS import ki zaroorat yahan nahi hai, humne use layout.tsx mein daal diya hai.

const AosInit = () => {
  useEffect(() => {
    // Component ke render hone ke baad AOS ko initialize karte hain
    AOS.init({
      // Global settings:
      duration: 1000, // Animation ki speed (1 second)
      once: true,    // Sirf ek baar animate ho (scroll up/down par repeat na ho)
      offset: 50,    // Kitne pixels pehle animation shuru ho
      easing: 'ease-in-out', // Smooth animation effect
    });

    // Agar kabhi aapko runtime par AOS ko update karna ho toh:
    // AOS.refresh(); 

  }, []); // Empty array ka matlab: sirf component load hone par ek baar run ho

  return null; // Yeh component screen par kuch nahi dikhayega, sirf library ko shuru karega
};

export default AosInit;