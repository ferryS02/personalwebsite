import React from 'react';
import cx from "classnames";

const AboutMe = (props) => (
    <div className="columns">
        <div className="column is-3 is-offset-8 has-text-left">
            <p>
            "Do it with all your heart, mind and abilities with a happy heart"
            </p>
            <a href="/aboutme"><button className={cx("gradient-btn btn-3")}>AboutMe</button></a>
        </div>
    </div>
);

export default AboutMe