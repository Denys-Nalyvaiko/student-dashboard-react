import styled from 'styled-components';

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 403px;
  height: 336px;
  margin-top: 100px;
  padding: 40px;
  border-radius: 10px;
  background-color: #e8e8e8;
`;

export const TodoOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoInput = styled.input`
  min-width: 200px;
  padding: 4px;
  background-color: transparent;
  border-radius: 8px;
`;

export const ParticularOptionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CurrentTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const CurrentTodoItem = styled.li`
  display: flex;
  gap: 12px;
`;

export const TodoCheckbox = styled.input`
  &:checked {
    background-color: #e8e8e8;
  }
`;
