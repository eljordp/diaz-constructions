import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Diaz Construction — Licensed General Contractor",
  description:
    "Family-owned general contractor serving the Bay Area since 2009. Licensed, bonded & insured. CSLB #989528. Quality craftsmanship and honest work.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Diaz Construction
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Built on integrity. Driven by craftsmanship. Family-owned since 2009.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                From Humble Beginnings to Bay Area Trusted
              </h2>
              <div className="mt-8 space-y-6 text-navy-950/70 text-lg leading-relaxed">
                <p>
                  Diaz Construction was founded in 2009 by Edgar Diaz with a simple
                  belief: do honest work, deliver quality results, and treat every
                  client like family. What started as a small operation has grown
                  into one of the Bay Area&apos;s most trusted general contracting
                  firms — built entirely through quality work and word of mouth.
                </p>
                <p>
                  For over 15 years, we&apos;ve served homeowners and property owners
                  across Redwood City, Hayward, and the greater Bay Area. From
                  kitchen remodels and bathroom renovations to ADUs, home additions,
                  and new construction, we bring the same level of care and
                  precision to every project — no matter the size.
                </p>
                <p>
                  As a family-owned business, we understand what it means to invest
                  in your home. That&apos;s why we treat every project as if it were
                  our own. We&apos;re fully licensed, bonded, and insured — giving
                  you the peace of mind you deserve.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://diazconstructions.com/projects/Sin%20Ubicacion/Bathroom/diaz-project1.1.webp"
                alt="Diaz Construction bathroom project showcasing quality craftsmanship"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 sm:py-28 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Craftsmanship",
                description:
                  "Every cut, every joint, every finish — we hold ourselves to the highest standard. Our work speaks for itself and stands the test of time.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
                  </svg>
                ),
              },
              {
                title: "Honest Communication",
                description:
                  "No surprises, no hidden costs. We keep you informed at every stage of your project with clear timelines, transparent pricing, and straight talk.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
              {
                title: "On-Time Delivery",
                description:
                  "We respect your time. Our team plans meticulously and executes efficiently to deliver your project on schedule, every time.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Fair Pricing",
                description:
                  "Premium results don't have to come with a premium markup. We provide competitive, transparent quotes with no hidden fees or change-order games.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 border border-navy-950/5"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-950 flex items-center justify-center text-accent mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-950/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Homeowners Trust Us */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              Why Homeowners Trust Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "CSLB #989528",
                label: "Licensed & Verified",
                description:
                  "Fully licensed by the California Contractors State License Board. Verify our credentials anytime.",
              },
              {
                stat: "15+",
                label: "Years in Business",
                description:
                  "Over a decade and a half of experience delivering quality construction projects across the Bay Area.",
              },
              {
                stat: "Family",
                label: "Owned & Operated",
                description:
                  "We're a family business. Every project gets personal attention from our leadership team.",
              },
              {
                stat: "Local",
                label: "Bay Area Roots",
                description:
                  "Based in Redwood City, we know the local building codes, permits, and what Bay Area homes need.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-navy-950 mb-2">
                  {item.stat}
                </div>
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  {item.label}
                </div>
                <p className="text-navy-950/60 text-sm leading-relaxed">
                  {item.description}
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
            Ready to Discuss Your Project?
          </h2>
          <p className="mt-6 text-lg text-white/50">
            Whether you&apos;re planning a remodel, addition, or new build — we&apos;d
            love to hear about your vision. Get in touch for a free consultation.
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
