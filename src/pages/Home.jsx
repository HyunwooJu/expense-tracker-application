import React, { useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../context/ExpenseContext";
import ExpenseSummary from "../components/ExpenseSummary";
import MonthSelector from "../components/MonthSelector";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Home = () => {
  const { expenses, selectedMonth } = useContext(ExpenseContext);

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === selectedMonth
  );

  return (
    <Container>
      <ExpenseForm />
      <MonthSelector />
      <ExpenseSummary
        expenses={filteredExpenses}
        selectedMonth={selectedMonth}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
};

export default Home;
