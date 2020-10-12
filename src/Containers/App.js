import React, { Component } from 'react'; 
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import SearchBar from "material-ui-search-bar";

// Custom Component
import Landing from './Landing';
import Viewlist from '../Components/Viewlist/Viewlist';

// Images
import watch from './Assets/rolex.jpg';
import shoes from './Assets/nike.jpg';
import ball from './Assets/football.jpg';
import condom from './Assets/durex.jpg';
import washing from './Assets/lg.jpg';
import Clothes from '../Components/Clothes/Clothes';
import Electronics from '../Components/Electronics/Electronics';
import Household from '../Components/Household/Household';
import Sports from '../Components/Sports/Sports';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
            {id:2, type:"Clothes", name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
            {id:3, type:"Sports",name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball, counter:0},
            {id:4, type:"Household",name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom, counter:0},
            {id:5, type:"Electronics",name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing, counter:0},
            {id:6, type:"Electronics",name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch, counter:0},
            {id:7, type:"Clothes",name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
            {id:8, type:"Sports",name:"Football", brand:"Nivia", price:"₹800", rating:4.1, image:ball, counter:0},
            {id:9, type:"Household",name:"Condom", brand:"Durex", price:"₹2500", rating:3.8, image:condom, counter:0},
            {id:10, type:"Electronics",name:"Washer", brand:"LG", price:"₹1000", rating:3.4, image:washing, counter:0},
            {id:11, type:"Electronics",name:"Watch", brand:"Rolex", price:"₹1000", rating:4.7, image:watch, counter:0},
            {id:12, type:"Clothes",name:"Shoes", brand:"Nike", price:"₹1000", rating:4.6, image:shoes, counter:0},
      ],
      count : 0,
    }
  }

    handleAdd = (e) => {
      var stateCopy = {...this.state};
      stateCopy.items[e-1].counter += 1;
      this.setState(
          stateCopy,
      );

      this.setState({
          count: this.state.count+1
      });
  }

  handleMinus = (e) => {
    var stateCopy = {...this.state};

    if(this.state.count>0 && stateCopy.items[e-1].counter ) {
        stateCopy.items[e-1].counter -= 1;
        this.setState(
            stateCopy,
        );

        this.setState({
            count: this.state.count-1
        })
    }
  }

  render() {
    return(
      
      <div className="App">
        <SearchBar
        style = {{
          width : "50%",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft:"25%"

        }}
      />
        
        <BrowserRouter> 
        
          <Route path='/' exact render={(props) => <Landing items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />
          <Route path='/home' render={(props) => <Landing items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />

          <Route path='/clothes' render={(props) => <Clothes items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />
          <Route path='/electronics' render={(props) => <Electronics items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />
          <Route path='/household' render={(props) => <Household items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />
          <Route path='/sports' render={(props) => <Sports items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } /> 
          <Route path='/viewall' render={(props) => <Viewlist items={this.state.items} count={this.state.count} add={this.handleAdd} minus={this.handleMinus}/> } />
        
        </BrowserRouter>

      </div>
      );
    }
}

export default App;