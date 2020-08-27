import React, { Component } from 'react';
import './SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";

export default class SocialMedia extends Component {
  
  render () {
    return (
        <div className='SocialMedia'>
            <a href='https://linkedin.com/in/yasamanloghmani' target="_blank"><FontAwesomeIcon className='icons-logo' icon={faLinkedin} /></a>
            <a href='https://github.com/yasamanloghmani' target="_blank"><FontAwesomeIcon className='icons-logo' icon={faGithub} /></a>
            <a href='./files/YasamanLoghmani-Resume .pdf' target="_blank"><FontAwesomeIcon className='icons-logo' icon={faFilePdf} /></a>
            <p className='gmail'>yasiloghmani@gmail.com</p>
        </div>
    )
 } }