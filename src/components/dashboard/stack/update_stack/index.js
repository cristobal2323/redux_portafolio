import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as updateStackActions from '../../../../actions/updateStackActions';

import DashBoardStyle from '../../../../../public/dashboard.scss';

class UpdateStack extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchStack(this.props.params.id);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const stack = {
      name: this.nameInput.value,
      value: this.lastNameInput.value,
    };

    await this.props.actions.updateStack(stack, this.props.params.id);
    browserHistory.push('/dashboard/listStack');
  }

  changeForm(name, e) {
    const form = this.props.stack;
    form[name] = e.target.value;
  
    this.props.actions.changeForm(JSON.stringify(form));
  }

  render () {
    if(this.props.stack){
    return (
      <div className={DashBoardStyle.main}>
        <form onSubmit={this.handleSubmit}>
            <div className={DashBoardStyle.title}>
                <h3>Actualizar Stack</h3>
            </div>

            <div className={DashBoardStyle.module_form}>
                <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Principal</h4>
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Nombre</label>
                    <input type="text" value={this.props.stack.name} onChange={(event) => this.changeForm('name', event)}  ref={node => this.nameInput = node} />
                </div>

                <div className={DashBoardStyle.item_form}>
                    <label>Apellido</label>
                    <input type="text" value={this.props.stack.value} onChange={(event) => this.changeForm('value', event)}  ref={node => this.lastNameInput = node} />
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

UpdateStack.propTypes = {
  loading: PropTypes.bool,
};

function mapStateToProps (state) {
  return {
    stack: state.updateStack.stack,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(updateStackActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStack);
