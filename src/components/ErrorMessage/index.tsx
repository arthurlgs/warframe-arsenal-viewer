import { Link } from "react-router-dom";

interface ErrorMessageProps {
  message?: string;
  showHomeLink?: boolean;
}

export const ErrorMessage = ({
  message = "A network error occurred. Connection to the Lotus failed.",
  showHomeLink = false,
}: ErrorMessageProps) => {
  return (
    <div>
      <p>{message}</p>

      {showHomeLink && <Link to="/">&larr; Return to Arsenal Catalog</Link>}
    </div>
  );
};
