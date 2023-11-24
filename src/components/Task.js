import React from "react";

function Task({label, text, onDeleteTask}) {

    return (
      <div className="task">
        <div className="label">{label}</div>
        <div className="text">{text}</div>
        <button
        className="delete"
        onClick={onDeleteTask}>X</button>
      </div>
    );
  }

export default Task;
