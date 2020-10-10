import React from 'react'; 
import './App.css';

// Custom Component
import Sidebar from '../Components/Sidebar/Sidebar';
import Slideshow from '../Components/Slideshow/Slideshow';
import Popular from '../Components/Popular/Popular'; 
import Cart from '../Components/Cart/Cart';

function App() {
  return (
    <div className="App">
        <p>Hello</p>
        <Sidebar />
        <Slideshow />
        <Popular />
        <Cart />
    </div>
  );
}

export default App;
