import React, { useState } from "react";

import arrowDown from "../../assets/caret-down-outline.svg";
import arrowForward from "../../assets/caret-forward-outline.svg";

import "./Teritory.css";

export default function Teritory({ name, children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenSubTeritories(e) {
    e.stopPropagation();

    setIsOpen((prev) => !prev);
  }

  return (
    <div onClick={handleOpenSubTeritories} className="Teritory">
      <p>
        {children && (
          <span className="Teritory__toggle">
            <img src={isOpen ? arrowDown : arrowForward} aria-hidden={true} />
          </span>
        )}
        {name}
      </p>

      {isOpen && <div>{children}</div>}
    </div>
  );
}
