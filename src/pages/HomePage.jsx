import GreetingCard from '../components/GreetingCard/GreetingCard';
import DateTime from '../components/DateTime/DateTime';
import Courses from '../components/Courses/Courses';
import TodoList from '../components/TodoList/TodoList';
import { HomeSection } from '../css/Containers';

const HomePage = () => (
  <HomeSection>
    <div>
      <GreetingCard />
      <Courses />
    </div>
    <div>
      <DateTime />
      <TodoList />
    </div>
  </HomeSection>
);

export default HomePage;
