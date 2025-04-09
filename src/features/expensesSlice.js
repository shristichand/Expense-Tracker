import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    totalExpense: 0,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
      state.totalExpense += action.payload.amount;
    },
    deleteExpense: (state, action) => {
      const id = action.payload;
      const expenseToDelete = state.expenses.find(
        (expense) => expense.id === id
      );
      if (expenseToDelete) {
        state.totalExpense -= expenseToDelete.amount;
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      }
    },
  },
});

export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
