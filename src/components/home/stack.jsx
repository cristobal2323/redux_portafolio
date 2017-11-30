import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Stack = ({

}) => (
	<section className={HomeStyle.stack}>
      <div className={HomeStyle.stack_item}>
        <h3>Stack</h3>

        <div className={HomeStyle.stack_box}>
          <div className={HomeStyle.stack_box__stack}>
            <div className={HomeStyle.stack_box__name}>JavaScript</div>
            <div className={HomeStyle.stack_box__value}>90%</div>
            <div className={HomeStyle.stack_box__color}><span className={HomeStyle.val_90}></span></div>
          </div>

          <div className={HomeStyle.stack_box__stack}>
            <div className={HomeStyle.stack_box__name}>React</div>
            <div className={HomeStyle.stack_box__value}>60%</div>
            <div className={HomeStyle.stack_box__color}><span className={HomeStyle.val_60}></span></div>
          </div>

          <div className={HomeStyle.stack_box__stack}>
            <div className={HomeStyle.stack_box__name}>Node</div>
            <div className={HomeStyle.stack_box__value}>50%</div>
            <div className={HomeStyle.stack_box__color}><span className={HomeStyle.val_50}></span></div>
          </div>

          <div className={HomeStyle.stack_box__stack}>
            <div className={HomeStyle.stack_box__name}>Html</div>
            <div className={HomeStyle.stack_box__value}>100%</div>
            <div className={HomeStyle.stack_box__color}><span className={HomeStyle.val_100}></span></div>
          </div>
        </div>

      </div>
    </section>
);

export default Stack;