import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as saveTimeActions from '../../../../actions/saveTimeActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class SaveTime extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const time = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      text: this.textInput.value,
      picture: this.pictureInput.value,
    };

    await this.props.actions.saveTime(time);
    browserHistory.push('/dashboard/listTime');
  }

  render () {
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Ingreso de Timeline</h3>
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
                    <label>Descripción</label>
                    <input type="text" ref={node => this.descriptionInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Texto</label>
                    <input type="text" ref={node => this.textInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Foto</label>
                    <input type="text" ref={node => this.pictureInput = node} />
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

SaveTime.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    loading: state.saveTime.loading,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(saveTimeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveTime);
