import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.brandCorner}>
                Hyrdev
            </div>

            <div className={styles.mascotWrapper}>
                <div className={styles.mascotContainer}>
                    <div className={styles.glowEffect}></div>
                    <Image
                        src="/hyrdev_mascot.png"
                        alt="Hyrdev Global Connectivity"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            </div>

            <h1 className={styles.title}>
                Make your small business <br />
                <span className="gradient-text">truly global.</span>
            </h1>

            <p className={styles.description}>
                Premium websites at minimum charges. We help you reach a larger audience and grow your business without breaking the bank.
            </p>

            <div className={styles.ctaContainer}>
                <Link href="#" className="btn-primary">
                    Start Your Project
                </Link>
                <Link href="#" className={styles.secondaryBtn}>
                    View Portfolio
                </Link>
            </div>

            <div className={styles.versionBadge}>
                <span className={styles.statusDot}></span>
                Taking new clients
            </div>
        </section>
    );
};

export default Hero;
