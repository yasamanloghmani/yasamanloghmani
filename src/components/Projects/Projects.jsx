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
                    <Link to={`/${idx}`} key={idx}>
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"
                    style={{ width: '200px', height: '200px' }}
                  >
                    <FrontSide
                      style={{
                        backgroundColor: '#41669d',
                      }}
                    >
                      {project.name}
                    </FrontSide>
                    <BackSide
                      style={{ backgroundColor: '#175852'}}>
                      {project.description}
                    </BackSide>
                  </Flippy>
                  </Link>
                )
                
            })}
            </div>
        </div>
    );

}

export default Projects;