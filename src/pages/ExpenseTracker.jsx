import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "../features/expensesSlice";
import Dashboard from "../components/Dashboard";
Dashboard

const ExpenseTracker = () => {
  const dispatch = useDispatch();
  const { expenses, totalExpense } = useSelector((state) => state.expenses);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExpense = () => {
    if (formData.title && formData.amount && formData.date) {
      dispatch(
        addExpense({
          id: Date.now(),
          title: formData.title,
          amount: parseFloat(formData.amount),
          date: formData.date,
          category: formData.category,
        })
      );
      setFormData({ title: "", amount: "", date: "", category: "" });
    }
  };

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div className="dashboard-layout">
    <div className="sidebar">
      <Dashboard /> {/* Sidebar navbar */}
    </div>

    <div className="main-content">
    <div className=" p-8 bg-gradient-to-b from-white to-red-100 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Expenses</h1>
        <h2 className="text-xl font-semibold text-red-600">
          Total Expense: Rs. {totalExpense}
        </h2>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Expense Title"
          className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="Expense Amount"
          className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
        />
        <button
          onClick={handleAddExpense}
          className="col-span-2 bg-red-500 text-white py-2 rounded shadow-md hover:bg-red-600"
        >
          + Add Expense
        </button>
      </div>

      {/* Expenses List */}
      <div className="bg-white rounded-lg shadow-md p-4">
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between bg-red-50 p-4 mb-4 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {expense.title}
                </h3>
                <p className="text-sm text-gray-500">{expense.category}</p>
                <p className="text-sm text-gray-500">{expense.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-red-600">
                  Rs. {expense.amount}
                </p>
                <button
                  onClick={() => handleDeleteExpense(expense.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No expenses added yet.</p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ExpenseTracker;
