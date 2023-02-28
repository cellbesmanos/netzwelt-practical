import React from "react";

export default function Teritory({ children }) {
  return (
    <ul>
      {children.map((c) => (
        <div key={c.id}>
          <li>{c.name}</li>

          {c.children && <Teritory children={c.children} />}
        </div>
      ))}
    </ul>
  );
}
