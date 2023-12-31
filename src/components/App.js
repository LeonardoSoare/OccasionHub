import { useState } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Homepage from "../pages/Homepage";
import Formpage from "../pages/Formpage";
import Eventspage from "../pages/Eventspage";
import { Route, Routes, useNavigate } from "react-router-dom";
const profileTemp = [
  {
    email: "test@example.com",
    firstName: "Guest",
    hostedEvents: [1695649125860],
    // hostedEvents: [],
    lastName: "Account",
    participatingEvents: [],
  },
  {
    email: "test@gmail.com",
    firstName: "John",
    hostedEvents: [1],
    // hostedEvents: [],
    lastName: "Doe",
    participatingEvents: [],
  },
  {
    email: "practice@gmail.com",
    firstName: "Alex",
    hostedEvents: [2],
    // hostedEvents: [],
    lastName: "Johnes",
    participatingEvents: [],
  },
];
const eventsTemp = [
  {
    date: "2023-09-05",
    eventDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hostedBy: "leonardomateisoare@gmail.com",
    id: 1695649125860,
    name: "Test Event",
    numberOfSeats: 10,
    participating: [],
  },
  {
    date: "2023-09-06",
    eventDescription: "Talking about current politics",
    hostedBy: "leonardomateisoare@gmail.com",
    id: 1,
    name: "PolytiX",
    numberOfSeats: 1000,
    participating: [],
  },
  {
    date: "2023-09-26",
    eventDescription: "Hello to my art gallery event",
    hostedBy: "leonardomateisoare@gmail.com",
    id: 2,
    name: "Artemis Opening",
    numberOfSeats: 40,
    participating: [],
  },
];

function App() {
  const navigate = useNavigate();
  const [events, setEvents] = useState(eventsTemp);
  // const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState(profileTemp);
  const [selectedUserEmail, setSelectedUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailAddress] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleExit() {
    setSelectedEvent(null);
  }
  function handleAttending() {
    if (selectedEvent < 1) return;
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: [
                ...profile.participatingEvents,
                selectedEvent.id,
              ],
            }
          : profile
      )
    );
    setEvents((events) =>
      events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              participating: [...event.participating, selectedUserEmail],
              numberOfSeats: event.numberOfSeats - 1,
            }
          : event
      )
    );
    setSelectedEvent(null);
  }
  // TEMPORARY

  function handleUnAttending() {
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: profile.participatingEvents.filter((event) =>
                event.id !== selectedEvent.id ? true : false
              ),
            }
          : profile
      )
    );
    setEvents((events) =>
      events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              participating: event.participating.filter(
                (participator) => participator !== selectedUserEmail
              ),
              numberOfSeats: event.numberOfSeats + 1,
            }
          : event
      )
    );
    setSelectedEvent(null);
  }
  function quickUnAttend(eventID) {
    const [quickEvent] = events.filter((event) => event.id === eventID);
    setProfile((pr) =>
      pr.map((profile) =>
        profile.email === selectedUserEmail
          ? {
              ...profile,
              participatingEvents: profile.participatingEvents.filter(
                (event) => event.id !== quickEvent.id
              ),
            }
          : profile
      )
    );
    setEvents((events) =>
      events.map((event) =>
        event.id === quickEvent.id
          ? {
              ...event,
              participating: event.participating.filter(
                (participator) => participator !== selectedUserEmail
              ),
              numberOfSeats: event.numberOfSeats + 1,
            }
          : event
      )
    );
  }
  function handleAddProfile(id) {
    navigate(`form`);
  }
  function handleProfileSubmit(e) {
    const newProfile = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      hostedEvents: [],
      participatingEvents: [],
    };
    e.preventDefault();
    setProfile((pr) => [...profile, newProfile]);
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setSelectedUser(newProfile.email);
    handleAddProfile();
  }
  return (
    <>
      <Menu>
        <Logo />
        <NavBar />
        <Profile
          handleAddProfile={handleAddProfile}
          profiles={profile}
          selectedUser={selectedUserEmail}
          setSelectedUser={setSelectedUser}
          selectedEvent={selectedEvent}
        />
      </Menu>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                handleExit={handleExit}
                handleAttending={handleAttending}
                handleUnAttending={handleUnAttending}
                quickUnAttend={quickUnAttend}
                profile={profile}
                setSelectedEvent={setSelectedEvent}
                selectedUserEmail={selectedUserEmail}
                setSelectedUser={setSelectedUser}
                setProfile={setProfile}
                events={events}
                setEvents={setEvents}
                selectedEvent={selectedEvent}
              />
            }
          />
          <Route
            path="form"
            element={
              <Formpage
                handleAddProfile={handleAddProfile}
                handleProfileSubmit={handleProfileSubmit}
                firstName={firstName}
                lastName={lastName}
                email={email}
                setEmailAddress={setEmailAddress}
                setLastName={setLastName}
                setFirstName={setFirstName}
              />
            }
          />
          <Route
            path="/:show"
            element={
              <Homepage
                handleExit={handleExit}
                handleAttending={handleAttending}
                handleUnAttending={handleUnAttending}
                quickUnAttend={quickUnAttend}
                profile={profile}
                setSelectedEvent={setSelectedEvent}
                selectedUserEmail={selectedUserEmail}
                setSelectedUser={setSelectedUser}
                setProfile={setProfile}
                events={events}
                setEvents={setEvents}
                selectedEvent={selectedEvent}
              />
            }
          />
          <Route
            path="events"
            element={
              <Eventspage
                events={events}
                setSelectedEvent={setSelectedEvent}
                selectedEvent={selectedEvent}
                handleAttending={handleAttending}
                handleUnAttending={handleUnAttending}
                selectedUserEmail={selectedUserEmail}
              />
            }
          />
          <Route
            path="events/:id"
            element={
              <Eventspage
                events={events}
                setSelectedEvent={setSelectedEvent}
                selectedEvent={selectedEvent}
                handleAttending={handleAttending}
                handleUnAttending={handleUnAttending}
                selectedUserEmail={selectedUserEmail}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
