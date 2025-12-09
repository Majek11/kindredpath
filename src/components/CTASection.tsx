import Link from 'next/link';
import styles from './CTASection.module.css';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Start Your Journey to<br />
                        Better Health
                    </h2>
                    <p className={styles.description}>
                        Take the first step toward recovery with our compassionate team by your side. We are here to support you every step of the way.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Talk to a Doctor
                    </Link>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Using a placeholder or existing image since generation is limited */}
                    <div className={styles.placeholderImage}>
                        <Image
                            src="/doctor-1.png"
                            alt="Doctor"
                            width={400}
                            height={400}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
