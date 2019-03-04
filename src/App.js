import React, {Component} from 'react';


class App extends Component {


  constructor() {
    super();
    this.state = {displayBio: false};
    this.readMore = this.readMore.bind(this);
    this.showLess = this.showLess.bind(this);

  }

  readMore() {
    this.setState({displayBio: true})
  }

  showLess() {
    this.setState({displayBio: false})
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
              <button onClick={this.showLess}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.readMore}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
