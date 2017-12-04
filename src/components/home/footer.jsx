import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const About = ({

}) => (
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
);

export default About;