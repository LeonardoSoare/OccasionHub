import Hero from "./Hero";
import ProfileForm from "./ProfileForm";

export default function Main({
  setProfile,
  setSelectedUser,
  selectedUserEmail,
  addProfile,
  handleProfileSubmit,
  handleAddProfile,
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmailAddress,
  currentAccount,
  profiles,
}) {
  return (
    <div className="main">
      {!addProfile ? (
        <>
          <p className="title">This month's events</p>
          <Hero
            selectedUserEmail={selectedUserEmail}
            setSelectedUser={setSelectedUser}
            setProfile={setProfile}
            currentAccount={currentAccount}
            profiles={profiles}
          />
        </>
      ) : (
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
      )}
    </div>
  );
}
