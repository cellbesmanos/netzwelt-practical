import React, { useCallback, useMemo } from "react";
import Teritory from "../components/Teritory";
import useTeritories from "../hooks/useTeritories";
import extractTeritories from "../utils/extractTeritories";

export default function Home() {
  const [data, status] = useTeritories();
  const teritories = useMemo(() => extractTeritories(data), [data]);

  if (status === "loading") {
    return (
      <main>
        <header>
          <h1>Teritories</h1>
          <p>Here are the list of teritories</p>
        </header>

        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h1>Teritories</h1>
        <p>Here are the list of teritories</p>
      </header>

      {teritories.length > 0 ? (
        <ul>
          {teritories.map((t) => (
            <div key={t.id}>
              <li>{t.name}</li>

              {t.children && <Teritory children={t.children} />}
            </div>
          ))}
        </ul>
      ) : (
        <p>There is nothing in here...</p>
      )}
    </main>
  );
}
