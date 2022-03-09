import React, { useState } from "react";
import items from "../data/items";
import Item from "./Item";

/* Deliverables:
   the <select> element will allow us to filter the list of items by
   category

   use the useState hook to create variable named "selectedCategory"
   for keeping track of the selected value

   when the value of the <select> element is changed, update state

   use selectedCategory variable to determine which items to display
   in the shopping list

   filter the array of items based on the selectedCategory
*/


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory
    }
  })
  function handleFilter(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
