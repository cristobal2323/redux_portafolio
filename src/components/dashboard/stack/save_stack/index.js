import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as saveStackActions from '../../../../actions/saveStackActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class SaveStack extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const stack = {
      name: this.nameInput.value,
      value: this.valueInput.value,
    };

    await this.props.actions.saveStack(stack);
    browserHistory.push('/dashboard/listStack');
  }

  render () {
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Ingreso de Stack</h3>
            </div>

            <div className={DashBoardStyle.module_form}>
                <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Principal</h4>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Nombre</label>
                    <input type="text" ref={node => this.nameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Valor</label>
                    <input type="number" ref={node => this.valueInput = node} />
                </div>

            </div>
            
            <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
                <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
                  <input type="submit" value="Ingresar" />
                </div>
            </div>
        </form>
    </div>
    )
  }
}

SaveStack.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    loading: state.saveStack.loading,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(saveStackActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveStack);
