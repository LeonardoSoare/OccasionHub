import ProfileForm from "../components/ProfileForm";
function Formpage({
  handleAddProfile,
  handleProfileSubmit,
  firstName,
  lastName,
  email,
  setEmailAddress,
  setLastName,
  setFirstName,
}) {
  return (
    <div className="main">
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
    </div>
  );
}

export default Formpage;
