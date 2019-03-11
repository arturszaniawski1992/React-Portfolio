import React, {Component} from 'react';

class Jokes extends Component {
  state = {joke: {}};

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then( response =>console.log('response', response));
  }
  render() {
    return(
      <div>

      </div>
  )}
}

export default Jokes;
