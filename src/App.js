import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageCount, FullpageNumber} from '@ap.cx/react-fullpage';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.css';
import SocialMedia from './components/SocialMedia/SocialMedia';

export default class App extends Component {
  
  render () {
    return (
      <div>
        {/* <NavBar /> */}
        <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection style={{
            backgroundColor: '#deecfc',
            padding: '1em',
          }}>
            <Header />
          </FullpageSection>
          <FullpageSection style={{
            backgroundImage: 'url(images/bg.png)',
            backgroundRepeat : 'no-repeat',
            padding: '1em',
          }}>
            <About />
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#deecfc',
            padding: '1em',
            overflow : 'scroll'
          }} >
            <Projects></Projects>
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#B9CEEB',
            padding: '1em',
          }}>
            <Skills />
            <div className='footer'>
                <SocialMedia />
            </div>
          </FullpageSection>
          
        </FullPageSections>
      </Fullpage>

      </div>
      
    )
  }
}