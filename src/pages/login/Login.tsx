import { useContext } from "react";
import { UserDispatchContext } from "../../context/user";
import { useNavigate } from "react-router";

export function Login() {
  const userDispatch = useContext(UserDispatchContext);
  const navigate = useNavigate();

  function handleLogin(formData: FormData) {
    const email = formData.get("email") ?? "";
    if (typeof email === "object") {
      throw new TypeError("Incorrect type for email");
    }

    userDispatch({
      type: "login",
      email: email,
    });

    navigate("/");
  }

  return (
    <div id="login" className="panel flex-row center">
      <form className="flex-column" action={handleLogin}>
        <header>
          <h1>Login</h1>
          <p>Enter your email below to login to your account</p>
        </header>
        <section>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@example.com"
            required
          />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </section>
        <button>Login</button>
      </form>
    </div>
  );
}
