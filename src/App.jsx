import './App.css';
import PublicGroups from './components/PublicGroups';
import Discover from './components/Discover'  ;
import TourCard from './components/TourCardCategories';
import tourImage from './images/tourcard.png' ;


function App() {
  return (
    <div>  
      <div >
      <TourCard
        image={tourImage}
        title="Restaurants"
        button="142 restaurants"
        width="300px"
        height="250px"
      />
    </div>

      <PublicGroups />

      <Discover />

    </div>
  );
}

export default App;
