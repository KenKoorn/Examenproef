import PinkButton from "./PinkButton";

function HomeCard({item}) {
  return (
    <div className="home-card">
      <div className="home-card__title">Jaar {item.year}</div>
      <div className="home-card__phase">{item.fase}</div>
      <div className="home-card__text">{item.description}</div>

      <PinkButton text="Ondek meer ->" route={route('year.show', item.year)}/>
    </div>
  );
}


export default HomeCard;