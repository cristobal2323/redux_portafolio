import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as saveProjectActions from '../../../../actions/saveProjectActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class SaveProject extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const project = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      text: this.textInput.value,
      picture: this.pictureInput.value,
      link: this.linkInput.value,
    };

    await this.props.actions.saveProject(project);
    browserHistory.push('/dashboard/listProject');
  }

  render () {
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Ingreso de Project</h3>
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

                <div className={DashBoardStyle.item_form}>
                    <label>Link</label>
                    <input type="text" ref={node => this.linkInput = node} />
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

SaveProject.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    loading: state.saveProject.loading,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(saveProjectActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveProject);
