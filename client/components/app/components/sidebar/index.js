import React, { Component } from 'react';
import { sidebar, exit, logo } from './styles';
import { MobileNav } from './components/mobilenav';

export default class Sidebar extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.wrapperRef.parentNode.style.display = 'none';
    }
  }

  handleClose = e => {
    this.wrapperRef.parentNode.style.display = 'none';
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  }

  render() {
    return (  
      <section id="sidebar" className={sidebar}>
        {/* Just a nav off-click catcher */}

        <aside ref={this.setWrapperRef}>
          <div onClick={this.handleClose}>
            <i className={ exit + " fas fa-times"}></i>
          </div>
          
          <h1 className={logo}>AxialRP</h1>

          { this.props.mobile && <MobileNav /> }

        </aside>  
      </section>
    );
  }
}