import Image from "next/image";
import Link from "next/link";

/* ───────────────────────── SVG Icon Components ───────────────────────── */

function IconKitchenBath() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8M3 10V6a2 2 0 012-2h1m0 0V2m0 2h2m0 0V2m12 8V6a1 1 0 00-1-1h-1" />
    </svg>
  );
}

function IconADU() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M3 22V10l9-7 9 7v12M9 22v-6h6v6M12 3v0" />
    </svg>
  );
}

function IconAdditions() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      <rect x="2" y="2" width="20" height="20" rx="3" />
    </svg>
  );
}

function IconNewBuild() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m4-10h2m4 0h2m-8 4h2m4 0h2" />
    </svg>
  );
}

function IconHardscape() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M4 20V10m16 10V10M4 10l8-7 8 7M8 20v-4h3v4m2 0v-4h3v4" />
    </svg>
  );
}

function IconOutdoor() {
  return (
    <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7.07-2.93l.71-.71M5.64 5.64l-.71-.71m12.73 12.73l.71.71M18.36 5.64l.71-.71M1 12h2m18 0h2M6.34 17.66A7 7 0 1112 5a7 7 0 01-5.66 12.66z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconFamily() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconQuote() {
  return (
    <svg className="w-8 h-8 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
    </svg>
  );
}

/* ───────────────────────── Service Data ───────────────────────── */

const services = [
  {
    icon: <IconKitchenBath />,
    title: "Kitchen & Bath Remodels",
    description:
      "Complete kitchen and bathroom transformations. Custom cabinetry, countertops, tile work, and fixtures — built to last.",
  },
  {
    icon: <IconADU />,
    title: "ADUs",
    description:
      "Accessory dwelling units from permits to keys. Maximize your property value with a professionally built ADU.",
  },
  {
    icon: <IconAdditions />,
    title: "Home Additions",
    description:
      "Expand your living space with seamless room additions that match your home's existing architecture.",
  },
  {
    icon: <IconNewBuild />,
    title: "New Construction",
    description:
      "Ground-up residential construction built with precision, quality materials, and attention to every detail.",
  },
  {
    icon: <IconHardscape />,
    title: "Hardscape & Landscape",
    description:
      "Patios, retaining walls, walkways, and complete landscape design to transform your outdoor space.",
  },
  {
    icon: <IconOutdoor />,
    title: "Outdoor Living",
    description:
      "Custom outdoor kitchens, pergolas, and entertainment areas designed for the California lifestyle.",
  },
];

const testimonials = [
  {
    quote:
      "Edgar and his team completely transformed our kitchen. Professional, on-time, and the quality exceeded our expectations.",
    name: "Rebecca S.",
    location: "Redwood City",
    image: "https://diazconstructions.com/1.%20Rebecca%20S.%20Diaz%20construction%20Reviews.webp",
  },
  {
    quote:
      "We hired Diaz Construction for our ADU project. They handled permits, construction, everything. Couldn't be happier.",
    name: "Peter Lewis",
    location: "Hayward",
    image: "https://diazconstructions.com/2.%20Peter%20Lewis%20Diaz%20construction%20Reviews.webp",
  },
  {
    quote:
      "Responsive, honest, and incredible craftsmanship. They made our bathroom remodel stress-free.",
    name: "Devz P.",
    location: "Menlo Park",
    image: "https://diazconstructions.com/3.%20Devz%20P.%20Diaz%20construction%20Reviews.webp",
  },
];

const serviceAreas = [
  "Redwood City",
  "Hayward",
  "Fremont",
  "Union City",
  "San Mateo",
  "Menlo Park",
  "Palo Alto",
  "Newark",
  "East Palo Alto",
  "San Francisco",
];

/* ───────────────────────── Page Component ───────────────────────── */

export default function Home() {
  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://diazconstructions.com/diaz-hero3.webp')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-950/75" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 via-navy-900/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
            Licensed General Contractor &middot; CSLB #989528
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            Your Trusted General Contractor in Redwood City{" "}
            <span className="text-accent">&amp; the Bay Area</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Licensed, bonded &amp; insured with over 15 years of experience.
            From kitchen remodels to ground-up new builds — we deliver
            quality craftsmanship your family can count on.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold rounded transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all"
              >
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-accent font-medium hover:text-accent-dark transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section className="py-20 md:py-28 bg-slate-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Why Diaz Construction
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              Why Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <IconShield />,
                title: "Licensed & Insured",
                detail: "CSLB License #989528. Fully bonded and insured for your protection.",
              },
              {
                icon: <IconClock />,
                title: "15+ Years Experience",
                detail: "Trusted craftsmanship since 2009. Hundreds of successful projects completed.",
              },
              {
                icon: <IconFamily />,
                title: "Family Owned",
                detail: "A family business built on integrity, accountability, and personal service.",
              },
              {
                icon: <IconLocation />,
                title: "Bay Area Local",
                detail: "Born and raised in the Bay. We know the area, the codes, and the community.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="py-20 md:py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15+", label: "Years in Business" },
              { number: "100%", label: "Licensed & Insured" },
              { number: "Bay Area", label: "Born & Raised" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICE AREA ════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              Proudly Serving the Bay Area
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From the Peninsula to the East Bay, Diaz Construction serves
              homeowners and businesses across the greater Bay Area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {serviceAreas.map((city) => (
              <div
                key={city}
                className="flex items-center justify-center gap-2 py-4 px-3 bg-slate-light rounded-lg text-navy-950 font-medium"
              >
                <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {city}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/areas"
              className="text-accent font-medium hover:text-accent-dark transition-colors inline-flex items-center gap-1 text-lg"
            >
              See all areas we serve
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="py-20 md:py-28 bg-slate-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <IconQuote />
                <p className="mt-4 text-gray-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-navy-950">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-3 leading-relaxed">
            Get in touch for a free consultation and estimate. No pressure,
            no obligation — just honest advice from a licensed contractor.
          </p>
          <p className="mb-10">
            <a
              href="tel:6504549122"
              className="text-accent text-2xl sm:text-3xl font-bold hover:text-accent-light transition-colors"
            >
              (650) 454-9122
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold rounded transition-colors text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
