import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const About = ({
	about
}) => (
	<section id="about" className={HomeStyle.about}>
      <div className={HomeStyle.about_item}>
        <h3>About me</h3>
        <p>{ about }</p>
      </div>
    </section>
);

About.about = {
  about: PropTypes.string.isRequired,
};

export default About;