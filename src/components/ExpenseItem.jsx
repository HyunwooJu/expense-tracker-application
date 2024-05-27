import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ExpenseItem = ({ expense }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${expense.id}`);
  };

  return (
    <Item onClick={handleDetailClick}>
      <Date>{expense.date}</Date>
      <ItemText>{expense.item}</ItemText>
      <Amount>{expense.amount.toLocaleString()}원</Amount>
      <Description>{expense.description}</Description>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Date = styled.div`
  flex: 1;
`;

const ItemText = styled.div`
  flex: 2;
`;

const Amount = styled.div`
  flex: 1;
  text-align: right;
`;

const Description = styled.div`
  flex: 3;
  text-align: right;
`;

export default ExpenseItem;
