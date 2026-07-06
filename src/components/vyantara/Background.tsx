import { useEffect, useRef } from "react";

export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0" style={{ background: "#08090C" }} />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* aurora blobs */}
      <div
        className="absolute -top-1/3 -left-1/4 h-[70vh] w-[70vh] rounded-full opacity-60 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-1/2 -right-1/4 h-[80vh] w-[80vh] rounded-full opacity-50 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)",
          filter: "blur(90px)",
          animationDirection: "reverse",
          animationDuration: "28s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[60vh] w-[60vh] rounded-full opacity-40 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 60%)",
          filter: "blur(80px)",
          animationDuration: "34s",
        }}
      />
      {/* mouse spotlight */}
      <div
        ref={ref}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.10), transparent 55%)",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(8,9,12,0.85) 100%)",
        }}
      />
    </div>
  );
}

export function Particles({ count = 40 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 8 + Math.random() * 10;
        const gold = Math.random() > 0.6;
        return (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: gold ? "#D4AF37" : "#93C5FD",
              boxShadow: gold
                ? "0 0 10px rgba(212,175,55,0.8)"
                : "0 0 10px rgba(147,197,253,0.7)",
              opacity: 0.7,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
}
