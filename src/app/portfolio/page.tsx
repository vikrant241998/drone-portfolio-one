"use client";
import React, { useState } from 'react';
import '../styles/portfolio.css';

interface GalleryItemData {
    src: string;
    alt: string;
    caption: string;
}

const ALL_IMAGES: GalleryItemData[] = [
    { src: "https://images.unsplash.com/photo-1467864453741-7faf938e3bf0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 1", caption: "Portraits" },
    { src: "https://images.unsplash.com/photo-1523133045649-1a132addedd4?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 2", caption: "Places" },
    { src: "https://images.unsplash.com/photo-1599403868569-30dae419c0a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 3", caption: "Fashion" },
    { src: "https://images.unsplash.com/photo-1555867358-2745816780e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 4", caption: "Nature" },
    { src: "https://images.unsplash.com/photo-1523346728284-a3084608dead?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 5", caption: "Events" },
    { src: "https://plus.unsplash.com/premium_photo-1664801768789-41b5fd8c69e9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 7", caption: "Architecture" },
    { src: "https://images.unsplash.com/photo-1477899447710-90571e12f4ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 6", caption: "Still Life" },
    { src: "https://images.unsplash.com/photo-1520841852757-e40af9b5bd12?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 8", caption: "Travel" },
    { src: "https://images.unsplash.com/photo-1504890195358-94a018166410?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 9", caption: "Wildlife" },
    { src: "https://plus.unsplash.com/premium_photo-1664801768789-41b5fd8c69e9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "drone-image 10", caption: "Food" },
];

const INITIAL_LOAD_COUNT = 6;
const LOAD_MORE_STEP = 3;

const PortfolioPage = () => {

    const FILTERED_IMAGES = ALL_IMAGES.filter(item => item.src && item.src.length > 0);
    const totalImages = FILTERED_IMAGES.length;
    const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);


    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + LOAD_MORE_STEP, totalImages));
    };
    const hasMoreImages = visibleCount < totalImages;

    if (totalImages === 0) {
        return (
            <main className="portfolio-page-content dark-theme" style={{ textAlign: 'center', padding: '100px 20px' }}>
                <h1 className="page-title" >Recent Works</h1>
                <p style={{ fontSize: '1.2em', color: '#ff4500', marginTop: '20px' }}>
                    ❌ No Portfolio Images have been uploaded yet.
                </p>
            </main>
        );
    }

    return (
        <main className="portfolio-page-content dark-theme">
            <h1 className="page-title" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" >Recent Works</h1>

            <section className="image-gallery">
                {FILTERED_IMAGES.slice(0, visibleCount).map((item, index) => (
                    <div
                        key={index}
                        className="gallery-item "
                        data-aos="zoom-in-down"

                    >
                        <img
                            src={item.src}
                            alt={item.alt}

                        />
                        <div className="caption">{item.caption}</div>
                    </div>
                ))}
            </section>

            {hasMoreImages && (
                <div className="load-more-container">
                    <button
                        id="loadMoreBtn"
                        className="submit-button"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </button>
                </div>
            )}
        </main>
    );
};

export default PortfolioPage;