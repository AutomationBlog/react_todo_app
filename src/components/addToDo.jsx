import { useState } from "react";
import PropTypes from "prop-types";

export default function AddToDo({ onAddToDo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form id="todo-form">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="todo-input"
                placeholder="Todo Task..."
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* <input
                type="text"
                className="form-control"
                id="todo-input"
                placeholder="Todo Decription..."
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              /> */}
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  setTitle("");
                  onAddToDo(title);
                }}
              >
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

AddToDo.prototypes = {
  onAddToDo: PropTypes.func.isRequired,
};
