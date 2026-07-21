import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty-message">No expenses to show.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
}
