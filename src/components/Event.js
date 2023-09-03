export default function Event({ ev, setSelectedEvent }) {
  return (
    <div
      className="event"
      onClick={(e) => {
        setSelectedEvent(ev);
      }}
    >
      <p className="date">{ev.date}</p>
      <p className="name">{ev.name}</p>
      <p className="seats">{ev.numberOfSeats} </p>
    </div>
  );
}
