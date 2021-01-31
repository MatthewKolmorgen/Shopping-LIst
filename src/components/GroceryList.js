import React from "react";

import Item from "./Item";

const GroceryList = (props) => {
  return (
    <div className="shopping-list">
      {props.groceries.map((item) => (
        <Item
          key={item.id}
          item={item}
          togglePurchased={props.togglePurchased}
        />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;
