export default function AttendButton({ symbol, text, handleAttending }) {
  return (
    <div className="button" onClick={handleAttending}>
      <p className="symbol">{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
