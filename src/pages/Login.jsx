import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationContext } from "../providers/AuthenticationProvider";
import loginUser from "../services/loginUser";

export default function Login() {
  const [user, setUser] = useContext(authenticationContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const username = formData.get("username");
      const password = formData.get("password");

      const user = await loginUser(username, password);

      setUser(user);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      {error ? <div>{error}</div> : null}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            name="username"
            max={16}
            required
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            type="text"
            placeholder="Enter your password"
            name="password"
            max={16}
            required
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
