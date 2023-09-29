import AttendButton from "./AttendButton";
export default function EventInfo({
  selectedEvent,
  handleAttending,
  selectedUserEmail,
  handleUnAttending,
}) {
  return (
    <div className="user-info">
      <p className="user-title">{selectedEvent.name}</p>
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
