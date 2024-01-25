import userImg from '../../assets/images/user.png';
import {
  GreetingCardContainer,
  InfoCardContainer,
  CardTitle,
  CardDescription,
} from './GreetingCard.styled';

const GreetingCard = () => (
  <GreetingCardContainer>
    <InfoCardContainer>
      <CardTitle>Hello, Bob!</CardTitle>
      <CardDescription>How are you?</CardDescription>
    </InfoCardContainer>
    <img src={userImg} alt="user" />
  </GreetingCardContainer>
);

export default GreetingCard;
