import { Link } from "react-router";
import { ImagePerson } from "./ImagePerson";
import { MobileMenu } from "./MobileMenu";
import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Hero() {
  const user = useContext(UserContext);

  function handleLogout() {
    location.reload();
  }

  return (
    <section id="welcome">
      <nav id="wide-nav">
        <div id="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chart-pie"
          >
            <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          </svg>
          <a href="/#welcome">BRAND</a>
        </div>
        <ul id="page-menu">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            {user ? (
              <button id="logout-btn" onClick={handleLogout}>
                LOGOUT
              </button>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </li>
        </ul>
        <MobileMenu />
      </nav>
      {user?.email ? <p id="greeting">Hi, {user.email}</p> : null}
      <header>
        <h1>Welcome to Your ERP Solution</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum ex vel erat dapibus luctus. Morbi vel gravida nisl.
          Vestibulum."
        </p>
      </header>
      <div id="cta">
        <div>
          <p>Mauris mollis quam et placerat accumsan</p>
          <a href="#pricing">Check your options</a>
        </div>
        <ImagePerson />
      </div>
    </section>
  );
}
