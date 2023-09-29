import { useState } from "react";
import QuickCancelButton from "./QuickCancelButton";
export default function EventItem({ name, quickUnAttend, id }) {
  const [hover, setHover] = useState(null);

  function handleOnHover() {
    setHover(true);
  }
  function handleOutHover() {
    setHover(false);
  }
  return (
    <div
      onMouseOver={handleOnHover}
      onMouseOut={handleOutHover}
      className="event-item"
    >
      <p>{name}</p>
      {hover && (
        <QuickCancelButton symbol="X" id={id} quickUnAttend={quickUnAttend} />
      )}
    </div>
  );
}
