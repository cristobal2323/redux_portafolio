import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as listPersonActions from '../../../../actions/listPersonActions';

/* Component */
import PersonList from './personList';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

class ListPerson extends Component {
  constructor (props) {
    super(props);
    this.state = {
      skip: 100,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitMore = this.handleSubmitMore.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentWillMount() {
    const people = {
      name: null,
      last_name: null,
      mail: null,
      skip: 0,
      limit: 100,
    };
    await this.props.actions.fetchPeople(people);
  }
  async handleSubmitMore(event) {
    event.preventDefault();
    const people = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      last_name: (this.lastNameInput.value !== '') ? this.lastNameInput.value : null,
      mail: (this.mailInput.value !== '') ? this.mailInput.value : null,
      skip: this.state.skip,
      limit: 1,
    };
     this.setState({ skip: this.state.skip + 100 });
    await this.props.actions.fetchPeopleMore(people);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const people = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      last_name: (this.lastNameInput.value !== '') ? this.lastNameInput.value : null,
      mail: (this.mailInput.value !== '') ? this.mailInput.value : null,
      skip: 0,
      limit: 100,
    };
    this.setState({ skip: 100 });
    await this.props.actions.fetchPeople(people);
  }

  async handleDelete (event) {
    event.preventDefault();
    const id = event.currentTarget.name;
    const num = event.currentTarget.dataset.num;
    await this.props.actions.deletePerson(id, num);
  }

  handleRedirect(event) {
    event.preventDefault();
    browserHistory.push(event.target.value);
  }

  render() {
    console.log("cuenta",this.props.people)
    return (
      <div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
          <h3>Listado Cliente</h3>
        </div>
        <form method="GET" onSubmit={this.handleSubmit}>
          <div className={DashBoardStyle.module_filter}>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="name">Nombre</label>
              <input autoComplete="off" type="text" id="name" name="name" ref={node => this.nameInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="lastName">apellido</label>
              <input autoComplete="off" type="text" id="lastName" name="lastName" ref={node => this.lastNameInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="mail">mail</label>
              <input autoComplete="off" type="text" id="mail" name="mail" ref={node => this.mailInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter}>
              <input value="Buscar" type="submit" />
            </div>
          </div>
        </form>
        <PersonList
          loading={this.props.loading}
          people={this.props.people}
          handleRedirect={this.handleRedirect}
          handleDelete={this.handleDelete}
        />
        <div className={DashBoardStyle.module_view_more}>
          <button onClick={this.handleSubmitMore}> Más </button>
        </div>
      </div>
    );
  }
}

ListPerson.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps (state) {
  return {
    loading: state.listPerson.loading,
    people: state.listPerson.people,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(listPersonActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPerson);
