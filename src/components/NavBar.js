import { NavLink } from "react-router-dom";
import cards from "../imgs/cards.svg";
import events from "../imgs/events.svg";
import home from "../imgs/home.svg";
import "../style/navBar.css";

export default function NavBar() {
  return (
    <div className="nav-component-container">
      <div className="nav-component">
        <NavLink className="nav-component" to={`/`}>
          <img className="nav-component-icon" src={home} alt="home button" />
          <p className="nav-component-text">Home</p>
        </NavLink>
      </div>

      <div className="nav-component">
        <NavLink className="nav-component" to="events">
          <img
            className="nav-component-icon"
            src={events}
            alt="events button"
          />
          <p className="nav-component-text">Browse events</p>
        </NavLink>
      </div>
      <NavLink to="/host" className="nav-component">
        <img className="nav-component-icon" src={cards} alt="cards button" />
        <p className="nav-component-text">Host an event</p>
      </NavLink>
    </div>
  );
}
