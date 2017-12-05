import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as savePersonActions from '../../../../actions/savePersonActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class SavePerson extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const person = {
      name: this.nameInput.value,
      last_name: this.lastNameInput.value,
      phone: this.phoneInput.value,
      mail: this.emailInput.value,
      description: this.descriptionInput.value,
      picture: this.pictureInput.value,
      twitter: this.twitterInput.value,
      github: this.gitHubInput.value,
      linkedin: this.linkedinInput.value,
      facebook: this.facebookInput.value,
    };

    await this.props.actions.savePerson(person);
    browserHistory.push('/dashboard/listCliente/');
  }

  render () {
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Ingreso de Persona</h3>
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
                    <label>Apellido</label>
                    <input type="text" ref={node => this.lastNameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Email</label>
                    <input type="text" ref={node => this.emailInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Twitter</label>
                    <input type="text" ref={node => this.twitterInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Facebook</label>
                    <input type="text" ref={node => this.facebookInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Git Hub</label>
                    <input type="text" ref={node => this.gitHubInput = node}/>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Linkedin</label>
                    <input type="text" ref={node => this.linkedinInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Descripción</label>
                    <input type="text" ref={node => this.descriptionInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Foto</label>
                    <input type="text" ref={node => this.pictureInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Teléfono</label>
                    <input type="text" ref={node => this.phoneInput = node} />
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

SavePerson.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    loading: state.savePerson.loading,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(savePersonActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavePerson);
