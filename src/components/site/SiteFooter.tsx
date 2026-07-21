import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-cream/80">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-2xl text-cream">PKS</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/50">
                  Karachi, Pakistan
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-cream/60">
              A premium learning experience where timeless values meet modern pedagogy. Educating curious minds since 1998.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            items={[
              ["About", "/#about"],
              ["Academics", "/#academics"],
              ["Facilities", "/#facilities"],
              ["Gallery", "/#gallery"],
              ["Events", "/#events"],
            ]}
          />
          <FooterCol
            title="Admissions"
            items={[
              ["Apply now", "/#admissions"],
              ["Process", "/#admissions"],
              ["Fee structure", "/#admissions"],
              ["Prospectus", "/#admissions"],
              ["FAQs", "/#faqs"],
            ]}
          />

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Visit us</div>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> 123 University Road, Karachi, Pakistan</li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +92 345678932</li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> PKS@gmail.com</li>
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5"
            >
              <input
                type="email"
                required
                placeholder="Newsletter email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button className="rounded-full bg-gold px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-gold-soft">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} PAKISTAN KARACHI SCHOOL PKS. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/" className="hover:text-cream">Privacy</a>
            <a href="/" className="hover:text-cream">Terms</a>
            <a href="/#contact" className="hover:text-cream">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-cream/50">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-cream/70 transition-colors hover:text-gold">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
