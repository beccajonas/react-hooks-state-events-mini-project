import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { Children } from "react/cjs/react.production.min";

function App() {
  const categories = CATEGORIES
  const tasks = TASKS

  const [listOfTasks, setListOfTasks] = useState(tasks)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDeleteTask(selectedTask) {
    const updatedTasks = listOfTasks.filter(task => (selectedTask !== task))
    console.log(updatedTasks);
    setListOfTasks(updatedTasks)
  }

  function handleAddTask(newTask) {
    console.log("Adding Task:", newTask);
    setListOfTasks(previousTasks => [...previousTasks, newTask])
  }

  const filteredTasks = selectedCategory === "All"  
    ? listOfTasks
    : listOfTasks.filter(task => task.category === selectedCategory)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
