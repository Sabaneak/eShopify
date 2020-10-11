import React from 'react';
import { Component } from 'react';

// Custom Component
import Sidebar from '../Components/Sidebar/Sidebar';
import Slideshow from '../Components/Slideshow/Slideshow';
import Popular from '../Components/Popular/Popular'; 
import Cart from '../Components/Cart/Cart';

class Landing extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <Slideshow />
                <Popular />
                <Cart />
            </>
        )
    }
}

export default Landing;
