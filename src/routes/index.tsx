import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  Server,
  Gamepad2,
  Globe2,
  Cpu,
  HardDrive,
  ShieldCheck,
  BadgeCheck,
  Zap,
  Network,
  Check,
  Star,
  Mail,
  MessageCircle,
} from "lucide-react";
import { AuroraBackground, Particles } from "@/components/vyantara/Background";
import { Navbar } from "@/components/vyantara/Navbar";
import { Counter } from "@/components/vyantara/Counter";
import emblem from "@/assets/vyantara-emblem.jpg.asset.json";
import horizontal from "@/assets/vyantara-horizontal.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

/* -------------------------- SERVER RACK VISUAL -------------------------- */
function ServerVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Orbits */}
      <div className="absolute inset-0 rounded-full border border-white/5 animate-orbit" style={{ animationDuration: "40s" }} />
      <div className="absolute inset-8 rounded-full border border-white/5 animate-orbit" style={{ animationDuration: "28s", animationDirection: "reverse" }} />
      <div className="absolute inset-20 rounded-full border border-gold/20" />

      {/* Glow */}
      <div
        className="absolute inset-10 rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.55), transparent 60%)",
        }}
      />

      {/* Emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative animate-float">
          <div
            className="absolute -inset-8 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.35), transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <img
            src={emblem.url}
            alt="Vyantara emblem"
            className="relative h-64 w-64 object-contain drop-shadow-[0_20px_60px_rgba(212,175,55,0.35)]"
          />
        </div>
      </div>

      {/* Floating chips */}
      <FloatingChip className="top-6 left-2" delay={0}>
        <Cpu size={14} className="text-primary" /> EPYC 9004
      </FloatingChip>
      <FloatingChip className="top-10 right-0" delay={1.2}>
        <HardDrive size={14} className="text-gold" /> NVMe Gen4
      </FloatingChip>
      <FloatingChip className="bottom-16 left-0" delay={2.4}>
        <ShieldCheck size={14} className="text-primary" /> Anti-DDoS
      </FloatingChip>
      <FloatingChip className="bottom-4 right-6" delay={0.6}>
        <Zap size={14} className="text-gold" /> 10 Tbps
      </FloatingChip>
    </div>
  );
}

function FloatingChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute glass-strong rounded-full px-3 py-1.5 text-xs font-medium text-silver inline-flex items-center gap-1.5 animate-float ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: "9s" }}
    >
      {children}
    </div>
  );
}

