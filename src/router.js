import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShelfA from './components/Shelf/ShelfA';
import ShelfB from './components/Shelf/ShelfB';
import ShelfC from './components/Shelf/ShelfC';
import ShelfD from './components/Shelf/ShelfD';
import Home from './components/Home/Home';


export default  (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/api/shelf/A' component={ShelfA} />
        <Route path='/api/shelf/B' component={ShelfB} />
        <Route path='/api/shelf/C' component={ShelfC} />
        <Route path='/api/shelf/D' component={ShelfD} />
    
    </Switch>
)
