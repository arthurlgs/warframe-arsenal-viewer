import { BASE_URL } from "../../hooks";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Tenno Arsenal Database</Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Warframes</Link>
            </li>
            <li>
              <a 
              href={`${BASE_URL}/waframes`} 
              target="_blank" 
              rel="noreferrer">
                Raw API
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
