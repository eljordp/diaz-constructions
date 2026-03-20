"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Kitchen & Bath Remodel",
  "ADU",
  "Home Addition",
  "New Construction",
  "Hardscape & Landscape",
  "Outdoor Living",
  "Other",
];

const timelineOptions = [
  "ASAP",
  "1-3 Months",
  "3-6 Months",
  "6+ Months",
  "Just Exploring",
];

const budgetOptions = [
  "Under $25K",
  "$25K-$50K",
  "$50K-$100K",
  "$100K-$250K",
  "$250K+",
  "Not Sure",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    timeline: "",
    budget: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Let&apos;s Build Together
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Get a Free Quote
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed estimate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left Column — Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">Phone</p>
                      <a
                        href="tel:6504549122"
                        className="text-navy-950/60 hover:text-accent transition-colors text-sm"
                      >
                        (650) 454-9122
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">Email</p>
                      <a
                        href="mailto:service@diazconstructions.com"
                        className="text-navy-950/60 hover:text-accent transition-colors text-sm"
                      >
                        service@diazconstructions.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">Office</p>
                      <p className="text-navy-950/60 text-sm">
                        310 Poplar St<br />
                        Redwood City, CA 95061
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">Hours</p>
                      <p className="text-navy-950/60 text-sm">
                        Mon — Fri: 7:00 AM — 5:00 PM<br />
                        Sat: By appointment<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>

                  {/* License */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-950">License</p>
                      <p className="text-navy-950/60 text-sm">
                        CSLB #989528<br />
                        Licensed, Bonded &amp; Insured
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-slate-light rounded-xl p-10 sm:p-14 text-center border border-navy-950/5">
                  <div className="w-16 h-16 rounded-full bg-navy-950 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950 mb-3">
                    Thank You
                  </h3>
                  <p className="text-navy-950/60">
                    We&apos;ve received your project details and will be in touch
                    within 24 hours. If you need an immediate response, call us at{" "}
                    <a href="tel:6504549122" className="text-accent font-medium">
                      (650) 454-9122
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-light rounded-xl p-8 sm:p-10 border border-navy-950/5 space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy-950 mb-2">
                    Tell Us About Your Project
                  </h2>

                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm placeholder:text-navy-950/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm placeholder:text-navy-950/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm placeholder:text-navy-950/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Service Type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={form.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy-950/10 bg-white text-navy-950 text-sm placeholder:text-navy-950/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project — scope, goals, any specific requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-navy-950 font-semibold tracking-wide rounded-lg transition-colors duration-200 text-sm"
                  >
                    Send Your Project Details
                  </button>

                  <p className="text-center text-navy-950/40 text-xs">
                    We respond to all inquiries within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
