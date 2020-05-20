import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Projects.css';
import ProjectsData from '../../Data/ProjectsData';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


function Projects(){
  let data= ProjectsData;
    return (
        <div className='pages Projects'>
            <h2>Projects</h2>
            <div>
            {data.map((project, idx) => {
                return (
                  <div className="project-card">
                    <a href={project.url}>
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <img src={project.front} ></img>
                    </FrontSide>
                    <BackSide>
                      <img src={project.back} ></img>
                    </BackSide>
                  </Flippy>
                  </a>
                  <h3>{project.name}</h3>
                  <div className="project-describtion">
                  <p>{project.description}</p>
                  <ul className='tech-logo'>{project.technologies}</ul>
                  </div>
                  <a className='btn button' href={project.url}>DEMO</a>
                  <a className='btn button' href={project.git}>GITHUB</a>
                  </div>
                )
            })}
            </div>
        </div>
    );

}

export default Projects;