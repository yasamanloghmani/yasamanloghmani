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
              Mission-driven full stack developer with a passion for thoughtful UI design. I have more than 5 years of experience in web design and development. My background in Information Technology has allowed me to have a better understanding in computer science and technology. I am passionate about building excellent software that improves the lives of those around me. I consider myself as a determined person, quick learner.
              </p>
              <SocialMedia></SocialMedia>
            </div>
        </div>
    );
  }
}

