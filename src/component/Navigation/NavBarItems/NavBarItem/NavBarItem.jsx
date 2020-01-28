import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navBarItemStyles.module.css';

const NavBarItem = (props) => (
        <li className={classes.NavigationItem}>
            <NavLink className={props.active ? classes.active : null } onClick={props.clicked} to={props.link}>{props.children}</NavLink>
        </li>
);

export default NavBarItem;