import festive from "../imgs/festive.svg";
import ticket from "../imgs/ticket.svg";
import clock from "../imgs/clock.svg";
import candidate from "../imgs/candidate.svg";
import fun from "../imgs/fun.svg";
import party from "../imgs/party.svg";
import "../style/event.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
export default function Event({
  ev,
  setSelectedEvent,
  selectedEvent,
  setShowAddEvent,
}) {
  const navigate = useNavigate();
  console.log(ev);
  let { pathname } = useLocation();
  console.log(pathname);
  if (pathname.includes("/events"))
    return (
      <div
        className="eventpage-event"
        onClick={(e) => {
          setShowAddEvent(false);
          selectedEvent !== ev ? setSelectedEvent(ev) : setSelectedEvent(null);
        }}
      >
        <img className="eventpage-img" src={festive} alt="eventpage" />
        <div className="eventpage-details">
          <p className="eventpage-name">{ev.name}</p>
          <div className="eventpage-description-title">Description:</div>
          <div
            className="eventpage-description"
            onClick={() => navigate(`/events/${ev.id}`)}
          >
            {`${ev.eventDescription.slice(0, 200)}...show more.`}
          </div>
          <div className="eventpage-info">
            <div
              className={
                ev.numberOfSeats > 0 ? "seats-available" : "seats-sold"
              }
            >
              <img className="eventpage-icon" src={ticket} alt="ticket-icon" />
              <p>
                {ev.numberOfSeats > 0
                  ? `${ev.numberOfSeats} seats left !`
                  : "Tickets sold out !😢"}
              </p>
            </div>
            <div className="eventpage-date">
              <img className="eventpage-icon" src={clock} alt="event-icon" />
              <p>{ev.date}</p>
            </div>
            <NavLink className="nav-component" to={`/events/${ev.id}`}>
              <Button
                className="eventpage-button"
                symbol={""}
                text="Show more"
                color={0}
              />
            </NavLink>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className="event"
      onClick={(e) => {
        setShowAddEvent(false);
        selectedEvent !== ev ? setSelectedEvent(ev) : setSelectedEvent(null);
      }}
    >
      <img className="event-img" src={festive} alt="event" />
      <div className="event-details">
        <p className="event-name">{ev.name}</p>
        <div className="event-info">
          <div
            className={ev.numberOfSeats > 0 ? "seats-available" : "seats-sold"}
          >
            <img className="event-icon" src={ticket} alt="ticket-icon" />
            <p>
              {ev.numberOfSeats > 0
                ? `${ev.numberOfSeats} seats left !`
                : "Tickets sold out !😢"}
            </p>
          </div>
          <div className="event-date">
            <img className="event-icon" src={clock} alt="event-icon" />
            <p>{ev.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
