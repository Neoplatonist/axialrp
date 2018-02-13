export const race = [
  {
    name: 'Dwarf',
    ability_bonus: [ 0, 0, 2, 0, 0, 0 ],
    // ability_bonus: { constitution: 2 },
    age: {
      adult: 50,
      description: 'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
      max: 350 
    },
    alignment: {
      description: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
      main: 'Lawful Good',
    },
    size: {
      description: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
      height: {
        min: 4,
        max: 5
      },
      size: 'Medium'
    },
    speed: {
      base: 25,
      description: 'Your speed is not reduced by wearing heavy armor.'
    },
    darkvision: {
      distance: 60,
      description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
    },
    languages: {
      description: 'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
      type: ['Common', 'Dwarvish']
    },
    sub_races: [
      {
        name: 'Hill Dwarf',
        description: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
        ability_bonus: [ 0, 0, 0, 0, 1, 0 ],
        hit_points: {}
      }
    ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tool_proficiency: {
      choose: 1,
      type: 'Artisan',
      tools: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    weapon_proficiency: ['Battleaxes', 'Handaxes', 'Light hammers', 'Warhammers']
  },
  {
    name: 'Elf',
    ability_bonus: [ 0, 2, 0, 0, 0, 0 ],
    age: {
      adult: 100,
      description: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
      max: 750 
    },
    alignment: {
      description: 'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.',
      main: 'Chaotic Good'
    },
    size: {
      description: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 25,
      description: 'Your speed is not reduced by wearing heavy armor.'
    },
    darkvision: {
      distance: 60,
      description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray'
    },
    languages: {
      description: 'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
      type: ['Common', 'Elvish']
    },
    sub_races: [
      {
        name: 'High Elf',
        description: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
        ability_bonus: [ 0, 0, 0, 1, 0, 0 ],
        hit_points: {}
      }
    ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tool_proficiency: {
      choose: 1,
      type: 'Artisan',
      tools: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    weapon_proficiency: ['Longswords', 'Shortswords', 'Shortbows', 'Longbows']
  }
];

export const alignment = [
  {
    name: 'Lawful Good',
    description: 'Those who can be counted on to do the right thing as expected by society.'
  },
  {
    name: 'Lawful Neutral',
    description: 'Those who act in accordance with law, tradition, or personal codes.'
  },
  {
    name: 'Lawful Evil',
    description: 'Those who methodically take what they want, within the limits of a code of tradition, loyalty, or order.'
  },
  {
    name: 'Neutral Good',
    description: 'Those who do the best they can to help others according to their needs.'
  },
  {
    name: 'Neutral',
    description: 'Those who who prefer to steer clear of moral questions and don\'t take sides.'
  },
  {
    name: 'Neutral Evil',
    description: 'Those who do whatever they can get away with, without compassion or qualms.'
  },
  {
    name: 'Chaotic Good',
    description: 'Those who act as their conscience directs, with little regard for what others expect.'
  },
  {
    name: 'Chaotic Neutral',
    description: 'Those who follow their whims, holding their personal freedom above all else.'
  },
  {
    name: 'Chaotic Evil',
    description: 'Those who act with arbitrary violence, spurred by their greed, hatred, or bloodlust.'
  }
];

export const char_class = [
  {
    name: 'Barbarian',
    hit_die: 12,
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Barbarian' },
    spellcasting: {}
  },
  {
    name: 'Bard',
    hit_die: 8,
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Bard' },
    spellcasting: {}
  },
  {
    name: 'Cleric',
    hit_die: 8,
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Cleric' },
    spellcasting: {}
  }
];