import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as listStackActions from '../../../../actions/listStackActions';

/* Component */
import StackList from './stackList.jsx';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

class ListStack extends Component {
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
    const stack = {
      name: null,
      skip: 0,
      limit: 100,
    };
    await this.props.actions.fetchStacks(stack);
  }
  async handleSubmitMore(event) {
    event.preventDefault();
    const stack = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      skip: this.state.skip,
      limit: 1,
    };
     this.setState({ skip: this.state.skip + 100 });
    await this.props.actions.fetchStacksMore(stack);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const stack = {
      name: (this.nameInput.value !== '') ? this.nameInput.value : null,
      skip: 0,
      limit: 100,
    };
    this.setState({ skip: 100 });
    await this.props.actions.fetchStacks(stack);
  }

  async handleDelete (event) {
    event.preventDefault();
    const id = event.currentTarget.name;
    const num = event.currentTarget.dataset.num;
    await this.props.actions.deleteStack(id, num);
  }

  handleRedirect(event) {
    event.preventDefault();
    browserHistory.push(event.target.value);
  }

  render() {
    return (
      <div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
          <h3>Listado Stack</h3>
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
        <StackList
          loading={this.props.loading}
          stacks={this.props.stacks}
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

ListStack.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps (state) {
  return {
    loading: state.listStack.loading,
    stacks: state.listStack.stacks,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(listStackActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStack);
