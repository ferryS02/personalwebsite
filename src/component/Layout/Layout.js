import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import NavBar from '../Navigation/NavBar/NavBar';
import Footer from '../Footer/Footer'
import classes from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false});
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer : !prevState.showSideDrawer};
        });
    }

    render(){   
        return(
            <Aux>
                <NavBar drawerToggleClicked={this.sideDrawerToogleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
};

export default Layout;