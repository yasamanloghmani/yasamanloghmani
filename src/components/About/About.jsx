import React, { Component } from 'react';
import './About.css';
import SocialMedia from '../SocialMedia/SocialMedia';

export default class About extends Component {
  
  render () {
    return (
        <div className='pages About' id="about" >
           <div></div>
            <div className="aboutP">
              <h2>About Me</h2>
              <p>
              Hi, I'm Yasaman Loghmani and I graduated from General Assembly Software Engineering Immersive program. I am a full-stack developer that translates the geekiness behind ideas bringing to life an aesthetically pleasing and fluid app for users.

              My background in intellectual property law and culinary arts enhanced my ability to articulate in a business context and to provide creative solutions. This allows me to be an organized and focused team player that collaborates for a positive environment seeking challenges and opportunities to grow and improve, while also developing and delivering.
              </p>
              <SocialMedia></SocialMedia>
            </div>
        </div>
    );
  }
}

