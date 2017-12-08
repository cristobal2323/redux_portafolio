import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as listTimeActions from '../../../../actions/listTimeActions';

/* Component */
import TimeList from './timeList.jsx';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

class ListTime extends Component {
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
    const time = {
      name: null,
      skip: 0,
      limit: 100,
    };
    await this.props.actions.fetchTimes(time);
  }
  async handleSubmitMore(event) {
    event.preventDefault();
    const time = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      skip: this.state.skip,
      limit: 1,
    };
     this.setState({ skip: this.state.skip + 100 });
    await this.props.actions.fetchTimesMore(time);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const time = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      skip: 0,
      limit: 100,
    };
    this.setState({ skip: 100 });
    await this.props.actions.fetchTimes(time);
  }

  async handleDelete (event) {
    event.preventDefault();
    const id = event.currentTarget.name;
    const num = event.currentTarget.dataset.num;
    await this.props.actions.deleteTime(id, num);
  }

  handleRedirect(event) {
    event.preventDefault();
    browserHistory.push(event.target.value);
  }

  render() {
    return (
      <div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
          <h3>Listado Times</h3>
        </div>
        <form method="GET" onSubmit={this.handleSubmit}>
          <div className={DashBoardStyle.module_filter}>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="name">Nombre</label>
              <input autoComplete="off" type="text" id="name" name="name" ref={node => this.nameInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter}>
              <input value="Buscar" type="submit" />
            </div>
          </div>
        </form>
        <TimeList
          loading={this.props.loading}
          times={this.props.times}
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

ListTime.propTypes = {
  times: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps (state) {
  return {
    loading: state.listTime.loading,
    times: state.listTime.times,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(listTimeActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTime);
