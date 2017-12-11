import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Projects = ({
  projects
}) => (
	<section id="project" className={HomeStyle.projects}>
          <div className={HomeStyle.projects_item}>
            <h3>Projects</h3>
            <div className={HomeStyle.projects_box}>
            {
              projects.map((projects,i) => (
                <div key={i}>
                  {(projects.picture != "")?<img src={projects.picture} alt="test" />:""}
                  <h4>{projects.text}</h4>
                  <p>{projects.description}</p>
                  {(projects.link != "")?<a href={projects.link}>Ver github</a>:""}
                </div>
              ))
            }
            </div>
          </div>
        </section>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;