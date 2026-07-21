import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Award, BookOpen, Building2, Bus, Cpu, Dumbbell,
  FlaskConical, Heart, Landmark, Library, Mic, Music, Palette, PlayCircle,
  ShieldCheck, Sparkles, Star, Trophy, Utensils, Wifi, GraduationCap,
  ChevronDown, Quote, Calendar, Newspaper, Search, Download, MapPin,
  CheckCircle2, Clock, FileText, Mail,
} from "lucide-react";

import heroImg from "../assets/hero-campus.jpg";
import principalImg from "../assets/principal.jpg";
import facLib from "../assets/facility-library.jpg";
import facLab from "../assets/facility-lab.jpg";
import facAud from "../assets/facility-auditorium.jpg";
import galSports from "../assets/gallery-sports.jpg";
import galArt from "../assets/gallery-art.jpg";
import galAnnual from "../assets/gallery-annual.jpg";
import galTech from "../assets/gallery-tech.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "PAKISTAN KARACHI SCHOOL PKS — A premium learning experience" },
      { name: "description", content: "PAKISTAN KARACHI SCHOOL PKS: modern academics, world-class facilities, and inspiring campus life from Play Group through Higher Secondary." },
      { property: "og:image", content: "/social-cover.jpg" },
    ],
  }),
});

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <Principal />
      <Academics />
      <Classes />
      <Teachers />
      <Stats />
      <Facilities />
      <Gallery />
      <Events />
      <Achievements />
      <Testimonials />
      <News />
      <FAQs />
      <CtaBanner />
      <AdmissionsSection />
      <ContactSection />
    </>
  );
}

/* ============================== TYPEWRITER ============================== */
function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <>
      {displayed}
      <span className={`inline-block w-[2px] h-[1em] bg-gold align-middle ml-0.5 transition-opacity ${done ? "opacity-0" : "opacity-100 animate-pulse"}`} />
    </>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="PAKISTAN KARACHI SCHOOL PKS campus at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/85" />
        <div className="absolute inset-0 gradient-hero opacity-40 mix-blend-overlay" />
      </div>

      <div className="container-page relative flex min-h-[70vh] flex-col justify-end pt-24 pb-20 text-cream sm:min-h-[80vh] md:min-h-[92vh]">
        <div className="max-w-3xl animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold-soft backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open · 2026–27
          </div>
          <h1 className="mt-6 font-display text-3xl leading-[1.05] sm:text-5xl md:text-7xl lg:text-8xl">
            PAKISTAN KARACHI SCHOOL
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg">
            <Typewriter text="A modern learning experience rooted in timeless values. Explore academics, facilities, and campus life at PAKISTAN KARACHI SCHOOL." speed={30} />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              hash="admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-gold-soft"
            >
              Begin admission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-cream backdrop-blur"
            >
              <PlayCircle className="h-4 w-4" /> Take a campus tour
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            ["27", "Years of excellence"],
            ["A+", "Board results streak"],
            ["1:12", "Teacher–student ratio"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="glass-dark rounded-2xl p-4 text-cream sm:rounded-3xl sm:p-5"
            >
              <div className="font-display text-3xl text-gradient-gold sm:text-4xl">{n}</div>
              <div className="mt-1 text-xs text-cream/70 sm:text-sm">{l}</div>
            </div>
          ))}
        </div>

        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-2 self-center text-xs uppercase tracking-[0.3em] text-cream/60"
        >
          Scroll <ChevronDown className="h-3.5 w-3.5 animate-float-slow" />
        </a>
      </div>
    </section>
  );
}

