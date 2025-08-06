import React from 'react'
import Restaurant from './Restaurant';

const restaurantData = {
image: "src/assets/img/25460b44ea72fba3ea2de3aeb321c2f8c9be9b2a.png",
name: "Venice, Rome & Milan",
location: "Location",
rating: 4.9,
visitors: "1.2k"
};
export default function RestaurantPage() {
  return (
    <div className='RestPage d-flex flex-column'>
            <div className='d-flex align-items-center flex-column '>
        <h1>Restaurants</h1>
        <p>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
    </div>
<div className="container py-4">
  <div className="d-flex flex-wrap justify-content-center gap-4">
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
    <Restaurant {...restaurantData} />
  </div>
</div> 

<div className='d-flex justify-content-center align-items-center '>
    
    <button className="ShowMoreButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3047 6.5286C11.0444 6.26825 10.6223 6.26825 10.3619 6.5286L8.5 8.39052L6.63807 6.5286C6.37772 6.26825 5.95561 6.26825 5.69526 6.5286C5.43491 6.78894 5.43491 7.21105 5.69526 7.4714L8.0286 9.80474C8.28894 10.0651 8.71105 10.0651 8.9714 9.80474L11.3047 7.4714C11.5651 7.21105 11.5651 6.78894 11.3047 6.5286Z" fill="#777E91"/>
</svg>
Show All Restaurant</button>
</div>
    </div>



  )
}
