import React, { Component } from 'react';
import { input } from '../../styles';

import { connect } from 'react-redux';
import {
  setAC,
  setHP,
  setInitiative,
  setInspiration,
  setProficiencyBonus,
  setSpeed
} from '../../../../../actions';

class Stats extends Component {
  onAcChange = e => {
    this.props.setAC(e.target.value);
  }

  onHpChange = e => {
    // Roll Dice for HP
    // Add Ability Modifier
    this.props.setHP(e.target.value);
  }

  onInitiativeChange = e => {
    this.props.setInitiative(e.target.value);
  }

  onInspirationChange = e => {
    this.props.setInspiration(e.target.value);
  }

  onProficiencyBonusChange = e => {
    this.props.setProficiencyBonus(e.target.value);
  }

  onSpeedChange = e => {
    this.props.setSpeed(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="hp">Hit Points: </label>
        <input
          name="hp"
          className={input}
          type="number" 
          min="0"
          onChange={this.onHpChange}
          value={this.props.hp}/>

        <label htmlFor="ac">Armor Class: </label>
        <input
          name="ac"
          className={input}
          type="number" 
          min="0"
          onChange={this.onAcChange}
          value={this.props.ac}/>

        <label htmlFor="initiative">Initiative: </label>
        <input
          name="initiative"
          className={input}
          type="number" 
          min="0"
          onChange={this.onInitiativeChange}
          value={this.props.initiative}/>

        <label htmlFor="speed">Speed: </label>
        <input
          name="speed"
          className={input}
          type="number" 
          min="0"
          onChange={this.onSpeedChange}
          value={this.props.speed}/>

        <label htmlFor="inspiration">Inspiration: </label>
        <input
          name="inspiration"
          className={input}
          type="number" 
          min="0"
          onChange={this.onInspirationChange}
          value={this.props.inspiration}/>

        <label htmlFor="proficiency">Proficiency Bonus: </label>
        <input
          name="proficiency"
          className={input}
          type="number" 
          min="0"
          onChange={this.onProficiencyBonusChange}
          value={this.props.proficiencyBonus}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ac: state.generator.ac,
  hp: state.generator.hp,
  initiative: state.generator.initiative,
  inspiration: state.generator.inspiration,
  proficiencyBonus: state.generator.proficiencyBonus,
  speed: state.generator.speed,
});

const boundActions = {
  setAC,
  setHP,
  setInitiative,
  setInspiration,
  setProficiencyBonus,
  setSpeed
};

export default connect(mapStateToProps, boundActions)(Stats);