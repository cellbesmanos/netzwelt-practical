import React from "react";
import Teritory from "./Teritory";

export default function TeritoryList({ children }) {
  return (
    <div>
      {children.map((c) => (
        <div
          key={c.id}
          style={{ marginBlockStart: "5px", paddingInlineStart: "25px" }}
        >
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
