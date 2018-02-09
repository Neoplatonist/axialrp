/**
 * action types
**/

export const SET_RACE = 'SET_RACE';
export const SET_SUBRACE = 'SET_SUBRACE';
// export const SET_STRENGTH = 'SET_STRENGTH';
// export const SET_DEXTERITY = 'SET_DEXTERITY';
// export const SET_CONSTITUTION = 'SET_CONSTITUTION';
// export const SET_INTELLIGENCE = 'SET_INTELLIGENCE';
// export const SET_WISDOM = 'SET_WISDOM';
// export const SET_CHARISMA = 'SET_SUBRACE';
export const SET_DICE = 'SET_DICE';

export const SET_ABILITY = 'SET_ABILITY';





/**
 * action creators
**/

export const setAbility = ability => {
  return { type: SET_ABILITY, payload: ability };
};

export const setRace = race => {
  return { type: SET_RACE, payload: race };
};

export const setSubRace = subrace => {
  return { type: SET_SUBRACE, payload: subrace };
};

// export const setStrength = (strength) => {
//   return { type: SET_RACE, race };
// };

// export const setDexterity = (dexterity) => {
//   return { type: SET_RACE, race };
// };

// export const setConstitution = (constitution) => {
//   return { type: SET_RACE, race };
// };

// export const setIntelligence = (intelligence) => {
//   return { type: SET_RACE, race };
// };

// export const setWisdom = (wisdom) => {
//   return { type: SET_RACE, race };
// };

// export const setCharisma = (charisma) => {
//   return { type: SET_RACE, race };
// };

export const setDice = dice => {
  return { type: SET_DICE, payload: dice };
};