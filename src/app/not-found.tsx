import Link from 'next/link';
import React from 'react';
import './styles/notFound.css'; 
export default function NotFoundPage() {
    return (
        <main className="not-found-container dark-theme">
            
            <div className="error-content">
                
                <h1 className="error-code">404</h1>
                
                <h2 className="error-heading">A View Lost in the Clouds</h2>
                
                <p className="error-message">
                    Sorry, the aerial path (page) you are looking for is off our radar. Perhaps you have entered the wrong coordinates.
                </p>
                
                <Link href="/" passHref legacyBehavior>
                    <a className="submit-button home-button">
                        Back to Home
                    </a>
                </Link>
            </div>
        </main>
    );
}
