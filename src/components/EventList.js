import Event from "./Event";
import "../style/eventList.css";
export default function EventList({
  events,
  selectedEvent,
  setSelectedEvent,
  setShowAddEvent,
}) {
  return (
    <div className="event-list">
      <p className="title">This month's events</p>

      {events.map((ev) => (
        <Event
          ev={ev}
          key={ev.id}
          setSelectedEvent={setSelectedEvent}
          selectedEvent={selectedEvent}
          setShowAddEvent={setShowAddEvent}
        />
      ))}
    </div>
  );
}
