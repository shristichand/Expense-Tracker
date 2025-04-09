import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, deleteIncome } from "../features/incomesSlice";
import Dashboard from "../components/Dashboard";

const Income = () => {
  const dispatch = useDispatch();
  const { incomes, totalIncome } = useSelector((state) => state.incomes);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    reference: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddIncome = () => {
    if (formData.title && formData.amount && formData.date) {
      dispatch(
        addIncome({
          id: Date.now(),
          title: formData.title,
          amount: parseFloat(formData.amount),
          date: formData.date,
          reference: formData.reference,
        })
      );
      setFormData({ title: "", amount: "", date: "", reference: "" });
    }
  };

  const handleDeleteIncome = (id) => {
    dispatch(deleteIncome(id));
  };

  return (
    <>
      <div className="dashboard-layout">
        <div className="sidebar">
          <Dashboard /> {/* Sidebar navbar */}
        </div>
        
        <div className="main-content">
          <div className="p-8 bg-gradient-to-b from-white to-pink-100 rounded-lg shadow-md w-full max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-700">Incomes</h1>
              <h2 className="text-xl font-semibold text-green-600">
                Total Income: Rs {totalIncome}
              </h2>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Salary Title"
                className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Salary Amount"
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
                name="reference"
                value={formData.reference}
                onChange={handleInputChange}
                placeholder="Add A Reference"
                className="p-2 border rounded shadow-sm focus:ring focus:ring-purple-300"
              />
              <button
                onClick={handleAddIncome}
                className="col-span-2 bg-green-500 text-white py-2 rounded shadow-md hover:bg-green-600"
              >
                + Add Income
              </button>
            </div>

            {/* Incomes List */}
            <div className="bg-white rounded-lg shadow-md p-4">
              {incomes.length > 0 ? (
                incomes.map((income) => (
                  <div
                    key={income.id}
                    className="flex items-center justify-between bg-purple-50 p-4 mb-4 rounded-lg shadow-sm"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        {income.title}
                      </h3>
                      <p className="text-sm text-gray-500">{income.reference}</p>
                      <p className="text-sm text-gray-500">{income.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">
                        Rs. {income.amount}
                      </p>
                      <button
                        onClick={() => handleDeleteIncome(income.id)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No incomes added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Income;
