import { useState } from "react";
import EventList from "./EventList";
import UserInfo from "./UserInfo";
import EventInfo from "./EventInfo";

export default function Hero({
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  currentAccount,
  profiles,
}) {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  function handleAttending() {
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: [
                ...profile.participatingEvents,
                selectedEvent.id,
              ],
            }
          : profile
      )
    );
    setSelectedEvent(null);
  }
  function handleAddEvent() {
    setShowAddEvent(!showAddEvent);
  }
  return (
    <div className="hero">
      <EventList events={events} setSelectedEvent={setSelectedEvent} />
      {!selectedEvent ? (
        <UserInfo
          setProfile={setProfile}
          setSelectedUser={setSelectedUser}
          selectedUserEmail={selectedUserEmail}
          showAddEvent={showAddEvent}
          handleAddEvent={handleAddEvent}
          setEvents={setEvents}
          events={events}
        />
      ) : (
        <EventInfo
          selectedEvent={selectedEvent}
          handleAttending={handleAttending}
        />
      )}
    </div>
  );
}
