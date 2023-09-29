export default function QuickCancelButton({ id, symbol, quickUnAttend }) {
  return (
    <div className="button" onClick={(e) => quickUnAttend(id)}>
      <p className="symbol">{symbol}</p>
    </div>
  );
}
