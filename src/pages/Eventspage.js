import { useParams } from "react-router-dom";
import EventList from "../components/EventList";

function Eventspage({
  selectedUserEmail,
  setSelectedUser,
  setProfile,
  events,
  setEvents,
}) {
  const { show } = useParams();
  console.log(show);
  return <div></div>;
}

export default Eventspage;
