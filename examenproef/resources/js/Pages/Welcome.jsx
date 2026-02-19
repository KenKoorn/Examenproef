import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";

import { useState } from "react";

export function OpleidingInfo() {
  function Slideshow() {
  const slides = [
    {
      image: "/src/img/Hero-img.png",
      title: "Amsterdam"
    },
    {
      image: "/src/img/tekstpol.png",
      title: "Creatieve stad"
    },
    {
      image: "/src/img/Hero-img.png",
      title: "Jouw toekomst"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };}

  return (
    <div className="slideshow-container">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>

        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>

        <h2 className="slide-title">
          {slides[current].title}
        </h2>
      </div>
    </div>
  );
}


function Welcome({auth}){
    return(
        <>
        {
            auth.user ? <AuthenticatedLayout>
                
            </AuthenticatedLayout>
            : <GuestLayout>
                 {/* Foto bovenaan */}
      <section className="opleiding-hero">
        <div className="opleiding-hero-overlay">
          <h1>De opleiding</h1>
        </div>
      </section>
      

      {/* Informatie blok */}
      <section className="opleiding-info">
        <div className="container">
          <h2>Opleidingsinformatie</h2>

          <div className="info-grid">
            <div className="info-item">
              <h4>Toelatingseis</h4>
              <p>Minimaal vmbo-kb + creatieve en artistieke aanleg</p>
            </div>
            <div className="info-item">
              <h4>Leerjaren</h4>
              <p>4 jaar (3 jaar voor versneld traject)</p>
            </div>
            <div className="info-item">
              <h4>Leerweg</h4>
              <p>BOL</p>
            </div>
            <div className="info-item">
              <h4>Niveau</h4>
              <p>4</p>
            </div>
            <div className="info-item">
              <h4>Kwalificatiedossier</h4>
              <p>Mediavormgever</p>
            </div>
            <div className="info-item">
              <h4>Maximum aantal</h4>
              <p>90 plaatsen + 30 voor versneld traject</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat leer je */}
      <section className="opleiding-content">
        <div className="container">
          <h2>Wat leer je?</h2>

          <p>
            Tijdens de vierjarige opleiding Mediavormgever leer je verschillende
            media-uitingen vormgeven en maken, zoals video’s, infographics,
            social media posts, advertenties, motion graphics, banners, games,
            apps of websites, tijdschriften, billboards, productverpakkingen,
            visitekaartjes, posters en kranten.
          </p>

          <p>
            Je doorloopt het hele ontwerpproces: van klantvraag en idee-ontwikkeling
            tot prototyping en presenteren. Je werkt samen met specialisten en
            leert hoe je een product ontwikkelt dat perfect aansluit bij de opdrachtgever.
          </p>

          <h3>Tijdens de opleiding besteden we aandacht aan:</h3>
          <ul className="leerpunten">
            <li>Onderzoeken</li>
            <li>Concept / vertalen</li>
            <li>Vormgeven</li>
            <li>Realiseren</li>
            <li>Presenteren</li>
            <li>Professionaliseren</li>
          </ul>
        </div>
      </section>

      {/* Studieprogramma & Meeloopdagen */}
      <section className="opleiding-extra">
        <div className="container">
          <h2>Studieprogramma & Meeloopdagen</h2>

          <p>
            In studiejaar ’25-’26 organiseert de opleiding verschillende
            meeloopdagen van 10.00-14.00 uur. Je volgt twee lessen en maakt
            opdrachten om te ontdekken of deze opleiding bij jou past.
          </p>

          <ul className="meeloopdagen">
            <li>Maandag 9 februari 2026</li>
            <li>Maandag 23 maart 2026</li>
            <li>Maandag 18 mei 2026</li>
          </ul>

          <p>
            Vanaf 9.45 uur ben je welkom bij Mediacollege Amsterdam,
            Contactweg 36 (20 minuten lopen vanaf station Sloterdijk
            of bus 22 richting Muiderpoortstation).
          </p>

          <p>
            Tijdens de opleiding krijg je een realistisch beeld van het werkveld.
            In de video ‘14 Brutale vragen’ krijg je een kijkje achter de schermen
            van de opleiding en het Mediacollege.
          </p>
        </div>
      </section>
      {/* Meer weten / Video */}
<section className="opleiding-video">
  <div className="container">
    <h2>Meer weten? Bekijk de video</h2>

    <p>
      Wat houdt deze opleiding in? En waarom zou je juist deze opleiding
      willen volgen? In de video hieronder vertelt een van de docenten
      er meer over.
    </p>

    <ul className="video-info">
      <li>
        De video hieronder is onderdeel van ‘14 Brutale vragen met Niek Roozen’.
        In deze hoofdfilm neemt acteur, presentator én oud-student Niek Roozen
        je mee door Mediacollege Amsterdam.
      </li>
      <li>
        In de playlist zie je ook de korte video’s van onze andere opleidingen.
      </li>
    </ul>

    <div className="video-wrapper">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/AVmYj2GwLyI"
        title="Opleiding Mediavormgever"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

{/* Waarom MA - afbeelding + tekst */}
<section className="waarom-ma">
  <div className="waarom-ma-image"></div>

  <div className="waarom-ma-content">
    <div className="container">
      <h2>Waarom Ma?</h2>
      <p>
        MA helpt om jouw speciale talent te ontdekken en daar je beroep van te maken.
        We kennen de creatieve bureaus in en rond Amsterdam en weten wat jouw
        toekomstige werkgevers belangrijk vinden.
      </p>

      <p>
        Want MA is een vakschool. Al ruim 100 jaar leiden we studenten zo op dat
        ze direct aan het werk kunnen. Dus koppelen we je aan bedrijven en laten
        we je samenwerken met studenten van andere opleidingen.
      </p>
      <div className="tekstpol-ma-image"></div>
    </div>
  </div>
</section>

{/* Slideshow Section */}
<section className="ma-slideshow">
  {/* <Slideshow /> */}
</section>

{/* Tekst onder slideshow */}
<section className="slideshow-tekst">
  <div className="container">
    <h2>Studeren in Amsterdam</h2>
    <p>
      Tijdens de opleiding Software Development werk je aan echte projecten
      in het hart van Amsterdam. Je leert programmeren, samenwerken en
      oplossingen bouwen voor echte opdrachtgevers.
    </p>
    <p>
      Dankzij de creatieve en technologische omgeving van de stad krijg je
      volop kansen om jezelf te ontwikkelen.
    </p>
  </div>
</section>

{/* Nieuwe foto sectie */}
<section className="onder-foto-sectie">
  <div className="onder-foto-overlay">
    <h2>Contact</h2>
  </div>
</section>



            </GuestLayout>
        }
        </>
    );
}

export default Welcome;