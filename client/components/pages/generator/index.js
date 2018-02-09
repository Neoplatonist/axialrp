import React, { Component } from 'react';
import { AbilityModifier, Dice } from './utils';
import { input } from './styles';

// Mock Database
import { race } from '../db.js';
import Ability from './components/ability';

import { connect } from 'react-redux';
import {
  setAbility,
  setAbilityMod,
  setCharacter,
  setDice,
  setRace,
  setSubRace
} from '../../../actions';

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
    this.rollDice()
  }

  rollDice = () => {
    const dice = Dice(20, 6)
    this.props.setDice(dice);
    setTimeout(() => this.updateAbility());
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
    this.props.setSubRace(r.sub_races[0].name);
    this.updateAbility();
  }
  
  onSubRaceChange = e => {
    this.props.setSubRace(e.target.value);
    this.updateAbility();
  }
  
  updateAbility() {
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
    // console.log({ ...this.props });

    const BoundAbility = ({ stateKey, ...props }) =>
      <Ability
        id={stateKey}
        value={this.props.ability[stateKey]}
        onChange={ e => this.props.setAbility({ [stateKey]: e.target.value })} 
        {...props} />;

    const AbilityWithMod = () => {
      const mod = abilityMap.reduce((a, k) => 
        [...a, AbilityModifier(this.props.ability[k])], []);

      this.props.setAbilityMod(mod);

      return (
        <div>
          {abilityMap.map((v, k) => {
            return (
              <BoundAbility 
                key={v+k}
                stateKey={v} 
                label={v[0].toUpperCase() + v.substr(1) + ": "} 
                mod={mod[k]} />
            );
          })}
        </div> 
      );
    };

    return (
      <main>
        <h2>Character Generator</h2>

        <form onSubmit={ e => e.preventDefault() }>
          <label htmlFor="character-name">Character Name: </label>
          <input
            name="character-name"
            className={input}
            type="text"
            onChange={ e => this.props.setCharacter({ name: e.target.value }) }
            value={this.props.character.name}/>

          <label htmlFor="gender">Gender: </label>
          <input
            name="gender"
            className={input}
            type="text" 
            onChange={ e => this.props.setCharacter({ gender: e.target.value }) }
            value={this.props.character.gender}/>

          <label htmlFor="age">Age: </label>
          <input
            name="age"
            className={input}
            type="text" 
            onChange={ e => this.props.setCharacter({ age: e.target.value }) }
            value={this.props.character.age}/>

          <label htmlFor="height">Height: </label>
          <input
            name="height"
            className={input}
            type="text" 
            onChange={ e => this.props.setCharacter({ height: e.target.value }) }
            value={this.props.character.height}/>

          <label htmlFor="xp">XP: </label>
          <input
            name="xp"
            className={input}
            type="text" 
            onChange={ e => this.props.setCharacter({ xp: e.target.value }) }
            value={this.props.character.xp}/>

          <br/><br/>


          <label htmlFor="races">Race: </label>
          <select
            name="races"
            className={input}
            onChange={this.onRaceChange}
            value={this.props.race}
          >
            { this.handleRace() }
          </select>

          <br/>

          <label htmlFor="sub-races">Sub-Race: </label>
          <select
            name="sub-races"
            className={input}
            onChange={this.onSubRaceChange}
            value={this.props.subrace}
          >
            { this.handleSubRace() }
          </select>

          <br/><br/>


          <label htmlFor="class">Class: </label>
          <select
            name="class"
            className={input}
            onChange={this.onSubRaceChange}
            value={this.props.subrace}
          >
            { this.handleSubRace() }
          </select>

          <br/>

          <label htmlFor="sub-class">SubClass: </label>
          <select 
            name="sub-class"
            className={input}
            onChange={this.onSubRaceChange}
            value={this.props.subrace}
          >
            { this.handleSubRace() }
          </select>

          <br/><br/>


          <label htmlFor="level">Level: </label>
          <input name="level" type="text" />

          <br/><br/>

          <h3>Ability Scores</h3>

          <button onClick={this.rollDice}>ReRoll?</button>

          <AbilityWithMod />

        </form>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  ability: state.generator.ability,
  abilitMod: state.generator.abilitMod,
  character: state.generator.character,
  dice: state.generator.dice,
  race: state.generator.race,
  subrace: state.generator.subrace,
});

const boundActions = {
  setAbility,
  setAbilityMod,
  setCharacter,
  setDice,
  setRace,
  setSubRace
}

export default connect(mapStateToProps, boundActions)(Generator)