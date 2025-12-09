import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.column}>
                        <h3 className={styles.brand}>Kindredpath</h3>
                        <p className={styles.mission}>
                            Empowering families with hope and advanced fertility care. Your journey to parenthood starts here.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                            <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/booking">Book Appointment</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Our Services</h4>
                        <ul className={styles.links}>
                            <li><Link href="/services">IVF Treatment</Link></li>
                            <li><Link href="/services">IUI Procedure</Link></li>
                            <li><Link href="/services">Egg Freezing</Link></li>
                            <li><Link href="/services">Male Fertility</Link></li>
                            <li><Link href="/services">Surrogacy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Stay Updated</h4>
                        <p className={styles.text}>Subscribe to our newsletter for the latest fertility news and success stories.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Your email address" className={styles.input} />
                            <button type="submit" className={styles.submitBtn}><FaPaperPlane /></button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Kindredpath Fertility Center. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
