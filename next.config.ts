// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;





// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. ✅ STATIC EXPORT ENABLE KARNA (Bahut zaroori hai 'out' folder banane ke liye)
  output: 'export', 

  // 2. ✅ IMAGES KO UNOPTIMIZE KARNA (Kyunki static export mein image optimization kaam nahi karti)
  images: {
    unoptimized: true, 
  },

  // 3. Optional: Base path set karna agar aap sub-directory se deploy kar rahe hain (Netlify ke liye zaroori nahi)
  // basePath: '', 
};

export default nextConfig;