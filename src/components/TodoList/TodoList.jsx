import { useSelector } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={"todo-" + (todo.done ? "done" : "undone")}>
          <span className="task">{todo.task}</span>
          <button className="close-button">X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;