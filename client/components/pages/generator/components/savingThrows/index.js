import React, { Component } from 'react';
import { input } from '../../styles';

import { connect } from 'react-redux';
import {
  setAbility,
  setAbilityMod,
  setAlignment,
  setDice
} from '../../../../../actions';

class SavingThrows extends Component {
  render() {
    return (
      <div>
        <h3>Saving Throws</h3>

        <br/>
        
        <ul>
          <li className={input}>Strength</li>
          <li className={input}>Dexterity</li>
          <li className={input}>Constitution</li>
          <li className={input}>Intelligence</li>
          <li className={input}>Wisdom</li>
          <li className={input}>Charisma</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ability: state.generator.ability,
  abilitMod: state.generator.abilitMod,
  alignment: state.generator.alignment,
  dice: state.generator.dice,
  race: state.generator.race,
  speed: state.generator.speed,
  subrace: state.generator.subrace
});

const boundActions = {
  setAbility,
  setAlignment,
  setAbilityMod,
  setDice
};

export default connect(mapStateToProps, boundActions)(SavingThrows);