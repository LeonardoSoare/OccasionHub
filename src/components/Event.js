import festive from "../imgs/festive.svg";
import ticket from "../imgs/ticket.svg";
import clock from "../imgs/clock.svg";
import candidate from "../imgs/candidate.svg";
import fun from "../imgs/fun.svg";
import party from "../imgs/party.svg";
import "../style/event.css";
export default function Event({
  ev,
  setSelectedEvent,
  selectedEvent,
  setShowAddEvent,
}) {
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
