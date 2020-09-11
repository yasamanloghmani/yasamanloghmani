
import React from "react";
import SkillsData from "../../Data/SkillsData";
import SocialMedia from '../SocialMedia/SocialMedia';
import './Skills.css';

export default function Skills() {
    let data = SkillsData;

    return (
        <div className='skillpage' id='skills'>
            <h2 className='skills-header'>My Skills</h2>
            <div className="Skills">
                {data.map((icon, idx) => {
                    return (
                        <div key={idx} className="icon-container">
                            {icon.icon}
                            <h5>{icon.name}</h5>
                        </div>
                    );
                })}
            </div>

            
        </div>
        
    );
}