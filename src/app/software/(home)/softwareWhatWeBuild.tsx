"use client";

// Section 3 — What We Build
// Shows capability depth without being a feature list.
// Framed around outcomes, not technologies.
// "Techy but clear" — industry standard like Vercel/Linear service pages.

const services = [
  {
    code: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Brand & Web Systems",
    subtitle: "For businesses competing globally",
    description:
      "Not a template. A system. We design and build web presences that position you as a global player — with conversion architecture, SEO foundations, and the integrations that make your operations look enterprise-grade.",
    stack: ["Next.js", "TypeScript", "CMS", "SEO", "Analytics"],
    outcomes: ["Higher quality inbound leads", "Credibility that closes deals", "Operates without you"],
    audience: "SME",
  },
  {
    code: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web & Mobile Applications",
    subtitle: "Products built to ship and scale",
    description:
      "From MVPs that validate an idea quickly to full-scale products built for growth — we architect, design, and ship web and mobile applications that work reliably under real-world conditions.",
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "AWS"],
    outcomes: ["Ship your product fast", "Built to scale from day one", "Real users, real feedback"],
    audience: "BOTH",
  },
  {
    code: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Dashboards & Data Platforms",
    subtitle: "Turn operations into insight",
    description:
      "We build internal dashboards, reporting tools, and data platforms that give decision-makers real-time visibility into what matters. Stop exporting to spreadsheets — see everything in one place.",
    stack: ["React", "D3.js", "REST APIs", "PostgreSQL", "Redis"],
    outcomes: ["Decisions backed by live data", "Replaces 5 different reports", "One source of truth"],
    audience: "ENTERPRISE",
  },
  {
    code: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Custom Enterprise Software",
    subtitle: "Problems no off-the-shelf tool can solve",
    description:
      "Your organization has workflows, rules, and edge cases that standard software ignores. We go deep on your process and build the exact tool your team needs — internal systems, automation engines, and niche industry platforms.",
    stack: ["Custom APIs", "Microservices", "DevOps", "CI/CD", "Cloud"],
    outcomes: ["Eliminates manual workarounds", "Adopted by your actual team", "Maintained and evolved"],
    audience: "ENTERPRISE",
  },
  {
    code: "05",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "API Design & Integrations",
    subtitle: "Make your tools actually talk to each other",
    description:
      "Your CRM doesn't sync with your billing. Your ops tool doesn't connect to your analytics. We design and build the integrations and APIs that stitch your tech stack into a coherent, efficient system.",
    stack: ["REST", "GraphQL", "Webhooks", "OAuth", "Zapier"],
    outcomes: ["No more data silos", "Automated hand-offs between tools", "Single source of truth"],
    audience: "BOTH",
  },
  {
    code: "06",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Ongoing Maintenance & Growth",
    subtitle: "We don't disappear after launch",
    description:
      "Software needs care after it ships. We offer retainer-based partnerships for maintenance, performance improvements, new feature development, and technical consultation as your business evolves.",
    stack: ["Monitoring", "Security patches", "Performance", "Feature dev"],
    outcomes: ["No surprise breakdowns", "Evolves with your business", "One technical partner"],
    audience: "BOTH",
  },
];

const audienceBadge: Record<string, string> = {
  SME: "text-[#45B1A0] bg-[#45B1A0]/10 border-[#45B1A0]/20",
  ENTERPRISE: "text-white/60 bg-white/5 border-white/10",
  BOTH: "text-[#45B1A0]/70 bg-[#45B1A0]/5 border-[#45B1A0]/15",
};
const audienceLabel: Record<string, string> = {
  SME: "Growing Businesses",
  ENTERPRISE: "Enterprises",
  BOTH: "All Businesses",
};

export default function SoftwareWhatWeBuild() {
  return (
    <section className="bg-[#0D2B1E] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-3">
              CAPABILITIES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              We don&apos;t just write code.
              <br />We build systems.
            </h2>
            <p className="text-primary-2 leading-relaxed">
              Every engagement starts with understanding your business deeply.
              Then we build the right thing — not the easiest thing.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#45B1A0]/40 text-[#45B1A0] hover:bg-[#45B1A0]/10 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            Discuss your project →
          </a>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.code}
              className="group relative bg-white/[0.03] border border-white/8 hover:border-[#45B1A0]/40 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]"
            >
              {/* Code number — watermark style */}
              <span className="absolute top-5 right-5 text-white/5 text-4xl font-bold font-mono select-none">
                {s.code}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#45B1A0]/10 border border-[#45B1A0]/20 flex items-center justify-center text-[#45B1A0] mb-5 group-hover:bg-[#45B1A0]/15 transition-colors">
                {s.icon}
              </div>

              {/* Audience badge */}
              <span className={`inline-flex items-center text-[9px] font-mono font-bold tracking-widest uppercase border px-2.5 py-1 rounded-full mb-3 ${audienceBadge[s.audience]}`}>
                {audienceLabel[s.audience]}
              </span>

              {/* Title & subtitle */}
              <h3 className="text-white font-bold text-base mb-1">{s.title}</h3>
              <p className="text-[#45B1A0] text-xs font-semibold mb-3">{s.subtitle}</p>

              {/* Description */}
              <p className="text-[#7AADA4] text-sm leading-relaxed mb-5">{s.description}</p>

              {/* Outcomes */}
              <ul className="space-y-1.5 mb-5">
                {s.outcomes.map((o) => (
                  <li key={o} className="text-xs text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#45B1A0] flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {s.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-white/30 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}