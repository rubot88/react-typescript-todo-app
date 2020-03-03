import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <nav >
        <div className="nav-wrapper ph-1 purple darken-2">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">ToDo List</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
);