import { useDispatch } from "react-redux";
import { deleteTodo } from "../../features/todoSlice";
import "./DeleteButton.css";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <button className="delete-button" onClick={() => handleDelete(id)}>
      X
    </button>
  );
};

export default DeleteButton;
