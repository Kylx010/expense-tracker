export default function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <span className="expense-category">{expense.category}</span>
      <span className="expense-label">{expense.label}</span>
      <span className="expense-amount">${expense.amount.toFixed(2)}</span>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
}
