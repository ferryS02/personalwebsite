import React, { Component } from 'react';
import classes from './ContactStyles.module.scss';
import Maintenance from '../../component/Maintenance/Maintenance';

class Contact extends Component {
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
			</div>
		}
        return (
            <div className={classes.ContactStyle}>
				{content}
            </div>
        );
    }
}

export default Contact;