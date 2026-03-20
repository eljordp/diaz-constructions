import type { Metadata } from "next";
import Link from "next/link";

const cities = [
  { slug: "redwood-city", name: "Redwood City", county: "San Mateo County", description: "As our home base, Redwood City is where Diaz Construction was founded. We know every neighborhood, every permit office, and every building code. From downtown condos to Emerald Hills estates, we've been transforming homes here for over 15 years.", highlights: ["Home to our headquarters at 310 Poplar St", "Deep relationships with local permit offices", "Hundreds of completed projects across the city"] },
  { slug: "hayward", name: "Hayward", county: "Alameda County", description: "Hayward homeowners trust Diaz Construction for quality remodels and ADU construction. We understand the unique building requirements in Alameda County and have completed dozens of projects throughout Hayward's diverse neighborhoods.", highlights: ["ADU specialists — Hayward's ADU-friendly zoning makes it ideal", "Experienced with Alameda County permits", "Serving all Hayward neighborhoods"] },
  { slug: "fremont", name: "Fremont", county: "Alameda County", description: "From Niles to Mission San Jose, Diaz Construction serves all of Fremont with expert remodeling and construction services. Our team is experienced with Fremont's building codes and neighborhood-specific requirements.", highlights: ["Kitchen and bath remodels across Fremont", "New construction and home additions", "Local expertise in Fremont building codes"] },
  { slug: "san-mateo", name: "San Mateo", county: "San Mateo County", description: "San Mateo homeowners choose Diaz Construction for our craftsmanship and reliability. Whether you're in the Highlands, Hillsdale, or downtown, we deliver quality construction on time and on budget.", highlights: ["Experienced with San Mateo County regulations", "Kitchen, bath, and whole-home remodels", "ADU construction for rental income"] },
  { slug: "menlo-park", name: "Menlo Park", county: "San Mateo County", description: "We've built a strong reputation in Menlo Park for delivering high-end remodels and additions. From Belle Haven to Sharon Heights, our team understands what Menlo Park homeowners expect.", highlights: ["High-end kitchen and bathroom transformations", "Home additions that match existing architecture", "Trusted by Menlo Park families for 15+ years"] },
  { slug: "palo-alto", name: "Palo Alto", county: "Santa Clara County", description: "Palo Alto's historic homes and modern builds both require a skilled general contractor. Diaz Construction brings the expertise and craftsmanship that Palo Alto homeowners demand.", highlights: ["Experienced with historic home renovations", "Modern ADU construction", "Navigating Palo Alto's strict building codes"] },
  { slug: "union-city", name: "Union City", county: "Alameda County", description: "Diaz Construction proudly serves Union City with full-service general contracting. Our team handles everything from permits to final walkthrough, delivering quality results every time.", highlights: ["Full-service remodeling and construction", "ADU builds for multigenerational living", "Hardscape and outdoor living spaces"] },
  { slug: "newark", name: "Newark", county: "Alameda County", description: "Newark homeowners count on Diaz Construction for reliable, quality construction work. We bring 15+ years of Bay Area building experience to every Newark project.", highlights: ["Kitchen and bathroom renovations", "Home additions and expansions", "Licensed, bonded, and insured — CSLB #989528"] },
  { slug: "east-palo-alto", name: "East Palo Alto", county: "San Mateo County", description: "Diaz Construction is committed to serving East Palo Alto with the same quality and professionalism we bring to every community. We're helping homeowners build equity through quality improvements.", highlights: ["Affordable remodeling solutions", "ADU construction for additional income", "Helping build stronger communities"] },
];

const services = [
  { title: "Kitchen & Bath Remodels", icon: "⬡" },
  { title: "ADU Construction", icon: "⌂" },
  { title: "Home Additions", icon: "⊞" },
  { title: "New Construction", icon: "△" },
  { title: "Hardscape & Landscape", icon: "▧" },
  { title: "Outdoor Living", icon: "◎" },
];

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `General Contractor in ${city.name}, CA | Diaz Construction`,
    description: `Licensed general contractor serving ${city.name}, ${city.county}. Kitchen & bath remodels, ADUs, additions, new builds. CSLB #989528. Call (650) 454-9122.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return (
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">City Not Found</h1>
          <Link href="/areas" className="mt-6 inline-block text-accent hover:text-accent-light">
            View all areas we serve
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            {city.county}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            General Contractor in {city.name}
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Licensed, bonded &amp; insured. Serving {city.name} and {city.county} since 2009.
          </p>
          <div className="mt-6 w-16 h-px bg-accent mx-auto" />
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold tracking-wide rounded transition-colors duration-200"
            >
              Get a Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About This City */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-8">
              Diaz Construction in {city.name}
            </h2>
            <p className="text-navy-950/70 text-lg leading-relaxed">
              {city.description}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-28 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight mb-10">
              Why {city.name} Homeowners Choose Us
            </h2>
            <ul className="space-y-6">
              {city.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-navy-950/80 text-lg leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Our Services in {city.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="bg-slate-light rounded-lg p-8 border border-navy-950/5 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-lg bg-navy-950 flex items-center justify-center text-accent text-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-950 mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-950/50 text-sm">
                  Professional {service.title.toLowerCase()} in {city.name} and surrounding areas.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight">
            Ready to Start Your {city.name} Project?
          </h2>
          <p className="mt-6 text-lg text-white/50">
            Call us today or request a free quote online. We&apos;d love to discuss your vision.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6504549122"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold tracking-wide rounded hover:border-white/40 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (650) 454-9122
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold tracking-wide rounded transition-colors duration-200"
            >
              Get a Free Quote
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
