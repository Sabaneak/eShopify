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

import cricket from './Assets/cricket.jpg';
import shirts from './Assets/shirts.jpg';
import sofa from './Assets/sofa.jpg';
import skirts from './Assets/skirts.jpg';
import tv from './Assets/tv.jpg';

import bed from './Assets/bed.jpg';
import kitchen from './Assets/kitchen.jpg';
import laptop from './Assets/laptop.jpg';
import shades from './Assets/shades.jpg';
import basketball from './Assets/basketball.jpg';


//Routes
import Clothes from '../Components/Clothes/Clothes';
import Electronics from '../Components/Electronics/Electronics';
import Household from '../Components/Household/Household';
import Sports from '../Components/Sports/Sports';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
            {id:1, type:"Electronics",name:"Watch", brand:"Rolex", price:"₹1000", rating:4.9, image:watch, counter:0},
            {id:2, type:"Clothes", name:"Shoes", brand:"Nike", price:"₹1000", rating:4.8, image:shoes, counter:0},
            {id:3, type:"Sports",name:"Football", brand:"Nivia", price:"₹800", rating:4.7, image:ball, counter:0},
            {id:4, type:"Household",name:"Condom", brand:"Durex", price:"₹2500", rating:4.6, image:condom, counter:0},
            {id:5, type:"Electronics",name:"Washer", brand:"LG", price:"₹1000", rating:4.4, image:washing, counter:0},
            
            {id:6, type:"Sports",name:"Cricket", brand:"SS", price:"₹1000", rating:4.2, image:cricket, counter:0},
            {id:7, type:"Clothes",name:"Shirts", brand:"Polo", price:"₹800", rating:4.1, image:shirts, counter:0},
            {id:8, type:"Household",name:"Sofa", brand:"IKEA", price:"₹2500", rating:3.9, image:sofa, counter:0},
            {id:9, type:"Clothes",name:"Skirts", brand:"LG", price:"₹1000", rating:3.6, image:skirts, counter:0},
            {id:10, type:"Electronics",name:"TV", brand:"Panasonic", price:"₹1000", rating:3.5, image:tv, counter:0},
            
            {id:11, type:"Household",name:"Bed", brand:"Comfy", price:"₹1000", rating:3.3, image:bed, counter:0},
            {id:12, type:"Household",name:"Kitchen", brand:"Silverware", price:"₹1000", rating:3.2, image:kitchen, counter:0},
            {id:13, type:"Electronics",name:"Laptop", brand:"msi", price:"₹1000", rating:3.1, image:laptop, counter:0},
            {id:14, type:"Clothes",name:"Shades", brand:"Raymond", price:"₹1000", rating:2.9, image:shades, counter:0},
            {id:15, type:"Sports",name:"Basketball", brand:"NBA", price:"₹1000", rating:2.7, image:basketball, counter:0},
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
        <SearchBar className="searchBar"/>
        
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