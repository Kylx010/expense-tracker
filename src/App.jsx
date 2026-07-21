import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryBar from "./components/SummaryBar";

const CATEGORIES = ["Food", "Transport", "Housing", "Fun", "Other"];

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), ...newExpense },
    ]);
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  }

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  return (
    <div className="app">
      <h1>My Expense Tracker</h1>

      <ExpenseForm categories={CATEGORIES} onAdd={addExpense} />

      <div className="filter-row">
        <label htmlFor="category-filter">Filter by category</label>
        <select
          id="category-filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="All">All</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />

      <SummaryBar total={total} />
    </div>
  );
}
