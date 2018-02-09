import { combineReducers } from 'redux';
import { 
  SET_ABILITY,
  SET_ABILITY_MOD,
  SET_ALIGNMENT,
  SET_CHARACTER,
  SET_DICE,
  SET_RACE,
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

  alignment: '',

  character: {
    name: '',
    gender: '',
    age: '',
    height: '',
    xp: ''
  },

  dice: [],

  race: 'Dwarf',
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

    case SET_DICE: 
      return {
        ...state,
        dice: action.payload
      };
      break;

    case SET_RACE: 
      return { 
        ...state,
        race: action.payload
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
