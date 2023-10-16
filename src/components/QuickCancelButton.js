import "../style/quickCancelButton.css";
export default function QuickCancelButton({
  id,
  quickUnAttend,
  disabled = false,
}) {
  return (
    <div
      className={`cancel-button ${!disabled ? "" : "disabled"}`}
      onClick={(e) => quickUnAttend(id)}
    >
      <p>Cancel</p>
    </div>
  );
}
