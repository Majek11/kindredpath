'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StatsSection.module.css';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.card}`, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <h2 className={styles.title}>
                            Trusted Healthcare for<br />
                            <span className={styles.highlight}>Every Stage of Life</span>
                        </h2>
                        <p className={styles.description}>
                            With years of medical excellence, we provide world-class healthcare services backed by modern technology, skilled specialists, and personalized attention.
                        </p>
                    </div>
                    <Link href="/about" className={styles.link}>
                        More about us &nearr;
                    </Link>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/stats-bg.png"
                        alt="Doctor with patient"
                        fill
                        style={{ objectFit: 'cover' }}
                        className={styles.mainImage}
                    />

                    <div className={styles.cardsContainer} ref={cardsRef}>
                        <div className={styles.card}>
                            <div className={styles.cardValue}>100%</div>
                            <div className={styles.cardLabel}>Board Certified Doctors</div>
                        </div>
                        <div className={`${styles.card} ${styles.cardGlass}`}>
                            <div className={styles.cardValue}>35M+</div>
                            <div className={styles.cardLabel}>Patients Served Worldwide</div>
                        </div>
                        <div className={`${styles.card} ${styles.cardAccent}`}>
                            <div className={styles.cardValue}>99%</div>
                            <div className={styles.cardLabel}>Satisfaction Based on Surveys</div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardValue}>75+</div>
                            <div className={styles.cardLabel}>Team members</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
