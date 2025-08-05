import React from 'react';
import Navigator from './Components/Navigator';
import History from './Components/History';
import './App.css';


function App() {
  return (
    <>
    <div className="navigator-container">
      <Navigator 
        color="blue" 
        icon={<span role="img" aria-label="lightbulb">💡</span>} 
        title="Tell us what you want to do" 
        text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." 
      />
      <Navigator 
        color="yellow" 
        icon={<span role="img" aria-label="bolt">⚡</span>} 
        title="Share your travel preference" 
        text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." 
      />
      <Navigator 
        color="pink" 
        icon={<span role="img" aria-label="star">⭐</span>} 
        title="We'll give you recommendations" 
        text="Fully layered dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." 
      />
    </div>

    <div className="App">
      <History />
    </div>
    </>
  );
}



export default App;
