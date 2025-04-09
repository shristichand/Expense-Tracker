import { configureStore } from '@reduxjs/toolkit';
import incomesReducer from '../features/incomesSlice';
import expensesReducer from "../features/expensesSlice";

const store = configureStore({
    reducer: {
        incomes: incomesReducer,
        expenses: expensesReducer
    },
});

export default store;
