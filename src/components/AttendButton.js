export default function AttendButton({
  symbol,
  text,
  handleAttending,
  kind = "",
}) {
  return (
    <div className={`button ${kind}`} onClick={handleAttending}>
      <p className="symbol">{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
