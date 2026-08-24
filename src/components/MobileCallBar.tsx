import Link from "next/link";
import { SITE } from "@/content/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/15 bg-brand-ink text-white md:hidden">
      <a
        href={SITE.phoneHref}
        className="py-3.5 text-center font-display text-[11px] uppercase tracking-[0.24em]"
      >
        Call Angeliki
      </a>
      <Link
        href="/contact"
        className="border-l border-white/15 py-3.5 text-center font-display text-[11px] uppercase tracking-[0.24em]"
      >
        Start Planning
      </Link>
    </div>
  );
}
