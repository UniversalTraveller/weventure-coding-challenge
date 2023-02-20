import PageTitle from "./components/PageTitle/PageTitle";
import CreateNew from "./components/CreateNew/CreateNew";
import Footer from "./components/Footer/Footer";
import ClearAllButton from "./components/ClearAllButton/ClearAllButton";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <main>
      <PageTitle>WEVENTURE React and Redux Coding Challenge</PageTitle>
      <CreateNew />
      <TodoList />
      <Footer>
        <ClearAllButton />
      </Footer>
    </main>
  );
};

export default App;
