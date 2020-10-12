import React from 'react';
import { Component } from 'react';

// Custom Component
import Sidebar from '../Components/Sidebar/Sidebar';
import Slideshow from '../Components/Slideshow/Slideshow';
import Popular from '../Components/Popular/Popular'; 
import Cart from '../Components/Cart/Cart';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
      };
    
    handleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        return (
            <>
                <Sidebar />
                <Slideshow />
                <Popular items={this.props.items} count={this.props.count} add={this.props.add} minus={this.props.minus} open={this.state.open} close={this.handleClose}/>
                <Cart count={this.props.count} add={this.props.add} minus={this.props.minus} open={this.handleOpen}/>
            </>
        )
    }
}

export default Landing;
