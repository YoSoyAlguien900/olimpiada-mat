'use client';

import { useEffect, useRef } from 'react';

/**
 * MathBackdrop — fondo animado con motivos matemáticos.
 *
 * Diseño: tres capas superpuestas con animación de parallax sutil.
 *  · Capa 1 (back): retícula geométrica de fondo + manchas radiales suaves.
 *  · Capa 2 (mid):  símbolos matemáticos flotando con derivas lentas.
 *  · Capa 3 (front): partículas brillantes minúsculas que orbitan.
 *
 * Renderizado por canvas para suavidad. Adaptado a claro/oscuro
 * por las CSS variables del tema. Posición `fixed` detrás de todo.
 */
export function MathBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + 'px';
      canvas!.style.height = height + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Detecta el tema actual leyendo las CSS variables
    function getColors() {
      const root = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.dataset.theme === 'dark';
      const vermillion = root.getPropertyValue('--vermillion').trim() || '#c63d2f';
      const ink = root.getPropertyValue('--ink').trim() || '#1a1612';
      return { isDark, vermillion, ink };
    }

    // Símbolos matemáticos que flotan en la capa media
    const glyphs = ['∫', '∑', 'π', '∞', '∂', '√', '∇', 'Δ', 'φ', 'ψ', 'θ', 'Σ', 'Π', 'λ', 'ζ', 'ξ', '∮', '⊕', '⊗', 'ℝ', 'ℕ', 'ℤ', 'ℂ', '∀', '∃', 'ℵ'];

    interface Floater {
      x: number;
      y: number;
      vx: number;
      vy: number;
      glyph: string;
      size: number;
      opacity: number;
      rot: number;
      vrot: number;
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
    }

    const floaters: Floater[] = [];
    const particles: Particle[] = [];

    function spawnFloater(): Floater {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08 - 0.04,
        glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
        size: 18 + Math.random() * 38,
        opacity: 0.04 + Math.random() * 0.07,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.002,
      };
    }

    function spawnParticle(): Particle {
      const maxLife = 8000 + Math.random() * 6000;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        r: 0.6 + Math.random() * 1.4,
        life: 0,
        maxLife,
      };
    }

    // Densidad proporcional al área
    const targetFloaters = Math.min(28, Math.max(12, Math.floor((width * height) / 70000)));
    const targetParticles = Math.min(70, Math.max(30, Math.floor((width * height) / 30000)));

    for (let i = 0; i < targetFloaters; i++) floaters.push(spawnFloater());
    for (let i = 0; i < targetParticles; i++) particles.push(spawnParticle());

    let lastT = performance.now();

    function draw(now: number) {
      const dt = Math.min(50, now - lastT);
      lastT = now;
      const { isDark, vermillion, ink } = getColors();

      ctx!.clearRect(0, 0, width, height);

      // -------- Capa 1: retícula sutil --------
      // Una rejilla diagonal muy tenue que da textura sin distraer
      ctx!.save();
      const gridStep = 64;
      const gridOpacity = isDark ? 0.04 : 0.06;
      ctx!.strokeStyle = isDark ? `rgba(232, 222, 197, ${gridOpacity})` : `rgba(26, 22, 18, ${gridOpacity})`;
      ctx!.lineWidth = 1;
      const offset = (now * 0.005) % gridStep;
      ctx!.beginPath();
      for (let x = -gridStep + offset; x < width + gridStep; x += gridStep) {
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x + height * 0.15, height);
      }
      for (let y = -gridStep + offset; y < height + gridStep; y += gridStep) {
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y + width * 0.05);
      }
      ctx!.stroke();
      ctx!.restore();

      // -------- Capa 1b: manchas radiales muy suaves --------
      // Dan profundidad y volumen, como si la página flotara
      ctx!.save();
      const blobs = [
        { cx: width * 0.15, cy: height * 0.2, r: width * 0.4, color: vermillion, alpha: isDark ? 0.06 : 0.04 },
        { cx: width * 0.85, cy: height * 0.7, r: width * 0.5, color: vermillion, alpha: isDark ? 0.05 : 0.03 },
        { cx: width * 0.5, cy: height * 0.5, r: width * 0.6, color: ink, alpha: isDark ? 0.03 : 0.0 },
      ];
      for (const b of blobs) {
        const drift = Math.sin(now * 0.0003 + b.cx * 0.001) * 30;
        const grad = ctx!.createRadialGradient(b.cx + drift, b.cy, 0, b.cx + drift, b.cy, b.r);
        grad.addColorStop(0, hexWithAlpha(b.color, b.alpha));
        grad.addColorStop(1, hexWithAlpha(b.color, 0));
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, width, height);
      }
      ctx!.restore();

      // -------- Capa 2: símbolos flotantes --------
      ctx!.save();
      ctx!.font = '600 1px var(--display, Georgia, serif)';
      for (const f of floaters) {
        f.x += f.vx * dt * 0.06;
        f.y += f.vy * dt * 0.06;
        f.rot += f.vrot * dt * 0.06;
        // Reaparecer por el lado opuesto
        if (f.x < -80) f.x = width + 80;
        if (f.x > width + 80) f.x = -80;
        if (f.y < -80) f.y = height + 80;
        if (f.y > height + 80) f.y = -80;

        ctx!.save();
        ctx!.translate(f.x, f.y);
        ctx!.rotate(f.rot);
        ctx!.font = `${f.size}px "Playfair Display", Georgia, serif`;
        ctx!.fillStyle = isDark
          ? `rgba(232, 222, 197, ${f.opacity})`
          : `rgba(26, 22, 18, ${f.opacity * 0.85})`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(f.glyph, 0, 0);
        ctx!.restore();
      }
      ctx!.restore();

      // -------- Capa 3: partículas brillantes --------
      ctx!.save();
      for (const p of particles) {
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life += dt;
        if (p.life > p.maxLife) {
          Object.assign(p, spawnParticle());
          p.life = 0;
        }
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          Object.assign(p, spawnParticle());
          p.life = 0;
        }
        // Fade in/out por vida
        const t = p.life / p.maxLife;
        const alpha = Math.sin(t * Math.PI) * (isDark ? 0.55 : 0.32);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = hexWithAlpha(vermillion, alpha);
        ctx!.fill();
      }
      ctx!.restore();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="math-backdrop" aria-hidden />;
}

function hexWithAlpha(hex: string, alpha: number): string {
  // hex puede venir como "#rrggbb" o "rgb(…)" o cualquier color con CSS válido
  if (hex.startsWith('#')) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  // Fallback: si no es hex, devuelve vermillion fijo
  const r = 198, g = 61, b = 47;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
