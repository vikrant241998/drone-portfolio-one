import React from 'react';
import Image from 'next/image';
import '../styles/about.css';
import drone_two from "../../../public/assest/drone_two.jpg"


const AboutUsPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-handler">
          <div className="about-content-handler">
            <h2> Drone Photography
            </h2>
            <p>Drone photography is a modern and powerful form of visual art that uses unmanned aerial vehicles (drones) to capture stunning images and videos from the sky. It allows photographers to achieve unique angles, wide perspectives, and dramatic views that are impossible with traditional cameras. Drone photography is widely used in fields such as real estate, tourism, weddings, filmmaking, agriculture, and event coverage. With its ability to fly at different heights and move smoothly across landscapes, drone photography adds a cinematic and professional touch to visual content. As technology continues to improve, drone photography is becoming more accessible, creative, and impactful in today’s digital world.</p>

          </div>
          <div className="about-img-handler">
            <Image
              src={drone_two}
              alt="about us drone image"
              layout="responsive"
              width={700} 
              height={500} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;