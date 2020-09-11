import React , { useState }  from 'react';
import {Link} from 'react-router-dom';
import './Projects.css';
import ProjectsData from '../../Data/ProjectsData';
import HackathonData from '../../Data/HackathonData';
// import


function Projects(){
  let dataa = ProjectsData;
  const [data, setData] = useState(dataa);
  function setpropject() {
    setData(ProjectsData);
  }
  function sethackathon() {
    setData(HackathonData);
  }
    return (
        <div className='Projects' id="portfolio">
          <h2>Portfolio</h2>
          <div className='projectsBtn'>
             <h4 onClick={setpropject}>Personal Projects</h4>
            <h4 onClick={sethackathon}>Hackathon Projects</h4>
          </div>
            
            <div>
            {data.map((project, idx) => {
                return (
                  <div className="project-card">
                    <a href={project.url}>
                    {/* <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal"
                  >
                    <FrontSide> */}
                      <img src={project.front} ></img>
                    {/* </FrontSide>
                    <BackSide>
                      <img src={project.back} ></img>
                    </BackSide>
                  </Flippy> */}
                  </a>
                  <div>
                  <h3 className='projectTitle'>{project.name}</h3>
                  <div className="project-describtion">
                  <p>{project.description}</p>
                  <ul className='tech-logo'>{project.technologies}</ul>
                  </div>
                  <div className='textCenter'>
                  <a className='btn button' href={project.url}>DEMO</a>
                  <a className='btn button' href={project.git}>GITHUB</a>
                  </div>
                  
                  </div>
                  
                  </div>
                )
            })}
            </div>
        </div>
    );

}

export default Projects;