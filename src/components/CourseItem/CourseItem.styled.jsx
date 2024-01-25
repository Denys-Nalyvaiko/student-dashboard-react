import styled from 'styled-components';

export const CourseCustomItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
  padding: 16px;
  background-color: #e8e8e8;
  border-radius: 14px;

  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalInfoSpan = styled.span`
  color: #a7a7a7;
`;

export const CloseModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background-color: transparent;
  border: 2px solid #252525;
  border-radius: 50%;
`;
