import React, { Component } from 'react';
import { AbilityModifier, Dice } from './utils';
import { input } from './styles';

// Mock Database
import { 
  alignment, 
  char_class, 
  race,
  skills
} from '../db.js';
import Ability from './components/ability';
import Class from './components/class';
import Description from './components/description';
import Race from './components/race';
import SavingThrows from './components/savingThrows';
import Skills from './components/skills';
import Stats from './components/stats';

import { connect } from 'react-redux';
import {
  setAbility,
  setAbilityMod,
  setAlignment,
  setDice
} from '../../../actions';

const Option = ({ name }) => <option value={name}>{name}</option>;

const abilityMap = [
  'strength', 
  'dexterity', 
  'constitution', 
  'intelligence', 
  'wisdom', 
  'charisma'
];

class Generator extends Component {
  componentDidMount() {
    this.rollDice();
    const align = race.find( e => e.name === this.props.race ).alignment.main;
    this.props.setAlignment(align);
  }

  rollDice = e => {
    const dice = Dice(20, 6);
    this.props.setDice(dice);
    setTimeout(() => this.updateAbility());
  }

  handleAlignment = e => {
    return alignment.map((v, k) => {
      return <Option key={k} {...v} />;
    });
  }

  renderSkills() {
    return skills.map((v, k) => {
      return <Skills key={k} skill={v} />;
    });
  }

  updateAbility = e => {
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
          <Description />

          <br/>

          <Race mockRace={race} updateAbility={this.updateAbility} />

          <br/>

          <Class mockClass={char_class} />

          <br/>


          <label htmlFor="level">Level: </label>
          <input name="level" className={input} type="text" />

          <label htmlFor="alignment">Alignment: </label>
          <select 
            name="alignment"
            className={input}
            onChange={ e => this.props.setAlignment }
            value={this.props.alignment}
          >
            { this.handleAlignment() }
          </select>

          <br/><br/>

          <h3>Ability Scores</h3>

          <button onClick={this.rollDice}>ReRoll?</button>

          <AbilityWithMod />

          <br/><br/>

          <Stats />

          <br/><br/>

          <SavingThrows />

          <br/><br/>

          <h3>Skills</h3>

          <br/>

          { this.renderSkills() }
        </form>
      </main>
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

export default connect(mapStateToProps, boundActions)(Generator);