import React, { useEffect, useRef } from "react";

const RING = 26;
const RING_HOVER = 48;

// Soft spotlight behind the content plus a ring that trails the pointer and
// grows over links and buttons. Hidden on touch devices; the ring stops
// easing when the user prefers reduced motion.
const CursorEffects = () => {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return undefined;
    const glow = glowRef.current;
    const ring = ringRef.current;
    let frame = null;
    let point = null;

    const paint = () => {
      frame = null;
      const { x, y, hover } = point;
      const size = hover ? RING_HOVER : RING;
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.2), transparent 80%)`;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.background = hover ? "rgba(94, 234, 212, 0.12)" : "transparent";
      ring.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
      ring.style.opacity = "1";
    };

    const onMove = (e) => {
      point = { x: e.clientX, y: e.clientY, hover: !!e.target.closest?.("a, button") };
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 hidden [@media(hover:hover)]:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{ width: RING, height: RING }}
        className="pointer-events-none fixed left-0 top-0 z-50 hidden rounded-full border border-accent/75 opacity-0 [transition:transform_.14s_ease-out,width_.2s_ease,height_.2s_ease,background_.2s_ease,opacity_.3s_ease] motion-reduce:[transition:opacity_.3s_ease] [@media(hover:hover)]:block"
      />
    </>
  );
};

export default CursorEffects;
