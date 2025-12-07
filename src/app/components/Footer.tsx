
"use client";
import React from 'react';
import Link from 'next/link';
import "../components/footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="main-footer-container" >
            <div className="footer-content-wrapper">

                <div className="footer-section brand-info">
                    <Link href="/" className="footer-logo">
                        <span className="logo-text">DRONE VISIONS 🚁</span>
                    </Link>
                    <p className="tagline">Elevating perspectives, one flight at a time.</p>
                    <p className="copyright-text">
                        &copy; {currentYear} DRONE VISIONS. All rights reserved.
                    </p>
                </div>

                <div className="footer-section quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="active">
                            <Link href="/about-us">About</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section contact-info">
                    <h4>Get In Touch</h4>
                    <p>
                        <a href="mailto:contact@dronevisions.com" className="contact-link" >
                            Email: contact@dronevisions.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+919876543210" className="contact-link">
                            Phone: +91 98765 43210
                        </a>
                    </p>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
            </div>
        </footer>
    );
};

export default Footer;