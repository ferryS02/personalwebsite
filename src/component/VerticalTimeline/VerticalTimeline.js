import React from 'react';
import classes from './verticalTimeline.module.scss'
import cx from "classnames";

const VerticalTimeline = (props) => (
    <div className={cx("timeline",classes.verticalTimeLine)}>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>2019</p>
            </div>
            <div class="timeline-content">
                <p class="heading">AIESEC in Undip</p>
                <p>Staff Brand & Creative</p>
            </div>
        </div>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>2019</p>
            </div>
            <div class="timeline-content">
            <p class="heading">AIESEC in Undip</p>
            <p>Digital Public Relation Manager</p>
            </div>
        </div>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>2019</p>
            </div>
            <div class="timeline-content">
            <p class="heading">AIESEC in Undip</p>
            <p>Digital Public Relation Manager</p>
            </div>
        </div>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>2019</p>
            </div>
            <div class="timeline-content ">
            <p class="heading">Science and Mathematics Faculty Christian Community</p>
            <p>Public Relation Staff</p>
            </div>
        </div>
        <div class="timeline-item is-primary">
            <div class="timeline-marker is-primary">
                <p>2019</p>
            </div>
            <div class="timeline-content">
            <p class="heading">AIESEC in Indonesia</p>
            <p>National Supporting Team</p>
            </div>
        </div>
    </div>
);   
   

export default VerticalTimeline;
