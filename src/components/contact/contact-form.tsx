"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Pre-Booking Due Diligence",
  "Registry & Title Verification",
  "RERA / Builder Verification",
  "Litigation Screening",
  "Registration Assistance",
  "Not sure — need guidance",
];

const budgets = ["Under ₹50 L", "₹50 L – ₹1 Cr", "₹1 Cr – ₹5 Cr", "Above ₹5 Cr"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: services[0],
    budget: budgets[1],
    message: "",
  });

  const valid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.phone.trim().length >= 8;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-accent/30 bg-accent/[0.06] px-6 py-16 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-fg">Request received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thank you, {form.name.split(" ")[0]}. A GharVerify specialist will reach
          out within one business day to open your secure verification file.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent/50 focus:ring-2 focus:ring-accent/20";
  const label = "mb-1.5 block text-sm font-medium text-muted";

  return (
    <form onSubmit={submit} className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Full name *</label>
          <input
            className={input}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className={label}>Email *</label>
          <input
            className={input}
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className={label}>Phone *</label>
          <input
            className={input}
            placeholder="+91 ..."
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={label}>Property city</label>
          <input
            className={input}
            placeholder="e.g. Lucknow"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>
        <div>
          <label className={label}>Service needed</label>
          <select
            className={input}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {services.map((s) => (
              <option key={s} value={s} className="bg-surface">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Property value</label>
          <select
            className={input}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-surface">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className={label}>Tell us about the property</label>
        <textarea
          className={`${input} min-h-28 resize-none`}
          placeholder="Project name, builder, plot number, and any concerns you have…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <Button type="submit" size="lg" disabled={!valid || status === "sending"} className="mt-6 w-full">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4.5 w-4.5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request Consultation
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-faint">
        We respond within one business day. Your details are encrypted and never shared.
      </p>
    </form>
  );
}
