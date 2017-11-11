import React, { Component } from 'react';


class Bin extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }


  render() {
      
    return (
      <div className="App">
        <h4>Name</h4>
        <input placeholder='name of product' onChange={this.handleChange}/>
        <h4>Price</h4>
        <input placeholder='insert price'onChange={this.priceChange}/>
        <button>Edit</button>
        <button>Delete</button>
        
      </div>
    );
  }
}

export default Bin;
