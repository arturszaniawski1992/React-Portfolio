import React, {Component} from 'react';
import Header from "./Header";
import {Link} from 'react-router-dom';
class Jokes extends Component {
  state = {joke: {}, jokes: []};

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({joke: json}))
      .catch(error => alert(error.message))
  }

   fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({jokes: json}))
      .catch(error => alert(error.message));
  }

  render() {
    const {setup, punchline} = this.state.joke;

    return (
      <div>
        <Header/>
        {setup}<br/><em>{punchline}</em>
        <hr/>
        <h3>Want ten new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {
          this.state.jokes.map(joke=> {
            const {id, setup, punchline}= joke;
            return <p key={id}>{setup} <em>{punchline}</em></p>
          })
        }
        <br/>
        <br/>
        <Link to='/'>
          <button className='btn-danger'>Back to menu</button>
        </Link>
      </div>

    )
  }
}

export default Jokes;
