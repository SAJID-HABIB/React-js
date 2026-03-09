import AppName from "./components/appName";
import AddToDo from "./components/Addtodo";
import ToDoItem1 from "./components/ToDoItem-1";
import ToDoItem2 from "./components/TodoItem-2";
// import "./App.css";
function App() {
  return (
    <>
      <center className="todo-contanier">
        <AppName />
        <AddToDo />
        <div className="item-container">
          <ToDoItem1></ToDoItem1>
          <ToDoItem2></ToDoItem2>
        </div>
      </center>
    </>
  );
}

export default App;
