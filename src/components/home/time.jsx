import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Time = ({
  times
}) => (
	<section id="time" className={HomeStyle.time}>
          <div className={HomeStyle.time_item}>
            <h3>TimeLine</h3>
            {
              times.map((times,i) => (
              <div key={i} className={(i%2)?HomeStyle.time_box_right:HomeStyle.time_box_left}>
                <div>

                  {(times.picture != "")?<img src={times.picture} alt="test" />:""}
                  <h4>{times.text}</h4>
                  <p>{times.description}</p>
                </div>
              </div>
              ))
            }

          </div>
        </section>
);

Time.propTypes = {
  times: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Time;