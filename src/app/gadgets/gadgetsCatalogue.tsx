"use client";

// Section 6 — Product Catalogue (B2B framed)
// Goal: Show products AFTER trust is built. Frame categories around business use cases.
// Includes a "Buying for your business?" CTA throughout.

const categories = [
  {
    id: "laptops",
    label: "For Remote & Office Teams",
    category: "Laptops & Workstations",
    description:
      "High-performance laptops for developers, designers, finance teams, and executives. All sourced, verified, and available pre-configured.",
    href: "/gadgets/Laptops",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Flaptop.png&w=800&q=75",
    tag: "Most Requested",
    tagColor: "bg-[#E8EEFF] text-[#0055FF]",
    specs: ["MacBook Pro", "Dell XPS", "HP EliteBook", "Lenovo ThinkPad"],
  },
  {
    id: "phones",
    label: "For Field & Executive Teams",
    category: "Business Smartphones",
    description:
      "Premium smartphones for your client-facing and field teams. Bulk orders available with MDM pre-configuration on request.",
    href: "/gadgets/Phones",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Fphones.png&w=800&q=75",
    tag: "Bulk Orders Available",
    tagColor: "bg-[#D1FAE5] text-[#059669]",
    specs: ["Google Pixel", "Samsung Galaxy", "iPhone", "Business Android"],
  },
  {
    id: "accessories",
    label: "For Complete Office Setups",
    category: "Peripherals & Accessories",
    description:
      "Monitors, keyboards, mice, headsets, webcams, and networking gear. Everything your team needs to work at full capacity.",
    href: "/gadgets/accessories",
    image: "https://www.marlayer.com/_next/image?url=%2Fimages%2Faccesories.png&w=800&q=75",
    tag: "Bundle Deals",
    tagColor: "bg-[#FEF3C7] text-[#D97706]",
    specs: ["Monitors", "Keyboards & Mice", "Headsets", "Networking"],
  },
];

export default function GadgetsCatalogue() {
  return (
    <section className="bg-[#F7F8FC] border-y border-[#E4E8F0] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-[#0055FF] text-xs font-semibold tracking-widest uppercase mb-3 block">
              Our Product Range
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-tight mb-3">
              The right tool for every role in your business.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              All products come with Marlayer&apos;s full procurement service —
              verification, configuration, warranty, and support included.
            </p>
          </div>
          <a
            href="/gadgets"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-[#CBD2E0] text-[#374151] hover:border-[#0055FF] hover:text-[#0055FF] font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200"
          >
            Browse full catalogue →
          </a>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group bg-white border border-[#E4E8F0] rounded-2xl overflow-hidden hover:border-[#0055FF] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative bg-[#F7F8FC] h-44 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.category}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${cat.tagColor}`}>
                  {cat.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#0055FF] text-xs font-semibold uppercase tracking-widest mb-1">
                  {cat.label}
                </p>
                <h3 className="text-[#0A0A0A] font-bold text-lg mb-2">
                  {cat.category}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Spec pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.specs.map((spec) => (
                    <span
                      key={spec}
                      className="bg-[#F7F8FC] border border-[#E4E8F0] text-[#374151] text-xs px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[#0055FF] text-sm font-semibold group-hover:gap-2 transition-all">
                  Browse {cat.category}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bulk/business banner */}
        <div className="bg-[#0055FF] rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Buying for your business?
            </p>
            <p className="text-blue-200 text-sm">
              Get volume pricing, a dedicated account manager, and full procurement support. We handle everything from sourcing to delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0055FF] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Request a bulk quote
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              {/* WhatsApp icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}