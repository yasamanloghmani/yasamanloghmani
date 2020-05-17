
import React from "react";
import SkillsData from "../../Data/SkillsData";
import './Skills.css';

export default function Skills() {
    let data = SkillsData;

    return (
        <div className='pages'>
            <h2 className='skills-header'>My Skills</h2>
            <div className="Skills">
            {data.map((icon, idx) => {
                return (
                    <div key={idx} className="icon-container">
                        {icon.icon}
                        <p>{icon.name}</p>
                    </div>
                );
            })}
        </div>
        </div>
        
    );
}