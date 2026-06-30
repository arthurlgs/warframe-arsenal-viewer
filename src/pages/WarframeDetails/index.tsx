import { useParams, Link } from "react-router-dom";
import { useWarframes } from "../../hooks";
import { Loading } from "../../components/loading";
import { ErrorMessage } from "../../components/ErrorMessage";

export default function WarframeDetails() {
  const { name } = useParams<{ name: string }>();

  const { data: allFrames, isLoading, isError } = useWarframes();
  const frame = allFrames?.find((f) => f.name === name);

  if (isLoading)
    return <Loading message={`Decrypting ${name} schematics...`} />;
  if (isError || !frame)
    return (
      <ErrorMessage message="Frame schematics not found." showHomeLink={true} />
    );

  return (
    <div>
      <Link to="/">&larr; Return to Roster</Link>

      <div>
        <img
          src={`https://cdn.warframestat.us/img/${frame.imageName}`}
          alt={`${frame.name} portrait`}
        />

        <div>
          <h1>{frame.name}</h1>
          <p>{frame.description}</p>
          <p>
            <strong>Passive:</strong> {frame.passiveDescription}
          </p>
        </div>

        <div>
          <h2>Base Stats</h2>
          <ul>
            <li>
              <strong>Health:</strong> {frame.health}
            </li>
            <li>
              <strong>Shield:</strong> {frame.shield}
            </li>
            <li>
              <strong>Armor:</strong> {frame.armor}
            </li>
            <li>
              <strong>Energy:</strong> {frame.power}
            </li>
            <li>
              <strong>Sprint Speed:</strong> {frame.sprintSpeed}
            </li>
          </ul>
        </div>

        <div>
          <h2>Abilities</h2>
          <div>
            {frame.abilities.map((ability) => (
              <div key={ability.name}>
                <img
                  src={`https://cdn.warframestat.us/img/${ability.imageName}`}
                  alt={ability.name}
                />
                <h3>{ability.name}</h3>
                <p>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
