import React, { Component } from 'react';
import cvPhoto from '../../assets/img/AboutMe/foto_ferry.png';
import classes from './AboutMeStyles.module.scss';
import reactJs from '../../assets/img/tools/reactjslogo.png';
// import HorizontalTimeline from '../../component/HorizontalTimeline/HorizontalTimeline';
import VerticalTimeline from '../../component/VerticalTimeline/VerticalTimeline';
import linkedin from '../../assets/img/Icon/linkedin.png';
import googleplus from '../../assets/img/Icon/google-plus2.png'
import cx from "classnames";

class AboutMe extends Component {
    render() {
        return (
            <div className={classes.AboutMe}>
                <div class="columns is-desktop">
                    <div class="column is-one-fifth">
                        <img className={classes.cvPict} src={cvPhoto} alt="cv_profile_pict"/>
                        <div >
                            <a class="image is-48x48" href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={linkedin} alt="linkedin_sosmed"/></a>
                            <a class="image is-48x48" href="https://www.linkedin.com/in/ferrysimangunsong/"><img className={classes.socialMedia} src={googleplus} alt="googleplus_sosmed"/></a>
                        </div>
                    </div>
                    <div className={cx("column is-four-fifth", classes.cvName)}>
                        <h1 class="title is-1  is-hidden-mobile">FERRY SIMANGUNSONG</h1>
                        <h1 class="title is-4  is-hidden-desktop">FERRY SIMANGUNSONG</h1>
                        <p class="subtitle is-4">Bacelor Degree of Computer Science</p>
                        <p class="career-objective has-text-justified">Persistent, dedicated and hard-working graduate looking for a full-time position. 
                            I would like to work in a company with a challenging environment. 
                            Moreover, I would like to utilize my knowledge, skills, experiences, and leadership as well as my passion for achieving company goals. 
                            I have experience in software engineering and programming. Interest in Software Engineering, Software Architecture, Cloud Computing and Artificial Inteligence.
                        </p>
                        {/* <div className={classes.characters}>
                            <p>Hard Worker</p>
                        </div>
                        <div className={classes.characters}>
                            <p>Strive for Excellence</p>
                        </div>
                        <div className={classes.characters}>
                            <p>Strategical Thinking</p>
                        </div>
                        <div className={classes.characters}>
                            <p>Solution Oriented</p>
                        </div>
                        <div className={classes.characters}>
                            <p>Adaptable</p>
                        </div> */}
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-info">Hard Worker</span>
                                </div>
                            </div>
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-info">Strive for Excellence</span>
                                </div>
                            </div>
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-info">Strategical Thinking</span>
                                </div>
                            </div>
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-info">Solution Oriented</span>
                                </div>
                            </div>
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-info">Adaptable</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="journey is-hidden-mobile">
                    {/* <HorizontalTimeline/> */}
                </div>
                <div class="organization">
                    <h3 class="title is-3">Education Background</h3>
                    <div class="columns">
                        <div class="column is-one-fifth">
                            <p class="subtitle is-4">2014-2019</p>
                        </div>
                        <div class="column">
                            <p class="subtitle is-5">Diponegoro University</p>
                            <p>Infomatics-Bachelor Degree</p>
                            <p>GPA <strong>3.62</strong> of 4.0</p>
                        </div>
                    </div>
                </div>
                <div class="language">
                    <h3 class="title is-3">Language</h3>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                                <span class="tag is-light">Indonesian</span> 
                                <span class="tag is-primary">Native Proficiency</span>
                            </div>
                        </div>
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">English </span>
                            <span class="tag is-primary">Professional Proficiency</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills">
                    <h3 class="title is-3">Skills</h3>
                    <div class="columns">
                        <div class="lists column is-one-fifth">
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Javascript-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Java-Itermediet</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>C,C++-Basic</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                        </div>
                        <div class="lists column is-one-fifth">
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                        </div>
                        <div class="lists column is-one-fifth">
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                            <div class="columns">
                                <img class="image is-48x48" src={reactJs} alt="reactjs"/>
                                <span>
                                    <p>Python-Advance</p>
                                    <progress class="progress is-primary" value="60" max="100">60%</progress>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="columns organization">
                    <div class="column is-half">
                        <h3 class="title is-3">Organization</h3>
                        <VerticalTimeline
                            year={"2017"}
                            organization={"AIESEC in Indonesia"}
                            role={"National Supporting Team - IT"}
                        />
                        <VerticalTimeline
                            year={"2017"}
                            organization={"Science and Mathematics Faculty Christian Community"}
                            role={"Public Relation Staff"}
                        />
                        <VerticalTimeline
                            year={"2016"}
                            organization={"AIESEC in Diponegoro University"}
                            role={"Digital Public Relation Manager"}
                        />
                        <VerticalTimeline
                            year={"2015"}
                            organization={"AIESEC in Diponegoro University"}
                            role={"National Supporting Team - IT"}
                        />
                    </div>
                    <div class="column is-half">
                        <h3 class="title is-3">Committee and Vounter Experience </h3>
                        <VerticalTimeline
                            year={"2017"}
                            organization={"Ruang Kreatif PMK FSM Undip"}
                            role={"Event Chairman"}
                        />
                        <VerticalTimeline
                            year={"2017"}
                            organization={"Sidang Pemuda NHKBP Semarang"}
                            role={"Publication and Documentation Coordinator"}
                        />
                        <VerticalTimeline
                            year={"2016"}
                            organization={"Walk for SDGs Semarang"}
                            role={"Design Coordinator"}
                        />
                        <VerticalTimeline
                            year={"2016"}
                            organization={"I-Break National Seminar"}
                            role={"Design Coordinator"}
                        />
                         <VerticalTimeline
                            year={"2016"}
                            organization={"Annual Informatic Competition"}
                            role={"Publication Committee"}
                        />
                         <VerticalTimeline
                            year={"2015"}
                            organization={"Pelatihan Dasar Komputer"}
                            role={"Equipment and Tools Coordinator"}
                        />

                    </div>
                    
                </div>
                <div class="working-experience">
                    <h3 class="title is-3">Working Experience</h3>
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">February 2017 - October 2017</span>
                            <span class="tag is-info">Lokavor Studio-Web Developer Intern </span>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">January 2019 - April 2019</span>
                            <span class="tag is-primary">Junior Software Engineer at PT.Renjana Membangun (Mavila)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="achievement-honor">
                    <h3 class="title is-3">Acievements & Honors</h3>
                    <div class="field is-grouped is-grouped-multiline">
                        
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">2017</span>
                            <span class="tag is-info">Cumlaude</span>
                            </div>
                        </div>
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">2016</span>
                            <span class="tag is-info">Best Public Relation Manager AIESEC in Diponegoro University</span>
                            </div>
                        </div>
                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">2016</span>
                            <span class="tag is-info">Object Oriented Programming Lab Asistant</span>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">2016</span>
                            <span class="tag is-success">Operation System Lab Asistant</span>
                            </div>
                        </div>

                        <div class="control">
                            <div class="tags has-addons">
                            <span class="tag is-light">2015</span>
                            <span class="tag is-primary">Fundamental Programming Lab Asistant</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="achievement-honor">
                    <h3 class="title is-3">Training & Courses</h3>
                </div>
            </div>

        );
    }
}

export default AboutMe;
