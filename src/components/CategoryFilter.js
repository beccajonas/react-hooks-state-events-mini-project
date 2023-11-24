import React from "react";
import { v4 as uuid } from "uuid"

function CategoryFilter({categories, onSelectedCategory, selectedCategory}) {
  console.log(selectedCategory);
  let categoryList = categories.map(category => 
    <button 
    key={uuid()}
    onClick={() => onSelectedCategory(category)}
    className={category === selectedCategory ? "selected" : ""}
    >
      {category}
    </button>)

  return (
    <div className="categories">
      <h5 className="categories">Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
