import "../style/quickCancelButton.css";
export default function QuickCancelButton({ id, quickUnAttend }) {
  return (
    <div className="cancel-button" onClick={(e) => quickUnAttend(id)}>
      <p>Cancel</p>
    </div>
  );
}
