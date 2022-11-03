import React from "react";
import moneyTracker from '../../assets/images/MoneyTracker.png';
import gaugeYourCoworker from '../../assets/images/GaugeYourCoworker.png';
import nutritionalYeet from '../../assets/images/Nutritional-Yeet.png';
import bookSearch from '../../assets/images/BookSearch.png';

function Projects() {

    const projects = [
        {
            title: 'Nutritional-Yeet',
            img: nutritionalYeet,
            languages: ['HTML', 'CSS', 'JavaScript', 'Express', 'Node', 'React', 'MongoDB'],
            github: "https://github.com/ehalimi/Nutritional-Yeet",
            website: "https://young-taiga-34370.herokuapp.com/"
        },
        {
            title: 'Gauge Your Coworker',
            img: gaugeYourCoworker,
            languages: ['Handlebars', 'CSS', 'JavaScript', 'Express', 'Node'],
            github: "https://github.com/ehalimi/Gauge-your-coworker",
            website: "https://boiling-lowlands-04909.herokuapp.com/"
        },
        {
            title: 'Money Tracker',
            img: moneyTracker,
            languages: ['HTML', 'CSS', 'JavaScript'],
            github: "https://github.com/ehalimi/MoneyTracker",
            website: "https://ehalimi.github.io/MoneyTracker/"
        },
        {
            title: 'Book Search',
            img: bookSearch,
            languages: ['Mongoose', 'Express', 'React', 'Node'],
            github: "https://github.com/ehalimi/book-search",
            website: "https://murmuring-mesa-87456.herokuapp.com/"
        }
    ];

    return (
        <div>
        <h2 id="Portfolio">Projects</h2>
        <div id="gallery">
            {projects.map((project) => (
                <div key={project.title}>
                <div className="card" id="card"
                    style={{ backgroundImage: `url(${project.img})` }}>
                </div>
                {/* <a href={project.languages}>{project.languages}</a> */}
                <a href={project.website}>{project.title}</a>
                <a href={project.github}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                </div>
            ))}
        </div>
        </div >
    );
};

export default Projects;