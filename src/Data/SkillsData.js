import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJira} from '@fortawesome/free-brands-svg-icons';
import { faAws} from '@fortawesome/free-brands-svg-icons';
let languagesData = [
	{
		name: "HTML5",
		icon: <i className="devicon-html5-plain  icon"></i>,
	},
	{
		name: "CSS3",
		icon: <i className="devicon-css3-plain  icon"></i>,
	},
	{
		name: "Bootstrap4",
		icon: <i className="devicon-bootstrap-plain  icon"></i>,
	},
	{
		name: "Sass",
		icon: <i className="devicon-sass-original  icon"></i>,
	},
	{
		name: "JavaScript",
		icon: <i className="devicon-javascript-plain  icon"></i>,
	},
	{
		name: "jQuery",
		icon: <i className="devicon-jquery-plain  icon"></i>,
	},
	{
		name: "Python",
		icon: <i className="devicon-python-plain  icon"></i>,
	},
	{
		name: "Node.js",
		icon: <i className="devicon-nodejs-plain  icon"></i>,
	},
	{
		name: "Express",
		icon: <i className="devicon-express-original  icon"></i>,
	},
	{
		name: "React",
		icon: <i className="devicon-react-original  icon"></i>,
	},
	{
		name: "MongoDb",
		icon: <i className="devicon-mongodb-plain  icon"></i>,
	},
	{
		name: "PostgreSQL",
		icon: <i className="devicon-postgresql-plain  icon"></i>,
	},
	{
		name: "Django",
		icon: <i className="devicon-django-plain  icon"></i>,
	},
	{
		name: "Heroku",
		icon: <i className="devicon-heroku-plain  icon"></i>,
	},
	{
		name: "AWS",
		icon: <FontAwesomeIcon icon={ faAws } className='icon' />,
	},
	{
		name: "Git",
		icon: <i className="devicon-git-plain  icon"></i>,
	},
	// {
	// 	name: "Typescript",
	// 	icon: <i className="devicon-typescript-plain  icon"></i>,
	// },
	{
		name: "Wordpress",
		icon: <i className="devicon-wordpress-plain  icon"></i>,
	},
	{
		name: "Jira",
		icon:<FontAwesomeIcon icon={ faJira } className='icon' />,
	},
];

export default languagesData;