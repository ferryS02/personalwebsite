import React, { Component } from 'react';
import classes from './BlogStyles.module.scss';
import Card from '../../component/Card/Card.js';
import Maintenance from '../../component/Maintenance/Maintenance';

class Blog extends Component {
	constructor(){
		super();
		this.state={
			isMaintenance:true
		}
	}
    render() {
		let content;
		if(this.state.isMaintenance===true){
			content = <Maintenance/>
		}else{
			content = 			
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
		}
        return (
            <div className={classes.Blog}>
				{content}
            </div>
        );
    }
}

export default Blog;
