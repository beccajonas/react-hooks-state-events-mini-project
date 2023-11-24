import React, {useState} from "react";
import { v4 as uuid } from "uuid"

function NewTaskForm({ categories, onTaskFormSubmit }) {
  let filteredCategories = categories.filter(category => category !== "All")

  let renderCategoryList = filteredCategories.map(category => (
    <option key={uuid()}>{category}</option>
  ))

  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let newTask = {
      id: uuid(),
      text: text,
      category: category
    }

    console.log('Text:', text);
    console.log('Category:', category);

    console.log(newTask);
    onTaskFormSubmit(newTask)
    setText("")
    setCategory("")
  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {renderCategoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
