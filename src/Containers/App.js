import React, { Component } from 'react'; 
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

// Custom Component
import Landing from './Landing';
import Viewlist from '../Components/Viewlist/Viewlist';

class App extends Component {
  render () {
    return (
      
      <div className="App">
        <p>Search Bar Here!</p>
        
        <BrowserRouter> 
        
          <Route path='/' exact render={(props) => <Landing /> } />
          <Route path='/home' exact render={(props) => <Landing /> } />

          {/* <Route path='/clothes' render={(props) => <Explore/> } />
          <Route path='/electronics' render={(props) => <Explore/> } />
          <Route path='/sports' render={(props) => <Explore/> } />
          <Route path='/household' render={(props) => <Explore/> } /> */}
          <Route path='/viewall' render={(props) => <Viewlist/> } />
        
        </BrowserRouter>

      </div>
      );
    }
}

export default App;
