import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageCount, FullpageNumber} from '@ap.cx/react-fullpage';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div>
        
        <NavBar />
        <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection style={{
            backgroundColor: '#e6faf6',
            padding: '1em',
          }}>
            <Header />
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#d2edee',
            padding: '1em',
          }} >
            <About />
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#d0f5fc',
            padding: '1em',
          }}>3</FullpageSection>
        </FullPageSections>
      </Fullpage>

      </div>
      
    )
  }
}