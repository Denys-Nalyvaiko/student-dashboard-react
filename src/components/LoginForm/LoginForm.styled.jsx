import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const FormTitle = styled.h2`
  font-size: 26px;
`;

export const FormInput = styled.input`
  padding: 20px;
  text-align: center;
  color: rgba(37, 37, 37, 0.8);
  font-size: 22px;
  letter-spacing: 2.6px;
  border-radius: 20px;
  background: #e2e2e2;
  box-shadow:
    0px 4px 4px 0px rgba(88, 88, 88, 0.84) inset,
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-width: 432px;
`;

export const SubmitButton = styled.button`
  padding: 20px;
  color: #f9f9f9;
  font-size: 22px;
  border-radius: 20px;
  background: #252525;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25);
  min-width: 432px;
`;
