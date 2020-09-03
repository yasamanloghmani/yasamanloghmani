import React from "react";

let ProjectsData = [
    {
      name: "CoffeeBreak App",
      front: "/images/projects/cb1.png",
      back : "/images/projects/cb2.png",
      url: "https://coffeebreakapp.herokuapp.com/",
      git: "https://github.com/yasamanloghmani/CoffeeBreak-App",
      description:
        "The CoffeeBreak App is a MERN Fullstack application where users can track their coffee intake. This Fullstack app uses a React.js and styled-components for Front End with a modified Back End from CoffeeBreak RESTful API seen below. (Note: This App is not responsive.) ",
      technologies: [<i className="devicon-react-original colored tech-logo"></i>,<i className="devicon-express-original colored tech-logo"></i>,<i className="devicon-nodejs-plain colored tech-logo"></i>, <i className="devicon-mongodb-plain colored tech-logo"></i>, <i className="devicon-sass-original colored tech-logo"></i>, <i className="devicon-heroku-plain colored tech-logo"></i>],
    },
    {
      name: "Dealish App",
      front: "/images/projects/dealish1.png",
      back : "/images/projects/dealish2.png",
      url: "https://dealish.herokuapp.com/",
      git: "https://github.com/yasamanloghmani/Dealish",
      description:
        "Dealish is a Fullstack web app where users can find deals and happy hours in their area. Goole Maps API and Geolocation is used to locate the user and display the closest deals to them. User authenication is implemented with the Django default authenication system. Logged in users can add, edit, and delete restaurant reviews and also add restaurants to a list of favourites. ",
      technologies: [<i className="devicon-django-plain colored tech-logo"></i>, <i className="devicon-postgresql-plain colored tech-logo"></i>, <i className="devicon-python-plain colored tech-logo"></i>, <i className="devicon-bootstrap-plain colored tech-logo"></i>, <i className="devicon-html5-plain colored tech-logo"></i>, <i className="devicon-css3-plain colored tech-logo"></i>, <i className="devicon-heroku-plain colored tech-logo"></i> ],
    },
    {
      name: "CoffeeBreak API",
      front: "/images/projects/api1.png",
      back : "/images/projects/api2.png",
      url: "https://coffeebreakapi.herokuapp.com/api",
      git: "https://github.com/yasamanloghmani/CoffeeBreak",
      description:
        "A restful API that will be used as a backend for a React Frontend, this backend API was created with Node.js and Express.js. The website below can be accessed to view the Documentation for the API. The documentation website was built with HTML, CSS, and Bootstrap 4. Also used MongooDB for this project.",
    technologies: [<i className="devicon-express-original colored tech-logo"></i>,<i className="devicon-nodejs-plain colored tech-logo"></i>,<i className="devicon-mongodb-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-bootstrap-plain colored tech-logo"></i>, <i className="devicon-heroku-plain colored tech-logo"></i> ],
    },,
    {
      name: "MasterMind Game",
      front: "/images/projects/mastermind1.png",
      back : "/images/projects/mastermind2.png",
      url: "https://yasamanloghmani.github.io/mastermind-game/",
      git: "https://github.com/yasamanloghmani/mastermind-game",
      description:
        "Mastermind is a code-breaking game for two players. n this game, the computer is designed to generate for random colors and the player has to choose 4 color pegs and put them in right places, and guess the answer in a certain amount of time. This game has 3 leveles of difficulty.",
    technologies: [<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
    },,
    {
      name: "MarkDown Editor",
      front: "/images/projects/markdown1.png",
      back : "/images/projects/markdown1.png",
      url: "https://yasamanloghmani.github.io/markdown-editor/",
      git: "https://github.com/yasamanloghmani/markdown-editor",
      description:
        "Participated in Mintbean Hackaton and designed a Markdown editor by using Vanilla JavaScript in less than 4hours. Selected as the winner of the Hackathon.",
        technologies: [<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-jquery-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
      },
      {
        name: "Chart Story",
        front: "/images/projects/chart1.png",
        back : "/images/projects/chart2.png",
        url: "https://yasamanloghmani.github.io/googlechart/",
        git: "https://github.com/yasamanloghmani/googlechart",
        description:
          "Participated in Mintbean Hackaton and designed a life story by using Vanilla JavaScript and Google.Charts in less than 4hours. Selected as the winner of the Hackathon. (Note: Not responsive)",
          technologies: [<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
        },
        {
        name: "Password Generator",
        front: "/images/projects/pw2.png",
        back : "/images/projects/pw1.png",
        url: "https://yasamanloghmani.github.io/PasswordGenerator/",
        git: "https://github.com/yasamanloghmani/PasswordGenerator",
        description:
          "Using react to create a password generator.",
          technologies: [<i className="devicon-react-original colored  tech-logo"></i>,<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
        },
        {
          name: "Markdown Editor",
          front: "/images/projects/md1.png",
          back : "/images/projects/md2.png",
          url: "https://yasamanloghmani.github.io/markdown-react/",
          git: "https://github.com/yasamanloghmani/markdown-react",
          description:
            "Participated in Mintbean Hackaton and designed a Markdown editor by using React.js , React.ace, styled-components and React-showdown in less than 4hours. Came in the second place of the Hackathon.",
            technologies: [<i className="devicon-react-original colored  tech-logo"></i>,<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
          },
          {
            name: "Piano paper.js",
            front: "/images/projects/piano1.png",
            back : "/images/projects/piano2.png",
            url: "https://yasamanloghmani.github.io/animation-game/",
            git: "https://github.com/yasamanloghmani/animation-game",
            description:
              "Participated in Mintbean Hackaton and designed a animated piano by using Paper.js, Vanilla JS, HTML, CSS in less than 4hours. Selected as the winner of the Hackathon.",
              technologies: [<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
            },
            {
              name: "Color Cute",
              front: "/images/projects/pallet1.png",
              back : "/images/projects/pallete2.png",
              url: "https://yasamanloghmani.github.io/ColorPaletteGenerator/",
              git: "https://github.com/yasamanloghmani/ColorPaletteGenerator",
              description:
                "This application is a color palette generator, you can get the different variation of colors or create your own color palette.",
                technologies: [<i className="devicon-react-original colored  tech-logo"></i>,<i className="devicon-javascript-plain colored tech-logo"></i>,<i className="devicon-html5-plain colored tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
              },
              {
                name: "Tailwood CSS",
                front: "/images/projects/tail1.png",
                back : "/images/projects/tail2.png",
                url: "https://tailwood.vercel.app/",
                git: "https://github.com/yasamanloghmani/tailwood",
                description:
                  "Tailwind is a low-level CSS library that lets you create your own UI components from scratch. It is a powerful building block rather than a full component library. In this challenge, I built, refined and explained my own design system!",
                  technologies: [<i className="devicon-react-original colored  tech-logo"></i>,<i className="devicon-css3-plain colored tech-logo"></i>,<i className="devicon-git-plain colored tech-logo"></i> ],
                },
          
          ];
  
  export default ProjectsData;