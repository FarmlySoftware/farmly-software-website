import { useEffect, useRef } from 'react';
import { useMotion } from '@/contexts/MotionContext';

interface TechIcon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: string;
  emoji: string;
  glowIntensity: number;
  hoverGlow: number;
}

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconsRef = useRef<TechIcon[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const { prefersReducedMotion } = useMotion();
  const networkNodesRef = useRef<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Tech icons with emojis
    const techTypes = [
      { type: 'gpu', emoji: '🖥️', size: 40 },
      { type: 'cpu', emoji: '⚡', size: 35 },
      { type: 'ram', emoji: '💾', size: 32 },
      { type: 'code', emoji: '💻', size: 38 },
      { type: 'cloud', emoji: '☁️', size: 36 },
      { type: 'database', emoji: '🗄️', size: 34 },
      { type: 'network', emoji: '🌐', size: 36 },
      { type: 'chip', emoji: '🔌', size: 30 }
    ];

    // Initialize floating tech icons
    const initIcons = () => {
      const iconCount = Math.floor((window.innerWidth * window.innerHeight) / 35000);
      iconsRef.current = [];
      
      for (let i = 0; i < iconCount; i++) {
        const tech = techTypes[Math.floor(Math.random() * techTypes.length)];
        iconsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: tech.size * (0.8 + Math.random() * 0.4),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          type: tech.type,
          emoji: tech.emoji,
          glowIntensity: 0.3 + Math.random() * 0.4,
          hoverGlow: 0
        });
      }
    };
    initIcons();

    // Initialize neural network nodes
    const initNetworkNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 50000);
      networkNodesRef.current = [];
      for (let i = 0; i < nodeCount; i++) {
        networkNodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        });
      }
    };
    initNetworkNodes();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.lineWidth = 1;
      networkNodesRef.current.forEach((node, i) => {
        networkNodesRef.current.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.globalAlpha = (1 - distance / 200) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw network nodes
      networkNodesRef.current.forEach(node => {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and animate tech icons
      iconsRef.current.forEach((icon) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - icon.x;
        const dy = mouseRef.current.y - icon.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isHovering = distance < 80;

        // Smooth hover glow transition
        if (isHovering) {
          icon.hoverGlow = Math.min(icon.hoverGlow + 0.05, 1);
        } else {
          icon.hoverGlow = Math.max(icon.hoverGlow - 0.05, 0);
        }

        // Mouse interaction - gentle push away
        if (distance < 150) {
          const force = (150 - distance) / 150;
          icon.vx += (dx / distance) * force * 0.03;
          icon.vy += (dy / distance) * force * 0.03;
        }

        // Apply friction
        icon.vx *= 0.98;
        icon.vy *= 0.98;

        // Update position
        icon.x += icon.vx;
        icon.y += icon.vy;
        icon.rotation += icon.rotationSpeed;

        // Wrap around edges
        if (icon.x < -icon.size) icon.x = canvas.width + icon.size;
        if (icon.x > canvas.width + icon.size) icon.x = -icon.size;
        if (icon.y < -icon.size) icon.y = canvas.height + icon.size;
        if (icon.y > canvas.height + icon.size) icon.y = -icon.size;

        // Draw icon with glow
        ctx.save();
        ctx.translate(icon.x, icon.y);
        ctx.rotate(icon.rotation);

        // Enhanced glow effect on hover
        const glowSize = icon.size * (1.5 + icon.hoverGlow * 0.5);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
        const baseGlow = icon.glowIntensity + icon.hoverGlow * 0.3;
        gradient.addColorStop(0, `rgba(16, 185, 129, ${baseGlow})`);
        gradient.addColorStop(0.5, `rgba(139, 195, 74, ${baseGlow * 0.5})`);
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw emoji icon with bounce effect
        const bounceScale = 1 + icon.hoverGlow * 0.15;
        ctx.font = `${icon.size * bounceScale}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(icon.emoji, 0, 0);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default FuturisticBackground;
