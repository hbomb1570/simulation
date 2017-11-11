import React, { Component } from 'react';
import Bin from '../Bin/Bin';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class ShelfC extends Component {

  render() {
    return (
      <div className="ShelfC">
        <header className='shelfie'>
          <Link to='/'><img className='icon' src={logo} alt='logo' /></Link>
          <h1>Shelf C</h1>

        </header>

      </div>
    );
  }
}

export default ShelfC;
