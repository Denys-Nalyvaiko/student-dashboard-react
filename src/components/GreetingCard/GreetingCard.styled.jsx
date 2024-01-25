import styled from 'styled-components';

export const GreetingCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 46px;
  margin-left: 144px;
  width: 620px;
  height: 160px;
  border-radius: 14px;
  background-color: #e9e9eb;
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 30px;
`;

export const CardDescription = styled.p`
  font-size: 18px;
`;
