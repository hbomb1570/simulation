import React, { Component } from 'react';
import Bin from '../Bin/Bin';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class ShelfD extends Component {

  render() {
    return (
      <div className="ShelfD">
        <header className='shelfie'>
          <Link to='/'><img className='icon' src={logo} alt='logo' /></Link>
          <h1>Shelf D</h1>

        </header>

      </div>
    );
  }
}

export default ShelfD;
