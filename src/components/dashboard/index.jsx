import React, { Component, PropTypes } from 'react';
import Header from './header/'
import Nav from './nav/'

class Dashboard extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main>
        <Header />
        <Nav />
        {this.props.children}
      </main>
    )
  }
}


export default Dashboard 
