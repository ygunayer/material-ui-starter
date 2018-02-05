import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => (
    <header>
        <h1>React Minimal Starter</h1>
        <ul>
            <li><NavLink exact to="/" activeStyle={{ color: '#090' }}>Home</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={{ color: '#090' }}>About</NavLink></li>
        </ul>
    </header>
);

export default Header;
