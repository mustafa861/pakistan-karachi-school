import { Megaphone } from "lucide-react";

const notices = [
  "Admissions Open for 2026–27 · Limited seats in Grades I–IX",
  "Annual Science Exhibition · March 14",
  "PAKISTAN KARACHI SCHOOL ranked among the Top 10 Schools · Education Weekly",
  "Free entrance test every Saturday · Book your slot",
];

export function NoticeBar() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-ink text-cream">
      <div className="flex items-center gap-6 py-2.5 text-xs tracking-wide">
        <span className="ml-4 hidden shrink-0 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-gold-soft sm:inline-flex">
          <Megaphone className="h-3.5 w-3.5" />
          Live
        </span>
        <div className="flex w-full overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-12 pr-12 whitespace-nowrap">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="opacity-80">
                <span className="mr-3 text-gold">◆</span>
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
