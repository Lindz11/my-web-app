import Carditems from '../components/carditems';
import React from 'react';
import './cards.css';
import Switches from '../assets/4.avif';
import Keycaps from '../assets/3.avif';
import Groupbuys from '../assets/1.avif'
function cards() {
  return (
    <div className="cards">
      <h1>Check out all of the great deals we have for your keyboard needs!</h1>
      <div className="cards__container">
        <div className= "cards__wrapper">
            <ul className="cards__items">
                <Carditems
                src = {Switches}
                text = "Click to Explore Our Keyboard Switch Collection!"
                label = 'Switches'
                path = '/switches'/>
                <Carditems
                src = {Keycaps}
                text = "Click to Explore Our Keyboard Keycap Collection!"
                label = 'Keycaps'
                path = '/keycaps'/>
                <Carditems
                src = {Groupbuys}
                text = "Exclusive Deals Await: Dive into Our Keyboard Group Buys!"
                label = 'Groupbuys'
                path = '/groupbuys'/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default cards;
