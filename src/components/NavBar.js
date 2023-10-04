import cards from "../imgs/cards.svg";
import events from "../imgs/events.svg";
import home from "../imgs/home.svg";
import "../style/navBar.css";
export default function NavBar() {
  return (
    <div className="nav-component-container">
      <div className="nav-component">
        <img className="nav-component-icon" src={home} alt="home button" />
        <p className="nav-component-text">Home</p>
      </div>
      <div className="nav-component">
        <img className="nav-component-icon" src={events} alt="events button" />
        <p className="nav-component-text">Browse events</p>
      </div>
      <div className="nav-component">
        <img className="nav-component-icon" src={cards} alt="cards button" />
        <p className="nav-component-text">Host an event</p>
      </div>
    </div>
  );
}
