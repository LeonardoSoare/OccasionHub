import { useState } from "react";
import Option from "./Option";
import OptionList from "./OptionList";

export default function Profile({
  handleAddProfile,
  profiles,
  selectedUser,
  setSelectedUser,
}) {
  const [display, setDisplay] = useState(false);
  function handleDisplay() {
    setDisplay(!display);
  }
  const selectedAccount = profiles?.find(isSelected);
  function isSelected(profile) {
    return profile.email === selectedUser;
  }
  return (
    <div onClick={handleDisplay}>
      {/* <div className="profile">Profile Card</div> */}
      {selectedAccount ? (
        <Option
          name={selectedAccount.firstName + " " + selectedAccount.lastName}
          classType={`profile`}
          key="smth"
        />
      ) : (
        <Option classType={`profile`} />
      )}
      {display && (
        <OptionList
          handleAddProfile={handleAddProfile}
          profiles={profiles}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  );
}
