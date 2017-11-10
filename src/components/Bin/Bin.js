import React, { Component } from 'react';


class Bin extends Component {
  render() {
    return (
      <div className="App">
        <h4>Name</h4>
        <input placeholder='name of product'/>
        <h4>Price</h4>
        <input placeholder='insert price'/>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Bin;
