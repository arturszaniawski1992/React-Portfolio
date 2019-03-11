import React, {Component} from 'react';

const TITLES = [
  'a software engineer',
  'a guitar player',
  'a civil engineer'
];

const HOBBYS = [
  'I like study new technologies',
  'I like travelling around the world',
  'I like spending time with my family',
];

const PERSONAL_INFO = [
  'I am 27 years old an come from Brazil',
  'I am 61 years old an come from Scotland',
  'I am 32 years old an come from Poland',
];

class Title extends Component {
  state = {
    titleIndex: (Math.floor(Math.random() * 2 + 1)),
    hobbyIndex: (Math.floor(Math.random() * 2 + 1)),
    personalInfoIndex: (Math.floor(Math.random() * 2 + 1)),
  };

  componentDidMount() {
    this.animatetitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  animatetitles = () => {
    setInterval(() => {
      const titleIndex =(this.state.titleIndex+1)%TITLES.length;
      const hobbyIndex =(this.state.hobbyIndex+1)%HOBBYS.length;
      const personaInfoIndex =(this.state.personalInfoIndex+1)%PERSONAL_INFO.length;
      this.setState({titleIndex: titleIndex, hobbyIndex: hobbyIndex, personaInfoIndex: personaInfoIndex })
    }, 4000);
  }

  render() {
    const title = TITLES[this.state.titleIndex];
    const hobby = HOBBYS[this.state.hobbyIndex];
    const personalInfo = PERSONAL_INFO[this.state.personalInfoIndex];

    return (
      <div>
        <p>I am {title}</p>
        <p>{hobby}</p>
        <p>{personalInfo}</p>
      </div>
    )
  }

}

export default Title;
