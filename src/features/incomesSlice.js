import { createSlice } from '@reduxjs/toolkit';

const incomesSlice = createSlice({
    name: 'incomes',
    initialState: {
        incomes: [],
        totalIncome: 0,
    },
    reducers: {
        addIncome: (state, action) => {
            state.incomes.push(action.payload);
            state.totalIncome += action.payload.amount;
        },
        deleteIncome: (state, action) => {
            const id = action.payload;
            const incomeToDelete = state.incomes.find((income) => income.id === id);
            if (incomeToDelete) {
                state.totalIncome -= incomeToDelete.amount;
                state.incomes = state.incomes.filter((income) => income.id !== id);
            }
        },
    },
});

export const { addIncome, deleteIncome } = incomesSlice.actions;
export default incomesSlice.reducer;
