import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-400 mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="text-accent hover:text-accent-hover font-medium transition-colors"
      >
        Return to {site.name}
      </Link>
    </main>
  );
}
