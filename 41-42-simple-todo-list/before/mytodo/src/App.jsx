import { useState } from "react";
import "./../../styles.css";
import { TodoItem } from "./TodoItem";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);
  // use blank arrary at initial

  function addNewTodo() {
    if (newTodoName === "") return;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo,completed};
        // tried use completed:!completed. works fine, but shows completed never be read. no idea so far
        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input"> New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          onKeyDown={(e) =>e.key==="Enter"&&addNewTodo()}
          // learn this way, beautiful. && could regarded"act"
        />
        <button onClick={addNewTodo}> Add Todo</button>
      </div>
    </>
  );
}
export default App;
