'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'All' | 'Kitchen & Bath' | 'ADU' | 'Additions' | 'Hardscape';

interface Project {
  name: string;
  category: Exclude<Category, 'All'>;
  city: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Jennifer's Master Bathroom",
    category: 'Kitchen & Bath',
    city: 'Redwood City',
    description:
      'Complete master bathroom transformation with custom tile and modern fixtures.',
    image: 'https://diazconstructions.com/projects/Sin%20Ubicacion/Bathroom/portada.webp',
  },
  {
    name: "Herme's Full Remodel",
    category: 'Kitchen & Bath',
    city: 'Menlo Park',
    description:
      'Whole-home remodel including kitchen, bathrooms, and flooring.',
    image: 'https://diazconstructions.com/projects/Sin%20Ubicacion/Closet/portada.webp',
  },
  {
    name: "Phil's ADU",
    category: 'ADU',
    city: 'Hayward',
    description:
      '600 sq ft detached ADU with full kitchen and bathroom.',
    image: 'https://diazconstructions.com/projects/Sin%20Ubicacion/Kitchen/portada.webp',
  },
  {
    name: "Ben's Master Bedroom",
    category: 'Additions',
    city: 'San Mateo',
    description:
      'Master bedroom addition with walk-in closet and en-suite bath.',
    image: 'https://diazconstructions.com/projects/Sin%20Ubicacion/Wood%20room/diaz-project8.1.webp',
  },
  {
    name: 'Martinez Kitchen',
    category: 'Kitchen & Bath',
    city: 'Fremont',
    description:
      'Modern kitchen with quartz countertops and custom island.',
    image: 'https://diazconstructions.com/projects/LOS%20GATOS/Kitchen/diaz-kitchen2.webp',
  },
  {
    name: 'Sunset Patio',
    category: 'Hardscape',
    city: 'Redwood City',
    description:
      '800 sq ft paver patio with built-in fire pit.',
    image: 'https://diazconstructions.com/projects/BOCCE%20COURT/Bocce%20court/diaz-bocce8.webp',
  },
  {
    name: 'Oak Street ADU',
    category: 'ADU',
    city: 'Union City',
    description:
      '450 sq ft studio ADU for rental income.',
    image: 'https://diazconstructions.com/projects/Garage/adu-interior.webp',
  },
  {
    name: 'Rivera Home Addition',
    category: 'Additions',
    city: 'Palo Alto',
    description:
      'Two-story addition with 3 bedrooms.',
    image: 'https://diazconstructions.com/projects/CLEVELAND/diaz-cleveland.webp',
  },
];

const categories: Category[] = ['All', 'Kitchen & Bath', 'ADU', 'Additions', 'Hardscape'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero Header */}
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            See the quality and craftsmanship we bring to every project
          </p>
          <div className="mt-6 w-16 h-px bg-accent mx-auto" />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-slate-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-navy-950 text-white'
                    : 'bg-white text-navy-800/70 hover:bg-navy-950/10 border border-navy-950/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project) => {
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy-950/5 group"
                >
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-navy-800/40">{project.city}</span>
                    </div>
                    <p className="text-sm text-navy-800/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-800/40 mt-12">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/50 mb-8 text-lg">
            Every project on this page started with a simple conversation. Let&apos;s talk about yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-navy-950 font-semibold px-8 py-3.5 rounded transition-colors text-sm tracking-wide uppercase"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
