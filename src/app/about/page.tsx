'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const teamRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${styles.textBlock}`, {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(`.${styles.imageBlock}`, {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2
            });
        });

        return () => ctx.revert();
    }, []);

    const team = [
        { name: "Mrs Aiyeonegun", role: "Medical Director", image: "/images/expert-1.jpg" },
        { name: "Dr. Adegoke", role: "Senior Embryologist", image: "/images/expert-2.jpg" },
        { name: "Mrs. Awopetu Esther O.", role: "Fertility Nurse", image: "/images/expert-3.jpg" },
        { name: "Team Member", role: "Fertility Specialist", image: "/images/expert-4.jpg" },
        { name: "Team Member", role: "Fertility Specialist", image: "/images/expert-5.jpg" },
        { name: "Team Member", role: "Fertility Specialist", image: "/images/expert-6.jpg" },
    ];

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        About <span className={styles.highlight}>Kindredpath</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Compassionate care, expert doctors, and advanced treatment all under one roof.
                        We are dedicated to helping you build your family.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection} ref={contentRef}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textBlock}>
                            <h2>Our Story</h2>
                            <p>
                                Kindredpath Fertility Center was founded with a simple yet profound mission: to bring hope to life.
                                We understand that the journey to parenthood can be challenging, which is why we have assembled a team
                                of world-class specialists dedicated to providing personalized, compassionate care.
                            </p>
                            <p>
                                Our state-of-the-art facility is equipped with the latest technology in reproductive medicine,
                                ensuring the highest success rates for our patients. But beyond the technology, it is our
                                human touch that sets us apart. We believe in treating the whole person, not just the condition.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            <div className={styles.decorativeBox}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.teamSection} ref={teamRef}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className="container">
                    <h2 className={styles.faqTitle}>Common Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What makes Kindredpath different?</h3>
                            <p className={styles.faqAnswer}>We combine cutting-edge technology with a deeply personal approach. Every patient gets a customized treatment plan and a dedicated care team.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What are your success rates?</h3>
                            <p className={styles.faqAnswer}>Our success rates are consistently above the national average. We are transparent about our data and will discuss your specific chances of success during your consultation.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Do you offer financial counseling?</h3>
                            <p className={styles.faqAnswer}>Yes, we have dedicated financial counselors who can help you understand your insurance coverage and explore financing options.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How long does the process take?</h3>
                            <p className={styles.faqAnswer}>The timeline varies depending on the treatment. An IVF cycle typically takes about 4-6 weeks, while other treatments may be shorter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
