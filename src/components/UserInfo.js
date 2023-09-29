import Form from "./Form";
import Button from "./Button";
import EventItem from "./EventItem";

export default function UserInfo({
  setProfile,
  selectedUserEmail,
  showAddEvent,
  handleAddEvent,
  setEvents,
  events,
  handleUnAttending,
  quickUnAttend,
}) {
  const show = showAddEvent;
  return (
    <div className={!show ? `user-info` : "add-event-form"}>
      {!show ? (
        <>
          <p className="user-title">{!show ? `Your events` : "Add event"}</p>
          {!!events.find((event) =>
            event.participating.includes(selectedUserEmail)
          )
            ? events
                .filter((event) =>
                  event.participating.includes(selectedUserEmail)
                )
                .map((event) => (
                  <EventItem
                    quickUnAttend={quickUnAttend}
                    name={event.name}
                    id={event.id}
                  />
                ))
            : ""}

          {!!events.find((event) =>
            event.hostedBy.includes(selectedUserEmail)
          ) ? (
            <>
              <p className="user-title">Hosted events:</p>
              {events
                .filter((event) => event.hostedBy.includes(selectedUserEmail))
                .map((event) => (
                  <EventItem
                    name={event.name}
                    id={event.id}
                    quickUnAttend={quickUnAttend}
                  ></EventItem>
                ))}
            </>
          ) : (
            ""
          )}
          <Button symbol={`+`} text={`Host event`} onHandler={handleAddEvent} />
        </>
      ) : (
        <Form
          setProfile={setProfile}
          selectedUserEmail={selectedUserEmail}
          onAddEvent={handleAddEvent}
          setEvents={setEvents}
        />
      )}
    </div>
  );
}
