import "./ClearAllButton.css";
import { useDispatch } from "react-redux";
import { clearAllTodos } from "../../features/todoSlice";

const ClearAllButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="clear-all-button"
      onClick={() => dispatch(clearAllTodos())}
    >
      Clear all
    </button>
  );
};

export default ClearAllButton;
