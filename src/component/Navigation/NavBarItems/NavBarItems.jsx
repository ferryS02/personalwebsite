import React from 'react';
import NavBarItem from "./NavBarItem/NavBarItem.jsx";
import classes from './navBarItemsStyles.module.css';

const NavBarItems = (props) => (
        <div>
            <ul className={classes.NavBarItems}>
                <NavBarItem show={props.show} clicked={props.clicked} link="/" active>Home</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="aboutme">About Me</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="blog">Blog</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="portofolio">Portofolio</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="contact">Contact</NavBarItem>
            </ul>
        </div>
);

export default NavBarItems;