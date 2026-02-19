import { Head, Link } from "@inertiajs/react";

import heroImg from "../../img/frontimagema.jpg";
import logo from "../../img/logowitwelkombijma.jpg";

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Home" />

      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="home-hero__overlay" />

        {/* Logo volledig linksboven */}
        <div className="home-hero__logo">
          <img src={logo} alt="Mediacollege Amsterdam Logo" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__center">
            <h1>Curriculum Software Development</h1>
            <p>
              Hoe ziet onze opleiding op Mediacollege Amsterdam eruit?
            </p>
          </div>

          <div className="home-cards">
            <HomeCard
              year="Jaar 1"
              phase="Verkennings fase"
              text="Ontdek de basis van development, samenwerken en je eerste projecten."
              href="/jaar1"
            />
            <HomeCard
              year="Jaar 2"
              phase="Verdiepings fase"
              text="Meer focus op frameworks, databases en werken in sprints."
              href="/jaar2"
            />
            <HomeCard
              year="Jaar 3"
              phase="Praktijk fase"
              text="Stage, grotere projecten en realistische opdrachten met partners."
              href="/jaar3"
            />
            <HomeCard
              year="Jaar 4"
              phase="Afstudeer fase"
              text="Afstuderen met een eindproject en portfolio richting werkveld."
              href="/jaar4"
            />
          </div>

          <div className="home-hero__actions">
            {auth?.user ? (
              <Link className="btn btn--primary" href="/dashboard">
                Naar dashboard
              </Link>
            ) : (
              <>
                <Link className="btn btn--primary" href="/login">
                  Inloggen
                </Link>
                <Link className="btn btn--ghost" href="/register">
                  Registreren
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function HomeCard({ year, phase, text, href }) {
  return (
    <div className="home-card">
      <div className="home-card__title">{year}</div>
      <div className="home-card__phase">{phase}</div>
      <div className="home-card__text">{text}</div>

      <Link className="home-card__btn" href={href}>
        Ontdek meer →
      </Link>
    </div>
  );
}
