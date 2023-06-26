import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jones",
        phone: "234-456",
        address: { city: "New Baldushku" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "345-456",
        address: { city: "New City" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "James",
        phone: null,
        address: { city: "New Tirana" },
        photo: "https://picsum.photos/id/1013/60",
      },

      {
        id: 5,
        name: "John",
        phone: null,
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1015/60",
      },
    ],
  };

  // render CSS style
  // customerNameStyle = (custName) => {
  //   if (custName.startsWith("S")) {
  //     return "green-highlight border-left";
  //   } else if (custName.startsWith("J")) {
  //     return "red-highlight border-right";
  //   } else return "";
  // };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Image</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          {this.getCustomerRow()}
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    return phone != null ? (
      phone
    ) : (
      <div className="bg-warning p-2 align-content-center text-center">
        No Phone
      </div>
    );
  };

  getCustomerRow = () => {
    return (
      <tbody>
        {this.state.customers.map((element, index) => {
          return (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>
                <img src={element.photo} alt="Customer Image"></img>
                <div>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => {
                      this.onChangePictureClick(element, index);
                    }}
                  >
                    Change picture
                  </button>
                </div>
              </td>
              <td>{element.name}</td>
              <td>{this.getPhoneToRender(element.phone)}</td>
              <td>{element.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    console.log(cust, index);

    //get existing customers
    let custArr = this.state.customers;
    custArr[index].photo = "";
    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
