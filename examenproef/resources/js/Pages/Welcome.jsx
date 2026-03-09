import { Head, Link, usePage } from "@inertiajs/react";

import heroImg from "../../../public/img/frontimagema.jpg";
import logo from "../../../public/img/logowitwelkombijma.jpg";
import HomeCard from "@/Components/HomeCard";

function Welcome() {
  const user = usePage().props.auth.user;
  const years = usePage().props.years;
  console.log(usePage().props);
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
            {
              years.map((item, index) => <HomeCard item={item} key={index}/>)
            }
          </div>
          <div className="home-hero__actions">
            {
              user != null ?
              <a href={route('dashboard')} className="btn btn--primary"></a>
              :
              <a href={route('login')} className="btn btn--primary"></a>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;