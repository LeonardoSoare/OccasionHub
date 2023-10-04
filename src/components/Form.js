import { useState } from "react";
import Button from "./Button";
import AttendButton from "./AttendButton";

export default function Form({
  setProfile,
  onAddEvent,
  setEvents,
  selectedUserEmail,
  handleExit,
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
      participating: [],
      hostedBy: selectedUserEmail,
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
      <div className="form-content">
        <div className="form-first-part">
          <div className="input-field">
            <p className="instruction">Event Name</p>
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <p className="instruction">Event Date</p>
            <input
              type="date"
              placeholder="Which date to choose"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            ></input>
          </div>
          <div className="input-field">
            <p className="instruction">No.tickets</p>
            <input
              type="number"
              placeholder="Number of seats available"
              value={numberOfSeats}
              onChange={(e) => setNumberOfSeats(e.target.value)}
            />
          </div>
        </div>
        <div className="form-final-part">
          <div className="input-field-textarea">
            <p className="instruction">Event description</p>
            <div className="">
              <textarea
                className="text-area"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="buttons-form">
            <AttendButton symbol="" text="Cancel" kind="cancel" />
            <button className="button-form">
              <Button symbol={`+`} text={`Save event`} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
