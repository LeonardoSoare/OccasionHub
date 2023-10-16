import Button from "./Button";
import EventInfo from "./EventInfo";
import EventItem from "./EventItem";
import Form from "./Form";
import "../style/userInfo.css";
import { useParams } from "react-router-dom";
export default function UserInfoV2({
  setProfile,
  selectedUserEmail,
  handleAddEvent,
  setEvents,
  events,
  handleUnAttending,
  quickUnAttend,
  handleExit,
  selectedEvent,
  handleAttending,
  setSelectedEvent,
}) {
  let { show } = useParams();
  if (show !== "host") show = null;
  return (
    <div className="user-info">
      {!selectedEvent ? (
        <>
          <div className="attend-events">
            <p className="user-info-title">My events</p>
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
          setSelectedEvent={setSelectedEvent}
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
          <div className="hosted-events">
            <p className="user-info-title">Hosted events:</p>
            <Button
              symbol={`+`}
              text={`Host event`}
              onHandler={handleAddEvent}
            />
          </div>
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
