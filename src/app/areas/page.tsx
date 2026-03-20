import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Serve | Diaz Construction | Licensed General Contractor",
  description:
    "Diaz Construction serves Redwood City, Hayward, Fremont, San Mateo, Menlo Park, Palo Alto, Union City, Newark & East Palo Alto. CSLB #989528. Call (650) 454-9122.",
};

const cities = [
  { slug: "redwood-city", name: "Redwood City", county: "San Mateo County" },
  { slug: "hayward", name: "Hayward", county: "Alameda County" },
  { slug: "fremont", name: "Fremont", county: "Alameda County" },
  { slug: "san-mateo", name: "San Mateo", county: "San Mateo County" },
  { slug: "menlo-park", name: "Menlo Park", county: "San Mateo County" },
  { slug: "palo-alto", name: "Palo Alto", county: "Santa Clara County" },
  { slug: "union-city", name: "Union City", county: "Alameda County" },
  { slug: "newark", name: "Newark", county: "Alameda County" },
  { slug: "east-palo-alto", name: "East Palo Alto", county: "San Mateo County" },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Service Areas
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white tracking-tight">
            Areas We Serve
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Licensed general contractor serving communities across the Bay Area since 2009.
          </p>
          <div className="mt-6 w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 sm:py-28 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-navy-950/5 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-navy-950 group-hover:text-accent transition-colors">
                    {city.name}
                  </h2>
                </div>
                <p className="text-navy-950/50 text-sm mb-4">{city.county}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View services
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Don&apos;t see your city?
          </h2>
          <p className="mt-6 text-lg text-white/50">
            We serve the entire Bay Area. Contact us to discuss your project — we&apos;d love to help.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold tracking-wide rounded transition-colors duration-200"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
