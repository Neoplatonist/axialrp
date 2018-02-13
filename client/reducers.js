import { combineReducers } from 'redux';
import { 
  SET_ABILITY,
  SET_ABILITY_MOD,
  SET_AC,
  SET_ALIGNMENT,
  SET_CHARACTER,
  SET_CLASS,
  SET_DICE,
  SET_HP,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_PROFICIENCY_BONUS,
  SET_RACE,
  SET_SKILLS,
  SET_SPEED,
  SET_SUBRACE
} from './actions';

const generatorState = {
  ability: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },

  abilityMod: [0, 0, 0, 0, 0, 0],
  ac: 0,
  alignment: '',

  character: {
    name: '',
    gender: '',
    age: '',
    height: '',
    xp: ''
  },

  class: '',
  dice: [],
  hp: 0,
  initiative: 0,
  inspiration: 0,
  proficiencyBonus: 0,
  race: 'Dwarf',

  skills: {
    acrobats: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0
  },

  speed: 25,
  subrace: 'Hill Dwarf',
};

const generator = (state = generatorState, action) => {
  /* eslint-disable indent */
  switch (action.type) {
    case SET_ABILITY: 
      return {
        ...state,
        ability: {
          ...state.ability,
          ...action.payload
        }
      };
      break;

    case SET_ABILITY_MOD: 
      return {
        ...state,
        abilityMod: action.payload
      };
      break;

    case SET_AC: 
      return {
        ...state,
        ac: action.payload
      };
      break;

    case SET_ALIGNMENT: 
      return {
        ...state,
        alignment: action.payload
      };
      break;

    case SET_CHARACTER: 
      return {
        ...state,
        character: {
          ...state.character,
          ...action.payload
        }
      };
      break;

    case SET_CLASS: 
      return {
        ...state,
        class: action.payload
      };
      break;

    case SET_DICE: 
      return {
        ...state,
        dice: action.payload
      };
      break;

    case SET_HP: 
      return {
        ...state,
        hp: action.payload
      };
      break;

    case SET_INITIATIVE: 
      return {
        ...state,
        initiative: action.payload
      };
      break;

    case SET_INSPIRATION: 
      return {
        ...state,
        inspiration: action.payload
      };
      break;

    case SET_PROFICIENCY_BONUS: 
      return {
        ...state,
        proficiencyBonus: action.payload
      };
      break;

    case SET_RACE: 
      return { 
        ...state,
        race: action.payload
      };
      break;

    case SET_SKILLS: 
      return {
        ...state,
        skills: {
          ...state.skills,
          ...action.payload
        }
      };
      break;

    case SET_SPEED: 
      return { 
        ...state,
        speed: action.payload
      };
      break;

    case SET_SUBRACE: 
      return { 
        ...state,
        subrace: action.payload
      };
      break;
  
    default:
      return state;
  }
  /* eslint-enable indent */
};

const reducers = combineReducers({
  generator
});

export default reducers;
