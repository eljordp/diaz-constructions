import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Testimonial {
  text: string;
  author: string;
}

interface Project {
  slug: string;
  name: string;
  category: string;
  city: string;
  description: string;
  scope: string;
  duration: string;
  images: string[];
  testimonial: Testimonial | null;
}

const projects: Project[] = [
  {
    slug: 'jennifers-master-bathroom',
    name: "Jennifer's Master Bathroom",
    category: 'Kitchen & Bath',
    city: 'Redwood City',
    description:
      "Complete master bathroom transformation featuring custom tile work, modern fixtures, a walk-in shower conversion, and heated flooring. Jennifer wanted a spa-like retreat in her own home — and that's exactly what we delivered.",
    scope: 'Full bathroom gut and remodel',
    duration: '6 weeks',
    images: [
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Bathroom/portada.webp',
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Bathroom/diaz-project1.1.webp',
    ],
    testimonial: {
      text: 'Edgar and his team completely transformed our bathroom. Professional, on-time, and the quality exceeded our expectations.',
      author: 'Jennifer M.',
    },
  },
  {
    slug: 'hermes-full-remodel',
    name: "Herme's Full Remodel",
    category: 'Kitchen & Bath',
    city: 'Menlo Park',
    description:
      'A whole-home remodel that touched every room — kitchen, bathrooms, flooring, and closets. Herme trusted us to modernize his home while keeping its character, and the result speaks for itself.',
    scope: 'Whole-home renovation',
    duration: '12 weeks',
    images: [
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Closet/portada.webp',
    ],
    testimonial: null,
  },
  {
    slug: 'phil-adu',
    name: "Phil's ADU",
    category: 'ADU',
    city: 'Hayward',
    description:
      'A 600 sq ft detached ADU with full kitchen, bathroom, and living space. Phil wanted a rental unit in his backyard — we handled permits, design, and full construction. The unit was rented within two weeks of completion.',
    scope: '600 sq ft detached ADU — full build',
    duration: '16 weeks',
    images: [
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Kitchen/portada.webp',
    ],
    testimonial: {
      text: "We hired Diaz Construction for our ADU project. They handled permits, construction, everything. Couldn't be happier.",
      author: 'Phil R.',
    },
  },
  {
    slug: 'ben-master-bedroom',
    name: "Ben's Master Bedroom",
    category: 'Additions',
    city: 'San Mateo',
    description:
      "Master bedroom addition with walk-in closet and en-suite bathroom. The addition was designed to blend seamlessly with the existing home's architecture — you can't tell where the original home ends and the addition begins.",
    scope: 'Master bedroom addition with en-suite',
    duration: '10 weeks',
    images: [
      'https://diazconstructions.com/projects/Sin%20Ubicacion/Wood%20room/diaz-project8.1.webp',
    ],
    testimonial: null,
  },
  {
    slug: 'martinez-kitchen',
    name: 'Martinez Kitchen',
    category: 'Kitchen & Bath',
    city: 'Fremont',
    description:
      'Modern kitchen remodel with quartz countertops, custom island, soft-close cabinets, and stainless steel appliances. The Martinez family wanted an open-concept layout perfect for entertaining.',
    scope: 'Full kitchen remodel with island',
    duration: '8 weeks',
    images: [
      'https://diazconstructions.com/projects/LOS%20GATOS/Kitchen/diaz-kitchen2.webp',
    ],
    testimonial: null,
  },
  {
    slug: 'sunset-patio',
    name: 'Sunset Patio',
    category: 'Hardscape',
    city: 'Redwood City',
    description:
      '800 sq ft paver patio with built-in fire pit, seating walls, and landscape lighting. This backyard went from bare grass to a full outdoor entertainment space in just 4 weeks.',
    scope: '800 sq ft paver patio with fire pit',
    duration: '4 weeks',
    images: [
      'https://diazconstructions.com/projects/BOCCE%20COURT/Bocce%20court/diaz-bocce8.webp',
    ],
    testimonial: null,
  },
  {
    slug: 'oak-street-adu',
    name: 'Oak Street ADU',
    category: 'ADU',
    city: 'Union City',
    description:
      'A 450 sq ft studio ADU converted from an underused garage. Perfect for rental income — the homeowner now earns $2,200/month from this unit. We handled the full conversion including permits, structural upgrades, plumbing, and electrical.',
    scope: 'Garage conversion to studio ADU',
    duration: '10 weeks',
    images: [
      'https://diazconstructions.com/projects/Garage/adu-interior.webp',
    ],
    testimonial: null,
  },
  {
    slug: 'rivera-home-addition',
    name: 'Rivera Home Addition',
    category: 'Additions',
    city: 'Palo Alto',
    description:
      "Two-story addition with 3 bedrooms and 2 bathrooms. The Rivera family needed more space for their growing family. We added 1,200 sq ft while matching the existing home's architectural style perfectly.",
    scope: 'Two-story addition — 3 bed, 2 bath',
    duration: '20 weeks',
    images: [
      'https://diazconstructions.com/projects/CLEVELAND/diaz-cleveland.webp',
    ],
    testimonial: null,
  },
];

function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project Not Found | Diaz Construction' };

  return {
    title: `${project.name} | Diaz Construction`,
    description: `${project.scope} in ${project.city}. ${project.description.slice(0, 120)}...`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[30vh] sm:h-[50vh] w-full">
        <img
          src={project.images[0]}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-accent text-navy-950 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              {project.city}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl text-white leading-tight">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="bg-navy-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-y-3 sm:gap-y-2 sm:divide-x sm:divide-white/15 py-4 text-sm text-white/70">
            <div className="px-5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Category</span>
              <span className="font-medium text-white/90">{project.category}</span>
            </div>
            <div className="px-5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Location</span>
              <span className="font-medium text-white/90">{project.city}</span>
            </div>
            <div className="px-5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Duration</span>
              <span className="font-medium text-white/90">{project.duration}</span>
            </div>
            <div className="px-5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-0.5">Scope</span>
              <span className="font-medium text-white/90">{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl text-navy-950 mb-6">
            Project Overview
          </h2>
          <p className="text-navy-800/70 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className="bg-slate-light py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl text-navy-950 mb-8 text-center">
              Project Gallery
            </h2>
            <div className={`grid gap-4 ${project.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
              {project.images.map((img, i) => (
                <div key={i} className="relative h-72 sm:h-80 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.name} — photo ${i + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-lg sm:text-xl text-navy-800/80 italic leading-relaxed">
                &ldquo;{project.testimonial.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-navy-950">
                — {project.testimonial.author}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
            Want Results Like This?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Every great project starts with a conversation. Tell us what you have in mind.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto bg-accent hover:bg-accent-dark text-navy-950 font-semibold px-8 py-4 rounded transition-colors text-sm tracking-wide uppercase text-center"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-slate-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-800/60 hover:text-accent transition-colors min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
