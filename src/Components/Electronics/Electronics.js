import React, { Component } from 'react';

// Npm Import
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import SideBar from '../Sidebar/Sidebar';

// Import Css
import '../Popular/Popular.css';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default class Electronics extends Component {
    constructor(props){
        super(props);
            this.state = {
                open : false,
                items: this.props.items.filter(x => x.type==="Electronics"),
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
            <SideBar />       

            <button style={{width: "100px", height: "40px", backgroundColor: "#DB3D44", float: "right",border:"None"}} onClick={this.handleOpen}>
                    <FontAwesomeIcon className="iconStyle" icon={faShoppingCart} />
                    <span style={{color:"white", padding:"10px",fontSize:"20px"}}>{this.props.count}</span>
            </button>           
            
            <h1 style={{marginBottom:'2%', marginLeft:"8%"}}>Electronics</h1>
                <Grid 
                style={{paddingLeft:"65px"}}
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={2}
                >
                        {this.state.items.map( (popular)=> {
                        return (
                            <Grid item xs={2}>    
                                    <div className="flipCard" >
                                        <div className="flipCardInner">
                                            <div className="flipCardFront">
                                                <img src={popular.image} alt="brand" style={{ width:"200px",height:"250px", objectFit:"contain",borderRadius: '20px' }} />
                                            </div>
                                            
                                            <div className="flipCardBack">
                                                <h1>{popular.brand+" "+popular.name}</h1>
                                                <p>Amount - {popular.price}</p>
                                                <p>Rating - {popular.rating}</p>
                                                <div>
                                                    <button onClick={() => this.props.add(popular.id)} style={{ marginTop:'8%', marginRight:'10%', border:'None'}}>
                                                        <FontAwesomeIcon icon={faPlus}/>
                                                    </button>
                                                    <button onClick={() => this.props.minus(popular.id)} style={{ marginTop:'8%', marginLeft:'10%', border:'None'}}>
                                                        <FontAwesomeIcon icon={faMinus}/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Grid>
                        )
                    })}
                </Grid>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{
                        position: 'absolute',
                        textAlign: 'center',
                        width: 400,
                        height: 400,
                        backgroundColor: 'grey',
                        border: '2px solid #000',
                        // boxShadow: 'black',
                        top: '20%',
                        left:'35%'
                        // padding: theme.spacing(2, 4, 3),
                    }}>
                        <h2 id="simple-modal-title">Receipt</h2>
                            {this.props.items.filter((item) => (item.counter > 0)).map((elem) => (
                                <p id="simple-modal-description">
                                {elem.counter}x {elem.name} ----------- ₹{elem.price * elem.counter}
                                </p>
                            ))}
                        
                        <button style={{
                            backgroundColor:"#DB3D44",
                            color: "white",
                            borderTop: "#fff",
                            borderLeft: "#fff",
                            borderRight: "#fff",
                            borderBottom: "#fff",
                            fontSize: "13px",
                            /* font-family: 'Montserrat', sans-serif, */
                            width: "180px",
                            height: "40px",
                            margin: "0.05%",
                            boxShadow: "0 10px 10px 0 rgba(0,0,0,0.05), 0 10px 15px 0 rgba(0,0,0,0.10)",
                            outline: "none",
                        }}>
                            Checkout
                        </button>
                    </div>
                </Modal>
            </>
        )
    }
}