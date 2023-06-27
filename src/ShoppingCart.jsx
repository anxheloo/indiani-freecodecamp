import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    // console.log("constructor-ShoppingCard");
    //calling super class's constructor
    super(props);
    //initialization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    // console.log("render-ShoppingCard");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((element) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={element.id}>
                <Product
                  key={element.id}
                  product={element}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                >
                  <button className="btn btn-primary">Buy Now</button>
                </Product>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  //Executes after constructor and render method(includes life cycle of child components, if any)
  componentDidMount = async () => {
    //fetch data from data source

    let response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    let prods = await response.json();

    console.log(prods);
    this.setState({ products: prods });
    // console.log("componentDidMount-ShoppingCard");
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "componentDidUpdate-ShoppingCart",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
    // if(prevProps.x !== this.props.x){
    //   //make htttp call
    // }
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount-ShoppingCartt");
  }

  componentDidCatch(error, info) {
    // console.log("componentDidCatch-ShoppingCartt");
    // console.log(error, info);
    // localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
