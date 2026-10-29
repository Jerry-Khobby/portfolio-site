import React, { useEffect, useRef } from "react";

// Soft spotlight that follows the pointer behind the content.
// Only on devices with a real hover pointer.
const CursorEffects = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return undefined;
    const glow = glowRef.current;
    let frame = null;
    let point = null;

    const paint = () => {
      frame = null;
      glow.style.background = `radial-gradient(600px circle at ${point.x}px ${point.y}px, rgb(var(--c-glow) / var(--glow-alpha)), transparent 80%)`;
    };

    const onMove = (e) => {
      point = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden [@media(hover:hover)]:block"
    />
  );
};

export default CursorEffects;
