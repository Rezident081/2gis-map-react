import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className='navigation-block'>
                <ul className='navigation-nav'>
                    <li><NavLink exact to='/' activeClassName='active-link'>Main</NavLink></li>
                    <li><NavLink to='/about' activeClassName='active-link'>About me</NavLink></li>
                    <li><NavLink to='/signin' activeClassName='active-link'>Sign in</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;