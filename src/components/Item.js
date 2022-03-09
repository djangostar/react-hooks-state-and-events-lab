import React, { useState } from "react";

function Item({ name, category }) {
/* Deliverables 
   when button element clicked, the item should be added to the virtual
   cart
   
   if item not in cart, the <button> text should read "Add to Cart"

   if item in cart, <button> text should read "Remove From Cart"
   */
  const [inCart, setInCart] = useState(false)
  const cartState = inCart ? "in-cart" : ""
  const addOrRemove = inCart ? "remove" : "add"

  function itemHandling() {
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addOrRemove} onClick={itemHandling}>{inCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
