import styles from './ServiceCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    link: string;
    image?: string;
}

export default function ServiceCard({ title, description, icon, link, image }: ServiceCardProps) {
    return (
        <Link href={link} className={styles.card}>
            {image && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.iconOverlay}>{icon}</div>
                </div>
            )}
            <div className={styles.content}>
                {!image && <div className={styles.icon}>{icon}</div>}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <span className={styles.arrow}>Learn More &rarr;</span>
            </div>
        </Link>
    );
}
