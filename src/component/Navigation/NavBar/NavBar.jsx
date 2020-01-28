import React, { Component } from 'react';
import NavBarItems from "../NavBarItems/NavBarItems.jsx";
import classes from "./navBarStyles.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"
class NavBar extends Component {
    render() {
        return (
            <header className={classes.NavBar}>
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>
                <div className={classes.desktopItem}>
                <NavBarItems/>
                </div>
            </header>
        );
    }
}

export default NavBar;
