import React from 'react';
import NavBarItem from "./NavBarItem/NavBarItem.jsx";
import classes from './navBarItemsStyles.module.css';
import cx from 'classnames';

const NavBarItems = (props) => (
        <div>
            <ul className={classes.NavBarItems}>
                <NavBarItem show={props.show} clicked={props.clicked} link="/" active>Home</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="aboutme">About Me</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="blog">Blog</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="portofolio">Portofolio</NavBarItem>
                <NavBarItem show={props.show} clicked={props.clicked} link="contact">Contact</NavBarItem>
                <a className={cx(classes.loginBtn," main-btn btn-3")} show={props.show} clicked={props.clicked} href="http://localhost:5000/">Signin</a>
            </ul>
        </div>
);

export default NavBarItems;