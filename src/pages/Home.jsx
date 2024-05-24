import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getExpensesFromLocalStorage,
  saveExpensesToLocalStorage,
} from "../utils/localStorage";
import ExpenseSummary from "../components/ExpenseSummary";
import MonthSelector from "../components/MonthSelector";
import ExpenseList from "../components/ExpenseList";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExpenseForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const [expenses, setExpenses] = useState(getExpensesFromLocalStorage());
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    saveExpensesToLocalStorage(expenses);
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now().toString(),
      date,
      item,
      amount: parseInt(amount, 10),
      description,
    };
    setExpenses([...expenses, newExpense]);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === selectedMonth
  );

  return (
    <Container>
      <ExpenseForm onSubmit={handleAddExpense}>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="지출 항목"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Input
          type="number"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">저장</Button>
      </ExpenseForm>
      <MonthSelector
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />
      <ExpenseSummary
        expenses={filteredExpenses}
        selectedMonth={selectedMonth}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
};

export default Home;
