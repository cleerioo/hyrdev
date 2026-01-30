import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Terminal from '@/components/Terminal';
import Features from '@/components/Features';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Testimonials />
      <Terminal />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}
