"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Starfield.module.css';

const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setSize();
        window.addEventListener('resize', setSize);

        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.2 + 0.05,
            opacity: Math.random()
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#fff';

            stars.forEach(star => {
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', setSize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            style={{ opacity: 0.6 }}
        />
    );
};

export default Starfield;
