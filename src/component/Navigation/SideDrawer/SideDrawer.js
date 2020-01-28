import React from 'react';
import NavigationItems from '../NavBarItems/NavBarItems'
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
import close from '../../../assets/img/Icon/close.svg';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>	
                <nav>
                    <div className={classes.logo}>
                        <span class="image is-16x16">
                            <img src={close} onClick={props.closed} alt="close_drawer"/>
                        </span>
                        <a href="/"><h2 class="is-size-4 has-text-weight-semibold">#SharingIsBlessing</h2></a>
                    </div>
                    <NavigationItems show={props.open} clicked={props.closed}/>
                </nav>
            </div>
        </Aux>

    );
}

export default SideDrawer;