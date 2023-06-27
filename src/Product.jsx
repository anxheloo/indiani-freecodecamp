import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Product extends Component {
  constructor(props) {
    super(props);

    // console.log("Constructor-Product");

    this.state = {
      product: this.props.product,
    };
  }

  render() {
    // console.log("render-Product");

    return (
      <div className="card m-2">
        <div className="card-body">
          <div className="text-muted">
            # {this.state.product.id}
            <span className="pull-right">
              {/* <FontAwesomeIcon icon={faCircle} /> */}
              <FontAwesomeIcon
                icon={faTimes}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              />
            </span>
          </div>
          <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
          <div>$ {this.state.product.price}</div>
        </div>

        <div className="card-footer d-flex flex-row">
          <div className="float-left">
            <span className="badge bg-secondary">
              {this.state.product.quantity}
            </span>
            <div className="btn-group">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  this.props.onIncrement(this.state.product, 10);
                }}
              >
                +
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  this.props.onDecrement(this.state.product, 0);
                }}
              >
                -
              </button>
            </div>
          </div>
          <div className="float-right"> {this.props.children}</div>
          {/* <button
            className="btn btn-warning"
            onClick={() => {
              this.props.onDelete(this.state.product);
            }}
          >
            Delete
          </button> */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log("compoenntDIdMount-Product");
  }

  componentDidUpdate() {
    // console.log("compoenntDIdUpdate-Product");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount-Product");
  }
}
