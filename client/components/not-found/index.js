import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { notFound } from './styles';
import { link } from '../pages/dashboard/styles';

export default class NotFound extends Component {

  render() {
    return (
      <main>
        <Helmet title='404 Page Not Found' />

        <h2 className={notFound}>404 Page Not Found</h2>

        <IndexLink to='/' className={link}>go home</IndexLink>
      </main>
    );
  }

}
