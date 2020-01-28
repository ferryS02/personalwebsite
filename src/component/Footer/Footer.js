import React from 'react';
import classes from "./Footer.module.css"
import reactJs from '../../assets/img/tools/reactjslogo.png';
import googleplus from '../../assets/img/Icon/google-plus2.png'
import bulma from '../../assets/img/tools/bulma.png';
import linkedin from '../../assets/img/Icon/linkedin.png';
import github from '../../assets/img/Icon/github.png';

const Footer = ( props ) => (
    <footer className={classes.Footer}>
        <div class="columns ">
            <div class="column ">
                 <h5 class="title is-4 has-text-white"> This site is developed using</h5>
                 <div class="is-inline-flex">
                    <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                    <img class="image is-48x48" src={bulma} alt="bulma"/>
                 </div>
            </div>
            <div class="is-4 is-offset-6">
                 <h5 class="title is-4 has-text-white"> Contact</h5>
                 <div >
                    <a href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={linkedin} alt="linkedin_sosmed"/></a>
                    <a href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={googleplus} alt="googleplus_sosmed"/></a>
                    <a href="https://github.com/ferryS02"><img className={classes.socialMedia} src={github} alt="github"/></a>
                </div>
            </div>
        </div>
        <p class="has-text-centered"> Copyright @FerryCode 2019</p>
    </footer>
);
export default Footer;
    