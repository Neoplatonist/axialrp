/**
 * action types
**/

export const SET_ABILITY = 'SET_ABILITY';
export const SET_ABILITY_MOD = 'SET_ABILITY_MOD';
export const SET_AC = 'SET_AC';
export const SET_ALIGNMENT = 'SET_ALIGNMENT';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CLASS = 'SET_CLASS';
export const SET_DICE = 'SET_DICE';
export const SET_HP = 'SET_HP';
export const SET_INITIATIVE = 'SET_INITIATIVE';
export const SET_INSPIRATION = 'SET_INSPIRATION';
export const SET_PROFICIENCY_BONUS = 'SET_PROFICIENCY_BONUS';
export const SET_RACE = 'SET_RACE';
export const SET_SPEED = 'SET_SPEED';
export const SET_SKILLS = 'SET_SKILLS'; 
export const SET_SUBRACE = 'SET_SUBRACE';




/**
 * action creators
**/

export const setAbility = ability => {
  return { type: SET_ABILITY, payload: ability };
};

export const setAbilityMod = mod => {
  return { type: SET_ABILITY_MOD, payload: mod };
};

export const setAC = ac => {
  return { type: SET_AC, payload: ac };
};

export const setAlignment = alignment => {
  return { type: SET_ALIGNMENT, payload: alignment };
};

export const setCharacter = character => {
  return { type: SET_CHARACTER, payload: character };
};

export const setClass = char_class => {
  return { type: SET_CLASS, payload: char_class };
};

export const setDice = dice => {
  return { type: SET_DICE, payload: dice };
};

export const setHP = hp => {
  return { type: SET_HP, payload: hp };
};

export const setInitiative = init => {
  return { type: SET_INITIATIVE, payload: init };
};

export const setInspiration = inspire => {
  return { type: SET_INSPIRATION, payload: inspire };
};

export const setProficiencyBonus = proficiency => {
  return { type: SET_PROFICIENCY_BONUS, payload: proficiency };
};

export const setRace = race => {
  return { type: SET_RACE, payload: race };
};

export const setSkills = skills => {
  return { type: SET_SKILLS, payload: skills };
};

export const setSpeed = speed => {
  return { type: SET_SPEED, payload: speed };
};

export const setSubRace = subrace => {
  return { type: SET_SUBRACE, payload: subrace };
};