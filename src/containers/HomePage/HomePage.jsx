import React, { Component } from 'react';
import classes from './HomePageStyles.module.scss';
import Heading from './Heading';
import AboutMe from './AboutMe';
import Blog from './Blog';
import Portofolio from './Portofolio';
import SliderImg from '../../assets/img/HomePage/Slider.jpg'

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
                <div className={classes.Heading}>
                    <Heading/>  
                </div>
                <div className={classes.AboutMe}>
                    <AboutMe/>
                </div>
                <div className={classes.Blog}>
                    <Blog/>
                </div>
                <div>
                    <img src={SliderImg} alt="slider_img"/>
                </div>
                <div className={classes.Portofolio}>
                    <Portofolio/>
                </div>
            </div>
        );
    }
}

export default HomePage;