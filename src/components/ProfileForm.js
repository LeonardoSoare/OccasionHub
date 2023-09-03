import Button from "./Button";
export default function ProfileForm({
  handleProfileSubmit,
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmailAddress,
}) {
  return (
    <div>
      <p className="user-title profile-title">Sign up for occasions !</p>
      <form onSubmit={handleProfileSubmit} className="profile-form">
        <div className="input-field">
          <p className="instruction">Your name:</p>
          <div className="input-name">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="input-field">
          <p className="instruction">Enter your email address:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="youremailaddres@mail.com"
          />
        </div>
        <div className="input-field">
          <p className="instruction">Select a profile color:</p>
          <div className="colors">
            <div className="color red"></div>
            <div className="color blue"></div>
            <div className="color green"></div>
            <div className="color yellow"></div>
            <div className="color white"></div>
          </div>
        </div>
        <button className="button">
          <Button symbol={``} text={`Add profile`} />
        </button>
      </form>
    </div>
  );
}
