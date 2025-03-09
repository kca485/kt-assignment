import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="panel flex-column center">
      <h1>404 Not Found</h1>
      <p>
        Go back <Link to="/">home.</Link>
      </p>
    </div>
  );
}
