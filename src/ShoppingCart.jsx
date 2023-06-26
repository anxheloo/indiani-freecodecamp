import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "Iphone", price: 8900, quanitity: 0 },
      { id: 2, productName: "Camera", price: 7900, quanitity: 0 },
      { id: 3, productName: "Samsung QLED", price: 7745, quanitity: 0 },
      { id: 4, productName: "iPad", price: 12900, quanitity: 0 },
      { id: 5, productName: "Xbox", price: 7700, quanitity: 0 },
      { id: 6, productName: "Dell Monitor", price: 880, quanitity: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>

        <div>
          {this.state.products.map((element) => {
            return (
              <Product
                id={element.id}
                pName={element.productName}
                pPrice={element.price}
                pQuantity={element.quanitity}
              ></Product>
            );
          })}
        </div>
      </div>
    );
  }
}
