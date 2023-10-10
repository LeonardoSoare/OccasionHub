import { useParams } from "react-router-dom";
import EventList from "../components/EventList";

function Eventspage({
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  events,
  setEvents,
  selectedEvent,
  setShowAddEvent,
  setSelectedEvent,
}) {
  const { show } = useParams();
  console.log(show);
  return (
    <EventList
      events={events}
      setSelectedEvent={setSelectedEvent}
      selectedEvent={selectedEvent}
      setShowAddEvent={setShowAddEvent}
    />
  );
}

export default Eventspage;
