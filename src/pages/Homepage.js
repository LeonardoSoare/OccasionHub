import Hero from "../components/Hero";
function Homepage({
  profile,
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  events,
  setEvents,
  handleExit,
  handleAttending,
  handleUnAttending,
  quickUnAttend,
  selectedEvent,
  setShowAddEvent,
  setSelectedEvent,
}) {
  return (
    <Hero
      handleExit={handleExit}
      handleAttending={handleAttending}
      handleUnAttending={handleUnAttending}
      quickUnAttend={quickUnAttend}
      profiles={profile}
      selectedUserEmail={selectedUserEmail}
      setSelectedUser={setSelectedUser}
      setProfile={setProfile}
      events={events}
      setEvents={setEvents}
      setShowAddEvent={setShowAddEvent}
      setSelectedEvent={setSelectedEvent}
      selectedEvent={selectedEvent}
    />
  );
}

export default Homepage;
