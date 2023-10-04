import Button from "./Button";
import festive from "../imgs/festive.svg";
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
    <div className="profile-form-container">
      <div>
        <form onSubmit={handleProfileSubmit} className="profile-form">
          <p className="user-title profile-title">Sign up for occasions !</p>
          <div className="input-field-profile-form">
            <p className="instruction">First Name </p>

            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-field-profile-form">
            <p className="instruction">Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-field-profile-form">
            <p className="instruction">Email address</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="youremailaddres@mail.com"
              required
            />
            <button className="button-profile-form">
              <Button symbol={``} text={`Sign up`} />
            </button>
          </div>
        </form>
      </div>
      <img className="profile-form-img" src={festive} alt="form" />
    </div>
  );
}
