import "../style/option-list.css";
import Button from "./Button";
import Option from "./Option";

export default function OptionList({
  handleAddProfile,
  profiles,
  selectedUser,
  setSelectedUser,
}) {
  return (
    <div className="option-list">
      {profiles.map((pr) =>
        selectedUser === pr.email ? (
          ""
        ) : (
          <Option
            classType={`option`}
            name={pr.firstName + " " + pr.lastName}
            key={pr.email}
            email={pr.email}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        )
      )}
      <Button symbol={`+`} text={`Add profile`} onHandler={handleAddProfile} />
    </div>
  );
}
