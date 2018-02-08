import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

const getWidth = () => {

}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: false
    };
  }

  componentDidMount() {
    this.setState({ mobile: window.innerWidth <= 700 });

    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    this.setState({ mobile: window.innerWidth <= 700 });
  }

  render() {
    return <div>
      {/* <Helmet title='Go + React + Redux = rocks!' /> */}

      <Header mobile={ this.state.mobile } />

      <Sidebar mobile={ this.state.mobile } />

      {this.props.children}

      {/* <Footer /> */}
    </div>;
  }

}
