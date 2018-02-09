import { combineReducers } from 'redux';
import { 
  SET_RACE,
  SET_SUBRACE,
  SET_ABILITY,
  // SET_STRENGTH,
  // SET_DEXTERITY,
  // SET_CONSTITUTION,
  // SET_INTELLIGENCE,
  // SET_WISDOM,
  // SET_CHARISMA,
  SET_DICE
} from './actions';

const generatorState = {
  race: 'Dwarf',
  subrace: 'Hill Dwarf',

  // ability score
  ability: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },

  dice: []
};

const generator = (state = generatorState, action) => {
  /* eslint-disable indent */
  switch (action.type) {
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

    case SET_ABILITY: 
      return {
        ...state,
        ability: {
          ...state.ability,
          ...action.payload
        }
      };
      break;

    // case SET_STRENGTH: 
    //   return Object.assign({}, state, {
    //     race: action.strength
    //   });
    //   break;

    // case SET_DEXTERITY: 
    //   return Object.assign({}, state, {
    //     race: action.dexterity
    //   });
    //   break;

    // case SET_CONSTITUTION: 
    //   return Object.assign({}, state, {
    //     race: action.constitution
    //   });
    //   break;

    // case SET_INTELLIGENCE: 
    //   return Object.assign({}, state, {
    //     race: action.intelligence
    //   });
    //   break;

    // case SET_WISDOM: 
    //   return Object.assign({}, state, {
    //     race: action.wisdom
    //   });
    //   break;

    // case SET_CHARISMA: 
    //   return Object.assign({}, state, {
    //     race: action.charisma
    //   });
    //   break;

    case SET_DICE: 
      return {
        ...state,
        dice: action.payload
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
