import { useEffect } from "react";
import backarrows from "../imgs/backarrows.svg";
import "../style/eventModal.css";
import AttendButton from "./AttendButton";
import { NavLink, useNavigate } from "react-router-dom";
function EventModal({
  event,
  setSelectedEvent,
  handleAttending,
  handleUnAttending,
  selectedUserEmail,
  selectedEvent,
}) {
  useEffect(
    function () {
      setSelectedEvent(event);
    },
    [event, setSelectedEvent]
  );
  const participating =
    selectedEvent?.participating.includes(selectedUserEmail);
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal-background">
        <p className="modal-title">{event.name}</p>
      </div>
      <p className="modal-title-description">Description:</p>
      <p className="modal-description">{event.eventDescription}</p>
      <div className="modal-buttons">
        <div
          className="instructions"
          onClick={(e) => {
            setSelectedEvent(null);
            navigate("/events");
          }}
        >
          {/* <AttendButton
          id={event.id}
          text="Join event"
        /> */}
          <img className="back" src={backarrows} alt="go-back" />
          <p className="instructions-text">Back to my events</p>
        </div>
        {participating ? (
          <NavLink className="nav-component" to="/events">
            <AttendButton
              kind="cancel"
              handleAttending={handleUnAttending}
              text="Cancel reservation"
            />
          </NavLink>
        ) : (
          <NavLink className="nav-component" to="/events">
            <AttendButton text="Join event" handleAttending={handleAttending} />
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default EventModal;
