"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import "../components/header.css";
import logo from "../../../public/assest/logo.png"
import Image from "next/image";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // ✅ FIX: Resize hone par menu close karne ke liye logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array rakho, taaki bar-bar check na kare


    const isHomePage = pathname === '/';
    const headerClass = `main-header ${isHomePage ? 'transparent-bg' : 'solid-bg'}`;
    return (

        <>
            {/* ✅ HEADER */}
            <header className={`main-header ${headerClass}`}>
                <Link href="/" className="logo-link">
                    <div className="logo">
                        <Image
                            src={logo}
                            alt="header Logo"
                        />
                    </div>
                </Link>

                <div className="menu-container">
                    {/* ✅ DESKTOP NAV */}
                    <div className="header-handler">
                        <nav className="desktop-nav">
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
                        </nav>

                        {/* ✅ RIGHT SIDE */}
                        <div className="header-right">
                            <div className="social-icons">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </div>

                            {/* ✅ HAMBURGER */}
                            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </button>

                        </div>
                    </div>
                </div>

                {/* ✅ MOBILE NAV */}
                <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
                        <li className="active"><Link href="/about-us" onClick={closeMenu}>About</Link></li>
                        <li><Link href="/contact-us" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header
