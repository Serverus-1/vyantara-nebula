import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vyantara-emblem.jpg.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Cloud VPS", href: "#services" },
  { label: "Minecraft", href: "#services" },
  { label: "Dedicated", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#footer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      ].join(" ")}
    >
      <nav
        className={[
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
          scrolled
            ? "glass-strong shadow-elegant"
            : "bg-transparent border border-transparent",
        ].join(" ")}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        <a href="#home" className="flex items-center gap-3 group vy-logo-wrap">
          <span className="vy-logo-mark relative inline-flex h-10 w-10 items-center justify-center">
            <span className="vy-logo-orbit" aria-hidden />
            <span className="vy-logo-squircle">
              <img src={logo.url} alt="Vyantara" className="h-full w-full object-cover vy-logo-img" />
              <span className="vy-logo-sheen" aria-hidden />
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-wide text-silver-gradient vy-logo-text">
              VYANTARA
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold-gradient font-medium">
              HOSTING
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition rounded-lg group"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
                  style={{ background: "linear-gradient(90deg,#D4AF37,transparent)" }} />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#login"
            className="px-4 py-2 text-sm font-semibold text-silver hover:text-white transition"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#0B0C0F] transition hover:scale-[1.03] active:scale-95"
            style={{
              background: "linear-gradient(135deg,#F4E4A1 0%,#D4AF37 55%,#8B6F1F 100%)",
              boxShadow: "0 10px 30px -10px rgba(212,175,55,0.55), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Get Started
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-silver hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-6 mt-2 rounded-2xl glass-strong p-4 animate-fade-up">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-silver hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href="#login" className="rounded-lg border border-white/10 px-3 py-2 text-center text-sm">
              Login
            </a>
            <a
              href="#pricing"
              className="rounded-lg px-3 py-2 text-center text-sm font-semibold text-[#0B0C0F]"
              style={{ background: "linear-gradient(135deg,#F4E4A1,#D4AF37)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
