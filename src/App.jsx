import React from 'react';
import Navigator from './Components/Navigator';
import History from './Components/History';
import BookingCard from './Components/BookingCard';
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

    <div>
      <BookingCard
        imageSrc= '/images/venice.png'
        title="Venice, Rome & Milan"
        subtitle="Karineside"
        status="Opened"
        dates="Sunday - Thursday"
        priceDetails="Price Details"
        row1="$102 x 3 nights "
        res1="$306"
        row2="10% campaign discount"
        res2="-$30.6"
        row3="Service fee"
        res3="$50"
        row4="Total"
        res4="$225.4"
        cancellationPolicy="Free cancellation until 3:00 PM on May 05, 2024"
      />
    </div>
    </>
  );
}



export default App;
