const pokemonArray = [
    {
      id: "001",
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
      type: [
        "Grass",
        "Poison"
      ],
      stats: {
        hp: "45",
        attack: "49",
        defense: "49",
        spattack: "65",
        spdefense: "65",
        speed: "45"
      },
      moves: {
        level: [{
          learnedat: "",
          name: "tackle",
          gen: "V"
        }, {
          learnedat: "3",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "7",
          name: "leech seed",
          gen: "V"
        }, {
          learnedat: "9",
          name: "vine whip",
          gen: "V"
        }, {
          learnedat: "13",
          name: "poison powder",
          gen: "V"
        }, {
          learnedat: "13",
          name: "sleep powder",
          gen: "V"
        }, {
          learnedat: "15",
          name: "take down",
          gen: "V"
        }, {
          learnedat: "19",
          name: "razor leaf",
          gen: "V"
        }, {
          learnedat: "21",
          name: "sweet scent",
          gen: "V"
        }, {
          learnedat: "25",
          name: "growth",
          gen: "V"
        }, {
          learnedat: "27",
          name: "double-edge",
          gen: "V"
        }, {
          learnedat: "31",
          name: "worry seed",
          gen: "V"
        }, {
          learnedat: "33",
          name: "synthesis",
          gen: "V"
        }, {
          learnedat: "37",
          name: "seed bomb",
          gen: "V"
        }],
        tmhm: [{
          learnedat: "tm06",
          name: "toxic",
          gen: "V"
        }, {
          learnedat: "tm09",
          name: "venoshock",
          gen: "V"
        }, {
          learnedat: "tm10",
          name: "hidden power",
          gen: "V"
        }, {
          learnedat: "tm11",
          name: "sunny day",
          gen: "V"
        }, {
          learnedat: "tm16",
          name: "light screen",
          gen: "V"
        }, {
          learnedat: "tm17",
          name: "protect",
          gen: "V"
        }, {
          learnedat: "tm20",
          name: "safeguard",
          gen: "V"
        }, {
          learnedat: "tm21",
          name: "frustration",
          gen: "V"
        }, {
          learnedat: "tm22",
          name: "solarbeam",
          gen: "V"
        }, {
          learnedat: "tm27",
          name: "return",
          gen: "V"
        }, {
          learnedat: "tm32",
          name: "double team",
          gen: "V"
        }, {
          learnedat: "tm36",
          name: "sludge bomb",
          gen: "V"
        }, {
          learnedat: "tm42",
          name: "facade",
          gen: "V"
        }, {
          learnedat: "tm44",
          name: "rest",
          gen: "V"
        }, {
          learnedat: "tm45",
          name: "attract",
          gen: "V"
        }, {
          learnedat: "tm48",
          name: "round",
          gen: "V"
        }, {
          learnedat: "tm49",
          name: "echoed voice",
          gen: "V"
        }, {
          learnedat: "tm53",
          name: "energy ball",
          gen: "V"
        }, {
          learnedat: "tm70",
          name: "flash",
          gen: "V"
        }, {
          learnedat: "tm75",
          name: "swords dance",
          gen: "V"
        }, {
          learnedat: "tm86",
          name: "grass knot",
          gen: "V"
        }, {
          learnedat: "tm87",
          name: "swagger",
          gen: "V"
        }, {
          learnedat: "tm90",
          name: "substitute",
          gen: "V"
        }, {
          learnedat: "tm94",
          name: "rock smash",
          gen: "V"
        }, {
          learnedat: "hm01",
          name: "cut",
          gen: "V"
        }, {
          learnedat: "hm04",
          name: "strength",
          gen: "V"
        }],
        egg: [{
          name: "skull bash",
          gen: "V"
        }, {
          name: "charm",
          gen: "V"
        }, {
          name: "petal dance",
          gen: "V"
        }, {
          name: "magical leaf",
          gen: "V"
        }, {
          name: "grasswhistle",
          gen: "V"
        }, {
          name: "curse",
          gen: "V"
        }, {
          name: "ingrain",
          gen: "V"
        }, {
          name: "nature power",
          gen: "V"
        }, {
          name: "amnesia",
          gen: "V"
        }, {
          name: "leaf storm",
          gen: "V"
        }, {
          name: "power whip",
          gen: "V"
        }, {
          name: "sludge",
          gen: "V"
        }, {
          name: "endure",
          gen: "V"
        }, {
          name: "giga drain",
          gen: "V"
        }],
        tutor: [{
          name: "grass pledge",
          gen: "V"
        }],
        gen34: [{
          name: "bullet seed",
          method: "Gen IV TM09"
        }, {
          name: "secret power",
          method: "Gen IV TM43"
        }, {
          name: "captivate",
          method: "Gen IV TM78"
        }, {
          name: "sleep talk",
          method: "Gen IV TM82"
        }, {
          name: "natural gift",
          method: "Gen IV TM83"
        }, {
          name: "fury cutter",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "knock off",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "snore",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "mudslap",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "string shot",
          method: "Move Tutor  HGSS"
        }, {
          name: "headbutt",
          method: "Move Tutor  HGSS"
        }, {
          name: "defense curl",
          method: "Move Tutor  Emerald"
        }, {
          name: "body slam",
          method: "Move Tutor  FRLG"
        }, {
          name: "mimic",
          method: "Move Tutor  FRLG"
        }]
      },
      damages: {
        normal: "1",
        fire: "2",
        water: "0.5",
        electric: "0.5",
        grass: "0.25",
        ice: "2",
        fight: "0.5",
        poison: "1",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Overgrow"
          ],
          hidden: [
            "Chlorophyll"
          ]
        },
        classification: "seed pokemon",
        height: "2’04”",
        weight: "15.2",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Sp. Attack Point(s)"
        ],
        fleeflag: "34",
        entreeforestlevel: "10"
      }
    },
    {
      id: "002",
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
      type: [
        "Grass",
        "Poison"
      ],
      stats: {
        hp: "60",
        attack: "62",
        defense: "63",
        spattack: "80",
        spdefense: "80",
        speed: "60"
      },
      moves: {
        level: [{
          learnedat: "",
          name: "tackle",
          gen: "V"
        }, {
          learnedat: "",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "",
          name: "leech seed",
          gen: "V"
        }, {
          learnedat: "3",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "7",
          name: "leech seed",
          gen: "V"
        }, {
          learnedat: "9",
          name: "vine whip",
          gen: "V"
        }, {
          learnedat: "13",
          name: "poison powder",
          gen: "V"
        }, {
          learnedat: "13",
          name: "sleep powder",
          gen: "V"
        }, {
          learnedat: "15",
          name: "take down",
          gen: "V"
        }, {
          learnedat: "20",
          name: "razor leaf",
          gen: "V"
        }, {
          learnedat: "23",
          name: "sweet scent",
          gen: "V"
        }, {
          learnedat: "28",
          name: "growth",
          gen: "V"
        }, {
          learnedat: "31",
          name: "double-edge",
          gen: "V"
        }, {
          learnedat: "36",
          name: "worry seed",
          gen: "V"
        }, {
          learnedat: "39",
          name: "synthesis",
          gen: "V"
        }, {
          learnedat: "44",
          name: "solarbeam",
          gen: "V"
        }],
        tmhm: [{
          learnedat: "tm06",
          name: "toxic",
          gen: "V"
        }, {
          learnedat: "tm09",
          name: "venoshock",
          gen: "V"
        }, {
          learnedat: "tm10",
          name: "hidden power",
          gen: "V"
        }, {
          learnedat: "tm11",
          name: "sunny day",
          gen: "V"
        }, {
          learnedat: "tm16",
          name: "light screen",
          gen: "V"
        }, {
          learnedat: "tm17",
          name: "protect",
          gen: "V"
        }, {
          learnedat: "tm20",
          name: "safeguard",
          gen: "V"
        }, {
          learnedat: "tm21",
          name: "frustration",
          gen: "V"
        }, {
          learnedat: "tm22",
          name: "solarbeam",
          gen: "V"
        }, {
          learnedat: "tm27",
          name: "return",
          gen: "V"
        }, {
          learnedat: "tm32",
          name: "double team",
          gen: "V"
        }, {
          learnedat: "tm36",
          name: "sludge bomb",
          gen: "V"
        }, {
          learnedat: "tm42",
          name: "facade",
          gen: "V"
        }, {
          learnedat: "tm44",
          name: "rest",
          gen: "V"
        }, {
          learnedat: "tm45",
          name: "attract",
          gen: "V"
        }, {
          learnedat: "tm48",
          name: "round",
          gen: "V"
        }, {
          learnedat: "tm49",
          name: "echoed voice",
          gen: "V"
        }, {
          learnedat: "tm53",
          name: "energy ball",
          gen: "V"
        }, {
          learnedat: "tm70",
          name: "flash",
          gen: "V"
        }, {
          learnedat: "tm75",
          name: "swords dance",
          gen: "V"
        }, {
          learnedat: "tm86",
          name: "grass knot",
          gen: "V"
        }, {
          learnedat: "tm87",
          name: "swagger",
          gen: "V"
        }, {
          learnedat: "tm90",
          name: "substitute",
          gen: "V"
        }, {
          learnedat: "tm94",
          name: "rock smash",
          gen: "V"
        }, {
          learnedat: "hm01",
          name: "cut",
          gen: "V"
        }, {
          learnedat: "hm04",
          name: "strength",
          gen: "V"
        }],
        egg: [{
          name: "skull bash",
          gen: "V"
        }, {
          name: "charm",
          gen: "V"
        }, {
          name: "petal dance",
          gen: "V"
        }, {
          name: "magical leaf",
          gen: "V"
        }, {
          name: "grasswhistle",
          gen: "V"
        }, {
          name: "curse",
          gen: "V"
        }, {
          name: "ingrain",
          gen: "V"
        }, {
          name: "nature power",
          gen: "V"
        }, {
          name: "amnesia",
          gen: "V"
        }, {
          name: "leaf storm",
          gen: "V"
        }, {
          name: "power whip",
          gen: "V"
        }, {
          name: "sludge",
          gen: "V"
        }, {
          name: "endure",
          gen: "V"
        }, {
          name: "giga drain",
          gen: "V"
        }],
        tutor: [{
          name: "grass pledge",
          gen: "V"
        }],
        gen34: [{
          name: "bullet seed",
          method: "Gen IV TM09"
        }, {
          name: "secret power",
          method: "Gen IV TM43"
        }, {
          name: "captivate",
          method: "Gen IV TM78"
        }, {
          name: "sleep talk",
          method: "Gen IV TM82"
        }, {
          name: "natural gift",
          method: "Gen IV TM83"
        }, {
          name: "fury cutter",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "knock off",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "snore",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "mudslap",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "seed bomb",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "string shot",
          method: "Move Tutor  HGSS"
        }, {
          name: "headbutt",
          method: "Move Tutor  HGSS"
        }, {
          name: "defense curl",
          method: "Move Tutor  Emerald"
        }, {
          name: "body slam",
          method: "Move Tutor  FRLG"
        }, {
          name: "mimic",
          method: "Move Tutor  FRLG"
        }]
      },
      damages: {
        normal: "1",
        fire: "2",
        water: "0.5",
        electric: "0.5",
        grass: "0.25",
        ice: "2",
        fight: "0.5",
        poison: "1",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Overgrow"
          ],
          hidden: [
            "Chlorophyll"
          ]
        },
        classification: "seed pokemon",
        height: "3’03”",
        weight: "28.7",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Sp. Attack Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "34",
        entreeforestlevel: "16"
      }
    }, {
      id: "003",
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg",
      type: [
        "Grass",
        "Poison"
      ],
      stats: {
        hp: "80",
        attack: "82",
        defense: "83",
        spattack: "100",
        spdefense: "100",
        speed: "80"
      },
      moves: {
        level: [{
          learnedat: "",
          name: "tackle",
          gen: "V"
        }, {
          learnedat: "",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "",
          name: "leech seed",
          gen: "V"
        }, {
          learnedat: "",
          name: "vine whip",
          gen: "V"
        }, {
          learnedat: "3",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "7",
          name: "leech seed",
          gen: "V"
        }, {
          learnedat: "9",
          name: "vine whip",
          gen: "V"
        }, {
          learnedat: "13",
          name: "poison powder",
          gen: "V"
        }, {
          learnedat: "13",
          name: "sleep powder",
          gen: "V"
        }, {
          learnedat: "15",
          name: "take down",
          gen: "V"
        }, {
          learnedat: "20",
          name: "razor leaf",
          gen: "V"
        }, {
          learnedat: "23",
          name: "sweet scent",
          gen: "V"
        }, {
          learnedat: "28",
          name: "growth",
          gen: "V"
        }, {
          learnedat: "31",
          name: "double-edge",
          gen: "V"
        }, {
          learnedat: "32",
          name: "petal dance",
          gen: "V"
        }, {
          learnedat: "39",
          name: "worry seed",
          gen: "V"
        }, {
          learnedat: "45",
          name: "synthesis",
          gen: "V"
        }, {
          learnedat: "53",
          name: "solarbeam",
          gen: "V"
        }],
        tmhm: [{
          learnedat: "tm05",
          name: "roar",
          gen: "V"
        }, {
          learnedat: "tm06",
          name: "toxic",
          gen: "V"
        }, {
          learnedat: "tm09",
          name: "venoshock",
          gen: "V"
        }, {
          learnedat: "tm10",
          name: "hidden power",
          gen: "V"
        }, {
          learnedat: "tm11",
          name: "sunny day",
          gen: "V"
        }, {
          learnedat: "tm15",
          name: "hyper beam",
          gen: "V"
        }, {
          learnedat: "tm16",
          name: "light screen",
          gen: "V"
        }, {
          learnedat: "tm17",
          name: "protect",
          gen: "V"
        }, {
          learnedat: "tm20",
          name: "safeguard",
          gen: "V"
        }, {
          learnedat: "tm21",
          name: "frustration",
          gen: "V"
        }, {
          learnedat: "tm22",
          name: "solarbeam",
          gen: "V"
        }, {
          learnedat: "tm26",
          name: "earthquake",
          gen: "V"
        }, {
          learnedat: "tm27",
          name: "return",
          gen: "V"
        }, {
          learnedat: "tm32",
          name: "double team",
          gen: "V"
        }, {
          learnedat: "tm36",
          name: "sludge bomb",
          gen: "V"
        }, {
          learnedat: "tm42",
          name: "facade",
          gen: "V"
        }, {
          learnedat: "tm44",
          name: "rest",
          gen: "V"
        }, {
          learnedat: "tm45",
          name: "attract",
          gen: "V"
        }, {
          learnedat: "tm48",
          name: "round",
          gen: "V"
        }, {
          learnedat: "tm49",
          name: "echoed voice",
          gen: "V"
        }, {
          learnedat: "tm53",
          name: "energy ball",
          gen: "V"
        }, {
          learnedat: "tm68",
          name: "giga impact",
          gen: "V"
        }, {
          learnedat: "tm70",
          name: "flash",
          gen: "V"
        }, {
          learnedat: "tm75",
          name: "swords dance",
          gen: "V"
        }, {
          learnedat: "tm78",
          name: "bulldoze",
          gen: "V"
        }, {
          learnedat: "tm86",
          name: "grass knot",
          gen: "V"
        }, {
          learnedat: "tm87",
          name: "swagger",
          gen: "V"
        }, {
          learnedat: "tm90",
          name: "substitute",
          gen: "V"
        }, {
          learnedat: "tm94",
          name: "rock smash",
          gen: "V"
        }, {
          learnedat: "hm01",
          name: "cut",
          gen: "V"
        }, {
          learnedat: "hm04",
          name: "strength",
          gen: "V"
        }],
        egg: [{
          name: "skull bash",
          gen: "V"
        }, {
          name: "charm",
          gen: "V"
        }, {
          name: "petal dance",
          gen: "V"
        }, {
          name: "magical leaf",
          gen: "V"
        }, {
          name: "grasswhistle",
          gen: "V"
        }, {
          name: "curse",
          gen: "V"
        }, {
          name: "ingrain",
          gen: "V"
        }, {
          name: "nature power",
          gen: "V"
        }, {
          name: "amnesia",
          gen: "V"
        }, {
          name: "leaf storm",
          gen: "V"
        }, {
          name: "power whip",
          gen: "V"
        }, {
          name: "sludge",
          gen: "V"
        }, {
          name: "endure",
          gen: "V"
        }, {
          name: "giga drain",
          gen: "V"
        }],
        tutor: [{
          name: "frenzy plant",
          gen: "V"
        }, {
          name: "grass pledge",
          gen: "V"
        }],
        gen34: [{
          name: "bullet seed",
          method: "Gen IV TM09"
        }, {
          name: "secret power",
          method: "Gen IV TM43"
        }, {
          name: "captivate",
          method: "Gen IV TM78"
        }, {
          name: "sleep talk",
          method: "Gen IV TM82"
        }, {
          name: "natural gift",
          method: "Gen IV TM83"
        }, {
          name: "fury cutter",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "knock off",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "snore",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "mudslap",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "outrage",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "seed bomb",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "string shot",
          method: "Move Tutor  HGSS"
        }, {
          name: "block",
          method: "Move Tutor  HGSS"
        }, {
          name: "headbutt",
          method: "Move Tutor  HGSS"
        }, {
          name: "defense curl",
          method: "Move Tutor  Emerald"
        }, {
          name: "body slam",
          method: "Move Tutor  FRLG"
        }, {
          name: "mimic",
          method: "Move Tutor  FRLG"
        }]
      },
      damages: {
        normal: "1",
        fire: "2",
        water: "0.5",
        electric: "0.5",
        grass: "0.25",
        ice: "2",
        fight: "0.5",
        poison: "1",
        ground: "1",
        flying: "2",
        psychic: "2",
        bug: "1",
        rock: "1",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "1"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Overgrow"
          ],
          hidden: [
            "Chlorophyll"
          ]
        },
        classification: "seed pokemon",
        height: "6’07”",
        weight: "220.5",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "2 Sp. Attack Point(s)",
          "1 Sp. Defense Point(s)"
        ],
        fleeflag: "34",
        entreeforestlevel: "32"
      }
    }, {
      id: "004",
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg",
      type: [
        "Fire"
      ],
      stats: {
        hp: "39",
        attack: "52",
        defense: "43",
        spattack: "60",
        spdefense: "50",
        speed: "65"
      },
      moves: {
        level: [{
          learnedat: "",
          name: "scratch",
          gen: "V"
        }, {
          learnedat: "",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "7",
          name: "ember",
          gen: "V"
        }, {
          learnedat: "10",
          name: "smokescreen",
          gen: "V"
        }, {
          learnedat: "16",
          name: "dragon rage",
          gen: "V"
        }, {
          learnedat: "19",
          name: "scary face",
          gen: "V"
        }, {
          learnedat: "25",
          name: "fire fang",
          gen: "V"
        }, {
          learnedat: "28",
          name: "flame burst",
          gen: "V"
        }, {
          learnedat: "34",
          name: "slash",
          gen: "V"
        }, {
          learnedat: "37",
          name: "flamethrower",
          gen: "V"
        }, {
          learnedat: "43",
          name: "fire spin",
          gen: "V"
        }, {
          learnedat: "46",
          name: "inferno",
          gen: "V"
        }],
        tmhm: [{
          learnedat: "tm01",
          name: "hone claws",
          gen: "V"
        }, {
          learnedat: "tm02",
          name: "dragon claw",
          gen: "V"
        }, {
          learnedat: "tm06",
          name: "toxic",
          gen: "V"
        }, {
          learnedat: "tm10",
          name: "hidden power",
          gen: "V"
        }, {
          learnedat: "tm11",
          name: "sunny day",
          gen: "V"
        }, {
          learnedat: "tm17",
          name: "protect",
          gen: "V"
        }, {
          learnedat: "tm21",
          name: "frustration",
          gen: "V"
        }, {
          learnedat: "tm27",
          name: "return",
          gen: "V"
        }, {
          learnedat: "tm28",
          name: "dig",
          gen: "V"
        }, {
          learnedat: "tm31",
          name: "brick break",
          gen: "V"
        }, {
          learnedat: "tm32",
          name: "double team",
          gen: "V"
        }, {
          learnedat: "tm35",
          name: "flamethrower",
          gen: "V"
        }, {
          learnedat: "tm38",
          name: "fire blast",
          gen: "V"
        }, {
          learnedat: "tm39",
          name: "rock tomb",
          gen: "V"
        }, {
          learnedat: "tm40",
          name: "aerial ace",
          gen: "V"
        }, {
          learnedat: "tm42",
          name: "facade",
          gen: "V"
        }, {
          learnedat: "tm43",
          name: "flame charge",
          gen: "V"
        }, {
          learnedat: "tm44",
          name: "rest",
          gen: "V"
        }, {
          learnedat: "tm45",
          name: "attract",
          gen: "V"
        }, {
          learnedat: "tm48",
          name: "round",
          gen: "V"
        }, {
          learnedat: "tm49",
          name: "echoed voice",
          gen: "V"
        }, {
          learnedat: "tm50",
          name: "overheat",
          gen: "V"
        }, {
          learnedat: "tm56",
          name: "fling",
          gen: "V"
        }, {
          learnedat: "tm59",
          name: "incinerate",
          gen: "V"
        }, {
          learnedat: "tm61",
          name: "will-o-wisp",
          gen: "V"
        }, {
          learnedat: "tm65",
          name: "shadow claw",
          gen: "V"
        }, {
          learnedat: "tm75",
          name: "swords dance",
          gen: "V"
        }, {
          learnedat: "tm80",
          name: "rock slide",
          gen: "V"
        }, {
          learnedat: "tm87",
          name: "swagger",
          gen: "V"
        }, {
          learnedat: "tm90",
          name: "substitute",
          gen: "V"
        }, {
          learnedat: "tm94",
          name: "rock smash",
          gen: "V"
        }, {
          learnedat: "hm01",
          name: "cut",
          gen: "V"
        }, {
          learnedat: "hm04",
          name: "strength",
          gen: "V"
        }],
        egg: [{
          name: "belly drum",
          gen: "V"
        }, {
          name: "ancientpower",
          gen: "V"
        }, {
          name: "bite",
          gen: "V"
        }, {
          name: "outrage",
          gen: "V"
        }, {
          name: "beat up",
          gen: "V"
        }, {
          name: "dragon dance",
          gen: "V"
        }, {
          name: "crunch",
          gen: "V"
        }, {
          name: "dragon rush",
          gen: "V"
        }, {
          name: "metal claw",
          gen: "V"
        }, {
          name: "flare blitz",
          gen: "V"
        }, {
          name: "counter",
          gen: "V"
        }, {
          name: "dragon pulse",
          gen: "V"
        }, {
          name: "focus punch",
          gen: "V"
        }],
        tutor: [{
          name: "fire pledge",
          gen: "V"
        }],
        gen34: [{
          name: "iron tail",
          method: "Gen IV TM23"
        }, {
          name: "secret power",
          method: "Gen IV TM43"
        }, {
          name: "endure",
          method: "Gen IV TM58"
        }, {
          name: "captivate",
          method: "Gen IV TM78"
        }, {
          name: "sleep talk",
          method: "Gen IV TM82"
        }, {
          name: "natural gift",
          method: "Gen IV TM83"
        }, {
          name: "fire punch",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "fury cutter",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "thunderpunch",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "snore",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "swift",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "heat wave",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "mudslap",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "headbutt",
          method: "Move Tutor  HGSS"
        }, {
          name: "dynamicpunch",
          method: "Move Tutor  Emerald"
        }, {
          name: "defense curl",
          method: "Move Tutor  Emerald"
        }, {
          name: "mega punch",
          method: "Move Tutor  FRLG"
        }, {
          name: "mega kick",
          method: "Move Tutor  FRLG"
        }, {
          name: "body slam",
          method: "Move Tutor  FRLG"
        }, {
          name: "doubleedge",
          method: "Move Tutor  FRLG"
        }, {
          name: "seismic toss",
          method: "Move Tutor  FRLG"
        }, {
          name: "mimic",
          method: "Move Tutor  FRLG"
        }]
      },
      damages: {
        normal: "1",
        fire: "0.5",
        water: "2",
        electric: "1",
        grass: "0.5",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Blaze"
          ],
          hidden: [
            "Solar Power"
          ]
        },
        classification: "lizard pokemon",
        height: "2’00”",
        weight: "18.7",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)"
        ],
        fleeflag: "94",
        entreeforestlevel: "10"
      }
    }, {
      id: "005",
      name: "Charmeleon",
      img: "http://img.pokemondb.net/artwork/charmeleon.jpg",
      type: [
        "Fire"
      ],
      stats: {
        hp: "58",
        attack: "64",
        defense: "58",
        spattack: "80",
        spdefense: "65",
        speed: "80"
      },
      moves: {
        level: [{
          learnedat: "",
          name: "scratch",
          gen: "V"
        }, {
          learnedat: "",
          name: "growl",
          gen: "V"
        }, {
          learnedat: "",
          name: "ember",
          gen: "V"
        }, {
          learnedat: "7",
          name: "ember",
          gen: "V"
        }, {
          learnedat: "10",
          name: "smokescreen",
          gen: "V"
        }, {
          learnedat: "17",
          name: "dragon rage",
          gen: "V"
        }, {
          learnedat: "21",
          name: "scary face",
          gen: "V"
        }, {
          learnedat: "28",
          name: "fire fang",
          gen: "V"
        }, {
          learnedat: "32",
          name: "flame burst",
          gen: "V"
        }, {
          learnedat: "39",
          name: "slash",
          gen: "V"
        }, {
          learnedat: "43",
          name: "flamethrower",
          gen: "V"
        }, {
          learnedat: "50",
          name: "fire spin",
          gen: "V"
        }, {
          learnedat: "54",
          name: "inferno",
          gen: "V"
        }],
        tmhm: [{
          learnedat: "tm01",
          name: "hone claws",
          gen: "V"
        }, {
          learnedat: "tm02",
          name: "dragon claw",
          gen: "V"
        }, {
          learnedat: "tm06",
          name: "toxic",
          gen: "V"
        }, {
          learnedat: "tm10",
          name: "hidden power",
          gen: "V"
        }, {
          learnedat: "tm11",
          name: "sunny day",
          gen: "V"
        }, {
          learnedat: "tm17",
          name: "protect",
          gen: "V"
        }, {
          learnedat: "tm21",
          name: "frustration",
          gen: "V"
        }, {
          learnedat: "tm27",
          name: "return",
          gen: "V"
        }, {
          learnedat: "tm28",
          name: "dig",
          gen: "V"
        }, {
          learnedat: "tm31",
          name: "brick break",
          gen: "V"
        }, {
          learnedat: "tm32",
          name: "double team",
          gen: "V"
        }, {
          learnedat: "tm35",
          name: "flamethrower",
          gen: "V"
        }, {
          learnedat: "tm38",
          name: "fire blast",
          gen: "V"
        }, {
          learnedat: "tm39",
          name: "rock tomb",
          gen: "V"
        }, {
          learnedat: "tm40",
          name: "aerial ace",
          gen: "V"
        }, {
          learnedat: "tm42",
          name: "facade",
          gen: "V"
        }, {
          learnedat: "tm43",
          name: "flame charge",
          gen: "V"
        }, {
          learnedat: "tm44",
          name: "rest",
          gen: "V"
        }, {
          learnedat: "tm45",
          name: "attract",
          gen: "V"
        }, {
          learnedat: "tm48",
          name: "round",
          gen: "V"
        }, {
          learnedat: "tm49",
          name: "echoed voice",
          gen: "V"
        }, {
          learnedat: "tm50",
          name: "overheat",
          gen: "V"
        }, {
          learnedat: "tm56",
          name: "fling",
          gen: "V"
        }, {
          learnedat: "tm59",
          name: "incinerate",
          gen: "V"
        }, {
          learnedat: "tm61",
          name: "will-o-wisp",
          gen: "V"
        }, {
          learnedat: "tm65",
          name: "shadow claw",
          gen: "V"
        }, {
          learnedat: "tm75",
          name: "swords dance",
          gen: "V"
        }, {
          learnedat: "tm80",
          name: "rock slide",
          gen: "V"
        }, {
          learnedat: "tm87",
          name: "swagger",
          gen: "V"
        }, {
          learnedat: "tm90",
          name: "substitute",
          gen: "V"
        }, {
          learnedat: "tm94",
          name: "rock smash",
          gen: "V"
        }, {
          learnedat: "hm01",
          name: "cut",
          gen: "V"
        }, {
          learnedat: "hm04",
          name: "strength",
          gen: "V"
        }],
        egg: [{
          name: "belly drum",
          gen: "V"
        }, {
          name: "ancientpower",
          gen: "V"
        }, {
          name: "bite",
          gen: "V"
        }, {
          name: "outrage",
          gen: "V"
        }, {
          name: "beat up",
          gen: "V"
        }, {
          name: "dragon dance",
          gen: "V"
        }, {
          name: "crunch",
          gen: "V"
        }, {
          name: "dragon rush",
          gen: "V"
        }, {
          name: "metal claw",
          gen: "V"
        }, {
          name: "flare blitz",
          gen: "V"
        }, {
          name: "counter",
          gen: "V"
        }, {
          name: "dragon pulse",
          gen: "V"
        }, {
          name: "focus punch",
          gen: "V"
        }],
        tutor: [{
          name: "fire pledge",
          gen: "V"
        }],
        gen34: [{
          name: "iron tail",
          method: "Gen IV TM23"
        }, {
          name: "secret power",
          method: "Gen IV TM43"
        }, {
          name: "endure",
          method: "Gen IV TM58"
        }, {
          name: "captivate",
          method: "Gen IV TM78"
        }, {
          name: "sleep talk",
          method: "Gen IV TM82"
        }, {
          name: "natural gift",
          method: "Gen IV TM83"
        }, {
          name: "fire punch",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "fury cutter",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "thunderpunch",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "snore",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "swift",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "heat wave",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "mudslap",
          method: "Move Tutor  PtHGSS"
        }, {
          name: "headbutt",
          method: "Move Tutor  HGSS"
        }, {
          name: "dynamicpunch",
          method: "Move Tutor  Emerald"
        }, {
          name: "defense curl",
          method: "Move Tutor  Emerald"
        }, {
          name: "mega punch",
          method: "Move Tutor  FRLG"
        }, {
          name: "mega kick",
          method: "Move Tutor  FRLG"
        }, {
          name: "body slam",
          method: "Move Tutor  FRLG"
        }, {
          name: "doubleedge",
          method: "Move Tutor  FRLG"
        }, {
          name: "seismic toss",
          method: "Move Tutor  FRLG"
        }, {
          name: "mimic",
          method: "Move Tutor  FRLG"
        }]
      },
      damages: {
        normal: "1",
        fire: "0.5",
        water: "2",
        electric: "1",
        grass: "0.5",
        ice: "0.5",
        fight: "1",
        poison: "1",
        ground: "2",
        flying: "1",
        psychic: "1",
        bug: "0.5",
        rock: "2",
        ghost: "1",
        dragon: "1",
        dark: "1",
        steel: "0.5"
      },
      misc: {
        sex: {
          male: "87.5",
          female: "12.5"
        },
        abilities: {
          normal: [
            "Blaze"
          ],
          hidden: [
            "Solar Power"
          ]
        },
        classification: "flame pokemon",
        height: "3’07”",
        weight: "41.9",
        capturerate: "45",
        eggsteps: "5120",
        expgrowth: "1059860",
        happiness: "70",
        evpoints: [
          "1 Speed Point(s)",
          "1 Sp. Attack Point(s)"
        ],
        fleeflag: "94",
        entreeforestlevel: "16"
      }
    }, {
        id: "006",
        name: "Charizard",
        img: "http://img.pokemondb.net/artwork/charizard.jpg",
        type: [
          "Fire",
          "Flying"
        ],
        stats: {
          hp: "78",
          attack: "84",
          defense: "78",
          spattack: "109",
          spdefense: "85",
          speed: "100"
        },
        moves: {
          level: [{
            learnedat: "",
            name: "dragon claw",
            gen: "V"
          }, {
            learnedat: "",
            name: "shadow claw",
            gen: "V"
          }, {
            learnedat: "",
            name: "air slash",
            gen: "V"
          }, {
            learnedat: "",
            name: "scratch",
            gen: "V"
          }, {
            learnedat: "",
            name: "growl",
            gen: "V"
          }, {
            learnedat: "",
            name: "ember",
            gen: "V"
          }, {
            learnedat: "",
            name: "smokescreen",
            gen: "V"
          }, {
            learnedat: "7",
            name: "ember",
            gen: "V"
          }, {
            learnedat: "10",
            name: "smokescreen",
            gen: "V"
          }, {
            learnedat: "17",
            name: "dragon rage",
            gen: "V"
          }, {
            learnedat: "21",
            name: "scary face",
            gen: "V"
          }, {
            learnedat: "28",
            name: "fire fang",
            gen: "V"
          }, {
            learnedat: "32",
            name: "flame burst",
            gen: "V"
          }, {
            learnedat: "36",
            name: "wing attack",
            gen: "V"
          }, {
            learnedat: "41",
            name: "slash",
            gen: "V"
          }, {
            learnedat: "47",
            name: "flamethrower",
            gen: "V"
          }, {
            learnedat: "56",
            name: "fire spin",
            gen: "V"
          }, {
            learnedat: "62",
            name: "inferno",
            gen: "V"
          }, {
            learnedat: "71",
            name: "heat wave",
            gen: "V"
          }, {
            learnedat: "77",
            name: "flare blitz",
            gen: "V"
          }],
          tmhm: [{
            learnedat: "tm01",
            name: "hone claws",
            gen: "V"
          }, {
            learnedat: "tm02",
            name: "dragon claw",
            gen: "V"
          }, {
            learnedat: "tm05",
            name: "roar",
            gen: "V"
          }, {
            learnedat: "tm06",
            name: "toxic",
            gen: "V"
          }, {
            learnedat: "tm10",
            name: "hidden power",
            gen: "V"
          }, {
            learnedat: "tm11",
            name: "sunny day",
            gen: "V"
          }, {
            learnedat: "tm15",
            name: "hyper beam",
            gen: "V"
          }, {
            learnedat: "tm17",
            name: "protect",
            gen: "V"
          }, {
            learnedat: "tm21",
            name: "frustration",
            gen: "V"
          }, {
            learnedat: "tm22",
            name: "solarbeam",
            gen: "V"
          }, {
            learnedat: "tm26",
            name: "earthquake",
            gen: "V"
          }, {
            learnedat: "tm27",
            name: "return",
            gen: "V"
          }, {
            learnedat: "tm28",
            name: "dig",
            gen: "V"
          }, {
            learnedat: "tm31",
            name: "brick break",
            gen: "V"
          }, {
            learnedat: "tm32",
            name: "double team",
            gen: "V"
          }, {
            learnedat: "tm35",
            name: "flamethrower",
            gen: "V"
          }, {
            learnedat: "tm38",
            name: "fire blast",
            gen: "V"
          }, {
            learnedat: "tm39",
            name: "rock tomb",
            gen: "V"
          }, {
            learnedat: "tm40",
            name: "aerial ace",
            gen: "V"
          }, {
            learnedat: "tm42",
            name: "facade",
            gen: "V"
          }, {
            learnedat: "tm43",
            name: "flame charge",
            gen: "V"
          }, {
            learnedat: "tm44",
            name: "rest",
            gen: "V"
          }, {
            learnedat: "tm45",
            name: "attract",
            gen: "V"
          }, {
            learnedat: "tm48",
            name: "round",
            gen: "V"
          }, {
            learnedat: "tm49",
            name: "echoed voice",
            gen: "V"
          }, {
            learnedat: "tm50",
            name: "overheat",
            gen: "V"
          }, {
            learnedat: "tm52",
            name: "focus blast",
            gen: "V"
          }, {
            learnedat: "tm56",
            name: "fling",
            gen: "V"
          }, {
            learnedat: "tm58",
            name: "sky drop",
            gen: "V"
          }, {
            learnedat: "tm59",
            name: "incinerate",
            gen: "V"
          }, {
            learnedat: "tm61",
            name: "will-o-wisp",
            gen: "V"
          }, {
            learnedat: "tm65",
            name: "shadow claw",
            gen: "V"
          }, {
            learnedat: "tm68",
            name: "giga impact",
            gen: "V"
          }, {
            learnedat: "tm75",
            name: "swords dance",
            gen: "V"
          }, {
            learnedat: "tm78",
            name: "bulldoze",
            gen: "V"
          }, {
            learnedat: "tm80",
            name: "rock slide",
            gen: "V"
          }, {
            learnedat: "tm82",
            name: "dragon tail",
            gen: "V"
          }, {
            learnedat: "tm87",
            name: "swagger",
            gen: "V"
          }, {
            learnedat: "tm90",
            name: "substitute",
            gen: "V"
          }, {
            learnedat: "tm94",
            name: "rock smash",
            gen: "V"
          }, {
            learnedat: "hm01",
            name: "cut",
            gen: "V"
          }, {
            learnedat: "hm02",
            name: "fly",
            gen: "V"
          }, {
            learnedat: "hm04",
            name: "strength",
            gen: "V"
          }],
          egg: [{
            name: "belly drum",
            gen: "V"
          }, {
            name: "ancientpower",
            gen: "V"
          }, {
            name: "bite",
            gen: "V"
          }, {
            name: "outrage",
            gen: "V"
          }, {
            name: "beat up",
            gen: "V"
          }, {
            name: "dragon dance",
            gen: "V"
          }, {
            name: "crunch",
            gen: "V"
          }, {
            name: "dragon rush",
            gen: "V"
          }, {
            name: "metal claw",
            gen: "V"
          }, {
            name: "flare blitz",
            gen: "V"
          }, {
            name: "counter",
            gen: "V"
          }, {
            name: "dragon pulse",
            gen: "V"
          }, {
            name: "focus punch",
            gen: "V"
          }],
          tutor: [{
            name: "blast burn",
            gen: "V"
          }, {
            name: "fire pledge",
            gen: "V"
          }],
          gen34: [{
            name: "iron tail",
            method: "Gen IV TM23"
          }, {
            name: "secret power",
            method: "Gen IV TM43"
          }, {
            name: "steel wing",
            method: "Gen IV TM47"
          }, {
            name: "roost",
            method: "Gen IV TM51"
          }, {
            name: "endure",
            method: "Gen IV TM58"
          }, {
            name: "captivate",
            method: "Gen IV TM78"
          }, {
            name: "sleep talk",
            method: "Gen IV TM82"
          }, {
            name: "natural gift",
            method: "Gen IV TM83"
          }, {
            name: "defog",
            method: "Gen IV HM05 DPt"
          }, {
            name: "air cutter",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "fire punch",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "fury cutter",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "ominous wind",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "thunderpunch",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "snore",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "swift",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "mudslap",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "twister",
            method: "Move Tutor  PtHGSS"
          }, {
            name: "tailwind",
            method: "Move Tutor  HGSS"
          }, {
            name: "headbutt",
            method: "Move Tutor  HGSS"
          }, {
            name: "dynamicpunch",
            method: "Move Tutor  Emerald"
          }, {
            name: "defense curl",
            method: "Move Tutor  Emerald"
          }, {
            name: "mega punch",
            method: "Move Tutor  FRLG"
          }, {
            name: "mega kick",
            method: "Move Tutor  FRLG"
          }, {
            name: "body slam",
            method: "Move Tutor  FRLG"
          }, {
            name: "doubleedge",
            method: "Move Tutor  FRLG"
          }, {
            name: "seismic toss",
            method: "Move Tutor  FRLG"
          }, {
            name: "mimic",
            method: "Move Tutor  FRLG"
          }]
        },
        damages: {
          normal: "1",
          fire: "0.5",
          water: "2",
          electric: "2",
          grass: "0.25",
          ice: "1",
          fight: "0.5",
          poison: "1",
          ground: "0",
          flying: "1",
          psychic: "1",
          bug: "0.25",
          rock: "4",
          ghost: "1",
          dragon: "1",
          dark: "1",
          steel: "0.5"
        },
        misc: {
          sex: {
            male: "87.5",
            female: "12.5"
          },
          abilities: {
            normal: [
              "Blaze"
            ],
            hidden: [
              "Solar Power"
            ]
          },
          classification: "flame pokemon",
          height: "5’07”",
          weight: "199.5",
          capturerate: "45",
          eggsteps: "5120",
          expgrowth: "1059860",
          happiness: "70",
          evpoints: [
            "3 Sp. Attack Point(s)"
          ],
          fleeflag: "94",
          entreeforestlevel: "36"
        }
      }
  ];
  
  module.exports = pokemonArray;