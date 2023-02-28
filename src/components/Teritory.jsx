import React, { useState } from "react";

import arrowDown from "../assets/caret-down-outline.svg";
import arrowForward from "../assets/caret-forward-outline.svg";

export default function Teritory({ name, children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenSubTeritories(e) {
    e.stopPropagation();

    setIsOpen((prev) => !prev);
  }

  return (
    <div onClick={handleOpenSubTeritories}>
      <p>
        {children && (
          <span
            style={{
              display: "inline-block",
              marginInlineEnd: "4px",
              width: "16px",
              aspectRatio: "1",
            }}
          >
            <img
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              src={isOpen ? arrowDown : arrowForward}
              aria-hidden={true}
            />
          </span>
        )}
        {name}
      </p>

      {isOpen && <div>{children}</div>}
    </div>
  );
}
