import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Footer = ({
  person
}) => (
	<footer id="contact">
    <h3>Contacts</h3>
    <h4>{person.mail}</h4>
    <h4>Teléfono: {person.phone}</h4>
    <ul>
      <li><a target="_blank" href={person.facebook}><i className={`${HomeStyle.fa} ${HomeStyle["fa-facebook"]}`} aria-hidden="true"></i></a></li>
      <li><a target="_blank" href={person.twitter}><i className={`${HomeStyle.fa} ${HomeStyle["fa-twitter"]}`} aria-hidden="true"></i></a></li>
      <li><a target="_blank" href={person.github}><i className={`${HomeStyle.fa} ${HomeStyle["fa-github"]}`} aria-hidden="true"></i></a></li>
      <li><a target="_blank" href={person.linkedin}><i className={`${HomeStyle.fa} ${HomeStyle["fa-linkedin"]}`} aria-hidden="true"></i></a></li>
    </ul>
  </footer>
);

Footer.propTypes = {
  person: PropTypes.object.isRequired,
};

export default Footer;