import Form from "./Form";
import Button from "./Button";
import EventItem from "./EventItem";
import "../style/userInfo.css";
export default function UserInfo({
  setProfile,
  selectedUserEmail,
  showAddEvent,
  handleAddEvent,
  setEvents,
  events,
  handleUnAttending,
  quickUnAttend,
  handleExit,
  setSelectedUser,
  selectedEvent,
  handleAttending,
}) {
  const show = showAddEvent;
  return (
    <div className={!show ? `user-info` : "add-event-form"}>
      {!show ? (
        <>
          <div className="attend-events">
            <p className="user-info-title">
              {!show ? `My events` : "Add event"}
            </p>
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
                      date={event.date}
                      id={event.id}
                    />
                  ))
              : ""}
          </div>

          {!!events.find((event) =>
            event.hostedBy.includes(selectedUserEmail)
          ) ? (
            <div className="hosted-events">
              <p className="user-info-title">Hosted events:</p>
              {events
                .filter((event) => event.hostedBy.includes(selectedUserEmail))
                .map((event) => (
                  <EventItem
                    name={event.name}
                    date={event.date}
                    id={event.id}
                    quickUnAttend={quickUnAttend}
                  ></EventItem>
                ))}
              <Button
                symbol={`+`}
                text={`Host event`}
                onHandler={handleAddEvent}
              />
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <Form
          handleExit={handleExit}
          setProfile={setProfile}
          selectedUserEmail={selectedUserEmail}
          onAddEvent={handleAddEvent}
          setEvents={setEvents}
        />
      )}
    </div>
  );
}
