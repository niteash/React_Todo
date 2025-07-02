import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodo] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
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
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let LowerCaseAll = () => {
    setTodo(
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  return (
    <>
      <p>Todo List</p>
      <br />
      <input
        type="text"
        placeholder="add your tasks"
        value={newTodo}
        onChange={updateTaskValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks To do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span> {todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCase All</button>
      &nbsp; &nbsp; &nbsp;
      <button onClick={LowerCaseAll}>LowerCase All</button>
    </>
  );
}
