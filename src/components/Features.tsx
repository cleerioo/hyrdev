import styles from './Features.module.css';

const features = [
    {
        title: "Global Reach",
        description: "We optimize your site for international audiences, ensuring your business crosses borders effortlessly.",
        header: "Scale Up"
    },
    {
        title: "Minimum Charges",
        description: "Premium quality development at startup-friendly prices. No hidden fees, just great value.",
        header: "Affordable"
    },
    {
        title: "Premium Design",
        description: "World-class aesthetics that build trust and convert visitors into loyal customers.",
        header: "Quality"
    },
    {
        title: "SEO Optimized",
        description: "Built-in search engine optimization to help customers find you on Google, Bing, and beyond.",
        header: "Visibility"
    },
    {
        title: "Fast Delivery",
        description: "Get your business online in record time. We work fast so you can start selling sooner.",
        header: "Speed"
    },
    {
        title: "Full Support",
        description: "We don't just build and leave. We provide ongoing support to keep your site running smoothly.",
        header: "Reliable"
    }
];

const Features = () => {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <span className={styles.chevron}>⟩</span>
                <h2 className={styles.heading}>Why Choose Hyrdev?</h2>
            </div>

            <div className={styles.grid}>
                {features.map((f, i) => (
                    <div key={i} className={`glass-panel ${styles.card}`}>
                        <div className={styles.cardHeader}>
                            {f.header}
                        </div>
                        <h3 className={styles.cardTitle}>{f.title}</h3>
                        <p className={styles.cardDesc}>{f.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
