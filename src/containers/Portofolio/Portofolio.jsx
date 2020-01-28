import React, { Component } from 'react';
import classes from './PortofolioStyles.module.scss';
import cx from "classnames";
import Card from '../../component/Card/Card.js';

class Portofolio extends Component {
    render() {
        return (
            <div className={classes.PortofolioStyle}>
                <div className="columns is-variable is-8-desktop">
					<div class="column is-one-quarter">
						<Card/>
					</div>
					<div class="column is-one-quarter">
						<Card/>
					</div>
					<div class="column is-one-quarter">
						<Card/>
					</div>
					<div class="column is-one-quarter">
						<Card/>
					</div>
				</div>
            </div>
        );
    }
}

export default Portofolio;