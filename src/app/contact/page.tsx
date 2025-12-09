import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Contact <span className={styles.highlight}>Us</span>
                    </h1>
                    <p className={styles.subtitle}>
                        We are here to answer your questions and support you on your journey.
                        Reach out to us to schedule a consultation.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.infoBlock}>
                            <h2 className={styles.infoTitle}>Get in Touch</h2>
                            <p className={styles.infoText}>
                                Ready to take the next step? Our team is dedicated to providing you with the support and information you need.
                            </p>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Visit Us</h3>
                                    <p>123 Fertility Lane, Medical District<br />New York, NY 10001</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaPhone />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Call Us</h3>
                                    <p>+1 (555) 123-4567<br />Mon-Fri, 8am-6pm</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaEnvelope />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Email Us</h3>
                                    <p>contact@kindredpath.com<br />support@kindredpath.com</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaClock />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>Working Hours</h3>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formBlock}>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Full Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="Enter your full name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email Address</label>
                                    <input type="email" id="email" className={styles.input} placeholder="Enter your email address" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                    <input type="tel" id="phone" className={styles.input} placeholder="Enter your phone number" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea id="message" className={styles.textarea} placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How do I schedule a consultation?</h3>
                            <p className={styles.faqAnswer}>You can schedule a consultation by filling out the contact form above, calling our office directly, or using our online booking system.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Do you accept insurance?</h3>
                            <p className={styles.faqAnswer}>Yes, we work with most major insurance providers. Please contact our billing department for specific coverage details.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What should I bring to my first visit?</h3>
                            <p className={styles.faqAnswer}>Please bring your ID, insurance card, and any relevant medical records. We also recommend writing down any questions you may have.</p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Do you offer virtual appointments?</h3>
                            <p className={styles.faqAnswer}>Yes, we offer telehealth consultations for initial visits and follow-ups to make care more accessible.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
