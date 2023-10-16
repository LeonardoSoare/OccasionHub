import EventList from "../components/EventList";

function Eventspage({
  selectedUserEmail,
  events,
  selectedEvent,
  setShowAddEvent,
  setSelectedEvent,
  handleAttending,
  handleUnAttending,
}) {
  return (
    <EventList
      events={events}
      setSelectedEvent={setSelectedEvent}
      selectedEvent={selectedEvent}
      setShowAddEvent={setShowAddEvent}
      handleAttending={handleAttending}
      handleUnAttending={handleUnAttending}
      selectedUserEmail={selectedUserEmail}
    />
  );
}

export default Eventspage;
