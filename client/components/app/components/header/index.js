import React, { Component } from 'react';
import { Nav } from './components/nav';
import { menu } from './styles';

export default class Header extends Component {
  handleHamburg = e => {
    document.getElementById('sidebar').style.display = 'block';
  }

  render() {
    return (
      <header>
        <div onClick={this.handleHamburg}>
          <i className={ menu + ' fas fa-bars fa-lg'}></i>
        </div>

        {/* right nav  */}

        {/* dropdown menu */}

        {/* Dashboard Generator Character List Wiki login/out */}

        { !this.props.mobile && <Nav /> }

        
      </header>
    );
  }
}