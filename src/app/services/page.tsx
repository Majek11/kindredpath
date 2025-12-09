'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import styles from './page.module.css';
import { FaBaby, FaUserMd, FaHandHoldingHeart, FaDna, FaMicroscope, FaStethoscope, FaNotesMedical, FaLaptopMedical, FaSyringe, FaUserNurse } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(gridRef.current?.children || [], {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out"
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    const services = [
        { title: "IVF", description: "In Vitro Fertilization using own cycle and donor cycle for optimal success rates.", icon: <FaBaby />, link: "#" },
        { title: "IUI", description: "Intrauterine Insemination, a less invasive fertility treatment option.", icon: <FaUserMd />, link: "#" },
        { title: "Surrogacy", description: "Comprehensive surrogacy programs supporting intended parents and surrogates.", icon: <FaHandHoldingHeart />, link: "#" },
        { title: "Ovarian Rejuvenation", description: "Advanced therapies to improve ovarian function and egg quality.", icon: <FaMicroscope />, link: "#" },
        { title: "Embryo Cryopreservation", description: "Freezing embryos for future use, preserving fertility potential.", icon: <FaDna />, link: "#" },
        { title: "Endometrial Rejuvenation", description: "Treatments to improve the endometrial lining for implantation.", icon: <FaStethoscope />, link: "#" },
        { title: "Oocytes Cryopreservation", description: "Egg freezing services for fertility preservation.", icon: <FaDna />, link: "#" },
        { title: "Semen Freezing", description: "Semen cryopreservation for future fertility needs.", icon: <FaDna />, link: "#" },
        { title: "Counselling", description: "Emotional support and guidance throughout your fertility journey.", icon: <FaUserNurse />, link: "#" },
        { title: "Consultation", description: "Expert medical consultations to plan your personalized treatment.", icon: <FaNotesMedical />, link: "#" },
        { title: "Scans", description: "Advanced ultrasound scans for monitoring and diagnosis.", icon: <FaLaptopMedical />, link: "#" },
        { title: "Semen Analysis", description: "Comprehensive analysis to assess male fertility health.", icon: <FaMicroscope />, link: "#" },
        { title: "Pregnancy Test", description: "Accurate and timely pregnancy testing services.", icon: <FaBaby />, link: "#" },
        { title: "Online Consultation", description: "Virtual consultations for convenience and accessibility.", icon: <FaLaptopMedical />, link: "#" },
        { title: "Cyst Drainage", description: "Minimally invasive procedures for cyst management.", icon: <FaSyringe />, link: "#" },
        { title: "Ascites Drainage", description: "Medical management of fluid accumulation.", icon: <FaSyringe />, link: "#" },
        { title: "Surgical Sperm Collection", description: "Procedures like TESA/PESA for male infertility.", icon: <FaUserMd />, link: "#" },
    ];

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>
                        Our <span className={styles.highlight}>Services</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Comprehensive, state-of-the-art fertility treatments tailored to your unique needs.
                        We combine advanced technology with compassionate care.
                    </p>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className="container">
                    <div className={styles.grid} ref={gridRef}>
                        {services.map((service, index) => (
                            <div key={index}>
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
