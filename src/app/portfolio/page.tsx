// app/portfolio/page.tsx

"use client";

import React, { useState } from 'react';
// CSS file import ka path adjust karein agar zaroori ho
import '../styles/portfolio.css'; 

// --- Data Structure (Images ki details) ---
interface GalleryItemData {
    src: string;
    alt: string;
    caption: string;
}

// ✅ Saare Images ka data ek hi array mein
const ALL_IMAGES: GalleryItemData[] = [
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 1", caption: "Portraits" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 2", caption: "Places" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 3", caption: "Fashion" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 4", caption: "Nature" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 5", caption: "Events" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 6", caption: "Still Life" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 7", caption: "Architecture" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 8", caption: "Travel" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 9", caption: "Wildlife" },
    { src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Work 10", caption: "Food" },
];

const INITIAL_LOAD_COUNT = 6; // Pehle 6 images dikhani hain (2 rows in 3-column layout)
const LOAD_MORE_STEP = 3;    // Load More click par 3 images load karni hain

const PortfolioPage = () => {
    // State: Kitni images visible hain
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
    
    // Total images ka count
    const totalImages = ALL_IMAGES.length;

    // Load More button click handler
    const handleLoadMore = () => {
        // Current count mein step size add karo, lekin total count se zyada nahi
        setVisibleCount(prevCount => Math.min(prevCount + LOAD_MORE_STEP, totalImages));
    };

    // Check karein ki Load More button dikhana chahiye ya nahi
    const hasMoreImages = visibleCount < totalImages;

    return (
        <main className="portfolio-page-content dark-theme">
            <h1 className="page-title">Recent Works</h1>

            {/* --- Image Gallery Section --- */}
            <section className="image-gallery">
                {/* Array ko slice karke sirf visible images ko render karo */}
                {ALL_IMAGES.slice(0, visibleCount).map((item, index) => (
                    <div 
                        key={index} 
                        className="gallery-item"
                    >
                        <img 
                            src={item.src}
                            alt={item.alt}
                        />
                        <div className="caption">{item.caption}</div>
                    </div>
                ))}
            </section>
            
            {/* --- Load More Button Section --- */}
            {hasMoreImages && (
                <div className="load-more-container">
                    <button 
                        id="loadMoreBtn" 
                        className="submit-button"
                        onClick={handleLoadMore} // ✅ React ka onClick use kiya
                    >
                        Load More
                    </button>
                </div>
            )}
            
            {/* Agar saari images load ho gayi toh button apne aap hide ho jaayega */}

        </main>
    );
};

export default PortfolioPage;