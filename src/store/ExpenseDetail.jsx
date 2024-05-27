import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "./expenseSlice"; // 올바른 경로로 수정
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  getExpensesFromLocalStorage,
  saveExpensesToLocalStorage,
} from "../utils/localStorage";

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const UpdateButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  color: white;
`;

const ExpenseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expenses = getExpensesFromLocalStorage();
  const expense = expenses.find((expense) => expense.id === id);

  if (!expense) {
    return <div>지출 항목을 찾을 수 없습니다.</div>;
  }

  const handleDelete = () => {
    if (window.confirm("정말로 이 지출 항목을 삭제하시겠습니까?")) {
      dispatch(deleteExpense(id));
      navigate("/");
    }
  };

  return (
    <Container>
      <Input type="date" defaultValue={expense.date} />
      <Input type="text" defaultValue={expense.item} />
      <Input type="number" defaultValue={expense.amount} />
      <Input type="text" defaultValue={expense.description} />
      <ButtonGroup>
        <UpdateButton>수정</UpdateButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        <BackButton onClick={() => navigate("/")}>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
};

export default ExpenseDetail;
