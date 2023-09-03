import Event from "./Event";

export default function EventList({ events, setSelectedEvent }) {
  return (
    <div className="event-list">
      {events.map((ev) => (
        <Event ev={ev} key={ev.id} setSelectedEvent={setSelectedEvent} />
      ))}
    </div>
  );
}
