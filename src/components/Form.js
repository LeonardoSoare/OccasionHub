import { useState } from "react";
import Button from "./Button";

export default function Form({
  setProfile,
  onAddEvent,
  setEvents,
  events,
  selectedUserEmail,
  setSelectedUser,
}) {
  const [description, setDescription] = useState("");
  const [eventName, setEventName] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [eventDate, setEventDate] = useState(new Date());
  function handleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      numberOfSeats: numberOfSeats,
      date: eventDate,
      eventDescription: description,
      id: Date.now(),
    };
    console.log(newEvent);
    onAddEvent();
    setEvents((events) => [...events, newEvent]);
    setProfile((pr) => {
      const newProfiles = pr.map((profile) =>
        profile.email === selectedUserEmail
          ? { ...profile, hostedEvents: [...profile.hostedEvents, newEvent.id] }
          : profile
      );
      console.log(newProfiles);
      console.log(selectedUserEmail);
      return newProfiles;
    });
  }

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <p className="user-title">Host event</p>
      <div className="input-field">
        <p className="instruction">Name of the Event</p>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <p className="instruction">Enter the number of seats available</p>
        <input
          type="number"
          placeholder="Number of seats available"
          value={numberOfSeats}
          onChange={(e) => setNumberOfSeats(e.target.value)}
        />
      </div>
      <div className="input-field">
        <p className="instruction">Enter the date of the event</p>
        <input
          type="date"
          placeholder="Which date to choose"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        ></input>
        <div className="input-field">
          <p className="instruction">
            Please provide a description for your event
          </p>
          <textarea
            className="text-area"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="button">
        <Button symbol={`+`} text={`Confirm event`} />
      </button>
    </form>
  );
}