/* ============================ TRUST STRIP ============================ */
function TrustStrip() {
  const items = ["Cambridge Assessment", "IB Candidate School", "Council of Schools", "STEM Accredited", "Green Campus", "Duke of Edinburgh"];
  return (
    <section className="border-y border-border bg-cream">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-14 gap-y-4 py-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {items.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    </section>
  );
}

/* ============================ ABOUT ============================ */
export function About() {
  return (
    <Section id="about" eyebrow="About PAKISTAN KARACHI SCHOOL" title="A school shaped by care, craft and curiosity.">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xl leading-relaxed text-foreground/80">
            Founded in 1998, PAKISTAN KARACHI SCHOOL has grown into one of the region's most respected schools — a place where academic rigour, creative expression and character formation move together as one.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Our campus was designed as a living classroom: sunlit studios, quiet libraries, purposeful laboratories and open lawns where friendships and ideas both take root.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Vision", d: "To raise thoughtful, capable citizens of the world." },
              { t: "Mission", d: "Learning that is rigorous, joyful and deeply human." },
              { t: "Values", d: "Integrity · Curiosity · Craft · Kindness · Courage." },
            ].map((v) => (
              <div key={v.t} className="rounded-3xl border border-border bg-card p-6 card-hover">
                <div className="text-xs uppercase tracking-[0.22em] text-gold">{v.t}</div>
                <p className="mt-3 text-sm text-foreground/80">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-4xl overflow-hidden shadow-elegant">
            <img
              src={facLib}
              alt="Reading room at PAKISTAN KARACHI SCHOOL"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ["Est.", "1998"],
              ["Alumni", "8,400+"],
              ["Campus", "14 acres"],
              ["Faculty", "180+"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-3xl border border-border bg-card p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{k}</div>
                <div className="mt-1 font-display text-3xl">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================ PRINCIPAL ============================ */
export function Principal() {
  return (
    <section id="principal" className="relative overflow-hidden bg-ink py-28 text-cream">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-page relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            <img
              src={principalImg}
              alt="Dr. Adrian Whitmore, Principal"
              className="rounded-4xl object-cover shadow-elegant"
              loading="lazy"
              width={900}
              height={1100}
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.22em] text-gold-soft">Principal's Message</div>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl md:text-6xl">
            "We teach children<br /><em className="text-gradient-gold">how to think</em>, not what to think."
          </h2>
          <p className="mt-8 max-w-2xl text-cream/70">
            At PAKISTAN KARACHI SCHOOL, every child is treated as a whole person — intellect, imagination, and integrity together. Our teachers are craftspeople of learning; our classrooms are studios of ideas. Welcome to a school that will grow with your child, and for your child.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div>
              <div className="font-display text-2xl italic">Adrian Whitmore</div>
              <div className="text-sm text-cream/60">Principal · Ph.D. Educational Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ ACADEMICS ============================ */
const stages = [
  { name: "Play Group", age: "2–3 yrs", desc: "Play-led exploration for our youngest learners — sensory, musical and joyful.", subjects: ["Storytime", "Movement", "Sensory Play"] },
  { name: "Nursery", age: "3–4 yrs", desc: "Foundations of language, number sense and social confidence.", subjects: ["Phonics", "Numbers", "Art"] },
  { name: "Kindergarten", age: "4–6 yrs", desc: "A gentle bridge into structured learning through inquiry and play.", subjects: ["Literacy", "Math", "World Around"] },
  { name: "Primary", age: "6–11 yrs", desc: "Depth in core disciplines with rich enrichment in the arts and sciences.", subjects: ["English", "Math", "Science", "Second Language"] },
  { name: "Middle", age: "11–14 yrs", desc: "Concept-driven learning, integrated projects and self-directed study.", subjects: ["STEM", "Humanities", "Languages", "Design"] },
  { name: "Secondary", age: "14–16 yrs", desc: "Preparation for board examinations with electives across disciplines.", subjects: ["Sciences", "Commerce", "Humanities", "Coding"] },
  { name: "Higher Secondary", age: "16–18 yrs", desc: "University-track pathways with mentoring, research and internships.", subjects: ["Advanced Placements", "Research", "College Prep"] },
];

export function Academics() {
  const [active, setActive] = useState(0);
  const s = stages[active];
  return (
    <Section id="academics" eyebrow="Academics" title="A continuous journey from Play Group to Higher Secondary.">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-3xl border border-border bg-card p-3">
            {stages.map((st, i) => (
              <button
                key={st.name}
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition-all ${
                  i === active
                    ? "bg-ink text-cream shadow-elegant"
                    : "text-foreground/70 hover:bg-secondary"
                }`}
              >
                <span className="font-medium">{st.name}</span>
                <span className={`text-xs ${i === active ? "text-gold-soft" : "text-muted-foreground"}`}>
                  {st.age}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div key={s.name} className="animate-rise rounded-4xl bg-gradient-to-br from-cream to-background p-6 border border-border shadow-elegant sm:p-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
              <GraduationCap className="h-4 w-4" /> {s.age}
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-5xl">{s.name}</h3>
            <p className="mt-5 max-w-2xl text-lg text-foreground/70">{s.desc}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoTile label="Learning approach" value="Inquiry-based, project-driven, mentor-led." />
              <InfoTile label="Assessment" value="Formative, portfolio and reflective." />
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Core subjects</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.subjects.map((sub) => (
                  <span key={sub} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/70 p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm text-foreground/80">{value}</div>
    </div>
  );
}

/* ============================ CLASSES ============================ */
export function Classes() {
  const items = [
    { g: "Grade I", age: "6+", curr: "National Foundations", subs: ["English", "Math", "EVS"], acts: ["Storytelling", "Art"] },
    { g: "Grade V", age: "10+", curr: "Integrated Inquiry", subs: ["Math", "Science", "Social"], acts: ["Robotics Jr.", "Choir"] },
    { g: "Grade VIII", age: "13+", curr: "Cambridge Lower Sec.", subs: ["STEM", "Languages", "Design"], acts: ["Debate", "Football"] },
    { g: "Grade X", age: "15+", curr: "Board Prep", subs: ["Sciences", "Math", "Humanities"], acts: ["Olympiads", "MUN"] },
    { g: "Grade XI", age: "16+", curr: "AP / Boards", subs: ["Physics", "Chem", "Bio / Comm"], acts: ["Research", "Internships"] },
    { g: "Grade XII", age: "17+", curr: "College Prep", subs: ["Advanced Electives"], acts: ["Capstone", "Mentoring"] },
  ];
  return (
    <Section id="classes" eyebrow="Classes" title="Every grade, thoughtfully designed.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <div key={c.g} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 card-hover sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-gold">{c.age}</div>
                <div className="font-display text-3xl">{c.g}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>
            <div className="mt-5 text-sm text-muted-foreground">{c.curr}</div>
            <div className="mt-6 space-y-4 border-t border-border pt-5 text-sm">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Subjects</div>
                <div className="mt-2 text-foreground/80">{c.subs.join(" · ")}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Activities</div>
                <div className="mt-2 text-foreground/80">{c.acts.join(" · ")}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================ TEACHERS ============================ */
export function Teachers() {
  const t = [
    { n: "Sir Shahabuddin", role: "Head of Mathematics", exp: "18 yrs", qual: "M.Sc, Karachi University", init: "SS", grad: "from-amber-200 to-rose-200" },
    { n: "Miss Kiran Ahmed", role: "Head of Humanities", exp: "16 yrs", qual: "M.A Karachi University", init: "KA", grad: "from-sky-200 to-indigo-200" },
    { n: "Miss Asna Siddiqui", role: "Physics Lead", exp: "14 yrs", qual: "M.Sc, Karachi University", init: "AS", grad: "from-emerald-200 to-teal-200" },
    { n: "Sir M. Asaad", role: "Design & Technology", exp: "12 yrs", qual: "M.Des, Indus Valley", init: "MA", grad: "from-violet-200 to-fuchsia-200" },
  ];
  return (
    <Section id="teachers" eyebrow="Faculty" title="Teachers who inspire, mentor and stay.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.map((p) => (
          <div key={p.n} className="group rounded-3xl border border-border bg-card p-6 card-hover">
            <div className={`grid aspect-square place-items-center rounded-2xl bg-gradient-to-br ${p.grad}`}>
              <span className="font-display text-4xl text-ink/70 sm:text-6xl">{p.init}</span>
            </div>
            <div className="mt-5">
              <div className="font-display text-2xl">{p.n}</div>
              <div className="mt-1 text-sm text-gold">{p.role}</div>
              <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                <div>{p.qual}</div>
                <div>{p.exp} teaching experience</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================ STATS (animated counters) ============================ */
export function Stats() {
  const items = [
    { n: 8400, s: "+", l: "Alumni worldwide" },
    { n: 98, s: "%", l: "Board pass rate" },
    { n: 42, s: "", l: "Olympiad medals '24" },
    { n: 180, s: "+", l: "Faculty members" },
  ];
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Counter key={it.l} to={it.n} suffix={it.s} label={it.l} />
        ))}
      </div>
    </section>
  );
}

function Counter({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <div ref={ref}>
      <div className="font-display text-5xl text-gradient-gold sm:text-6xl">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-cream/60">{label}</div>
    </div>
  );
}

/* ============================ FACILITIES ============================ */
export function Facilities() {
  const list = [
    { i: Cpu, t: "Smart Classrooms" },
    { i: FlaskConical, t: "Science Labs" },
    { i: BookOpen, t: "Computer Lab" },
    { i: Library, t: "Library" },
    { i: Dumbbell, t: "Sports Complex" },
    { i: Trophy, t: "Playground" },
    { i: Mic, t: "Auditorium" },
    { i: Landmark, t: "Mosque" },
    { i: Utensils, t: "Cafeteria" },
    { i: Heart, t: "Medical Room" },
    { i: Palette, t: "Art Room" },
    { i: Music, t: "Music Room" },
    { i: Bus, t: "Transport" },
    { i: ShieldCheck, t: "CCTV Security" },
    { i: Wifi, t: "WiFi Campus" },
    { i: Building2, t: "Campus" },
  ];
  return (
    <Section id="facilities" eyebrow="Facilities" title="A campus designed for how children learn today.">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {list.map(({ i: Icon, t }) => (
              <div key={t} className="group rounded-3xl border border-border bg-card p-5 card-hover">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold/15 text-ink transition-colors group-hover:bg-ink group-hover:text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="grid gap-4">
            <FacilityImg src={facLab} title="State-of-the-art Science Labs" />
            <div className="grid grid-cols-2 gap-4">
              <FacilityImg src={facLib} title="The PAKISTAN KARACHI SCHOOL Library" />
              <FacilityImg src={facAud} title="Grand Auditorium" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FacilityImg({ src, title }: { src: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      <img src={src} alt={title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
      <div className="absolute bottom-4 left-5 right-5 text-cream">
        <div className="font-display text-xl">{title}</div>
      </div>
    </div>
  );
}

/* ============================ GALLERY (lightbox) ============================ */
export function Gallery() {
  const items = [
    { src: galSports, cap: "Sports Day 2025" },
    { src: galArt, cap: "Little Artists" },
    { src: galAnnual, cap: "Annual Cultural Evening" },
    { src: galTech, cap: "Robotics Club" },
    { src: facLib, cap: "Library Sessions" },
    { src: facLab, cap: "Science Exhibition" },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="gallery" eyebrow="Gallery" title="Moments from campus life.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-3xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={it.src}
              alt={it.cap}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-5 text-left text-cream opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-xs uppercase tracking-[0.22em] text-gold-soft">View</div>
              <div className="font-display text-xl">{it.cap}</div>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-6 backdrop-blur-xl"
        >
          <img src={items[open].src} alt={items[open].cap} className="max-h-[85vh] w-auto rounded-3xl object-contain shadow-elegant" />
        </div>
      )}
    </Section>
  );
}

/* ============================ EVENTS ============================ */
export function Events() {
  const evs = [
    { d: "14", m: "Mar", t: "Annual Science Exhibition", loc: "Grand Auditorium" },
    { d: "22", m: "Apr", t: "Sports Day 2026", loc: "Main Grounds" },
    { d: "09", m: "May", t: "Cultural Evening & Awards", loc: "Auditorium" },
    { d: "15", m: "Aug", t: "Independence Day Parade", loc: "Front Lawn" },
    { d: "05", m: "Sep", t: "Teacher's Day Celebration", loc: "Assembly Hall" },
    { d: "12", m: "Nov", t: "Annual Function & Result Day", loc: "Main Auditorium" },
  ];
  return (
    <Section id="events" eyebrow="Events" title="What's happening on campus.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {evs.map((e) => (
          <div key={e.t} className="group flex gap-5 rounded-3xl border border-border bg-card p-6 card-hover">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-ink text-cream">
              <div className="text-center leading-none">
                <div className="font-display text-3xl text-gradient-gold">{e.d}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-cream/60">{e.m}</div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-xl">{e.t}</div>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {e.loc}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs text-ink underline underline-offset-4">
                Add to calendar <Calendar className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================ ACHIEVEMENTS ============================ */
export function Achievements() {
  const items = [
    { i: Trophy, k: "Board Toppers", v: "12 students ≥ 95% (2025)" },
    { i: Award, k: "Olympiads", v: "42 medals across STEM & languages" },
    { i: Star, k: "Sports", v: "State champions · Football & Chess" },
    { i: GraduationCap, k: "Scholarships", v: "PKR 4.2M in university aid last year" },
  ];
  return (
    <Section id="achievements" eyebrow="Achievements" title="Excellence, quietly earned.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ i: Icon, k, v }) => (
          <div key={k} className="rounded-3xl border border-border bg-gradient-to-br from-cream to-background p-6 card-hover sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold-soft">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-6 font-display text-2xl">{k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================ TESTIMONIALS ============================ */
export function Testimonials() {
  const t = [
    { q: "PAKISTAN KARACHI SCHOOL treats each child as a whole person. Our daughter blossomed here.", n: "Priya S.", r: "Parent · Grade VI" },
    { q: "Teachers who care, and a campus that inspires. It changed how I learn.", n: "Aarav M.", r: "Student · Grade XI" },
    { q: "The most thoughtful school we visited. The values are lived, not printed.", n: "Marcus & Lila W.", r: "Parents · KG" },
  ];
  return (
    <Section eyebrow="Testimonials" title="Words from our families.">
      <div className="grid gap-6 md:grid-cols-3">
        {t.map((it) => (
          <div key={it.n} className="rounded-3xl border border-border bg-card p-6 card-hover sm:p-8">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-4 font-display text-2xl leading-snug">"{it.q}"</p>
            <div className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-medium">{it.n}</div>
              <div className="text-xs text-muted-foreground">{it.r}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================ NEWS ============================ */
export function News() {
  const posts = [
    { c: "Notice", t: "Winter break from Dec 22 to Jan 3", d: "2 days ago" },
    { c: "Admissions", t: "Round-2 applications closing Feb 10", d: "1 week ago" },
    { c: "Exam", t: "Mid-term schedule published for Grades VI–X", d: "2 weeks ago" },
  ];
  return (
    <Section id="news" eyebrow="News & Announcements" title="Fresh from the office.">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <a
            href="#"
            key={p.t}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 card-hover sm:p-7"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
              <Newspaper className="h-3.5 w-3.5" /> {p.c}
            </div>
            <div className="mt-4 font-display text-2xl leading-snug">{p.t}</div>
            <div className="mt-auto pt-8 text-xs text-muted-foreground">{p.d}</div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ============================ FAQs ============================ */
export function FAQs() {
  const qs = [
    ["What is the admission process?", "Enquiry → entrance interaction → parent meeting → offer of seat. The full timeline is on the Admissions page."],
    ["Do you offer transport?", "Yes. We operate GPS-enabled buses across major residential zones with trained attendants."],
    ["Which curriculum do you follow?", "A blended curriculum: National framework in primary years, and Cambridge / AP electives in senior grades."],
    ["Are scholarships available?", "Merit and need-based scholarships are reviewed each year for Grade IX onwards."],
    ["What are the school timings?", "Regular hours are 8:15 AM – 3:00 PM, Monday to Friday, with optional after-school clubs."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <Section id="faqs" eyebrow="FAQs" title="Answers to common questions.">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
        {qs.map(([q, a], i) => (
          <button
            key={q}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full px-6 py-5 text-left"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="font-display text-xl">{q}</div>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && <p className="mt-3 text-sm text-muted-foreground">{a}</p>}
          </button>
        ))}
      </div>
    </Section>
  );
}

/* ============================ CTA BANNER ============================ */
export function CtaBanner() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl bg-ink p-10 text-cream md:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold-soft">Ready to visit?</div>
              <h3 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
                Come and feel what<br /><em className="text-gradient-gold">PAKISTAN KARACHI SCHOOL</em> is like.
              </h3>
              <p className="mt-6 max-w-lg text-cream/70">
                Book a personal campus tour, meet our faculty, and see the classrooms in action.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link to="/" hash="admissions" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-soft">
                Start application <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#admissions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-medium text-cream hover:bg-white/10">
                <Download className="h-4 w-4" /> Prospectus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ ADMISSIONS ============================ */
function AdmissionsSection() {
  const [sent, setSent] = useState(false);
  const steps = [
    { n: "01", t: "Enquiry", d: "Submit an online enquiry or visit campus." },
    { n: "02", t: "Interaction", d: "Grade-appropriate entrance assessment or observation." },
    { n: "03", t: "Parent Meeting", d: "A warm conversation with school leadership." },
    { n: "04", t: "Offer & Fees", d: "Seat confirmation and fee schedule." },
    { n: "05", t: "Onboarding", d: "Orientation and welcome kit before session start." },
  ];
  return (
    <>
      <section id="admissions" className="container-page py-24">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-gold">Process</div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl">Five thoughtful steps.</h2>
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
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Eligibility</div>
            <ul className="mt-4 space-y-3">
              {["Play Group: Age 2 as of 31 March", "Nursery: Age 3 as of 31 March", "KG: Age 4 as of 31 March", "Grades I–XII: Prior schooling & age-appropriate assessment"].map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Required Documents</div>
            <ul className="mt-4 space-y-3">
              {["Birth certificate", "Last report card", "Passport-size photos", "Address proof", "Transfer certificate (if applicable)"].map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">Fee Structure</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Transparent, all-inclusive.</h2>
            <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card">
              {[["Play Group – KG", "PKR 96,000 / yr"], ["Primary (I–V)", "PKR 138,000 / yr"], ["Middle (VI–VIII)", "PKR 162,000 / yr"], ["Secondary (IX–X)", "PKR 186,000 / yr"], ["Higher Sec (XI–XII)", "PKR 213,000 / yr"]].map(([k, v]) => (
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
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Key dates.</h2>
            <ol className="mt-8 space-y-4">
              {[["Nov 1", "Round-1 opens"], ["Feb 10", "Round-2 closes"], ["Mar 15", "Offer letters"], ["Apr 5", "Fees due"], ["Jun 15", "Session begins"]].map(([d, l], i) => (
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

      <section className="container-page py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">Downloads</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Everything, in one place.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[["Prospectus 2026", "PDF · 4.2 MB"], ["Fee Structure", "PDF · 320 KB"], ["School Calendar", "PDF · 180 KB"], ["Uniform Guide", "PDF · 220 KB"]].map(([t, s]) => (
            <a key={t} href="#" className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 card-hover">
              <div>
                <div className="font-display text-xl">{t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s}</div>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:scale-110">
                <Download className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-4xl bg-ink p-10 text-cream shadow-elegant md:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold-soft">Apply now</div>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">Start your application.</h2>
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
                  <AdmissionField label="Parent's name" name="name" />
                  <AdmissionField label="Email" name="email" type="email" />
                  <AdmissionField label="Phone" name="phone" type="tel" />
                  <AdmissionField label="Applying for grade" name="grade" placeholder="e.g. Grade V" />
                  <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft">
                    Submit enquiry
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function AdmissionField({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
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

/* ============================ CONTACT ============================ */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const info = [
    { icon: MapPin, title: "Visit us", lines: ["123 University Road", "Karachi, Pakistan"] },
    { icon: Phone, title: "Call us", lines: ["+92 345678932", "Admissions: +92 345678932"] },
    { icon: Mail, title: "Email", lines: ["PKS@gmail.com", "PKS@gmail.com"] },
    { icon: Clock, title: "Office hours", lines: ["Mon – Fri · 8:00 AM – 4:30 PM", "Sat · 9:00 AM – 1:00 PM"] },
  ];
  return (
    <section id="contact">
      <section className="relative overflow-hidden gradient-hero py-24 text-cream">
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.28em] text-gold-soft">Contact</div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">We'd love to hear <em className="text-gradient-gold">from you</em>.</h1>
          <p className="mt-6 max-w-xl text-cream/70">
            Questions, admissions, campus visits or media enquiries — write to us and we'll respond within one business day.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          {info.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex gap-5 rounded-3xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-gold-soft">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-gold">{title}</div>
                {lines.map((l) => <div key={l} className="mt-1 text-sm text-foreground/80">{l}</div>)}
              </div>
            </div>
          ))}
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
                  <ContactField label="Your name" name="name" />
                  <ContactField label="Email" name="email" type="email" />
                </div>
                <ContactField label="Subject" name="subject" />
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
    </section>
  );
}

function ContactField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
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

/* ============================ SHARED ============================ */
export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 sm:py-28">
      <div className="container-page">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</div>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] sm:text-5xl md:text-6xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
