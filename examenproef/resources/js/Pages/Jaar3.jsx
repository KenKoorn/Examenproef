import { Head, Link } from "@inertiajs/react";

export default function Jaar3() {
  return (
    <>
      <Head title="Jaar 3" />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Jaar 3</h1>
        <p>Welkom op de informatiepagina voor Jaar 3 van de opleiding.</p>
        <Link href="/" className="mt-4 inline-block text-blue-500 underline">
          Terug naar home
        </Link>
      </div>
    </>
  );
}
