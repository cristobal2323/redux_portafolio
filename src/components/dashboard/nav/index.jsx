import React, { Component, PropTypes } from 'react';
import NavStyle from '../../../../public/nav.scss';
import { Link } from 'react-router';

class Nav extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav className={NavStyle.nav}>
        <div className={NavStyle.nav_user}>
          <div className={NavStyle.nav_user_img} >
            <img alt="test" src="http://via.placeholder.com/50x50" />
          </div>
          <div className={NavStyle.nav_user_text}>
            <ul>
              <li><h2>Cristóbal Maturana</h2></li>
              <li><p className={NavStyle.nav_user_online}>online</p></li>
            </ul>
          </div>
        </div>
        <div className={NavStyle.nav_items}>
          <ul>
            <li className={`${NavStyle.nav_items_active}`}>
              <p className={NavStyle.icon_comercial}>Person</p>
              <ul>
                <li><Link to="/dashboard/savePerson">Ingresar Persona</Link></li>
                <li><Link to="/dashboard/listPerson">Listado Persona</Link></li>
              </ul>
            </li>
            <li className={`${NavStyle.nav_items_active}`}>
              <p className={`${NavStyle.icon_dam}`}>Timeline</p>
              <ul>
                <li><Link to="/dashboard/saveTimeLine">Ingresar TimeLine</Link></li>
                <li><Link to="/dashboard/listTimeLine">Listado TimeLine</Link></li>
              </ul>
            </li>
            <li className={`${NavStyle.nav_items_active}`}>
              <p className={NavStyle.icon_planificacion}>Stack</p>
              <ul>
                <li><Link to="/dashboard/saveStack">Ingresar Stack</Link></li>
                <li><Link to="/dashboard/listStack">Listado Stack</Link></li>
              </ul>
            </li>
            <li className={`${NavStyle.nav_items_active}`}>
              <p className={NavStyle.icon_pruduccion}>Proyecto</p>
              <ul>
                <li><Link to="/dashboard/saveProject">Ingresar Project</Link></li>
                <li><Link to="/dashboard/listProject">Listado Project</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Nav
