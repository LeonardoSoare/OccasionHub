export default function Button({
  symbol,
  text,
  onHandler,
  alignSelfCenter = 1,
  color = 0,
}) {
  return (
    <div
      className={`button ${alignSelfCenter ? "align-self-center" : ""} ${
        color ? "white" : ""
      } `}
      onClick={onHandler}
    >
      <p>{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
