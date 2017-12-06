import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as updatePersonActions from '../../../../actions/updatePersonActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class UpdatePerson extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchPerson(this.props.params.id);
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

    await this.props.actions.updatePerson(person, this.props.params.id);
    browserHistory.push('/dashboard/listPerson');
  }

  changeForm(name, e) {
    const form = this.props.person;
    form[name] = e.target.value;
  
    this.props.actions.changeForm(JSON.stringify(form));
  }

  render () {
    if(this.props.person){
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Actualizar Persona</h3>
            </div>

            <div className={DashBoardStyle.module_form}>
                <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Principal</h4>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Nombre</label>
                    <input type="text" value={this.props.person.name} onChange={(event) => this.changeForm('name', event)}  ref={node => this.nameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Apellido</label>
                    <input type="text" value={this.props.person.last_name} onChange={(event) => this.changeForm('last_name', event)}  ref={node => this.lastNameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Email</label>
                    <input type="text" value={this.props.person.mail} onChange={(event) => this.changeForm('mail', event)} ref={node => this.emailInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Twitter</label>
                    <input type="text" value={this.props.person.twitter} onChange={(event) => this.changeForm('twitter', event)} ref={node => this.twitterInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Facebook</label>
                    <input type="text" value={this.props.person.facebook} onChange={(event) => this.changeForm('facebook', event)} ref={node => this.facebookInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Git Hub</label>
                    <input type="text" value={this.props.person.github} onChange={(event) => this.changeForm('github', event)} ref={node => this.gitHubInput = node}/>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Linkedin</label>
                    <input type="text" value={this.props.person.linkedin} onChange={(event) => this.changeForm('linkedin', event)} ref={node => this.linkedinInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Descripción</label>
                    <input type="text" value={this.props.person.description} onChange={(event) => this.changeForm('description', event)} ref={node => this.descriptionInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Foto</label>
                    <input type="text" value={this.props.person.picture} onChange={(event) => this.changeForm('picture', event)} ref={node => this.pictureInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Teléfono</label>
                    <input type="text" value={this.props.person.phone} onChange={(event) => this.changeForm('phone', event)} ref={node => this.phoneInput = node} />
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

UpdatePerson.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    person: state.updatePerson.person,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(updatePersonActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePerson);
