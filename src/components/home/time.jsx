import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Time = ({

}) => (
	<section className={HomeStyle.time}>
          <div className={HomeStyle.time_item}>
            <h3>TimeLine</h3>
            
            <div className={HomeStyle.time_box_left}>
              <div>
                <img src="http://via.placeholder.com/350x150" alt="test" />
                <h4>Undurraga TI - 2010</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor elit ac ultrices cursus. Aenean ullamcorper lacus vitae urna auctor, sed blandit ex tristique</p>
              </div>
            </div>

            <div className={HomeStyle.time_box_right}>
              <div>
                <img src="http://via.placeholder.com/350x150" alt="test" />
                <h4>Undurraga TI - 2010</h4>
                <p>Encargado de mantención y desarrollo</p>
              </div>
            </div>

            <div className={HomeStyle.time_box_left}>
              <div>
                <img src="http://via.placeholder.com/350x150" alt="test" />
                <h4>Undurraga TI - 2010</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor elit ac ultrices cursus. Aenean ullamcorper lacus vitae urna auctor, sed blandit ex tristique</p>
              </div>
            </div>

          </div>
        </section>
);

export default Time;