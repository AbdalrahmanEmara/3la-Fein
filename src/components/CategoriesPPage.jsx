import './CategoriesPPage.css';
import img from '../images/tourcard.png' ;
import CategoriesCCard from './CategoriesCCard';
import React, { useState } from "react";
import CardDDetailes from './CardDDetailes';



const CategoriesPPage = () => {
    const [showCard, setShowCard] = useState(false);


  return (
    <>
    <div className='pageName'>
        <h1>Categories </h1>
        <p>Stacks is a production-ready library of stackable content blocks built in React Native.</p>

    <div>
      <button onClick={() => setShowCard(true)}>3la Fein</button>

      {showCard && <CardDDetailes onClose={() => setShowCard(false)} />}
    </div>
    </div>


    <div className='div-one'>
        <div className='div-two'>
            <CategoriesCCard image={img} buttonText="100 Restaurants" title="Restaurants" />
        </div>

        <div className='div-three'>
            <CategoriesCCard image={img} buttonText="50 Cafes" title="Cafes" />
        </div>

        <div className='div-four'>
            <CategoriesCCard image={img} buttonText="80 Parks" title="Parks" />
        </div>

        <div className='div-five'>
            <CategoriesCCard image={img} buttonText="30 Hotels" title="Hotels" />
        </div>

        <div className='div-two2'>
            <CategoriesCCard image={img} buttonText="100 Restaurants" title="Restaurants" />
        </div>

        <div className='div-three2'>
            <CategoriesCCard image={img} buttonText="50 Cafes" title="Cafes" />
        </div>

        <div className='div-four2'>
            <CategoriesCCard image={img} buttonText="80 Parks" title="Parks" />
        </div>

        <div className='div-five2'>
            <CategoriesCCard image={img} buttonText="30 Hotels" title="Hotels" />
        </div>
    </div>
    </>
  );
};

export default CategoriesPPage ;