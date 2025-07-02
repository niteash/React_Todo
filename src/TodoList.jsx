import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
          return { ...todo, done: !todo.done }
          strike.style.textDecoration 
          ;
        } else {
          return todo;
        }
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
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => UpperCaseOne(todo.id)}>UpperCase</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => LowerCaseOne(todo.id)}>LowerCase</button>
            &nbsp; &nbsp; &nbsp;
            <label>
              <input
              className="strike"
                type="checkbox"
                checked={todo.done}
                onChange={() => MarkAsDone(todo.id)}
              />
              Mark As Done
            </label>
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
