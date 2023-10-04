export default function Button({
  symbol,
  text,
  onHandler,
  alignSelfCenter = 1,
}) {
  return (
    <div
      className={`button ${alignSelfCenter ? "align-self-center" : ""}`}
      onClick={onHandler}
    >
      <p>{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
