'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaUserMd, FaClock } from 'react-icons/fa';

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef1 = useRef(null);
    const badgeRef2 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 }
        )
            .fromTo(textRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
            .fromTo(imageRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo([badgeRef1.current, badgeRef2.current],
                { y: 20, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: "back.out(1.7)" },
                "-=0.4"
            );
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content} ref={textRef}>
                    <h1 className={styles.title}>
                        Your Family,<br />
                        <span className={styles.highlight}>Our Priority.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Compassionate care, expert doctors, and advanced treatment all under one roof to keep you and your family healthy.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Journey
                        </Link>
                        <div className={styles.stats}>
                            <div className={styles.avatars}>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/doctor-1.png)' }}></div>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/doctor-2.png)' }}></div>
                                <div className={styles.avatar} style={{ backgroundImage: 'url(/doctor-3.png)' }}></div>
                            </div>
                            <div className={styles.statsText}>
                                <span className={styles.statsCount}>5000+</span>
                                <span className={styles.statsLabel}>Trusted Families</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper} ref={imageRef}>
                    <div className={styles.heroImageContainer}>
                        <Image
                            src="/hero-family.png"
                            alt="Doctor consulting with family"
                            fill
                            style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                            priority
                        />
                    </div>

                    <div className={styles.badge} ref={badgeRef1} style={{ top: '10%', right: '-20px' }}>
                        <div className={styles.badgeIcon}><FaStar /></div>
                        <div className={styles.badgeText}>
                            <span className={styles.badgeValue}>4.9/5</span>
                            <span className={styles.badgeLabel}>Patient Rating</span>
                        </div>
                    </div>

                    <div className={styles.badge} ref={badgeRef2} style={{ bottom: '15%', left: '-30px' }}>
                        <div className={styles.badgeIcon} style={{ background: '#E6F4F1', color: '#00BFA5' }}><FaClock /></div>
                        <div className={styles.badgeText}>
                            <span className={styles.badgeValue}>24/7</span>
                            <span className={styles.badgeLabel}>Support Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
