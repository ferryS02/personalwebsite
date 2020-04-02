import React, { Component } from 'react';
import classes from './PortofolioStyles.module.scss';
import cx from "classnames";
import Card from '../../component/Card/Card.js';
import Maintenance from '../../component/Maintenance/Maintenance'
class Portofolio extends Component {
	constructor(){
		super();
		this.state={
			isMaintenance:true
		}
	}
    render() {
		let content;
		if(this.state.isMaintenance){
			content = <Maintenance/>
		}else{
			content= 
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
            <div className={classes.PortofolioStyle}>
				{content}
            </div>
        );
    }
}

export default Portofolio;