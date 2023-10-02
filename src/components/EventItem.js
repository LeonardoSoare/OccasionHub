import { useState } from "react";
import QuickCancelButton from "./QuickCancelButton";
import clock from "../imgs/clock.svg";
export default function EventItem({ name, date, quickUnAttend, id }) {
  // const [hover, setHover] = useState(null);

  // function handleOnHover() {
  //   setHover(true);
  // }
  // function handleOutHover() {
  //   setHover(false);
  // }
  return (
    <div
      // onMouseOver={handleOnHover}
      // onMouseOut={handleOutHover}
      className="event-item"
    >
      <p>{name}</p>
      <div className="event-item-date">
        <img className="event-item-icon" src={clock} alt="clock-item" />
        <p>{date}</p>
        <QuickCancelButton id={id} quickUnAttend={quickUnAttend} />
      </div>

      {/* {hover && (
        <QuickCancelButton symbol="X" id={id} quickUnAttend={quickUnAttend} />
      )} */}
    </div>
  );
}
