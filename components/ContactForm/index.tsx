"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export function ContactForm() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject") ?? "";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState(
    subjectParam || "Wholesale Enquiry"
  );
  const [message, setMessage] = useState(
    subjectParam ? `I am interested in: ${subjectParam}` : ""
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Client-ready form - wire to API/email service when backend is available
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setInquiryType("Wholesale Enquiry");
    setMessage("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="rounded-luxury border border-border bg-white p-6 shadow-card md:p-8" id="form">
      <h2 className="font-display text-2xl text-charcoal md:text-3xl">
        Send an Enquiry
      </h2>
      <p className="mt-2 text-sm text-muted">
        Retail stores, dealers, and partners - we typically respond within one
        business day. Or email{" "}
        <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">
          {SITE.email}
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="label-caps text-muted">
              First Name *
            </label>
            <input
              id="firstName"
              required
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-luxury"
              placeholder="Your first name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="label-caps text-muted">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-luxury"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="label-caps text-muted">
              Email *
            </label>
            <input
              id="email"
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-luxury"
              placeholder="you@business.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="label-caps text-muted">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-luxury"
              placeholder="+91"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="inquiryType" className="label-caps text-muted">
            Enquiry Type
          </label>
          <select
            id="inquiryType"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className="input-luxury appearance-none"
          >
            <option>Wholesale Enquiry</option>
            <option>Bulk Order</option>
            <option>Custom Manufacturing</option>
            <option>Retail Partner Support</option>
            <option>Design Consultation</option>
            <option>General Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="label-caps text-muted">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-luxury resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {error && (
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full rounded-full py-4 text-label-caps uppercase tracking-[0.12em] font-semibold transition-all",
            success
              ? "bg-emerald-700 text-white"
              : "bg-maroon text-white hover:bg-maroon-dark",
            loading && "cursor-not-allowed opacity-60"
          )}
        >
          {loading ? "Sending..." : success ? "Sent Successfully" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
