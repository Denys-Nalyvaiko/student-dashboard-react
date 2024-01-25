import CoursesList from '../CoursesList/CoursesList';
import {
  CoursesTitleContainer,
  CoursesOptionsContainer,
  CoursesContainer,
  CourseSectionTitle,
  CourseOptionsText,
} from './Courses.styled';

const Courses = () => {
  return (
    <CoursesContainer>
      <CoursesTitleContainer>
        <CourseSectionTitle>Courses</CourseSectionTitle>
        <CoursesOptionsContainer>
          <CourseOptionsText>Filter</CourseOptionsText>
          <CourseOptionsText>Sort</CourseOptionsText>
          <CourseOptionsText>Add new</CourseOptionsText>
        </CoursesOptionsContainer>
      </CoursesTitleContainer>
      <CoursesList />
    </CoursesContainer>
  );
};

export default Courses;