/* ------------------------------- SECTIONS ------------------------------- */

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Particles count={30} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-silver">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              All systems operational · 99.99% uptime
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              <span className="text-silver-gradient">Premium Infrastructure</span>
              <br />
              <span className="shimmer-text">Built for Performance.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Enterprise-grade Cloud VPS, Minecraft Hosting, Web Hosting and
              Dedicated Servers powered by cutting-edge infrastructure with
              ultra-low latency across 150+ global edge locations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-[#0B0C0F] transition hover:scale-[1.03] active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg,#F4E4A1 0%,#D4AF37 55%,#8B6F1F 100%)",
                  boxShadow:
                    "0 20px 40px -15px rgba(212,175,55,0.6), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                Get Started
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-silver hover:border-gold/40 transition"
              >
                View Pricing
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><BadgeCheck size={14} className="text-gold" /> ISO 27001</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={14} className="text-gold" /> SOC 2 Type II</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={14} className="text-gold" /> GDPR Ready</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={14} className="text-gold" /> PCI DSS</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <ServerVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: 99.99, suffix: "%", decimals: 2, label: "Uptime SLA" },
    { value: 150, suffix: "+", decimals: 0, label: "Global Locations" },
    { value: 10, suffix: " Tbps", decimals: 0, label: "Network Capacity" },
    { value: 24, suffix: "/7", decimals: 0, label: "Expert Support" },
  ];
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-gold-gradient">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud VPS",
      desc: "Scalable virtual servers on Ryzen EPYC with NVMe storage. Deploy in under 30 seconds.",
      features: ["Ryzen EPYC 9004", "NVMe Gen4", "1 Gbps port"],
    },
    {
      icon: Gamepad2,
      title: "Minecraft Hosting",
      desc: "Low-latency game servers tuned for Java & Bedrock with modpack one-click installers.",
      features: ["Pterodactyl panel", "DDoS Game Shield", "Unlimited slots"],
    },
    {
      icon: Server,
      title: "Dedicated Server",
      desc: "Full-metal enterprise machines with IPMI and private networking, delivered same day.",
      features: ["Dual EPYC", "512 GB DDR5", "10 Gbps uplink"],
    },
    {
      icon: Globe2,
      title: "Web Hosting",
      desc: "Managed, blazing-fast web hosting with LiteSpeed, free SSL, daily backups.",
      features: ["LiteSpeed + Redis", "Free CDN", "Auto backups"],
    },
  ];
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="A complete infrastructure suite"
          desc="From micro-VMs to full-metal machines — every product is engineered to the same premium standard."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl glass p-6 hover-lift hover:[--tw:none] animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
              onMouseEnter={(e) => e.currentTarget.classList.add("hover-lift-hover")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("hover-lift-hover")}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, rgba(212,175,55,0.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(59,130,246,0.18))",
                    border: "1px solid rgba(212,175,55,0.25)",
                  }}
                >
                  <s.icon size={20} className="text-gold" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-silver-gradient">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-silver/80">
                      <Check size={12} className="text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-gradient">
                  Explore <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const features = [
    { icon: Cpu, title: "Ryzen EPYC CPUs", desc: "Latest-gen AMD EPYC 9004 series with high core density and cache." },
    { icon: HardDrive, title: "Enterprise NVMe SSD", desc: "Datacenter-class Gen4 NVMe in RAID with millions of IOPS." },
    { icon: ShieldCheck, title: "Anti-DDoS Protection", desc: "Multi-layered Tbps-scale mitigation on every port, at no extra cost." },
    { icon: BadgeCheck, title: "99.99% SLA", desc: "Financially-backed uptime guarantee with transparent status page." },
    { icon: Zap, title: "Instant Deployment", desc: "New environments provisioned and online in under 30 seconds." },
    { icon: Network, title: "Global Network", desc: "10 Tbps backbone across 150+ locations for ultra-low latency." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Vyantara"
          title="Engineered without compromise"
          desc="Every layer of the stack — silicon, storage, network, software — is chosen for one thing: performance."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl glass p-6 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 group-hover:opacity-100 transition"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.35), transparent 60%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(212,175,55,0.12))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <f.icon size={22} className="text-silver" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorldMap() {
  const nodes = [
    { x: 18, y: 40, label: "SFO" },
    { x: 28, y: 38, label: "NYC" },
    { x: 46, y: 34, label: "LON" },
    { x: 52, y: 38, label: "FRA" },
    { x: 56, y: 46, label: "DXB" },
    { x: 70, y: 44, label: "MUM" },
    { x: 78, y: 40, label: "SGP" },
    { x: 84, y: 36, label: "TYO" },
    { x: 88, y: 62, label: "SYD" },
    { x: 34, y: 66, label: "GRU" },
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [2, 9], [1, 9],
  ];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Global Infrastructure"
          title="One network. Every continent."
          desc="150+ edge locations and a 10 Tbps private backbone deliver sub-30ms latency to 95% of internet users."
        />
        <div className="mt-14 relative rounded-3xl glass-strong overflow-hidden p-6 sm:p-10">
          <div className="relative aspect-[2/1] w-full">
            {/* Faint continents grid */}
            <div className="absolute inset-0 opacity-40 grid-bg" />

            <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="#D4AF37" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {links.map(([a, b], i) => {
                const A = nodes[a];
                const B = nodes[b];
                const midX = (A.x + B.x) / 2;
                const midY = Math.min(A.y, B.y) - 8;
                const d = `M ${A.x} ${A.y} Q ${midX} ${midY}, ${B.x} ${B.y}`;
                return (
                  <g key={i}>
                    <path d={d} stroke="url(#lineGrad)" strokeWidth="0.15" fill="none" opacity="0.6" />
                    <circle r="0.4" fill="#D4AF37">
                      <animateMotion dur={`${4 + (i % 5)}s`} repeatCount="indefinite" path={d} />
                    </circle>
                  </g>
                );
              })}
              {nodes.map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="0.8" fill="#D4AF37" />
                  <circle cx={n.x} cy={n.y} r="1.8" fill="none" stroke="#D4AF37" strokeOpacity="0.4">
                    <animate attributeName="r" values="1;3;1" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <text x={n.x + 1.5} y={n.y + 0.4} fontSize="1.6" fill="#E5E7EB" opacity="0.7">
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 9,
      tag: "For side projects & staging",
      features: ["2 vCPU EPYC", "4 GB DDR5 RAM", "60 GB NVMe", "1 Gbps · 5 TB traffic", "Anti-DDoS · Free SSL"],
      featured: false,
    },
    {
      name: "Professional",
      price: 29,
      tag: "For growing teams",
      features: ["6 vCPU EPYC", "16 GB DDR5 RAM", "240 GB NVMe", "1 Gbps · 20 TB traffic", "Snapshots + Priority Support", "Free CDN + DNS"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: 99,
      tag: "For production workloads",
      features: ["16 vCPU EPYC", "64 GB DDR5 RAM", "1 TB NVMe RAID", "10 Gbps · Unmetered", "Dedicated account manager", "99.99% SLA + Compliance"],
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent, premium, no lock-in"
          desc="Simple monthly plans. Cancel anytime. Every plan includes anti-DDoS, backups and 24/7 expert support."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 vy-price-grid">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "vy-price-card relative rounded-3xl p-8",
                p.featured ? "glass-strong animated-border is-featured" : "glass",
              ].join(" ")}
            >
              {p.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#0B0C0F]"
                  style={{ background: "linear-gradient(135deg,#F4E4A1,#D4AF37)" }}
                >
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-lg font-semibold text-silver-gradient">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.tag}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-display font-semibold text-white">${p.price}</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <a
                href="#"
                className={[
                  "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
                  p.featured
                    ? "text-[#0B0C0F] hover:scale-[1.02]"
                    : "text-silver border border-white/10 hover:border-gold/40",
                ].join(" ")}
                style={
                  p.featured
                    ? {
                        background:
                          "linear-gradient(135deg,#F4E4A1 0%,#D4AF37 55%,#8B6F1F 100%)",
                        boxShadow: "0 20px 40px -15px rgba(212,175,55,0.5)",
                      }
                    : undefined
                }
              >
                Choose {p.name} <ArrowRight size={14} />
              </a>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-silver/90">
                    <span
                      className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full"
                      style={{ background: "rgba(212,175,55,0.15)" }}
                    >
                      <Check size={10} className="text-gold" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Ananya Kapoor",
      role: "CTO, Northwind Studios",
      quote: "We migrated 40+ VMs to Vyantara. Latency dropped 38% and the panel is genuinely a pleasure to use.",
    },
    {
      name: "Marcus Lindqvist",
      role: "Founder, Hyperion Games",
      quote: "Our Minecraft network scaled to 20k CCU without a single tick drop. Support answers in minutes.",
    },
    {
      name: "Priya Raman",
      role: "Head of Platform, Vaultly",
      quote: "The dedicated EPYC machines outperform our previous provider by 2x — for less money.",
    },
    {
      name: "Julien Roche",
      role: "SRE, Fintech Labs",
      quote: "SLA is real. In 14 months we've seen zero incidents affecting our production workloads.",
    },
  ];
  const doubled = [...items, ...items];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Loved by teams"
          title="Trusted by engineering leaders"
          desc="From indie studios to publicly-traded companies — hear it from the operators."
        />
      </div>
      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
             style={{ background: "linear-gradient(90deg,#08090C,transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
             style={{ background: "linear-gradient(-90deg,#08090C,transparent)" }} />
        <div className="flex gap-5 animate-marquee will-change-transform" style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <figure
              key={i}
              className="w-[360px] shrink-0 rounded-2xl glass p-6"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-silver leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full inline-flex items-center justify-center font-display font-semibold text-[#0B0C0F]"
                  style={{ background: "linear-gradient(135deg,#F4E4A1,#D4AF37)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(600px circle at 50% 0%, rgba(212,175,55,0.25), transparent 60%), radial-gradient(500px circle at 50% 100%, rgba(59,130,246,0.25), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-silver-gradient">
              Ready to build something bigger?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Deploy your infrastructure with Vyantara Hosting today. Enterprise
              performance, boutique-grade support, zero compromise.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-[#0B0C0F] hover:scale-[1.03] transition"
                style={{
                  background:
                    "linear-gradient(135deg,#F4E4A1 0%,#D4AF37 55%,#8B6F1F 100%)",
                  boxShadow: "0 20px 40px -15px rgba(212,175,55,0.6)",
                }}
              >
                Start Now <ArrowRight size={16} />
              </a>
              <a
                href="#footer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-silver hover:border-gold/40 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="relative pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <img src={horizontal.url} alt="Vyantara Hosting" className="h-12 w-auto object-contain" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium infrastructure engineered for teams that don't settle. Cloud, game, dedicated & web hosting.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:border-gold/40 transition">
                <MessageCircle size={16} className="text-silver" />
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass hover:border-gold/40 transition">
                <Mail size={16} className="text-silver" />
              </a>
            </div>
          </div>
          {[
            { title: "Products", links: ["Cloud VPS", "Minecraft Hosting", "Dedicated Server", "Web Hosting"] },
            { title: "Company", links: ["About", "Careers", "Partners", "Press"] },
            { title: "Resources", links: ["Docs", "Status", "Blog", "Changelog"] },
            { title: "Legal", links: ["Terms", "Privacy", "SLA", "DPA"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-gradient font-semibold">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Vyantara Hosting. All rights reserved.</span>
          <span>Crafted with precision · Deployed on our own metal.</span>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold-gradient font-semibold vy-reveal">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-silver-gradient leading-[1.1] vy-section-title">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground vy-reveal-blur">{desc}</p>}
    </div>
  );
}

/* --------------------------------- PAGE --------------------------------- */

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Why />
        <WorldMap />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
