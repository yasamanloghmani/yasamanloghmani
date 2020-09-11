import React, { Component } from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import Lottie from 'react-lottie';
import animationData from './8306-programming-animation.json';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
  render () {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div  className='Header' id='main'>
        <div >
          <SocialMedia></SocialMedia>
          <h1>I am Yasaman Loghmani</h1>
          <h3> <span>Full-Stack developer</span> <br/> with more than 5 years experience in web design​</h3>
          <a className='portfolioLink' href='#portfolio'>My Portfolio</a>
        </div>
        <div>
          <Lottie options={defaultOptions}
              height={400}
              width={500}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
        </div>
        
        
      </div>
    )
  }
}