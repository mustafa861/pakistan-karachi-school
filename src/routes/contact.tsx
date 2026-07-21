import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Get in touch with PAKISTAN KARACHI SCHOOL PKS. Address, phone, email, office hours and directions." },
      { property: "og:title", content: "Contact — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="gradient-hero py-24 text-cream">
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.28em] text-gold-soft">Contact</div>
          <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[1.05] sm:text-7xl">We'd love to hear <em className="text-gradient-gold">from you</em>.</h1>
          <p className="mt-6 max-w-xl text-cream/70">
            Questions, admissions, campus visits or media enquiries — write to us and we'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <InfoCard icon={MapPin} title="Visit us" lines={["123 University Road", "Karachi, Pakistan"]} />
          <InfoCard icon={Phone} title="Call us" lines={["+92 345678932", "Admissions: +92 345678932"]} />
          <InfoCard icon={Mail} title="Email" lines={["PKS@gmail.com", "PKS@gmail.com"]} />
          <InfoCard icon={Clock} title="Office hours" lines={["Mon – Fri · 8:00 AM – 4:30 PM", "Sat · 9:00 AM – 1:00 PM"]} />
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-4xl border border-border bg-card p-8 shadow-elegant md:p-10">
            {sent ? (
              <div className="grid place-items-center py-16 text-center">
                <CheckCircle2 className="h-10 w-10 text-gold" />
                <div className="mt-4 font-display text-3xl">Message received</div>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <Field label="Subject" name="subject" />
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</span>
                  <textarea
                    required maxLength={1000} rows={5} name="message"
                    className="rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  />
                </label>
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-primary">
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 overflow-hidden rounded-4xl border border-border">
            <iframe
              title="Map"
              className="h-80 w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.421%2C37.769%2C-122.401%2C37.789&layer=mapnik"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="flex gap-5 rounded-3xl border border-border bg-card p-6">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-gold-soft">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-gold">{title}</div>
        {lines.map((l) => <div key={l} className="mt-1 text-sm text-foreground/80">{l}</div>)}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <input
        required maxLength={200} type={type} name={name}
        className="rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </label>
  );
}
