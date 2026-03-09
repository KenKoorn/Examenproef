import PinkButton from "./PinkButton";

function HomeCard({item}) {
  return (
    <div className="home__card">
      <div className="home__card--title">Jaar {item.year}</div>
      <div className="home__card--phase">{item.fase}</div>
      <div className="home__card--text">{item.description}</div>

      <PinkButton text="Ondek meer ->" route={route('year.show', item.year)}/>
    </div>
  );
}


export default HomeCard;