import Hero from "../components/Hero";
function Homepage({
  profile,
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  events,
  setEvents,
}) {
  return (
    <Hero
      profiles={profile}
      selectedUserEmail={selectedUserEmail}
      setSelectedUser={setSelectedUser}
      setProfile={setProfile}
      events={events}
      setEvents={setEvents}
    />
  );
}

export default Homepage;
