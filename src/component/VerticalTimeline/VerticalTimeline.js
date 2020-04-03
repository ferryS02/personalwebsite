import React from 'react';
import classes from './verticalTimeline.module.scss'
import cx from "classnames";

const VerticalTimeline = (props) => (
    <div className={cx("timeline",classes.verticalTimeLine)}>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>{props.year}</p>
            </div>
            <div class="timeline-content">
                <p class="heading">{props.organization}</p>
                <p>{props.role}</p>
            </div>
        </div>
    </div>
);   
   

export default VerticalTimeline;
