import "../style/menu.css";
import hamburger from "../imgs/hamburger.svg";
import { useState } from "react";
export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`menu ${isOpen ? "" : "notOpen"}`}>
      {children}
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="hamburger-wrapper"
      >
        <img src={hamburger} alt="menu-icon" className="hamburger" />
      </div>
    </div>
  );
}
