import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../fakeData.json";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: fakeData,
    selectedMonth: new Date().getMonth() + 1,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, setSelectedMonth, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
