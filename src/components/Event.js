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
      <p className="event-date">{ev.date}</p>
      <p className="event-name">{ev.name}</p>
      <p className={ev.numberOfSeats > 0 ? "seats-available" : "seats-sold"}>
        {ev.numberOfSeats > 0
          ? `${ev.numberOfSeats} seats left !`
          : "Tickets sold out !😢"}
      </p>
    </div>
  );
}
