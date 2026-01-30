import Link from 'next/link';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.brandCol}>
                    <h3 className={styles.brand}>
                        Hyrdev
                    </h3>
                    <p className={styles.tagline}>
                        Making small businesses global. Premium websites at minimum charges.
                    </p>
                    <div className={styles.socials}>
                        <Link href="#" className={styles.socialIcon}>
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <Github size={20} />
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <MessageCircle size={20} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className={styles.colHeader}>Services</h4>
                    <ul className={styles.links}>
                        <li><Link href="#" className={styles.link}>Web Development</Link></li>
                        <li><Link href="#" className={styles.link}>SEO Optimization</Link></li>
                        <li><Link href="#" className={styles.link}>E-Commerce</Link></li>
                        <li><Link href="#" className={styles.link}>Global Scaling</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className={styles.colHeader}>Company</h4>
                    <ul className={styles.links}>
                        <li><Link href="#" className={styles.link}>About Us</Link></li>
                        <li><Link href="#" className={styles.link}>Portfolio</Link></li>
                        <li><Link href="#" className={styles.link}>Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Hyrdev. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
