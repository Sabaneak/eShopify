import React, { Component } from 'react';

// Custom Css
import './Cart.css';

// Custom Component Import
import Popular from '../Popular/Popular';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="cartButton" onClick={this.props.open}>
                        <FontAwesomeIcon className="iconStyle" icon={faShoppingCart} />
                        <span style={{color:"white", padding:"10px",fontSize:"20px"}}>{this.props.count}</span>
                </button>           
            </div>
        )
    }
}

export default Cart;