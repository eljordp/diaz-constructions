'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'All' | 'Kitchen & Bath' | 'ADU' | 'Additions' | 'Hardscape';

interface Project {
  name: string;
  category: Exclude<Category, 'All'>;
  city: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Jennifer's Master Bathroom",
    category: 'Kitchen & Bath',
    city: 'Redwood City',
    description:
      'Complete master bathroom transformation with custom tile and modern fixtures.',
  },
  {
    name: "Herme's Full Remodel",
    category: 'Kitchen & Bath',
    city: 'Menlo Park',
    description:
      'Whole-home remodel including kitchen, bathrooms, and flooring.',
  },
  {
    name: "Phil's ADU",
    category: 'ADU',
    city: 'Hayward',
    description:
      '600 sq ft detached ADU with full kitchen and bathroom.',
  },
  {
    name: "Ben's Master Bedroom",
    category: 'Additions',
    city: 'San Mateo',
    description:
      'Master bedroom addition with walk-in closet and en-suite bath.',
  },
  {
    name: 'Martinez Kitchen',
    category: 'Kitchen & Bath',
    city: 'Fremont',
    description:
      'Modern kitchen with quartz countertops and custom island.',
  },
  {
    name: 'Sunset Patio',
    category: 'Hardscape',
    city: 'Redwood City',
    description:
      '800 sq ft paver patio with built-in fire pit.',
  },
  {
    name: 'Oak Street ADU',
    category: 'ADU',
    city: 'Union City',
    description:
      '450 sq ft studio ADU for rental income.',
  },
  {
    name: 'Rivera Home Addition',
    category: 'Additions',
    city: 'Palo Alto',
    description:
      'Two-story addition with 3 bedrooms.',
  },
];

const categories: Category[] = ['All', 'Kitchen & Bath', 'ADU', 'Additions', 'Hardscape'];

const gradients = [
  'from-navy-950 to-navy-700',
  'from-navy-900 via-navy-800 to-accent/30',
  'from-navy-800 to-navy-950',
  'from-navy-950 via-accent/20 to-navy-900',
  'from-navy-700 to-navy-950',
  'from-navy-900 to-accent/25',
  'from-navy-950 to-navy-800',
  'from-accent/20 via-navy-900 to-navy-950',
];

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
              const idx = projects.indexOf(project);
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-navy-950/5 group"
                >
                  {/* Placeholder Image */}
                  <div
                    className={`relative aspect-[4/3] bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-end p-5`}
                  >
                    <span className="text-white/90 font-semibold text-lg leading-snug drop-shadow-md">
                      {project.name}
                    </span>
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
