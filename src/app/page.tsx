import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Next Starter</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A modern Next.js starter template with responsive layout
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-2">Feature {i}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
