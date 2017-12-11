import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import zenscroll from 'zenscroll';
/*Style*/
import HomeStyle from '../../../public/home.scss';

/* Actions */
import * as listPersonActions from '../../actions/listPersonActions';
import * as listStackActions from '../../actions/listStackActions';
import * as listTimeActions from '../../actions/listTimeActions';
import * as listProjectActions from '../../actions/listProjectActions';

/* Component */
import Header from './header';
import About from './about';
import Stack from './stack';
import Time from './time';
import Projects from './projects';
import Footer from './footer';


class Home extends Component {
  constructor (props) {
    super(props);
    this.handleNav = this.handleNav.bind(this);
    this.handleNavMob = this.handleNavMob.bind(this);
  }

  async componentWillMount() {
    const people = {name: null,last_name: null,mail: null,skip: 0,limit: 100,};
    await this.props.personActions.fetchPeople(people);

    const stack = {name: null,skip: 0,limit: 100,};
    await this.props.stackActions.fetchStacks(stack);

    const time = {name: null,skip: 0,limit: 100,};
    await this.props.timeActions.fetchTimes(time);

    const project = {name: null,skip: 0,limit: 100,};
    await this.props.projectActions.fetchProjects(project);
  }

  handleNav (event) {
    event.preventDefault();
    var valor = document.getElementById(event.target.name)
    zenscroll.to(valor)
  }
  handleNavMob (event) {
    event.preventDefault();
    var element = document.getElementById('nav_home');
    element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
  }

  render () {
    return (
      <div>
        <Header 
          nav={this.handleNav}
          navMob={this.handleNavMob}
        />
        <About 
          about={this.props.person.description}
        />
        <Stack
          stacks={this.props.stacks}
         />
        <Time 
          times={this.props.times}
        />
        <Projects 
          projects={this.props.projects}
        />
        <Footer 
        person={this.props.person}
        />
      </div>
    )
  }
}

Home.propTypes = {
  stacks: PropTypes.arrayOf(PropTypes.object).isRequired,
  times: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  person: PropTypes.object.isRequired,
};

function mapStateToProps (state) {
  return {
    person: state.home.person,
    stacks: state.home.stacks,
    times: state.home.times,
    projects: state.home.projects,
  }
};

function mapDispatchToProps (dispatch) {
  return {
    personActions: bindActionCreators(listPersonActions, dispatch),
    stackActions: bindActionCreators(listStackActions, dispatch),
    timeActions: bindActionCreators(listTimeActions, dispatch),
    projectActions: bindActionCreators(listProjectActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


