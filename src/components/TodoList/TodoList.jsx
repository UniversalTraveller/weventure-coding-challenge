import { useSelector } from "react-redux";
import Task from "../Task/Task";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={"todo-" + (todo.done ? "done" : "undone")}>
          <Task id={todo.id} />
          <DeleteButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
