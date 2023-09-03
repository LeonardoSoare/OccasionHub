import Form from "./Form";
import Button from "./Button";

export default function UserInfo({
  setProfile,
  setSelectedUser,
  selectedUserEmail,
  showAddEvent,
  handleAddEvent,
  setEvents,
  events,
}) {
  const show = showAddEvent;
  return (
    <div className={!show ? `user-info` : "add-event-form"}>
      {!show ? (
        <>
          <p className="user-title">{!show ? `Your events` : "Add event"}</p>
          <Button symbol={`+`} text={`Host event`} onHandler={handleAddEvent} />
        </>
      ) : (
        <Form
          setProfile={setProfile}
          setSelectedUser={setSelectedUser}
          selectedUserEmail={selectedUserEmail}
          onAddEvent={handleAddEvent}
          setEvents={setEvents}
          events={events}
        />
      )}
    </div>
  );
}
