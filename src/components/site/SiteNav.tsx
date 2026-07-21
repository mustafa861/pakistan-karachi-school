import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ArrowUpRight, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Principal's Message", href: "/#principal" },
      { label: "Academics", href: "/#academics" },
      { label: "Facilities", href: "/#facilities" },
    ],
  },
  { label: "Classes", href: "/#classes" },
  { label: "Teachers", href: "/#teachers" },
  {
    label: "Events",
    dropdown: [
      { label: "Gallery", href: "/#gallery" },
      { label: "Achievements", href: "/#achievements" },
      { label: "News", href: "/#news" },
    ],
  },
  {
    label: "Contact",
    dropdown: [
      { label: "Admissions", href: "/#admissions" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
        <a href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-gold-soft shadow-elegant">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-xl text-ink">PKS</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Karachi, Pakistan
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" onMouseLeave={() => setActiveDropdown(null)}>
          {navItems.map((item) =>
            "dropdown" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
              >
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground">
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-2xl border border-border bg-card p-2 shadow-elegant backdrop-blur-xl">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-xl px-3 py-2.5 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/#admissions"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-primary"
          >
            Apply now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page pb-6">
            <div className="rounded-3xl border border-border bg-card/95 p-4 backdrop-blur-xl shadow-elegant">
              <MobileNavItems items={navItems} onClose={() => setOpen(false)} />
              <a
                href="/#admissions"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
              >
                Apply now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNavItems({ items, onClose }: { items: typeof navItems; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="flex flex-col">
      {items.map((item) =>
        "dropdown" in item ? (
          <div key={item.label}>
            <button
              onClick={() => setExpanded(expanded === item.label ? null : item.label)}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary"
            >
              {item.label}
              <ChevronDown className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
            </button>
            {expanded === item.label && (
              <div className="ml-4 flex flex-col border-l border-border pl-3">
                {item.dropdown.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={onClose}
                    className="rounded-xl px-3 py-2.5 text-sm text-foreground/60 hover:bg-secondary hover:text-foreground"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary"
          >
            {item.label}
          </a>
        ),
      )}
    </div>
  );
}
