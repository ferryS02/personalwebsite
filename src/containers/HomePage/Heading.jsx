import React from 'react';
import cx from "classnames";
import classes from './HomePageStyles.module.scss';

import googleplus from '../../assets/img/Icon/google-plus2.png'
import linkedin from '../../assets/img/Icon/linkedin.png';
import github from '../../assets/img/Icon/github.png';
import headingSliderContent1 from '../../assets/img/HomePage/headingSliderContent1.png'


const Heading = (props) => (
    <div className="columns">
        <div className="column is-two-fifth">
            <img className={classes.headingSliderContent} src={headingSliderContent1} alt="slider_content"/>
        </div>
        <div className={cx("column is-three-fifth has-text-right",classes.headingContent)}>
            <h1 className="is-size-1 has-text-weight-semibold">#SharingIsBlessing</h1>
            <h3 className="has-text-weight-semibold">I'm Ferry. I'm interest in Software Engineering and Artificial Engineering</h3>
            <p>In this blog you can know more about me, looking my portofolio and also i will share
                my knowledge about software engineering and also artificial engineering.
            </p>
            <div >
                <a href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={linkedin} alt="linkedin_sosmed"/></a>
                <a href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={googleplus} alt="googleplus_sosmed"/></a>
                <a href="https://github.com/ferryS02"><img className={classes.socialMedia} src={github} alt="github"/></a>
            </div>
        </div>
    </div>
);

export default Heading