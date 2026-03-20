import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/areas', label: 'Service Areas' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Kitchen Remodels',
  'Bathroom Remodels',
  'ADUs',
  'Home Additions',
  'New Builds',
  'Hardscape & Landscape',
];

const serviceAreas = [
  'Redwood City',
  'Hayward',
  'Fremont',
  'Union City',
  'San Mateo',
  'Menlo Park',
  'Palo Alto',
  'Newark',
  'East Palo Alto',
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/logo.webp"
                alt="Diaz Construction"
                className="h-12"
              />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Quality craftsmanship since 2009. We build with integrity, precision, and an unwavering commitment to excellence across the Bay Area.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/30 mb-4">
              <svg className="w-3.5 h-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span>CSLB Lic #989528 &middot; Licensed, Bonded &amp; Insured</span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/DiazConstructionCo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded bg-white/5 text-white/40 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/diaz-construction-menlo-park-2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded bg-white/5 text-white/40 hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                aria-label="Yelp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.895-4.265a1.095 1.095 0 011.847.017l2.606 3.822c.37.544.034 1.28-.603 1.38a1.1 1.1 0 01-.574-.757zm-3.477 5.046l-3.065-3.992c-.596-.775.093-1.876 1.041-1.664l4.861 1.088a1.095 1.095 0 01.72 1.591l-1.796 3.57c-.29.576-1.085.68-1.517.21a1.1 1.1 0 01-.244-.803zM12.83 20.39l-.745-4.981c-.145-1.012 1.117-1.595 1.81-.836l3.56 3.897a1.095 1.095 0 01-.388 1.734l-3.478 1.5c-.558.24-1.178-.147-1.183-.76a1.1 1.1 0 01.424-.554zM9.68 14.705l1.554-4.753c.302-.923-.81-1.695-1.596-1.107L5.31 12.126a1.095 1.095 0 00.144 1.766l3.553 2.093c.504.297 1.14.04 1.306-.513a1.095 1.095 0 00-.633-.767zm1.273-7.405V2.35a1.095 1.095 0 011.596-.976l3.825 1.89c.6.297.73 1.097.247 1.546L12.83 8.38c-.72.668-1.877.07-1.877-.88v-.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 uppercase mb-5">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-white/40 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white/80 uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:6504549122" className="group flex items-start gap-3 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <svg className="w-4 h-4 mt-0.5 text-accent/50 group-hover:text-accent transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (650) 454-9122
                </a>
              </li>
              <li>
                <a href="mailto:service@diazconstructions.com" className="group flex items-start gap-3 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <svg className="w-4 h-4 mt-0.5 text-accent/50 group-hover:text-accent transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  service@diazconstructions.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <svg className="w-4 h-4 mt-0.5 text-accent/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>310 Poplar St<br />Redwood City, CA 95061</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <svg className="w-4 h-4 mt-0.5 text-accent/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon &ndash; Sat<br />7:00 AM &ndash; 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Diaz Construction. All rights reserved.</p>
          <p>Serving Redwood City, Hayward &amp; the Bay Area since 2009</p>
        </div>
      </div>
    </footer>
  );
}
