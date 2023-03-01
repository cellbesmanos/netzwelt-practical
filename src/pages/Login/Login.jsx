import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticationContext } from "../../providers/AuthenticationProvider";
import loginUser from "../../services/loginUser";
import setPeristenceCookie from "../../utils/setUserPeristence";

import "./Login.css";

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
      setPeristenceCookie(user);
      navigate("/");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <form className="Login__form" onSubmit={handleSubmit}>
        <label className="Login__input" htmlFor="username">
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            name="username"
            max={16}
            required
          />
        </label>

        <label className="Login__input" htmlFor="password">
          <input
            id="password"
            type="text"
            placeholder="Enter your password"
            name="password"
            max={16}
            required
          />
        </label>

        <button className="Login__submit" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
