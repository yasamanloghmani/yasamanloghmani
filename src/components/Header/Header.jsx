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
      <div  className='pages Header'>
        <Lottie options={defaultOptions}
              height={350}
              width={350}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
        />
        <h1>Yasaman Loghmani</h1>
        <h3>Full-Stack Developer</h3>
        <SocialMedia></SocialMedia>
      </div>
    )
  }
}