export default function Button({ symbol, text, onHandler }) {
  return (
    <div className="button" onClick={onHandler}>
      <p>{symbol}</p>
      <p>{text}</p>
    </div>
  );
}
