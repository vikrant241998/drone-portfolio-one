// app/not-found.tsx

import Link from 'next/link';
import React from 'react';
// CSS path correct hona chahiye
import './styles/notFound.css'; 

// Agar aapka RootLayout header inject kar raha hai, toh poora structure override karna padega.
// Lekin Next.js App Router mein, jab aap not-found.tsx use karte hain,
// toh woh RootLayout ko bypass karta hai, provided ki woh root level par ho.

export default function NotFoundPage() {
    return (
        // Hum body/html tags yahaan nahi daalenge, kyunki Next.js khud inject karta hai.
        // Agar aap root level par hain, toh yeh container full screen hona chahiye.
        <main className="not-found-container dark-theme">
            
            {/* --- Error Content Box --- */}
            <div className="error-content">
                
                {/* Badi Error Code */}
                <h1 className="error-code">404</h1>
                
                {/* Main Message */}
                <h2 className="error-heading">A View Lost in the Clouds</h2>
                
                {/* Detailed Message */}
                <p className="error-message">
                    Sorry, the aerial path (page) you are looking for is off our radar. Perhaps you have entered the wrong coordinates.
                </p>
                
                {/* Home Button */}
                <Link href="/" passHref legacyBehavior>
                    <a className="submit-button home-button">
                        Back to Home
                    </a>
                </Link>
            </div>
        </main>
    );
}

// 📌 NOTE: Aapka CSS hi isko full screen aur header ke neeche se laayega.