import React, { Component } from 'react';
import { AbilityModifier, Dice } from './utils';

// Mock Database
import { race } from '../db.js';
import Ability from './components/ability';

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

export default class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      race: 'Dwarf',
      subrace: 'Hill Dwarf',

      // ability score
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,

      ability: [0, 0, 0, 0, 0, 0],

      dice: [],
    };
  }

  componentDidMount() {
    const dice = Dice(20, 6)
    const state = abilityMap.reduce((o, k, i) => ({ ...o, [k]: dice[i] }), {});
    this.setState({ ...state, dice });
  }

  handleRace = e => {
    return race.map((r, i) => {
      return <RaceOption key={i} {...r} />
    })
  }

  handleSubRace = e => {
    const subraces = race.find(r => r.name === this.state.race)
      .sub_races || {sub_races: []};

    return subraces.map((r, i) => {
      return <RaceOption key={i} {...r} />
    })
  }

  render() {
    // console.log('render', { state: this.state, subraces });
    // console.log({ ...this.state });

    const BoundAbility = ({ stateKey, ...props }) =>
      <Ability
        id={stateKey}
        value={this.state[stateKey]}
        onChange={ e => this.setState({ [stateKey]: e.target.value }) } 
        {...props}/>;

    return (
      <main>
        <h2>Character Generator</h2>

        <form onSubmit={ e => e.preventDefault() }>
          <label htmlFor="races">Race: </label>
          <select 
            name="races" 
            id="races"
            onChange={ e => this.setState({ race: e.target.value }) }
            value={ this.state.race }
          >
            { this.handleRace() }
          </select>

          <br/>

          <label htmlFor="sub-races">Sub-Race: </label>
          <select 
            name="sub-races" 
            id="sub-races"
            onChange={ e => this.setState({ subrace: e.target.value }) }
            value={ this.state.subrace }
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