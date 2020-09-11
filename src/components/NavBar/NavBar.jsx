import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import './NavBar.css';

export default class NavBar extends Component {
    render(){
        return(
            <nav className="nav">
            <a href="#main" className="nav__logo--link">
                
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="nav__logo"
                    />
            </a>
            <Scrollspy
                items={["portfolio","about", "skills", "contact"]}
                currentClassName="is-current"
                offset={0}
                className="nav__list"
            >
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <span>Portfolio</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <span>About</span>
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <span>Skills</span>
                    </a>
                </li>
                
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <span>Contact</span>
                    </a>
                </li>
            </Scrollspy>
        </nav>
        );
    }
}