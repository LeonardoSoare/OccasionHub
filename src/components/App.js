import { useState } from "react";
import Menu from "./Menu";
import Main from "./Main";
import Logo from "./Logo";
import Profile from "./Profile";
import Hero from "./Hero";
import ProfileForm from "./ProfileForm";
import NavBar from "./NavBar";
const profileTemp = [
  {
    email: "leonardomateisoare@gmail.com",
    firstName: "Leonardo-Matei",
    hostedEvents: [1695649125860],
    // hostedEvents: [],
    lastName: "Soare",
    participatingEvents: [],
  },
  {
    email: "test@gmail.com",
    firstName: "Alexandra",
    hostedEvents: [1],
    // hostedEvents: [],
    lastName: "Simion",
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
    eventDescription: "Temporary Test Event",
    hostedBy: "leonardomateisoare@gmail.com",
    id: 1695649125860,
    name: "Test Event",
    numberOfSeats: 10,
    participating: [],
  },
  {
    date: "2023-09-06",
    eventDescription: "Talking about current politics",
    hostedBy: "",
    id: 1,
    name: "PolytiX",
    numberOfSeats: 1000,
    participating: [],
  },
  {
    date: "2023-09-26",
    eventDescription: "Hello to my art gallery event",
    hostedBy: "",
    id: 2,
    name: "Artemis Opening",
    numberOfSeats: 40,
    participating: [],
  },
];
function App() {
  const [events, setEvents] = useState(eventsTemp);
  // const [events, setEvents] = useState([]);
  const [addProfile, setAddProfile] = useState(false);
  const [profile, setProfile] = useState(profileTemp);
  const [selectedUserEmail, setSelectedUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmailAddress] = useState("");
  const currentAccount =
    profile.filter((pr) => pr.email === selectedUserEmail).at(0) || "";
  console.log(currentAccount);

  function handleAddProfile(id) {
    setAddProfile(!addProfile);
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
    console.log(newProfile);
    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setSelectedUser(newProfile.email);
    handleAddProfile();
  }
  return (
    <div>
      <Menu>
        <Logo />
        <NavBar />
        <Profile
          handleAddProfile={handleAddProfile}
          profiles={profile}
          selectedUser={selectedUserEmail}
          setSelectedUser={setSelectedUser}
        />
      </Menu>
      <Main addProfile={addProfile}>
        <Hero
          profiles={profile}
          selectedUserEmail={selectedUserEmail}
          setSelectedUser={setSelectedUser}
          setProfile={setProfile}
          events={events}
          setEvents={setEvents}
        />
        <ProfileForm
          handleAddProfile={handleAddProfile}
          handleProfileSubmit={handleProfileSubmit}
          firstName={firstName}
          lastName={lastName}
          email={email}
          setEmailAddress={setEmailAddress}
          setLastName={setLastName}
          setFirstName={setFirstName}
        />
      </Main>
    </div>
  );
}

export default App;
