import React, { PropTypes } from 'react';
import HomeStyle from '../../../public/home.scss';

const Stack = ({
  stacks
}) => (
	<section  id="stack" className={HomeStyle.stack}>
      <div className={HomeStyle.stack_item}>
        <h3>Stack</h3>

        <div className={HomeStyle.stack_box}>
        {
          stacks.map((stack,i) => (
          <div key={i} className={HomeStyle.stack_box__stack}>
            <div className={HomeStyle.stack_box__name}>{stack.name}</div>
            <div className={HomeStyle.stack_box__value}>{stack.value}</div>
            <div className={HomeStyle.stack_box__color}><span className={HomeStyle[`val_${stack.value}`]}></span></div>
          </div>
          ))
        }
         
        </div>

      </div>
    </section>
);

Stack.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Stack;