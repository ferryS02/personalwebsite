import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div className={classes.middleToogleButton}></div>
        <div></div>
    </div>
);

export default drawerToggle;