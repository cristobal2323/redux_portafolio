import React, { Component, PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';
/* Component */
import Header from './header';
import About from './about';
import Stack from './stack';
import Time from './time';
import Projects from './projects';
import Footer from './footer';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        <About />
        <Stack />
        <Time />
        <Projects />
        <Footer />
      </div>
    )
  }
}


export default Home
