import { Link } from "react-router-dom";
import { useWarframes } from "../../hooks";
import { Loading } from "../../components/loading";
import { ErrorMessage } from "../../components/ErrorMessage";

export default function Home() {
  const { data: warframes, isLoading, isError } = useWarframes();

  if (isLoading) return <Loading message="Accessing Arsenal Database..." />;
  if (isError)
    return <ErrorMessage message="Failed to retrieve Warframe roster." />;

  return (
    <div>
      <h1>Warframe Roster</h1>

      <div>
        {warframes?.map((frame) => (
          <Link to={`/frame/${frame.name}`} key={frame.uniqueName}>
            <div>
              <img
                src={`https://cdn.warframestat.us/img/${frame.imageName}`}
                alt={`${frame.name} portrait`}
              />
              <h2>{frame.name}</h2>
              <p>Click to view specs &rarr;</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
