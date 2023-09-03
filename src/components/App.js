import { useState } from "react";
import Menu from "./Menu";
import Main from "./Main";
function App() {
  const [addProfile, setAddProfile] = useState(false);
  const [profile, setProfile] = useState([]);
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
      <Menu
        handleAddProfile={handleAddProfile}
        profiles={profile}
        selectedUser={selectedUserEmail}
        setSelectedUser={setSelectedUser}
      />
      <Main
        setProfile={setProfile}
        setSelectedUser={setSelectedUser}
        selectedUserEmail={selectedUserEmail}
        addProfile={addProfile}
        handleAddProfile={handleAddProfile}
        firstName={firstName}
        lastName={lastName}
        email={email}
        handleProfileSubmit={handleProfileSubmit}
        setEmailAddress={setEmailAddress}
        setFirstName={setFirstName}
        setLastName={setLastName}
        profiles={profile}
        currentAccount={currentAccount}
      />
    </div>
  );
}

export default App;
