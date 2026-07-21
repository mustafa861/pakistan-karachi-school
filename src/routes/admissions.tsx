import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Download, FileText, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
  head: () => ({
    meta: [
      { title: "Admissions — PAKISTAN KARACHI SCHOOL PKS" },
      { name: "description", content: "Admission process, eligibility, fee structure and timeline for PAKISTAN KARACHI SCHOOL PKS. Apply for 2026–27." },
      { property: "og:title", content: "Admissions — PAKISTAN KARACHI SCHOOL PKS" },
      { property: "og:description", content: "Apply now for 2026–27. Simple process, transparent fees, warm welcome." },
    ],
  }),
});

function AdmissionsPage() {
  return (
    <div className="pb-8">
      <Header />
      <Process />
      <FeesAndTimeline />
      <Downloads />
      <ApplyForm />
    </div>
  );
}

function Header() {
  return (
    <section className="relative overflow-hidden gradient-hero py-28 text-cream">
      <div className="container-page relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold-soft">
          <Sparkles className="h-3.5 w-3.5" /> Admissions 2026–27
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
          Begin your child's journey at <em className="text-gradient-gold">PKS</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/70">
          A simple, transparent process — from your first enquiry to a warm welcome on Day One.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Enquiry", d: "Submit an online enquiry or visit campus." },
    { n: "02", t: "Interaction", d: "Grade-appropriate entrance assessment or observation." },
    { n: "03", t: "Parent Meeting", d: "A warm conversation with school leadership." },
    { n: "04", t: "Offer & Fees", d: "Seat confirmation and fee schedule." },
    { n: "05", t: "Onboarding", d: "Orientation and welcome kit before session start." },
  ];
  const eligibility = [
    "Play Group: Age 2 as of 31 March",
    "Nursery: Age 3 as of 31 March",
    "KG: Age 4 as of 31 March",
    "Grades I–XII: Prior schooling & age-appropriate assessment",
  ];
  const docs = ["Birth certificate", "Last report card", "Passport-size photos", "Address proof", "Transfer certificate (if applicable)"];

  return (
    <section id="process" className="container-page py-24">
      <div className="mb-14 max-w-2xl">
        <div className="text-xs uppercase tracking-[0.28em] text-gold">Process</div>
        <h2 className="mt-4 font-display text-5xl">Five thoughtful steps.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border border-border bg-card p-6 card-hover">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">{s.n}</div>
            <div className="mt-3 font-display text-xl">{s.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <Card title="Eligibility">
          <ul className="mt-4 space-y-3">
            {eligibility.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {e}
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Required Documents">
          <ul className="mt-4 space-y-3">
            {docs.map((e) => (
              <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {e}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function FeesAndTimeline() {
  const fees = [
    ["Play Group – KG", "PKR 96,000 / yr"],
    ["Primary (I–V)", "PKR 138,000 / yr"],
    ["Middle (VI–VIII)", "PKR 162,000 / yr"],
    ["Secondary (IX–X)", "PKR 186,000 / yr"],
    ["Higher Sec (XI–XII)", "PKR 213,000 / yr"],
  ];
  const timeline = [
    ["Nov 1", "Round-1 opens"],
    ["Feb 10", "Round-2 closes"],
    ["Mar 15", "Offer letters"],
    ["Apr 5", "Fees due"],
    ["Jun 15", "Session begins"],
  ];
  return (
    <section id="fees" className="bg-cream py-24">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold">Fee Structure</div>
          <h2 className="mt-4 font-display text-5xl">Transparent, all-inclusive.</h2>
          <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
            {fees.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between px-6 py-4">
                <span className="text-sm text-foreground/80">{k}</span>
                <span className="font-display text-xl">{v}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Includes tuition, learning materials, labs and library. Transport & meals optional.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold">Timeline</div>
          <h2 className="mt-4 font-display text-5xl">Key dates.</h2>
          <ol className="mt-8 space-y-4">
            {timeline.map(([d, l], i) => (
              <li key={d} className="flex gap-4 rounded-3xl border border-border bg-card p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-cream text-xs font-medium">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-gold">{d}</div>
                  <div className="mt-1 font-display text-xl">{l}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Downloads() {
  const items = [
    { t: "Prospectus 2026", s: "PDF · 4.2 MB" },
    { t: "Fee Structure", s: "PDF · 320 KB" },
    { t: "School Calendar", s: "PDF · 180 KB" },
    { t: "Uniform Guide", s: "PDF · 220 KB" },
  ];
  return (
    <section id="downloads" className="container-page py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-gold">Downloads</div>
          <h2 className="mt-4 font-display text-5xl">Everything, in one place.</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((d) => (
          <a key={d.t} href="#" className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 card-hover">
            <div>
              <div className="font-display text-xl">{d.t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{d.s}</div>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:scale-110">
              <Download className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ApplyForm() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-page pb-24">
      <div className="rounded-4xl bg-ink p-10 text-cream shadow-elegant md:p-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold-soft">Apply now</div>
            <h2 className="mt-4 font-display text-5xl leading-tight">Start your application.</h2>
            <p className="mt-4 max-w-md text-cream/70">Share a few details and our admissions team will reach out within 24 hours.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-cream/70">
              <GraduationCap className="h-4 w-4 text-gold" /> Priority replies for Round-1 applicants.
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="grid gap-3"
          >
            {sent ? (
              <div className="grid place-items-center rounded-3xl border border-gold/30 bg-white/5 p-10 text-center">
                <CheckCircle2 className="h-8 w-8 text-gold" />
                <div className="mt-4 font-display text-2xl">Thank you</div>
                <p className="mt-2 text-sm text-cream/70">We've received your enquiry. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <Input label="Parent's name" name="name" />
                <Input label="Email" name="email" type="email" />
                <Input label="Phone" name="phone" type="tel" />
                <Input label="Applying for grade" name="grade" placeholder="e.g. Grade V" />
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft">
                  Submit enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-[0.22em] text-cream/60">{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={120}
        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <div className="text-xs uppercase tracking-[0.22em] text-gold">{title}</div>
      {children}
    </div>
  );
}
