"use client";
import React, { useState } from 'react';
import styles from './Terminal.module.css';

const Terminal = () => {
    const [activeTab, setActiveTab] = useState('contact');

    const copyToClipboard = () => {
        navigator.clipboard.writeText("hello@hyrdev.com");
    };

    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <span className={styles.chevron}>⟩</span>
                <h2 className={styles.heading}>Get in Touch</h2>
            </div>

            <div className={styles.container}>
                <div className={`glass-panel ${styles.terminalWindow}`}>
                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.controls}>
                            <div className={`${styles.controlDot} ${styles.red}`}></div>
                            <div className={`${styles.controlDot} ${styles.yellow}`}></div>
                            <div className={`${styles.controlDot} ${styles.green}`}></div>
                        </div>

                        <div className={styles.tabs}>
                            <button
                                onClick={() => setActiveTab('contact')}
                                className={`${styles.tab} ${activeTab === 'contact' ? styles.tabActive : ''}`}
                            >
                                contact
                            </button>
                            <button
                                onClick={() => setActiveTab('hiring')}
                                className={`${styles.tab} ${activeTab === 'hiring' ? styles.tabActive : ''}`}
                            >
                                hiring
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className={styles.body}>
                        <div className={styles.commandLine}>
                            <span className={styles.prompt}>➜</span>
                            <span className={styles.tilde}>~</span>
                            <span className={styles.command}>
                                {activeTab === 'contact' ? 'mail -s "Let\'s Build" hello@hyrdev.com' : 'grep "looking for devs" .'}
                            </span>
                            <span className={styles.cursor}></span>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className={styles.copyBtn}
                        >
                            Copy Email
                        </button>
                    </div>
                </div>
                <p className={styles.note}>
                    Ready to go global? Drop us a line and let's start building your future.
                </p>
            </div>
        </section>
    );
};

export default Terminal;
