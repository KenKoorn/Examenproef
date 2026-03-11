import { Head, Link, useForm, usePage } from "@inertiajs/react";

import heroImg from "../../../public/img/frontimagema.jpg";
import logo from "../../../public/img/logowitwelkombijma.jpg";
import HomeCard from "@/Components/HomeCard";
import PinkButton from "@/Components/PinkButton";
import { useState } from "react";
import YearModal from "@/Components/Modals/YearModal";

function Welcome() {
  const user = usePage().props.auth.user;
  const years = usePage().props.years;
  console.log(usePage().props);
  const [open, setOpen] = useState(false);
  const {post} = useForm();

  const submit = (event) => {
        event.preventDefault();
        post(route('logout'));
    }
  
  return (
    <>
      <Head title="Home" />

      <section className="home" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="home__overlay" />

        <div className="home__logo">
          <img className="home__logo--image" src={logo} alt="Mediacollege Amsterdam Logo" />
        </div>

        <div className="home__content">
          <div className="home__center">
            <h1 className="home__center--title">Curriculum Software Development</h1>
            <p className="home__center--text">
              Hoe ziet onze opleiding op Mediacollege Amsterdam eruit?
            </p>
          </div>

          <div className="home__cards">
            {
              years.map((item, index) => <HomeCard item={item} key={index}/>)
            }
          </div>
                
              {
                user !== null && 
                <>
                <PinkButton text="Logout" onClick={submit} className="logout-button"/>
                <PinkButton text="new jaar" onClick={() => setOpen(true)} />
                </>
              }   
        
          <div className="home__actions">
            {
              user !== null ?
              <a href={route('dashboard')} className="button button__blue">Naar dashboard</a>
              :
              <a href={route('login')} className="button button__blue">Inloggen</a>
            }
          </div>
        </div>

      </section>
      
      {
        open && <YearModal/>
      }
    </>
  );
}

export default Welcome;