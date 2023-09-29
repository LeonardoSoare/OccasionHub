import AttendButton from "./AttendButton";
import Button from "./Button";
export default function EventInfo({
  selectedEvent,
  handleAttending,
  selectedUserEmail,
  handleUnAttending,
  handleExit,
}) {
  return (
    <div className="user-info">
      <div className="event-header">
        <p className="user-title">{selectedEvent.name}</p>
        <Button symbol="X" text="" onHandler={handleExit} />
      </div>

      <p className="description-title">Summary:</p>
      <p className="description">{selectedEvent.eventDescription}</p>
      {selectedEvent.numberOfSeats > 0 &&
      !!!selectedEvent.participating.includes(selectedUserEmail) ? (
        <AttendButton
          id={selectedEvent.id}
          handleAttending={handleAttending}
          text="Join event"
        />
      ) : (
        ""
      )}
      {!!selectedEvent.participating.includes(selectedUserEmail) ? (
        <AttendButton
          handleAttending={handleUnAttending}
          text="Cancel reservation"
        />
      ) : (
        ""
      )}
    </div>
  );
}
