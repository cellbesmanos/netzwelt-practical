import React from "react";
import Teritory from "../Teritory/Teritory";

import "./TeritoryList.css";

export default function TeritoryList({ children }) {
  return (
    <div className="TeritoryList">
      {children.map((c) => (
        <div key={c.id}>
          <Teritory name={c.name}>
            {c.children.length > 0 ? (
              <TeritoryList children={c.children} />
            ) : null}
          </Teritory>
        </div>
      ))}
    </div>
  );
}
