import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

// Import Css
import './Popular.css';

// Images
import watch from './Assets/rolex.jpg';
import shoes from './Assets/nike.jpg';
import ball from './Assets/football.jpg';
import condom from './Assets/durex.jpg';
import washing from './Assets/lg.jpg';

// FontAwesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

// Icons
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

class Popular extends Component {
    state = {
        items : [
            {id:1, name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch},
            {id:2, name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes},
            {id:3, name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball},
            {id:4, name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom},
            {id:5, name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing}
        ]
    }
    
    render() {
        console.log("State",this.state);
        return (
            <>
            <h1 style={{marginBottom:'2%'}}>Top Picks for you!</h1>
                <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center" 
                spacing={1}
                >
                        {this.state.items.map( (popular, key)=> {
                        return (
                            <Grid item xs={2}>
                                <div className="flipCard">
                                    <div className="flipCardInner">
                                        <div className="flipCardFront">
                                            <img src={popular.image} alt="brand" style={{ width:"150px",height:"250px", borderRadius: '20px' }} />
                                        </div>
                                        
                                        <div className="flipCardBack">
                                            <h1>{popular.brand+" "+popular.name}</h1>
                                            <p>Amount - {popular.price}</p>
                                            <p>Rating - {popular.rating}</p>
                                            <div>
                                                <button style={{ marginTop:'8%', marginRight:'10%', border:'None'}}>
                                                    <FontAwesomeIcon icon={faPlus}/>
                                                </button>
                                                <button style={{ marginTop:'8%', marginLeft:'10%', border:'None'}}>
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
            

            <button className="exploreButton">Explore All</button>
            </>
        ) 
    }
}

export default Popular;
