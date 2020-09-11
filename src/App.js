import React, { Component } from 'react';
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageCount, FullpageNumber} from '@ap.cx/react-fullpage';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.css';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Footer from './components/Footer/Footer';
export default class App extends Component {
  
  render () {
    return (
      <div>
        <NavBar />
            <Header />
            <Projects></Projects>
            <About />
            <Skills />
            <Footer />


      </div>
      
    )
  }
}