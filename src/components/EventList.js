import Event from "./Event";
import "../style/eventList.css";
import { useLocation } from "react-router-dom";

export default function EventList({
  events,
  selectedEvent,
  setSelectedEvent,
  setShowAddEvent,
}) {
  let { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={pathname !== "/events" ? "event-list" : "eventpage-page"}>
      <p className="title">This month's events</p>
      {pathname === "/events" ? (
        <div className="eventpage-list">
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
      ) : (
        events.map((ev) => (
          <Event
            ev={ev}
            key={ev.id}
            setSelectedEvent={setSelectedEvent}
            selectedEvent={selectedEvent}
            setShowAddEvent={setShowAddEvent}
          />
        ))
      )}
    </div>
  );
}
