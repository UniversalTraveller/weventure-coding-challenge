import { useSelector, useDispatch } from "react-redux";
import { toggleTodoDone } from "../../features/todoSlice";
import "./Task.css";

const Task = ({ id }) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch(toggleTodoDone(id));
  };

  return (
    <span className="task" onClick={() => handleDone(id)}>
      {todos.find((todo) => todo.id === id).task}
    </span>
  );
};

export default Task;
