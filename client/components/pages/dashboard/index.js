import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { title } from './styles';

export default class Dashboard extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return (
      <main>
        <Helmet
          title='AxialRP: Home Page'
          meta={[
            {
              property: 'og:title',
              content: 'AxialRP: Home Page'
            }
          ]} />

          <h1 className={title}>Welcome to AxialRP</h1>
      </main>
    );
  }

}
