import React from "react";

const Item = (props) => {
  return (
    <div
      onClick={() => props.togglePurchased(props.item.id)}
      className={`item${props.item.purchased ? " purchased" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;
