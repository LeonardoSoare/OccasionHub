export default function Button({ symbol, text, onHandler }) {
  return (
    <div className="button" onClick={onHandler}>
      <p className="symbol">{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
