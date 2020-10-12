import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Redirect} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

// Import Css
import './Popular.css';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../Sidebar/Sidebar';

class Popular extends Component {
        constructor(props){
            super(props);
                this.state = {
                    explore: false,
                }
            }

    handleExplore = (e) => {
        this.setState({
            explore: true
        })
    }
     
    render() {
        console.log(this.state.items);
        return (
            <>
            <Sidebar />
            <h1 style={{marginBottom:'1px'}}>Top Picks for you!</h1>
                <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={1}
                >
                        {this.props.items.map((popular) => {
                        return (
                            <Grid item xs={2}>
                                <div className="flipCard">
                                    <div className="flipCardInner">
                                        <div className="flipCardFront">
                                            <img src={popular.image} alt="brand" style={{ width:"150px",height:"250px", objectFit:"contain", borderRadius: '20px' }} />
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
                    open={this.props.open}
                    onClose={this.props.close}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{
                        position: 'absolute',
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
                                    {elem.counter}x {elem.name}
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

            <button onClick={this.handleExplore} className="exploreButton">Explore All</button>
            
            {this.state.explore ? 
            <Redirect to = {{
                pathname: '/viewall'
            }} />
            : 
            null}

            </>
        ) 
    }
}

export default Popular;