import React, { useContext } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../context/ExpenseContext";

const MonthButton = styled.button`
  background-color: ${(props) => (props.$isSelected ? "#2ecc71" : "#ecf0f1")};
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bdc3c7;
  }
`;

const MonthSelector = () => {
  const { selectedMonth, setSelectedMonth } = useContext(ExpenseContext);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      {months.map((month) => (
        <MonthButton
          key={month}
          $isSelected={month === selectedMonth}
          onClick={() => setSelectedMonth(month)}
        >
          {month}월
        </MonthButton>
      ))}
    </div>
  );
};

export default MonthSelector;
