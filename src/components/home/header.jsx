import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';
/* Images */
import Me from '../../../public/image/cristobal.jpg';

const Nav = ({
  nav,
  navMob
}) => (
  <section id="header" className={HomeStyle.home}>
    <header className={HomeStyle.header_home} >
      <div className={HomeStyle.header_home_logo}>
        <h1>Cristóbal Maturana</h1>
        <span onClick={navMob} ><i className={`${HomeStyle.fa} ${HomeStyle["fa-bars"]}`} aria-hidden="true"></i></span>
      </div>
      <nav  className={HomeStyle.header_home_nav}>      
        <ul id="nav_home" className={HomeStyle.nav_active}>
          <li><a name="header" href="#header" onClick={nav}>Home</a></li>
          <li><a name="about" href="#about" onClick={nav}>About Me</a></li>
          <li><a name="stack" href="#stack" onClick={nav}>Stack</a></li>
          <li><a name="time" href="#time" onClick={nav}>My Timeline</a></li>
          <li><a name="project" href="#project" onClick={nav}>My projects</a></li>
          <li><a name="contact" href="#contact" onClick={nav}>Contacts</a></li>
        </ul>
      </nav>
    </header>
    <div className={HomeStyle.header_img}>
      <div className={HomeStyle.header_img_pic}>
        <img src={Me} alt="img" />
      </div>
      <div className={HomeStyle.header_text}>
        <h2><strong>Hola,</strong> soy un desarrolador front-end con 4 años de experiencia.</h2>
      </div>
    </div>
  </section>
);

Nav.propTypes = {
  nav: PropTypes.func.isRequired,
  navMob: PropTypes.func.isRequired,
};

export default Nav;