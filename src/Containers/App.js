import React from 'react'; 
import './App.css';

// Custom Component
import Sidebar from '../Components/Sidebar/Sidebar';
import Slideshow from '../Components/Slideshow/Slideshow';

function App() {
  return (
    <div className="App">
        <p>Hello</p>
        <Sidebar />
        <Slideshow />
    </div>
  );
}

export default App;
