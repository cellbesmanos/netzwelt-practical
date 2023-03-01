import React, { useMemo } from "react";
import TeritoryList from "../components/TeritoryList/TeritoryList";
import useTeritories from "../hooks/useTeritories";
import extractTeritories from "../utils/extractTeritories";

export default function Home() {
  const [data, status] = useTeritories();
  const teritories = useMemo(() => extractTeritories(data), [data]);

  return (
    <main style={{ padding: "64px 32px" }}>
      <header>
        <h1>Teritories</h1>
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
