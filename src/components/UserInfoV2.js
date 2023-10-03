import Button from "./Button";
import EventInfo from "./EventInfo";
import EventItem from "./EventItem";
import Form from "./Form";

export default function UserInfoV2({
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
    <div className="user-info">
      {!selectedEvent ? (
        <>
          <div className="attend-events">
            <p className="user-title">{!show ? `My events` : "Add event"}</p>
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
        </>
      ) : (
        <EventInfo
          selectedUserEmail={selectedUserEmail}
          selectedEvent={selectedEvent}
          handleAttending={handleAttending}
          handleUnAttending={handleUnAttending}
          handleExit={handleExit}
        />
      )}
      {!show ? (
        !!events.find((event) => event.hostedBy.includes(selectedUserEmail)) ? (
          <div className="hosted-events">
            <p className="user-title">Hosted events:</p>
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
        )
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
