import React, { useState } from 'react'
import Restaurant from './Restaurant';

const restaurantData = {
image: "src/assets/img/25460b44ea72fba3ea2de3aeb321c2f8c9be9b2a.png",
name: "Venice, Rome & Milan",
location: "Location",
rating: 4.9,
visitors: "1.2k"
};

export default function RestaurantPage() {

    const [visibleCards, setVisibleCards] = useState(12);
    const restaurants = Array(24).fill(restaurantData);
    const showAll = () => {
        setVisibleCards(restaurantData.length);
    }
    const showLess = () => {
        setVisibleCards(12);
    }
  return (
    <div className='RestPage d-flex flex-column'>
        <div className='d-flex align-items-center flex-column text-center px-2'>
                <h1 className=' title mb-3'>Restaurants</h1>
                <p className='description'>Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        </div>

<div className="container py-4">
    <div className='filterBtnContainer justify-content-center '>
                <button className='filterBtn '>Cheapest</button>
                <button className='filterBtn'>Best</button>
                <button className='filterBtn' >All Favourite</button>
        </div>
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {restaurants.slice(0, visibleCards).map((rest, index) => (
            <Restaurant key={index} {...rest} />
          ))}
    {/* <Restaurant {...restaurantData} /> */}
  </div>
</div> 


{visibleCards < restaurants.length ? (
<div className='d-flex justify-content-center align-items-center '>
    <button className="ShowMoreButton" onClick={showAll}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3047 6.5286C11.0444 6.26825 10.6223 6.26825 10.3619 6.5286L8.5 8.39052L6.63807 6.5286C6.37772 6.26825 5.95561 6.26825 5.69526 6.5286C5.43491 6.78894 5.43491 7.21105 5.69526 7.4714L8.0286 9.80474C8.28894 10.0651 8.71105 10.0651 8.9714 9.80474L11.3047 7.4714C11.5651 7.21105 11.5651 6.78894 11.3047 6.5286Z" fill="#777E91"/>
</svg>
Show All Restaurant</button>
</div> 

) : <div className='d-flex justify-content-center align-items-center '>
    <button className="ShowMoreButton" onClick={showLess}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8047 9.4714C10.5444 9.73175 10.1223 9.73175 9.86193 9.4714L8 7.60948L6.13807 9.4714C5.87772 9.73175 5.45561 9.73175 5.19526 9.4714C4.93491 9.21106 4.93491 8.78895 5.19526 8.5286L7.5286 6.19526C7.78894 5.93491 8.21105 5.93491 8.4714 6.19526L10.8047 8.5286C11.0651 8.78895 11.0651 9.21106 10.8047 9.4714Z" fill="#777E91"/>
</svg>
Show Less Restaurant</button>
</div> 
 }
    </div>



  )
}
