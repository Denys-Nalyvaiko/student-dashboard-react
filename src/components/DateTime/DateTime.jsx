import { useState, useEffect } from 'react';
import { TimeContainer, TimeInfo } from './DateTime.styled';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <TimeContainer>
      <TimeInfo>{date.toLocaleTimeString()}</TimeInfo>
      <TimeInfo>{date.toLocaleDateString()}</TimeInfo>
    </TimeContainer>
  );
};

export default DateTime;
