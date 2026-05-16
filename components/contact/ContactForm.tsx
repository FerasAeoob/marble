"use client";

import { useState } from "react";
import { services } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-[#e8dfd2] bg-white p-6 shadow-xl sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1f2528]">Name</label>
          <input id="name" name="name" type="text" required className="w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-4 py-3 text-[#1f2528] outline-none transition focus:border-[#b8935f]" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1f2528]">Phone</label>
          <input id="phone" name="phone" type="tel" required className="w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-4 py-3 text-[#1f2528] outline-none transition focus:border-[#b8935f]" placeholder="Phone number" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1f2528]">Email <span className="text-[#8c7a62]">(optional)</span></label>
          <input id="email" name="email" type="email" className="w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-4 py-3 text-[#1f2528] outline-none transition focus:border-[#b8935f]" placeholder="email@example.com" />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#1f2528]">Service Type</label>
          <select id="service" name="service" required className="w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-4 py-3 text-[#1f2528] outline-none transition focus:border-[#b8935f]">
            <option value="">Choose a service</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1f2528]">Message</label>
        <textarea id="message" name="message" required rows={6} className="w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-4 py-3 text-[#1f2528] outline-none transition focus:border-[#b8935f]" placeholder="Tell us about dimensions, material, drawings, or photos you can send." />
      </div>
      <button type="submit" className="mt-6 w-full rounded-full bg-[#1f2528] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#b8935f]">
        Send Request
      </button>
      {submitted ? <p className="mt-4 rounded-2xl bg-[#eef7ed] px-4 py-3 text-sm font-semibold text-[#256b35]">Thank you. This demo form is ready for your form provider or email integration.</p> : null}
    </form>
  );
}
