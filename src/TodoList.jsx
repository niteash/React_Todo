import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodo] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo([...todos, {task : newTodo, id : uuidv4()}]);
    setNewTodo("");
  };
  let updateTaskValue = (event) => {
    setNewTodo(event.target.value);
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
          <li key= {todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}
