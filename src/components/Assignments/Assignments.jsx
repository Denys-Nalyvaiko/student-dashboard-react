import {
  AssignmentsContainer,
  AssignmentsTopic,
  AssignmentsTopicOptions,
  AssignmentsHeader,
  AssignmentsDataList,
  AssignmentsDataItem,
  TodoListContainer,
} from './Assignments.styled';
import assignmentsData from '../../data/assignments.json';
import TodoList from '../TodoList/TodoList';
import Notes from '../Notes/Notes';

const Assignments = () => (
  <>
    <AssignmentsContainer>
      <h2>Assignments</h2>
      <AssignmentsTopic>
        <p>All</p>
        <AssignmentsTopicOptions>
          <p>Filter</p>
          <p>Sort</p>
          <p>Add</p>
          <p>Remove</p>
        </AssignmentsTopicOptions>
      </AssignmentsTopic>

      <AssignmentsHeader>
        <li>Name</li>
        <li>Type</li>
        <li>Course</li>
        <li>Date</li>
        <li>Status</li>
        <li>Notes</li>
        <li>Grade</li>
      </AssignmentsHeader>

      <AssignmentsDataList>
        {assignmentsData.map(
          ({ id, name, type, course, date, status, note, grade }) => (
            <AssignmentsDataItem key={id}>
              <p>{name}</p>
              <p>{type}</p>
              <p>{course}</p>
              <p>{date}</p>
              <p>{status}</p>
              <p>{note}</p>
              <p>{grade}</p>
            </AssignmentsDataItem>
          )
        )}
      </AssignmentsDataList>
    </AssignmentsContainer>
    <TodoListContainer>
      <TodoList />
      <Notes />
      <Notes />
    </TodoListContainer>
  </>
);

export default Assignments;
