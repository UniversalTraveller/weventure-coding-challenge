import { useSelector } from "react-redux";
import PageTitle from "./components/PageTitle/PageTitle";
import CreateNew from "./components/CreateNew/CreateNew";

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <main>
      <PageTitle>WEVENTURE React and Redux Coding Challenge</PageTitle>

      <CreateNew />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : "undone"}>
            <span>{todo.task}</span>
            <button>X</button>
          </li>
        ))}
      </ul>

      <div className="footer">
        <button className="clearAll">Clear all</button>
      </div>
    </main>
  );
};

export default App;
