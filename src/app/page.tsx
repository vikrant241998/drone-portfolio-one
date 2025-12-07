"use client";
import Link from 'next/link';

// Agar aap component ke paas hi CSS rakhna chahte hain, toh 'Banner.module.css' use karein
// Ya phir aap isse globals.css mein bhi daal sakte hain
import './styles/home.css';

const Home = () => {
  // Aapke diye hue image ka URL (iska aspect ratio kafi wide hai)
  const imageUrl = "https://static.wixstatic.com/media/84770f_55e52c1ac81f450fadd6509cbc317d0b~mv2.jpg/v1/fill/w_7453,h_3354,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_55e52c1ac81f450fadd6509cbc317d0b~mv2.jpg";

  return (
    <div className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Background image CSS se handle hoga taaki woh cover ho */}
      </div>

      <div className="hero-content">
        {/* Content ke upar ek halka sa overlay lagana achcha hai taaki text dikhe */}
        <div className="content-overlay"></div>

        <div className="content-wrapper">
          <h1>
            {/* Charley Knox */}
            Charley Vikrant
          </h1>
          <p>
            DRONE PHOTOGRAPHY

          </p>

        </div>
      </div>
    </div>
  );
};

export default Home;