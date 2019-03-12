import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
  };

  return (
    <div>
      <ul>
        <li style={style}><p><Link to='/'>HOME</Link></p></li>
        <li style={style}><p><Link to='/jokes'>JOKES</Link></p></li>
        <li style={style}><p><Link to='/projects'>PROJECTS</Link></p></li>
        <li style={style}><p><Link to='/contact'>CONTACT</Link></p></li>
      </ul>
    </div>
  )
}


export default Header;
