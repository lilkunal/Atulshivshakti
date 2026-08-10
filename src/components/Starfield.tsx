import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    const stars: { x: number; y: number; r: number; speed: number; opacity: number }[] = [];

    const starRgb =
      theme === "temple" ? "180, 83, 9" : "232, 213, 163";

    const resize = () => {
      const dpr = devicePixelRatio;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initStars = () => {
      stars.length = 0;
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          r: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.15 + 0.05,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.offsetHeight;
          star.x = Math.random() * canvas.offsetWidth;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starRgb}, ${star.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    const onResize = () => {
      resize();
      initStars();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
