import React from 'react';
import PROJECTS from '../data/projects';
import {Link} from "react-router-dom";
import Header from "./Header";

const Project = (props) => {

  const {title, image, description, link} = props.project;

  return (
    <div style={{display: 'inline-block', width: 300, height: 200}}>
      <h4>{title}</h4>
      <img src={image} className="img-thumbnail" alt="Cinque Terre"/>
      <p>{description}</p>
      <a href={link}>Check on GitHub</a>
    </div>
  )
}

const Projects = () =>
  (
    <div>
      <Header/>
      <h3> Highlighted projects</h3>
      <div>
        {
          PROJECTS.map(PROJECT => {
            return (
              <Project key={PROJECT.id} project={PROJECT}/>
            );
          })
        }
        <br/>
        <br/>
        <Link to='/'>
          <button className='btn-danger'>Back to menu</button>
        </Link>      </div>
    </div>
  )


export default Projects;
