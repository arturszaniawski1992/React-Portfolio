import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {

  render() {
    const {title, image, description, link} = this.props.project;
    return (
        <div style={{display: 'inline-block', width:300, height: 200}}>
          <h4>
            {title}
          </h4>
          <img src={image} className="img-thumbnail" alt="Cinque Terre"/>
          <p>{description}</p>
          <a href={link}>Check on GitHub</a>
        </div>
    )
  }
}

class Projects extends Component {

  render() {
    return (
      <div>
        <h3> Highlighted projects</h3>
        <div>
          {
            PROJECTS.map(PROJECT => {
              return (
                <Project key={PROJECT.id} project={PROJECT}/>
              );
            })
          }
        </div>
      </div>
    )
  }
}

export default Projects;
