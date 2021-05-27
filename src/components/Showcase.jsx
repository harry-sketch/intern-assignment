import React from 'react';
import "../components/Showcase.css";
import Card from "./Card";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__first">
        <h2 className="showcase__header">What are you <br/>having your Lunch? </h2>
        <div className="showcase__firstInner">
        <Card img="./images/taco.jpg"
             heading="Mexican Taco" />

        <Card img="./images/pizza.jpg" 
              heading="Farmhouse Pizza" />
        <Card img="./images/burger.jpg" 
              heading="Chicken Burger" />

        <Card img="./images/hakka.jpg" 
            heading="Hakka Noddles" />

        <div className="last__card">
          <Card img="./images/salsa.jpg" 
                heading="Tomato salsa" />
        </div>
        <div className="last__card">
          <Card img="./images/guca.jpg" 
                heading="Guacamole" />
        </div>
        </div>
      </div>
      <div className="showcase__second">
        <p>
          Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit,<br/> sed do eisumod tempor <br/>incidicunt ut labore et.
        </p>
      </div>
    </div>
  )
}

export default Showcase;
