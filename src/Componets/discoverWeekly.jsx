
import DiscoverCards from "./discoverCards/discoverCards";
import Style from './discoverWeekly.module.css';

function DiscoverWeekly() {
 const places = [
  {
    name: 'Coffe Point',
    image: '/images/coffee_point.jpg',
    category: 'Caf&eacute;',
    rating: '4.2',
    visitors: '211',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },

  {
    name: 'Cinema Galaxy',
    image: '/images/cinema_galaxy.jpg',
    category: 'Cinema',
    rating: '3.9',
    visitors: '403',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },
  {
    name: 'Bremer',
    image: '/images/bremer.jpg',
    category: 'Restaurant',
    rating: '4.6',
    visitors: '3.6k',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },
  {
    name: 'Stereo',
    image: '/images/stereo.jpg',
    category: 'Restaurant & caf&eacute;',
    rating: '4.3',
    visitors: '1.9k',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },
  {
    name: 'Hustle House',
    image: '/images/hustle_house.jpg',
    category: 'Co-working Space',
    rating: '4.2',
    visitors: '42',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },
  {
    name: "Al Gama'a Plaza Mall",
    image: '/images/elgam3a_mall.jpg',
    category: 'Shopping Mall',
    rating: '4.1',
    visitors: '5k',
    isOpen: false,
    openDate: 'Saturday - Friday'
  },
  {
    name: 'Index',
    image: '/images/index_workspace.jpg',
    category: 'Co-working Space',
    rating: '4.7',
    visitors: '176',
    isOpen: true,
    openDate: 'Saturday - Friday'
  },
  {
    name: 'Ace Town',
    image: '/images/ace_town.jpg',
    category: 'Sports Complex',
    rating: '4.6',
    visitors: '27',
    isOpen: true,
    openDate: 'Saturday - Friday'
  }
];



  return (
    <div className={Style.discoverWeekly}>
      <div style={{ width: '100%' }}>
        <p className={Style.discoverTitle}>Discover Weekly</p>
        <p className={Style.discoverDescription}>
          An enim nullam tempor sapien gravida donec enim ipsum
        </p>
      </div>

      {places.map((place) => (
        <DiscoverCards
          key={place.id}
          className={Style.discoverCard}
          name={place.name}
          image={place.image}
          category={place.category}
          rating={place.rating}
          visitors={place.visitors}
          isOpen={place.isOpen}
          openDate={place.openDate}
          id={place.id}
        />
      ))}
    </div>
  );
}

export default DiscoverWeekly;
