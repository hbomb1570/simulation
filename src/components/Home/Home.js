import React, { Component } from 'react';
import ShelfA from '../Shelf/ShelfA';
import ShelfB from '../Shelf/ShelfB';
import ShelfC from '../Shelf/ShelfC';
import ShelfD from '../Shelf/ShelfD';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header className='shelfie'>
                    <img className='icon' src={logo} alt='logo' />
                    <h1>Shelfie</h1>

                </header>
                <nav className='nav'>

                        <Link to='/api/shelf/A'><button className='btn'>Shelf A</button></Link>
                        <Link to='/api/shelf/B'><button className='btn'>Shelf B</button></Link>
                        <Link to='/api/shelf/C'><button className='btn'>Shelf C</button></Link>
                        <Link to='/api/shelf/D'><button className='btn'>Shelf D</button></Link>
                </nav>
                
            </div>
        );
    }
}

export default Home;