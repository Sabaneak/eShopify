import React, { Component } from 'react';

// Npm Import
import Grid from '@material-ui/core/Grid';

import SideBar from '../Sidebar/Sidebar';

// Images
import watch from './Assets/rolex.jpg';
import shoes from './Assets/nike.jpg';
import ball from './Assets/football.jpg';
import condom from './Assets/durex.jpg';
import washing from './Assets/lg.jpg';

// Import Css
import '../Popular/Popular.css';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export default class Viewlist extends Component {
    constructor(props){
        super(props);
            this.state = {
                items : [
                    {id:1, name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch, counter:0},
                    {id:2, name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
                    {id:3, name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball, counter:0},
                    {id:4, name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom, counter:0},
                    {id:5, name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing, counter:0},
                    {id:6, name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch, counter:0},
                    {id:7, name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
                    {id:8, name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball, counter:0},
                    // {id:9, name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom, counter:0},
                    // {id:10, name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing, counter:0},
                    // {id:11, name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch, counter:0},
                    // {id:12, name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
                    // {id:13, name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball, counter:0},
                    // {id:14, name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom, counter:0},
                    // {id:15, name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing, counter:0},
                ]
            }
    }

    render() {
        return (
            <>
            <SideBar />
            <h1 style={{marginBottom:'2%'}}>Top Picks for you!</h1>
                <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={4}
                >
                        {this.state.items.map( (popular)=> {
                        return (
                            <Grid item xs={3}>    
                                    <div className="flipCard" >
                                        <div className="flipCardInner">
                                            <div className="flipCardFront">
                                                <img src={popular.image} alt="brand" style={{ width:"150px",height:"250px", borderRadius: '20px' }} />
                                            </div>
                                            
                                            <div className="flipCardBack">
                                                <h1>{popular.brand+" "+popular.name}</h1>
                                                <p>Amount - {popular.price}</p>
                                                <p>Rating - {popular.rating}</p>
                                                <div>
                                                    <button onClick={() => this.handleAdd(popular.id)} style={{ marginTop:'8%', marginRight:'10%', border:'None'}}>
                                                        <FontAwesomeIcon icon={faPlus}/>
                                                    </button>
                                                    <button onClick={() => this.handleMinus(popular.id)} style={{ marginTop:'8%', marginLeft:'10%', border:'None'}}>
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
            </>
        )
    }
}
