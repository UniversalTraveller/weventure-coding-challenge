import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import "./CreateNew.css";

const CreateNew = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (event) => {
    if (event.key === "Enter" && inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <input
      className="create-new"
      type="text"
      placeholder="What needs to be accomplished today?"
      value={inputValue}
      onChange={handleInput}
      onKeyDown={handleAdd}
    />
  );
};

export default CreateNew;
