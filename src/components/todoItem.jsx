import PropTypes from "prop-types";
import { useState } from "react";
import "./todoItem.css";

export default function TodoItem({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          className="card-title"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="card-btn"
          onClick={() => setIsEditing(false)}
          disabled={todo.title.length === 0}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="card-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button className="card-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
      {todo.title.length === 0 && <p>Task can't be empty.</p>}
    </label>
  );

  //   return (
  //     <>
  //       <div className="card" style={{ width: "18rem" }}>
  //         <div className="card-body">
  //           <h5 className="card-title">Card title</h5>
  //           <h6 className="card-subtitle mb-2 text-body-secondary">
  //             Card subtitle
  //           </h6>
  //           <p className="card-text">
  //             Some quick example text to build on the card title and make up the
  //             bulk of the content.
  //           </p>
  //           <a href="#" className="card-link">
  //             Card link
  //           </a>
  //           <a href="#" className="card-link">
  //             Another link
  //           </a>
  //         </div>
  //       </div>
  //     </>
  //   );
}

TodoItem.prototype = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
