import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationContext } from "../providers/AuthenticationProvider";
import loginUser from "../services/loginUser";

export default function Login() {
  const [_, setUser] = useContext(authenticationContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    const user = await loginUser(username, password);

    setUser(user);
    navigate("/");
  }

  return (
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
  );
}
