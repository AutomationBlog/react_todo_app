import TodoItems from "./todoItem.jsx";
import PropTypes from "prop-types";

export default function TodoList({ todos, onChangeToDo, onDeleteToDo }) {
  let completedTasks = 0;

  todos.map((todo) => {
    if (todo.done) {
      completedTasks = completedTasks + 1;
    }
    return completedTasks;
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {todos.length === 0 ? (
              <h4>No tasks</h4>
            ) : (
              <h4>
                {completedTasks} completed
                {completedTasks === 1 ? "task" : "tasks"} out of {todos.length}{" "}
                {todos.length === 1 ? "task" : "tasks"} in total
              </h4>
            )}
            {todos.map((todo) => (
              <div key={todo.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <TodoItems
                      todo={todo}
                      onChange={onChangeToDo}
                      onDelete={onDeleteToDo}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

TodoList.prototype = {
  todos: PropTypes.array.isRequired,
  onChangeToDo: PropTypes.func.isRequired,
  onDeleteToDo: PropTypes.func.isRequired,
};
