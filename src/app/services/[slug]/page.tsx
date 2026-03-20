import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const services = [
  {
    slug: 'kitchen-bath-remodel',
    name: 'Kitchen & Bathroom Remodels',
    headline: 'Transform Your Kitchen & Bathroom',
    description:
      'A kitchen or bathroom remodel is one of the best investments you can make in your home. At Diaz Construction, we handle every detail — from custom cabinetry and countertops to plumbing, electrical, and tile work. Whether you want a modern open-concept kitchen or a spa-like master bathroom, our team delivers craftsmanship that lasts.',
    features: [
      'Custom cabinetry and countertops',
      'Complete plumbing and electrical',
      'Tile work and flooring',
      'Fixture selection and installation',
      'Design consultation',
      'Permit management',
    ],
    process: [
      'Initial consultation and design review',
      'Material selection and budgeting',
      'Permit acquisition',
      'Demo and construction',
      'Finishing touches and final walkthrough',
    ],
    image:
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Kitchen/portada.webp',
  },
  {
    slug: 'adu-construction',
    name: 'ADU Construction',
    headline: 'Build Your Accessory Dwelling Unit',
    description:
      "ADUs are one of the smartest investments for Bay Area homeowners. Whether you want rental income, space for family, or a home office, Diaz Construction builds custom ADUs from the ground up. We handle everything — permits, design, foundation, framing, plumbing, electrical, and finishing. All compliant with California's ADU regulations.",
    features: [
      'Detached and attached ADUs',
      'Garage conversions',
      'Full permit management',
      'Custom design to match your home',
      'All utilities — plumbing, electrical, HVAC',
      'California ADU regulation compliance',
    ],
    process: [
      'Site assessment and feasibility',
      'Design and permit submission',
      'Foundation and framing',
      'Utilities and interior build-out',
      'Final inspection and handoff',
    ],
    image:
      'https://diazconstructions.com/projects/Garage/adu-interior.webp',
  },
  {
    slug: 'home-additions',
    name: 'Home Additions',
    headline: 'Expand Your Living Space',
    description:
      "Need more room? Diaz Construction builds seamless home additions that look and feel like they were always part of your home. Extra bedrooms, expanded kitchens, second stories — we handle the engineering, permits, and construction so you don't have to.",
    features: [
      'Second story additions',
      'Room extensions',
      'Bump-outs and expansions',
      'Structural engineering',
      'Architectural matching',
      'Foundation work',
    ],
    process: [
      'Structural assessment',
      'Architectural design',
      'Engineering and permits',
      'Construction and framing',
      'Interior finishing',
    ],
    image:
      'https://diazconstructions.com/projects/CLEVELAND/diaz-cleveland.webp',
  },
  {
    slug: 'new-construction',
    name: 'New Home Construction',
    headline: 'Build Your Dream Home',
    description:
      'From foundation to finish, Diaz Construction builds custom homes with quality materials and expert craftsmanship. We work with your architects and designers to bring your vision to life, managing every phase of construction with precision and care.',
    features: [
      'Ground-up residential construction',
      'Custom home building',
      'Foundation to finish management',
      'Quality materials sourcing',
      'Code compliance and inspections',
      'Project timeline management',
    ],
    process: [
      'Plan review and budgeting',
      'Permit acquisition',
      'Foundation and framing',
      'Mechanical systems',
      'Interior and exterior finishing',
      'Final inspection and move-in',
    ],
    image:
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Bathroom/diaz-project1.1.webp',
  },
  {
    slug: 'hardscape-landscape',
    name: 'Hardscape & Landscape',
    headline: 'Transform Your Outdoor Space',
    description:
      'Driveways, patios, retaining walls, irrigation systems — Diaz Construction transforms your exterior with durable, beautiful hardscape solutions. We build outdoor spaces that last and add real value to your property.',
    features: [
      'Concrete and paver patios',
      'Retaining walls',
      'Driveways and walkways',
      'Irrigation systems',
      'Drainage solutions',
      'Outdoor lighting',
    ],
    process: [
      'Site survey and design',
      'Material selection',
      'Grading and preparation',
      'Installation',
      'Landscaping and finishing',
    ],
    image:
      'https://diazconstructions.com/projects/BOCCE%20COURT/Bocce%20court/diaz-bocce8.webp',
  },
  {
    slug: 'outdoor-living',
    name: 'Outdoor Living & Kitchens',
    headline: 'Extend Your Living Space Outdoors',
    description:
      'Custom outdoor kitchens, BBQ islands, pergolas, and entertainment areas. Diaz Construction builds outdoor living spaces that are perfect for California weather — durable, beautiful, and built to last.',
    features: [
      'Outdoor kitchens and BBQ islands',
      'Pergolas and shade structures',
      'Fire pits and fireplaces',
      'Outdoor dining areas',
      'Built-in seating',
      'Lighting and electrical',
    ],
    process: [
      'Design consultation',
      'Material and appliance selection',
      'Foundation and structure',
      'Utility connections',
      'Finishing and landscaping',
    ],
    image:
      'https://diazconstructions.com/projects/Stanford/diaz-palapa15.webp',
  },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Diaz Construction | Bay Area`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-navy-950 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-950/80" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
            {service.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto bg-accent hover:bg-accent-dark text-navy-950 font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide uppercase text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:6504549122"
              className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (650) 454-9122
            </a>
          </div>
        </div>
      </section>

      {/* What We Do — Features */}
      <section className="bg-slate-light py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 text-center mb-4">
            What We Do
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-navy-800 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — Timeline */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 text-center mb-4">
            Our Process
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-14" />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-navy-950/10" />

            <div className="space-y-10">
              {service.process.map((step, i) => (
                <div key={step} className="relative flex items-start gap-6 pl-0">
                  {/* Numbered circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {i + 1}
                  </div>
                  {/* Step text */}
                  <p className="text-navy-800 text-lg leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
            Get a Free Quote for {service.name}
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Call us directly or fill out our contact form. We&apos;ll schedule a free
            on-site consultation and provide a detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto bg-accent hover:bg-accent-dark text-navy-950 font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide uppercase text-center"
            >
              Request a Quote
            </Link>
            <a
              href="tel:6504549122"
              className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors font-medium min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (650) 454-9122
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
