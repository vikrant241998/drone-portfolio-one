"use client";
import Link from 'next/link';
import './styles/home.css';

const Home = () => {
  // const imageUrl = "https://static.wixstatic.com/media/84770f_55e52c1ac81f450fadd6509cbc317d0b~mv2.jpg/v1/fill/w_7453,h_3354,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_55e52c1ac81f450fadd6509cbc317d0b~mv2.jpg";
  const imageUrl = "https://images.unsplash.com/photo-1514041884614-65858e220493?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>

      <div className="hero-content">
        <div className="content-overlay"></div>

        <div className="content-wrapper " data-aos="fade-right">
          <h1>
            Charley Knox
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