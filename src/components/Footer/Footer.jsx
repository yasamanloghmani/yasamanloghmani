import React, { Component } from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

import './Footer.css';

export default class Footer extends Component {
  render () {

    return (
      <div  className='Footer' id='contact'>
        <div className='socialicons'>
        <SocialMedia></SocialMedia>
        <p><span>
                Email: 
              </span>
              <br/>yasiloghmani@gmail.com</p>
        </div>
       
          
        
       
        
        
      </div>
    )
  }
}