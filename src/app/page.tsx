'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import styles from './page.module.css';
import { FaBaby, FaUserMd, FaHandHoldingHeart, FaDna, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const missionCtx = gsap.context(() => {
      gsap.from(`.${styles.missionCard}`, {
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, missionRef);

    const valuesCtx = gsap.context(() => {
      gsap.from(`.${styles.valueItem}`, {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, valuesRef);

    const servicesCtx = gsap.context(() => {
      gsap.from(servicesRef.current?.children || [], {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, servicesRef);

    return () => {
      missionCtx.revert();
      valuesCtx.revert();
      servicesCtx.revert();
    };
  }, []);

  const services = [
    { title: "IVF", description: "In Vitro Fertilization using own or donor cycle.", icon: <FaBaby />, link: "/services", image: "/hero-family.png" },
    { title: "IUI", description: "Intrauterine Insemination for assisted reproduction.", icon: <FaUserMd />, link: "/services", image: "/stats-bg.png" },
    { title: "Surrogacy", description: "Compassionate surrogacy programs for growing families.", icon: <FaHandHoldingHeart />, link: "/services", image: "/hero-family.png" },
    { title: "Cryopreservation", description: "Egg, sperm, and embryo freezing for future family planning.", icon: <FaDna />, link: "/services", image: "/stats-bg.png" },
  ];

  const values = [
    { title: "Compassion", description: "We treat every patient with kindness, empathy, and respect, understanding the emotional journey of fertility." },
    { title: "Ethical Integrity", description: "We adhere to the highest ethical standards, ensuring transparency and honesty in all our treatments." },
    { title: "Collaboration", description: "We work together as a team and with our patients to achieve the best possible outcomes." },
    { title: "Innovation", description: "We continuously adopt the latest advancements in reproductive medicine to improve success rates." },
    { title: "Excellence", description: "We strive for excellence in every aspect of our care, from clinical procedures to patient support." },
  ];

  const team = [
    { name: "Prof Adewunmi Adeniyi", role: "Head. Institute of Fertility Medicine Department Obstetrics and Gynaecology Lagos State University Teaching Hospital", image: "/images/expert-5.jpg" },
    { name: "Dr Mrs Ottun Abimbola .T", role: "Head of Department Obstetrics and GynaecologyLagos state university teaching Hospital", image: "/images/expert-4.jpg" },
    { name: "Dr. Adegoke", role: "Fertility Specialist", image: "/images/expert-2.jpg" },
    { name: "Dr. Alausa", role: "Fertility Specialist", image: "/images/expert-6.jpg" },
    { name: "Mrs. Awopetu Esther O.", role: "Head of Fertility Nurse", image: "/images/expert-3.jpg" },
    { name: "Mrs Olaniyi", role: "Fertility Nurse", image: "/images/expert-1.jpg" },
    { name: "The Nursing Team", role: "Nursing Team", image: "/images/Nursing-team.jpg" },
    { name: "Mrs. Sholesi", role: "Head of Embryology", image: "/images/Sholesi.jpg" },
    { name: "Embryology Team", role: "Embryology Team", image: "/images/Embryologists.jpg" },
    { name: "Administrative Staff", role: "Administrative Team", image: "/images/Administrative Staff.jpeg" },
    { name: "Client Service Executives", role: "Client Service Executives", image: "/images/Client service exec.jpeg" },
  ];

  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <StatsSection />

      <section className={styles.missionSection} ref={missionRef}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                To provide compassionate, patient-centered fertility care that empowers individuals and couples to build their families.
                We are dedicated to excellence in reproductive medicine, combining cutting-edge technology with a human touch.
              </p>
              <p>
                We believe that everyone deserves the chance to experience the joy of parenthood, and we are here to make that dream a reality.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.decorativeCircle}></div>
              <div className={styles.glassCard}>
                <h3>Our Vision</h3>
                <p>
                  To be the leading fertility center recognized for our high success rates, ethical standards, and unwavering commitment to patient well-being.
                  We strive to create a world where hope is never lost and every family has a path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection} ref={valuesRef}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {index === 0 && <FaHandHoldingHeart />}
                  {index === 1 && <FaUserMd />}
                  {index === 2 && <FaStar />}
                  {index === 3 && <FaDna />}
                  {index === 4 && <FaBaby />}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>Comprehensive fertility care tailored to your journey.</p>
          <div className={styles.servicesGrid} ref={servicesRef}>
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className={styles.centerBtn}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
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

      <CTASection />
      <Footer />
    </main>
  );
}
