import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shelf from './components/Shelf/Shelf';
import Home from './components/Home/Home';


export default  (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/api/shelf/A' component={Shelf} />
        <Route path='/api/shelf/B' component={Shelf} />
        <Route path='/api/shelf/C' component={Shelf} />
        <Route path='/api/shelf/D' component={Shelf} />
    
    </Switch>
)
