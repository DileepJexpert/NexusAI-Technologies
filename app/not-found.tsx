import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="text-8xl">🧭</div>
      <h1 className="mt-6 font-heading text-4xl font-extrabold sm:text-5xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved
        or been renamed.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/products">See all products</Link>
        </Button>
      </div>
    </div>
  );
}
