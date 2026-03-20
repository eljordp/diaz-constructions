import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Diaz Construction | Licensed General Contractor',
  description:
    'Kitchen & bathroom remodels, ADU construction, home additions, new builds, hardscape & outdoor living. Serving Redwood City, Hayward & the Bay Area. CSLB #989528.',
};

const services = [
  {
    icon: '⬡',
    title: 'Kitchen & Bathroom Remodels',
    slug: 'kitchen-bath-remodel',
    description:
      'Complete kitchen and bathroom transformations. Custom cabinetry, countertops, tile work, plumbing, electrical, and fixtures. From design to final walkthrough, we handle every detail.',
  },
  {
    icon: '⌂',
    title: 'ADU Construction (Accessory Dwelling Units)',
    slug: 'adu-construction',
    description:
      'Custom-built ADUs for rental income, multigenerational living, or home offices. We handle permits, design, and full construction. Compliant with all California ADU regulations.',
  },
  {
    icon: '⊞',
    title: 'Home Additions',
    slug: 'home-additions',
    description:
      'Expand your living space with seamless additions that match your existing home. Extra bedrooms, expanded kitchens, second stories — built to integrate perfectly.',
  },
  {
    icon: '△',
    title: 'New Home Construction',
    slug: 'new-construction',
    description:
      'Ground-up residential construction. From foundation to finish, we build custom homes with quality materials and expert craftsmanship.',
  },
  {
    icon: '▧',
    title: 'Hardscape & Landscape',
    slug: 'hardscape-landscape',
    description:
      'Driveways, patios, retaining walls, irrigation systems, and outdoor living spaces. Transform your exterior with durable, beautiful hardscape solutions.',
  },
  {
    icon: '◎',
    title: 'Outdoor Living & Kitchens',
    slug: 'outdoor-living',
    description:
      'Custom outdoor kitchens, BBQ islands, pergolas, and entertainment areas. Extend your living space outdoors with structures built to last.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Comprehensive construction solutions for homeowners across the Bay Area
          </p>
          <div className="mt-6 w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-navy-950/5 flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-navy-950 flex items-center justify-center text-accent text-2xl mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-navy-950 mb-3">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-navy-800/70 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors min-h-[44px]"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Contact us for a free consultation. We&apos;ll walk your property, discuss your
            vision, and provide a detailed estimate — no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto bg-accent hover:bg-accent-dark text-navy-950 font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide uppercase text-center"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
