import "../style/attendButton.css";
export default function AttendButton({
  symbol,
  text,
  handleAttending,
  id = 0,
  kind = "",
}) {
  return (
    <div
      className={`button align-self-center ${kind}`}
      onClick={handleAttending}
    >
      <p className="symbol">{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
