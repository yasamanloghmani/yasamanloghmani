import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Projects.css';
import ProjectsData from '../../Data/ProjectsData';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function Projects(){
  let data= ProjectsData;
    return (
        <div className='pages Projects'>
            <h1>Projects</h1>
            <div>
            {data.map((project, idx) => {
                return (
                  <div className="project-card">
                    <a  href={project.url}>
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"
                    // style={{ width: '200px', height: '200px' }}
                  >
                    <FrontSide
                      // style={{
                      //   backgroundColor: '#41669d',
                      // }}
                    >
                      <img src={project.front} ></img>
                      
                    </FrontSide>
                    <BackSide
                      // style={{ backgroundColor: '#175852'}}
                      >
                      <img src={project.back} ></img>
                    </BackSide>
                  </Flippy>
                  </a>
                  <h3>{project.name}</h3>
                <p>{project.description}</p>
                  <ul className='tech-logo'>{project.technologies}</ul>
                  <button>git</button>

                  </div>
                    
                )
                
            })}
            </div>
        </div>
    );

}

export default Projects;