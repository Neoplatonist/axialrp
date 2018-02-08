import React, { Component } from 'react';
import { abilityScores } from '../../styles';

export default class Ability extends Component {
  render() {
    const { id, label, ...other } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} className={abilityScores} name={id} {...other} />
      </div>
    );
  }
}