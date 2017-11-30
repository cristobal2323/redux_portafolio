import React, { Component, PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';
/* Component */
import Header from '../header/';
import About from './about';
import Stack from './stack';
import Time from './time';
import Projects from './projects';

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
        <footer>
          <h3>Contacts</h3>
          <h4>Email: cri.maturana@gmail.com</h4>
          <h4>Teléfono: +(56) 9 511 08 931</h4>
          <ul>
            <li><a href="#"><i className={`${HomeStyle.fa} ${HomeStyle["fa-facebook"]}`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${HomeStyle.fa} ${HomeStyle["fa-twitter"]}`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${HomeStyle.fa} ${HomeStyle["fa-github"]}`} aria-hidden="true"></i></a></li>
            <li><a href="#"><i className={`${HomeStyle.fa} ${HomeStyle["fa-linkedin"]}`} aria-hidden="true"></i></a></li>
          </ul>
        </footer>
      </div>
    )
  }
}


export default Home
