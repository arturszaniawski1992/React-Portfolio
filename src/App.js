import React, {Component} from 'react';
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

class App extends Component {

  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  }


  render() {
    return (
      <div>
        <h1> Hello!</h1>
        <p>My name is Artur and I'm Software Engineer!</p>
        <p>I'm always looking forward to working on meaningful projects!</p>

        {
          this.state.displayBio ? (
            <div>
              <p>I live in Poznan and I code every day!</p>
              <p>My favourite language is Java but i want to develop in Frontend too!</p>
              <p>Besides coding I like sport</p>
              <button type="button" class="btn btn-primary" onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button  type="button" class="btn btn-info" onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr/>
        <Projects />
        <hr/>
        <SocialProfiles />
      </div>
    )
  }
}

export default App;
