import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Diaz Construction — Licensed General Contractor",
  description:
    "Meet the experienced team behind Diaz Construction. Led by founder Edgar Diaz with over 15 years of general contracting experience in the Bay Area.",
};

const teamMembers = [
  {
    name: "Edgar Diaz",
    photo: "https://diazconstructions.com/edgar-profile.webp",
    title: "Owner & General Contractor",
    description:
      "Founded Diaz Construction in 2009 with a commitment to quality craftsmanship and honest work. Edgar oversees every project personally to ensure it meets the highest standards.",
  },
  {
    name: "Antonio Garcia",
    photo: "https://diazconstructions.com/diaz-team1.webp",
    title: "Foreman",
    description:
      "Antonio brings expertise and leadership to every job site. His attention to detail and hands-on approach ensure projects run smoothly from start to finish.",
  },
  {
    name: "Gustavo Arreola",
    photo: "https://diazconstructions.com/diaz-team2.webp",
    title: "Foreman",
    description:
      "With over 20 years of construction experience, Gustavo is a master of his craft. His deep knowledge of building techniques and materials is invaluable to every project.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            The People Behind the Work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Meet Our Team
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional results
            on every project.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-slate-light rounded-xl p-8 sm:p-10 text-center border border-navy-950/5"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-6"
                />

                <h3 className="text-xl font-bold text-navy-950">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mt-1.5">
                  {member.title}
                </p>
                <p className="mt-5 text-navy-950/60 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Want to Work With Our Team?
          </h2>
          <p className="mt-6 text-lg text-white/50">
            Get in touch to discuss your project. We&apos;ll walk you through our
            process and provide a free, no-obligation quote.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold tracking-wide rounded transition-colors duration-200"
            >
              Start a Conversation
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
