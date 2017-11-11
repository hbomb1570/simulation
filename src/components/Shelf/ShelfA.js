import React, { Component } from 'react';
import Bin from '../Bin/Bin';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


class ShelfA extends Component {

  render() {
    return (
      <div className="ShelfA">
        <header className='shelfie'>
          <Link to='/'><img className='icon' src={logo} alt='logo' /></Link>
          <h1>Shelf A</h1>

        </header>
        <Bin />

      </div>
    );
  }
}

export default ShelfA;
