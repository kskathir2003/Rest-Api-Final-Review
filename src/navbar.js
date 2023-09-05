import React from 'react';
import {BrowserRouter as Router , Route, Link} from 'react-router-dom';
import './navbar.css';
import LoginForm from './login.js';

function Navbar(){
    return(
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/login" exact Component={LoginForm}></Route>
        </Router>
    )
}

export default Navbar;