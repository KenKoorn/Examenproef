import { Head, Link } from "@inertiajs/react";

export default function Jaar1() {
  return (
    <>
      <Head title="Jaar 1" />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Jaar 1</h1>
        <p>Welkom op de informatiepagina voor Jaar 1 van de opleiding.</p>
        <Link href="/" className="mt-4 inline-block text-blue-500 underline">
          Terug naar home
        </Link>
      </div>
    </>
  );
}
