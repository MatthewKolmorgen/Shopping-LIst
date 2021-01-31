import React from "react";
import ReactDOM from "react-dom";
import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./styles.css";

const groceriesData = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceriesData,
      togglePurchased: () => {},
      name: "Dustin"
    };
  }
  togglePurchased = (clickedItemId) => {
    this.setState({
      groceries: this.state.groceries.map((item) => {
        if (item.id === clickedItemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };
  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      purchased: false
    };
    this.setState({
      groceries: [...this.state.groceries, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          groceries={this.state.groceries}
          togglePurchased={this.togglePurchased}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
