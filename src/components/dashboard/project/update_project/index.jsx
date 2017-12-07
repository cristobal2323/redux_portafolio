import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as updateProjectActions from '../../../../actions/updateProjectActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class UpdateProject extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchProject(this.props.params.id);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const project = {
      name: this.nameInput.value,
      description: this.descriptionInput.value,
      text: this.textInput.value,
      picture: this.pictureInput.value,
    };

    await this.props.actions.updateProject(project, this.props.params.id);
    browserHistory.push('/dashboard/listProject');
  }

  changeForm(name, e) {
    const form = this.props.project;
    form[name] = e.target.value;
  
    this.props.actions.changeForm(JSON.stringify(form));
  }

  render () {
    if(this.props.project){
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Actualizar project</h3>
            </div>

            <div className={DashBoardStyle.module_form}>
                <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Principal</h4>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Nombre</label>
                    <input type="text" value={this.props.project.name} onChange={(event) => this.changeForm('name', event)}  ref={node => this.nameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Descripción</label>
                    <input type="text" value={this.props.project.description} onChange={(event) => this.changeForm('description', event)}  ref={node => this.descriptionInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Texto</label>
                    <input type="text" value={this.props.project.text} onChange={(event) => this.changeForm('text', event)}  ref={node => this.textInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Foto</label>
                    <input type="text" value={this.props.project.picture} onChange={(event) => this.changeForm('picture', event)}  ref={node => this.pictureInput = node} />
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
    }else{
        return(
            <div><h1>Cargando</h1></div>
        )
    }
  }
}

UpdateProject.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    project: state.updateProject.project,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(updateProjectActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
