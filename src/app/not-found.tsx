import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Page not found
        </h2>
        <p className="text-neutral-500 text-base sm:text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full border-2 border-black dark:border-white font-medium transition-colors duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}