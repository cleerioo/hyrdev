'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import styles from './ContactForm.module.css';

import { submitInquiry } from '@/app/actions';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(formData: FormData) {
        const result = await submitInquiry(formData);

        if (result.success) {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } else {
            setStatus('error');
        }
    }

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Let&apos;s Build Something Amazing</h2>
                    <p className={styles.subtitle}>
                        Ready to take your business global? Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                </div>

                <form action={handleSubmit} className={styles.form}>
                    <div className={styles.grid}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className={styles.input}
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="service" className={styles.label}>Service Type</label>
                        <select id="service" name="service" className={styles.select}>
                            <option value="website">New Website</option>
                            <option value="redesign">Website Redesign</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className={styles.textarea}
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <SubmitButton />

                    {status === 'success' && (
                        <p className="text-green-500 text-center mt-4">Message sent successfully! We'll be in touch.</p>
                    )}
                </form>
            </div>
        </section>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={twMerge(styles.button, pending && 'opacity-70 cursor-not-allowed')}
        >
            {pending ? 'Sending...' : 'Send Message'}
        </button>
    );
}
