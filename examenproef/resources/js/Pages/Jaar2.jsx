import { Head, Link } from "@inertiajs/react";

export default function Jaar2() {
  return (
    <>
      <Head title="Jaar 2" />
      <div className="jaar2">
        <h1 className="jaar2__title">Jaar 2</h1>
        <p className="jaar2__text">
          Welkom op de informatiepagina voor Jaar 2 van de opleiding.
        </p>
        <Link href="/" className="jaar2__link">
          Terug naar home
        </Link>
      </div>
    </>
  );
}

