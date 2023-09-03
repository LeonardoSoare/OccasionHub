import Profile from "./Profile";
import Logo from "./Logo";

export default function Menu({
  handleAddProfile,
  profiles,
  selectedUser,
  setSelectedUser,
}) {
  return (
    <div className="menu">
      <Logo />
      <Profile
        handleAddProfile={handleAddProfile}
        profiles={profiles}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}
