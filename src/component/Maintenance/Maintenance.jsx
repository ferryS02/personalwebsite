import React from 'react';
import maintenance from '../../assets/img/Maintenance/2x/maintenance.png'
import classes from './Maintenance.module.css';

import cx from 'classnames';

const Maintenance = (props) => (
    <div className={cx(classes.Maintenance,"columns is-variable is-8-desktop")}>
        <div className={cx(classes.textMaintenance,"column is one-half add-margin-auto")}>
            <h1 class="is-size-1 title">Sorry, We are cooking new and cool feature</h1>
            <p>This page will be available until the feature is finished</p>
            <a href="/"><button class="main-btn btn-3 add-margin-top-20px">Back to Homepage</button></a>
        </div>
        <div className={classes.imgMaintenance}>
            <img src={maintenance} alt="maintenance_png"/>
        </div>
    </div>
);

export default Maintenance;
