import { useState } from "react";
import AddTodo from "./addToDo.jsx";
import TodoList from "./todoList.jsx";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

export default function Todo() {
  const [todos, setTodos] = useState(initialTodos);

  function addToDo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function editToDo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function deleteToDo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">My Todo</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <AddTodo onAddToDo={addToDo} />
            <TodoList
              todos={todos}
              onChangeToDo={editToDo}
              onDeleteToDo={deleteToDo}
            />
          </div>
        </div>
      </div>
    </>
  );
}
