import coursesListData from '../../data/coursesList.json';
import CourseItem from '../CourseItem/CourseItem';
import { CoursesCustomList } from './CoursesList.styled';

const CoursesList = () => (
  <CoursesCustomList>
    {coursesListData.map(
      ({
        id,
        title,
        subjectCoordinator,
        coordinatorEmail,
        schedule,
        classroom,
        imageSrc,
      }) => (
        <CourseItem
          key={id}
          title={title}
          imageSrc={imageSrc}
          subjectCoordinator={subjectCoordinator}
          coordinatorEmail={coordinatorEmail}
          schedule={schedule}
          classroom={classroom}
        />
      )
    )}
  </CoursesCustomList>
);

export default CoursesList;
