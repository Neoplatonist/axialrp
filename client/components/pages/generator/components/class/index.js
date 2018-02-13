import React, { Component } from 'react';
import { input } from '../../styles';

const Option = ({ name }) => <option value={name}>{name}</option>;

import { connect } from 'react-redux';
import { setClass } from '../../../../../actions';

class Class extends Component {
  handleClass = e => {
    return this.props.mockClass.map((v, k) => {
      return <Option key={k} {...v} />;
    })
  }

  onClassChange = e => {
    this.props.setClass(e.target.value);
    // this.updateFeatures();
    // this.updateSpells();
  }

  render() {
    return (
      <div>
        <label htmlFor="class">Class: </label>
        <select
          name="class"
          className={input}
          onChange={this.onClassChange}
          value={this.props.class}
        >
          { this.handleClass() }
        </select>

        {/* <label htmlFor="sub-class">SubClass: </label>
          <select 
            name="sub-class"
            className={input}
            onChange={this.onSubRaceChange}
            value={this.props.subrace}
          >
            { this.handleSubRace() }
          </select> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  class: state.generator.class
});

const boundActions = {
  setClass
};

export default connect(mapStateToProps, boundActions)(Class);