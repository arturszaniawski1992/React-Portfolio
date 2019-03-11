import React, {Component} from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from '../assets/github_icon.png';
import Title from "./Title";
import Jokes from "./Jokes";

class App extends Component {

  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  }


  render() {
    return (
      <div>
        <img src={profile} className="profile" alt="Cinque Terre"/>
        <Title/>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Poznan and I code every day!</p>
              <p>My favourite language is Java but I want to develop in Frontend too!</p>
              <p>Besides coding I like sport</p>
              <button type="button" className="btn btn-primary" onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button  type="button" className="btn btn-info" onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr/>
        <Projects />
        <hr/>
        <SocialProfiles />
      <hr/>
      <Jokes/>
      </div>
    )
  }
}

export default App;
