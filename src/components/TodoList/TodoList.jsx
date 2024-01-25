import {
  TodoListContainer,
  TodoOptionsContainer,
  ParticularOptionsContainer,
  TodoInput,
  CurrentTodoList,
  CurrentTodoItem,
  TodoCheckbox,
} from './TodoList.styled';

const TodoList = () => (
  <TodoListContainer>
    <h3>To Do List</h3>
    <TodoOptionsContainer>
      <TodoInput type="text" placeholder="Type something" />
      <ParticularOptionsContainer>
        <p>Add new</p>
        <p>Remove</p>
      </ParticularOptionsContainer>
    </TodoOptionsContainer>
    <div>
      <CurrentTodoList>
        <CurrentTodoItem>
          <TodoCheckbox type="checkbox" />
          <p>Do homework</p>
        </CurrentTodoItem>
        <CurrentTodoItem>
          <TodoCheckbox type="checkbox" />
          <p>Prepare to exam</p>
        </CurrentTodoItem>
        <CurrentTodoItem>
          <TodoCheckbox type="checkbox" />
          <p>Build project</p>
        </CurrentTodoItem>
        <CurrentTodoItem>
          <TodoCheckbox type="checkbox" />
          <p>Learn new words</p>
        </CurrentTodoItem>
      </CurrentTodoList>
    </div>
  </TodoListContainer>
);

export default TodoList;
