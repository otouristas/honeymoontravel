import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export default function NotFound() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">404</p>
        <h1 className="mt-4 font-display text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-sm bg-accent px-6 py-3 text-sm tracking-wide text-white transition hover:bg-accent-dark"
        >
          Return Home
        </Link>
      </section>
      <CtaSection />
    </>
  );
}
