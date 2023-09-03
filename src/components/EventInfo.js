import AttendButton from "./AttendButton";
export default function EventInfo({ selectedEvent, handleAttending }) {
  return (
    <div className="user-info">
      <p className="user-title">{selectedEvent.name}</p>
      <p className="description">{selectedEvent.eventDescription}</p>
      <AttendButton
        id={selectedEvent.id}
        handleAttending={handleAttending}
        text="Join event"
      />
    </div>
  );
}
