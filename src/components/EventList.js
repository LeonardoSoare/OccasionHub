import Event from "./Event";
import EventModal from "./EventModal";
import "../style/eventList.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function EventList({
  events,
  selectedEvent,
  setSelectedEvent,
  setShowAddEvent,
  handleAttending,
  handleUnAttending,
  selectedUserEmail,
}) {
  let { pathname } = useLocation();
  const { id } = useParams();
  const [ev] = events.filter((event) => event.id === +id);
  const navigate = useNavigate();
  return (
    <div
      className={pathname.includes("/events") ? "eventpage-page" : "event-list"}
    >
      {id && (
        <>
          <div className="backdrop" onClick={() => navigate("/events")}></div>
          <EventModal
            event={ev}
            setSelectedEvent={setSelectedEvent}
            handleAttending={handleAttending}
            handleUnAttending={handleUnAttending}
            selectedUserEmail={selectedUserEmail}
            selectedEvent={selectedEvent}
          />
        </>
      )}
      <p className="title">This month's events</p>
      {pathname.includes("/events") ? (
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
