import React, { Component } from 'react';
import { AbilityModifier, Dice } from './utils';

// Mock Database
import { race } from '../db.js';
import Ability from './components/ability';

import { connect } from 'react-redux';
import {
  setRace,
  setSubRace,
  setAbility,
  // setStrength,
  // setDexterity,
  // setConstitution,
  // setIntelligence,
  // setWisdom,
  // setCharisma,
  setDice
} from '../../../actions';
import { update } from 'tcomb';

const RaceOption = ({ name }) => <option value={name}>{name}</option>;

const ability = {
  strength: 0,
  dexterity: 1
}

const abilityMap = [
  'strength', 
  'dexterity', 
  'constitution', 
  'intelligence', 
  'wisdom', 
  'charisma'
]

class Generator extends Component {
  componentDidMount() {
    const dice = Dice(20, 6)
    const state = abilityMap.reduce((o, k, i) => ({ ...o, [k]: dice[i] }), {});
    this.props.setAbility(state);
    this.props.setDice(dice);
    // this.setState({ ...state, dice });
  }

  handleRace = e => {
    return race.map((r, i) => {
      return <RaceOption key={i} {...r} />
    })
  }

  handleSubRace = e => {
    const subraces = race.find(r => r.name === this.props.race)
      .sub_races || {sub_races: []};

    return subraces.map((r, i) => {
      return <RaceOption key={i} {...r} />
    })
  }

  onRaceChange = e => {
    this.props.setRace(e.target.value);
    const r = race.find(v => v.name === e.target.value);
    // We need to update the subrace because the race changed, just pick the first one
    this.props.setSubRace(r.sub_races[0].name);
    this.updateAbility();
  }
  
  onSubRaceChange = e => {
    this.props.setSubRace(e.target.value);
    this.updateAbility();
  }

  log = (...args) => {
    console.log(...args)
  }
  
  updateAbility() {
    // debugger;
    const r = race.find(v => v.name === this.props.race);
    const sr = r.sub_races.find(v => v.name === this.props.subrace);
    const ability = abilityMap.reduce((o, k, i) => (
      {
        ...o,
        [k]: this.props.dice[i] + r.ability_bonus[i] + sr.ability_bonus[i],
      }), {}
    );
    this.props.setAbility(ability);
  }

  render() {
    // console.log('render', { state: this.state, subraces });
    // console.log({ ...this.state });

    const BoundAbility = ({ stateKey, ...props }) =>
      <Ability
        id={stateKey}
        value={this.props.ability[stateKey]}
        onChange={ e => this.props.setAbility({ [stateKey]: e.target.value })} 
        {...props} />;

    return (
      <main>
        <h2>Character Generator</h2>

        <form onSubmit={ e => e.preventDefault() }>
          <label htmlFor="races">Race: </label>
          <select 
            name="races" 
            id="races"
            onChange={ this.onRaceChange }
            value={ this.props.race }
          >
            { this.handleRace() }
          </select>

          <br/>

          <label htmlFor="sub-races">Sub-Race: </label>
          <select 
            name="sub-races" 
            id="sub-races"
            onChange={ this.onSubRaceChange }
            value={ this.props.subrace }
          >
            { this.handleSubRace() }
          </select>

          <br/><br/>

          <h3>Ability Scores</h3>
          <BoundAbility stateKey="strength" label="Strength: " />
          <BoundAbility stateKey="dexterity" label="Dexterity: " />
          <BoundAbility stateKey="constitution" label="Constitution: " />
          <BoundAbility stateKey="intelligence" label="Intelligence: " />
          <BoundAbility stateKey="wisdom" label="Wisdom: " />
          <BoundAbility stateKey="charisma" label="Charisma: " />

        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  race: state.generator.race,
  subrace: state.generator.subrace,

  // ability score
  ability: state.generator.ability,
  // strength: state.generator.strength,
  // dexterity: state.generator.dexterity,
  // constitution: state.generator.constitution,
  // intelligence: state.generator.intelligence,
  // wisdom: state.generator.wisdom,
  // charisma: state.generator.charisma,

  dice: state.generator.dice,
});

const boundActions = {
  // setAbility,
  setRace,
  setSubRace,
  setAbility,
  // setStrength,
  // setDexterity,
  // setConstitution,
  // setIntelligence,
  // setWisdom,
  // setCharisma,
  setDice
}

export default connect(mapStateToProps, boundActions)(Generator)