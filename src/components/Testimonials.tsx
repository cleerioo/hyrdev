import styles from './Testimonials.module.css';

const testimonials = [
    {
        text: "Hyrdev took my local bakery global. We're now shipping cookies to three different countries!",
        author: "Sarah Jenkins",
        role: "Owner, Sweet Treats"
    },
    {
        text: "I couldn't believe the quality for the price. My consulting business finally looks professional online.",
        author: "David Chen",
        role: "Chen Consulting"
    },
    {
        text: "Fast, reliable, and stunning design. Our online sales increased by 200% in the first month.",
        author: "Maria Rodriguez",
        role: "Founder, EcoStyle"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.chevron}>⟩</span>
                <h2 className={styles.heading}>Success Stories</h2>
            </div>

            <div className={styles.grid}>
                {testimonials.map((t, i) => (
                    <div key={i} className={`glass-panel ${styles.card}`}>
                        <p className={styles.quote}>"{t.text}"</p>
                        <div>
                            <div className={styles.author}>{t.author}</div>
                            <div className={styles.role}>{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
