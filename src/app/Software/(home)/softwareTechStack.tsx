"use client";

// Section 7 — Tech Stack
// Enterprise buyers especially want to know what you build with.
// SME buyers want to feel they're getting modern, not outdated, technology.
// Short, visual, credibility-building. No fluff.

const stackCategories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    label: "Database",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Integrations",
    techs: ["Stripe", "Paystack", "Flutterwave", "Twilio", "Sendgrid"],
  },
  {
    label: "Tooling",
    techs: ["Figma", "Linear", "Notion", "Sentry", "Datadog"],
  },
];

export default function SoftwareTechStack() {
  return (
    <section className="bg-[#0D2B1E] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-[#45B1A0] text-xs font-mono font-semibold tracking-widest uppercase mb-2">
              TECH_STACK
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Modern tools. Production-grade standards.
            </h2>
          </div>
          <p className="text-[#7AADA4] text-sm max-w-sm">
            We choose technology based on what&apos;s right for your project — not what&apos;s trendy. These are the tools we use in production every day.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-5"
            >
              <p className="text-[#45B1A0] text-[10px] font-mono font-bold tracking-widest uppercase mb-3">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-white/60 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs font-mono mt-8">
          // Don&apos;t see your preferred stack? We&apos;re flexible.{" "}
          <a href="/contact" className="text-[#45B1A0]/60 hover:text-[#45B1A0] transition-colors">
            Let&apos;s talk.
          </a>
        </p>
      </div>
    </section>
  );
}