import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';


export default function TodoList() {
  let [todos, setTodo] = useState([
    { task: "sample task", id: uuidv4(), done: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), done: false }];
    });
    setNewTodo("");
  };
  let updateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodo(
      todos.map((prevTodos) => {
        return {
          ...prevTodos,
          task: prevTodos.task.toUpperCase(),
        };
      })
    );
  };

  let LowerCaseAll = () => {
    setTodo(
      todos.map((prevTodos) => {
        return {
          ...prevTodos,
          task: prevTodos.task.toLowerCase(),
        };
      })
    );
  };

  let UpperCaseOne = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let LowerCaseOne = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkAsDone = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };
 return (
  <div className="todo-container">
    <p className="todo-header">Todo List</p>

    <input
      type="text"
      placeholder="add your tasks"
      value={newTodo}
      onChange={updateTaskValue}
      className="todo-input"
    />

    <div className="todo-buttons">
      <button onClick={addNewTask}>Add Task</button>
      <button onClick={upperCaseAll}>UpperCase All</button>
      <button onClick={LowerCaseAll}>LowerCase All</button>
    </div>

    <hr />
    <h4>Tasks To do</h4>

    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="task-item">
          <span style={todo.done ? {textDecorationLine : "line-through"} : {}} className={todo.done ? "strike" : ""}>{todo.task}</span>

          <div className="task-buttons">
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => UpperCaseOne(todo.id)}>UpperCase</button>
            <button onClick={() => LowerCaseOne(todo.id)}>LowerCase</button>

            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => MarkAsDone(todo.id)}
              />
             Mark As Done
            </label>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}
