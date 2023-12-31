import party from "../imgs/party.svg";
import backarrows from "../imgs/backarrows.svg";
import AttendButton from "./AttendButton";
import "../style/eventInfo.css";
import { useNavigate } from "react-router-dom";
export default function EventInfo({
  selectedEvent,
  handleAttending,
  selectedUserEmail,
  handleUnAttending,
  handleExit,
  setSelectedEvent,
}) {
  const navigate = useNavigate();
  return (
    <div className="event-info-container">
      <p className="user-title">{selectedEvent.name}</p>
      <div className="event-info-details">
        <img className="event-info-img" src={party} alt="party" />
        <div className="event-info-description">
          <div className="event-info-date">
            <p className="description-title">Time:</p>
            <p className="event-info-time">{selectedEvent.date}</p>
          </div>
          <p className="description-title">Summary:</p>
          <p className="description">
            {selectedEvent.eventDescription.substr(0, 130)}
            <span onClick={(e) => navigate(`/events/${selectedEvent.id}`)}>
              ...show more.
            </span>
          </p>
        </div>
      </div>
      <div className="controls">
        {selectedEvent.numberOfSeats > 0 &&
        !!!selectedEvent.participating.includes(selectedUserEmail) ? (
          <>
            <div
              onClick={(e) => setSelectedEvent(null)}
              className="instructions"
            >
              <img className="back" src={backarrows} alt="go-back" />
              <p className="instructions-text">Back to my events</p>
            </div>
            <AttendButton
              id={selectedEvent.id}
              handleAttending={handleAttending}
              text="Join event"
            />
          </>
        ) : (
          ""
        )}

        {!!selectedEvent.participating.includes(selectedUserEmail) ? (
          <>
            <div
              onClick={(e) => setSelectedEvent(null)}
              className="instructions"
            >
              <img className="back" src={backarrows} alt="go-back" />
              <p className="instructions-text">Back to my events</p>
            </div>
            <AttendButton
              kind="cancel"
              handleAttending={handleUnAttending}
              text="Cancel reservation"
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
