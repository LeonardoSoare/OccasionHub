import { useState } from "react";
import EventList from "./EventList";
import UserInfo from "./UserInfo";
import EventInfo from "./EventInfo";

export default function Hero({
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  events,
  setEvents,
}) {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  function handleExit() {
    setSelectedEvent(null);
    setShowAddEvent(false);
  }
  function handleAttending() {
    if (selectedEvent < 1) return;
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
    setEvents((events) =>
      events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              participating: [...event.participating, selectedUserEmail],
              numberOfSeats: +event.numberOfSeats--,
            }
          : event
      )
    );
    setSelectedEvent(null);
  }
  function handleUnAttending() {
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: profile.participatingEvents.filter((event) =>
                event.id !== selectedEvent.id ? true : false
              ),
            }
          : profile
      )
    );
    setEvents((events) =>
      events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              participating: event.participating.filter(
                (participator) => participator !== selectedUserEmail
              ),
              numberOfSeats: event.numberOfSeats++,
            }
          : event
      )
    );
    setSelectedEvent(null);
  }
  function quickUnAttend(eventID) {
    console.log(eventID);
    const [quickEvent] = events.filter((event) => event.id === eventID);
    console.log(quickEvent);
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: profile.participatingEvents.filter(
                (event) => event.id !== quickEvent.id
              ),
            }
          : profile
      )
    );
    setEvents((events) =>
      events.map((event) =>
        event.id === quickEvent.id
          ? {
              ...event,
              participating: event.participating.filter(
                (participator) => participator !== selectedUserEmail
              ),
              numberOfSeats: event.numberOfSeats++,
            }
          : event
      )
    );
  }

  function handleAddEvent() {
    setShowAddEvent(!showAddEvent);
  }
  return (
    <div className="hero">
      <EventList
        events={events}
        setSelectedEvent={setSelectedEvent}
        selectedEvent={selectedEvent}
        setShowAddEvent={setShowAddEvent}
      />
      {!selectedEvent ? (
        <UserInfo
          handleExit={handleExit}
          setProfile={setProfile}
          setSelectedUser={setSelectedUser}
          selectedUserEmail={selectedUserEmail}
          showAddEvent={showAddEvent}
          handleAddEvent={handleAddEvent}
          setEvents={setEvents}
          events={events}
          handleUnAttending={handleUnAttending}
          quickUnAttend={quickUnAttend}
        />
      ) : (
        <EventInfo
          selectedUserEmail={selectedUserEmail}
          selectedEvent={selectedEvent}
          handleAttending={handleAttending}
          handleUnAttending={handleUnAttending}
          handleExit={handleExit}
        />
      )}
    </div>
  );
}
