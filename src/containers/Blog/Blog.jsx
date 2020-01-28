import React, { Component } from 'react';
import classes from './BlogStyles.module.scss';
import cx from "classnames";
import Card from '../../component/Card/Card.js';

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
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

export default Blog;
