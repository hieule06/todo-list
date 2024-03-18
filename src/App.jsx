import { CardProvider } from "./layout/CardProvider";
import ToDoList from "./layout/containter/ToDoList";
import Header from "./layout/header/Header";

function App() {
  return (
    <div className="App my-6 mx-8 rounded-2xl shadow-2xl pt-2">
      <Header></Header>
      <CardProvider>
        <ToDoList></ToDoList>
      </CardProvider>
    </div>
  );
}

export default App;
