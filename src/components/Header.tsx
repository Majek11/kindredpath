'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.png"
                            alt="Kindredpath Logo"
                            width={150}
                            height={40}
                            className={styles.logoImage}
                            priority
                        />
                    </div>
                </Link>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link href="/services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link href="/booking" className={`btn btn-primary ${styles.mobileBtn}`} onClick={() => setIsMenuOpen(false)}>
                        Book Appointment
                    </Link>
                </nav>

                <div className={styles.desktopBtn}>
                    <Link href="/booking" className="btn btn-primary">
                        Book Appointment
                    </Link>
                </div>
            </div>
        </header>
    );
}
