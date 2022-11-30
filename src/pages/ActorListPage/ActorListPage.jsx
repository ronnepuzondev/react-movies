import "./ActorListPage.css";
import ActorCard from "../../components/ActorCard/ActorCard"

export default function ActorPage({ movies }) {
  const actorList = movies.reduce((actors, m) => {
    m.cast.forEach((a) => {
      if (!actors.includes(a)) actors.push(a);
    });
    return actors;
  }, []);

  return (
    <div className="containerActor">
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}
