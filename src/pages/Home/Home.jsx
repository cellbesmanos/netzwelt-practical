import React, { useContext, useMemo } from "react";
import TeritoryList from "../../components/TeritoryList/TeritoryList";
import useTeritories from "../../hooks/useTeritories";
import { authenticationContext } from "../../providers/AuthenticationProvider";
import extractTeritories from "../../utils/extractTeritories";
import { unpersistUser } from "../../utils/userPeristence";

import "./Home.css";

export default function Home() {
  const [data, status] = useTeritories();
  const [_, setUser] = useContext(authenticationContext);
  const teritories = useMemo(() => extractTeritories(data), [data]);

  function handleLogout() {
    setUser(null);
    unpersistUser();
  }

  return (
    <main className="Home">
      <header className="Home__header">
        <div>
          <h1>Teritories</h1>
          <button onClick={handleLogout} type="button">
            Log out
          </button>
        </div>
        <p>Here are the list of teritories</p>
      </header>

      {status === "loading" ? (
        <p>Loading...</p>
      ) : teritories.length > 0 ? (
        <TeritoryList children={teritories} />
      ) : (
        <p>There is nothing in here...</p>
      )}
    </main>
  );
}
