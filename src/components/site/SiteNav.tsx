import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", to: "/about" as const },
  { label: "Principal", to: "/principal-message" as const },
  { label: "Academics", to: "/academics" as const },
  { label: "Classes", to: "/classes" as const },
  { label: "Teachers", to: "/teachers" as const },
  { label: "Facilities", to: "/facilities" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Events", to: "/events" as const },
  { label: "Achievements", to: "/achievements" as const },
  { label: "News", to: "/news" as const },
  { label: "FAQs", to: "/faqs" as const },
  { label: "Admissions", to: "/admissions" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/70" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-gold-soft shadow-elegant">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-xl text-ink">PKS</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Karachi, Pakistan
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.label}
                to={l.to}
                className="rounded-full px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-primary"
          >
            Apply now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden">
          <div className="container-page pb-6">
            <div className="rounded-3xl border border-border bg-card/95 p-4 backdrop-blur-xl shadow-elegant">
              <div className="flex flex-col">
                {links.map((l) =>
                  "to" in l ? (
                    <Link
                      key={l.label}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  ),
                )}
                <Link
                  to="/admissions"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
                >
                  Apply now <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
