import React, { PropTypes } from 'react';
import HomeStyle from '../../../../public/home.scss';

/* Style */
import HeaderStyle from '../../../../public/header.scss';

/* Images */
import logo from '../../../../public/image/logo.png';

const Header = ({

}) => (
	<header className={HeaderStyle.header}>
	    <div className={HeaderStyle.logo}>
	        <img src={logo} alt="logo" />
	    </div>
	    <div className={HeaderStyle.bars}>
	        <a href="#"> <i className={`${HeaderStyle.fa} ${HeaderStyle["fa-bars"]}`} aria-hidden="true"></i> </a>
	    </div>
	    <div className={HeaderStyle.search}>
	        <input type="text" placeholder="Buscar" />
	    </div>
	    <div className={HeaderStyle.icons}>
	        <ul>
	            <li><a href="#"><span>1</span><i className={`${HeaderStyle.fa} ${HeaderStyle["fa-bell"]}`} aria-hidden="true"></i></a></li>
	            <li><a href="#"><span>21</span><i className={`${HeaderStyle.fa} ${HeaderStyle["fa-comments"]}`} aria-hidden="true"></i></a></li>
	            <li><a href="#"><i className={`${HeaderStyle.fa} ${HeaderStyle["fa-cog"]}`} aria-hidden="true"></i></a></li>
	        </ul>
	    </div>
	    <div className={HeaderStyle.user}>
	        <div className={HeaderStyle.user_img}>
	            <a href="#"><img src="http://via.placeholder.com/150x150" /></a>
	        </div>
	        <div className={HeaderStyle.user_text}>
	            <a href="#"><h2>Cristóbal Maturana <i className={`${HeaderStyle.fa} ${HeaderStyle["fa-chevron-circle-down"]}`} aria-hidden="true"></i></h2></a>
	        </div>
	    </div>
    </header>
);

export default Header;