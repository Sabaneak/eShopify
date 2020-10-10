import React, { Component } from 'react';

// Custom Css
import './Cart.css';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
    state = {
        cartIcon: false        
    }

    handleClick = (e) => {
        this.setState({
            cartIcon: !this.state.cartIcon 
        })
    }

    render() {
        return (
            <div>
            
            {this.state.cartIcon?
                <button className="cartButton" onClick={this.handleClick}>
                    <FontAwesomeIcon className="iconStyle" icon={faShoppingCart} />
                </button>           
            :
                <button className="cartButton" onClick={this.handleClick}>
                    <FontAwesomeIcon className="iconStyle" icon={faArrowLeft} />
                </button>           
            }

            </div>
        )
    }
}

export default Cart;