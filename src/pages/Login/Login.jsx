import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authenticationContext } from "../../providers/AuthenticationProvider";
import loginUser from "../../services/loginUser";
import {
  checkIfPersistedUserExists,
  persistUser,
} from "../../utils/userPeristence";

import "./Login.css";

export default function Login() {
  const [user, setUser] = useContext(authenticationContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkIfPersistedUserExists() || user) {
      navigate("/");
    }

    setIsLoading(false);
  }, [user]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      setHasSubmitted(true);

      const formData = new FormData(e.currentTarget);

      const username = formData.get("username");
      const password = formData.get("password");

      const user = await loginUser(username, password);

      setUser(user);
      persistUser(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setHasSubmitted(false);
    }
  }

  return (
    !isLoading && (
      <div className="Login">
        <form className="Login__form" onSubmit={handleSubmit}>
          {error && <div className="Login__error">{error}</div>}

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
              type="password"
              placeholder="Enter your password"
              name="password"
              max={16}
              required
            />
          </label>

          <button
            disabled={hasSubmitted}
            className="Login__submit"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    )
  );
}
