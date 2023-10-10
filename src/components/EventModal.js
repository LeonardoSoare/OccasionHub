import { useEffect } from "react";
import backarrows from "../imgs/backarrows.svg";
import candidate from "../imgs/candidate.svg";
import cards from "../imgs/cards.svg";
import clock from "../imgs/clock.svg";
import events from "../imgs/events.svg";
import festive from "../imgs/festive.svg";
import fun from "../imgs/fun.svg";
import home from "../imgs/home.svg";
import icon from "../imgs/party.svg";
import ticket from "../imgs/ticket.svg";
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
  console.log(participating);
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal-background">
        <p className="modal-title">{event.name}</p>
      </div>
      <p className="modal-title-description">Description:</p>
      <p className="modal-description">{event.eventDescription}</p>
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
      {}
      {/* <img className="modal-img" alt="festivity" src={festive} /> */}
    </div>
  );
}

export default EventModal;
