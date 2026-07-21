import { useState } from "react";

export default function ExpenseForm({ categories, onAdd }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(event) {
    event.preventDefault();

    if (label.trim() === "" || amount === "") {
      return;
    }

    onAdd({
      label: label,
      amount: Number(amount),
      category: category,
    });

    setLabel("");
    setAmount("");
    setCategory(categories[0]);
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense label"
        value={label}
        onChange={(event) => setLabel(event.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}
