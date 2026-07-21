export default function SummaryBar({ total }) {
  return (
    <div className="summary-bar">
      <span>Total</span>
      <span className="summary-total">${total.toFixed(2)}</span>
    </div>
  );
}
