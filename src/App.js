import React from 'react';
import {  Route, Switch } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Wallpaper from './Components/Wallpaper';
import './App.css'

const App = () => {
    return(
        <>
        <Wallpaper/>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />   
                <Route exact path="/contact" component={Contact} />  
            </Switch>
        </>
    );
}

export default App;