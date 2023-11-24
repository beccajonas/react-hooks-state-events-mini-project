import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid"

function TaskList({tasks, onDeleteTask }) {
  const renderTasks = tasks.map(task => (
  <Task 
    label={task.category}
    text={task.text}
    key={uuid()}
    onDeleteTask={() => onDeleteTask(task)}
  />))

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
