import React, { useState, useEffect, useRef } from 'react';

const MouseParticles = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationRef = useRef(null);
    const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;
                this.life = 1;
                this.decay = Math.random() * 0.03 + 0.02;
                this.isGreen = Math.random() > 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
            }

            draw(ctx) {
                if (this.life <= 0) return;
                ctx.globalAlpha = this.life * 0.6;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.isGreen ? '#0EB981' : '#002147';
                ctx.fill();
            }
        }

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Throttle: only create particles every 50ms
            if (now - lastMouseRef.current.time < 50) return;
            lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now };

            // Add only 2 particles per move
            for (let i = 0; i < 2; i++) {
                particlesRef.current.push(new Particle(e.clientX, e.clientY));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Filter and limit particles
            particlesRef.current = particlesRef.current.filter(p => p.life > 0).slice(-50);

            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    );
};

export default MouseParticles;
