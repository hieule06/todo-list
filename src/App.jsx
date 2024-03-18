import { TodoProvider } from "./layout/TodoProvider";
import ToDoList from "./layout/ToDoList";
import Header from "./layout/header/Header";

function App() {
  return (
    <div className="App my-6 mx-8 rounded-2xl shadow-2xl pt-2">
      <Header></Header>
      <TodoProvider>
        <ToDoList></ToDoList>
      </TodoProvider>
    </div>
  );
}

export default App;
