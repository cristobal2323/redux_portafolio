import React, { Component, PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';
/* Images */
import Me from '../../../public/image/cristobal.jpg';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className={HomeStyle.home}>
        <header className={HomeStyle.header_home} >
          <div className={HomeStyle.header_home_logo}>
            <h1>Cristóbal Maturana</h1>
            <span><i className={`${HomeStyle.fa} ${HomeStyle["fa-bars"]}`} aria-hidden="true"></i></span>
          </div>
          <nav className={HomeStyle.header_home_nav}>      
            <ul className={HomeStyle.nav_active}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Stack</a></li>
              <li><a href="#">My Timeline</a></li>
              <li><a href="#">My projects</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
        </header>
        <div className={HomeStyle.header_img}>
          <div className={HomeStyle.header_img_pic}>
            <img src={Me} alt="img" />
          </div>
          <div className={HomeStyle.header_text}>
            <h2><strong>Hola,</strong> soy un desarrolador Full stack con 4 años de experiencia.</h2>
          </div>
        </div>
      </section>
    )
  }
}


export default Header
