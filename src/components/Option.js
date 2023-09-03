import icon from "../imgs/icon.svg";

export default function Option({
  classType,
  name,
  email,
  setSelectedUser,
  selectedUser,
}) {
  return (
    <div
      className={classType}
      onClick={(e) => (email === selectedUser ? "" : setSelectedUser(email))}
    >
      <img className="img" src={icon} alt="icon" />
      <p>{name}</p>
    </div>
  );
}
