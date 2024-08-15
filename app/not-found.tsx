import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-lg mb-6">
          <span className="block text-xl mb-2">Oops!</span>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="text-md mb-8">It might have been moved or deleted. Please check the URL or return to the homepage.</p>
        <Link href="/">
          <button className="bg-primary text-gray-900 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-primary transition ease-in-out duration-300">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
