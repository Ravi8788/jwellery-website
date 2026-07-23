import Link from "next/link";
import { Button } from "@/components/Buttons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background section-padding">
      <div className="mx-auto max-w-lg text-center">
        <p className="section-eyebrow mb-3">404</p>
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/collections" variant="outline">
            Collections
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Or{" "}
          <Link href="/contact" className="text-gold hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
