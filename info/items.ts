import { Item } from "types";

const items: Item[] = [
  {
    "id": "I0LZ",
    "name": "Mystical Materials",
    "koreanname": "미지의 재료",
    "description": "Unknown materials that are not yet revealed",
    "rank": "none",
    "grade": 0,
    "type": "Material",
    "color": "A52A2A",
    "required_by": [
      "Prelude to Demise",
      "Aeon Sphere",
      "Living Flame",
      "Shadow Waltz",
      "Harvester's Mask",
      "Ring of Genesis",
      "Soul Breath",
      "Chains of Torment",
      "Lightbringer",
      "Blazing Sun",
      "Duskblade",
      "Soul Torch",
      "Wings of the Void",
      "Diabolic Mask",
      "Echoes of the Void",
      "Soul Fist",
      "Soulstorm",
      "Divine Aegis",
      "Prophetia, the Forbidden Truth"
    ]
  },
  {
    "id": "I0B9",
    "name": "Tomato",
    "koreanname": "토마토",
    "description": "Tomato. Tasty!",
    "rank": "none",
    "grade": 0,
    "type": "Food",
    "color": "A52A2A",
    "required_by": [
      "Fruit Candy Pouch"
    ],
    "stats": {
      "active": [
        "Increases EXP gain by 15% for 10 minutes"
      ]
    }
  },
  {
    "id": "I0BB",
    "name": "Pumpkin",
    "koreanname": "호박",
    "description": "Pumpkin, good for your health.",
    "rank": "none",
    "grade": 0,
    "type": "Food",
    "color": "A52A2A",
    "stats": {
      "active": [
        "Restores HP & MP by 30%"
      ]
    }
  },
  {
    "id": "I04V",
    "name": "Blue Magic Stone",
    "koreanname": "블루 매직 스톤",
    "description": "Resource used to summon various bosses..",
    "notes": [
      "Where to obtain: Frosty Snowfield"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "required_by": [
      "Key of Sea"
    ]
  },
  {
    "id": "I04U",
    "name": "White Magic Stone",
    "koreanname": "화이트 매직 스톤",
    "description": "Resource used to summon various bosses..",
    "notes": [
      "Where to obtain: Lands of Wallachia"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "required_by": [
      "Key of Storm"
    ]
  },
  {
    "id": "I04X",
    "name": "Red Magic Stone",
    "koreanname": "레드 매직 스톤",
    "description": "Resource used to summon various bosses..",
    "notes": [
      "Where to obtain: Volcanic Lands"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "required_by": [
      "Key of Flame"
    ]
  },
  {
    "id": "I04W",
    "name": "Green Magic Stone",
    "koreanname": "그린 매직 스톤",
    "description": "Resource used to summon various bosses..",
    "notes": [
      "Where to obtain: Fairy Forest"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA"
  },
  {
    "id": "I0IO",
    "name": "Chaos Magic Stone",
    "koreanname": "카오스 매직 스톤",
    "description": "Resource used to summon various bosses..",
    "notes": [
      "Where to obtain: Spirit of Chaos"
    ],
    "dropped_by": [
      "Elemental of Chaos"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "droprate": 0.1,
    "required_by": [
      "Key of Storm",
      "Key of Flame",
      "Key of Sea"
    ]
  },
  {
    "id": "I0RU",
    "name": "Storage Expansion Coupon",
    "koreanname": "창고 확장권",
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "recipe": [
      {
        "Coin of Effort": 2
      }
    ],
    "stats": {
      "active": [
        "Expands your storage by 1 slot",
        "Can only be used up to 6 times"
      ]
    }
  },
  {
    "id": "I01E",
    "name": "Lucky Acorn",
    "koreanname": "행운의 도토리",
    "dropped_by": [
      "Tutorial",
      "Shop"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFAFAF",
    "level": 1,
    "required_by": [
      "Acorn Bomb",
      "Master Icon"
    ],
    "stats": {
      "hpregen": 5
    }
  },
  {
    "id": "I011",
    "name": "Flame Fairy Stone",
    "koreanname": "불의 요정석",
    "dropped_by": [
      "Tutorial"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "required_by": [
      "Acorn Bomb"
    ]
  },
  {
    "id": "I08Q",
    "name": "Pickaxe",
    "koreanname": "녹슨 마법 곡괭이",
    "dropped_by": [
      "Shop"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Pickaxe",
    "color": "AFAFAF",
    "required_by": [
      "Mithril Pickaxe"
    ],
    "stats": {
      "active": [
        "Mining Speed: Once every 10 seconds"
      ]
    }
  },
  {
    "id": "I009",
    "name": "Silver Fang",
    "koreanname": "은빛 송곳니",
    "dropped_by": [
      "Silverback Wolf"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Shared)",
    "color": "AFC3FF",
    "level": 5,
    "droprate": 1,
    "required_by": [
      "Bloody Fang"
    ],
    "stats": {
      "damage": 50,
      "mainstat": 20,
      "critchancepercent": 0.1,
      "passive": [
        "On attack, restores 10 HP"
      ]
    }
  },
  {
    "id": "I00P",
    "name": "Silverfang Vest",
    "koreanname": "은빛가죽 갑옷",
    "dropped_by": [
      "Silverback Wolf"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Armor",
    "color": "AFC3FF",
    "level": 5,
    "droprate": 1,
    "required_by": [
      "Bloody Fang"
    ],
    "stats": {
      "armor": 18,
      "mainstat": 10,
      "hpregen": 3
    }
  },
  {
    "id": "I00D",
    "name": "Troll Axe",
    "koreanname": "트롤 도끼",
    "dropped_by": [
      "Troll"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Shared)",
    "color": "AFAFAF",
    "level": 10,
    "droprate": 0.02,
    "required_by": [
      "Berserker Axe"
    ],
    "stats": {
      "damage": 70,
      "mainstat": 15,
      "attackspeedpercent": -0.15
    }
  },
  {
    "id": "I00S",
    "name": "Troll Battlewear",
    "koreanname": "트롤 전투복",
    "dropped_by": [
      "Troll Shaman"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 10,
    "droprate": 0.03,
    "required_by": [
      "Berserker Axe"
    ],
    "stats": {
      "armor": 20,
      "mainstat": 8,
      "hp": 100
    }
  },
  {
    "id": "I01B",
    "name": "Berserker Mask",
    "koreanname": "광전사의 가면",
    "dropped_by": [
      "Troll Berserker"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFAFAF",
    "level": 10,
    "droprate": 0.03,
    "stats": {
      "armor": 10,
      "mainstat": 5,
      "attackspeedpercent": 0.1
    }
  },
  {
    "id": "tbar",
    "name": "Bag",
    "koreanname": "배낭",
    "description": "A Merchant's necessity. It's too heavy for classes other than Merchant to carry.",
    "dropped_by": [
      "Shop"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "AFAFAF",
    "level": 15,
    "required_by": [
      "Sturdy Bag",
      "Silky Bag"
    ],
    "stats": {
      "damage": 150,
      "str": 20
    }
  },
  {
    "id": "I01G",
    "name": "Fang Necklace",
    "koreanname": "송곳니 목걸이",
    "dropped_by": [
      "Troll Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.5,
    "stats": {
      "mainstat": 10,
      "movespeed": 50
    }
  },
  {
    "id": "I013",
    "name": "Troll Blood",
    "koreanname": "트롤의 피",
    "dropped_by": [
      "Troll Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.5,
    "required_by": [
      "Bloody Fang",
      "Berserker Axe"
    ]
  },
  {
    "id": "I00T",
    "name": "Forest Armor",
    "koreanname": "숲의 갑옷",
    "dropped_by": [
      "Furbolg"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 20,
    "droprate": 0.03,
    "stats": {
      "armor": 25,
      "str": 12,
      "agi": 12
    }
  },
  {
    "id": "I0PY",
    "name": "Ancient Branch",
    "koreanname": "고대의 나뭇가지",
    "description": "An ancient branch used for special summoning rituals.",
    "dropped_by": [
      "Furbolg",
      "Furbolg Tracker",
      "Furbolg Shaman",
      "Furbolg Giant"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "droprate": [
      0.05,
      0.05,
      0.25,
      1
    ],
    "required_by": [
      "Ancient Leaf Circlet"
    ]
  },
  {
    "id": "I01C",
    "name": "Forest Helm",
    "koreanname": "숲의 투구",
    "dropped_by": [
      "Furbolg Tracker"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFAFAF",
    "level": 20,
    "droprate": 0.03,
    "stats": {
      "armor": 12,
      "allstat": 8
    }
  },
  {
    "id": "I01F",
    "name": "Forest Robe",
    "koreanname": "숲의 로브",
    "dropped_by": [
      "Furbolg Shaman"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 20,
    "droprate": 0.09,
    "stats": {
      "armor": 18,
      "int": 18,
      "mp": 100
    }
  },
  {
    "id": "I0DW",
    "name": "Wings of Nature",
    "koreanname": "자연의 날개",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Wings",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.33,
    "required_by": [
      "Wing of Sea"
    ],
    "stats": {
      "allstat": 15,
      "expgainpercent": 0.1,
      "active": [
        "On use, creates a portal that connects to Alfon Village"
      ]
    }
  },
  {
    "id": "I016",
    "name": "Ancient Leaf",
    "koreanname": "고대의 나뭇잎",
    "color": "FFFFFF",
    "droprate": 0.33,
    "rank": "[Magic]",
    "grade": 0,
    "type": "Material",
    "dropped_by": [
      "Protector of Nature"
    ],
    "required_by": [
      "Ancient Leaf Circlet"
    ]
  },
  {
    "id": "I00B",
    "name": "Ancient Tree Sword",
    "koreanname": "고대 나무 검",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.33,
    "stats": {
      "damage": 200,
      "mainstat": 30,
      "active": [
        "On attack, 8% chance to activate Force Blast",
        "Deals 500 magic damage in an AoE"
      ]
    }
  },
  {
    "id": "I00E",
    "name": "Ancient Tree Staff",
    "koreanname": "고대 나무 지팡이",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.33,
    "stats": {
      "damage": 140,
      "int": 40,
      "active": [
        "On use, activates Chain Lightning",
        "Deals 4000 magic damage up to 6 targets",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I0AJ",
    "name": "Ancient Tree Bow",
    "koreanname": "고대 나무 활",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.33,
    "stats": {
      "damage": 170,
      "agi": 35,
      "active": [
        "On attack, chance to activate Force Blast",
        "Deals 500 magic damage in an AoE"
      ]
    }
  },
  {
    "id": "I00I",
    "name": "Ancient Tree Rifle",
    "koreanname": "고대 나무 라이플",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFC3FF",
    "level": 20,
    "droprate": 0.33,
    "stats": {
      "damage": 170,
      "agi": 35,
      "active": [
        "On attack, chance to activate Force Blast",
        "Deals 500 magic damage in an AoE"
      ]
    }
  },
  {
    "id": "pclr",
    "name": "Green Crystal Golem Token",
    "koreanname": "그린 크리스탈 골렘 토큰",
    "dropped_by": [
      "Protector of Nature"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.02,
    "required_by": [
      "Rainbow Crystal Golem Token"
    ]
  },
  {
    "id": "I02M",
    "name": "Deep Sword",
    "koreanname": "딥 소드",
    "dropped_by": [
      "White Murloc",
      "Green Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "damage": 150,
      "mainstat": 20
    }
  },
  {
    "id": "I038",
    "name": "Deep Staff",
    "koreanname": "딥 스태프",
    "dropped_by": [
      "White Murloc",
      "Orange Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "damage": 90,
      "int": 30
    }
  },
  {
    "id": "I09B",
    "name": "Deep Bow",
    "koreanname": "딥 보우",
    "dropped_by": [
      "Green Murloc",
      "Orange Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "damage": 120,
      "agi": 25
    }
  },
  {
    "id": "I0EU",
    "name": "Deep Rifle",
    "koreanname": "딥 라이플",
    "dropped_by": [
      "Green Murloc",
      "Orange Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "damage": 120,
      "agi": 25
    }
  },
  {
    "id": "I03B",
    "name": "Deep Armor",
    "koreanname": "딥 아머",
    "dropped_by": [
      "Blue Murloc",
      "Purple Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "armor": 32,
      "str": 17,
      "agi": 17
    }
  },
  {
    "id": "I039",
    "name": "Deep Robe",
    "koreanname": "딥 로브",
    "dropped_by": [
      "Blue Murloc",
      "Purple Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "armor": 22,
      "int": 22,
      "mp": 150
    }
  },
  {
    "id": "I03C",
    "name": "Deep Helm",
    "koreanname": "딥 헬멧",
    "dropped_by": [
      "Blue Murloc",
      "Purple Murloc"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "headwear",
    "color": "AFAFAF",
    "level": 30,
    "droprate": 0.01,
    "stats": {
      "armor": 15,
      "mainstat": 10
    }
  },
  {
    "id": "vddl",
    "name": "Hard Turtle Shell",
    "koreanname": "터틀의 단단한 등껍질",
    "dropped_by": [
      "Dragon Turtle"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Wings",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 0.4,
    "required_by": [
      "Sturdy Bag"
    ],
    "stats": {
      "armor": 15,
      "hp": 500,
      "hpregen": 10
    }
  },
  {
    "id": "I0Q3",
    "name": "Black Pearl",
    "koreanname": "흑진주",
    "dropped_by": [
      "Dragon Turtle"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.4,
    "required_by": [
      "Silky Bag",
      "Wing of Sea"
    ]
  },
  {
    "id": "srrc",
    "name": "Magical Horn",
    "koreanname": "마법의 뿔피리",
    "description": "You can hear a rumbling inside.. maybe you should blow it.",
    "dropped_by": [
      "Dragon Turtle",
      "Purple Murloc",
      "Blue Murloc",
      "Orange Murloc",
      "Green Murloc",
      "White Murloc"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "notes": [
      "Droprate increases every 5 minutes that it does not drop"
    ],
    "stats": {
      "active": [
        "Summons a field boss"
      ]
    }
  },
  {
    "id": "pmna",
    "name": "Shell Sword",
    "koreanname": "쉘 소드",
    "dropped_by": [
      "King Crab"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "required_by": [
      "Parasitic Sword"
    ],
    "stats": {
      "damage": 400,
      "armor": 15,
      "str": 30,
      "agi": 40,
      "passive": [
        "25% chance to deal splash damage on attack"
      ]
    }
  },
  {
    "id": "spsh",
    "name": "Crab Armor",
    "koreanname": "크랩 아머",
    "dropped_by": [
      "King Crab"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Armor",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "required_by": [
      "Infected Crab Armor"
    ],
    "stats": {
      "armor": 40,
      "str": 25,
      "agi": 20,
      "passive": [
        "Reflects 300 magic damage when attacked"
      ]
    }
  },
  {
    "id": "ciri",
    "name": "Sea Jewel",
    "koreanname": "바다의 진주",
    "dropped_by": [
      "King Crab"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "required_by": [
      "Wing of Sea"
    ],
    "stats": {
      "allstat": 15,
      "mpregen": 5,
      "active": [
        "Calls a refreshing wave upon use",
        "Heals allies for 3000 HP",
        "Deals (MAIN STAT X 3.75) + 500 magic damage to enemies",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0DS",
    "name": "Ivory Cane",
    "koreanname": "상아 지팡이",
    "dropped_by": [
      "Walrus"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "stats": {
      "damage": 280,
      "int": 60,
      "attackspeedpercent": 0.1,
      "passive": [
        "On attack, deals 300 bonus magic damage"
      ]
    }
  },
  {
    "id": "wneg",
    "koreanname": "터스크 헌터",
    "name": "Tusk Hunter",
    "dropped_by": [
      "Walrus"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "required_by": [
      "Beast Hunter"
    ],
    "stats": {
      "damage": 340,
      "agi": 50,
      "int": 25,
      "attackspeedpercent": 0.15
    }
  },
  {
    "id": "I0DT",
    "name": "Walrus Skin Cloak",
    "koreanname": "코끼리 가죽 망토",
    "dropped_by": [
      "Walrus"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Wings",
    "color": "AFC3FF",
    "level": 30,
    "droprate": 1,
    "required_by": [
      "Wing of Sea"
    ],
    "stats": {
      "allstat": 20,
      "hpregen": 5
    }
  },
  {
    "id": "I03K",
    "name": "Frosty Sword",
    "koreanname": "혹한의 검",
    "dropped_by": [
      "Ice Troll"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "damage": 250,
      "mainstat": 30
    }
  },
  {
    "id": "I03H",
    "name": "Frosty Staff",
    "koreanname": "혹한의 지팡이",
    "dropped_by": [
      "Ice Troll"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "damage": 150,
      "int": 45
    }
  },
  {
    "id": "I09H",
    "name": "Frosty Bow",
    "koreanname": "혹한의 활",
    "dropped_by": [
      "Ice Troll Priest"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "damage": 200,
      "agi": 38
    }
  },
  {
    "id": "I0EW",
    "name": "Frosty Rifle",
    "koreanname": "혹한의 라이플",
    "dropped_by": [
      "Ice Troll Priest"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "damage": 200,
      "agi": 38
    }
  },
  {
    "id": "I03I",
    "name": "Frosty Armor",
    "koreanname": "혹한의 갑옷",
    "dropped_by": [
      "Polar Bear"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "armor": 40,
      "str": 24,
      "agi": 24
    }
  },
  {
    "id": "I03F",
    "name": "Frosty Robe",
    "koreanname": "혹한의 로브",
    "dropped_by": [
      "Polar Bear"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "armor": 30,
      "int": 30,
      "mp": 200
    }
  },
  {
    "id": "I03L",
    "name": "Frosty Helm",
    "koreanname": "혹한의 투구",
    "dropped_by": [
      "Polar Bear"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFAFAF",
    "level": 40,
    "droprate": 0.01,
    "stats": {
      "armor": 22,
      "mainstat": 15
    }
  },
  {
    "id": "rnsp",
    "name": "Bear Fur Cloak",
    "koreanname": "곰가죽 망토",
    "dropped_by": [
      "Polar Bear Giant"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Wings",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 0.4,
    "required_by": [
      "Precious Wind-Protection Clothing"
    ],
    "stats": {
      "allstat": 25,
      "skilldamagepercent": 0.05
    }
  },
  {
    "id": "I08O",
    "name": "Warm Fur",
    "koreanname": "따뜻한 털가죽",
    "dropped_by": [
      "Polar Bear Giant"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.4,
    "required_by": [
      "Beast Hunter",
      "Very Sturdy Bag",
      "Very Silky Bag",
      "Precious Wind-Protection Clothing"
    ]
  },
  {
    "id": "ankh",
    "name": "Frozen Crystal",
    "koreanname": "프로즌 크리스탈",
    "description": "I want to break it!",
    "dropped_by": [
      "Polar Bear Giant",
      "Polar Bear",
      "Ice Troll Priest",
      "Ice Troll"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "notes": [
      "Droprate increases every 5 minutes that it does not drop"
    ],
    "stats": {
      "active": [
        "Summons a field boss"
      ]
    }
  },
  {
    "id": "prvt",
    "name": "Icicle Bow",
    "koreanname": "아이시클 보우",
    "dropped_by": [
      "Mammoth"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "stats": {
      "damage": 500,
      "agi": 75,
      "attackspeedpercent": 0.2,
      "passive": [
        "Each basic attack deals an additional 200~400 magic damage and applies slow",
        "Slow lasts for 0.75 seconds"
      ]
    }
  },
  {
    "id": "lgdh",
    "name": "Glacier Guard",
    "koreanname": "글래시어 가드",
    "dropped_by": [
      "Mammoth"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "stats": {
      "armor": 30,
      "str": 30,
      "agi": 25,
      "passive": [
        "10% chance to freeze nearby enemies on being hit for 1.5 seconds and deal 3000 magic damage"
      ]
    }
  },
  {
    "id": "ssil",
    "name": "Snowman Pendant",
    "koreanname": "스노우맨 펜던트",
    "dropped_by": [
      "Mammoth"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "stats": {
      "int": 30,
      "hp": 500,
      "skilldamagepercent": 0.04,
      "active": [
        "Summons Snowman on use",
        "Deals (INT X 2.25) + 500 magic damage upon landing",
        "Snowman's attack applies a slow effect for 0.75 seconds",
        "Snowman's attack has a 15% chance to deal (INT X 0.475) + 250 magic damage",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0DU",
    "name": "King Kong's Claws",
    "koreanname": "킹콩의 손톱",
    "dropped_by": [
      "King Kong"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "required_by": [
      "Maw of Monster"
    ],
    "stats": {
      "damage": 550,
      "str": 55,
      "agi": 30,
      "skilldamagepercent": 0.05,
      "passive": [
        "On consecutively attacking the same target, deals 400 bonus magic damage"
      ]
    }
  },
  {
    "id": "hval",
    "name": "Wind-Protection Clothing",
    "koreanname": "바람막이 털옷",
    "dropped_by": [
      "King Kong"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Armor",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "required_by": [
      "Precious Wind-Protection Clothing",
      "Very Silky Bag"
    ],
    "stats": {
      "armor": 40,
      "int": 45,
      "skilldamagepercent": 0.03,
      "passive": [
        "Allows you to dodge fatal damage once every 90 seconds",
        "Cannot be dropped during cooldown"
      ]
    }
  },
  {
    "id": "I0DV",
    "name": "Meat Bag",
    "koreanname": "고기 주머니",
    "dropped_by": [
      "King Kong"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFC3FF",
    "level": 40,
    "droprate": 1,
    "required_by": [
      "Beast Hunter",
      "Very Sturdy Bag"
    ],
    "stats": {
      "allstat": 25,
      "hp": 500,
      "mp": 500,
      "passive": [
        "On use, consumes some meat from the bag",
        "Restores 200 HP and MP and increase ATK SPD by 15%"
      ]
    }
  },
  {
    "id": "I044",
    "name": "Sword of Darkness",
    "koreanname": "암흑의 검",
    "dropped_by": [
      "Duchy of Wallachia Soldier",
      "Duchy of Wallachia Cavalry"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "damage": 400,
      "mainstat": 45
    }
  },
  {
    "id": "I0EZ",
    "name": "Rifle of Darkness",
    "koreanname": "암흑의 소총",
    "dropped_by": [
      "Duchy of Wallachia Soldier",
      "Duchy of Wallachia Cavalry"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "damage": 320,
      "agi": 60
    }
  },
  {
    "id": "I045",
    "name": "Staff of Darkness",
    "koreanname": "암흑의 지팡이",
    "dropped_by": [
      "Duchy of Wallachia Archer",
      "Duchy of Wallachia Cavalry"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "damage": 240,
      "int": 70
    }
  },
  {
    "id": "I09J",
    "name": "Bow of Darkness",
    "koreanname": "암흑의 활",
    "dropped_by": [
      "Duchy of Wallachia Archer",
      "Duchy of Wallachia Cavalry"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "damage": 320,
      "agi": 60
    }
  },
  {
    "id": "I040",
    "name": "Armor of Darkness",
    "koreanname": "암흑의 갑옷",
    "dropped_by": [
      "Duchy of Wallachia Guardian"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "armor": 50,
      "str": 32,
      "agi": 32
    }
  },
  {
    "id": "I041",
    "name": "Robe of Darkness",
    "koreanname": "암흑의 로브",
    "dropped_by": [
      "Duchy of Wallachia Guardian"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "armor": 38,
      "int": 40
    }
  },
  {
    "id": "I046",
    "name": "Helm of Darkness",
    "koreanname": "암흑의 투구",
    "dropped_by": [
      "Duchy of Wallachia Guardian"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 50,
    "droprate": 0.01,
    "stats": {
      "armor": 30,
      "mainstat": 20
    }
  },
  {
    "id": "sor1",
    "name": "Helm of the Dead",
    "koreanname": "망자의 투구",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Hood of Reaper"
    ],
    "stats": {
      "armor": 40,
      "allstat": 25,
      "mpregen": 15
    }
  },
  {
    "id": "I05R",
    "name": "Raven Sword",
    "koreanname": "칠흑의 검",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 50,
    "droprate": 0.25,
    "stats": {
      "damage": 800,
      "mainstat": 65,
      "active": [
        "On attack, 10% chance to activate Dark Lightning"
      ]
    }
  },
  {
    "id": "I05S",
    "name": "Raven Staff",
    "koreanname": "칠흑의 지팡이",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFC3FF",
    "level": 50,
    "droprate": 0.25,
    "stats": {
      "damage": 500,
      "int": 100,
      "active": [
        "On attack, 10% chance to activate Dark Lightning"
      ]
    }
  },
  {
    "id": "I09G",
    "name": "Raven Bow",
    "koreanname": "칠흑의 활",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFC3FF",
    "level": 50,
    "droprate": 0.25,
    "stats": {
      "damage": 650,
      "agi": 85,
      "passive": [
        "10% Chance to amplify attack damage by 2x for 5 seconds on attack"
      ]
    }
  },
  {
    "id": "I0F0",
    "name": "Raven Rifle",
    "koreanname": "칠흑의 활",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFC3FF",
    "level": 50,
    "droprate": 0.25,
    "stats": {
      "damage": 650,
      "agi": 85,
      "passive": [
        "10% Chance to amplify attack damage by 2x for 5 seconds on attack"
      ]
    }
  },
  {
    "id": "sand",
    "name": "Token of Death",
    "koreanname": "죽음의 토큰",
    "dropped_by": [
      "Wallachia Death Knight Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "mnst",
    "name": "Cursed Mask",
    "koreanname": "저주받은 가면",
    "description": "Mask cursed by Wallachia",
    "dropped_by": [
      "Wallachia Death Knight Lord",
      "Duchy of Wallachia Guardian",
      "Duchy of Wallachia Cavalry",
      "Duchy of Wallachia Archer",
      "Duchy of Wallachia Soldier"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "notes": [
      "Droprate increases every 5 minutes that it does not drop",
      "Drop cooldown: 4 minutes"
    ],
    "stats": {
      "active": [
        "Summons a field boss"
      ]
    }
  },
  {
    "id": "I0BQ",
    "name": "Blade of Requiem",
    "koreanname": "진혼검",
    "dropped_by": [
      "Blood Wraith"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Tepethia, the Crimson Sword of Requiem",
      "Bahanar, the Sword of Illusion",
      "Sanguiel, the Bloodspear of Requiem"
    ],
    "stats": {
      "damage": 1300,
      "mainstat": 125,
      "attackspeedpercent": 0.25,
      "critmultiplier": 0.15,
      "passive": [
        "On every 14th attack, activates Unleash",
        "Red Wrath: deals (MAIN STAT X 3.5) magic splash damage",
        "Green Wrath: reduces target MOV and ATK SPD by 66% for 3 seconds, deals (MAIN STAT X 1.9) magic splash damage, and stuns non-boss units for 0.25 seconds",
        "Blue Wrath: heals user for (MAIN STAT + 300) HP and (current MP + (max MP X 15%)) MP"
      ]
    }
  },
  {
    "id": "I0CB",
    "name": "Crossbow of Requiem",
    "koreanname": "진혼궁",
    "dropped_by": [
      "Blood Wraith"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Flame Explosion",
      "Everfrostbane"
    ],
    "stats": {
      "damage": 1300,
      "agi": 165,
      "attackspeedpercent": 0.15,
      "skilldamagepercent": 0.04,
      "passive": [
        "Activates Unleash every 14th attack",
        "Red Wrath: deals (MAIN STAT X 3.5) magic splash damage",
        "Green Wrath: reduces target MOV and ATK SPD by 66% for 3 seconds, deals (MAIN STAT X 1.9) magic splash damage, and stuns non-boss units for 0.25 seconds",
        "Blue Wrath: heals user for (MAIN STAT + 300) HP and (current MP + (max MP X 15%)) MP"
      ]
    }
  },
  {
    "id": "I0BR",
    "name": "Blood Orb",
    "koreanname": "블러드 오브",
    "dropped_by": [
      "Blood Wraith",
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Shared)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "True Blood Cannon Tepes",
      "Aglaia, the Spear of Heavenly Flows",
      "Bloody Hatred",
      "Soul Drinker"
    ],
    "stats": {
      "int": 150,
      "hp": 900,
      "skilldamagepercent": 0.04,
      "passive": [
        "On attack, drains target's HP"
      ],
      "active": [
        "On use, increases your skill damage by 10% and life steal by 6% for 9 seconds"
      ]
    }
  },
  {
    "id": "I0BS",
    "name": "Cape of the Dead",
    "koreanname": "망자의 옷",
    "dropped_by": [
      "Blood Wraith"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Tunic of the Wraith",
      "Robe of the Necromancer",
      "Wings of Fury"
    ],
    "stats": {
      "armor": 60,
      "mainstat": 95,
      "skilldamagepercent": 0.03,
      "critchancepercent": 0.03,
      "passive": [
        "If HP drops below 15%, gain 90% damage reduction for 3 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0BT",
    "name": "Ring of the Dead",
    "koreanname": "망자의 반지",
    "dropped_by": [
      "Blood Wraith",
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Accessory",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Ring of the Reaper",
      "Soul of the Dead",
      "Ring of Composure"
    ],
    "stats": {
      "agi": 85,
      "int": 100,
      "attackspeedpercent": 0.15,
      "skilldamagepercent": 0.05,
      "passive": [
        "Periodically drains HP from nearby enemies (5 HP from mobs and 30 HP bosses)"
      ]
    }
  },
  {
    "id": "I0C3",
    "name": "Mask of Blood",
    "koreanname": "피의 가면",
    "dropped_by": [
      "Blood Wraith",
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "headwear",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Death Visage"
    ],
    "stats": {
      "armor": 40,
      "hp": 450,
      "skilldamagepercent": 0.04,
      "dtpercent": 0.06,
      "active": [
        "On use, activates Bloodlust",
        "Increases MAIN STAT by 120, 100% bonus ATK SPD, and gives 30% life steal for 8 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "rspl",
    "name": "Demon Hunter",
    "koreanname": "악마 사냥꾼",
    "dropped_by": [
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Devil Blaster"
    ],
    "stats": {
      "damage": 3000,
      "attackspeedpercent": 0.3
    }
  },
  {
    "id": "rhe1",
    "name": "Stone Plates",
    "koreanname": "돌갑주",
    "dropped_by": [
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Bloodstone Plates"
    ],
    "stats": {
      "armor": 130,
      "str": 75,
      "int": 75,
      "dtpercent": -0.05,
      "active": [
        "On use, activates Stone Form",
        "Grants the user with an 800 shield for 2 seconds and 400 bonus HP and MP regen",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "rspd",
    "name": "Bat Wings",
    "koreanname": "박쥐 날개",
    "dropped_by": [
      "Wallachia Monstrosity"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Wings",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.25,
    "required_by": [
      "Hungry Bat Wings",
      "Horn of Devil"
    ],
    "stats": {
      "agi": 60,
      "int": 60,
      "hp": 600,
      "passive": [
        "Upon moving 400 distance, activates Drain on next attack",
        "Deals (33% ATK DMG) pure damage",
        "Heals 6% max HP",
        "Cooldown: 0.125 seconds"
      ]
    }
  },
  {
    "id": "I05C",
    "name": "Sword of Flame",
    "koreanname": "염화의 검",
    "dropped_by": [
      "Lava Hatchling",
      "Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "damage": 600,
      "mainstat": 60
    }
  },
  {
    "id": "I05D",
    "name": "Staff of Flame",
    "koreanname": "염화의 지팡이",
    "dropped_by": [
      "Lava Hatchling",
      "Lava Worm"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "damage": 400,
      "int": 95
    }
  },
  {
    "id": "I09L",
    "name": "Bow of Flame",
    "koreanname": "염화의 활",
    "dropped_by": [
      "Lava Spawn",
      "Lava Worm"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "damage": 500,
      "agi": 80
    }
  },
  {
    "id": "I0F1",
    "name": "Rifle of Flame",
    "koreanname": "염화의 소총",
    "dropped_by": [
      "Lava Spawn",
      "Lava Worm"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "damage": 500,
      "agi": 80
    }
  },
  {
    "id": "I049",
    "name": "Armor of Flame",
    "koreanname": "염화의 갑옷",
    "dropped_by": [
      "Lava Ancient"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "armor": 60,
      "str": 40,
      "agi": 40
    }
  },
  {
    "id": "I059",
    "name": "Robe of Flame",
    "koreanname": "염화의 로브",
    "dropped_by": [
      "Lava Ancient"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "armor": 45,
      "int": 50
    }
  },
  {
    "id": "I05F",
    "name": "Helm of Flame",
    "koreanname": "염화의 투구",
    "dropped_by": [
      "Lava Ancient"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.01,
    "stats": {
      "armor": 35,
      "mainstat": 25
    }
  },
  {
    "id": "dsum",
    "name": "Flame Cloak",
    "koreanname": "화염의 망토",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Wings",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.25,
    "required_by": [
      "Flame Soul",
      "Cape of Corrupt Flame"
    ],
    "stats": {
      "str": 70,
      "agi": 50,
      "int": 50,
      "passive": [
        "Deals 750 magic damage per second to nearby enemies"
      ]
    }
  },
  {
    "id": "I05U",
    "name": "Sword of Crimson Flame",
    "koreanname": "홍염의 검",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.25,
    "stats": {
      "damage": 1050,
      "mainstat": 85,
      "active": [
        "On attack, 8% chance to activate Blessing of Flame",
        "Increases damage by 500 and main stat by 50 for 5 seconds"
      ]
    }
  },
  {
    "id": "I05W",
    "name": "Staff of Crimson Flame",
    "koreanname": "홍염의 지팡이",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.25,
    "stats": {
      "damage": 650,
      "int": 130,
      "passive": [
        "On attack, 8% chance to activate Blessing of Flame",
        "Increases damage by 500 and MAIN STAT by 50 for 5 seconds"
      ]
    }
  },
  {
    "id": "I09E",
    "name": "Bow of Crimson Flame",
    "koreanname": "홍염의 활",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.25,
    "stats": {
      "damage": 850,
      "agi": 105,
      "passive": [
        "On attack, 8% chance to activate Blessing of Flame",
        "Increases damage by 500 and MAIN STAT by 50 for 5 seconds"
      ]
    }
  },
  {
    "id": "I0F4",
    "name": "Rifle of Crimson Flame",
    "koreanname": "홍염의 소총",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.25,
    "stats": {
      "damage": 850,
      "agi": 105,
      "passive": [
        "On attack, 8% chance to activate Blessing of Flame",
        "Increases damage by 500 and MAIN STAT by 50 for 5 seconds"
      ]
    }
  },
  {
    "id": "I0G5",
    "name": "Ragnaar Icon",
    "koreanname": "라그나스 아이콘",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0075,
    "required_by": [
      "Wings of Death Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "hpregen": 12
    }
  },
  {
    "id": "nspi",
    "name": "Flame Token",
    "koreanname": "홍염의 토큰",
    "dropped_by": [
      "Ruler of Flames Ragnaar"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "I0CF",
    "name": "Nightmare Rod",
    "koreanname": "나이트메어 로드",
    "description": "Staff that can be used to start the Ritual of Nightmare",
    "dropped_by": [
      "Ruler of Flames Ragnaar",
      "Lava Ancient",
      "Lava Worm",
      "Lava Spawn",
      "Lava Hatchling"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "notes": [
      "Droprate increases every 5 minutes that it does not drop",
      "Drop cooldown: 4 minutes"
    ],
    "stats": {
      "active": [
        "Summons a field boss",
        "May be used without Magic Stones to summon Evil Lava Spawn",
        "If used together with Red Magic Stone x8, summons a powerful boss"
      ]
    }
  },
  {
    "id": "shcw",
    "name": "Flamereaver",
    "koreanname": "플레임리버",
    "dropped_by": [
      "Evil Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.20,
    "required_by": [
      "Leoreus, the Greatsword of Explosion"
    ],
    "stats": {
      "damage": 1650,
      "str": 130,
      "skilldamagepercent": 0.03,
      "passive": [
        "On attack, 2% chance to deal STR X 10 magic damage"
      ]
    }
  },
  {
    "id": "rnec",
    "name": "Blaster",
    "dropped_by": [
      "Evil Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.20,
    "required_by": [
      "Monster Blaster"
    ],
    "stats": {
      "damage": 1400,
      "agi": 150,
      "passive": [
        "15% Chance to activate Explosion on attack",
        "Deals (AGI X 1.5) magic damage in an AoE"
      ]
    },
    "koreanname": "블래스터"
  },
  {
    "id": "bfhr",
    "name": "Helm of Passion",
    "koreanname": "열정의 투구",
    "dropped_by": [
      "Evil Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.20,
    "required_by": [
      "Helm of Battle"
    ],
    "stats": {
      "armor": 50,
      "mainstat": 30,
      "allstat": 30,
      "passive": [
        "Increases nearby allies' movement speed by 20% and ATK SPD by 10%"
      ]
    }
  },
  {
    "id": "stwa",
    "name": "Crimson Stone",
    "koreanname": "적석",
    "dropped_by": [
      "Evil Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Accessory",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.20,
    "required_by": [
      "Staff of Void",
      "Crimson Pumpkin Rod",
      "Hungry Bat Wings"
    ],
    "stats": {
      "str": 70,
      "int": 90,
      "passive": [
        "On skill cast, increases HP regen by 90, skill damage by 6% for 3 seconds"
      ]
    }
  },
  {
    "id": "blba",
    "name": "A Small Piece of Wrath",
    "koreanname": "작은 분노의 조각",
    "dropped_by": [
      "Evil Lava Spawn"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Accessory",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.20,
    "required_by": [
      "Crimson Reaper",
      "Hellflame",
      "Grim Visage"
    ],
    "stats": {
      "str": 90,
      "agi": 75,
      "critmultiplier": 0.2,
      "passive": [
        "12.5% Chance to activate Wrath on skill cast",
        "Deals (MAIN STAT X 6) magic damage in an AoE and stuns for 1 second"
      ]
    }
  },
  {
    "id": "I0BU",
    "name": "Armor of Deep Sea",
    "koreanname": "심해의 갑옷",
    "dropped_by": [
      "Murloc Giant",
      "Tide Caller"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 70,
    "droprate": 0.01,
    "stats": {
      "armor": 70,
      "str": 50,
      "agi": 50
    }
  },
  {
    "id": "I0BV",
    "name": "Robe of Deep Sea",
    "koreanname": "심해의 로브",
    "dropped_by": [
      "Murloc Giant",
      "Tide Caller"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 70,
    "droprate": 0.01,
    "stats": {
      "armor": 50,
      "int": 75
    }
  },
  {
    "id": "I0BW",
    "name": "Helm of Deep Sea",
    "koreanname": "심해의 투구",
    "dropped_by": [
      "Sea Guardian"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFAFAF",
    "level": 70,
    "droprate": 0.01,
    "stats": {
      "armor": 40,
      "mainstat": 40
    }
  },
  {
    "id": "I0BZ",
    "name": "Horn of Deep Sea",
    "koreanname": "심해의 뿔피리",
    "description": "Horn passed down from the legends.. you can't blow it though.",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.125,
    "required_by": [
      "Tentacle Horn"
    ],
    "stats": {
      "allstat": 80,
      "hp": 750,
      "mp": 750,
      "skilldamagepercent": 0.05
    }
  },
  {
    "id": "I0BN",
    "name": "Sword of Deep Sea",
    "koreanname": "심해의 검",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 70,
    "droprate": 0.25,
    "stats": {
      "damage": 1250,
      "mainstat": 100,
      "passive": [
        "On attack, 20% chance to activate Abyss Tentacle",
        "Deals (0.01 X ATK DMG X 2) splash damage"
      ]
    }
  },
  {
    "id": "I0BP",
    "name": "Staff of Deep Sea",
    "koreanname": "심해의 지팡이",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFC3FF",
    "level": 70,
    "droprate": 0.25,
    "required_by": [
      "Staff of Tentacles"
    ],
    "stats": {
      "damage": 750,
      "int": 160,
      "passive": [
        "On attack, 20% chance to activate Abyss Tentacle",
        "Deals (0.01 X ATK DMG X 2) splash damage"
      ]
    }
  },
  {
    "id": "I0BO",
    "name": "Bow of Deep Sea",
    "koreanname": "심해의 활",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFC3FF",
    "level": 70,
    "droprate": 0.25,
    "stats": {
      "damage": 1000,
      "agi": 130,
      "passive": [
        "On attack, 20% chance to activate Abyss Tentacle",
        "Deals (0.01 X ATK DMG X 2) splash damage"
      ]
    }
  },
  {
    "id": "I0F6",
    "name": "Rifle of Deep Sea",
    "koreanname": "심해의 소총",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFC3FF",
    "level": 70,
    "droprate": 0.25,
    "stats": {
      "damage": 1000,
      "agi": 130,
      "passive": [
        "On attack, 20% chance to activate Abyss Tentacle",
        "Deals (0.01 X ATK DMG X 2) splash damage"
      ]
    }
  },
  {
    "id": "I0BY",
    "name": "Infected Tentacle",
    "koreanname": "감염된 촉수",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Parasitic Sword",
      "Staff of Tentacles",
      "Infected Crab Armor",
      "Dragon Blaster",
      "Tentacle Horn",
      "Ring of Deep Darkness",
      "Soul Drinker",
      "Hungry Bat Wings"
    ]
  },
  {
    "id": "I0G6",
    "name": "Tentacle Lord Icon",
    "koreanname": "촉수 지배자 아이콘",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0075,
    "required_by": [
      "Spider Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "mpregen": 6
    }
  },
  {
    "id": "gvsm",
    "name": "Tentacle Token",
    "koreanname": "촉수의 토큰",
    "dropped_by": [
      "Tentacle Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "pnvu",
    "name": "Orb of the Deep Sea",
    "koreanname": "심해의 보옥",
    "description": "Treasure to be sacrificed at the altars of the deep sea",
    "dropped_by": [
      "Tentacle Lord",
      "Sea Guardian",
      "Tide Caller",
      "Murloc Giant"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "notes": [
      "Droprate increases each 5 minutes that it does not drop, 100% from Tentacle Lord",
      "Drop cooldown: 4 minutes"
    ],
    "stats": {
      "active": [
        "Summons a field boss",
        "May be used without Magic Stones to summon Sea Guardian",
        "Dedicating 4 Green Magic Stones, and 4 Blue Magic Stones will summon a much stronger boss"
      ]
    }
  },
  {
    "id": "I0OS",
    "name": "Trident",
    "koreanname": "삼지창",
    "dropped_by": [
      "Guardian of Sea"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Shared)",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.20,
    "stats": {
      "damage": 2750,
      "mainstat": 200,
      "skilldamagepercent": 0.05,
      "passive": [
        "On skill cast, empowers next 3 attacks"
      ]
    }
  },
  {
    "id": "I0OT",
    "name": "Tidal Robe",
    "koreanname": "타이달 로브",
    "dropped_by": [
      "Guardian of Sea"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.20,
    "stats": {
      "armor": 110,
      "int": 140,
      "mdpercent": 0.075,
      "passive": [
        "On being damaged, restores 1200 HP over 5 seconds"
      ]
    }
  },
  {
    "id": "I0OU",
    "name": "Droplet Orb",
    "koreanname": "물방울 보주",
    "dropped_by": [
      "Guardian of Sea"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.20,
    "stats": {
      "allstat": 100,
      "hpregen": 20,
      "mpregen": 20,
      "affinityiwpercent": 0.05,
      "active": [
        "On use, creates a Droplet Barrier for 6 seconds",
        "Increases the user's MAGIC DEF by 90%",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0OV",
    "name": "Wings of Purification",
    "koreanname": "정화의 날개",
    "dropped_by": [
      "Guardian of Sea"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Wings",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.20,
    "required_by": [
      "Guardian Angel"
    ],
    "stats": {
      "allstat": 130,
      "movespeed": 50,
      "passive": [
        "Restores nearby allies' HP by 1000 every 5 seconds"
      ]
    }
  },
  {
    "id": "I0A3",
    "name": "Armor of Corruption",
    "koreanname": "타락의 갑옷",
    "dropped_by": [
      "Stone Golem",
      "Duchy of Wallachia Assassin"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 80,
    "droprate": 0.01,
    "stats": {
      "armor": 80,
      "str": 65,
      "agi": 65
    }
  },
  {
    "id": "I0A4",
    "name": "Robe of Corruption",
    "koreanname": "타락의 로브",
    "dropped_by": [
      "Stone Golem",
      "Duchy of Wallachia Assassin"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Armor",
    "color": "AFAFAF",
    "level": 80,
    "droprate": 0.01,
    "stats": {
      "armor": 50,
      "int": 90
    }
  },
  {
    "id": "I0A1",
    "name": "Helm of Corruption",
    "koreanname": "타락의 투구",
    "dropped_by": [
      "Solid Golem",
      "Duchy of Wallachia Apostle"
    ],
    "rank": "[Normal]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFAFAF",
    "level": 80,
    "droprate": 0.01,
    "stats": {
      "armor": 48,
      "mainstat": 45
    }
  },
  {
    "id": "I0AA",
    "name": "Corrupt Crystal Fragment",
    "koreanname": "타락한 크리스탈 조각",
    "description": "A shard that emanates a powerful evil aura",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.125,
    "required_by": [
      "Maw of Monster",
      "Corrupt Crystal Wings",
      "Bullet of Ruin",
      "Ring of Deep Darkness",
      "Azathos, the Pipe of Chaos",
      "Cape of Corrupt Flame"
    ],
    "stats": {
      "allstat": 105,
      "hpregen": 30,
      "mpregen": 12,
      "skilldamagepercent": 0.06
    }
  },
  {
    "id": "I0A7",
    "name": "Sword of Corruption",
    "koreanname": "타락의 검",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 80,
    "droprate": 0.25,
    "stats": {
      "damage": 1500,
      "mainstat": 120,
      "passive": [
        "On attack, 10% chance to activate Corrupt Spike",
        "Deals 260 magic damage"
      ]
    }
  },
  {
    "id": "I0A8",
    "name": "Staff of Corruption",
    "koreanname": "타락의 지팡이",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "AFC3FF",
    "level": 80,
    "droprate": 0.25,
    "stats": {
      "damage": 1000,
      "int": 180,
      "passive": [
        "On attack, 10% chance to activate Corrupt Spike",
        "Deals 260 magic damage"
      ]
    }
  },
  {
    "id": "I0A9",
    "name": "Bow of Corruption",
    "koreanname": "타락의 활",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "AFC3FF",
    "level": 80,
    "droprate": 0.25,
    "stats": {
      "damage": 1250,
      "agi": 150,
      "passive": [
        "On attack, 10% chance to activate Corrupt Spike",
        "Deals 260 magic damage"
      ]
    }
  },
  {
    "id": "I0F5",
    "name": "Rifle of Corruption",
    "koreanname": "타락의 소총",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "AFC3FF",
    "level": 80,
    "droprate": 0.25,
    "stats": {
      "damage": 1250,
      "agi": 150,
      "passive": [
        "On attack, 10% chance to activate Corrupt Spike",
        "Deals 260 magic damage"
      ]
    }
  },
  {
    "id": "I0AB",
    "name": "Corrupt Creations",
    "koreanname": "타락한 피조물",
    "dropped_by": [
      "Giant Golem",
      "Wallachia Wraith",
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.125,
      0.05,
      0.125
    ],
    "required_by": [
      "Red Cross",
      "Tentacle Horn",
      "Corrupt Crystal Wings",
      "Retus, the Bullet of Judgment",
      "Wanderer's Cape",
      "Hood of Apocrypha",
      "Soul Eater",
      "Grimoire of Darkness",
      "Ring of Strike"
    ]
  },
  {
    "id": "I0G7",
    "name": "Giant Golem Icon",
    "koreanname": "자이언트 골렘 아이콘",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0075,
    "required_by": [
      "Corrupt Angel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "critchancepercent": 0.01
    }
  },
  {
    "id": "dtsb",
    "name": "Big Golem Token",
    "koreanname": "빅 골렘 토큰",
    "dropped_by": [
      "Giant Golem"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "sor2",
    "name": "Scarab Bone",
    "koreanname": "스캐럽 본",
    "dropped_by": [
      "Scarab",
      "Wallachia Mad Clown"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.001,
      0.05
    ],
    "required_by": [
      "Tepethia, the Crimson Sword of Requiem",
      "Hood of Reaper",
      "Deathbringer",
      "Crimson Cross",
      "Robe of the Necromancer",
      "Grim Heart"
    ]
  },
  {
    "id": "sora",
    "name": "Ghostly Thread",
    "koreanname": "망령의 실",
    "dropped_by": [
      "Wallachia Wraith",
      "Wallachia Mad Clown"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.001,
      0.05
    ],
    "required_by": [
      "Death Visage",
      "Sanguiel, the Bloodspear of Requiem",
      "Dante's Inferno",
      "Tunic of the Wraith",
      "Grim Heart"
    ]
  },
  {
    "id": "ram1",
    "name": "Soul Stone",
    "koreanname": "영혼의 돌",
    "dropped_by": [
      "Wallachia Mad Clown"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.05,
    "required_by": [
      "Deathbringer",
      "Benziena, the Earthen Soul",
      "Soul Drinker",
      "Winter's Heart",
      "Heartseeker",
      "Soulstalker",
      "Devil Chaser",
      "Benedict, the Crimson Armor of Blood",
      "Grandine, the Plates of Wraith",
      "Robe of the Necromancer",
      "Crown of Composure",
      "Seal of Deceiver",
      "Cold Ring of Death",
      "Soul of the Dead",
      "Soul Eater",
      "Flame Nightmare Icon"
    ]
  },
  {
    "id": "soul",
    "name": "Mad Symbol",
    "koreanname": "매드 심볼",
    "dropped_by": [
      "Wallachia Mad Clown"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.05,
    "required_by": [
      "Staff of Madness",
      "Grim Visage",
      "Hood of Grim Reaper",
      "Ruinbringer",
      "Claws of Beriel",
      "Heartseeker",
      "Prophetia, the Greater Source of Mana",
      "Crown of Rage",
      "Wings of Phoenix",
      "Flame Nightmare Icon"
    ]
  },
  {
    "id": "I0GA",
    "name": "Mad Clown Icon",
    "koreanname": "매드 클라운 아이콘",
    "dropped_by": [
      "Wallachia Mad Clown"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0025,
    "required_by": [
      "Flame Nightmare Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "hp": 240
    }
  },
  {
    "id": "wcyc",
    "name": "Clown Token",
    "koreanname": "클라운 토큰",
    "dropped_by": [
      "Wallachia Mad Clown"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I08X",
    "name": "Plates of Regeneration",
    "koreanname": "대지의 갑주",
    "description": "\"I shall offer you the protection worthy of the heroism you've shown me.\"",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.1,
    "required_by": [
      "Earthen Plates"
    ],
    "stats": {
      "armor": 170,
      "str": 195,
      "agi": 75,
      "passive": [
        "Temporarily boosts HP regen to 750 HP per second when HP drops below 30% of max HP for 10 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I06D",
    "name": "Vest of Protection",
    "koreanname": "수호의 복장",
    "description": "\"I shall offer you the protection worthy of the heroism you've shown me.\"",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.1,
    "required_by": [
      "Guardian Vest"
    ],
    "stats": {
      "armor": 155,
      "str": 75,
      "agi": 210,
      "passive": [
        "Creates a barrier that absorbs 800 damage every 8 seconds"
      ]
    }
  },
  {
    "id": "I0AV",
    "name": "Fairy Robe",
    "koreanname": "요정의 로브",
    "description": "\"I shall offer you the protection worthy of the heroism you've shown me.\"",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.1,
    "required_by": [
      "Fairy Garment",
      "Fairy Wings"
    ],
    "stats": {
      "armor": 145,
      "int": 215,
      "hp": 1200,
      "active": [
        "Summons fairy on use",
        "Heals 12500 HP over 12 seconds",
        "Decreases target's armor by 15 for 5 seconds (stacks up to 5 times)",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I06E",
    "name": "Lifestone",
    "koreanname": "생명의 돌",
    "description": "Magical stone imbued with the essence of age",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.1,
    "required_by": [
      "Benziena, the Earthen Pillar",
      "Purelight Armor",
      "True Bloodstone Plates",
      "Living Dragon Heart",
      "Laktrisha, the Illusional Sword of Poison",
      "Protector's Will",
      "Wings of Phoenix",
      "Soul of the Dead"
    ],
    "stats": {
      "allstat": 200,
      "attackspeedpercent": 0.15,
      "passive": [
        "On death, revives you after a short delay (cooldown: 3 minutes)",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "I0G9",
    "name": "Mana Ancient Icon",
    "koreanname": "마나 에인션트 아이콘",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.075,
    "required_by": [
      "Everfrost Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "mp": 240
    }
  },
  {
    "id": "envl",
    "name": "Ancient Token",
    "koreanname": "에인션트 토큰",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "woms",
    "name": "Seal Breaking Gemstone",
    "koreanname": "폭풍의 열쇠",
    "description": "Stone that can be used to break a seal.",
    "dropped_by": [
      "Mana Ancient"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "droprate": 1,
    "notes": [
      "Droprate increases every 5 minutes that it does not drop from mobs",
      "However, it is 100% drop rate from Mana Ancient",
      "Bring this to Ancient Ent to break its seal"
    ]
  },
  {
    "id": "I077",
    "name": "Sword of Poison",
    "koreanname": "맹독의 검",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "required_by": [
      "Laksha, the Reigning Sword of Poison"
    ],
    "stats": {
      "damage": 1200,
      "mainstat": 140,
      "passive": [
        "On attack, inflicts target with poison that deals 1500 magic damage per second for 10 seconds"
      ]
    }
  },
  {
    "id": "I07A",
    "name": "Staff of Poison",
    "koreanname": "맹독의 지팡이",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "damage": 800,
      "int": 200,
      "passive": [
        "On attack, inflicts target with poison that deals 1500 magic damage per second for 10 seconds"
      ]
    }
  },
  {
    "id": "I09D",
    "name": "Bow of Poison",
    "koreanname": "맹독의 활",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bow)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "damage": 1000,
      "agi": 170,
      "passive": [
        "On attack, inflicts target with poison that deals 1500 magic damage per second for 10 seconds"
      ]
    }
  },
  {
    "id": "I0F2",
    "name": "Rifle of Poison",
    "koreanname": "맹독의 소총",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "damage": 1000,
      "agi": 170,
      "passive": [
        "On attack, inflicts target with poison that deals 1500 magic damage per second for 10 seconds"
      ]
    }
  },
  {
    "id": "I074",
    "name": "Armor of Poison",
    "koreanname": "맹독의 갑옷",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "armor": 80,
      "str": 70,
      "agi": 70
    }
  },
  {
    "id": "I072",
    "name": "Robe of Poison",
    "koreanname": "맹독의 로브",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "armor": 60,
      "int": 110
    }
  },
  {
    "id": "I075",
    "name": "Helm of Poison",
    "koreanname": "맹독의 투구",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "stats": {
      "armor": 48,
      "mainstat": 45
    }
  },
  {
    "id": "I073",
    "name": "Ring of Poison",
    "koreanname": "맹독의 반지",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Accessory",
    "color": "EBD787",
    "level": 50,
    "droprate": 0.125,
    "required_by": [
      "Hydra Icon"
    ],
    "stats": {
      "allstat": 40,
      "hp": 1000,
      "mp": 1000
    }
  },
  {
    "id": "I068",
    "name": "Hydra Poison Tooth",
    "koreanname": "하이드라 독니",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.20,
    "required_by": [
      "Laksha, the Reigning Sword of Poison",
      "Monster Hunter",
      "Bag of Strength",
      "Fruit-filled Bag",
      "Maw of Monster",
      "Hydra Icon"
    ]
  },
  {
    "id": "I06I",
    "name": "Hydra Scale",
    "koreanname": "하이드라 스케일",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.20,
    "required_by": [
      "Monster Blaster",
      "Bag of Mighty Strength",
      "Candy-filled Bag",
      "Jack Pumpkin Helm +1",
      "Jack Pumpkin Hood +1",
      "Fruit Candy Pouch",
      "Mana Heart",
      "Robe of the Necromancer",
      "Hydra Icon"
    ]
  },
  {
    "id": "oven",
    "name": "Hydra Token",
    "koreanname": "하이드라의 토큰",
    "dropped_by": [
      "Ruler of the Lav Sea Hydra"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "ajen",
    "name": "Sanguiel, the Bloodspear",
    "koreanname": "피의 창 상귀엘",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Sanguiel, the Bloodspear of Domination"
    ],
    "stats": {
      "damage": 2500,
      "str": 190,
      "passive": [
        "On attack, drains 8% of damage dealt as life (up to 250)"
      ]
    }
  },
  {
    "id": "I07I",
    "name": "Bloodsword Tepethia",
    "koreanname": "피의 검 테페시아",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Tepethia, the Bloodsword of Domination"
    ],
    "stats": {
      "damage": 2400,
      "agi": 200,
      "passive": [
        "On attack, heals 10% of damage dealt (max 250)"
      ]
    }
  },
  {
    "id": "moon",
    "name": "Blood Cannon Tepes",
    "koreanname": "혈포 체페슈",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "True Blood Cannon Tepes"
    ],
    "stats": {
      "damage": 2900,
      "agi": 210,
      "int": 250,
      "hp": 750,
      "passive": [
        "On attack, drains 10% of damage dealt as life (up to 400)"
      ]
    }
  },
  {
    "id": "I07K",
    "name": "Bloody Armor",
    "koreanname": "블러디 아머",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Bloodstone Plates",
      "Count Icon"
    ],
    "stats": {
      "armor": 90,
      "str": 90,
      "agi": 90
    }
  },
  {
    "id": "I07L",
    "name": "Bloody Robe",
    "koreanname": "블러디 로브",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Count Icon"
    ],
    "stats": {
      "armor": 75,
      "int": 130
    }
  },
  {
    "id": "I07E",
    "name": "Bloody Helm",
    "koreanname": "블러디 헬름",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "stats": {
      "armor": 60,
      "mainstat": 55
    }
  },
  {
    "id": "I07H",
    "name": "Ring of Count",
    "koreanname": "백작의 반지",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Rare]",
    "grade": 0,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Teperua, the Ring of Blood"
    ],
    "stats": {
      "allstat": 50,
      "hp": 1200,
      "mp": 1200
    }
  },
  {
    "id": "I06J",
    "name": "Bloodstone",
    "koreanname": "블러드 스톤",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Sanguiel, the Bloodspear of Domination",
      "Tepethia, the Bloodsword of Domination",
      "Bag of Mighty Strength",
      "Crimson Pumpkin Rod",
      "Cruoris, the Armor of Blood",
      "Horns of Destruction"
    ]
  },
  {
    "id": "I07G",
    "name": "Count's Memento",
    "koreanname": "왈라키아 백작가의 유품",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Bahanar, the Sword of Illusion",
      "True Blood Cannon Tepes",
      "Teperua, the Ring of Blood",
      "Cape of the Count",
      "Soul Drinker",
      "Eye of Wallachia",
      "Cloak of the Fallen Shadows"
    ]
  },
  {
    "id": "shen",
    "name": "Count Token",
    "koreanname": "백작의 토큰",
    "dropped_by": [
      "Duchy of Wallachia Count"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I07O",
    "name": "Jack Pumpkin Helm",
    "koreanname": "잭 펌킨 투구",
    "description": "Let's enjoy Halloween ~",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Jack Pumpkin Helm +1",
      "Jack Icon"
    ],
    "stats": {
      "armor": 60,
      "str": 50,
      "agi": 60,
      "hpregen": 15,
      "mpregen": 15
    }
  },
  {
    "id": "I07M",
    "name": "Jack Pumpkin Hood",
    "koreanname": "잭 펌킨 후드",
    "description": "Let's enjoy Halloween ~",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Jack Pumpkin Hood +1",
      "Jack Icon"
    ],
    "stats": {
      "armor": 50,
      "int": 75,
      "hpregen": 15,
      "mpregen": 15
    }
  },
  {
    "id": "I0AY",
    "name": "Pumpkin Rod",
    "koreanname": "펌킨 로드",
    "description": "Eat this pumpkin!",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Crimson Pumpkin Rod"
    ],
    "stats": {
      "damage": 1700,
      "int": 260,
      "attackspeedpercent": 0.25,
      "active": [
        "On use, activates Throw Pumpkin"
      ]
    }
  },
  {
    "id": "cnob",
    "name": "Candy Bag",
    "koreanname": "번개의 창 티베리우스",
    "description": "A candy bag blessed with the festivity of the Halloween",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "EBD787",
    "level": 60,
    "droprate": 0.075,
    "required_by": [
      "Fruit Candy Pouch",
      "Candy-filled Bag"
    ],
    "stats": {
      "allstat": 80,
      "hp": 750,
      "active": [
        "On use, throws out 5 random candies",
        "Cinnamon Candy: +15 STR",
        "Icicle Candy: +15 AGI",
        "Mana Candy: +15 INT",
        "Soul Candy: +10% EXP Received",
        "Duration: 30 minutes for all candies"
      ]
    }
  },
  {
    "id": "I060",
    "name": "Orichalcum",
    "koreanname": "오리하르콘",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.15,
    "required_by": [
      "Sanguiel, the Bloodspear of Domination",
      "Tepethia, the Bloodsword of Domination",
      "True Dragonsword Lainhart",
      "Karonphniamm, the True Holy Sword",
      "Eximelia, the True Unholy Sword",
      "Bahanar, the Sword of Illusion",
      "True Dragonstaff Irave",
      "Klenetia, the True Holy Staff",
      "True Dragonbow Aience",
      "Alkate, the True Unholy Bow",
      "True Dragon Cannon Belenus",
      "Eana, the True Holy Cannon",
      "Bag of Mighty Strength +1",
      "Candy-filled Bag +1",
      "Bloodstone Plates",
      "True Dragon Armor Magron",
      "True Dragon Helm Agron",
      "Ring of Light",
      "Ring of Darkness",
      "Cape of the Count",
      "Laksha, the Ancient Sword of Poison",
      "Robe of the Sage",
      "Jack Icon",
      "Glasses"
    ]
  },
  {
    "id": "sfog",
    "name": "Yellow Crystal Golem Token",
    "koreanname": "옐로우 크리스탈 골렘 토큰",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0025,
    "required_by": [
      "Rainbow Crystal Golem Token"
    ]
  },
  {
    "id": "drph",
    "name": "Jack Pumpkin Token",
    "koreanname": "잭 펌킨 토큰",
    "dropped_by": [
      "Jack o Lantern"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I06F",
    "name": "Sealed Weapon",
    "koreanname": "봉인된 무기",
    "description": "The weapon of Mage Lord, filled with great mana. Can be unleashed into a weapon that matches the user.",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Special",
    "color": "C6F5B1",
    "level": 70,
    "droprate": 0.075,
    "notes": [
      "The order below is the order of the menu to select when in game"
    ],
    "drops": [
      "Leoreus, the Greatsword of Flame",
      "Irbeth, the Sword of Lightning",
      "Pheles, the Bow of Wind",
      "Benziena, the Rod of Earth",
      "Retus, the Iron Bullet"
    ]
  },
  {
    "id": "I081",
    "name": "Leoreus, the Greatsword of Flame",
    "koreanname": "불의 장검 리오레우스",
    "description": "Hellflame isn't the only thing that can burn everything up.",
    "dropped_by": [
      "Sealed Weapon"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Leoreus, the Greatsword of Explosion"
    ],
    "stats": {
      "damage": 2850,
      "str": 210,
      "passive": [
        "On attack, 10% chance to activate Flame Explosion",
        "Deals (flame affinity X (STR X 2)) magic damage"
      ]
    }
  },
  {
    "id": "I080",
    "name": "Irbeth, the Sword of Lightning",
    "koreanname": "뇌전의 검 이르베스",
    "description": "I'll show you what it means to control the lightning",
    "dropped_by": [
      "Sealed Weapon"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Storm Reaver"
    ],
    "stats": {
      "damage": 2550,
      "agi": 240,
      "passive": [
        "On attack, 10% chance to strike down lightning",
        "Deals (wind affinity X (AGI X 5)) magic damage"
      ]
    }
  },
  {
    "id": "I09M",
    "name": "Pheles, the Bow of Wind",
    "koreanname": "바람의 궁 피레스",
    "description": "The gentle winds of east are said to guide travellers to a safe journey.",
    "dropped_by": [
      "Sealed Weapon"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bow)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Pheles, the Bow of Skies"
    ],
    "stats": {
      "damage": 3000,
      "agi": 225,
      "attackspeedpercent": 0.1,
      "active": [
        "On use, activates Sylph's Blessing",
        "Heals all nearby allies for 20% max HP and 25% max MP",
        "Cooldown: 50 seconds"
      ]
    }
  },
  {
    "id": "I082",
    "name": "Benziena, the Rod of Earth",
    "koreanname": "대지의 봉 벤지이나",
    "description": "The Mother Nature embraces everything. In other words, it binds and controls everything.",
    "dropped_by": [
      "Sealed Weapon"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Benziena, the Earthen Pillar"
    ],
    "stats": {
      "damage": 2100,
      "int": 270,
      "active": [
        "On use, activates Earthen Rage",
        "Deals (INT X 45) magic damage to enemies in a targetted area"
      ],
      "spec": [
        "Specialty",
        "Alchemist - Enhanced Conjure Golem: Golem's HP increased by 30% and armor is increased by 30."
      ]
    }
  },
  {
    "id": "I0F7",
    "name": "Retus, the Iron Bullet",
    "koreanname": "강철의 탄환 레투스",
    "description": "All beings are equal in the face of a bullet!",
    "dropped_by": [
      "Sealed Weapon"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Retus, the Bullet of Judgment"
    ],
    "stats": {
      "damage": 3200,
      "agi": 180,
      "passive": [
        "Empowers next attack with Iron Bullet every 8 seconds",
        "Empowered attacks deal (7.5 X MAIN STAT) magic damage and stuns for 0.25 seconds"
      ]
    }
  },
  {
    "id": "I083",
    "name": "Robe of the Mage",
    "koreanname": "로브 오브 메이지",
    "description": "Magic doesn't work against me - the Mage Lord!",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "Robe of the Sage",
      "Mage Lord Icon"
    ],
    "stats": {
      "armor": 120,
      "int": 170,
      "active": [
        "Block magic every 5 minutes"
      ]
    }
  },
  {
    "id": "I084",
    "name": "Hood of Mage",
    "koreanname": "후드 오브 메이지",
    "description": "Invisibility is a very useful magic.",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "Prophetia, the Source of Mana",
      "Hood of Grim Reaper",
      "Mage Lord Icon"
    ],
    "stats": {
      "armor": 60,
      "int": 80,
      "active": [
        "On use, activates Invisibility",
        "Lasts 20 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0AZ",
    "name": "Ring of Resonance",
    "koreanname": "공명의 반지",
    "description": "Power is not important to magic. What matters is how many times you use it. - Mage Lord",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "Ring of the Sage",
      "Ring of Strike",
      "Mage Lord Icon"
    ],
    "stats": {
      "allstat": 90,
      "skilldamagepercent": 0.03,
      "active": [
        "On use, activates Resonance",
        "Refreshes the cooldown of the last skill used",
        "Does not apply to ultimate skill or items",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I062",
    "name": "Mithril",
    "koreanname": "미스릴",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Tepethia, the Crimson Sword of Requiem",
      "Dragon Blaster",
      "Bag of Mighty Strength +1",
      "Candy-filled Bag +1",
      "Ring of the Sage",
      "Ring of Light",
      "Ring of Darkness",
      "Cape of the Count",
      "Frozen Robe",
      "Robe of the Sage",
      "Archangel Halo",
      "True Guardian Ring",
      "Mithril Pickaxe",
      "Glasses",
      "Mage Lord Icon"
    ]
  },
  {
    "id": "I06V",
    "name": "Ancient Writings",
    "koreanname": "고대의 문서",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Karonphniamm, the True Holy Sword",
      "Eximelia, the True Unholy Sword",
      "Klenetia, the True Holy Staff",
      "Benziena, the Earthen Pillar",
      "Alkate, the True Unholy Bow",
      "Eana, the True Holy Cannon",
      "Bag of Mighty Strength +1",
      "Candy-filled Bag +1",
      "Ring of the Sage",
      "Ring of Holy Light",
      "Anger",
      "Laksha, the Ancient Sword of Poison",
      "Staff of Madness",
      "Mana Heart Frost",
      "Cape of Corrupt Flame",
      "Wanderer's Cape",
      "Red Cross"
    ]
  },
  {
    "id": "cosl",
    "name": "Blue Crystal Golem Token",
    "koreanname": "마법의 토큰",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0025,
    "required_by": [
      "Rainbow Crystal Golem Token"
    ]
  },
  {
    "id": "lnrn",
    "name": "Magical Token",
    "koreanname": "마법의 토큰",
    "dropped_by": [
      "Mage Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I07R",
    "name": "Dragonsword Lainhart",
    "koreanname": "용검 라인하르트",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragonsword Lainhart"
    ],
    "stats": {
      "damage": 3200,
      "str": 190,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2) magic damage"
      ]
    }
  },
  {
    "id": "I09S",
    "name": "Dragonbow Aience",
    "koreanname": "용궁 에이엔스",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bow)",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragonbow Aience"
    ],
    "stats": {
      "damage": 3000,
      "agi": 215,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2) magic damage"
      ]
    }
  },
  {
    "id": "I07T",
    "name": "Dragonstaff Irave",
    "koreanname": "용봉 이레이브",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragonstaff Irave"
    ],
    "stats": {
      "damage": 2500,
      "int": 260,
      "active": [
        "On use, activates Mana Cannon",
        "Deals (INT X 12.5) magic damage in a linear path",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0F8",
    "name": "Dragon Cannon Belenus",
    "koreanname": "용포 벨레누스",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragon Cannon Belenus"
    ],
    "stats": {
      "damage": 3000,
      "agi": 215,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2) magic damage"
      ]
    }
  },
  {
    "id": "I07U",
    "name": "Dragon Armor Magron",
    "koreanname": "용갑 마그론",
    "description": "Don't be afraid to struggle. You can only grow stronger by driving away your fear.",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragon Armor Magron"
    ],
    "stats": {
      "armor": 130,
      "str": 100,
      "agi": 100,
      "hpregen": 20
    }
  },
  {
    "id": "I07X",
    "name": "Dragon's Helm Agron",
    "koreanname": "용투 아그론",
    "description": "Don't you think it is foolish to defy me with magic, who is known as the creature of 'magic'??",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 70,
    "droprate": 0.075,
    "required_by": [
      "True Dragon Helm Agron"
    ],
    "stats": {
      "armor": 65,
      "mainstat": 40,
      "mdpercent": 0.075,
      "active": [
        "Block magic every 8 minutes"
      ]
    }
  },
  {
    "id": "I06P",
    "name": "Dragon Bone",
    "koreanname": "드래곤 본",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "True Dragonsword Lainhart",
      "True Dragonstaff Irave",
      "Benziena, the Earthen Pillar",
      "True Dragonbow Aience",
      "True Dragon Cannon Belenus",
      "Dragon Wings",
      "Cruoris, the Armor of Blood"
    ]
  },
  {
    "id": "I06Q",
    "name": "Dragon Scale",
    "koreanname": "드래곤 스케일",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "True Dragon Armor Magron",
      "True Dragon Helm Agron",
      "Dragon Wings",
      "Horns of Destruction",
      "Spirit Dagger",
      "Tunic of the Wraith"
    ]
  },
  {
    "id": "I06O",
    "name": "Dragon Heart",
    "koreanname": "드래곤 하트",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Leoreus, the Greatsword of Explosion",
      "Ring of the Sage",
      "Mana Heart",
      "Dragon Wings",
      "Heart of Ifrit",
      "Living Dragon Heart",
      "Heartseeker",
      "Wings of Death Icon"
    ]
  },
  {
    "id": "oli2",
    "name": "Wings of Death Token",
    "koreanname": "데드렉트의 토큰",
    "dropped_by": [
      "Wings of Death"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0BJ",
    "name": "Guardian Ring",
    "koreanname": "가디언 링",
    "description": "I vow my life to protect this sanctuary till my plates crumble away.",
    "dropped_by": [
      "Castle Avalon Gatekeeper"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "droprate": 0.1,
    "required_by": [
      "Ring of Holy Light",
      "True Guardian Ring"
    ],
    "stats": {
      "armor": 25,
      "str": 65,
      "agi": 50,
      "hpregen": 15,
      "mdpercent": 0.1,
      "spec": [
        "Specialty",
        "Knight - Improved Seal of Mana: Radius is increased by 15%."
      ]
    }
  },
  {
    "id": "I0FZ",
    "name": "Gatekeeper Icon",
    "koreanname": "문지기 아이콘",
    "dropped_by": [
      "Castle Avalon Gatekeeper"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0025,
    "required_by": [
      "Guardian Angel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "drpercent": 0.015
    }
  },
  {
    "id": "amrc",
    "name": "Guardian Token",
    "koreanname": "문지기 토큰",
    "dropped_by": [
      "Castle Avalon Gatekeeper"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I085",
    "name": "Karonphniamm, the Holy Sword",
    "koreanname": "성검 카론프니엠",
    "description": "Blessing to the weak; judgment to the evil.",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Karonphniamm, the True Holy Sword",
      "Guardian Angel Icon"
    ],
    "stats": {
      "damage": 3600,
      "str": 300,
      "passive": [
        "On attack, 10% chance to activate Holy Strike",
        "If MAIN STAT is STR: deals (STR X 3) magic damage",
        "If MAIN STAT is AGI or INT: deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I087",
    "name": "Klenetia, the Holy Staff",
    "koreanname": "성봉 클레네티아",
    "description": "Blessing to the weak; judgment to the evil.",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Klenetia, the True Holy Staff",
      "Guardian Angel Icon"
    ],
    "stats": {
      "damage": 3000,
      "int": 360,
      "active": [
        "On use, activates Holy Explosion",
        "Deals (INT X 12.5) magic damage in an AoE and stuns for 1 second"
      ]
    }
  },
  {
    "id": "I0FA",
    "name": "Eana, the Holy Cannon",
    "koreanname": "성포 이아나",
    "description": "Blessing to the weak; judgment to the evil.",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Eana, the True Holy Cannon"
    ],
    "stats": {
      "damage": 3300,
      "agi": 330,
      "passive": [
        "On attack, chance to activate Holy Bullet",
        "If MAIN STAT is STR: deals (STR X 3) magic damage",
        "If MAIN STAT is AGI or INT: deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I088",
    "name": "Sacred Armor",
    "koreanname": "성갑 홀리오스",
    "description": "May eternal guidance and blessing be with you on your journey",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Purelight Armor",
      "Guardian Angel Icon"
    ],
    "stats": {
      "armor": 150,
      "str": 120,
      "agi": 120,
      "passive": [
        "On being hit, 10% chance to activate Holy Barrier",
        "Increases armor by 1000 for 4 seconds",
        "Cooldown: 12 seconds"
      ]
    }
  },
  {
    "id": "I089",
    "name": "Sacred Helm",
    "koreanname": "성투 홀리로스",
    "description": "May eternal guidance and blessing be with you on your journey",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Archangel Halo"
    ],
    "stats": {
      "armor": 80,
      "mainstat": 50,
      "hpregen": 25,
      "active": [
        "Block magic every 4 minutes"
      ]
    }
  },
  {
    "id": "I06R",
    "name": "Angel's Feather",
    "koreanname": "천사의 깃털 결정",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Staff of Void",
      "Ring of Light",
      "Bahanar, the True Sword of Illusion",
      "Bullet of Ruin",
      "Bag of Heaven",
      "Helm of Battle",
      "Living Dragon Heart",
      "Frozen Heart"
    ]
  },
  {
    "id": "I06T",
    "name": "A Page of the Bible",
    "koreanname": "성서의 한 페이지",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Ring of Light",
      "Asmodeus, the Archdevil's Greatsword",
      "Belius, the Archdevil's Staff",
      "Yggrect, the Archdevil's Bow",
      "Retus, the Bullet of Judgment",
      "Alchatratz, the Archdevil's Cannon",
      "Pure Crystal Wings",
      "Guardian Angel Icon"
    ]
  },
  {
    "id": "tmmt",
    "name": "Guardian Angel Token",
    "koreanname": "능천사의 토큰",
    "dropped_by": [
      "The 3rd Army's Guardian Angel"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0C4",
    "name": "Skeris, the Unholy Helm",
    "koreanname": "마투 스케리스",
    "description": "May chaos and destruction lead your path",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Grim Visage"
    ],
    "stats": {
      "armor": 70,
      "str": 60,
      "agi": 70,
      "skilldamagepercent": 0.03
    }
  },
  {
    "id": "I086",
    "name": "Eximelia, the Unholy Sword",
    "koreanname": "마검 엑시멜리아",
    "description": "Immerse yourself in battle and war !! Walk the path of destruction !!",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Eximelia, the True Unholy Sword",
      "Corrupt Angel Icon"
    ],
    "stats": {
      "damage": 3400,
      "agi": 330,
      "passive": [
        "On attack, 10% chance to activate Unholy Strike",
        "Deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I08C",
    "name": "Dekaros, the Unholy Armor",
    "koreanname": "마갑 데카로스",
    "description": "May chaos and destruction lead your path",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Cruoris, the Armor of Blood",
      "Corrupt Angel Icon"
    ],
    "stats": {
      "armor": 140,
      "str": 150,
      "agi": 150,
      "skilldamagepercent": 0.025,
      "passive": [
        "12% chance to reduce attacker's armor on being hit",
        "Reduces armor by 125 for 5 seconds"
      ]
    }
  },
  {
    "id": "I09O",
    "name": "Alkate, the Unholy Bow",
    "koreanname": "마궁 알카테",
    "description": "Leave none alive !! Pierce their hearts !!",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bow)",
    "color": "C39BE1",
    "droprate": 0.075,
    "level": 80,
    "required_by": [
      "Alkate, the True Unholy Bow",
      "Corrupt Angel Icon"
    ],
    "stats": {
      "damage": 3200,
      "agi": 350,
      "passive": [
        "On attack, 10% chance to activate Unholy Spike",
        "Deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I06S",
    "name": "Corrupt Angel's Feather",
    "koreanname": "타락한 천사의 깃털 결정",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Flame Soul",
      "Staff of Void",
      "Ring of Darkness",
      "Corrupt Crystal Wings",
      "Devil Blaster",
      "Bullet of Ruin",
      "Bag of Hell",
      "Cape of Corrupt Flame",
      "Frozen Heart"
    ]
  },
  {
    "id": "I06U",
    "name": "A Page of the Unholy Book",
    "koreanname": "마서의 한 페이지",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "[Epic]",
    "grade": 1,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.125,
    "required_by": [
      "Ring of Darkness",
      "Asmodeus, the Archdevil's Greatsword",
      "Belius, the Archdevil's Staff",
      "Staff of Madness",
      "Yggrect, the Archdevil's Bow",
      "Red Cross",
      "Retus, the Bullet of Judgment",
      "Alchatratz, the Archdevil's Cannon",
      "Void Eye",
      "Prophetia, the Source of Mana",
      "Corrupt Angel Icon"
    ]
  },
  {
    "id": "mnsf",
    "name": "Corrupt Angel Token",
    "koreanname": "타천사의 토큰",
    "dropped_by": [
      "The Devil's Right Arm Corrupt Angel"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "rhth",
    "name": "Okelanq, the Spear of Frost",
    "koreanname": "빙결의 창 오켈렌크",
    "description": "Stone spear formed from gathering of frozen crystals",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "stats": {
      "damage": 4050,
      "str": 375,
      "critmultiplier": 0.15,
      "passive": [
        "13% chance to activate Frost effect on attack",
        "Deals (MAIN STAT X 3) magic damage and reduces enemy's movement speed by 20% for 3 seconds"
      ]
    }
  },
  {
    "id": "I0D6",
    "name": "Okelanq, the Bow of Frost",
    "koreanname": "빙결의 활 오켈렌크",
    "description": "Magical bow that shoots fragmented shards of ice.",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bow)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "stats": {
      "damage": 3750,
      "agi": 415,
      "affinityiwpercent": 0.05,
      "passive": [
        "On attack, 13% chance to activate Frost Strike",
        "Deals (MAIN STAT X 3) magic damage and reduces enemy's movement speed by 20% for 3 seconds"
      ]
    }
  },
  {
    "id": "I0FE",
    "name": "Lord of Revolver",
    "koreanname": "로드 오브 리볼버",
    "description": "The secret weapon of Everfrost; it emits a chilling aura.",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "stats": {
      "damage": 6000,
      "agi": 425,
      "attackspeedpercent": -0.2,
      "critmultiplier": 0.2
    }
  },
  {
    "id": "I08D",
    "name": "Robe of Everfrost",
    "koreanname": "서리한의 로브 켈투자드",
    "description": "Fools that dare challenge me shall freeze for eternity.",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Everfrost Icon",
      "Frozen Robe",
      "Frost Fairy Wings"
    ],
    "stats": {
      "armor": 165,
      "int": 215,
      "passive": [
        "On being hit, 10% chance to activate Frost Armor",
        "Increases armor by 50 for 15 seconds"
      ]
    }
  },
  {
    "id": "I08R",
    "name": "Helm of Everfrost",
    "koreanname": "서리한의 투구 프로스트",
    "description": "You lowly beings cannot even touch my skin !!",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Frostshard Armor",
      "Crown of Composure",
      "Everfrost Icon"
    ],
    "stats": {
      "mainstat": 75,
      "armor": 95,
      "passive": [
        "On being hit, 10% chance to freeze the attacker"
      ]
    }
  },
  {
    "id": "I08E",
    "name": "Hood of Everfrost",
    "koreanname": "서리한의 후드 프로스트",
    "description": "You lowly beings cannot even touch my skin !!",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Crown of Composure",
      "Everfrost Icon"
    ],
    "stats": {
      "armor": 75,
      "int": 95,
      "passive": [
        "On being hit, 10% chance to freeze the attacker"
      ]
    }
  },
  {
    "id": "I097",
    "name": "Winter Rose",
    "koreanname": "윈터 로즈",
    "description": "This lone rose shall accompany your road to victory.",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Twin Snow",
      "Crimson Cross",
      "Everfrost Gauntlet",
      "Eternal Rose"
    ],
    "stats": {
      "armor": 30,
      "int": 210,
      "hp": 750,
      "affinityiwpercent": 0.03,
      "passive": [
        "On attack, 10% chance to temporarily boost your INT by 25 for 6 seconds"
      ]
    }
  },
  {
    "id": "I099",
    "name": "Frost Web Brooch",
    "koreanname": "프로스트 웹 브로치",
    "description": "A meticulously woven brooch",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Everfrost Gauntlet",
      "Heart of Ifrit"
    ],
    "stats": {
      "agi": 210,
      "hp": 750,
      "skilldamagepercent": 0.05,
      "passive": [
        "On attack, 9% chance to reduce target's armor by 12% [Type-A] for 5 seconds"
      ]
    }
  },
  {
    "id": "I06X",
    "name": "Frorist",
    "koreanname": "프로리스트",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen",
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.1,
      0.1,
      0.05
    ],
    "required_by": [
      "Bag of Life",
      "Mana Heart Frost",
      "Frozen Heart",
      "Eternal Rose",
      "Cold Ring of Death",
      "Everfrost Icon"
    ]
  },
  {
    "id": "I06K",
    "name": "Frozen Cobweb",
    "koreanname": "얼음 거미줄",
    "dropped_by": [
      "Soul of Everfrost",
      "Frostspider Queen",
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.1,
      0.1,
      0.05
    ],
    "required_by": [
      "Twin Snow",
      "Bag of Corruption",
      "Bag of Life",
      "Frozen Robe",
      "Archangel Halo",
      "Prophetia, the Source of Mana",
      "Everfrost Gauntlet",
      "Fairy Wings",
      "Soulstalker",
      "Spider Lord Icon"
    ]
  },
  {
    "id": "stre",
    "name": "Spider Token",
    "koreanname": "스파이더 토큰",
    "dropped_by": [
      "Frostspider Queen"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "olig",
    "name": "Everfrost Token",
    "koreanname": "서리의 토큰",
    "dropped_by": [
      "Soul of Everfrost"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I067",
    "name": "Winter's Tear",
    "koreanname": "겨울의 눈물",
    "description": "A sword engulfed in chill, hidden from the eyes of humans for ages",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.05,
    "required_by": [
      "Spider Lord Icon",
      "Winter's Heart"
    ],
    "stats": {
      "damage": 5100,
      "str": 465,
      "agi": 450,
      "critchancepercent": 0.1,
      "passive": [
        "On every 8th attack, activates Chilling Strike",
        "Deals (water affinity X (STR X 1.8 + AGI X 1.5)) pure damage"
      ]
    }
  },
  {
    "id": "bspd",
    "name": "Frostbane",
    "koreanname": "프로스트베인",
    "description": "Can you feel the resonation of the souls trapped by everfrost?",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bow)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.05,
    "required_by": [
      "Everfrostbane",
      "Spider Lord Icon"
    ],
    "stats": {
      "damage": 4950,
      "str": 285,
      "agi": 475,
      "skilldamagepercent": 0.025,
      "passive": [
        "15% chance to slow target on attack",
        "Deals (AGI X 1.3) magic damage and slows for 3 seconds"
      ],
      "spec": [
        "Specialty",
        "Bow Master - Casting Freezing Shot consecutively adds (water affinity X (ATK DMG X 6 + AGI X 12)) bonus damage."
      ]
    }
  },
  {
    "id": "I098",
    "name": "Niflheim",
    "koreanname": "니플하임",
    "description": "This blank edge covered by mists can even severe souls of enemies.",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Aglaia, the Spear of Heavenly Flows",
      "Deathbringer"
    ],
    "stats": {
      "damage": 5750,
      "str": 435,
      "attackspeedpercent": -0.5,
      "critchancepercent": 0.1,
      "active": [
        "On use, increases attack damage by 4500 and STR by 300 for 8 seconds",
        "Cooldown: 25 seconds"
      ]
    }
  },
  {
    "id": "I096",
    "name": "Ripple Snow",
    "koreanname": "리플 스노우",
    "description": "Only the cold snow of winter will cover your corpse",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Twin Snow"
    ],
    "stats": {
      "damage": 3450,
      "int": 465,
      "hp": 1000,
      "affinityiwpercent": 0.03,
      "active": [
        "On use, activates Frozen Shard",
        "Deals (water affinity X (INT X 9)) magic damage and freezes enemies for 2 seconds"
      ],
      "spec": [
        "Specialty - Water Mastery",
        "Elementalist - Seal of Water: duration increased by 5 seconds."
      ]
    }
  },
  {
    "id": "I061",
    "name": "Adamantium",
    "koreanname": "아다만티움",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.1,
    "required_by": [
      "Sanguiel, the Bloodspear of Requiem",
      "Anger",
      "Asmodeus, the Archdevil's Greatsword",
      "Belius, the Archdevil's Staff",
      "Crimson Pumpkin Rod",
      "Yggrect, the Archdevil's Bow",
      "Devil Blaster",
      "Alchatratz, the Archdevil's Cannon",
      "Bag of Hell",
      "Bag of Heaven",
      "Purelight Armor",
      "Reactive Armor",
      "Helm of Battle",
      "True Guardian Ring",
      "Trueblood Ring",
      "Heart of Ifrit",
      "Frozen Heart",
      "Spirit Dagger",
      "Meacronacer, the Sword of Thousand Illusions",
      "Glasses",
      "Spider Lord Icon"
    ]
  },
  {
    "id": "klmm",
    "name": "White Crystal Golem Token",
    "koreanname": "화이트 크리스탈 골렘 토큰",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0025,
    "required_by": [
      "Rainbow Crystal Golem Token"
    ]
  },
  {
    "id": "tst2",
    "name": "Frostspider Lord Token",
    "koreanname": "서리거미 제왕 토큰",
    "dropped_by": [
      "Frostspider Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "kysn",
    "name": "Claws of Destruction",
    "koreanname": "파괴의 손톱",
    "description": "You don't become exhausted but rather become filled with madness as you use it.",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.05,
    "required_by": [
      "Maw of Greed",
      "Claws of Beriel",
      "Demon Lord Icon"
    ],
    "stats": {
      "damage": 4800,
      "str": 330,
      "agi": 450,
      "critmultiplier": 0.25,
      "passive": [
        "(1 + HIT COUNT X 0.125)% chance to activate Doomsday on attack",
        "Deals (8 X (STR + AGI)) + (1.3 X ATK DMG) magic splash damage and stuns for 0.1 seconds"
      ]
    }
  },
  {
    "id": "I0FG",
    "name": "Bullet of Destruction",
    "koreanname": "파괴의 탄환",
    "description": "You don't become exhausted but rather become filled with madness as you use it.",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.05,
    "required_by": [
      "Bullet of Ruin",
      "Demon Lord Icon"
    ],
    "stats": {
      "damage": 6000,
      "str": 330,
      "agi": 420,
      "critmultiplier": 0.2,
      "passive": [
        "(1 + HIT COUNT X 0.125)% chance to activate Doomsday on attack",
        "Deals (8 X (STR + AGI)) + (1.3 X ATK DMG) magic splash damage and stuns for 0.1 seconds"
      ]
    }
  },
  {
    "id": "ches",
    "name": "Eye of the Abyss",
    "koreanname": "심연의 눈",
    "description": "You can hear the scream of travelers when you stare into it",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Devil Blaster",
      "Staff of Domination",
      "Void Eye",
      "Bag of Corruption"
    ],
    "stats": {
      "armor": 70,
      "int": 200,
      "passive": [
        "Nearby allies' SKILL DMG +4%"
      ],
      "active": [
        "On use, summons 4 monsters",
        "INT reduced by 33 while on cooldown",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "dphe",
    "name": "Slayer Boots",
    "koreanname": "슬레이어 부츠",
    "description": "Boots composed of demon hides that grants excellent mobility",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 90,
    "droprate": 0.075,
    "required_by": [
      "Wanderer's Cape",
      "Storm"
    ],
    "stats": {
      "damage": 1350,
      "str": 105,
      "agi": 150,
      "critmultiplier": 0.1,
      "skilldamagepercent": 0.04
    }
  },
  {
    "id": "I06W",
    "name": "Dark Matter",
    "koreanname": "다크 매터",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.1,
    "required_by": [
      "Bahanar, the True Sword of Illusion",
      "Asmodeus, the Archdevil's Greatsword",
      "Belius, the Archdevil's Staff",
      "Twin Snow",
      "Yggrect, the Archdevil's Bow",
      "Alchatratz, the Archdevil's Cannon",
      "Bag of Hell",
      "Bag of Heaven",
      "Purelight Armor",
      "Horns of Destruction",
      "Archangel Halo",
      "Prophetia, the Source of Mana",
      "Demonis, the Devil Lord's Ring",
      "Living Dragon Heart",
      "Staff of Abyss",
      "Halo of Judgment",
      "Abyssal Pickaxe",
      "Demon Lord Icon"
    ]
  },
  {
    "id": "I08K",
    "name": "Dark Wings",
    "koreanname": "암흑의 날개 조각",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.1,
    "required_by": [
      "Anger",
      "Flame Explosion",
      "Crimson Cross",
      "Cruoris, the Armor of Blood",
      "True Bloodstone Plates",
      "Void Eye",
      "True Guardian Ring",
      "Demonis, the Devil Lord's Ring",
      "Ring of Intrusion",
      "Cape of Corrupt Flame",
      "Wings of Fury",
      "Wanderer's Cape",
      "Bloody Hatred",
      "Grandine, the Plates of Wraith",
      "Demon Lord Icon"
    ]
  },
  {
    "id": "fgsk",
    "name": "Red Crystal Golem Token",
    "koreanname": "레드 크리스탈 골렘 토큰",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.001,
    "required_by": [
      "Rainbow Crystal Golem Token"
    ]
  },
  {
    "id": "wswd",
    "name": "Demon Lord Token",
    "koreanname": "마왕의 토큰",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "odef",
    "name": "Spiritus, the Sword of Elements",
    "koreanname": "정령검 스피리투스",
    "description": "Weapon infused with the force of ancient spirits",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Shared)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Spirit Dagger"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 4500,
      "allstat": 380,
      "attackspeedpercent": 0.15,
      "skilldamagepercent": 0.05,
      "passive": [
        "Enables the use of Breath of Ancients every 6 seconds",
        "Deals (MAIN STAT X 6) magic damage on attack"
      ],
      "spec": [
        "Specialties - Spiritus",
        "Lightning Mage - After a full cast of Hypercharge, heals 75% of max HP"
      ]
    }
  },
  {
    "id": "rag1",
    "name": "Storm Headdress",
    "koreanname": "폭풍우의 화관",
    "description": "Headdress blessed by the God of Thunder",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Aglaia, the Spear of Heavenly Flows",
      "Horn of Devil",
      "Crown of Serenity"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "armor": 90,
      "allstat": 125,
      "critchancepercent": 0.075,
      "passive": [
        "On crit, strike down a lightning",
        "Deals ((STR + AGI + INT) X 0.45) magic damage",
        "Has a 15% chance to deal ((STR + AGI + INT) X 2.25) magic damage instead",
        "Cooldown: 2.5 seconds"
      ]
    }
  },
  {
    "id": "afac",
    "name": "Visvire, the Hammer of Storm",
    "koreanname": "우레의 망치 비스바이레",
    "description": "I shall not let you leave alive so easily !!",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Blazing Soul"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 5700,
      "str": 555,
      "skilldamagepercent": 0.045,
      "passive": [
        "Activates Source of Power on skill cast",
        "Deals (STR X 0.225) magic damage on next attack",
        "Increases STR by 40 for 6 seconds",
        "Cooldown: 10 seconds"
      ],
      "spec": [
        "Specialty",
        "Paladin - Improved Genesis: Each pulse deals 40% bonus damage."
      ]
    }
  },
  {
    "id": "grsl",
    "name": "Spirit Orb",
    "koreanname": "정령의 구슬",
    "dropped_by": [
      "Mana Ancient",
      "Spirit Beast"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.0005,
      0.04
    ],
    "required_by": [
      "Blazing Soul",
      "Earthen Plates",
      "Guardian Vest",
      "Fairy Garment",
      "Pheles, the Bow of Skies",
      "Requiem, the Armor of Lamentation",
      "Diana, the Robe of Holy Maiden",
      "Dragon Mask",
      "Pure Crystal Wings",
      "Ancient Ent Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "I0JT",
    "name": "Spirit of Forest",
    "koreanname": "숲의 기운",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Benziena, the Earthen Soul",
      "Vest of Cyclone",
      "Bag of Mother Nature",
      "Druid's Mantle"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "I0G8",
    "name": "Spirit Beast Icon",
    "koreanname": "스피릿 비스트 아이콘",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0025,
    "required_by": [
      "Corruptor Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 4
      }
    ],
    "stats": {
      "attackspeedpercent": 0.04
    }
  },
  {
    "id": "ccmd",
    "name": "Beast Token",
    "koreanname": "비스트 토큰",
    "dropped_by": [
      "Spirit Beast"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "phlt",
    "name": "Corruptor",
    "koreanname": "커럽터",
    "description": "It is already too late if you've realized your corruption !",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Anger",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 6000,
      "str": 510,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.03,
      "passive": [
        "25% chance to corrupt enemies in frontal cone on attack",
        "Deals (STR X 9) magic damage and reduces enemy armor by 175 for 6 seconds"
      ]
    }
  },
  {
    "id": "rin1",
    "name": "Stalker",
    "koreanname": "추적자",
    "description": "Do not miss them !! Make sure to end their life !!",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bow)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Heartseeker",
      "Soulstalker",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 6750,
      "agi": 495,
      "attackspeedpercent": -0.25,
      "critchancepercent": 0.075,
      "passive": [
        "8% chance to activate Corrupt Explosion on attack",
        "Deals (AGI X 2) magic damage in an AoE"
      ],
      "spec": [
        "Specialty",
        "Bow Master - Improved Arrow Rain: Casting Arrow Rain spawns 4 additional Arrows of Corruption for firing."
      ]
    }
  },
  {
    "id": "kpin",
    "name": "Avenger",
    "koreanname": "복수자",
    "description": "I will take back my soul and flesh you've reaped from me..",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Laktrisha, the Illusional Sword of Poison",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 6300,
      "agi": 535,
      "skilldamagepercent": 0.05,
      "critchancepercent": 0.05,
      "active": [
        "On use, activates Vengeance",
        "Blocks the next spell-inflicted damage within 6 seconds",
        "If successfully blocked, increases AGI by 300 for 15 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0FH",
    "name": "Chaser",
    "koreanname": "체이서",
    "description": "A single drop of corruption is enough to completely immerse you",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Devil Chaser",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 5850,
      "agi": 465,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Chaser",
        "Spawns 6 projectiles that get released per attack for 6 seconds",
        "Each projectile deals (AGI X 2.5) magic damage in an AoE",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "mcou",
    "name": "Skull Seal",
    "koreanname": "해골 인장",
    "description": "An ornament emanating a grim aura",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Hood of Grim Reaper",
      "Ring of the Reaper",
      "Seal of Deceiver",
      "Deathbringer",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "str": 285,
      "int": 255,
      "skilldamagepercent": 0.075,
      "passive": [
        "On being healed, converts 15% of excess amount into max HP for 6 seconds (max bonus HP of 750)"
      ]
    }
  },
  {
    "id": "evtl",
    "name": "Potion of Corruption",
    "koreanname": "타락의 포션",
    "description": "A dangerous potion that corrupts the user",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.03,
    "required_by": [
      "Corruptor Icon",
      "Soul Drinker",
      "Ring of Revival",
      "Cloak of the Fallen Shadows",
      "Bag of Corruption",
      "Grimoire of Darkness",
      "Ring of Fervor",
      "Hungry Bat Wings"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "allstat": 260,
      "hpregen": 50,
      "skilldamagepercent": 0.06,
      "active": [
        "On use, transforms user for 12 seconds",
        "Increases all stats by 75, magic defense by 60%, and heals 1% of max HP per second",
        "Cooldown: 120 seconds"
      ],
      "spec": [
        "Specialty - Mad Alchemist",
        "Alchemist - You can conjure up to 2 elixirs at once."
      ]
    }
  },
  {
    "id": "rwiz",
    "name": "Staff of Contagion",
    "koreanname": "전염의 지팡이",
    "description": "Fall into eternal oblivion and despair !",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Staff of Plague",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 5550,
      "int": 585,
      "attackspeedpercent": 0.25,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, creates a poisonous field at the target location",
        "Deals (INT X 20) magic damage in an AoE over 8 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "stpg",
    "name": "Essence of Corruption",
    "koreanname": "타락의 결정",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Bag of Corruption",
      "Ring of the Reaper",
      "Latea, the Ring of Chaos",
      "Azathos, the Pipe of Chaos",
      "Maw of Greed",
      "Laktrisha, the Illusional Sword of Poison",
      "Hell Riser",
      "Griveddon, the Bow of Certain Destruction",
      "Chronos, the Cannon of Time",
      "Cloak of the Fallen Shadows",
      "Soul Eater",
      "Corruptor Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "whwd",
    "name": "Ancient Fragment of Ruins",
    "koreanname": "낡은 유적의 조각",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Hydro Buster",
      "Plates of Lightning",
      "Ring of Composure",
      "Ring of Fervor",
      "Ring of Intrusion",
      "Wings of Blood Lord",
      "Vest of Cyclone"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "rugt",
    "name": "Corrupt Token",
    "koreanname": "타락의 토큰",
    "dropped_by": [
      "Corruptor Rectus"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "I0CA",
    "name": "Hatred",
    "koreanname": "증오",
    "description": "There is no weapon as strong as hatred.. only if you can control it.",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Bloody Hatred",
      "Flame Nightmare Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 5550,
      "int": 600,
      "mpregen": 25,
      "passive": [
        "Converts 0.035% of DMG DEALT into INT for a max of 180 INT (can be released)"
      ],
      "active": [
        "On use, activates Release",
        "Deals (INT X 12.5) magic damage in an AoE",
        "Stuns for 1.5 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0C6",
    "name": "Flameshard Armor",
    "koreanname": "플레임샤드 아머",
    "description": "Why can't I hold all these heat?",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Bloodsoul Plates",
      "Frostshard Armor",
      "Flame Nightmare Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "armor": 200,
      "str": 165,
      "agi": 80,
      "dtpercent": -0.09,
      "passive": [
        "If HP drops below 35%, activates Flameshard",
        "Increases STR by 5% for 10 seconds and restores 14% max HP",
        "Deals (flame affinity X (STR X 3.75)) magic damage in an AoE",
        "Reduces enemy attack and movement speed by 75% for 1.5 seconds",
        "Cooldown: 8 seconds"
      ]
    }
  },
  {
    "id": "I0C8",
    "name": "Ring of Nightmare",
    "koreanname": "악몽의 반지",
    "description": "Drown yourself in the sweet nightmare called power.",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Blazing Soul",
      "Ring of Strike",
      "Flame Nightmare Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "str": 275,
      "agi": 255,
      "periodicdamagepercent": 0.20,
      "healreceivedpercent": -0.20,
      "passive": [
        "On attack, 5% chance to activate Nightmare",
        "Increases attack damage by 4500, main stat by 270, and HP regen by 300 for 6 seconds"
      ]
    }
  },
  {
    "id": "ssan",
    "name": "Inferno",
    "koreanname": "인페르노",
    "description": "Unguided anger",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Dante's Inferno",
      "Flame Nightmare Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 7050,
      "agi": 540,
      "critchancepercent": 0.05,
      "passive": [
        "20% chance to activate Burning Wrath on attack",
        "Causes 5 explosions on target for 2.5 seconds",
        "Each explosion deals (AGI X 3) magic damage in an AoE",
        "Restores 1% HP per explosion",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "I0C7",
    "name": "Crown of Fervor",
    "koreanname": "열정의 화관",
    "description": "Holy crown that converts strength into pure magic",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Crown of Composure",
      "Crown of Rage",
      "Flame Nightmare Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ],
    "stats": {
      "armor": 90,
      "allstat": 115,
      "skilldamagepercent": 0.05,
      "affinityflamepercent": 0.04,
      "passive": [
        "Converts 2% of max HP into INT (max 240)"
      ]
    }
  },
  {
    "id": "rej1",
    "name": "Spirit of Nightmare",
    "koreanname": "악몽의 기운",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Laksha, the Ancient Sword of Poison",
      "Bahanar, the True Sword of Illusion",
      "Aglaia, the Spear of Heavenly Flows",
      "Meacronacer, the Sword of Thousand Illusions",
      "Soulstalker",
      "Void Eye",
      "Heart of Ifrit",
      "Soul of the Dead",
      "Cloak of the Fallen Shadows",
      "Flame Nightmare Icon",
      "Ring of Composure",
      "Vest of Cyclone"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "I0CD",
    "name": "Essence of Anger",
    "koreanname": "분노의 결정",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Anger",
      "Flame Explosion",
      "Devil Chaser",
      "Staff of Abyss",
      "Staff of Domination",
      "Hell Riser",
      "Eye of the Flame Lord",
      "Creation of the Sky and Earth",
      "Benedict, the Crimson Armor of Blood",
      "Medea, the Robe of the Witch",
      "Latea, the Ring of Chaos",
      "Trueblood Ring",
      "Wings of Fury",
      "Flame Nightmare Icon",
      "Bag of Life",
      "Ring of Fervor"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "shdt",
    "name": "Nightmare Token",
    "koreanname": "나이트메어 토큰",
    "dropped_by": [
      "Flame Nightmare"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "skul",
    "name": "Water Cannon",
    "koreanname": "워터 캐논",
    "description": "Eat this cannon !!",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Hydro Buster",
      "Turtle Lord Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "damage": 4650,
      "int": 510,
      "healingpercent": 0.1,
      "active": [
        "On use, releases Water Beam",
        "Deals (water affinity X (INT X 3.75)) magic damage per 0.125 seconds and pushes all enemies hit",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialty - Purging Water",
        "Shooter - Nanomachine Injection: Healing speed decreased by 50% but heal amount increased by 50% and heals all allies within 400 range"
      ]
    }
  },
  {
    "id": "I0CR",
    "name": "Tunic of Subtlety",
    "koreanname": "교활의 튜닉",
    "description": "Negates attacks aimed at the user.",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Tunic of the Wraith",
      "Turtle Lord Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "armor": 180,
      "agi": 180,
      "skilldamagepercent": 0.07,
      "passive": [
        "Dodges upto 3 attacks every 20 seconds"
      ]
    }
  },
  {
    "id": "I0CG",
    "name": "Purified Water",
    "koreanname": "마력의 정수",
    "description": "It won't dry no matter how much you drink it",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Staff of Madness",
      "Eternal Rose",
      "Ring of Revival",
      "Bag of Life",
      "Ring of Composure",
      "Druid's Mantle",
      "Turtle Lord Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "allstat": 230,
      "mp": 1200,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, restores 20% MP",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0CP",
    "name": "Scale Protector",
    "koreanname": "스케일 프로텍터",
    "description": "Helm blessed by the sea",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.04,
    "required_by": [
      "Protector's Will",
      "Turtle Lord Icon"
    ],
    "worth": 1,
    "recipe": [
      {
        "Prius Silver Coin": 6
      }
    ],
    "stats": {
      "armor": 110,
      "str": 120,
      "dtpercent": -0.08,
      "passive": [
        "12.5% chance to restore 2.5% HP on being hit",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, increases max HP by 6000 and MP by 2250 for 15 seconds",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "crdt",
    "name": "Oath of Courage",
    "koreanname": "용기의 맹세",
    "description": "Orb blessed with a warrior's will to protect his allies",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Blazing Heart",
      "Eternal Rose",
      "Bell of Light",
      "Ispion, the Runed Ring",
      "Heaven's Fist",
      "Turtle Lord Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ],
    "stats": {
      "allstat": 260,
      "skilldamagepercent": 0.05,
      "passive": [
        "Increases nearby allies magic defense by 8%"
      ],
      "active": [
        "On use, consumes HP to activate Blessing",
        "Creates a shield for all nearby allies for 8 seconds",
        "(0.6 X 10% max HP) + (main stat X 1.5) shield",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0CJ",
    "name": "Pure Steel",
    "koreanname": "순수의 강철",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Deathbringer",
      "Oceanus, the Sword of Light",
      "Meacronacer, the Sword of Thousand Illusions",
      "Crimson Star",
      "Ring of Strike",
      "Horn of Lightning God",
      "Reactive Armor",
      "Robe of the Sage",
      "Purefrost Gauntlet",
      "Trueblood Ring",
      "Maw of Greed",
      "Turtle Lord Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "sror",
    "name": "Mark of Storm",
    "koreanname": "폭풍의 문장",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Storm Reaver",
      "Aglaia, the Spear of Heavenly Flows",
      "Pheles, the Bow of Skies",
      "Tiberius, the Spear of Lightning",
      "Protector's Will",
      "Wanderer's Cape",
      "Horn of Devil",
      "Plates of Lightning",
      "Hungry Bat Wings",
      "Turtle Lord Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "I0CK",
    "name": "Mana Orb",
    "koreanname": "마나 오브",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.04,
    "required_by": [
      "Spirit Dagger",
      "Twin Snow",
      "Espishu, the Sword of Eternity",
      "Ethenos, the Staff of Space",
      "Griveddon, the Bow of Certain Destruction",
      "Chronos, the Cannon of Time",
      "Winter's Heart",
      "Benziena, the Earthen Soul",
      "Triple Snow",
      "Creation of the Sky and Earth",
      "Bloodsoul Plates",
      "Ring of Intrusion",
      "Turtle Lord Icon"
    ],
    "worth": 2,
    "recipe": [
      {
        "Prius Silver Coin": 9
      }
    ]
  },
  {
    "id": "wshs",
    "name": "Turtle Token",
    "koreanname": "터틀 토큰",
    "dropped_by": [
      "Turtle Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "I0LN",
    "name": "Prius Silver Coin",
    "koreanname": "프리우스 은화",
    "description": "A valuable coin. It can be traded with collectors for other items.",
    "notes": [
      "To exchange, you can sell items dropped by mid-level bosses ('Used In' section) to the Collector NPC",
      "Can be used to purchase items from the Collector NPC"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Coin",
    "color": "C0C0C0",
    "required_by": [
      "Corruptor",
      "Stalker",
      "Avenger",
      "Chaser",
      "Skull Seal",
      "Potion of Corruption",
      "Staff of Contagion",
      "Essence of Corruption",
      "Ancient Fragment of Ruins",
      "Spiritus, the Sword of Elements",
      "Storm Headdress",
      "Visvire, the Hammer of Storm",
      "Spirit Orb",
      "Spirit of Forest",
      "Hatred",
      "Flameshard Armor",
      "Ring of Nightmare",
      "Inferno",
      "Crown of Fervor",
      "Spirit of Nightmare",
      "Essence of Anger",
      "Water Cannon",
      "Tunic of Subtlety",
      "Purified Water",
      "Scale Protector",
      "Oath of Courage",
      "Pure Steel",
      "Mark of Storm",
      "Mana Orb"
    ]
  },
  {
    "id": "I0NZ",
    "name": "Prius Gold Coin",
    "koreanname": "프리우스 금화",
    "description": "A valuable coin. It can be traded with collectors for other items.",
    "notes": [
      "Can be used to purchase items from the Collector NPC"
    ],
    "dropped_by": [
      "Bone Dragon",
      "Skeletal King Desperia",
      "Zombie Lord",
      "Ancient Ent",
      "Archangel Samael",
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Coin",
    "color": "C0C0C0",
    "droprate": [
      0.005,
      0.005,
      0.006,
      0.006,
      0.007,
      0.0075
    ],
    "required_by": [
      "Ragnaar Icon",
      "Tentacle Lord Icon",
      "Gatekeeper Icon",
      "Giant Golem Icon",
      "Mad Clown Icon",
      "Mana Ancient Icon",
      "Spirit Beast Icon",
      "Bone Dragon Icon",
      "Coin of Effort",
      "Ancient Hourglass",
      "Dragonic Orb",
      "Burning Bone Fragments",
      "Dragon's Eye",
      "Death Scythe",
      "Staff of Souls",
      "Robe of the Reaper",
      "Brooch of Darkness",
      "Bone Necklace",
      "Fragment of Oblivion",
      "Skeleton Bone",
      "Orb of Oblivion",
      "Spirit of Abyss",
      "Parasitic Staff",
      "Hood of the Fallen",
      "Shroud of Perseverance",
      "Proof of Purification",
      "Heart of Fire",
      "Dark Crystal",
      "Embrace of Nature",
      "Purified Water of Nature",
      "Fragment of the Wind",
      "Griseus, the Sword of Protection",
      "Ring of the Storm",
      "Guardian of the Skies",
      "Steel of God",
      "God's Page",
      "Essence of Light",
      "Levante, the Sword of Love and Hate",
      "Draconic Skin Rusalka",
      "Nephthys, the Engraved Ring",
      "Essence of Darkness",
      "Antimatter",
      "Frozen Debris"
    ]
  },
  {
    "id": "pinv",
    "name": "Ancient Hourglass",
    "koreanname": "낡은 모래시계",
    "description": "A mystical artifact that occasionally reverses the flow of sand",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.016,
    "required_by": [
      "Espishu, the Sword of Eternity",
      "Ring of Time",
      "Heaven's Fist"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "mainstat": 335,
      "attackspeedpercent": 0.1,
      "passive": [
        "Every 3 seconds, your next attack strikes for 2 additional times"
      ],
      "active": [
        "Every 30 seconds, refreshs a random skill"
      ]
    }
  },
  {
    "id": "sreg",
    "name": "Dragonic Orb",
    "koreanname": "드래고닉 오브",
    "description": "An orb overflowing with mana enough to controll a dragon",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Shared)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.016,
    "required_by": [
      "Ethenos, the Staff of Space",
      "Triple Snow",
      "Crimson Hatred",
      "Druid's Mantle",
      "Staff of Abyss",
      "Bloodsoul Plates",
      "Bag of Universe",
      "Wings of Flame Lord",
      "Wings of Frost Lord",
      "Heaven's Door",
      "Benziena, the Earthen Heart"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 5700,
      "allstat": 450,
      "hpregen": 90,
      "skilldamagepercent": 0.075,
      "active": [
        "On use, unleashes Draconic Power",
        "Summons a Dragon for 15 seconds",
        "Increases the user's magic reduction by 90%",
        "User becomes invulnerable to instant death",
        "Dragon skills:",
        "Flame Breath [Q]: Deals (MAIN STAT X 12.5) magic damage per second in an AoE",
        "Dragon Scale [W]: Absorbs 3000 damage,, Lasts 2 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "tret",
    "name": "Burning Bone Fragments",
    "koreanname": "불타는 뼛조각",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0225,
    "required_by": [
      "Griveddon, the Bow of Certain Destruction",
      "Ruinbringer",
      "Hellspike Armor",
      "Wings of Phoenix",
      "Archangel Wings",
      "Bag of Destruction",
      "Hood of Apocalypse"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "btst",
    "name": "Dragon's Eye",
    "koreanname": "용의 눈",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0225,
    "required_by": [
      "Claws of Beriel",
      "Chronos, the Cannon of Time",
      "Hellflame",
      "Dragon Mask",
      "Eye of the Flame Lord",
      "Hellspike Armor",
      "Hades, the Armor of Despair",
      "Maw of Greed",
      "Ring of Fervor",
      "Oblivion",
      "Fiend Chaser",
      "Punisher",
      "Bag of Explosion",
      "Radiance of the One",
      "Crown of Great Rage"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "I0OZ",
    "name": "Coin of Effort",
    "koreanname": "노력의 재화",
    "notes": [
      "Coin of Effort is used to exchange several items:",
      "Wings of Death Mount: Coin of Effort x8",
      "Mana Ancient Mount: Coin of Effort x6",
      "Shadow Dragon Mount: Coin of Effort x12",
      "Costume of Effort: Coin of Effort x8",
      "In addtion to being dropped by bosses, it can also be exchanged for 5 Prius Gold Coin",
      "See Collector NPC to exchange (all item recipes that include Coin of Effort will be here too)"
    ],
    "dropped_by": [
      "Duke Lazarus",
      "Gaia",
      "Arcane Construct"
    ],
    "required_by": [
      "Storage Expansion Coupon",
      "Death Fiend Icon",
      "Valtora Icon",
      "Ifrit Icon",
      "Nereid Icon",
      "Agareth Icon"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Coin",
    "color": "C0C0C0",
    "droprate": [
      0.001,
      0.001,
      0.001,
      0.0015,
      0.0015,
      0.001,
      0.0015
    ],
    "recipe": [
      {
        "Prius Gold Coin": 5
      }
    ]
  },
  {
    "id": "I0M7",
    "name": "Bone Dragon Icon",
    "koreanname": "본 드래곤 아이콘",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 8
      }
    ],
    "stats": {
      "damagedealtpercent": 0.005
    }
  },
  {
    "id": "rre1",
    "name": "Bone Dragon Token",
    "koreanname": "본 드래곤 토큰",
    "dropped_by": [
      "Bone Dragon"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "ratc",
    "name": "Death Scythe",
    "koreanname": "데스 사이드",
    "description": "Weapon used by the grim reapers of despair",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Claws of Beriel",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 7050,
      "str": 520,
      "agi": 505,
      "critmultiplier": 0.2,
      "passive": [
        "12% chance to activate Strike of Malice on attack",
        "Deals (MAIN STAT X 5) magic damage"
      ],
      "active": [
        "On use, activates Soul Reaper",
        "Deals (MAIN STAT X 22.5) magic damage and increases skill damage by 5%",
        "Slows enemy movement speed by 50%",
        "Cooldown: 150 seconds"
      ]
    }
  },
  {
    "id": "rat6",
    "name": "Staff of Souls",
    "koreanname": "영혼의 지팡이",
    "description": "Staff infused with countless souls that were taken away by the Skeletal King",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Hell Riser",
      "Crimson Hatred",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 5700,
      "int": 690,
      "mp": 2250,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Dark Howl",
        "Deals (INT X 3) magic damage",
        "Stacks magic damage taken of target by 1% per wave for 6 waves",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "ward",
    "name": "Robe of the Reaper",
    "koreanname": "사신의 로브",
    "description": "A bizarre robe worn by the reaper.",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.0175,
    "required_by": [
      "Medea, the Robe of the Witch",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "armor": 175,
      "int": 275,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Death Pact",
        "At the cost of 40% HP, increases INT by 250",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "penr",
    "name": "Brooch of Darkness",
    "koreanname": "암흑의 브로치",
    "description": "The brooch of the Skeletal King that contains a pecular blessing",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.0175,
    "required_by": [
      "Cold Ring of Death",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "mainstat": 390,
      "skilldamagepercent": 0.12
    }
  },
  {
    "id": "rat9",
    "name": "Bone Necklace",
    "koreanname": "본 네크리스",
    "description": "Ornament with evil mana flowing through",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.0175,
    "required_by": [
      "Requiem, the Armor of Lamentation",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "allstat": 340,
      "attackspeedpercent": 0.15,
      "passive": [
        "Every 8 seconds, activates one of the following:",
        "Anger: +10% SKILL DMG",
        "Oblivion: +16% damage reduction",
        "Obsession: (MAIN STAT X 20%) HP regen"
      ],
      "active": [
        "On use, temporarily activates all effects",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0EK",
    "name": "Fragment of Oblivion",
    "koreanname": "망각의 파편",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Espishu, the Sword of Eternity",
      "Ethenos, the Staff of Space",
      "Hellflame",
      "Everfrostbane",
      "Hood of Apocrypha",
      "Bell of Light",
      "Ispion, the Runed Ring",
      "Frost Fairy Wings",
      "Pure Crystal Wings",
      "Wings of Slayer",
      "Oblivion",
      "Bag of Explosion",
      "Skeletal King Icon"
    ]
  },
  {
    "id": "I0EL",
    "name": "Skeleton Bone",
    "koreanname": "스켈레톤 본",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Griveddon, the Bow of Certain Destruction",
      "Chronos, the Cannon of Time",
      "Devil Chaser",
      "Ruinbringer",
      "Soulstalker",
      "Eye of the Flame Lord",
      "Requiem, the Armor of Lamentation",
      "Benedict, the Crimson Armor of Blood",
      "Hellspike Armor",
      "Hades, the Armor of Despair",
      "Soul of the Dead",
      "Bag of Destruction",
      "Skeletal King Icon"
    ]
  },
  {
    "id": "nflg",
    "name": "Orb of Oblivion",
    "koreanname": "망각의 구슬",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Espishu, the Sword of Eternity",
      "Ethenos, the Staff of Space",
      "Griveddon, the Bow of Certain Destruction",
      "Chronos, the Cannon of Time",
      "Dante's Inferno",
      "Laktrisha, the Illusional Sword of Poison",
      "Soulstalker",
      "Everfrostbane",
      "Crown of Serenity",
      "Requiem, the Armor of Lamentation",
      "Benedict, the Crimson Armor of Blood",
      "Bloodsoul Plates",
      "Frost Fairy Wings",
      "Pure Crystal Wings",
      "Ring of Composure",
      "Ring of Time",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "gsou",
    "name": "Spirit of Abyss",
    "koreanname": "심연의 기운",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Claws of Beriel",
      "Crimson Reaper",
      "Staff of Abyss",
      "Heartseeker",
      "Crimson Star",
      "Hood of Apocrypha",
      "Grandine, the Plates of Wraith",
      "Ispion, the Runed Ring",
      "Seal of Deceiver",
      "Soul of the Dead",
      "Bag of Mother Nature",
      "Grimoire of Darkness",
      "Eye of the Reaper",
      "Skeletal King Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "fgrg",
    "name": "Skeleton Token",
    "koreanname": "스켈레톤 토큰",
    "dropped_by": [
      "Skeletal King Desperia"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "belv",
    "name": "Parasitic Staff",
    "koreanname": "기생의 지팡이",
    "description": "You are already dead; you just haven't realized it!",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Staff of Plague",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 5850,
      "int": 660,
      "periodicdamagepercent": 0.2,
      "mdpercent": 0.12,
      "active": [
        "On use, activates Parasite",
        "If enemy: deals (INT X 1) magic damage per 0.5 second and heal received reduced by 10%",
        "If ally: increases magic defense by 40% and heals (INT X 1) HP per 0.5 second (if self, heals (INT X 0.5) HP)",
        "Upon expiration, will explode and deal (INT X 6) magic damage in an AoE",
        "Cooldown: 25 seconds"
      ]
    }
  },
  {
    "id": "crys",
    "name": "Hood of the Fallen",
    "koreanname": "망자의 두건",
    "description": "You can feel the grudge of ones unable to die",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Hood of Apocrypha",
      "Soul of the Dead",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "armor": 95,
      "agi": 210,
      "int": 210,
      "hp": 1500,
      "revivaltimepercent": -0.4,
      "passive": [
        "Activates Hands of Fallen on death",
        "Explodes dealing (MAIN STAT X 40) magic damage in an AoE",
        "Stuns for 1 second"
      ]
    }
  },
  {
    "id": "stel",
    "name": "Shroud of Perseverance",
    "koreanname": "집념의 장막",
    "description": "You can feel the obsession of Zombie Lord toward the immortality..",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Blazing Heart",
      "Ring of Revival",
      "Wings of Phoenix",
      "Wings of Slayer",
      "Brave Heart",
      "Eternal Flame",
      "Wings of Immortal",
      "Cape of Insatiable Hunger",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "mainstat": 295,
      "hp": 1500,
      "dtpercent": -0.12,
      "passive": [
        "On attack, 8% chance to activate Perseverance",
        "Heals 40% HP, increases attack speed by 50%, and main stat by 30 per second for 10 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0AS",
    "name": "Proof of Purification",
    "koreanname": "정화의 증표",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Oceanus, the Sword of Light",
      "Tiberius, the Spear of Lightning",
      "Hellflame",
      "Halo of Judgment",
      "Bell of Light",
      "Latea, the Ring of Overlord",
      "Diana, the Robe of Holy Maiden",
      "Medea, the Robe of the Witch",
      "Protection of the Fairies",
      "Grimoire of Darkness",
      "Ring of Fervor",
      "Hydro Buster",
      "Bag of Explosion",
      "Spirit of Protector",
      "Robe of Storm",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "rde1",
    "name": "Heart of Fire",
    "koreanname": "불로의 심장",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Crimson Reaper",
      "Winter's Heart",
      "Staff of Domination",
      "Heartseeker",
      "Tunic of the Wraith",
      "Benedict, the Crimson Armor of Blood",
      "Eternal Rose",
      "Ring of Time",
      "Ispion, the Runed Ring",
      "Soul Eater",
      "Bag of Mother Nature",
      "Splitting of the Sky and Earth",
      "Punisher",
      "Felspike Armor",
      "Benziena, the Earthen Heart",
      "Abyss Fall",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "I08P",
    "name": "Dark Crystal",
    "koreanname": "다크 크리스탈",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Bloody Hatred",
      "Staff of Abyss",
      "Hell Riser",
      "Eye of Wallachia",
      "Frostshard Armor",
      "Robe of the Necromancer",
      "Grim Heart",
      "Wings of Slayer",
      "Crown of Rage",
      "Bag of Destruction",
      "Plates of Lightning",
      "Wings of Blood Lord",
      "Oblivion",
      "Fiend Chaser",
      "Crown of Absolute Zero",
      "Zombie Lord Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "pomn",
    "name": "Zombie Token",
    "koreanname": "좀비 토큰",
    "dropped_by": [
      "Zombie Lord"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0D2",
    "name": "Embrace of Nature",
    "koreanname": "대자연의 포옹",
    "description": "The grace of the Mother Nature that embraces all",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Protection of the Fairies",
      "Bag of Mother Nature",
      "Wings of Blood Lord",
      "Harmony of Sky and Earth",
      "Benziena, the Earthen Heart",
      "Ancient Ent Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "str": 315,
      "int": 315,
      "hpregen": 85,
      "mdpercent": 0.18,
      "healreceivedpercent": 0.15,
      "active": [
        "On use, temporarily increases nearby allies' max HP for 45 seconds",
        "If self or summon: increases HP by 1800 and skill damage by 5%",
        "If ally: increases HP by 900",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "pgin",
    "name": "Griseus, the Sword of Protection",
    "koreanname": "수호의 검 그리세우스",
    "description": "Sword protected by a mysterious power",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Oceanus, the Sword of Light",
      "Winter's Heart",
      "Ancient Ent Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 6450,
      "mainstat": 240,
      "allstat": 240,
      "dtpercent": -0.08,
      "active": [
        "On use, activates Ethereal Strike",
        "If enemy: deals (max MP X 2) pure damage and stuns for 1 second",
        "If ally: heals (25% max HP)",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "srtl",
    "name": "Ring of the Storm",
    "koreanname": "폭풍의 반지",
    "description": "Storm!",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.02,
    "required_by": [
      "Latea, the Ring of Overlord",
      "Hydro Buster",
      "Plates of Lightning",
      "Ring of Fervor",
      "Nebula Rose",
      "Vest of Storm",
      "Storm",
      "Oblivion",
      "Ring of Divine Winds",
      "Robe of Storm",
      "Ancient Ent Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "allstat": 280,
      "passive": [
        "On skill cast, increases attack speed by 15% and skill damage by 3% for 6 seconds (stacks up to 4 times)"
      ],
      "active": [
        "On use, summons a storm",
        "Deals (MAIN STAT X 2) magic damage in an AoE per second for 4 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "ofir",
    "name": "Purified Water of Nature",
    "koreanname": "대자연의 정수",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Espishu, the Sword of Eternity",
      "Ethenos, the Staff of Space",
      "Griveddon, the Bow of Certain Destruction",
      "Chronos, the Cannon of Time",
      "Laktrisha, the Illusional Sword of Poison",
      "Meacronacer, the Sword of Thousand Illusions",
      "Staff of Domination",
      "Hellflame",
      "Dragon Mask",
      "Protector's Will",
      "Prophetia, the Greater Source of Mana",
      "Crown of Rage",
      "Creation of the Sky and Earth",
      "Frost Fairy Wings",
      "Ring of Composure",
      "Druid's Mantle",
      "Bag of Explosion",
      "Ruler of the Skies",
      "Rainmaker",
      "Ancient Ent Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "shtm",
    "name": "Fragment of the Wind",
    "koreanname": "바람의 조각",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Spirit Dagger",
      "Pheles, the Bow of Skies",
      "Pheles, the Bow of God",
      "Tiberius, the Spear of Lightning",
      "Espishu, the Sword of Eternity",
      "Crown of Serenity",
      "Crown of Rage",
      "Creation of the Sky and Earth",
      "Medea, the Robe of the Witch",
      "Ring of Strike",
      "Ispion, the Runed Ring",
      "Soul Eater",
      "Bag of Destruction",
      "Horn of God",
      "Mask of Demigod",
      "Ancient Ent Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "pres",
    "name": "Ent Token",
    "koreanname": "엔트 토큰",
    "dropped_by": [
      "Ancient Ent"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0EG",
    "name": "Guardian of the Skies",
    "koreanname": "창공의 수호자",
    "description": "A beautiful set of wings worn by the Guardian of the Skies.",
    "dropped_by": [
      "Archangel Samael"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Archangel Wings",
      "Brave Heart",
      "Ruler of the Skies",
      "Vest of Divine Winds",
      "Archangel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "str": 250,
      "agi": 280,
      "skilldamagepercent": 0.075,
      "mdpercent": 0.075,
      "passive": [
        "On attack after skill cast (within 2 seconds), activates Power of Skies",
        "Every 4th attack deals (MAIN STAT X 2) pure damage",
        "Increases main stat by 50 for 4 seconds",
        "Cooldown: 16 seconds"
      ],
      "active": [
        "On use, activates Star of Creation",
        "Deals (MAIN STAT X 40) magic damage in selected area",
        "Stuns for 2 seconds",
        "Cooldown: 150 seconds"
      ],
      "spec": [
        "Specialty",
        "Thunderer - Improved Magnetic Field: When passive is triggered, restores 33% of Magnetic Shield."
      ]
    }
  },
  {
    "id": "I0E5",
    "name": "Steel of God",
    "koreanname": "신의 금속",
    "dropped_by": [
      "Archangel Samael"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Claws of Beriel",
      "Tiberius, the Spear of Lightning",
      "Blazing Heart",
      "Atricia, the Sword of Dreams",
      "Horn of Lightning God",
      "Creation of the Sky and Earth",
      "Benedict, the Crimson Armor of Blood",
      "Ring of Time",
      "Horn of God",
      "Robe of Archlich",
      "Punisher",
      "Rainmaker",
      "Astra, the Sword of Moonlight",
      "Benziena, the Earthen Heart",
      "Agnitus, the Bow of Divine Fury",
      "Archangel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "I0E7",
    "name": "God's Page",
    "koreanname": "위서의 한 페이지",
    "dropped_by": [
      "Archangel Samael"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Ruinbringer",
      "Hell Riser",
      "Staff of Plague",
      "Crimson Hatred",
      "Hood of Apocrypha",
      "Grandine, the Plates of Wraith",
      "Cold Ring of Death",
      "Grimoire of Darkness",
      "Ring of Time",
      "Fiend Chaser",
      "Desolation",
      "Espishu, the True Sword of Eternity",
      "Radiance of the One",
      "Eternal Winter",
      "Heaven's Door",
      "Bloodseeker Plates",
      "Archangel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "I0E6",
    "name": "Essence of Light",
    "koreanname": "빛의 결정",
    "dropped_by": [
      "Archangel Samael"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.025,
    "required_by": [
      "Oceanus, the Sword of Light",
      "Halo of Judgment",
      "Bell of Light",
      "Seal of Deceiver",
      "Plates of Lightning",
      "Cosmic Star",
      "Nebula Rose",
      "Vest of Storm",
      "Storm",
      "Bag of Universe",
      "Soul of Abyss",
      "Cosmic Reaper",
      "Ethenos, the True Staff of Space",
      "Harmonia, the Sparkle of Life",
      "Star of Apotheosis",
      "Guardian Angel",
      "Archangel Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ]
  },
  {
    "id": "sneg",
    "name": "Archangel Token",
    "koreanname": "주천사의 토큰",
    "dropped_by": [
      "Archangel Samael"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "kymn",
    "name": "Levante, the Sword of Love and Hate",
    "koreanname": "애증의 검 르반테",
    "description": "I wished for a happiness together, not just alone..",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.01,
    "required_by": [
      "Cosmic Reaper",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "damage": 7650,
      "str": 500,
      "agi": 570,
      "skilldamagepercent": 0.05,
      "passive": [
        "Resonates with nearby allies to become stronger",
        "For each nearby ally, increases attack damage by 525 and skill damage by 1%",
        "12% chance to deal (MAIN STAT X 5) magic damage"
      ]
    }
  },
  {
    "id": "bzbf",
    "name": "Draconic Skin Rusalka",
    "koreanname": "드래고닉 스킨 루살카",
    "description": "Mana-infused armor that is decorated with dragon's scales.",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Robe of Storm",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "armor": 205,
      "mainstat": 240,
      "hp": 1200,
      "mp": 1200,
      "passive": [
        "10% Chance to activate Dragonic Skin on being damaged",
        "Blocks any amount of damage and heals you for that amount",
        "Cooldown: 4 seconds"
      ],
      "active": [
        "On use, blocks harmful magic every 3 minutes",
        "Lasts 5 seconds",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "shwd",
    "name": "Nephthys, the Engraved Ring",
    "koreanname": "각인의 반지 네프티스",
    "description": "Dark ring that Empress Nephthys bestows upon her familiars",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "droprate": 0.015,
    "required_by": [
      "Ring of Time",
      "Ispion, the Runed Ring",
      "Seal of Deceiver",
      "Crown of Absolute Zero",
      "Wings of Flame Lord",
      "Ring of Malevolence",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 3
      }
    ],
    "stats": {
      "allstat": 295,
      "critmultiplier": 0.2,
      "skilldamagepercent": 0.06,
      "mdpercent": 0.06,
      "active": [
        "On use, activates Gifted Power",
        "Increases HP regen by 90 and magic defense by 5% every 1.5 seconds (up to 5 times or fully healed)",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "mcri",
    "name": "Essence of Darkness",
    "koreanname": "암흑의 결정",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0175,
    "required_by": [
      "Crimson Reaper",
      "Ruinbringer",
      "Soulstalker",
      "Atricia, the Sword of Dreams",
      "Crimson Hatred",
      "Crown of Composure",
      "Latea, the Ring of Overlord",
      "Cloak of the Fallen Shadows",
      "Grim Heart",
      "Wings of Blood Lord",
      "Bag of Universe",
      "Soul of Abyss",
      "Fiend Chaser",
      "Punisher",
      "Ethenos, the Staff of Chaos",
      "Armageddon",
      "Voidshard Armor",
      "Staff of Plague",
      "Bloodstorm",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 5
      }
    ]
  },
  {
    "id": "I08N",
    "name": "Antimatter",
    "koreanname": "안티 매터",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0175,
    "required_by": [
      "Staff of Plague",
      "Pheles, the Bow of God",
      "Eye of Wallachia",
      "Protector's Will",
      "Prophetia, the Greater Source of Mana",
      "Ring of Strike",
      "Seal of Deceiver",
      "Horn of God",
      "Wings of Slayer",
      "Cosmic Star",
      "Vest of Storm",
      "Storm",
      "Splitting of the Sky and Earth",
      "Robe of Archlich",
      "Cosmic Reaper",
      "Rainmaker",
      "Bag of Demise",
      "Diana, the Robe of Holy Maiden",
      "Cape of Deep Abyss",
      "Soul Devourer",
      "Ring of Divine Winds",
      "Horn of Demon God",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 5
      }
    ]
  },
  {
    "id": "I09N",
    "name": "Frozen Debris",
    "koreanname": "한기의 조각",
    "dropped_by": [
      "Death Fiend",
      "Shadow Dragon Irbert"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.012,
      0.01
    ],
    "required_by": [
      "Winter's Heart",
      "Meacronacer, the Sword of Thousand Illusions",
      "Triple Snow",
      "Everfrostbane",
      "Crown of Serenity",
      "Crown of Composure",
      "Vest of Storm",
      "Frostshard Armor",
      "Winter Robe",
      "Medea, the Robe of the Witch",
      "Hades, the Armor of Despair",
      "Cold Ring of Death",
      "Ruler of the Skies",
      "Hood of Apocalypse",
      "Wings of Frost Lord",
      "Maw of Beriel",
      "Calamity",
      "Wings of Night Lord",
      "Grim Heart",
      "Demonic Fist",
      "Shadow Dragon Icon"
    ],
    "recipe": [
      {
        "Prius Gold Coin": 5
      }
    ]
  },
  {
    "id": "shar",
    "name": "Token of Darkness",
    "koreanname": "암흑의 토큰",
    "dropped_by": [
      "Shadow Dragon Irbert"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "srbd",
    "name": "The Ender",
    "koreanname": "디 엔더",
    "description": "The weapon of Death Fiend, who reigns over death and brings demise",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Shared)",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.008,
    "required_by": [
      "Calamity",
      "Astra, the Sword of Moonlight",
      "Heartrender",
      "Agnitus, the Bow of Divine Fury",
      "Fulminata, the Bringer of Storms",
      "Abyss Fall",
      "Divine Slayer",
      "Final Omen",
      "Gate of Abyss"
    ],
    "stats": {
      "damage": 9900,
      "mainstat": 813,
      "attackspeedpercent": 0.25,
      "passive": [
        "Deals 15% bonus damage to enemies under 50% HP",
        "Empowers next attack every 12 seconds",
        "Empowered attacks deal (MAIN STAT X 18.75) magic damage"
      ]
    }
  },
  {
    "id": "oslo",
    "name": "Armor of Grudge",
    "koreanname": "원한의 갑주",
    "description": "Cursed armor touched by death",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.013,
    "required_by": [
      "Hades, the Armor of Despair",
      "Athanasia, the Armor of the Reaper",
      "Felspike Armor",
      "Nevedium, the Armor of Demonblood",
      "Bloodseeker Plates",
      "Plates of Sanguine Fury"
    ],
    "stats": {
      "armor": 200,
      "mainstat": 270,
      "hp": 1500,
      "healreceivedpercent": -0.15,
      "passive": [
        "Releases Grudge every 6 seconds",
        "Deals (ATK DMG X 1.25) magic damage around user",
        "Increases attack damage by 6000 for 1.5 seconds"
      ]
    }
  },
  {
    "id": "sprn",
    "name": "Eyes of the Watcher",
    "koreanname": "주시자의 눈",
    "description": "I'm always watching you.. from far..",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.013,
    "required_by": [
      "Cosmic Star",
      "Bag of Despair",
      "Hood of Apocalypse",
      "Eye of the Reaper",
      "Crown of Extreme Anger",
      "Heaven's Door",
      "Spirit of Protector",
      "Cage of Twisted Souls",
      "Crescendo of Madness",
      "Bloodstorm"
    ],
    "stats": {
      "armor": 100,
      "int": 265,
      "skilldamagepercent": 0.05,
      "mdpercent": 0.15,
      "active": [
        "On use, activates Death Gaze",
        "Deals (MAIN STAT X 37.5) magic damage",
        "Increases magic damage taken by enemies [Type-A] by 8% for 4 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "ledg",
    "name": "Ring of Destruction",
    "koreanname": "파괴의 반지",
    "description": "Ring bestowed with the power of the Destroyer",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.013,
    "required_by": [
      "Latea, the Ring of Overlord",
      "Ring of Insanity",
      "Eternal Flame",
      "Power of Beriel",
      "Bag of Demise",
      "Heartrender"
    ],
    "stats": {
      "mainstat": 295,
      "allstat": 125,
      "passive": [
        "15% chance to do 40% bonus damage upon dealing damage"
      ]
    }
  },
  {
    "id": "I0DG",
    "name": "Spearhead of Death",
    "koreanname": "죽음의 창두",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.009,
    "required_by": [
      "Staff of Plague",
      "Crimson Hatred",
      "Pheles, the Bow of God",
      "Atricia, the Sword of Dreams",
      "Splitting of the Sky and Earth",
      "Cosmic Reaper",
      "Soul of Abyss",
      "Desolation",
      "Espishu, the Sword of Chaos",
      "Eternal Winter",
      "Soulbane",
      "Last Word",
      "Bag of Demise",
      "Chrono Chaser",
      "Thanatos, the Robe of Hell",
      "Ethenos, the Staff of Chaos",
      "Armageddon",
      "Ethereal Dagger",
      "Cape of Deep Abyss",
      "Horn of Demon God",
      "Seed of Malice",
      "Voidshard Armor",
      "Harmonia, the Sparkle of Life",
      "Archangel Wings",
      "Protection of the Fairies"
    ]
  },
  {
    "id": "kygh",
    "name": "Fragment of Chaos",
    "koreanname": "혼돈이 깃든 파편",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.009,
    "required_by": [
      "Protection of the Fairies",
      "Archangel Wings",
      "Nebula Rose",
      "Storm",
      "Bag of Universe",
      "Ruler of the Skies",
      "Chaos",
      "Espishu, the True Sword of Eternity",
      "Ethenos, the True Staff of Space",
      "Wings of Flame Lord",
      "Wings of Frost Lord",
      "Wings of Night Lord",
      "Chaos Dagger",
      "Prophetia, the Origin of Knowledge",
      "Agnitus, the Bow of Divine Fury",
      "Crescendo of Madness",
      "Cape of Insatiable Hunger",
      "Sanguis, the Robe of Sacrifice",
      "Chaos Pickaxe"
    ]
  },
  {
    "id": "I0O0",
    "name": "Prius Platinum Coin",
    "koreanname": "프리우스 백금화",
    "description": "A valuable coin. It can be traded with collectors for other items.",
    "notes": [
      "Can be used to purchase items from the Collector NPC"
    ],
    "dropped_by": [
      "Death Fiend",
      "Valtora",
      "Ifrit",
      "Nereid",
      "Agareth"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Coin",
    "color": "C0C0C0",
    "droprate": [
      0.002,
      0.002,
      0.002,
      0.0025,
      0.003
    ],
    "required_by": [
      "Prius Gold Coin",
      "Coin of Effort",
      "The Ender",
      "Armor of Grudge",
      "Eyes of the Watcher",
      "Ring of Destruction",
      "Spearhead of Death",
      "Fragment of Chaos",
      "Shining Fragment of Ruins",
      "Shackles of Heaven",
      "Aegis of Storm",
      "Essence of Storm",
      "Heart of Volcano",
      "Aegis of Flame",
      "Essence of Flame",
      "Grail of Eternity",
      "Aegis of Sea",
      "Essence of Sea",
      "Curse of Greed",
      "Fragment of Soul",
      "Fragment of Hell",
      "Mark of Lord"
    ]
  },
  {
    "id": "I0QH",
    "name": "Death Fiend Icon",
    "koreanname": "데스 핀드 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Coin of Effort": 5
      }
    ],
    "stats": {
      "skilldamagepercent": 0.02
    }
  },
  {
    "id": "infs",
    "name": "Fiend Token",
    "koreanname": "핀드 토큰",
    "dropped_by": [
      "Death Fiend"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "ocor",
    "name": "Shackles of Heaven",
    "koreanname": "하늘의 족쇄",
    "description": "Shackles used by the Lightning God to tie his cows",
    "dropped_by": [
      "Valtora"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.01,
    "required_by": [
      "Staff of Plague",
      "Heaven's Fist",
      "Archangel Wings",
      "Soul of Abyss",
      "Ruler of the Skies",
      "Desolation",
      "Espishu, the True Sword of Eternity",
      "Bag of Despair",
      "Eternal Winter",
      "Jupiter, the Robe of Heavens",
      "Wings of Immortal",
      "Ring of the One",
      "Spear of Judgment",
      "Caedis, the Sword of Slaughter"
    ],
    "stats": {
      "mainstat": 360,
      "dtpercent": -0.15,
      "active": [
        "On use, activates Shackles of Heaven",
        "Latches onto nearby enemies and drags them toward user for 5 seconds",
        "Deals (MAIN STAT X 3.75) magic damage for every 200 distance traveled",
        "Reduces damage output of shackled enemies by 50%",
        "Note: Shackles can be released if target is knockback immune or distance between user and target reaches 1500 or more range",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0IG",
    "name": "Aegis of Storm",
    "koreanname": "폭풍의 가호",
    "dropped_by": [
      "Valtora"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Horn of Lightning God",
      "Protection of the Fairies",
      "Nebula Rose",
      "Storm",
      "Splitting of the Sky and Earth",
      "Brave Heart",
      "Ring of Insanity",
      "Athanasia, the Armor of the Reaper",
      "Radiance of the One",
      "Harmony of Sky and Earth",
      "Wings of Night Lord",
      "Mask of Demigod",
      "Bloodseeker Plates",
      "Prophetia, the Origin of Knowledge",
      "Ring of Frozen Soul",
      "Caedis, the Sword of Slaughter",
      "Plates of Sanguine Fury",
      "Heirloom of Lazarus",
      "Robe of Storm",
      "Sanguis, the Robe of Sacrifice"
    ]
  },
  {
    "id": "I0IH",
    "name": "Essence of Storm",
    "koreanname": "폭풍의 결정",
    "dropped_by": [
      "Valtora"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Atricia, the Sword of Dreams",
      "Pheles, the Bow of God",
      "Horn of Lightning God",
      "Horn of God",
      "Ring of Fate",
      "Cosmic Reaper",
      "Calamity",
      "Soulbane",
      "Bag of Demise",
      "Eye of the Reaper",
      "Chrono Chaser",
      "Armageddon",
      "Heaven's Door",
      "Soul Devourer",
      "Ring of Divine Winds",
      "Vest of Divine Winds",
      "Astra, the Sword of Moonlight",
      "Harmonia, the Sparkle of Life",
      "Ring of the One",
      "Heartrender",
      "Spear of Judgment",
      "Fulminata, the Bringer of Storms",
      "Cage of Twisted Souls",
      "Star of Apotheosis",
      "Guardian Angel"
    ]
  },
  {
    "id": "phea",
    "name": "Shining Fragment of Ruins",
    "koreanname": "빛나는 유적의 조각",
    "dropped_by": [
      "Valtora",
      "Ifrit",
      "Nereid"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": [
      0.0075,
      0.01,
      0.0125
    ],
    "required_by": [
      "Pheles, the Bow of God",
      "Horn of God",
      "Cosmic Star",
      "Storm",
      "Splitting of the Sky and Earth",
      "Robe of Archlich",
      "Brave Heart",
      "Ring of Hope",
      "Ring of Despair",
      "Athanasia, the Armor of the Reaper",
      "Felspike Armor",
      "Ruler of the Skies",
      "Eternal Flame",
      "Chaos",
      "Rainmaker",
      "Espishu, the Sword of Chaos",
      "Bag of Despair",
      "Radiance of the One",
      "Crown of Absolute Zero",
      "Eternal Winter",
      "Soulbane",
      "Last Word",
      "Crown of Extreme Anger",
      "Harmony of Sky and Earth",
      "Nevedium, the Armor of Demonblood",
      "Chrono Chaser",
      "Thanatos, the Robe of Hell",
      "Jupiter, the Robe of Heavens",
      "Ethereal Dagger",
      "Spirit of Protector",
      "Bloodseeker Plates",
      "Ring of Divine Winds",
      "Chaos Pickaxe",
      "Harmonia, the Sparkle of Life",
      "Endless Snow",
      "Crescendo of Madness",
      "Crown of Cleansing",
      "Ring of Desolate Soul",
      "Visage of Vengeance",
      "Divine Slayer",
      "Exitium, the Armor of Ruin",
      "Crimson Curse",
      "Ring of Eternity",
      "Wings of Sacred Provenance",
      "Spirit Flame"
    ]
  },
  {
    "id": "I02E",
    "name": "Valtora Icon",
    "koreanname": "발토라 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "dropped_by": [
      "Valtora"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Coin of Effort": 5
      }
    ],
    "stats": {
      "agi": 30,
      "passive": [
        "~5% Chance to activate Elemental Fury on attack and skill cast",
        "Requires 1 second cooldown interval for checking the proc",
        "Increases main stat by 2% for 30 seconds"
      ]
    }
  },
  {
    "id": "I0P0",
    "name": "Lightning God Token",
    "koreanname": "뇌신의 토큰",
    "dropped_by": [
      "Valtora"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0JS",
    "name": "Heart of Volcano",
    "koreanname": "화산의 심장",
    "description": "I'm about to EXPLODE!!!!!!!!!!!!!!!!!!!",
    "dropped_by": [
      "Ifrit"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.01,
    "required_by": [
      "Ring of Revival",
      "Robe of Archlich",
      "Felspike Armor",
      "Eternal Flame",
      "Bag of Despair",
      "Wings of Flame Lord",
      "Crown of Great Rage",
      "Thanatos, the Robe of Hell",
      "Armageddon",
      "Wings of Immortal",
      "Harmonia, the Sparkle of Life",
      "Heartrender",
      "Crown of Cleansing",
      "Star of Apotheosis",
      "Sanguis, the Robe of Sacrifice",
      "Wings of Sacred Provenance"
    ],
    "stats": {
      "mainstat": 390,
      "skilldamagepercent": 0.1,
      "passive": [
        "Gain one stack after 5 seconds of attacking (up to 5 stacks and 25 seconds of attacking)",
        "Stacks last for 15 seconds while in combat"
      ],
      "active": [
        "On use, activates Grand Explosion",
        "User explodes and dies after 1 second of delay",
        "Explosion deals (1 + (stacks / 2)) X (MAIN STAT X 37.5) magic damage and stuns for 3 seconds",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "I0IE",
    "name": "Aegis of Flame",
    "koreanname": "화염의 가호",
    "dropped_by": [
      "Ifrit"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Eye of the Flame Lord",
      "Protection of the Fairies",
      "Archangel Wings",
      "Brave Heart",
      "Ring of Insanity",
      "Wings of Flame Lord",
      "Harmony of Sky and Earth",
      "Nevedium, the Armor of Demonblood",
      "Mask of Demigod",
      "Thanatos, the Robe of Hell",
      "Jupiter, the Robe of Heavens",
      "Prophetia, the Origin of Knowledge",
      "Ring of Frozen Soul",
      "Mark of Sin",
      "Voidshard Armor",
      "Caedis, the Sword of Slaughter",
      "Endless Snow",
      "Heirloom of Lazarus"
    ]
  },
  {
    "id": "I0IF",
    "name": "Essence of Flame",
    "koreanname": "화염의 결정",
    "dropped_by": [
      "Ifrit"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Atricia, the Sword of Dreams",
      "Staff of Plague",
      "Crimson Hatred",
      "Eye of the Flame Lord",
      "Cosmic Star",
      "Ring of Fate",
      "Bag of Universe",
      "Soul of Abyss",
      "Cosmic Reaper",
      "Eternal Winter",
      "Maw of Beriel",
      "Calamity",
      "Soulbane",
      "Last Word",
      "Ethenos, the True Staff of Space",
      "Heaven's Door",
      "Cape of Deep Abyss",
      "Soul Devourer",
      "Horn of Demon God",
      "Vest of Divine Winds",
      "Astra, the Sword of Moonlight",
      "Ring of the One",
      "Spear of Judgment",
      "Fulminata, the Bringer of Storms",
      "Bloodstorm",
      "Akhelius, the Staff of Duality"
    ]
  },
  {
    "id": "I02D",
    "name": "Ifrit Icon",
    "koreanname": "이프리트 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "dropped_by": [
      "Ifrit"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Coin of Effort": 5
      }
    ],
    "stats": {
      "str": 30,
      "passive": [
        "~5% Chance to activate Elemental Fury on attack and skill cast",
        "Requires 1 second cooldown interval for checking the proc",
        "Increases main stat by 2% for 30 seconds"
      ]
    }
  },
  {
    "id": "I0P1",
    "name": "Flame God Token",
    "koreanname": "화신의 토큰",
    "dropped_by": [
      "Ifrit"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0LX",
    "name": "Grail of Eternity",
    "koreanname": "영원의 잔",
    "description": "A grail that overflows endlessly",
    "dropped_by": [
      "Nereid"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.01,
    "required_by": [
      "Ring of Fate",
      "Eternal Flame",
      "Rainmaker",
      "Wings of Frost Lord",
      "Jupiter, the Robe of Heavens",
      "Heaven's Door",
      "Wings of Immortal",
      "Prophetia, the Origin of Knowledge",
      "Ring of Frozen Soul",
      "Endless Snow",
      "Heirloom of Lazarus",
      "Crimson Curse"
    ],
    "stats": {
      "allstat": 360,
      "skilldamagepercent": 0.075,
      "mdpercent": 0.075,
      "passive": [
        "Creates Water Barrier every 8 seconds",
        "Absorbs up to 3000 damage and increases HP and MP regen by 1%"
      ]
    }
  },
  {
    "id": "I0II",
    "name": "Aegis of Sea",
    "koreanname": "바다의 가호",
    "dropped_by": [
      "Nereid"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Robe of Archlich",
      "Brave Heart",
      "Athanasia, the Armor of the Reaper",
      "Felspike Armor",
      "Wings of Frost Lord",
      "Eye of the Reaper",
      "Harmony of Sky and Earth",
      "Nevedium, the Armor of Demonblood",
      "Wings of Night Lord",
      "Mask of Demigod",
      "Thanatos, the Robe of Hell",
      "Jupiter, the Robe of Heavens",
      "Spirit of Protector",
      "Bloodseeker Plates",
      "Prophetia, the Origin of Knowledge",
      "Horn of Demon God",
      "Vest of Divine Winds",
      "Voidshard Armor",
      "Caedis, the Sword of Slaughter",
      "Agnitus, the Bow of Divine Fury",
      "Endless Snow",
      "Crescendo of Madness",
      "Cape of Insatiable Hunger",
      "Visage of Vengeance",
      "Divine Slayer",
      "Seal of Corruption",
      "Heart of Life"
    ]
  },
  {
    "id": "I0IJ",
    "name": "Essence of Sea",
    "koreanname": "바다의 결정",
    "dropped_by": [
      "Nereid"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.011,
    "required_by": [
      "Ring of Fate",
      "Bag of Universe",
      "Soul of Abyss",
      "Ring of Hope",
      "Ring of Despair",
      "Ring of Insanity",
      "Ruler of the Skies",
      "Crown of Absolute Zero",
      "Power of Beriel",
      "Calamity",
      "Last Word",
      "Bag of Demise",
      "Chrono Chaser",
      "Chaos Dagger",
      "Cape of Deep Abyss",
      "Soul Devourer",
      "Demonic Fist",
      "Astra, the Sword of Moonlight",
      "Ring of Frozen Soul",
      "Ring of the One",
      "Spear of Judgment",
      "Fulminata, the Bringer of Storms",
      "Cage of Twisted Souls",
      "Plates of Sanguine Fury",
      "Star of Apotheosis",
      "Bloodstorm",
      "Guardian Angel",
      "Abyss Fall",
      "Atricia, the True Sword of Dreams",
      "Wings of Cosmos",
      "Akhelius, the Staff of Duality"
    ]
  },
  {
    "id": "I002",
    "name": "Nereid Icon",
    "koreanname": "네레이드 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "dropped_by": [
      "Nereid"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Coin of Effort": 5
      }
    ],
    "stats": {
      "int": 30,
      "passive": [
        "~5% Chance to activate Elemental Fury on attack and skill cast",
        "Requires 1 second cooldown interval for checking the proc",
        "Increases main stat by 2% for 30 seconds"
      ]
    }
  },
  {
    "id": "I0P2",
    "name": "Sea God Token",
    "koreanname": "해신의 토큰",
    "dropped_by": [
      "Nereid"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I0O3",
    "name": "Curse of Greed",
    "koreanname": "탐욕의 저주",
    "description": "Human greed knows no limits.",
    "dropped_by": [
      "Underlord Agareth"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "droprate": 0.01,
    "required_by": [
      "Bag of Despair",
      "Nevedium, the Armor of Demonblood",
      "Bloodseeker Plates",
      "Wings of Immortal",
      "Soul Devourer",
      "Demonic Fist",
      "Fulminata, the Bringer of Storms",
      "Endless Snow",
      "Cage of Twisted Souls",
      "Crown of Cleansing",
      "Cape of Insatiable Hunger",
      "Exitium, the Armor of Ruin",
      "Ring of Eternity",
      "Wings of Cosmos",
      "Crown of Cataclysm"
    ],
    "stats": {
      "mainstat": 405,
      "hp": 2250,
      "mp": 2250,
      "healreceivedpercent": -0.25,
      "passive": [
        "On dealing damage, activates Greed",
        "When in combat for 5 seconds, increases attack speed and damage output by 1%",
        "Also increases damage taken by 2%",
        "Can be stacked up to 25 times",
        "Cooldown: 1 second"
      ]
    }
  },
  {
    "id": "I0NV",
    "name": "Fragment of Soul",
    "koreanname": "영혼의 파편",
    "dropped_by": [
      "Underlord Agareth"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0085,
    "required_by": [
      "Ring of Hope",
      "Ring of Despair",
      "Chaos",
      "Ethenos, the Staff of Chaos",
      "Eternal Winter",
      "Soulbane",
      "Last Word",
      "Harmony of Sky and Earth",
      "Chrono Chaser",
      "Jupiter, the Robe of Heavens",
      "Heaven's Door",
      "Chaos Dagger",
      "Wings of Immortal",
      "Soul Devourer",
      "Ring of Divine Winds",
      "Vest of Divine Winds",
      "Astra, the Sword of Moonlight",
      "Heartrender",
      "Caedis, the Sword of Slaughter",
      "Fulminata, the Bringer of Storms",
      "Star of Apotheosis",
      "Atricia, the True Sword of Dreams",
      "Wings of Sacred Provenance",
      "Crescendo of Madness",
      "Bloodstorm",
      "Espishu, the Sword of Chaos"
    ]
  },
  {
    "id": "I0NU",
    "name": "Fragment of Hell",
    "koreanname": "지옥의 파편",
    "dropped_by": [
      "Underlord Agareth"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0085,
    "required_by": [
      "Hood of Apocalypse",
      "Power of Beriel",
      "Calamity",
      "Eye of the Reaper",
      "Crown of Extreme Anger",
      "Bag of Demise",
      "Thanatos, the Robe of Hell",
      "Armageddon",
      "Cape of Deep Abyss",
      "Demonic Fist",
      "Vest of Divine Winds",
      "Seed of Malice",
      "Voidshard Armor",
      "Agnitus, the Bow of Divine Fury",
      "Cape of Insatiable Hunger",
      "Sanguis, the Robe of Sacrifice",
      "Abyss Fall",
      "Crescendo of Madness",
      "Titan's Plates",
      "Heart of Life",
      "Horn of Dragon",
      "Spirit Flame",
      "Horn of Demon God",
      "Crown of Absolute Zero"
    ]
  },
  {
    "id": "I0NW",
    "name": "Mark of Lord",
    "koreanname": "군주의 징표",
    "dropped_by": [
      "Underlord Agareth"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "droprate": 0.0085,
    "required_by": [
      "Radiance of the One",
      "Crown of Absolute Zero",
      "Wings of Flame Lord",
      "Wings of Frost Lord",
      "Nevedium, the Armor of Demonblood",
      "Wings of Night Lord",
      "Mask of Demigod",
      "Spirit of Protector",
      "Prophetia, the Origin of Knowledge",
      "Horn of Demon God",
      "Ring of Frozen Soul",
      "Voidshard Armor",
      "Spear of Judgment",
      "Plates of Sanguine Fury",
      "Heirloom of Lazarus",
      "Guardian Angel",
      "Divine Slayer",
      "Seal of Corruption",
      "Gate of Abyss",
      "Crown of Transcendance",
      "Bloodstorm"
    ]
  },
  {
    "id": "I02S",
    "name": "Agareth Icon",
    "koreanname": "아가레스 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "dropped_by": [
      "Agareth"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "droprate": 0.0033,
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Coin of Effort": 10
      }
    ],
    "stats": {
      "damagedealtpercent": 0.02
    }
  },
  {
    "id": "I0P3",
    "name": "Token of Underlord",
    "koreanname": "지하 군주의 토큰",
    "dropped_by": [
      "Underlord Agareth"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.00005
  },
  {
    "id": "I014",
    "name": "Crimson Rose",
    "koreanname": "핏빛 장미",
    "description": "Many sacrifices have been made for this beautiful rose to be born.",
    "dropped_by": [
      "Duke Lazarus"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "droprate": 0.007,
    "required_by": [
      "Heartrender",
      "Plates of Sanguine Fury",
      "Crown of Cleansing",
      "Guardian Angel",
      "Abyss Fall",
      "Titan's Plates",
      "Crimson Curse",
      "Seal of Corruption",
      "Akhelius, the Staff of Duality",
      "Crown of Cataclysm",
      "Thread of Life",
      "Bag of All Evils"
    ],
    "stats": {
      "mainstat": 420,
      "skilldamagepercent": 0.08,
      "periodicdamagepercent": 0.15,
      "passive": [
        "On use, activates Death and Decay",
        "Targets area and deals 20000 magic damage per second for 15 seconds",
        "Deals up to 100% bonus damage, depending on how long target stayed in area (max reached at 5 seconds)",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0R2",
    "name": "Blood Essence",
    "koreanname": "피의 결정",
    "dropped_by": [
      "Duke Lazarus"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0085,
    "required_by": [
      "Caedis, the Sword of Slaughter",
      "Endless Snow",
      "Cage of Twisted Souls",
      "Bloodstorm",
      "Guardian Angel",
      "Heartrender",
      "Abyss Fall",
      "Ring of Desolate Soul",
      "Visage of Vengeance",
      "Atricia, the Sword of Nightmares",
      "Exitium, the Armor of Ruin",
      "Wings of Sacred Provenance",
      "Gate of Abyss",
      "Akhelius, the Staff of Duality",
      "Spirit Flame",
      "Blood Devourer",
      "Call of Gehenna",
      "Duskblade"
    ]
  },
  {
    "id": "I0R4",
    "name": "Emblem of Sacrifice",
    "koreanname": "희생의 문장",
    "dropped_by": [
      "Duke Lazarus"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0085,
    "required_by": [
      "Spear of Judgment",
      "Agnitus, the Bow of Divine Fury",
      "Fulminata, the Bringer of Storms",
      "Crescendo of Madness",
      "Star of Apotheosis",
      "Heirloom of Lazarus",
      "Cape of Insatiable Hunger",
      "Sanguis, the Robe of Sacrifice",
      "Plates of Sanguine Fury",
      "Heartrender",
      "Atricia, the Sword of Nightmares",
      "Ring of Eternity",
      "Heart of Life",
      "Wings of Cosmos",
      "Crown of Transcendance",
      "Ring of Malevolence",
      "Astral Fury",
      "Wings of Sacred Provenance"
    ]
  },
  {
    "id": "I0R3",
    "name": "Soul Blossom",
    "koreanname": "영혼의 꽃",
    "dropped_by": [
      "Duke Lazarus"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0085,
    "required_by": [
      "Heartrender",
      "Cage of Twisted Souls",
      "Plates of Sanguine Fury",
      "Crown of Cleansing",
      "Star of Apotheosis",
      "Guardian Angel",
      "Sanguis, the Robe of Sacrifice",
      "Ring of Desolate Soul",
      "Divine Slayer",
      "Final Omen",
      "Seal of Corruption",
      "Frost Herald's Garment",
      "Horn of Dragon",
      "Bell of Divinity",
      "Living Flame",
      "Soul Chaser",
      "Exitium, the Armor of Ruin"
    ]
  },
  {
    "id": "I0R6",
    "name": "Duke Token",
    "koreanname": "공작의 토큰",
    "dropped_by": [
      "Duke Lazarus"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "droprate": 0.0001
  },
  {
    "id": "I01Z",
    "name": "Gown of Life",
    "koreanname": "생명의 가운",
    "description": "The mother nature embraces all.",
    "dropped_by": [
      "Gaia"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "droprate": 0.006,
    "required_by": [
      "Titan's Plates",
      "Wings of Cosmos",
      "Wings of Sacred Provenance",
      "Crown of Cataclysm",
      "Thread of Life",
      "Keeper of the Grove",
      "Astral Fury"
    ],
    "stats": {
      "armor": 260,
      "mainstat": 370,
      "skilldamagepercent": 0.075,
      "passive": [
        "On use, activates Regeneration",
        "Clears all debuffs and restores 12000 HP over 10s",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I05Q",
    "name": "Essence of Earth",
    "koreanname": "대지의 결정",
    "dropped_by": [
      "Gaia"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0075,
    "required_by": [
      "Final Omen",
      "Ring of Eternity",
      "Wings of Cosmos",
      "Wings of Sacred Provenance",
      "Horn of Dragon",
      "Gate of Abyss",
      "Akhelius, the Staff of Duality",
      "Spirit Flame",
      "Prelude to Demise",
      "Shadow Waltz",
      "Keeper of the Grove",
      "Call of Gehenna",
      "Soul Chaser",
      "Bag of All Evils",
      "Duskblade"
    ]
  },
  {
    "id": "I09R",
    "name": "Aegis of Earth",
    "koreanname": "대지의 가호",
    "dropped_by": [
      "Gaia"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0075,
    "required_by": [
      "Titan's Plates",
      "Heart of Life",
      "Frost Herald's Garment",
      "Seal of Corruption",
      "Horn of Dragon",
      "Crown of Transcendance",
      "Call of Gehenna",
      "Ring of Malevolence",
      "Keeper of the Grove"
    ]
  },
  {
    "id": "I05P",
    "name": "Twisted Fragment of Ruins",
    "koreanname": "뒤틀린 유적의 조각",
    "dropped_by": [
      "Gaia"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.0075,
    "required_by": [
      "Atricia, the Sword of Nightmares",
      "Final Omen",
      "Exitium, the Armor of Ruin",
      "Crimson Curse",
      "Frost Herald's Garment",
      "Spirit Flame",
      "Bell of Divinity",
      "Dread Incarnate",
      "Blood Devourer",
      "Aeon Sphere",
      "Soul Chaser",
      "Duskblade"
    ]
  },
  {
    "id": "I0R7",
    "name": "Gaia Token",
    "koreanname": "지신의 토큰",
    "dropped_by": [
      "Gaia"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "733CBE",
    "droprate": 0.0001
  },
  {
    "id": "I095",
    "name": "Mask of Truth",
    "koreanname": "진실의 가면",
    "description": "Mask blessed by unchanging fortitude",
    "dropped_by": [
      "Arcane Construct"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "droprate": 0.005,
    "required_by": [
      "Call of Gehenna",
      "Keeper of the Grove",
      "Thread of Life",
      "Dread Incarnate"
    ],
    "stats": {
      "armor": 150,
      "mainstat": 300,
      "skilldamagepercent": 0.075,
      "passive": [
        "Activates Eye of Truth every 15s",
        "For 3 seconds, any skill damage dealt can critically strike but crit multiplier is fixed to 1.2x"
      ]
    }
  },
  {
    "id": "I0LP",
    "name": "Arcane Core",
    "koreanname": "마도 핵",
    "dropped_by": [
      "Arcane Construct"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.006,
    "required_by": [
      "Thread of Life",
      "Ring of Malevolence",
      "Blood Devourer",
      "Shadow Waltz",
      "Astral Fury",
      "Bag of All Evils"
    ]
  },
  {
    "id": "I0O1",
    "name": "Ancient Tome",
    "koreanname": "마도 핵",
    "dropped_by": [
      "Arcane Construct"
    ],
    "rank": "[Epic]",
    "grade": 5,
    "type": "Material",
    "color": "733CBE",
    "droprate": 0.006,
    "required_by": [
      "Bell of Divinity",
      "Dread Incarnate",
      "Prelude to Demise",
      "Aeon Sphere",
      "Living Flame",
      "Call of Gehenna",
      "Astral Fury",
      "Soul Chaser",
      "Bag of All Evils",
      "Duskblade"
    ]
  },
  {
    "id": "I0GH",
    "name": "Construct Token",
    "koreanname": "기계 토큰",
    "dropped_by": [
      "Arcane Construct"
    ],
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "733CBE",
    "droprate": 0.0001
  },
  {
    "id": "I0IZ",
    "name": "Key of Storm",
    "koreanname": "폭풍의 열쇠",
    "description": "Key that opens the door to Room of Storm",
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "recipe": [
      {
        "White Magic Stone": 3
      },
      {
        "Chaos Magic Stone": 3
      }
    ]
  },
  {
    "id": "I0JQ",
    "name": "Key of Flame",
    "koreanname": "화염의 열쇠",
    "description": "Key that opens the door to Room of Flame",
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "recipe": [
      {
        "Red Magic Stone": 3
      },
      {
        "Chaos Magic Stone": 3
      }
    ]
  },
  {
    "id": "I0LS",
    "name": "Key of Sea",
    "koreanname": "바다의 열쇠",
    "description": "Key that opens the door to Room of Sea",
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "recipe": [
      {
        "Blue Magic Stone": 3
      },
      {
        "Chaos Magic Stone": 3
      }
    ]
  },
  {
    "id": "gldo",
    "name": "Rainbow Crystal Golem Token",
    "koreanname": "레인보우 크리스탈 골렘 토큰",
    "rank": "none",
    "grade": 0,
    "type": "Token",
    "color": "DAA520",
    "recipe": [
      {
        "Red Crystal Golem Token": 1
      },
      {
        "Blue Crystal Golem Token": 1
      },
      {
        "Green Crystal Golem Token": 1
      },
      {
        "Yellow Crystal Golem Token": 1
      },
      {
        "White Crystal Golem Token": 1
      }
    ]
  },
  {
    "id": "I00U",
    "name": "Acorn Bomb",
    "koreanname": "도토리 폭탄",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Accessory",
    "color": "AFC3FF",
    "level": 5,
    "recipe": [
      {
        "Lucky Acorn": 1
      },
      {
        "Flame Fairy Stone": 1
      }
    ],
    "stats": {
      "allstat": 5,
      "hpregen": 5,
      "active": [
        "On use, throws an Acorn Bomb",
        "Deals 1000 magic damage in AoE",
        "Stuns non-boss units for 2 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0Q2",
    "name": "Bloody Fang",
    "koreanname": "핏빛 송곳니",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Shared)",
    "color": "AFC3FF",
    "level": 10,
    "recipe": [
      {
        "Silver Fang": 1
      },
      {
        "Troll Blood": 1
      }
    ],
    "stats": {
      "damage": 65,
      "mainstat": 25,
      "critchancepercent": 0.1,
      "active": [
        "On attack, restores 10 HP"
      ]
    }
  },
  {
    "id": "I00C",
    "name": "Berserker Axe",
    "koreanname": "광전사 도끼",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "AFC3FF",
    "level": 10,
    "recipe": [
      {
        "Troll Axe": 1
      },
      {
        "Troll Blood": 1
      }
    ],
    "stats": {
      "damage": 130,
      "mainstat": 15,
      "attackspeedpercent": 0.15
    }
  },
  {
    "id": "I01D",
    "name": "Ancient Leaf Circlet",
    "koreanname": "고대 나뭇잎 화관",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Headwear",
    "color": "AFC3FF",
    "level": 20,
    "recipe": [
      {
        "Ancient Leaf": 1
      },
      {
        "Ancient Branch": 5
      }
    ],
    "stats": {
      "armor": 15,
      "allstat": 15,
      "hpregen": 5,
      "mpregen": 5
    }
  },
  {
    "id": "tbsm",
    "name": "Sturdy Bag",
    "koreanname": "튼튼한 배낭",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "AFC3FF",
    "level": 30,
    "required_by": [
      "Very Sturdy Bag"
    ],
    "recipe": [
      {
        "Bag": 1
      },
      {
        "Hard Turtle Shell": 1
      }
    ],
    "stats": {
      "damage": 300,
      "str": 30,
      "dtpercent": -0.1
    }
  },
  {
    "id": "frgd",
    "name": "Silky Bag",
    "koreanname": "부드러운 배낭",
    "rank": "[Magic]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "AFC3FF",
    "level": 30,
    "required_by": [
      "Very Silky Bag"
    ],
    "recipe": [
      {
        "Bag": 1
      },
      {
        "Black Pearl": 1
      }
    ],
    "stats": {
      "damage": 250,
      "allstat": 25,
      "hpregen": 10,
      "mdpercent": 0.08
    }
  },
  {
    "id": "gfor",
    "name": "Wing of Sea",
    "koreanname": "바다의 날개",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Wings",
    "color": "EBD787",
    "level": 30,
    "recipe": [
      {
        "Wings of Nature": 1
      },
      {
        "Sea Jewel": 1
      },
      {
        "Walrus Skin Cloak": 1
      },
      {
        "Black Pearl": 1
      }
    ],
    "stats": {
      "allstat": 40,
      "hpregen": 10,
      "mpregen": 10,
      "expgainpercent": 0.1,
      "passive": [
        "On kill, 8% chance to activate Blessing of Sea",
        "Increases EXP gain by 10% for 10 seconds"
      ],
      "active": [
        "On use, summons a portal that connects to Alfon Village"
      ]
    }
  },
  {
    "id": "wlsd",
    "name": "Beast Hunter",
    "koreanname": "비스트 헌터",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 40,
    "required_by": [
      "Monster Hunter"
    ],
    "recipe": [
      {
        "Tusk Hunter": 1
      },
      {
        "Meat Bag": 1
      },
      {
        "Warm Fur": 1
      }
    ],
    "stats": {
      "damage": 720,
      "agi": 100,
      "int": 35,
      "attackspeedpercent": 0.18
    }
  },
  {
    "id": "tbak",
    "name": "Very Sturdy Bag",
    "koreanname": "정말 튼튼한 배낭",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "EBD787",
    "level": 40,
    "required_by": [
      "Bag of Strength"
    ],
    "recipe": [
      {
        "Sturdy Bag": 1
      },
      {
        "Meat Bag": 1
      },
      {
        "Warm Fur": 1
      }
    ],
    "stats": {
      "damage": 700,
      "str": 70,
      "dtpercent": -0.1
    }
  },
  {
    "id": "rde0",
    "name": "Very Silky Bag",
    "koreanname": "정말 부드러운 배낭",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "EBD787",
    "level": 40,
    "required_by": [
      "Fruit-filled Bag"
    ],
    "recipe": [
      {
        "Silky Bag": 1
      },
      {
        "Wind-Protection Clothing": 1
      },
      {
        "Warm Fur": 1
      }
    ],
    "stats": {
      "damage": 600,
      "allstat": 60,
      "hpregen": 20,
      "mdpercent": 0.08
    }
  },
  {
    "id": "will",
    "name": "Precious Wind-Protection Clothing",
    "koreanname": "소중한 바람막이 털옷",
    "description": "A must-have for winter..",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 40,
    "required_by": [
      "Winter Robe"
    ],
    "recipe": [
      {
        "Wind-Protection Clothing": 1
      },
      {
        "Bear Fur Cloak": 1
      },
      {
        "Warm Fur": 1
      }
    ],
    "stats": {
      "armor": 55,
      "int": 75,
      "hp": 500,
      "skilldamagepercent": 0.05,
      "passive": [
        "Allows you to dodge a fatal attack every 45 seconds"
      ]
    }
  },
  {
    "id": "I07B",
    "name": "Laksha, the Reigning Sword of Poison",
    "koreanname": "독의 지배검 라크샤",
    "description": "Sword fully imbued with Hydra's poison",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 50,
    "required_by": [
      "Laksha, the Ancient Sword of Poison"
    ],
    "recipe": [
      {
        "Sword of Poison": 1
      },
      {
        "Hydra Poison Tooth": 1
      }
    ],
    "stats": {
      "damage": 1650,
      "agi": 170,
      "skilldamagepercent": 0.05,
      "passive": [
        "On attack, inflicts target with poison that deals 2500 magic damage per second for 10 seconds"
      ]
    }
  },
  {
    "id": "sman",
    "name": "Monster Hunter",
    "koreanname": "몬스터 헌터",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Gun)",
    "color": "EBD787",
    "level": 50,
    "required_by": [
      "Monster Blaster"
    ],
    "recipe": [
      {
        "Beast Hunter": 1
      },
      {
        "Hydra Poison Tooth": 1
      }
    ],
    "stats": {
      "damage": 1150,
      "agi": 130,
      "int": 50,
      "attackspeedpercent": 0.2,
      "expgainpercent": 0.08
    }
  },
  {
    "id": "tcas",
    "name": "Bag of Strength",
    "koreanname": "힘의 배낭",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "EBD787",
    "level": 50,
    "required_by": [
      "Bag of Mighty Strength"
    ],
    "recipe": [
      {
        "Very Sturdy Bag": 1
      },
      {
        "Hydra Poison Tooth": 1
      }
    ],
    "stats": {
      "damage": 1400,
      "str": 150,
      "skilldamagepercent": 0.05,
      "dtpercent": -0.12,
      "spec": [
        "Merchant Specialty - Heavy Bag",
        "Merchant - Bag Slam: damage increased by 100%"
      ]
    }
  },
  {
    "id": "spro",
    "name": "Fruit-filled Bag",
    "koreanname": "과일 담긴 배낭",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Bag)",
    "color": "EBD787",
    "level": 50,
    "required_by": [
      "Candy-filled Bag"
    ],
    "recipe": [
      {
        "Very Silky Bag": 1
      },
      {
        "Hydra Poison Tooth": 1
      }
    ],
    "stats": {
      "damage": 1200,
      "allstat": 130,
      "hpregen": 40,
      "mdpercent": 0.1,
      "spec": [
        "Merchant Specialty - Light Bag",
        "Merchant - Throwing Healing Potion: You can throw up to 2 Throwing Healing Potions at once"
      ]
    }
  },
  {
    "id": "I0C1",
    "name": "Parasitic Sword",
    "koreanname": "기생의 검",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Melee)",
    "color": "EBD787",
    "level": 70,
    "required_by": [
      "Maw of Monster"
    ],
    "recipe": [
      {
        "Shell Sword": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "damage": 2000,
      "armor": 40,
      "str": 150,
      "agi": 120,
      "passive": [
        "On attack, causes splashing effect and restores HP on low chance"
      ]
    }
  },
  {
    "id": "I0CC",
    "name": "Staff of Tentacles",
    "koreanname": "촉수의 지팡이",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Weapon (Staff)",
    "color": "EBD787",
    "level": 70,
    "required_by": [
      "Staff of Void"
    ],
    "recipe": [
      {
        "Staff of Deep Sea": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "damage": 1500,
      "int": 180,
      "skilldamagepercent": 0.06,
      "passive": [
        "Restore HP and MP on kill"
      ]
    }
  },
  {
    "id": "I0C0",
    "name": "Infected Crab Armor",
    "koreanname": "감염된 크랩 아머",
    "rank": "[Rare]",
    "grade": 0,
    "type": "Armor",
    "color": "EBD787",
    "level": 70,
    "required_by": [
      "Reactive Armor"
    ],
    "recipe": [
      {
        "Crab Armor": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "armor": 90,
      "str": 100,
      "hpregen": 30,
      "passive": [
        "On being hit, deals damage to the attacker",
        "Deals (STR X 0.5) pure damage",
        "Increases HP by 300 and spell damage by 7.5%"
      ]
    }
  },
  {
    "id": "bgst",
    "name": "Sanguiel, the Bloodspear of Domination",
    "koreanname": "진 혈포 체페슈",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Sanguiel, the Bloodspear of Requiem"
    ],
    "recipe": [
      {
        "Sanguiel, the Bloodspear": 1
      },
      {
        "Bloodstone": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 3200,
      "str": 235,
      "passive": [
        "On attack, drains 10% of damage dealt as life (up to 400)"
      ]
    }
  },
  {
    "id": "I07J",
    "name": "Tepethia, the Bloodsword of Domination",
    "koreanname": "피의 지배검 테페시아",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Tepethia, the Crimson Sword of Requiem"
    ],
    "recipe": [
      {
        "Bloodsword Tepethia": 1
      },
      {
        "Bloodstone": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 3000,
      "agi": 250,
      "passive": [
        "On attack, heals 10% of damage dealt (max 400)"
      ]
    }
  },
  {
    "id": "I07S",
    "name": "True Dragonsword Lainhart",
    "koreanname": "진 용검 라인하르트",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Flame Soul",
      "Bahanar, the Sword of Illusion"
    ],
    "recipe": [
      {
        "Dragonsword Lainhart": 1
      },
      {
        "Dragon Bone": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4300,
      "str": 270,
      "skilldamagepercent": 0.04,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2.5) magic damage"
      ]
    }
  },
  {
    "id": "gmfr",
    "name": "Leoreus, the Greatsword of Explosion",
    "koreanname": "작렬의 장검 리오레우스",
    "description": "One slain by this sword won't even leave ashes behind!",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Flame Soul"
    ],
    "recipe": [
      {
        "Leoreus, the Greatsword of Flame": 1
      },
      {
        "Flamereaver": 1
      },
      {
        "Dragon Heart": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "str": 320,
      "attackspeedpercent": -0.15,
      "skilldamagepercent": 0.05,
      "passive": [
        "On attack, 10% chance to activate Conflgration",
        "Deals (flame affinity X (STR X 2.5)) magic damage"
      ]
    }
  },
  {
    "id": "I08G",
    "name": "Karonphniamm, the True Holy Sword",
    "koreanname": "진 성검 카론프니엠",
    "description": "Blessing to the weak; judgment to the evil.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Asmodeus, the Archdevil's Greatsword"
    ],
    "recipe": [
      {
        "Karonphniamm, the Holy Sword": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4800,
      "str": 400,
      "skilldamagepercent": 0.05,
      "passive": [
        "10% Chance to activate Holy Strike on attack",
        "If primary stat on hero is STR: deals (STR X 3) magic damage",
        "If primary stat on hero is AGI or INT: deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I08H",
    "name": "Eximelia, the True Unholy Sword",
    "koreanname": "진 마검 엑시멜리아",
    "description": "Immerse yourself in battle and war !! Walk the path of destruction !!",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Asmodeus, the Archdevil's Greatsword"
    ],
    "recipe": [
      {
        "Eximelia, the Unholy Sword": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4250,
      "agi": 430,
      "skilldamagepercent": 0.035,
      "passive": [
        "On attack, 10% chance to activate Unholy Strike",
        "Deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "sehr",
    "name": "Flame Soul",
    "koreanname": "플레임 소울",
    "description": "Its intense heat brings out your inner strength",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Blazing Soul"
    ],
    "recipe": [
      {
        "Leoreus, the Greatsword of Explosion": 1
      },
      {
        "True Dragonsword Lainhart": 1
      },
      {
        "Flame Cloak": 1
      },
      {
        "Corrupt Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 5250,
      "str": 500,
      "attackspeedpercent": -0.2,
      "skilldamagepercent": 0.075,
      "passive": [
        "On attack, 10% chance to activate Crimson Flame",
        "Deals (ATK DMG + STR X 0.9) magic damage and increases STR by 5 per stack (up to 8 stacks)"
      ]
    }
  },
  {
    "id": "horl",
    "name": "Bahanar, the Sword of Illusion",
    "koreanname": "환검 바하나르",
    "description": "An unstable sword that does not have a fixed shape.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Bahanar, the True Sword of Illusion"
    ],
    "recipe": [
      {
        "Blade of Requiem": 1
      },
      {
        "True Dragonsword Lainhart": 1
      },
      {
        "Orichalcum": 1
      },
      {
        "Count's Memento": 1
      }
    ],
    "stats": {
      "damage": 4700,
      "str": 390,
      "agi": 140,
      "skilldamagepercent": 0.06,
      "passive": [
        "On attack, (8 + HIT COUNT X 0.2)% chance to activate Grace Tear",
        "Deals ((MAIN STAT X 2.5) + (ATK DMG DEALT X 0.45)) magic damage in an AoE and stuns for 0.1 seconds"
      ],
      "spec": [
        "Specialty - Sword of Illusion",
        "Crusader - Flash of Immortality grants additional 10% damage reduction at low HP."
      ]
    }
  },
  {
    "id": "guvi",
    "name": "Maw of Monster",
    "koreanname": "괴물의 손아귀",
    "description": "Right hand that eats up everything in its path",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Maw of Greed"
    ],
    "recipe": [
      {
        "Parasitic Sword": 1
      },
      {
        "King Kong's Claws": 1
      },
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Hydra Poison Tooth": 1
      }
    ],
    "stats": {
      "damage": 3720,
      "str": 240,
      "agi": 240,
      "hpregen": 30,
      "passive": [
        "On attack, 20% chance to activate Devour"
      ]
    }
  },
  {
    "id": "gopr",
    "name": "Tepethia, the Crimson Sword of Requiem",
    "koreanname": "혈혼검 테페시아",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Melee)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Crimson Reaper"
    ],
    "recipe": [
      {
        "Tepethia, the Bloodsword of Domination": 1
      },
      {
        "Blade of Requiem": 1
      },
      {
        "Scarab Bone": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "agi": 410,
      "hp": 750,
      "critmultiplier": 0.2,
      "passive": [
        "Activates Blood Release on every 14th attack",
        "Heals user for (250 + MAIN STAT X 0.6) HP and activating a random Wrath effect",
        "Red Wrath: deals (MAIN STAT X 4.25) magic splash damage",
        "Green Wrath: reduces enemy movement and attack speed by 66% for 3 seconds, deals (MAIN STAT X 2.25) magic damage in an AoE, and stuns non-boss units for 0.25 seconds"
      ]
    }
  },
  {
    "id": "I07Q",
    "name": "True Dragonstaff Irave",
    "koreanname": "진 용봉 이레이브",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Crimson Pumpkin Rod"
    ],
    "recipe": [
      {
        "Dragonstaff Irave": 1
      },
      {
        "Orichalcum": 1
      },
      {
        "Dragon Bone": 1
      }
    ],
    "stats": {
      "damage": 3300,
      "int": 390,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates True Mana Cannon",
        "Deals (INT X 12.5) magic damage in a straight line",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I08I",
    "name": "Klenetia, the True Holy Staff",
    "koreanname": "진 성봉 클레네티아",
    "description": "Blessing to the weak; judgment to the evil.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Belius, the Archdevil's Staff"
    ],
    "recipe": [
      {
        "Klenetia, the Holy Staff": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 3800,
      "int": 475,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Holy Explosion",
        "Deals (INT X 12.5) magic damage in an AoE",
        "Stuns for 1 second",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "sksh",
    "name": "Staff of Void",
    "koreanname": "스태프 오브 보이드",
    "description": "Only the void may be the host to the true power",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Staff of Madness"
    ],
    "recipe": [
      {
        "Staff of Tentacles": 1
      },
      {
        "Crimson Stone": 1
      },
      {
        "Angel's Feather": 1
      },
      {
        "Corrupt Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 3100,
      "int": 370,
      "hp": 1000,
      "passive": [
        "On skill cast, empower nearby allies for 4 seconds",
        "Increases attack speed by 12%, skill damage by 6% [Type-B], and HP regen by 45"
      ]
    }
  },
  {
    "id": "I0DH",
    "name": "Benziena, the Earthen Pillar",
    "koreanname": "대지의 기둥 벤지이나",
    "description": "Beyond the cruel face of Mother Nature, lies a warm face that embraces all.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Staff)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Benziena, the Earthen Soul",
      "Staff of Domination"
    ],
    "recipe": [
      {
        "Benziena, the Rod of Earth": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Dragon Bone": 1
      },
      {
        "Ancient Writings": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "int": 420,
      "dtpercent": -0.08,
      "affinityearthpercent": 0.03,
      "active": [
        "On use, activates Twisting Earth",
        "Restores 1500 HP per 0.5 seconds of nearby allies for 10 seconds",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialties - Earth Mastery",
        "Alchemist - Enhanced Conjure Golem: Golem's HP increased by 30% and armor is increased by 30.",
        "Elementalist - Seal of Earth: Duration increased by 5 seconds"
      ]
    }
  },
  {
    "id": "I09T",
    "name": "True Dragonbow Aience",
    "koreanname": "진 용궁 에이엔스",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bow)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Flame Explosion"
    ],
    "recipe": [
      {
        "Dragonbow Aience": 1
      },
      {
        "Dragon Bone": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "agi": 330,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2.5) magic damage"
      ]
    }
  },
  {
    "id": "I09Q",
    "name": "Alkate, the True Unholy Bow",
    "koreanname": "진 마궁 알카테",
    "description": "Leave none alive !! Pierce their hearts !!",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bow)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Yggrect, the Archdevil's Bow"
    ],
    "recipe": [
      {
        "Alkate, the Unholy Bow": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "agi": 460,
      "skilldamagepercent": 0.035,
      "passive": [
        "On attack, 10% chance to activate Unholy Spike",
        "Deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "pman",
    "name": "Monster Blaster",
    "koreanname": "몬스터 블래스터",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Dragon Blaster"
    ],
    "recipe": [
      {
        "Monster Hunter": 1
      },
      {
        "Blaster": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "damage": 2400,
      "agi": 250,
      "int": 130,
      "attackspeedpercent": 0.2,
      "expgainpercent": 0.1
    }
  },
  {
    "id": "I0FJ",
    "name": "True Blood Cannon Tepes",
    "koreanname": "진 혈포 체페슈",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Red Cross"
    ],
    "recipe": [
      {
        "Blood Cannon Tepes": 1
      },
      {
        "Blood Orb": 1
      },
      {
        "Count's Memento": 1
      }
    ],
    "stats": {
      "damage": 2900,
      "agi": 210,
      "int": 250,
      "hp": 750,
      "passive": [
        "On attack, drains 10% of damage dealt as life (up to 400)"
      ]
    }
  },
  {
    "id": "I0F9",
    "name": "True Dragon Cannon Belenus",
    "koreanname": "진 용포 벨레누스",
    "description": "If you desire strength, desparately strive for it, for you shall earn it.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Dragon Blaster"
    ],
    "recipe": [
      {
        "Dragon Cannon Belenus": 1
      },
      {
        "Dragon Bone": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4000,
      "agi": 330,
      "passive": [
        "On attack, 10% chance to activate Dragon's Claw",
        "Deals (MAIN STAT X 2.5) magic damage"
      ]
    }
  },
  {
    "id": "wneu",
    "name": "Dragon Blaster",
    "koreanname": "드래곤 블래스터",
    "description": "The weapon of choice for dragon-hunting",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Hydro Buster",
      "Devil Blaster"
    ],
    "recipe": [
      {
        "Monster Blaster": 1
      },
      {
        "True Dragon Cannon Belenus": 1
      },
      {
        "Mithril": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "damage": 3600,
      "agi": 360,
      "int": 160,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.04,
      "active": [
        "On use, activates Dragon Blast",
        "Deals ((ATK DMG X 4) + (MAIN STAT X 30)) magic damage",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0FB",
    "name": "Eana, the True Holy Cannon",
    "koreanname": "진 성포 이아나",
    "description": "Blessing to the weak; judgment to the evil.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Alchatratz, the Archdevil's Cannon"
    ],
    "recipe": [
      {
        "Eana, the Holy Cannon": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 4500,
      "agi": 445,
      "skilldamagepercent": 0.025,
      "passive": [
        "On attack, 10% chance to activate Holy Bullet",
        "If primary stat on hero is STR: deals (STR X 3) magic damage",
        "If primary stat on hero is AGI or INT: deals (AGI X 3) magic damage"
      ]
    }
  },
  {
    "id": "I0FK",
    "name": "Red Cross",
    "koreanname": "레드 크로스",
    "description": "Do not forget the past written by blood.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Gun)",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Crimson Cross"
    ],
    "recipe": [
      {
        "True Blood Cannon Tepes": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "damage": 3900,
      "agi": 195,
      "int": 410,
      "hp": 1200,
      "active": [
        "On use, activates Blood Purge",
        "Deals (AGI X 3.75) magic damage",
        "Heals allies for (INT X 2.5) HP",
        "Cooldown: 12 seconds"
      ],
      "spec": [
        "Specialty - Bloody Protection",
        "Shooter - Nanomachine Injection: Healing speed increased by 50%."
      ]
    }
  },
  {
    "id": "tfar",
    "name": "Bag of Mighty Strength",
    "koreanname": "강력한 힘의 배낭",
    "description": "Pretty heavy bag",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bag)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Bag of Mighty Strength +1"
    ],
    "recipe": [
      {
        "Bag of Strength": 1
      },
      {
        "Bloodstone": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "damage": 2600,
      "str": 250,
      "skilldamagepercent": 0.05,
      "dtpercent": -0.15,
      "spec": [
        "Merchant Specialty - Heavy Bag",
        "Merchant - Bag Slam's damage is increased by 150%, and it increases target's damage taken by 4% for 6 seconds."
      ]
    }
  },
  {
    "id": "spre",
    "name": "Candy-filled Bag",
    "koreanname": "사탕 담긴 배낭",
    "description": "Pretty light bag",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bag)",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Candy-filled Bag +1"
    ],
    "recipe": [
      {
        "Fruit-filled Bag": 1
      },
      {
        "Candy Bag": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "damage": 2300,
      "allstat": 210,
      "hpregen": 60,
      "mdpercent": 0.1,
      "spec": [
        "Merchant Specialty - Light Bag",
        "Merchant - Throwing Healing Potion: You can throw up to 2 Throwing Healing Potions at once, and it reduces target's damage taken by 8%."
      ]
    }
  },
  {
    "id": "gemt",
    "name": "Bag of Mighty Strength +1",
    "koreanname": "강력한 힘의 배낭 +1",
    "description": "Very heavy bag",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bag)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Bag of Hell"
    ],
    "recipe": [
      {
        "Bag of Mighty Strength": 1
      },
      {
        "Mithril": 1
      },
      {
        "Orichalcum": 1
      },
      {
        "Ancient Writings": 1
      }
    ],
    "stats": {
      "damage": 3800,
      "str": 310,
      "skilldamagepercent": 0.05,
      "dtpercent": -0.15,
      "spec": [
        "Merchant Specialty - Heavy Bag",
        "Merchant - Bag Slam's damage is increased by 150%, and it increases target's damage taken by 4% for 6 seconds."
      ]
    }
  },
  {
    "id": "fgun",
    "name": "Candy-filled Bag +1",
    "koreanname": "사탕 담긴 배낭 +1",
    "description": "Very light bag",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Weapon (Bag)",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Bag of Heaven"
    ],
    "recipe": [
      {
        "Candy-filled Bag": 1
      },
      {
        "Mithril": 1
      },
      {
        "Orichalcum": 1
      },
      {
        "Ancient Writings": 1
      }
    ],
    "stats": {
      "damage": 3000,
      "allstat": 275,
      "hpregen": 80,
      "mdpercent": 0.1,
      "spec": [
        "Merchant Specialty - Light Bag",
        "Merchant - Throwing Healing Potion: You can throw up to 2 Throwing Healing Potions at once, and it reduces target's damage taken by 8%"
      ]
    }
  },
  {
    "id": "gomn",
    "name": "Bloodstone Plates",
    "koreanname": "혈석 갑주",
    "description": "Armor that fuses with user's blood to form a hard carapace",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "True Bloodstone Plates"
    ],
    "recipe": [
      {
        "Stone Plates": 1
      },
      {
        "Bloody Armor": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "armor": 150,
      "str": 100,
      "agi": 40,
      "int": 100,
      "dtpercent": -0.06,
      "active": [
        "On use, activates Bloodstone Form",
        "Applies a shield of (800 + 15% max HP)",
        "Increases HP and MP regen by (400 + 7.5% max HP and MP respectively)",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "I07W",
    "name": "True Dragon Armor Magron",
    "koreanname": "진 용갑 마그론",
    "description": "Don't be afraid to struggle. You can only grow stronger by driving away your fear.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Armor",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "True Bloodstone Plates",
      "Wings of Death Icon"
    ],
    "recipe": [
      {
        "Dragon Armor Magron": 1
      },
      {
        "Dragon Scale": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "armor": 165,
      "str": 140,
      "agi": 140,
      "hpregen": 50,
      "passive": [
        "Blocks 20 damage on being hit"
      ]
    }
  },
  {
    "id": "I07N",
    "name": "Jack Pumpkin Helm +1",
    "koreanname": "잭 펌킨 투구 +1",
    "description": "Enjoy the Halloween ~",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Death Visage"
    ],
    "recipe": [
      {
        "Jack Pumpkin Helm": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "armor": 75,
      "str": 65,
      "agi": 80,
      "hpregen": 20,
      "mpregen": 20
    }
  },
  {
    "id": "I07P",
    "name": "Jack Pumpkin Hood +1",
    "koreanname": "잭 펌킨 후드 +1",
    "description": "Enjoy the Halloween ~",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Hood of Reaper"
    ],
    "recipe": [
      {
        "Jack Pumpkin Hood": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "armor": 60,
      "int": 95,
      "hpregen": 20,
      "mpregen": 20
    }
  },
  {
    "id": "I07Y",
    "name": "True Dragon Helm Agron",
    "koreanname": "진 용투 아그론",
    "description": "Don't you think it is foolish to defy me with magic, who is known as the creature of 'magic'??",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Helm of Battle",
      "Wings of Death Icon"
    ],
    "recipe": [
      {
        "Dragon's Helm Agron": 1
      },
      {
        "Dragon Scale": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "armor": 80,
      "mainstat": 90,
      "mdpercent": 0.1,
      "active": [
        "Block magic every 5 minutes"
      ]
    }
  },
  {
    "id": "k3m1",
    "name": "Death Visage",
    "koreanname": "데스 비사쥬",
    "description": "Death is always nearby ..",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Grim Visage"
    ],
    "recipe": [
      {
        "Jack Pumpkin Helm +1": 1
      },
      {
        "Mask of Blood": 1
      },
      {
        "Ghostly Thread": 1
      }
    ],
    "stats": {
      "armor": 80,
      "agi": 105,
      "hp": 450,
      "skilldamagepercent": 0.045,
      "critchancepercent": 0.045,
      "active": [
        "On use, activates Death Vengeance for 8 seconds",
        "If HP is below 40%, increases MAIN STAT by 135, heals 40% max HP and stuns nearby enemies for 1 second",
        "If HP is above 40%, increases MAIN STAT by 105",
        "Regardless of HP percentage, increases critical damage by 0.1",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "sor6",
    "name": "Hood of Reaper",
    "koreanname": "후드 오브 리퍼",
    "description": "Death is always nearby ..",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Headwear",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Hood of Grim Reaper"
    ],
    "recipe": [
      {
        "Jack Pumpkin Hood +1": 1
      },
      {
        "Helm of the Dead": 1
      },
      {
        "Scarab Bone": 1
      }
    ],
    "stats": {
      "armor": 75,
      "str": 60,
      "int": 125,
      "passive": [
        "Activates Possession when HP drops below 25%",
        "Increases INT by 60",
        "Deals (INT X 7.5) magic damage and stuns for 0.3 seconds",
        "Heals 40% of max HP",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "I03Z",
    "name": "Teperua, the Ring of Blood",
    "koreanname": "피의 반지 테페루아",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Ring of the Reaper",
      "Trueblood Ring",
      "Count Icon"
    ],
    "recipe": [
      {
        "Ring of Count": 1
      },
      {
        "Count's Memento": 1
      }
    ],
    "stats": {
      "allstat": 100,
      "hp": 1500,
      "mp": 1500,
      "active": [
        "On use, restores 30% HP (cooldown: 45 seconds)"
      ],
      "spec": [
        "Specialty - Blood Shield",
        "Blood Weaver - Blood Boil applies Life Drain's shield onto yourself and nearby allies."
      ]
    }
  },
  {
    "id": "shhn",
    "name": "Fruit Candy Pouch",
    "koreanname": "과일맛 사탕 주머니",
    "description": "Pouch containing candies of various fruit flavors. The hide is also much more sturdy.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 60,
    "required_by": [
      "Jack Icon"
    ],
    "recipe": [
      {
        "Candy Bag": 1
      },
      {
        "Hydra Scale": 1
      },
      {
        "Tomato": 1
      }
    ],
    "stats": {
      "allstat": 130,
      "hp": 1250,
      "active": [
        "On use, throws 5 fruit-flavored candies around yourself, each rapidly heals HP over 4 seconds",
        "Grape Flavored Candy: Increases INT by 20",
        "Blueberry Flavored Candy: Increases AGI by 20",
        "Apple Flavored Candy: Increases STR by 20",
        "Duration: 15 minutes, cooldown: 120 seconds",
        "Cooldown of pouch: 180 seconds"
      ]
    }
  },
  {
    "id": "I0B0",
    "name": "Ring of the Sage",
    "koreanname": "현자의 반지",
    "description": "The wisdom of sage shall bend even the flow of time.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Ring of Holy Light",
      "Ring of Intrusion"
    ],
    "recipe": [
      {
        "Ring of Resonance": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Dragon Heart": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "allstat": 145,
      "skilldamagepercent": 0.04,
      "active": [
        "On use, activates Sage's Resonance",
        "Resets the last non-ultimate skill used",
        "Increases MP regen by 300 for 8 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I07Z",
    "name": "Mana Heart",
    "koreanname": "마나 하트",
    "description": "A mystical gem that continuously emits mana.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Mana Heart Frost"
    ],
    "recipe": [
      {
        "Dragon Heart": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "int": 180,
      "hp": 1800,
      "mp": 3600,
      "mpregen": 25
    }
  },
  {
    "id": "I0C2",
    "name": "Tentacle Horn",
    "koreanname": "촉수의 뿔피리",
    "description": "Passed down from the legends.. here comes Tentacle Horn.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Azathos, the Pipe of Chaos"
    ],
    "recipe": [
      {
        "Horn of Deep Sea": 1
      },
      {
        "Infected Tentacle": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "allstat": 115,
      "hp": 1000,
      "mp": 1000,
      "skilldamagepercent": 0.08,
      "active": [
        "On use, cover nearby area with tentacles",
        "Deals (750 + MAIN STAT X 7.5) magic damage and knocks up enemy",
        "Reduces enemy movement speed by 30%",
        "Heals 12.5% of max HP"
      ]
    }
  },
  {
    "id": "I08A",
    "name": "Ring of Light",
    "koreanname": "빛의 반지 세인트",
    "description": "May the blessing of god be upon you",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Ring of Holy Light",
      "Demonis, the Devil Lord's Ring"
    ],
    "recipe": [
      {
        "Angel's Feather": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "Mithril": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "allstat": 150,
      "passive": [
        "Increases nearby allies' armor by 30"
      ]
    }
  },
  {
    "id": "I08B",
    "name": "Ring of Darkness",
    "koreanname": "어둠의 반지 다크니스",
    "description": "Corruption stems from the denial of existence.",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Demonis, the Devil Lord's Ring",
      "Ring of Deep Darkness"
    ],
    "recipe": [
      {
        "Corrupt Angel's Feather": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Mithril": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "allstat": 175,
      "skilldamagepercent": 0.04
    }
  },
  {
    "id": "brag",
    "name": "Ring of Holy Light",
    "koreanname": "신성한 빛의 반지",
    "description": "May your skills be blessed",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Accessory",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Bell of Light"
    ],
    "recipe": [
      {
        "Ring of Light": 1
      },
      {
        "Ring of the Sage": 1
      },
      {
        "Guardian Ring": 1
      },
      {
        "Ancient Writings": 1
      }
    ],
    "stats": {
      "allstat": 210,
      "passive": [
        "Increases nearby allies' Armor by 20 and HP by 900",
        "On skill cast, gathers Holy Light",
        "Stacks for a max of 5",
        "Lasts for 8 seconds"
      ],
      "active": [
        "On use, releases Holy Light",
        "Heals (0.20 X (STR + AGI + INT) X stacks) HP",
        "Cooldown: 10 seconds"
      ],
      "spec": [
        "Specialties - Transmission of Light",
        "Priest - Divine Orb: Duration increased by 25%",
        "Wind Mage - Mirror of Aeolus gains 20% bonus radius."
      ]
    }
  },
  {
    "id": "ofro",
    "name": "Cape of the Count",
    "koreanname": "백작의 망토",
    "description": "Embrace the darkness, and become the ruler of the night!",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Wings",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Wings of Fury"
    ],
    "recipe": [
      {
        "Count's Memento": 1
      },
      {
        "Orichalcum": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "str": 140,
      "agi": 130,
      "dodgechancepercent": 0.1,
      "passive": [
        "Empowers next attack with Darkness on skill cast",
        "Deals (MAIN STAT X 2.5) magic damage"
      ]
    }
  },
  {
    "id": "modt",
    "name": "Dragon Wings",
    "koreanname": "드래곤 윙",
    "description": "A magical creation imbued with dragon's breath",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Wings",
    "color": "C39BE1",
    "level": 70,
    "required_by": [
      "Fairy Wings"
    ],
    "recipe": [
      {
        "Dragon Heart": 1
      },
      {
        "Dragon Bone": 1
      },
      {
        "Dragon Scale": 1
      }
    ],
    "stats": {
      "int": 130,
      "hp": 600,
      "skilldamagepercent": 0.06,
      "active": [
        "On use, creates a magical passage that connects current position and Capital Prius"
      ]
    }
  },
  {
    "id": "I0AC",
    "name": "Corrupt Crystal Wings",
    "koreanname": "타락한 크리스탈 날개",
    "description": "A pair of wings blasting out intense unholy energy",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Wings",
    "color": "C39BE1",
    "level": 80,
    "required_by": [
      "Pure Crystal Wings",
      "Wings of Slayer",
      "Corrupt Angel Icon"
    ],
    "recipe": [
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Corrupt Angel's Feather": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "allstat": 145,
      "hpregen": 45,
      "mpregen": 18,
      "skilldamagepercent": 0.09
    }
  },
  {
    "id": "ckng",
    "name": "Sanguiel, the Bloodspear of Requiem",
    "koreanname": "피의 진혼창 상귀엘",
    "description": "Resignation is what kills people. Once they've rejected resignation, humans gain the privilege of making humanity their footpath.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Tiberius, the Spear of Lightning"
    ],
    "recipe": [
      {
        "Sanguiel, the Bloodspear of Domination": 1
      },
      {
        "Blade of Requiem": 1
      },
      {
        "Ghostly Thread": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 4500,
      "str": 420,
      "skilldamagepercent": 0.05,
      "periodicdamagepercent": 0.15,
      "passive": [
        "Activates Blood Release on every 14th attack",
        "Heals user for (250 + MAIN STAT X 0.6) HP and activates a random Wrath effect",
        "Red Wrath: deals (MAIN STAT X 4.25) magic damage in an AoE",
        "Green Wrath: reduces target movement and attack speed by 66% for 3 seconds, deals (MAIN STAT X 2.25) magic damage in an AoE, and stuns non-boss units for 0.25 seconds"
      ]
    }
  },
  {
    "id": "I0C9",
    "name": "Anger",
    "koreanname": "분노",
    "description": "Let it go, if you can no longer control it.",
    "notes": [
      "In order to stop the active effect, press ESC"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Oblivion"
    ],
    "recipe": [
      {
        "Corruptor": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "damage": 6750,
      "str": 555,
      "skilldamagepercent": 0.05,
      "passive": [
        "On attack, 25% chance to activate Devastation",
        "Deals (STR X 10.5) magic damage to enemies in a frontal cone",
        "Reduce armor by 15% [Type-A] for 6 seconds",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Anger",
        "Increases attack speed by 50%, STR by 30, and skill damage by 1% per 0.5 ~ 1 seconds while draining user's HP",
        "Stacks up to 10 times and drains (240 + seconds elapsed X 120) HP per second",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "hcun",
    "name": "Aglaia, the Spear of Heavenly Flows",
    "koreanname": "천류의 창 아글라이아",
    "description": "When the heavenly flows pass through you, you shall become flawless",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Splitting of the Sky and Earth"
    ],
    "recipe": [
      {
        "Niflheim": 1
      },
      {
        "Storm Headdress": 1
      },
      {
        "Blood Orb": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "damage": 6600,
      "str": 535,
      "skilldamagepercent": 0.08,
      "passive": [
        "Activates Song of Glory on skill cast",
        "Increases STR by 25 and skill damage by 2.5% per stack for 5 seconds up to a max of 3 stacks"
      ]
    }
  },
  {
    "id": "sorf",
    "name": "Deathbringer",
    "koreanname": "데스브링어",
    "description": "Sword that attracts death",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Ruinbringer"
    ],
    "recipe": [
      {
        "Niflheim": 1
      },
      {
        "Skull Seal": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Scarab Bone": 1
      }
    ],
    "stats": {
      "damage": 5250,
      "str": 500,
      "int": 205,
      "attackspeedpercent": -0.5,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Hand of Death",
        "Deals ((1% max HP) + (STR X 3.75) + (INT X 7.5)) magic splash damage and stuns for 1 second",
        "Increases STR and INT by 200 and attack damage by 4500 for 15 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "thdm",
    "name": "Bahanar, the True Sword of Illusion",
    "koreanname": "진 환검 바하나르",
    "description": "Strange magical sword that resonates and grows stronger as the user grows",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Meacronacer, the Sword of Thousand Illusions"
    ],
    "recipe": [
      {
        "Bahanar, the Sword of Illusion": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 6900,
      "str": 555,
      "agi": 215,
      "skilldamagepercent": 0.09,
      "passive": [
        "(8 + HIT COUNT X 0.2)% chance to activate Grace Tear on attack",
        "Deals ((MAIN STAT X 0.45) + (DMG DEALT X 3)) magic damage in an AoE and stuns for 0.1 seconds"
      ],
      "spec": [
        "Specialty - Redemption",
        "Crusader - Flash of Immortality grants additional 10% damage reduction at low HP."
      ]
    }
  },
  {
    "id": "I08L",
    "name": "Asmodeus, the Archdevil's Greatsword",
    "koreanname": "천 마검 아스모데우스",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Espishu, the Sword of Eternity"
    ],
    "recipe": [
      {
        "Karonphniamm, the True Holy Sword": 1,
        "Eximelia, the True Unholy Sword": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 5700,
      "str": 390,
      "agi": 390,
      "mainstat": 150,
      "skilldamagepercent": 0.065,
      "passive": [
        "On attack, 15% chance to activate Chaos Strike",
        "Deals ((STR + AGI) X 5) magic damage"
      ]
    }
  },
  {
    "id": "cnhn",
    "name": "Blazing Soul",
    "koreanname": "블레이징 소울",
    "description": "My inner power is burning up !!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Blazing Heart"
    ],
    "recipe": [
      {
        "Flame Soul": 1
      },
      {
        "Visvire, the Hammer of Storm": 1
      },
      {
        "Ring of Nightmare": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "damage": 6300,
      "str": 600,
      "attackspeedpercent": -0.4,
      "skilldamagepercent": 0.075,
      "passive": [
        "20% chance to activate Fervor on casting skill",
        "Increases attack damage by 750 per stack (up to 5 stacks)",
        "Deals flame affinity X (ATK DMG X (0.15 + 3% stacks) + (STR X 1.5)) magic damage"
      ],
      "spec": [
        "Specialty - Improved Genesis",
        "Paladin - Genesis: Each pulse deals 60% bonus damage."
      ]
    }
  },
  {
    "id": "gobm",
    "name": "Laksha, the Ancient Sword of Poison",
    "koreanname": "독의 고대검 라크샤",
    "description": "Break free from the binds of poison, and subjugate it to make it yours ..",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Laktrisha, the Illusional Sword of Poison"
    ],
    "recipe": [
      {
        "Laksha, the Reigning Sword of Poison": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "damage": 5700,
      "str": 235,
      "agi": 475,
      "skilldamagepercent": 0.05,
      "passive": [
        "Empowers next attack with poison on casting skill",
        "On attack, gain a stack (up to 10 stacks)",
        "Next attack deals (AGI X 0.075 X stacks) magic damage"
      ],
      "active": [
        "On use, activates Unleash",
        "Consumes stacks and deals (AGI X 2 X stacks) magic damage (needs at least 4 stacks)",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "I0CN",
    "name": "Storm Reaver",
    "koreanname": "스톰 리버",
    "description": "The Omen of Storm - Dagger that brings destruction",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Melee)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Crimson Reaper"
    ],
    "recipe": [
      {
        "Irbeth, the Sword of Lightning": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "damage": 5550,
      "agi": 580,
      "attackspeedpercent": 0.15,
      "passive": [
        "On attack, chance to strike down lightning",
        "~11% chance to deal (2000 + AGI X 1.5) magic damage",
        "~33% chance to deal (3000 + AGI X 2.25) magic damage",
        "On skill cast, chance to activate Awakening",
        "~11% chance to increase movement and attack speed by 50% for 6 seconds"
      ]
    }
  },
  {
    "id": "I08M",
    "name": "Belius, the Archdevil's Staff",
    "koreanname": "천 마봉 벨리우스",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Ethenos, the Staff of Space"
    ],
    "recipe": [
      {
        "Klenetia, the True Holy Staff": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 4800,
      "int": 645,
      "skilldamagepercent": 0.065,
      "active": [
        "On use, activates Chaos Explosion",
        "Deals (INT X 22.5) magic damage around user",
        "Stuns for 1 second",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0CM",
    "name": "Twin Snow",
    "koreanname": "트윈 스노우",
    "description": "A beautiful yet deadly creation of ice.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Triple Snow"
    ],
    "recipe": [
      {
        "Ripple Snow": 1
      },
      {
        "Winter Rose": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Frozen Cobweb": 1
      },
      {
        "Dark Matter": 1
      }
    ],
    "stats": {
      "damage": 4500,
      "int": 630,
      "hp": 1500,
      "affinityiwpercent": 0.06,
      "passive": [
        "On skill cast, empowers next attack with ice",
        "Next attack deals (INT X 3) magic damage and drenches enemy with wetness for 6 seconds"
      ],
      "active": [
        "On use, activates Frozen Storm",
        "Freezes enemies in selected area for 2 seconds",
        "Deals (8 X (water affinity X 15) / (INT X 56)) magic damage",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialty - Water Mastery",
        "Elementalist - Seal of Water: HP increased by 20%, duration increased by 10 seconds",
        "Elementalist - Water Beam: Range increased by 150, can heal 1 additional ally"
      ]
    }
  },
  {
    "id": "ram4",
    "name": "Staff of Madness",
    "koreanname": "스태프 오브 매드니스",
    "description": "The madness of Mad Clown runs deep within this staff",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Staff of Domination",
      "Staff of Abyss"
    ],
    "recipe": [
      {
        "Staff of Void": 1
      },
      {
        "Purified Water": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "damage": 4600,
      "int": 570,
      "hp": 1350,
      "passive": [
        "On skill cast, empowers nearby allies with skill damage by 7.5% and HP regen by 200 for 6 seconds"
      ]
    }
  },
  {
    "id": "rde4",
    "name": "Crimson Pumpkin Rod",
    "koreanname": "크림슨 펌킨 로드",
    "description": "Hehe heh heh heh",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bloody Hatred"
    ],
    "recipe": [
      {
        "Pumpkin Rod": 1
      },
      {
        "True Dragonstaff Irave": 1
      },
      {
        "Crimson Stone": 1
      },
      {
        "Bloodstone": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 3800,
      "int": 460,
      "skilldamagepercent": 0.05,
      "passive": [
        "On skill cast, increase INT by 15, flame affinity by 1.5% for 4 seconds (stacks up to 5 times)"
      ],
      "active": [
        "On use, activates Throw Crimson Pumpkin",
        "Deals (10000 + INT X 20) magic damage",
        "Stuns for 1.5 seconds",
        "Heals user for 1500 HP",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0DI",
    "name": "Benziena, the Earthen Soul",
    "koreanname": "대지의 영혼 벤지이나",
    "description": "Attain true knowledge by embracing the great Mother Nature",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Staff)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Benziena, the Earthen Heart"
    ],
    "recipe": [
      {
        "Benziena, the Earthen Pillar": 1
      },
      {
        "Spirit of Forest": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "damage": 6150,
      "int": 595,
      "dtpercent": -0.1,
      "affinityearthpercent": 0.06,
      "active": [
        "On use, activates Twisting Earth",
        "Heals allies for 2000 HP per 0.5 seconds in selected area for 10 seconds",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialties - Earth Mastery",
        "Alchemist - Enhanced Conjure Golem: Golem's HP increased by 40% and armor is increased by 40. Also periodically heals nearby allies.",
        "Elementalist - Seal of Earth: Duration increased by 10 seconds",
        "Elementalist - Pulse of Protection: Cooldown reduced by 3 seconds"
      ]
    }
  },
  {
    "id": "I09P",
    "name": "Yggrect, the Archdevil's Bow",
    "koreanname": "천 마궁 이드렉트",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bow)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Griveddon, the Bow of Certain Destruction"
    ],
    "recipe": [
      {
        "Alkate, the True Unholy Bow": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 6600,
      "str": 360,
      "agi": 525,
      "skilldamagepercent": 0.04,
      "passive": [
        "On attack, 15% chance to activate Chaos Spike",
        "Deals ((STR + AGI) X 5) magic damage"
      ]
    }
  },
  {
    "id": "I0CU",
    "name": "Flame Explosion",
    "koreanname": "플레임 익스플로전",
    "description": "Destruction is my only path!!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bow)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Hellflame"
    ],
    "recipe": [
      {
        "True Dragonbow Aience": 1
      },
      {
        "Crossbow of Requiem": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "str": 185,
      "agi": 555,
      "affinityflamepercent": 0.1,
      "passive": [
        "On attack, 12.5% chance to activate Destruction",
        "Deals (AGI X 0.75) magic damage",
        "Reduced armor of target by 20 for 10 seconds"
      ]
    }
  },
  {
    "id": "I0FI",
    "name": "Devil Blaster",
    "koreanname": "데블 블래스터",
    "description": "Be gone, evil !",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Devil Chaser"
    ],
    "recipe": [
      {
        "Dragon Blaster": 1
      },
      {
        "Demon Hunter": 1
      },
      {
        "Eye of the Abyss": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Corrupt Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 5550,
      "agi": 495,
      "int": 205,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.06,
      "active": [
        "On use, activates Devil Blast",
        "Deals ((ATK DMG X 5) + (MAIN STAT X 35)) magic damage",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0FL",
    "name": "Crimson Cross",
    "koreanname": "크림슨 크로스",
    "description": "Shed your blood for the sake of present.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Crimson Star"
    ],
    "recipe": [
      {
        "Red Cross": 1
      },
      {
        "Winter Rose": 1
      },
      {
        "Scarab Bone": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "damage": 5220,
      "agi": 220,
      "int": 470,
      "hp": 1500,
      "passive": [
        "Empowers allies upon healing them",
        "Increases allies skill damage and healing received by 5% for 4 seconds"
      ],
      "active": [
        "On use, activates Bloody Purge",
        "Deals (AGI X 3.75) magic damage",
        "Heals allies for (INT X 2.5) HP",
        "Cooldown: 12 seconds"
      ],
      "spec": [
        "Specialty - Bloody Protection",
        "Shooter - Nanomachine Injection: Healing speed increased by 50% and duration increased by 50%."
      ]
    }
  },
  {
    "id": "I0FN",
    "name": "Retus, the Bullet of Judgment",
    "koreanname": "심판의 탄환 레투스",
    "description": "Your sin cannot be washed away.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bullet of Ruin"
    ],
    "recipe": [
      {
        "Retus, the Iron Bullet": 1
      },
      {
        "Corrupt Creations": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "A Page of the Unholy Book": 1
      }
    ],
    "stats": {
      "damage": 6000,
      "agi": 425,
      "critmultiplier": 0.2,
      "passive": [
        "Empowers next attack with Iron Bullet every 8 seconds",
        "Deals ((ATK DMG X 0.7) + (MAIN STAT X 7.5)) magic damage per stack (up to 1 stack)",
        "Stuns for 0.25 seconds"
      ]
    }
  },
  {
    "id": "I0FF",
    "name": "Alchatratz, the Archdevil's Cannon",
    "koreanname": "천 마포 알카트라츠",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Chronos, the Cannon of Time"
    ],
    "recipe": [
      {
        "Eana, the True Holy Cannon": 1
      },
      {
        "A Page of the Bible": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "str": 345,
      "agi": 500,
      "skilldamagepercent": 0.03,
      "passive": [
        "On attack, 15% chance to activate Chaos Bullet",
        "Deals ((STR + AGI) X 5) magic damage"
      ]
    }
  },
  {
    "id": "I0FO",
    "name": "Bullet of Ruin",
    "koreanname": "파멸의 탄환",
    "description": "Your end is nigh !",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Gun)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Dante's Inferno"
    ],
    "recipe": [
      {
        "Retus, the Bullet of Judgment": 1
      },
      {
        "Bullet of Destruction": 1
      },
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Angel's Feather": 1
      },
      {
        "Corrupt Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "agi": 515,
      "critmultiplier": 0.2,
      "passive": [
        "Empowers next attack with Bullet of Ruin every 6 seconds",
        "Deals ((ATK DMG X 0.85) + (MAIN STAT X 7.5)) magic damage per stack (up to 3 stacks)",
        "Stuns for 0.25 seconds"
      ]
    }
  },
  {
    "id": "frhg",
    "name": "Bag of Hell",
    "koreanname": "지옥의 배낭",
    "description": "So.. heavy...",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bag)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bag of Corruption"
    ],
    "recipe": [
      {
        "Bag of Mighty Strength +1": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Corrupt Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 4500,
      "str": 430,
      "skilldamagepercent": 0.06,
      "dtpercent": -0.18,
      "spec": [
        "Merchant Specialty - Very Heavy Bag",
        "Merchant - Bag Slam: Damage is increased by 150%, and it increases target's damage taken by 4% for 6 seconds.",
        "Merchant - Throwing Healing Potion: Duration increased by 5s, increases target's skill damage by 5%"
      ]
    }
  },
  {
    "id": "hlst",
    "name": "Bag of Heaven",
    "koreanname": "천국의 배낭",
    "description": "Bag filled with happiness",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bag)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bag of Life"
    ],
    "recipe": [
      {
        "Candy-filled Bag +1": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Angel's Feather": 1
      }
    ],
    "stats": {
      "damage": 3600,
      "allstat": 360,
      "hpregen": 120,
      "mdpercent": 0.12,
      "spec": [
        "Merchant Specialty - Very Light Bag",
        "Merchant - Throwing Healing Potion: Refill period is reduced to 2.5 seconds, and it reduces target's damage taken by 8%.",
        "Merchant - Life Shield Scroll: Duration increased by 5 seconds"
      ]
    }
  },
  {
    "id": "fwss",
    "name": "Bag of Corruption",
    "koreanname": "타락의 배낭",
    "description": "Help.. me..",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bag)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bag of Destruction",
      "Bag of Explosion"
    ],
    "recipe": [
      {
        "Bag of Hell": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "Eye of the Abyss": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "damage": 6000,
      "str": 540,
      "skilldamagepercent": 0.08,
      "dtpercent": -0.2,
      "spec": [
        "Merchant Specialty - Very Heavy Bag",
        "Merchant - Bag Slam: Damage is increased by 300%, and it increases target's damage taken by 4% for 6 seconds.",
        "Merchant - Throwing Healing Potion: Duration increased by 5s, increases target's skill damage by 5%"
      ]
    }
  },
  {
    "id": "rej3",
    "name": "Bag of Life",
    "koreanname": "생명의 배낭",
    "description": "Bag filled with life",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Weapon (Bag)",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bag of Mother Nature"
    ],
    "recipe": [
      {
        "Bag of Heaven": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Frorist": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "damage": 4800,
      "allstat": 465,
      "hpregen": 240,
      "mdpercent": 0.12,
      "spec": [
        "Merchant Specialty - Very Light Bag",
        "Merchant - Throwing Healing Potion: Refill period is reduced to 2.5 seconds, and it reduces target's damage taken by 12%.",
        "Merchant - Life Shield Scroll: Duration increased by 5 seconds"
      ]
    }
  },
  {
    "id": "I0B3",
    "name": "Purelight Armor",
    "koreanname": "퓨어라이트 아머",
    "description": "You shall shine brighter under this brilliant aura.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Requiem, the Armor of Lamentation"
    ],
    "recipe": [
      {
        "Sacred Armor": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "armor": 200,
      "str": 230,
      "agi": 100,
      "skilldamagepercent": 0.05,
      "passive": [
        "Increases nearby allies' stats by 5% [Type-A, excluding self]"
      ]
    }
  },
  {
    "id": "sbch",
    "name": "Earthen Plates",
    "koreanname": "대지의 각갑",
    "description": "You've shown me heroism and will worthy of my blessings.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Creation of the Sky and Earth",
      "Plates of Lightning"
    ],
    "recipe": [
      {
        "Plates of Regeneration": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "armor": 200,
      "str": 240,
      "agi": 100,
      "mdpercent": 0.08,
      "passive": [
        "Temporarily boosts HP regen by 1250 when HP drops below 30% for 10 seconds",
        "Cooldown 60 seconds"
      ]
    }
  },
  {
    "id": "I0CO",
    "name": "Reactive Armor",
    "koreanname": "리액티브 아머",
    "description": "Armor of Sea that has been purified again. Reacts to all evil.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Hellspike Armor"
    ],
    "recipe": [
      {
        "Infected Crab Armor": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "armor": 200,
      "str": 245,
      "skilldamagepercent": 0.06,
      "passive": [
        "Reflects damage on being damaged",
        "Deals (STR X 0.6) pure damage",
        "Has a 16% chance to deal (STR X 5) pure damage",
        "Releases a powerful pulse upon receiving enough damage (up to 150% max HP)",
        "Pulse deals ((max HP X 10) X 1.75) magic damage",
        "Stuns for 1 second",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0B2",
    "name": "Cruoris, the Armor of Blood",
    "koreanname": "피의 갑주 크루오리스",
    "description": "The blood and flesh of your foes will make you stronger",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Benedict, the Crimson Armor of Blood"
    ],
    "recipe": [
      {
        "Dekaros, the Unholy Armor": 1
      },
      {
        "Dark Wings": 1
      },
      {
        "Bloodstone": 1
      },
      {
        "Dragon Bone": 1
      }
    ],
    "stats": {
      "armor": 160,
      "agi": 220,
      "skilldamagepercent": 0.06,
      "passive": [
        "Increases your max HP as you deal damage",
        "Stores 1% of damage dealt (up to (AGI X 2) HP)"
      ],
      "active": [
        "On use, releases Cruoris",
        "Deals (stored HP X 5) magic damage in an AoE",
        "Stuns for 1 second",
        "Increases AGI by 15% for 12 seconds",
        "Cooldown: 150 seconds"
      ]
    }
  },
  {
    "id": "clsd",
    "name": "Guardian Vest",
    "koreanname": "수호의 도복",
    "description": "You've shown me heroism and will worthy of my blessings.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Vest of Cyclone",
      "Plates of Lightning",
      "Grandine, the Plates of Wraith"
    ],
    "recipe": [
      {
        "Vest of Protection": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "armor": 170,
      "str": 90,
      "agi": 255,
      "mdpercent": 0.05,
      "passive": [
        "Creates a barrier that absorbs 1500 damage every 8 seconds"
      ],
      "spec": [
        "Specialty",
        "Martial Artist - Nature's Protection: Nameless Arts reduces damage taken by 20% while active and grants immunity to instant death spells."
      ]
    }
  },
  {
    "id": "I0JU",
    "name": "Vest of Cyclone",
    "koreanname": "태풍의 도복",
    "description": "Vest that bestows you with the speed of a cyclone.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Vest of Storm"
    ],
    "recipe": [
      {
        "Guardian Vest": 1
      },
      {
        "Spirit of Forest": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 175,
      "agi": 270,
      "skilldamagepercent": 0.05,
      "mdpercent": 0.05,
      "passive": [
        "On skill cast, activates Wind Fury for 1.5 seconds",
        "Next 2 attacks hit once to deal bonus (50% ATK DMG) physical damage",
        "Increases movement speed by 300 (past limit)"
      ]
    }
  },
  {
    "id": "I0B4",
    "name": "Frozen Robe",
    "koreanname": "프로즌 로브",
    "description": "The ancient cold spirit shall protect you from the hands of enemies.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Winter Robe"
    ],
    "recipe": [
      {
        "Robe of Everfrost": 1
      },
      {
        "Mana Heart Frost": 1
      },
      {
        "Frozen Cobweb": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "armor": 180,
      "int": 250,
      "skilldamagepercent": 0.05,
      "mdpercent": 0.05,
      "active": [
        "On use, summons a Frozen Spirit",
        "Absorbs up to (INT X 6) damage",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialty",
        "Water Mage - Improved Frozen Emotion: Reduces target's damage taken by 10%."
      ]
    }
  },
  {
    "id": "lhst",
    "name": "Fairy Garment",
    "koreanname": "요정의 예복",
    "description": "You've shown me heroism and will worthy of my blessings.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Diana, the Robe of Holy Maiden",
      "Druid's Mantle"
    ],
    "recipe": [
      {
        "Fairy Robe": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "armor": 175,
      "int": 285,
      "hp": 1500,
      "active": [
        "Summons fairy on use",
        "Heals 12500 HP over 12 seconds",
        "Decreases target's armor by 15 for 5 seconds (stacks up to 5 times)",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialties - Fairy Blessing",
        "Wind Mage - Feather of Aeolus: Heals for max HP X 15%."
      ]
    }
  },
  {
    "id": "I0CS",
    "name": "Robe of the Sage",
    "koreanname": "로브 오브 세이지",
    "description": "Magic doesn't work against me, the one that defeated Mage King!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Robe of the Necromancer"
    ],
    "recipe": [
      {
        "Robe of the Mage": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Mithril": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "armor": 180,
      "int": 215,
      "skilldamagepercent": 0.03,
      "mpregen": 20,
      "active": [
        "Block magic every 4 minutes"
      ]
    }
  },
  {
    "id": "rres",
    "name": "True Bloodstone Plates",
    "koreanname": "진 혈석 갑주",
    "description": "Armor that fuses with user's blood to form a hard carapace",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Armor",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Bloodsoul Plates",
      "Hades, the Armor of Despair"
    ],
    "recipe": [
      {
        "Bloodstone Plates": 1
      },
      {
        "True Dragon Armor Magron": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "armor": 190,
      "str": 160,
      "agi": 60,
      "int": 160,
      "dtpercent": -0.06,
      "passive": [
        "Blocks 25 damage every hit"
      ],
      "active": [
        "On use, activates Bloodstone Form",
        "Applies a shield of (800 + 15% max HP)",
        "Increases main stat by 7.5%, HP and MP regen by (400 + 7.5% max HP and MP respectively)",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "I0B6",
    "name": "Horns of Destruction",
    "koreanname": "파괴의 뿔",
    "description": "The wrath of the Great Demon Lord shall destroy all!",
    "dropped_by": [
      "Demon Lord Beriel"
    ],
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "droprate": 0.075,
    "required_by": [
      "Horn of Devil",
      "Crown of Rage"
    ],
    "stats": {
      "armor": 75,
      "str": 125,
      "agi": 135,
      "skilldamagepercent": 0.06,
      "dtpercent": 0.06,
      "active": [
        "On use, discharges a powerful beam of destruction",
        "Deals (MAIN STAT X 50) magic damage",
        "Reduces armor of enemy by 200 for 12 seconds [Type-A]",
        "Stuns for 1 second",
        "Cooldown: 150 seconds"
      ]
    }
  },
  {
    "id": "I0AD",
    "name": "Archangel Halo",
    "koreanname": "대천사의 헤일로",
    "description": "Those that received salvation, shall be able to overcome hardships",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Halo of Judgment"
    ],
    "recipe": [
      {
        "Sacred Helm": 1
      },
      {
        "Mithril": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "armor": 110,
      "str": 135,
      "agi": 90,
      "procdamagepercent": 0.075,
      "active": [
        "Block magic every 3 minutes"
      ]
    }
  },
  {
    "id": "I0DY",
    "name": "Helm of Battle",
    "koreanname": "전장의 투구",
    "description": "Follow me without hesitation! Charge!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Halo of Judgment",
      "Dragon Mask"
    ],
    "recipe": [
      {
        "True Dragon Helm Agron": 1
      },
      {
        "Helm of Passion": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Angel's Feather": 1
      }
    ],
    "stats": {
      "armor": 110,
      "allstat": 100,
      "mainstat": 75,
      "aadamagepercent": 0.1,
      "passive": [
        "Increases nearby allies' HP regen by 50"
      ],
      "active": [
        "Block magic every 4 minutes"
      ]
    }
  },
  {
    "id": "dthb",
    "name": "Grim Visage",
    "koreanname": "그림 비사쥬",
    "description": "The face of death itself.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Eye of Wallachia",
      "Dragon Mask"
    ],
    "recipe": [
      {
        "Skeris, the Unholy Helm": 1
      },
      {
        "Death Visage": 1
      },
      {
        "A Small Piece of Wrath": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "armor": 90,
      "agi": 145,
      "hp": 750,
      "skilldamagepercent": 0.06,
      "critchancepercent": 0.06,
      "active": [
        "On use, activates Grim Vengeance for 8 seconds",
        "if HP is above 40%, increases main stat by 135",
        "If HP is below 40%, deals (MAIN STAT X 12.5) magic damage, increases main stat by 180, heals 70% max HP, and stuns nearby enemies for 1.5 seconds",
        "Regardless of HP percentage, increases critical damage by 0.20",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "rump",
    "name": "Void Eye",
    "koreanname": "나락의 눈",
    "description": "Fall into despair and perish.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Eye of the Flame Lord"
    ],
    "recipe": [
      {
        "Eye of the Abyss": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "armor": 90,
      "int": 235,
      "mdpercent": 0.05,
      "passive": [
        "Increases nearby allies' skill damage by +4%"
      ],
      "active": [
        "Summons 6 demons on use",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "I0AE",
    "name": "Prophetia, the Source of Mana",
    "koreanname": "마력의 원천 프로피티아",
    "description": "Wellspring that provides a level of mana unreachable by mere intelligence.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Prophetia, the Greater Source of Mana"
    ],
    "recipe": [
      {
        "Hood of Mage": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "A Page of the Unholy Book": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "armor": 75,
      "int": 200,
      "skilldamagepercent": 0.075,
      "active": [
        "On use, temporarily increases INT by 225 and max MP by 1500",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "sor7",
    "name": "Hood of Grim Reaper",
    "koreanname": "후드 오브 그림 리퍼",
    "description": "Overcome death, and become a reaper of life yourself !",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Hood of Apocrypha"
    ],
    "recipe": [
      {
        "Hood of Mage": 1
      },
      {
        "Hood of Reaper": 1
      },
      {
        "Skull Seal": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "armor": 85,
      "str": 95,
      "int": 150,
      "passive": [
        "Activates Possession when HP drops below 25%",
        "Increases INT by 75 and deals (INT X 11) magic damage",
        "Stuns for 0.3 seconds",
        "Cooldown: 20 seconds"
      ],
      "active": [
        "Grants invisibility on use for 20 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "tint",
    "name": "Horn of Devil",
    "koreanname": "악마의 뿔",
    "description": "Horn imbued with the essence of Devil",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Headwear",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Horn of Lightning God"
    ],
    "recipe": [
      {
        "Horns of Destruction": 1
      },
      {
        "Storm Headdress": 1
      },
      {
        "Bat Wings": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "armor": 95,
      "allstat": 144,
      "skilldamagepercent": 0.06,
      "critchancepercent": 0.06,
      "dtpercent": 0.06,
      "passive": [
        "Upon moving 3000 distance, unleash Devil's Flame on next attack",
        "Deals (MAIN STAT X 20) pure damage",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0BK",
    "name": "True Guardian Ring",
    "koreanname": "트루 가디언 링",
    "description": "I vow my life to protect this sanctuary till my plates crumble away.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Ispion, the Runed Ring"
    ],
    "recipe": [
      {
        "Guardian Ring": 1
      },
      {
        "Dark Wings": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "armor": 40,
      "str": 130,
      "agi": 110,
      "hpregen": 25,
      "mdpercent": 0.15,
      "spec": [
        "Specialty",
        "Knight - Improved Seal of Mana: Radius is increased by 15%."
      ]
    }
  },
  {
    "id": "I08J",
    "name": "Demonis, the Devil Lord's Ring",
    "koreanname": "마왕의 반지 데모니스",
    "description": "If you fear the darkness, it will consume you",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Latea, the Ring of Chaos"
    ],
    "recipe": [
      {
        "Ring of Light": 1,
        "Ring of Darkness": 1
      },
      {
        "Dark Wings": 1
      },
      {
        "Dark Matter": 1
      }
    ],
    "stats": {
      "allstat": 270,
      "skilldamagepercent": 0.07,
      "passive": [
        "Increases nearby allies' armor by 40"
      ]
    }
  },
  {
    "id": "I09A",
    "name": "Everfrost Gauntlet",
    "koreanname": "에버프로스트 건틀릿",
    "description": "Gloves made from ice that never melts.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Frostshard Armor",
      "Purefrost Gauntlet"
    ],
    "recipe": [
      {
        "Winter Rose": 1,
        "Frost Web Brooch": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "allstat": 215,
      "skilldamagepercent": 0.05,
      "dtpercent": -0.1
    }
  },
  {
    "id": "I08F",
    "name": "Mana Heart Frost",
    "koreanname": "마나 하트 프로스트",
    "description": "A mystical gem that continuously emits mana and chill.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Frozen Robe",
      "Ring of Deep Darkness"
    ],
    "recipe": [
      {
        "Mana Heart": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Frorist": 1
      }
    ],
    "stats": {
      "int": 270,
      "hp": 3000,
      "mp": 6000,
      "mpregen": 30
    }
  },
  {
    "id": "I0B1",
    "name": "Ring of Intrusion",
    "koreanname": "잠식의 반지",
    "description": "You are already one with the ring. You just haven't realized it yet.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Ring of Time"
    ],
    "recipe": [
      {
        "Ring of the Sage": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "allstat": 245,
      "skilldamagepercent": 0.06,
      "active": [
        "On use, activates Deep Resonance",
        "Refreshes the cooldown of the last used non-ultimate skill",
        "Cooldown: 105 seconds"
      ]
    }
  },
  {
    "id": "I0J7",
    "name": "Ring of Deep Darkness",
    "koreanname": "깊은 어둠의 반지",
    "description": "Corruption is born from the denial of existence.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Grimoire of Darkness"
    ],
    "recipe": [
      {
        "Ring of Darkness": 1
      },
      {
        "Mana Heart Frost": 1
      },
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "allstat": 210,
      "mp": 2250,
      "skilldamagepercent": 0.04,
      "active": [
        "On use, activates Forbidden Magic",
        "Consunes 50% of max MP and increases main stat by (MP consumed / 80) and attack speed by 30%",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialties - Transmission of Darkness, Forbidden Grimoire",
        "Priest - Holy Aurora is replaced by Dark Aurora [Lv 1]"
      ]
    }
  },
  {
    "id": "I0C5",
    "name": "Ring of the Reaper",
    "koreanname": "사신의 반지",
    "description": "One who controls death, may obtain infinite powers",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Cold Ring of Death"
    ],
    "recipe": [
      {
        "Teperua, the Ring of Blood": 1
      },
      {
        "Ring of the Dead": 1
      },
      {
        "Skull Seal": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "agi": 260,
      "int": 295,
      "hpregen": 60,
      "mpregen": 30,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.1,
      "active": [
        "On use, converts damage taken into HP for 2 seconds"
      ]
    }
  },
  {
    "id": "I0AN",
    "name": "Latea, the Ring of Chaos",
    "koreanname": "혼돈의 반지 라테아",
    "description": "Are you capable of ruling over this chaos?",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Latea, the Ring of Overlord"
    ],
    "recipe": [
      {
        "Demonis, the Devil Lord's Ring": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Essence of Anger": 1
      }
    ],
    "stats": {
      "allstat": 340,
      "skilldamagepercent": 0.1,
      "passive": [
        "Decreases nearby enemies' armor by 75",
        "10% chance to activate Absolute Defense on being damaged"
      ]
    }
  },
  {
    "id": "clfm",
    "name": "Trueblood Ring",
    "koreanname": "트루블러드 링",
    "description": "Ring that awakens your blood",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Crimson Star",
      "Ring of Revival",
      "Wings of Blood Lord"
    ],
    "recipe": [
      {
        "Teperua, the Ring of Blood": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "allstat": 275,
      "hp": 2250,
      "healreceivedpercent": 0.15,
      "active": [
        "On use, heals (30% max HP) (cooldown: 30 seconds)"
      ],
      "spec": [
        "Specialty - Blood Shield",
        "Blood Weaver - Blood Boil applies Life Drain's shield onto yourself and nearby allies."
      ]
    }
  },
  {
    "id": "I0CQ",
    "name": "Purefrost Gauntlet",
    "koreanname": "퓨어프로스트 건틀릿",
    "description": "Gauntlet composed of pure ice",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Heaven's Fist"
    ],
    "recipe": [
      {
        "Everfrost Gauntlet": 1
      },
      {
        "Pure Steel": 1
      }
    ],
    "stats": {
      "armor": 35,
      "allstat": 235,
      "skilldamagepercent": 0.06,
      "dtpercent": -0.12,
      "passive": [
        "On attack, applies slow on the target"
      ]
    }
  },
  {
    "id": "I0D5",
    "name": "Heart of Ifrit",
    "koreanname": "이프리트의 심장",
    "description": "Magical crucible with a burning flame that never burns out",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Heaven's Fist",
      "Wings of Phoenix"
    ],
    "recipe": [
      {
        "Frost Web Brooch": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Dragon Heart": 1
      }
    ],
    "stats": {
      "str": 320,
      "agi": 320,
      "skilldamagepercent": 0.09,
      "passive": [
        "13% chance to reduce target's armor by 12% [Type-A] on attack for 5 seconds"
      ]
    }
  },
  {
    "id": "rst1",
    "name": "Soul Drinker",
    "koreanname": "소울 드링커",
    "description": "A fragment that devours souls",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Soul Eater"
    ],
    "recipe": [
      {
        "Potion of Corruption": 1
      },
      {
        "Blood Orb": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Count's Memento": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "str": 185,
      "int": 280,
      "hpregen": 60,
      "skilldamagepercent": 0.08,
      "mdpercent": 0.08,
      "active": [
        "On use, drains portion of damage dealt as HP for 6 seconds",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I092",
    "name": "Living Dragon Heart",
    "koreanname": "리빙 드래곤 하트",
    "description": "Dragon's heart, overflowing with endless life energy.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Azathos, the Pipe of Chaos"
    ],
    "recipe": [
      {
        "Lifestone": 1
      },
      {
        "Dragon Heart": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Angel's Feather": 1
      }
    ],
    "stats": {
      "int": 335,
      "hp": 3000,
      "passive": [
        "Increase nearby allies' HP regen"
      ],
      "active": [
        "On use, summons a dragon",
        "Deals (INT X 4.5) magic damage and stuns for 0.3 seconds on summon",
        "Cooldown: 150 seconds"
      ]
    }
  },
  {
    "id": "I0D8",
    "name": "Azathos, the Pipe of Chaos",
    "koreanname": "혼돈의 파이프 아자토스",
    "description": "A mystical pipe, uncomprehensible with human's mere knowledge. It is alive.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Accessory",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Horn of God"
    ],
    "recipe": [
      {
        "Living Dragon Heart": 1
      },
      {
        "Tentacle Horn": 1
      },
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "int": 345,
      "hp": 2550,
      "skilldamagepercent": 0.04,
      "passive": [
        "Increases nearby allies' stats",
        "ATK SPD by 10%",
        "attack damage by 1200",
        "HP regen by 60"
      ]
    }
  },
  {
    "id": "I0B5",
    "name": "Cape of Corrupt Flame",
    "koreanname": "타락한 불꽃의 망토",
    "description": "The corrupt flame burns all with heat as strong as the corruption of its source.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Hellspike Armor",
      "Cloak of the Fallen Shadows"
    ],
    "recipe": [
      {
        "Corrupt Crystal Fragment": 1
      },
      {
        "Flame Cloak": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Corrupt Angel's Feather": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "allstat": 195,
      "skilldamagepercent": 0.04,
      "periodicdamagepercent": 0.09,
      "passive": [
        "On landing a single-target effect, engulfs target in corrupt flames",
        "Deals 10% additional damage over 3 seconds (effect stacks)"
      ]
    }
  },
  {
    "id": "I0CE",
    "name": "Wings of Fury",
    "koreanname": "진노의 날개",
    "description": "Control your inner emotions and become a ruler of power",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Wings of Slayer"
    ],
    "recipe": [
      {
        "Cape of the Count": 1
      },
      {
        "Cape of the Dead": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "str": 205,
      "agi": 190,
      "skilldamagepercent": 0.05,
      "passive": [
        "On skill cast, empowers next attack with Blazing Flames",
        "Deals ((MAIN STAT X 2.5) + AGI) pure damage",
        "12.5% chance to deal ((MAIN STAT X 5) + (AGI X 2)) pure damage instead",
        "Increases AGI by 18 for 7 seconds (up to 10 stacks)"
      ]
    }
  },
  {
    "id": "schl",
    "name": "Hungry Bat Wings",
    "koreanname": "굶주린 박쥐 날개",
    "description": "Tasty! Human!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Wings of Blood Lord"
    ],
    "recipe": [
      {
        "Bat Wings": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "Crimson Stone": 1
      },
      {
        "Mark of Storm": 1
      },
      {
        "Infected Tentacle": 1
      }
    ],
    "stats": {
      "agi": 165,
      "int": 165,
      "hp": 1200,
      "passive": [
        "Upon moving 400 distance, activates Hungry Drain on next attack",
        "Deals (40% ATK DMG) pure damage",
        "Heals 8% HP",
        "Increases HP regen by 45 for 2 seconds (up to 5 stacks)",
        "Cooldown: 0.125 seconds"
      ]
    }
  },
  {
    "id": "I0D4",
    "name": "Wanderer's Cape",
    "koreanname": "방랑자의 망토",
    "description": "You will be there, no matter where you are.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Wings of Phoenix"
    ],
    "recipe": [
      {
        "Slayer Boots": 1
      },
      {
        "Dark Wings": 1
      },
      {
        "Ancient Writings": 1
      },
      {
        "Corrupt Creations": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "damage": 1800,
      "str": 130,
      "agi": 180,
      "dtpercent": -0.07,
      "active": [
        "On use, creates a magical passage that connects to Capital Prius"
      ],
      "spec": [
        "Specialty - Wanderer",
        "Martial Artist - Nameless Art's cast time is reduced by 1 second."
      ]
    }
  },
  {
    "id": "I0BH",
    "name": "Fairy Wings",
    "koreanname": "요정의 날개",
    "description": "You shall be blessed with the dexterity and intellect of a fairy!",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Frost Fairy Wings"
    ],
    "recipe": [
      {
        "Dragon Wings": 1
      },
      {
        "Fairy Robe": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "int": 215,
      "hp": 1200,
      "mp": 2250,
      "skilldamagepercent": 0.08,
      "active": [
        "On use, creates a magical passage that connects to Capital Prius"
      ]
    }
  },
  {
    "id": "I093",
    "name": "Frozen Heart",
    "koreanname": "프로즌 하트",
    "description": "Only coldness shall guide you to victory.",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Wings",
    "color": "9BE1E1",
    "level": 100,
    "required_by": [
      "Winter Robe",
      "Frost Fairy Wings",
      "Grim Heart"
    ],
    "recipe": [
      {
        "Angel's Feather": 1
      },
      {
        "Corrupt Angel's Feather": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Frorist": 1
      }
    ],
    "stats": {
      "allstat": 225,
      "mdpercent": 0.15,
      "passive": [
        "Reduces nearby enemy movement and attack speed by 15%"
      ]
    }
  },
  {
    "id": "rej6",
    "name": "Spirit Dagger",
    "koreanname": "정령의 비수",
    "description": "Weapon imbued with an ancient spirit",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Shared)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ethereal Dagger"
    ],
    "recipe": [
      {
        "Spiritus, the Sword of Elements": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Dragon Scale": 1
      },
      {
        "Adamantium": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "damage": 5400,
      "allstat": 435,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.09,
      "passive": [
        "On attack, activates Breath of Ancients every 6 seconds",
        "Next attack deals (MAIN STAT X 6) magic damage",
        "Increases enemy damage taken by 4% for 4 seconds",
        "Increases movement speed by 20% for 3 seconds"
      ],
      "spec": [
        "Specialties",
        "Lightning Mage - Hypercharge: If fully casted, heals for 75% HP"
      ]
    }
  },
  {
    "id": "I0JB",
    "name": "Maw of Greed",
    "koreanname": "탐욕의 손아귀",
    "description": "Nothing satiates my hunger !!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Maw of Beriel"
    ],
    "recipe": [
      {
        "Maw of Monster": 1
      },
      {
        "Claws of Destruction": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Dragon's Eye": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "str": 390,
      "agi": 390,
      "hpregen": 120,
      "passive": [
        "On attack, 20% chance to activate Devour",
        "Your attacks become AoE",
        "Heals 250 HP"
      ],
      "active": [
        "On use, activates Decimation",
        "Pulls enemies to user from 400 range",
        "Deals (ATK DMG X 6) magic damage",
        "Stuns for 1 second",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0LT",
    "name": "Oblivion",
    "koreanname": "망각",
    "description": "Man will desire oblivion rather than not desire at all",
    "notes": [
      "In order to stop the active effect, press ESC"
    ],
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Desolation"
    ],
    "recipe": [
      {
        "Anger": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Fragment of Oblivion": 1
      }
    ],
    "stats": {
      "damage": 7500,
      "str": 615,
      "skilldamagepercent": 0.075,
      "passive": [
        "On attack, 25% chance to activate Devastation on attack",
        "Deals (STR X 12.75) magic damage in a frontal cone",
        "Reduces enemy armor by 15% [Type-A] and magic damage taken by 1% for 6 seconds",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Oblivion",
        "Increases STR by 45 and skill damage by 1.5% (up to 10 stacks)",
        "Drains user's HP, (450 + (seconds elapsed X 150)) HP per 0.5 seconds",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "sor5",
    "name": "Winter's Heart",
    "koreanname": "겨울의 심장",
    "description": "Reign over cold seasons, and become the winter of the world yourself !",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Eternal Winter"
    ],
    "recipe": [
      {
        "Winter's Tear": 1
      },
      {
        "Griseus, the Sword of Protection": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "damage": 7050,
      "str": 670,
      "agi": 370,
      "int": 370,
      "dtpercent": -0.08,
      "passive": [
        "Every 8th attack activates Everfrost Blast",
        "Deals (water affinity X ((STR X 3) + (AGI X 2))) pure damage in an AoE"
      ],
      "active": [
        "On use, activates Frozen Break",
        "Deals (4.5% max MP) magic damage and breaks enemy shields",
        "Applies (30% max HP) shield to allies for 5 seconds",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialty - Absolute Zero",
        "Knight - Shield Break effect is added to Excalibur."
      ]
    }
  },
  {
    "id": "I0FP",
    "name": "Blazing Heart",
    "koreanname": "블레이징 하트",
    "description": "The everlasting, unwavering flame.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "recipe": [
      {
        "Blazing Soul": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Oath of Courage": 1
      },
      {
        "Steel of God": 1
      }
    ],
    "stats": {
      "damage": 7500,
      "str": 655,
      "attackspeedpercent": -0.5,
      "skilldamagepercent": 0.09,
      "passive": [
        "On skill cast, activates Burning Fervor",
        "Increases attack speed by 100%, STR by 30, attack damage by 450 per stack for 9 seconds",
        "On attack, 20% chance to deal (flame affinity X (0.225 + stacks X 0.045) X ATK DMG + (STR X 2.25)) magic damage",
        "Attack cooldown: 15 seconds"
      ],
      "spec": [
        "Specialty - Improved Genesis",
        "Paladin - Each pulse deals 60% bonus damage."
      ]
    }
  },
  {
    "id": "I0GY",
    "name": "Espishu, the Sword of Eternity",
    "koreanname": "영겁의 검 에스피슈",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Espishu, the True Sword of Eternity"
    ],
    "recipe": [
      {
        "Asmodeus, the Archdevil's Greatsword": 1
      },
      {
        "Ancient Hourglass": 1
      },
      {
        "Purified Water of Nature": 1,
        "Fragment of the Wind": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Orb of Oblivion": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "damage": 8250,
      "str": 450,
      "agi": 450,
      "mainstat": 210,
      "skilldamagepercent": 0.09,
      "passive": [
        "On attack, 10% chance to activate Chaos Strike",
        "Deals ((STR + AGI) X 6) magic damage"
      ]
    }
  },
  {
    "id": "uflg",
    "name": "Ruinbringer",
    "koreanname": "루인브링어",
    "description": "Sword that calls forth ruin",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Calamity"
    ],
    "recipe": [
      {
        "Deathbringer": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "God's Page": 1
      },
      {
        "Skeleton Bone": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "damage": 6450,
      "str": 565,
      "int": 305,
      "attackspeedpercent": -0.5,
      "passive": [
        "On skill cast, activates Ruin",
        "Increases attack damage by 450, STR and INT by 24, and skill damage by 1% per stack (up to 10 stacks)",
        "Lasts for 5 seconds"
      ],
      "active": [
        "On use, activates Ruinbringer",
        "Instantly gives max stacks",
        "Deals (((STR X 6) + (INT X 12)) + (1% max HP)) magic damage in an AoE",
        "Stuns for 1 second",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty - Darkened Light",
        "Paladin - Holy Divide deals 25% bonus damage"
      ]
    }
  },
  {
    "id": "arsh",
    "name": "Meacronacer, the Sword of Thousand Illusions",
    "koreanname": "천영의 환검 미크로네이서",
    "description": "A sword unreached by the light, engulfed with the spirit of the abyss.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Astra, the Sword of Moonlight"
    ],
    "recipe": [
      {
        "Bahanar, the True Sword of Illusion": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "damage": 9900,
      "str": 645,
      "agi": 325,
      "skilldamagepercent": 0.12,
      "passive": [
        "(8 + HIT COUNT X 0.2)% chance to activate Grace Tear on attack",
        "Deals ((MAIN STAT X 4.5) + (ATK DMG DEALT X 0.45)) magic damage in an AoE",
        "Stuns for 0.1 seconds"
      ],
      "active": [
        "On use, activates Grand Forte",
        "Slams the ground 6 times around user",
        "Each slam deals ((MAIN STAT X 20) / 12) magic damage",
        "Stuns for 0.125 seconds each slam",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialty - Sword of Thousand Illusions",
        "Crusader - Flash of Immortality grants additional 10% damage reduction at low HP."
      ]
    }
  },
  {
    "id": "I0DX",
    "name": "Tiberius, the Spear of Lightning",
    "koreanname": "번개의 창 티베리우스",
    "description": "A weapon that is the symbol of deity's power and status.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Splitting of the Sky and Earth"
    ],
    "recipe": [
      {
        "Sanguiel, the Bloodspear of Requiem": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "damage": 9300,
      "str": 610,
      "critchancepercent": 0.12,
      "passive": [
        "On skill cast, empowers next attack with lightning (up to 6 stacks)",
        "Deals (lightning affinity X (MAIN STAT X 2.5)) pure damage",
        "30% chance to deal (user's crit multiplier X normal amount) pure damage instead",
        "Heals (3% DMG DEALT)",
        "On attack, 12% chance to deal (lightning affinity X (MAIN STAT X (1.5 + (stacks X 6)))) magic damage"
      ],
      "active": [
        "On use, activates Spear of Deity",
        "Sends (stacks X 2) spears to target",
        "Each spear deals (MAIN STAT X 2) magic damage",
        "Stuns for 0.125 seconds",
        "Cooldown: 80 seconds"
      ]
    }
  },
  {
    "id": "I0E0",
    "name": "Oceanus, the Sword of Light",
    "koreanname": "빛의 검 오케아노스",
    "description": "An artifact with a legends that the user's body becomes like the light itself",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Atricia, the Sword of Dreams"
    ],
    "recipe": [
      {
        "Griseus, the Sword of Protection": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Pure Steel": 1
      }
    ],
    "stats": {
      "damage": 8700,
      "str": 535,
      "agi": 565,
      "passive": [
        "On skill cast, empowers next attack with light (up to 6 stacks)",
        "Deals (MAIN STAT X 2.5) pure damage",
        "30% chance to deal (user's crit multiplier X normal amount) pure damage instead",
        "Heals (3% DMG DEALT)",
        "On attack, 8% chance to deal (MAIN STAT X (2.25 + (stacks X 6))) magic damage"
      ],
      "active": [
        "On use, activates Trail of Light",
        "Sends (stacks X 2) daggers to target",
        "Each dagger deals (MAIN STAT X 2) magic damage",
        "Stuns for 0.125 seconds",
        "Cooldown: 80 seconds"
      ]
    }
  },
  {
    "id": "I0H2",
    "name": "Claws of Beriel",
    "koreanname": "베리엘의 손톱",
    "description": "Claws of the Demon Lord, capable of even slicing through dimensions",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Maw of Beriel"
    ],
    "recipe": [
      {
        "Claws of Destruction": 1
      },
      {
        "Death Scythe": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "damage": 7100,
      "str": 210,
      "agi": 570,
      "critmultiplier": 0.3,
      "passive": [
        "On attack, (1 + HIT COUNT X 0.125)% chance to activate Doomsday",
        "Deals (ATK DMG X 1.6 + (STR + AGI) X 10) magic damage in an AoE",
        "Stuns for 0.1 seconds"
      ]
    }
  },
  {
    "id": "rat3",
    "name": "Laktrisha, the Illusional Sword of Poison",
    "koreanname": "독의 환상검 라크트리샤",
    "description": "I shall deliver you a marvelous death ..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Atricia, the Sword of Dreams"
    ],
    "recipe": [
      {
        "Laksha, the Ancient Sword of Poison": 1
      },
      {
        "Avenger": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Orb of Oblivion": 1
      }
    ],
    "stats": {
      "damage": 6600,
      "str": 315,
      "agi": 645,
      "skilldamagepercent": 0.07,
      "critchancepercent": 0.07,
      "passive": [
        "Empowers next attack with True Poison on skill cast (up to 10 stacks)",
        "Deals (AGI X 0.2 X stacks) magic damage per second",
        "Upon reaching max stacks, deals (AGI X 20) magic damage",
        "Stuns for 0.375 seconds"
      ],
      "active": [
        "On use, activates Illusion on next attack received",
        "Increases AGI by 375 and critical chance by 10% for 15 seconds",
        "Blocks any damage that deal more than 10% max HP",
        "On block, reflects damage and deals (2 X (min(1, DMG DEALT / (max HP + 10%))) X max HP) magic damage",
        "Stuns for 2 seconds",
        "Cooldown: 105 seconds"
      ]
    }
  },
  {
    "id": "sor3",
    "name": "Crimson Reaper",
    "koreanname": "크림슨 리퍼",
    "description": "My sword thirsts for your blood !",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Melee)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Cosmic Reaper",
      "Caedis, the Sword of Slaughter"
    ],
    "recipe": [
      {
        "Tepethia, the Crimson Sword of Requiem": 1
      },
      {
        "Storm Reaver": 1
      },
      {
        "A Small Piece of Wrath": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Heart of Fire": 1
      }
    ],
    "stats": {
      "damage": 6900,
      "agi": 685,
      "hp": 1800,
      "critmultiplier": 0.25,
      "passive": [
        "Every 14th attack activates Wrath of Blood",
        "Deals (MAIN STAT X 6) magic damage in an AoE",
        "Heals user for (300 + (MAIN STAT X 0.6)) HP",
        "On skill cast, 30% chance to activate Blood Awakening",
        "Increases AGI by 240, attack speed by 30% and empowers Wrath of Blood for 7.5 seconds",
        "Every 5th empowered attack, deals (1.25 X MAIN STAT X 6) magic damage in an AoE",
        "Heals user for (450 + (MAIN STAT X 0.9)) HP",
        "Heals nearby allies (225 + (MAIN STAT X 0.45)) HP",
        "Stuns target for 0.375 seconds",
        "Blood Awakening cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "rej4",
    "name": "Staff of Domination",
    "koreanname": "지배자의 지팡이",
    "description": "A desire rises within me to dominate everything !",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ethereal Dagger"
    ],
    "recipe": [
      {
        "Benziena, the Earthen Pillar": 1
      },
      {
        "Staff of Madness": 1
      },
      {
        "Eye of the Abyss": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Essence of Anger": 1
      }
    ],
    "stats": {
      "damage": 6000,
      "int": 735,
      "hp": 900,
      "attackspeedpercent": 0.3,
      "passive": [
        "INT increased by 30 per 1 nearby self-owned summon"
      ],
      "active": [
        "On use, summons Watcher"
      ]
    }
  },
  {
    "id": "flag",
    "name": "Triple Snow",
    "koreanname": "트리플 스노우",
    "description": "Cold, beautiful yet deadly creation of ice",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Endless Snow"
    ],
    "recipe": [
      {
        "Twin Snow": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "damage": 5550,
      "int": 705,
      "hp": 1800,
      "affinityiwpercent": 0.08,
      "passive": [
        "On skill cast, empowers next attack",
        "Deals (INT X 4) magic damage"
      ],
      "active": [
        "On use, activates Glacial Storm",
        "Deals ((water affinity X 15 / (INT X 56)) X 8) magic damage in an AoE",
        "Freezes for 2 seconds",
        "Enemies take (water affinity X (INT X 2)) pure damage from self and allies",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialty - Water Mastery",
        "Elementalist - Seal of Water: HP increased by 40%, duration increased by 10 seconds",
        "Elementalist - Water Beam: Range increased by 150, can heal 1 additional ally",
        "Elementalist - Refreshing Well: Radius increased by 200"
      ]
    }
  },
  {
    "id": "I0P9",
    "name": "Benziena, the Earthen Heart",
    "koreanname": "대지의 심장 벤지이나",
    "description": "Attain true knowledge by embracing the great Mother Nature",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Harmonia, the Sparkle of Life"
    ],
    "recipe": [
      {
        "Benziena, the Earthen Soul": 1
      },
      {
        "Embrace of Nature": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Heart of Fire": 1
      }
    ],
    "stats": {
      "damage": 7050,
      "int": 645,
      "affinityearthpercent": 0.08,
      "passive": [
        "On skill cast, activates Rejuvenation",
        "Heals (750 + INT X 0.16) HP per 1.5 seconds and reduces damage taken by 15% for 9 seconds",
        "Cooldown: 3 seconds"
      ],
      "active": [
        "On use, activates Twisting Earth",
        "Heals 2000 HP per 0.5 seconds for 10 seconds",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialties - Earth Mastery",
        "Elementalist - Seal of Earth: Duration increased by 10 seconds",
        "Elementalist - Pulse of Protection: Cooldown reduced by 3 seconds",
        "Elementalist - Earthen Protection: Radius increased by 200",
        "Alchemist - Enhanced Conjure Golem: Golem's HP increased by 40% and armor is increased by 40. Also periodically heals nearby allies."
      ]
    }
  },
  {
    "id": "rej5",
    "name": "Staff of Abyss",
    "koreanname": "스태프 오브 어비스",
    "description": "Staff drenched in the madness of the abyss",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Soul of Abyss"
    ],
    "recipe": [
      {
        "Staff of Madness": 1
      },
      {
        "Dark Crystal": 1,
        "Dragonic Orb": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Spirit of Abyss": 1
      }
    ],
    "stats": {
      "damage": 5500,
      "int": 665,
      "hp": 1800,
      "passive": [
        "On skill cast and healing, grants Mad Enhancement",
        "Increases skill damage by 10% [Type-B], and HP regen by 75",
        "Healed ally will also get empowered",
        "Lasts for 8 seconds"
      ]
    }
  },
  {
    "id": "kybl",
    "name": "Bloody Hatred",
    "koreanname": "핏빛 증오",
    "description": "Hatred is what drives and excites me !",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Crimson Hatred",
      "Armageddon"
    ],
    "recipe": [
      {
        "Hatred": 1
      },
      {
        "Crimson Pumpkin Rod": 1
      },
      {
        "Blood Orb": 1
      },
      {
        "Dark Wings": 1
      },
      {
        "Dark Crystal": 1
      }
    ],
    "stats": {
      "damage": 6450,
      "int": 705,
      "skilldamagepercent": 0.075,
      "passive": [
        "Temporarily increase INT by 45, flame affinity by 2% on casting skill (Stacks up to 5 times)"
      ],
      "active": [
        "On use, activates Eye of Hatred",
        "Deals (flame affinity X (INT X 2)) magic damage each projectile (16 projectiles)",
        "Stuns for 0.5 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0E3",
    "name": "Hell Riser",
    "koreanname": "헬 라이서",
    "description": "Is it hope that flickers in front of those eyes? Or is it despair?",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Armageddon"
    ],
    "recipe": [
      {
        "Staff of Souls": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "God's Page": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "int": 700,
      "skilldamagepercent": 0.08,
      "passive": [
        "On skill cast, activates Origin of Death",
        "Increases INT by 120 and attack damage by 3000 for 4 seconds",
        "Cooldown: 12 seconds"
      ],
      "active": [
        "On use, activates Song of Despair",
        "Deals ((ATK DMG X 2.25) + (INT X 12.5)) magic damage in an AoE",
        "Increases enemy magic damage taken by 10% [Type-A] for 8 seconds",
        "Stuns for 1 second",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0GZ",
    "name": "Ethenos, the Staff of Space",
    "koreanname": "차원의 지팡이 에테노스",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Staff)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ethenos, the True Staff of Space"
    ],
    "recipe": [
      {
        "Belius, the Archdevil's Staff": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Orb of Oblivion": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "str": 360,
      "int": 720,
      "skilldamagepercent": 0.12,
      "active": [
        "On use, activates Dimensional Explosion",
        "Deals (INT X 45) magic damage in an AoE",
        "Stuns for 1.5 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "sbok",
    "name": "Pheles, the Bow of Skies",
    "koreanname": "창공의 활 피레스",
    "description": "Bow blessed by the wind. It guides your arrows to target's weak point.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Pheles, the Bow of God"
    ],
    "recipe": [
      {
        "Pheles, the Bow of Wind": 1
      },
      {
        "Spirit Orb": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "damage": 6900,
      "agi": 570,
      "attackspeedpercent": 0.2,
      "passive": [
        "On attack, activates Poem of Wind",
        "Sends an additional arrow to target",
        "Deals (wind affinity X (10% ATK DMG)) pure damage"
      ]
    }
  },
  {
    "id": "kgal",
    "name": "Hellflame",
    "koreanname": "헬플레임",
    "description": "I shall burn even your soul away !!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Eternal Flame"
    ],
    "recipe": [
      {
        "Flame Explosion": 1
      },
      {
        "A Small Piece of Wrath": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Fragment of Oblivion": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "str": 260,
      "agi": 615,
      "affinityflamepercent": 0.12,
      "passive": [
        "15% chance to activate Hellflame on attack",
        "Deals (flame affinity X (AGI X 2.25)) magic damage per second for 10 seconds",
        "Increase magic damage taken of enemy by 2% for 5 seconds"
      ]
    }
  },
  {
    "id": "rde2",
    "name": "Heartseeker",
    "koreanname": "심장추적자",
    "description": "It wiggles toward the enemy's heart",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Pheles, the Bow of God"
    ],
    "recipe": [
      {
        "Stalker": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Dragon Heart": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "damage": 8700,
      "agi": 540,
      "hp": 1200,
      "skilldamagepercent": 0.05,
      "passive": [
        "Empowers next attack with Corrupt Arrow every 6 seconds",
        "Deals (AGI X 18) magic damage to target and (AGI X 12) magic damage to enemies around the target",
        "Heals (15% max HP)"
      ],
      "spec": [
        "Specialty - Heartseeker",
        "Bow Master - Arrow Rain becomes empowered."
      ]
    }
  },
  {
    "id": "tkno",
    "name": "Everfrostbane",
    "koreanname": "에버프로스트 베인",
    "description": "One with a pure soul, the cold spirits of everfrost shall assist you",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Soulbane"
    ],
    "recipe": [
      {
        "Frostbane": 1
      },
      {
        "Crossbow of Requiem": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Orb of Oblivion": 1
      }
    ],
    "stats": {
      "damage": 8400,
      "str": 345,
      "agi": 605,
      "skilldamagepercent": 0.09,
      "affinityiwpercent": 0.09,
      "passive": [
        "On attack, chance to activate Glacial Storm",
        "Initially deals (water affinity X (AGI X 2 ~ 3)) magic damage",
        "8% chance to deal (water affinity X (AGI X 6 ~ 7.5)) bonus magic damage",
        "Cooldown: 9 seconds"
      ],
      "spec": [
        "Specialty",
        "Bow Master - Casting Freezing Shot consecutively deals (water affinity X (60% ATK DMG + (AGI X 18))) bonus magic damage."
      ]
    }
  },
  {
    "id": "sor9",
    "name": "Soulstalker",
    "koreanname": "소울스토커",
    "description": "My arrow shall hunt you down to the end of the Hell !",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Soulbane"
    ],
    "recipe": [
      {
        "Stalker": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Orb of Oblivion": 1,
        "Skeleton Bone": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Frozen Cobweb": 1
      }
    ],
    "stats": {
      "damage": 8700,
      "agi": 615,
      "skilldamagepercent": 0.12,
      "passive": [
        "10% chance to activate Soul Reaping on attack",
        "Deals (MAIN STAT X 7.5) magic damage"
      ],
      "spec": [
        "Specialty - Cursed Arrow",
        "Sniper - Increases Snipe's damage by 25%, and silences sniped target for 1.5 seconds."
      ]
    }
  },
  {
    "id": "I0H0",
    "name": "Griveddon, the Bow of Certain Destruction",
    "koreanname": "필멸의 활 그리베돈",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bow)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Eternal Flame"
    ],
    "recipe": [
      {
        "Yggrect, the Archdevil's Bow": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Orb of Oblivion": 1,
        "Skeleton Bone": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "damage": 9000,
      "str": 420,
      "agi": 630,
      "skilldamagepercent": 0.08,
      "passive": [
        "On attack, 10% chance to activate Chaos Spike",
        "Deals ((STR + AGI) X 6) magic damage"
      ]
    }
  },
  {
    "id": "plcl",
    "name": "Devil Chaser",
    "koreanname": "데블 체이서",
    "description": "Muzzle of judgment that no evil can escape from",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Fiend Chaser"
    ],
    "recipe": [
      {
        "Devil Blaster": 1
      },
      {
        "Chaser": 1
      },
      {
        "Skeleton Bone": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "damage": 7000,
      "agi": 570,
      "int": 275,
      "attackspeedpercent": 0.25,
      "skilldamagepercent": 0.08,
      "active": [
        "On use, activates Devil Chaser",
        "Deals ((ATK DMG X 6) + (MAIN STAT X 40)) magic damage",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialty - Evil Chaser",
        "Shooter - Break Shot now pierces non-boss units and deals 25% increased damage. Deals up to 60% bonus damage based on target's missing HP (max damage to non-boss units)"
      ]
    }
  },
  {
    "id": "I0MY",
    "name": "Fiend Chaser",
    "koreanname": "핀드 체이서",
    "description": "I'm ready to hunt Death Fiend now!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Chrono Chaser"
    ],
    "recipe": [
      {
        "Devil Chaser": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "God's Page": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 8100,
      "agi": 645,
      "int": 345,
      "attackspeedpercent": 0.3,
      "skilldamagepercent": 0.1,
      "active": [
        "On use, activates Fiend Chaser",
        "Breaks shields",
        "Deals ((ATK DMG X 7.5) + (MAIN STAT X 50)) magic damage",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialty - Evil Chaser",
        "Shooter - Break Shot now pierces non-boss units and deals 35% increased damage. Deals up to 60% bonus damage based on target's missing HP (max damage to non-boss units)"
      ]
    }
  },
  {
    "id": "I0FM",
    "name": "Crimson Star",
    "koreanname": "크림슨 스타",
    "description": "That blood shall become the soil for the future.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Cosmic Star"
    ],
    "recipe": [
      {
        "Crimson Cross": 1
      },
      {
        "Trueblood Ring": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Pure Steel": 1
      }
    ],
    "stats": {
      "damage": 6000,
      "agi": 255,
      "int": 560,
      "attackspeedpercent": 0.15,
      "passive": [
        "Empowers allies upon healing them",
        "Increases skill damage by 5% [Type-B] and healing received by 5% for 4 seconds"
      ],
      "active": [
        "On use, activates Bloody Baptism",
        "Sends 3 waves of blood",
        "Each wave deals (INT X 3) magic damage",
        "Each wave heals (INT X 1.5) HP per second",
        "Cooldown: 12 seconds"
      ],
      "spec": [
        "Specialty - Crimson Star",
        "Shooter - Twin Star: Heals allies hit for (INT X 0.5 + Target's Max HP X 10%)",
        "Shooter - Nanomachine Injection: Healing speed increased by 50% and duration increased by 50%"
      ]
    }
  },
  {
    "id": "tsct",
    "name": "Hydro Buster",
    "koreanname": "하이드로 버스터",
    "description": "CANNON BLASTAAaaaaaa",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Rainmaker"
    ],
    "recipe": [
      {
        "Water Cannon": 1
      },
      {
        "Dragon Blaster": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      },
      {
        "Proof of Purification": 1
      }
    ],
    "stats": {
      "damage": 6150,
      "int": 615,
      "healingpercent": 0.12,
      "passive": [
        "On healing, activates Healing Water",
        "Increases HP regen by (water affinity X (INT X 0.2)) magic damage for 3 seconds"
      ],
      "active": [
        "On use, activates Hydro Buster",
        "Pushes enemies away with a water beam",
        "Deals (water affinity X (INT X 3.75)) magic damage per 0.125 seconds",
        "Cooldown: 20 seconds"
      ],
      "spec": [
        "Specialty - Purging Water",
        "Shooter - Twin Star: Changed to Water Bullet",
        "Shooter - Nanomachine Injection: Healing speed decreased by 50% but heal amount increased by 50% and heals all allies within 400 range"
      ]
    }
  },
  {
    "id": "silk",
    "name": "Dante's Inferno",
    "koreanname": "단테스 인페르노",
    "description": "Abandon all hope.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Punisher"
    ],
    "recipe": [
      {
        "Bullet of Ruin": 1
      },
      {
        "Inferno": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Ghostly Thread": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "agi": 610,
      "critmultiplier": 0.25,
      "passive": [
        "Charges a Bullet of Ruin every 6 seconds",
        "Deals ((MAIN STAT X 7.5) + (ATK DMG X 0.85)) magic damage per stack (up to 3 stacks)",
        "Stuns for 0.25 seconds"
      ],
      "spec": [
        "Specialties - Abandon All Hope",
        "Shooter - Casting Break Shot loads one Bullet of Destruction",
        "Gunner - Casting Tumble loads one Bullet of Destruction"
      ]
    }
  },
  {
    "id": "I0N0",
    "name": "Punisher",
    "koreanname": "퍼니셔",
    "description": "Your sin shall be purged with your death.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Last Word"
    ],
    "recipe": [
      {
        "Dante's Inferno": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 9000,
      "agi": 690,
      "critmultiplier": 0.3,
      "hp": 1200,
      "passive": [
        "Reloads a Bullet of Punishment every 6 seconds",
        "Deals ((MAIN STAT X 7.5) + ATK DMG) magic damage per stack (up to 3 stacks)",
        "Stuns for 0.25 seconds"
      ],
      "spec": [
        "Specialties - Abandon All Hope",
        "Shooter - Casting Break Shot loads one Bullet of Punishment",
        "Gunner - Casting Tumble loads one Bullet of Punishment"
      ]
    }
  },
  {
    "id": "I0H1",
    "name": "Chronos, the Cannon of Time",
    "koreanname": "시공의 대포 크로노스",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Gun)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Last Word",
      "Chrono Chaser"
    ],
    "recipe": [
      {
        "Alchatratz, the Archdevil's Cannon": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Orb of Oblivion": 1,
        "Skeleton Bone": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "damage": 9750,
      "str": 420,
      "agi": 600,
      "skilldamagepercent": 0.06,
      "passive": [
        "On attack, 10% chance to activate Chaos Bullet",
        "Deals ((STR + AGI) X 6) magic damage"
      ]
    }
  },
  {
    "id": "hslv",
    "name": "Bag of Destruction",
    "koreanname": "파멸의 배낭",
    "description": "He.. lp.. so... hea.. vy..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bag)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Bag of Demise"
    ],
    "recipe": [
      {
        "Bag of Corruption": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Skeleton Bone": 1
      },
      {
        "Dark Crystal": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "str": 630,
      "skilldamagepercent": 0.11,
      "dtpercent": -0.22,
      "spec": [
        "Merchant Specialty - Very Heavy Bag",
        "Merchant - Bag Slam: Damage is increased by 400%, and it increases target's damage taken by 5% for 8 seconds",
        "Merchant - Throwing Healing Potion: Duration increased by 5s, increases target's skill damage by 8%",
        "Merchant - Throw Money: Each coin stuns for 0.5 seconds"
      ]
    }
  },
  {
    "id": "tmsc",
    "name": "Bag of Mother Nature",
    "koreanname": "대자연의 배낭",
    "description": "Bag imbued with the essence of mother nature",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bag)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Bag of Universe"
    ],
    "recipe": [
      {
        "Bag of Life": 1
      },
      {
        "Embrace of Nature": 1
      },
      {
        "Spirit of Forest": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Heart of Fire": 1
      }
    ],
    "stats": {
      "damage": 5700,
      "allstat": 585,
      "hpregen": 360,
      "mdpercent": 0.12,
      "spec": [
        "Merchant Specialty - Very Light Bag",
        "Merchant - This Bag isn't a Decoration!: You can drink up to 2 potions at once.",
        "Merchant - Throwing Healing Potion: Refill period is reduced to 2.5 seconds, number of placeable potions increased by 3, and reduces target's damage taken by 12%.",
        "Merchant - Life Shield Scroll: Duration increased by 5 seconds and increases target's magic defense by 15%."
      ]
    }
  },
  {
    "id": "I0NT",
    "name": "Bag of Explosion",
    "koreanname": "폭발의 배낭",
    "description": "DANGER DANGER DANGER",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Weapon (Bag)",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Bag of Despair"
    ],
    "recipe": [
      {
        "Bag of Corruption": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Fragment of Oblivion": 1
      },
      {
        "Purified Water of Nature": 1
      }
    ],
    "stats": {
      "damage": 8400,
      "str": 675,
      "skilldamagepercent": 0.16,
      "dtpercent": 0.08,
      "spec": [
        "Merchant Specialty - Dangerous Bag",
        "Merchant - Throwing Healing Potion: Changed to Throw Bomb",
        "Merchant - Holy Water of Resurrection: Changed to Dangerous Explosive"
      ]
    }
  },
  {
    "id": "azhr",
    "name": "Frostshard Armor",
    "koreanname": "프로스트샤드 아머",
    "description": "Armor covered with frozen spikes that provides absolute defense",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Voidshard Armor"
    ],
    "recipe": [
      {
        "Flameshard Armor": 1
      },
      {
        "Everfrost Gauntlet": 1
      },
      {
        "Helm of Everfrost": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "armor": 250,
      "str": 290,
      "agi": 140,
      "dtpercent": -0.12,
      "passive": [
        "Activates Frostshard when HP drops below 40%",
        "Deals (water affinity X (STR X 6)) magic damage in an AoE",
        "Increases STR by 10%, damage reduction by 7.5% for 12 seconds",
        "Heals (17.5% max HP) HP",
        "Reduces enemy movement and attack speed by 75% for 2 seconds",
        "Cooldown: 8 seconds"
      ]
    }
  },
  {
    "id": "scul",
    "name": "Hellspike Armor",
    "koreanname": "헬스파이크 아머",
    "description": "Spiked armor of Hell that harms even the wearer",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Felspike Armor"
    ],
    "recipe": [
      {
        "Reactive Armor": 1
      },
      {
        "Cape of Corrupt Flame": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Skeleton Bone": 1
      }
    ],
    "stats": {
      "armor": 220,
      "str": 310,
      "skilldamagepercent": 0.08,
      "passive": [
        "On use or being hit, activates Release Spike",
        "Reflects 100% max HP as pure damage when hit in an AoE",
        "Taking damage will charge the armor (up to 125% max HP, up to 50% stored in one hit)",
        "Upon full charge, deals (450% max HP) magic damage in an AoE",
        "Stuns for 1 second",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On absorbing enough damage, empowers next Release Spike",
        "Consumes 20% of max HP",
        "Deals (100% max HP) pure damage to enemies",
        "Cooldown: 3 seconds"
      ]
    }
  },
  {
    "id": "I0E2",
    "name": "Creation of the Sky and Earth",
    "koreanname": "천지창조",
    "description": "Armor crafted by an image that embodies the beautiful world",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Harmony of Sky and Earth"
    ],
    "recipe": [
      {
        "Earthen Plates": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Mana Orb": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Purified Water of Nature": 1
      }
    ],
    "stats": {
      "armor": 245,
      "str": 295,
      "agi": 190,
      "mdpercent": 0.1,
      "active": [
        "On use, activates La Pucelle",
        "Increases magic defense by 100% for 4 seconds",
        "Heals 25% max HP per second",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0D9",
    "name": "Requiem, the Armor of Lamentation",
    "koreanname": "탄식의 갑주 레퀴엠",
    "description": "Armor that laments for the souls of the dead",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Hades, the Armor of Despair"
    ],
    "recipe": [
      {
        "Purelight Armor": 1
      },
      {
        "Bone Necklace": 1
      },
      {
        "Orb of Oblivion": 1,
        "Skeleton Bone": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "armor": 215,
      "str": 265,
      "agi": 160,
      "attackspeedpercent": -0.25,
      "passive": [
        "Increases self and nearby allies' stats by 5%",
        "Every 8 seconds, activates one of the following:",
        "Anger: +10% skill damage",
        "Oblivion: +16% damage reduction",
        "Obsession: (MAIN STAT X 20%) HP regen",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0J6",
    "name": "Plates of Lightning",
    "koreanname": "번개의 갑주",
    "description": "Intense lightning flows through the surface.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Plates of Sanguine Fury"
    ],
    "recipe": [
      {
        "Earthen Plates": 1
      },
      {
        "Guardian Vest": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Mark of Storm": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      },
      {
        "Dark Crystal": 1
      }
    ],
    "stats": {
      "armor": 225,
      "str": 255,
      "agi": 255,
      "skilldamagepercent": 0.08,
      "mdpercent": 0.12,
      "movespeed": 50,
      "passive": [
        "On skill cast, releases lightning for 3 seconds",
        "Deals ((STR + AGI) X 3) magic damage",
        "Increases HP regen by 3% max HP",
        "Cooldown: 6 seconds"
      ]
    }
  },
  {
    "id": "jpnt",
    "name": "Tunic of the Wraith",
    "koreanname": "망령의 튜닉",
    "description": "As you approach death, the power of the wraiths can be borrowed.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Grandine, the Plates of Wraith"
    ],
    "recipe": [
      {
        "Tunic of Subtlety": 1
      },
      {
        "Cape of the Dead": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Dragon Scale": 1
      },
      {
        "Ghostly Thread": 1
      }
    ],
    "stats": {
      "armor": 190,
      "str": 55,
      "agi": 225,
      "skilldamagepercent": 0.07,
      "critchancepercent": 0.07,
      "passive": [
        "When HP drops low, reduces damage taken by 90% and heals 25% max HP for 3 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0JV",
    "name": "Vest of Storm",
    "koreanname": "폭풍의 도복",
    "description": "Vest that bestows you with the speed of a storm.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Vest of Divine Winds"
    ],
    "recipe": [
      {
        "Vest of Cyclone": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Antimatter": 1,
        "Frozen Debris": 1
      },
      {
        "Essence of Light": 1
      }
    ],
    "stats": {
      "armor": 185,
      "agi": 360,
      "skilldamagepercent": 0.075,
      "mdpercent": 0.075,
      "passive": [
        "On skill cast, activates Storm Fury for 1.5 seconds",
        "Next 3 attacks hit once more and deal (50% ATK DMG) physical damage",
        "Increases movement speed by 300 (past limit)"
      ]
    }
  },
  {
    "id": "I0DQ",
    "name": "Benedict, the Crimson Armor of Blood",
    "koreanname": "선혈의 갑주 베네딕트",
    "description": "It is as if the blood of God is dripping out of this armor.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Nevedium, the Armor of Demonblood"
    ],
    "recipe": [
      {
        "Cruoris, the Armor of Blood": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Orb of Oblivion": 1,
        "Skeleton Bone": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "armor": 190,
      "agi": 295,
      "skilldamagepercent": 0.09,
      "passive": [
        "Increases max HP by 1% while in combat (up to (AGI X 2) max HP)",
        "Increases HP regen by 1.5%"
      ],
      "active": [
        "On use, activates Force Break",
        "Deals (stored HP X 20) pure damage in an AoE",
        "Stuns for 1.5 seconds",
        "Increases AGI by 15% and skill damage by 5% for 12 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0EH",
    "name": "Grandine, the Plates of Wraith",
    "koreanname": "망령의 갑주 그란디네",
    "description": "The cost shall be your soul ..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Athanasia, the Armor of the Reaper"
    ],
    "recipe": [
      {
        "Tunic of the Wraith": 1
      },
      {
        "Guardian Vest": 1
      },
      {
        "God's Page": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "armor": 205,
      "str": 145,
      "agi": 325,
      "skilldamagepercent": 0.1,
      "critchancepercent": 0.1,
      "passive": [
        "When HP drops below 20%, activates Grandine",
        "Increases damage reduction by 90% for 3 seconds",
        "Instantly heals (35% max HP)",
        "Heals 6% max HP per second for 3 seconds",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty - Wraith Possession",
        "Martial Artist - Nameless Arts reduces damage taken by 20% while active and grants immunity to instant death spells."
      ]
    }
  },
  {
    "id": "dkfw",
    "name": "Winter Robe",
    "koreanname": "윈터 로브",
    "description": "Just wearing it is enough to bring down a winter around you.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Frost Herald's Garment"
    ],
    "recipe": [
      {
        "Frozen Robe": 1
      },
      {
        "Frozen Heart": 1
      },
      {
        "Precious Wind-Protection Clothing": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "armor": 215,
      "int": 375,
      "hp": 900,
      "skilldamagepercent": 0.08,
      "mdpercent": 0.08,
      "active": [
        "On use, summons a Everfrost Spirit",
        "Applies a shield of (INT X 8) for 8 seconds",
        "Rains frostbolts around user",
        "Each frostbolt deals (water affinity X (INT X 1.5)) magic damage",
        "Stuns non-boss enemies for 1 second",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialty",
        "Water Mage - Improved Frozen Emotion: Reduces target's damage taken by 12%."
      ]
    }
  },
  {
    "id": "I0DN",
    "name": "Diana, the Robe of Holy Maiden",
    "koreanname": "성녀의 로브 다이아나",
    "description": "Dear Father, may your salvation be bestowed upon these innocent souls",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Jupiter, the Robe of Heavens"
    ],
    "recipe": [
      {
        "Fairy Garment": 1
      },
      {
        "Spirit Orb": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Antimatter": 1
      }
    ],
    "stats": {
      "armor": 205,
      "int": 330,
      "hp": 1800,
      "passive": [
        "Increases nearby allies skill damage by 6% and magic defense by 8%"
      ],
      "active": [
        "On use, activates Prayer of Holy Maiden",
        "Sends out 7 waves",
        "User becomes immobile",
        "Heals (INT X 3.75) HP per wave to nearby allies",
        "Deals (INT X 1.5) magic damage per wave",
        "Last wave heals (INT X 7.5) HP",
        "Applies a shield of (5000 + (INT X 5)) for 4.2 seconds",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialties - Maiden's Blessing",
        "Wind Mage - Feather of Aeolus: Heals for max HP X 40%."
      ]
    }
  },
  {
    "id": "I0DO",
    "name": "Medea, the Robe of the Witch",
    "koreanname": "마녀의 로브 메데이아",
    "description": "All shall perish! Your body, and even my soul!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Thanatos, the Robe of Hell"
    ],
    "recipe": [
      {
        "Robe of the Reaper": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Essence of Anger": 1
      }
    ],
    "stats": {
      "armor": 185,
      "int": 340,
      "mpregen": 45,
      "skilldamagepercent": 0.08,
      "passive": [
        "On skill cast, spawns an orb around user (max of 4 orbs)",
        "On orb pickup, increases INT by 30 and skill damage by 1%",
        "50% chance to spawn 2 orbs instead"
      ],
      "active": [
        "On use, activates Witch's Play",
        "Spawns an orb every second",
        "Increases skill damage by 6% and INT by 150 for 7 seconds",
        "Each skill cast consumes all orbs (can also trigger passive)",
        "Deals (INT X 3.75) magic damage per orb to the nearest boss",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "sor8",
    "name": "Robe of the Necromancer",
    "koreanname": "로브 오브 네크로맨서",
    "description": "I've mastered the usage of mana ..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Robe of Archlich"
    ],
    "recipe": [
      {
        "Robe of the Sage": 1
      },
      {
        "Cape of the Dead": 1
      },
      {
        "Scarab Bone": 1
      },
      {
        "Hydra Scale": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "armor": 195,
      "str": 115,
      "int": 315,
      "mpregen": 25,
      "skilldamagepercent": 0.08,
      "active": [
        "On use, summons Magic Barrier",
        "Increases magic defense by 40% of all nearby allies for 6 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0L9",
    "name": "Druid's Mantle",
    "koreanname": "드루이드의 가운",
    "description": "Do not go against the nature.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "recipe": [
      {
        "Fairy Garment": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Spirit of Forest": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Purified Water of Nature": 1
      }
    ],
    "stats": {
      "armor": 200,
      "int": 330,
      "mdpercent": 0.12,
      "passive": [
        "Summons a Forest Spirit every 5 seconds (up to 4 spirits)",
        "Each spirit increases HP regen by 0.75%"
      ],
      "active": [
        "On use, launches Forest Spirit",
        "Deals (INT X 6) magic damage",
        "Heals (INT X 2.5) HP",
        "Cannot target self"
      ]
    }
  },
  {
    "id": "vamp",
    "name": "Bloodsoul Plates",
    "koreanname": "혈혼의 갑주",
    "description": "Armor bound together with hideous amounts of blood and souls",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Armor",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Bloodseeker Plates"
    ],
    "recipe": [
      {
        "True Bloodstone Plates": 1
      },
      {
        "Flameshard Armor": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "armor": 220,
      "str": 210,
      "agi": 90,
      "int": 210,
      "skilldamagepercent": 0.04,
      "periodicdamagepercent": 0.12,
      "dtpercent": -0.06,
      "active": [
        "On use, activates Bloodsoul",
        "Applies a shield of (1000 + 20% max HP) damage over 5 seconds",
        "Deals (MAIN STAT X 20) magic damage in an AoE",
        "Heals HP and MP equal to absorbed damage",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "esaz",
    "name": "Protector's Will",
    "koreanname": "윌 오브 프로텍터",
    "description": "Helm imbued with the will of a protector",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Spirit of Protector"
    ],
    "recipe": [
      {
        "Scale Protector": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Mark of Storm": 1
      }
    ],
    "stats": {
      "armor": 135,
      "str": 200,
      "dtpercent": -0.12,
      "passive": [
        "25% chance to restore HP on being hit",
        "Restores 5% HP and 10% MP",
        "Cooldown: 3 seconds"
      ],
      "active": [
        "On use, increases magic defense by nearby allies by 40% for 12 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0DZ",
    "name": "Halo of Judgment",
    "koreanname": "심판의 헤일로",
    "description": "Merciless judgment on the dreams and fantasies of the Demon Lord.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Radiance of the One"
    ],
    "recipe": [
      {
        "Archangel Halo": 1
      },
      {
        "Helm of Battle": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Dark Matter": 1
      }
    ],
    "stats": {
      "armor": 125,
      "str": 160,
      "agi": 130,
      "procdamagepercent": 0.075,
      "passive": [
        "On attack, activates Judgment per 0.75 seconds (up to 3 stacks)",
        "Deals (MAIN STAT X 3.75) pure damage per stack"
      ],
      "active": [
        "On use, activates Magic Barrier",
        "Lasts 5 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "rde3",
    "name": "Eye of Wallachia",
    "koreanname": "왈라키아의 눈",
    "description": "I can see your death ..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Eye of the Reaper"
    ],
    "recipe": [
      {
        "Grim Visage": 1
      },
      {
        "Count's Memento": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Dark Crystal": 1
      }
    ],
    "stats": {
      "armor": 105,
      "agi": 185,
      "hp": 900,
      "skilldamagepercent": 0.075,
      "critchancepercent": 0.075,
      "passive": [
        "25% chance to activate Eye of Death on attack",
        "Increases crit multiplier by 0.20, attack damage by 15%, and AGI by 225 for 6 seconds",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "jdrn",
    "name": "Dragon Mask",
    "koreanname": "드래곤 마스크",
    "description": "Through the eyes of dragon, everything seems so measly ..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Mask of Demigod"
    ],
    "recipe": [
      {
        "Grim Visage": 1
      },
      {
        "Helm of Battle": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "armor": 110,
      "agi": 175,
      "hp": 1200,
      "skilldamagepercent": 0.075,
      "active": [
        "On use, activates Madness of Dragon for 15 seconds",
        "Initially increases main stat by 180, critical damage by 0.20, and HP regen by 600",
        "Every skill cast increases the above by 10% (up to 10 stacks)",
        "Cooldown: 50 seconds"
      ]
    }
  },
  {
    "id": "wtlg",
    "name": "Prophetia, the Greater Source of Mana",
    "koreanname": "대마력의 원천 프로피티아",
    "description": "Source that grants mana exceeding the levels mere mortals can achieve.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Prophetia, the Origin of Knowledge"
    ],
    "recipe": [
      {
        "Prophetia, the Source of Mana": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "armor": 105,
      "int": 250,
      "mp": 1200,
      "skilldamagepercent": 0.1,
      "active": [
        "Temporarily increases INT by 300 and skill damage by 5% on use for 8 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0E4",
    "name": "Hood of Apocrypha",
    "koreanname": "후드 오브 아포크리파",
    "description": "You can feel the resentment of the forsaken emanating from this hood.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Hood of Apocalypse"
    ],
    "recipe": [
      {
        "Hood of Grim Reaper": 1
      },
      {
        "Hood of the Fallen": 1
      },
      {
        "God's Page": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Spirit of Abyss": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "armor": 110,
      "str": 170,
      "agi": 170,
      "int": 220,
      "skilldamagepercent": 0.04,
      "active": [
        "On use, activates Apocryphos",
        "Turns user invisible for 3 seconds",
        "Heals self for (40% max HP)",
        "Heals allies for (INT X 15% max HP)",
        "Stuns for 0.5 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "axas",
    "name": "Crown of Rage",
    "koreanname": "진노의 화관",
    "description": "Crown infused with the wrath of the great Demon Lord",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Crown of Great Rage"
    ],
    "recipe": [
      {
        "Crown of Fervor": 1
      },
      {
        "Horns of Destruction": 1
      },
      {
        "Purified Water of Nature": 1,
        "Fragment of the Wind": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "armor": 105,
      "allstat": 190,
      "skilldamagepercent": 0.06,
      "affinityflamepercent": 0.05,
      "active": [
        "On use, activates Refined Power",
        "Consumes (40% max HP)",
        "Increases all stats by 1.25% consumed HP (doubled for main stat) and flame affinity by 5% for 15 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "iwbr",
    "name": "Crown of Composure",
    "koreanname": "냉정의 화관",
    "description": "Mystical crown that converts mana into a pure barrier",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Crown of Absolute Zero"
    ],
    "recipe": [
      {
        "Crown of Fervor": 1
      },
      {
        "Helm of Everfrost": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "armor": 115,
      "allstat": 215,
      "skilldamagepercent": 0.075,
      "affinityiwpercent": 0.075,
      "active": [
        "On use, activates Composure",
        "Increases skill damage by 7.5% and all stats by 115 for 12 seconds",
        "20% chance to freeze nearby enemies for 1 seconds",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "mgtk",
    "name": "Crown of Serenity",
    "koreanname": "청명의 화관",
    "description": "The more you empty your mind, the fuller it becomes.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Headwear",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Crown of Cleansing"
    ],
    "recipe": [
      {
        "Storm Headdress": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "armor": 110,
      "allstat": 240,
      "critchancepercent": 0.1,
      "affinitywlpercent": 0.075,
      "passive": [
        "15% chance to apply Serenity upon healing ally",
        "Increases skill damage by 5%",
        "Heals ((INT X 0.125) + (2% max HP)) HP",
        "heals (1% max MP) per 0.5 seconds for 5 seconds"
      ],
      "spec": [
        "Specialty - Protector of Wind",
        "Wind Mage - Judgment: Damage increased by 7.5%."
      ]
    }
  },
  {
    "id": "sclp",
    "name": "Eternal Rose",
    "koreanname": "이터널 로즈",
    "description": "The everlasting ice will protect you from the evil",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Nebula Rose"
    ],
    "recipe": [
      {
        "Winter Rose": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Oath of Courage": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Frorist": 1
      }
    ],
    "stats": {
      "int": 325,
      "hp": 1200,
      "affinityiwpercent": 0.06,
      "passive": [
        "Increases nearby allies' magic defense by 8%"
      ],
      "active": [
        "Provides Blessing to nearby allies",
        "Applies a shield of ((INT X 5) + (20% max HP)) for 8 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "rots",
    "name": "Ispion, the Runed Ring",
    "koreanname": "룬의 반지 이스피온",
    "description": "Ring engraved with ancient mana runes. It's mana can be released on will.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Harmonia, the Sparkle of Life",
      "Heirloom of Lazarus"
    ],
    "recipe": [
      {
        "True Guardian Ring": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Oath of Courage": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Spirit of Abyss": 1
      }
    ],
    "stats": {
      "str": 425,
      "agi": 175,
      "int": 175,
      "dtpercent": -0.09,
      "passive": [
        "Increases nearby allies' damage reduction by 6%, healing received by 12%"
      ],
      "active": [
        "On use, activates Ancient Rune",
        "Heals 10% max HP per 0.5 seconds for 5 seconds",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty",
        "Knight - Improved Seal of Mana: Radius is increased by 30%."
      ]
    }
  },
  {
    "id": "k3m2",
    "name": "Ring of Strike",
    "koreanname": "일격의 반지",
    "description": "The only thing you can trust in this world is your own power.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Insanity"
    ],
    "recipe": [
      {
        "Ring of Nightmare": 1
      },
      {
        "Ring of Resonance": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "str": 335,
      "agi": 310,
      "periodicdamagepercent": 0.25,
      "healreceivedpercent": -0.25,
      "passive": [
        "7.5% chance to activate Absolute Strike on attack",
        "Next 3 hits will deal bonus (ATK DMG X 1) pure damage",
        "Increases attack damage by 6000, main stat and HP regen by 300 for 7.5 seconds",
        "Absolute Strike cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I0EF",
    "name": "Seal of Deceiver",
    "koreanname": "위장자의 인장",
    "description": "That light will also be stained by the darkness.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Hood of Apocalypse",
      "Mark of Sin",
      "Seal of Corruption"
    ],
    "recipe": [
      {
        "Skull Seal": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "str": 370,
      "int": 350,
      "skilldamagepercent": 0.12,
      "passive": [
        "Converts 0.5% of dealt damage into max HP and MP (up to (base STR X 1.5) HP and (base INT X 1.5) MP)"
      ],
      "active": [
        "On use, activates Dark Light for 5 seconds",
        "Consumes all stored HP and MP",
        "Deals ((stored HP X 1.8) + (stored MP x 3)) magic damage per second",
        "On last second, deals ((stored HP X 9) + (stored MP X 15)) magic damage",
        "Stuns for 1 second",
        "Reduces movement speed and attack damage by 50%, and silences for 1.5 seconds",
        "Cooldown: 120 seconds"
      ],
      "spec": [
        "Specialty - Power of Inversion",
        "Dark Knight - Unholy Tempest's damage is increased by 15%, and it always deals its maximum damage regardless of target's HP."
      ]
    }
  },
  {
    "id": "I0E1",
    "name": "Cold Ring of Death",
    "koreanname": "시린 죽음의 반지",
    "description": "A ring found on the corpse of a man who met a cold lone death.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Athanasia, the Armor of the Reaper",
      "Ring of Frozen Soul"
    ],
    "recipe": [
      {
        "Brooch of Darkness": 1
      },
      {
        "Ring of the Reaper": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "God's Page": 1
      },
      {
        "Frorist": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "mainstat": 430,
      "hpregen": 60,
      "mpregen": 30,
      "attackspeedpercent": 0.2,
      "skilldamagepercent": 0.145,
      "active": [
        "On use, activate Darkness Ray",
        "Blocks all damage for 3 seconds and reflects it around user",
        "Deals (DMG TAKEN *before reductions* X 5) pure damage (up to (max HP X 5))",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialties - Cold Ring of Death",
        "Assassin - Shadow Slash: Damage increased by 50%."
      ]
    }
  },
  {
    "id": "dust",
    "name": "Bell of Light",
    "koreanname": "빛의 종",
    "description": "May your soul be blessed",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Hope"
    ],
    "recipe": [
      {
        "Ring of Holy Light": 1
      },
      {
        "Oath of Courage": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Fragment of Oblivion": 1
      },
      {
        "Proof of Purification": 1
      }
    ],
    "stats": {
      "allstat": 285,
      "affinitylightpercent": 0.075,
      "passive": [
        "Increases nearby allies' armor by 25 and HP by 1500",
        "On skill cast, gathers Holy Light (up to 5 times)"
      ],
      "active": [
        "On use, releases Holy Light",
        "Heals (0.30 X stacks X (STR + AGI + INT)) HP",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "anfg",
    "name": "Ring of Time",
    "koreanname": "시간의 반지",
    "description": "Ring that frees you from the passage of time",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Fate",
      "Ring of Divine Winds"
    ],
    "recipe": [
      {
        "Ring of Intrusion": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Ancient Hourglass": 1
      },
      {
        "Steel of God": 1,
        "God's Page": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Heart of Fire": 1
      }
    ],
    "stats": {
      "allstat": 290,
      "skilldamagepercent": 0.08,
      "passive": [
        "If HP drops below 1, activates Time Reversal",
        "Heals (40% max HP)",
        "Cooldown: 300 seconds"
      ],
      "active": [
        "On use, activates Time Distortion",
        "Refreshes the cooldown of the last used non-ultimate skill",
        "Gives immunity to stuns, silence, and knockbacks for 10 seconds",
        "Increases MP regen by 450 for 10 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0J9",
    "name": "Ring of Fervor",
    "koreanname": "열정의 반지",
    "description": "I love supporting my allies!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Hope"
    ],
    "recipe": [
      {
        "Ring of the Storm": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 285,
      "hpregen": 120,
      "passive": [
        "On direct hit, applies Fervor (single-target spells on allies)",
        "Increases skill damage by 6% and main stat by 90 for 12 seconds"
      ],
      "active": [
        "On use, activates Joy",
        "Heals (40% max HP) of allies with Fervor within range",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0JA",
    "name": "Ring of Composure",
    "koreanname": "냉정의 반지",
    "description": "....",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Despair"
    ],
    "recipe": [
      {
        "Ring of the Dead": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 315,
      "mpregen": 60,
      "passive": [
        "On landing a direct hit on enemies, applies Composure",
        "Increases enemy magic damage taken by 6% [Type-B] for 12 seconds"
      ],
      "active": [
        "On use, activates Statis",
        "Deals (water affinity X (0.75% max HP)) pure damage to enemies with Composure",
        "Freezes for 2 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0J8",
    "name": "Grimoire of Darkness",
    "koreanname": "흑의 마도서",
    "description": "Everything eventually corrupts under the hands of human",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Accessory",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Ring of Despair",
      "Mark of Sin"
    ],
    "recipe": [
      {
        "Ring of Deep Darkness": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "God's Page": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "allstat": 285,
      "mp": 3750,
      "skilldamagepercent": 0.06,
      "active": [
        "On use, activates Forbidden Magic",
        "Consumes 50% max MP",
        "Increases main stat by (consumed MP / 75) and attack speed by 40% for 10 seconds",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialties - Transmission of Darkness, Forbidden Grimoire",
        "Priest - Holy Aurora is replaced by Dark Aurora [Lv 2]"
      ]
    }
  },
  {
    "id": "I0JF",
    "name": "Wings of Blood Lord",
    "koreanname": "피의 군주의 날개",
    "description": "Wash your sins away with your blood",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Wings of Night Lord",
      "Cape of Insatiable Hunger"
    ],
    "recipe": [
      {
        "Hungry Bat Wings": 1
      },
      {
        "Embrace of Nature": 1
      },
      {
        "Trueblood Ring": 1
      },
      {
        "Ancient Fragment of Ruins": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "allstat": 225,
      "hp": 1500,
      "passive": [
        "Upon moving 400 distance, activates Bloody Bite on next attack",
        "Deals (50% ATK DMG) pure damage",
        "Heals 8% max HP",
        "Increases attack damage by 450, movement speed by 15, and HP regen by 75 for 4 seconds (up to 5 stacks)",
        "cooldown: 0.125 seconds"
      ]
    }
  },
  {
    "id": "k3m3",
    "name": "Pure Crystal Wings",
    "koreanname": "퓨어 크리스탈 윙",
    "description": "A set of wings endoused in powerful light",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Archangel Wings"
    ],
    "recipe": [
      {
        "Corrupt Crystal Wings": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Orb of Oblivion": 1
      },
      {
        "Spirit Orb": 1
      },
      {
        "A Page of the Bible": 1
      }
    ],
    "stats": {
      "allstat": 190,
      "mainstat": 45,
      "hpregen": 75,
      "mpregen": 40,
      "skilldamagepercent": 0.12,
      "passive": [
        "5% chance to reset non-ultimate skill cooldowns on skill cast",
        "Cooldown: 150 seconds"
      ]
    }
  },
  {
    "id": "I0D1",
    "name": "Frost Fairy Wings",
    "koreanname": "서리 요정의 날개",
    "description": "You shall be blessed with the dexterity and intellect of a fairy!",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Wings of Frost Lord"
    ],
    "recipe": [
      {
        "Fairy Wings": 1
      },
      {
        "Robe of Everfrost": 1
      },
      {
        "Frozen Heart": 1
      },
      {
        "Fragment of Oblivion": 1,
        "Orb of Oblivion": 1
      },
      {
        "Purified Water of Nature": 1
      }
    ],
    "stats": {
      "int": 285,
      "hp": 1200,
      "mp": 3750,
      "skilldamagepercent": 0.11,
      "affinityiwpercent": 0.07,
      "active": [
        "On use, creates a Magical Passage"
      ]
    }
  },
  {
    "id": "glsk",
    "name": "Cloak of the Fallen Shadows",
    "koreanname": "타락한 그림자의 망토",
    "description": "The corrupt shadow will envelop you, and overpower you with its mighty power.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Cape of Deep Abyss"
    ],
    "recipe": [
      {
        "Cape of Corrupt Flame": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Count's Memento": 1
      }
    ],
    "stats": {
      "allstat": 255,
      "skilldamagepercent": 0.06,
      "periodicdamagepercent": 0.12,
      "passive": [
        "On single-target hits, engulfs target with Corruption",
        "Deals 12.5% bonus damage over 3 seconds (effect stacks)",
        "Increases enemy magic damage taken by 4% [Type-B]"
      ]
    }
  },
  {
    "id": "oflg",
    "name": "Wings of Phoenix",
    "koreanname": "불사조의 날개",
    "description": "Wings emitting eternal flames",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Wings of Flame Lord"
    ],
    "recipe": [
      {
        "Wanderer's Cape": 1
      },
      {
        "Heart of Ifrit": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Mad Symbol": 1
      }
    ],
    "stats": {
      "damage": 2700,
      "str": 225,
      "agi": 225,
      "hpregen": 90,
      "dtpercent": -0.07,
      "active": [
        "On use, activates Flame Flight",
        "Deals ((ATK DMG X 0.75) + (MAIN STAT X 12.5)) magic damage in selected area",
        "Stuns for 0.5 seconds",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialty - Phoenix",
        "Martial Artist - If you die while Nameless Art is active, you will revive with 75% HP after 2 seconds."
      ]
    }
  },
  {
    "id": "I0FQ",
    "name": "Wings of Slayer",
    "koreanname": "학살자의 날개",
    "description": "Unconstrained emotions can only bring calamity..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Wings of Night Lord"
    ],
    "recipe": [
      {
        "Wings of Fury": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Corrupt Crystal Wings": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Fragment of Oblivion": 1
      }
    ],
    "stats": {
      "str": 250,
      "agi": 235,
      "skilldamagepercent": 0.06,
      "passive": [
        "On skill cast, empowers next attack with Decimation",
        "Deals ((MAIN STAT X 1.5) + AGI) pure damage",
        "Can crit based on user's critical chance",
        "Increases AGI by 27 for 6 seconds (up to 10 stacks)",
        "At max stacks, duration cannot be extended but increases skill damage by 10%"
      ]
    }
  },
  {
    "id": "gcel",
    "name": "Soul of the Dead",
    "koreanname": "망자의 영혼",
    "description": "Wings imbued with the spirits of the dead.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Protection of the Fairies",
      "Wings of Immortal"
    ],
    "recipe": [
      {
        "Hood of the Fallen": 1
      },
      {
        "Ring of the Dead": 1
      },
      {
        "Lifestone": 1
      },
      {
        "Skeleton Bone": 1,
        "Spirit of Abyss": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "allstat": 275,
      "hp": 1200,
      "passive": [
        "Revival Time -40%",
        "Activates Call of the Dead upon death",
        "Deals (main stat X 40) magic damage in an AoE",
        "Stuns for 1 second",
        "Revives hero with 40% HP and 100% MP",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "sor4",
    "name": "Grim Heart",
    "koreanname": "그림 하트",
    "description": "Only cruelty shall guide you to victory.",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Brave Heart",
      "Cape of Deep Abyss"
    ],
    "recipe": [
      {
        "Frozen Heart": 1
      },
      {
        "Essence of Darkness": 1,
        "Frozen Debris": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Scarab Bone": 1
      },
      {
        "Ghostly Thread": 1
      }
    ],
    "stats": {
      "allstat": 375,
      "mdpercent": 0.18,
      "passive": [
        "Reduces nearby enemy movement and attack speed by 20%"
      ],
      "active": [
        "On use, activates Grim Howl",
        "Heals 33% max HP",
        "Stuns nearby enemies for 1 second",
        "Reduces enemy attack damage by 25% for 8 seconds",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "bzbe",
    "name": "Soul Eater",
    "koreanname": "소울 이터",
    "description": "All souls are merely my prey..",
    "rank": "[Epic]",
    "grade": 3,
    "type": "Wings",
    "color": "DC143C",
    "level": 100,
    "required_by": [
      "Soul Devourer"
    ],
    "recipe": [
      {
        "Soul Drinker": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Essence of Corruption": 1
      },
      {
        "Soul Stone": 1
      },
      {
        "Corrupt Creations": 1
      }
    ],
    "stats": {
      "str": 210,
      "int": 405,
      "skilldamagepercent": 0.06,
      "mdpercent": 0.06,
      "passive": [
        "Periodically restores 2.5% HP and 3% MP per soul every 5 seconds (up to 3 souls)"
      ],
      "active": [
        "On use, activates Soul Absorb",
        "Heals (30% max HP)",
        "Cooldown: 40 seconds"
      ],
      "spec": [
        "Specialty - Soul Devour",
        "Warlock - Soul Whisper's restored HP amount is increased by 30%."
      ]
    }
  },
  {
    "id": "I0NQ",
    "name": "Heaven's Door",
    "koreanname": "헤븐즈 도어",
    "description": "Does eternal happiness lie beyond that door?",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Shared)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Aeon Sphere"
    ],
    "recipe": [
      {
        "Dragonic Orb": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "God's Page": 1
      }
    ],
    "stats": {
      "damage": 6300,
      "allstat": 615,
      "mdpercent": 0.12,
      "affinitylightpercent": 0.1,
      "passive": [
        "Healing allies infuses them with Heaven's Light",
        "Increases main stat by 60 + 3% [Type-A] for 6 seconds"
      ],
      "active": [
        "On use, activates Heaven's Door",
        "Sends an orb of light at 2 target heroes",
        "Grants 12% skill damage to latched heroes",
        "Every 4 seconds, the target will be healed for 2000 HP.",
        "Every 20 seconds, a random skill will be reset on the target.",
        "Cooldown: 3 seconds"
      ]
    }
  },
  {
    "id": "tpow",
    "name": "Ethereal Dagger",
    "koreanname": "에테르 비수",
    "description": "Dagger infused by the 5th element of heavens",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Shared)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Chaos Dagger"
    ],
    "recipe": [
      {
        "Spirit Dagger": 1
      },
      {
        "Staff of Domination": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 5950,
      "allstat": 525,
      "attackspeedpercent": 0.25,
      "skilldamagepercent": 0.105,
      "passive": [
        "Empowers next attack with Elemental Breath every 4 seconds",
        "Deals (MAIN STAT X 8) magic damage",
        "Increases enemy damage taken by 5% for 4 seconds"
      ]
    }
  },
  {
    "id": "I0AL",
    "name": "Chaos Dagger",
    "koreanname": "혼돈의 비수",
    "description": "Dagger infused with chaos that cannot be suppressed",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Shared)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Ethereal Dagger": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      }
    ],
    "stats": {
      "damage": 6300,
      "allstat": 615,
      "attackspeedpercent": 0.3,
      "skilldamagepercent": 0.12,
      "passive": [
        "Enables Chaos Breath every 4 seconds",
        "Deals (MAIN STAT X 10) magic damage",
        "Increases enemy damage taken by 5% for 4 seconds"
      ],
      "active": [
        "On use, summons Servant of Chaos",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0N3",
    "name": "Eternal Winter",
    "koreanname": "이터널 윈터",
    "description": "Embrace the eternal winter.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Winter's Heart": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "God's Page": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 7950,
      "str": 735,
      "agi": 465,
      "int": 465,
      "dtpercent": -0.1,
      "passive": [
        "On every 8th attack, activates Frost Explosion",
        "Deals (water affinity X (((STR X 4) + (AGI X 3)) X water affinity)) pure damage in an AoE (counts as single-target)"
      ],
      "active": [
        "On use, activates Permafrost",
        "Applies a shield of (30% max HP) for 5 seconds",
        "Deals (max MP X 3) pure damage in an AoE",
        "Breaks shields per tick",
        "Freezes enemies for 1 second",
        "Afterwards, deals (max MP X 1.5) pure damage and freezes enemies per second for 3 seconds",
        "Re-applies shield for allies within the AoE",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialty - Absolute Zero",
        "Knight - Shield Break effect is added to Excalibur."
      ]
    }
  },
  {
    "id": "pams",
    "name": "Splitting of the Sky and Earth",
    "koreanname": "천지개벽",
    "description": "O star of creation, vanquish evil and let the new age begin !",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Spear of Judgment"
    ],
    "recipe": [
      {
        "Aglaia, the Spear of Heavenly Flows": 1
      },
      {
        "Tiberius, the Spear of Lightning": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9750,
      "str": 705,
      "skilldamagepercent": 0.12,
      "passive": [
        "On skill cast, activates Song of Glory",
        "Increases STR by 75 and skill damage by 2.5% per stack for 5 seconds (up to 4 stacks)",
        "At max stacks, does not extend duration"
      ],
      "active": [
        "On use, activates Light of Creation",
        "Sets stacks to max",
        "Increases damage output by 7.5% for 10 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "hbth",
    "name": "Desolation",
    "koreanname": "황폐",
    "description": "Unfathomable power awaits you at the end of this lone desolate path.",
    "notes": [
      "In order to stop the active effect, press ESC"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Chaos"
    ],
    "recipe": [
      {
        "Oblivion": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "God's Page": 1
      },
      {
        "Spearhead of Death": 1
      }
    ],
    "stats": {
      "damage": 8325,
      "str": 660,
      "skilldamagepercent": 0.085,
      "passive": [
        "On attack, 25% chance to activate Blade of Destruction",
        "Deals (STR X 13.5) magic damage to enemies in a frontal cone",
        "Reduces enemy armor by 15% [Type-A] and magic damage taken by 2% for 6 seconds",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Desolation",
        "Drains (900 + (seconds elapsed X 225)) HP per second",
        "Increases STR by 55 and skill damage by 1.5% per stack (up to 10 stacks)",
        "Reduces Blade of Destruction's cooldown to 3 seconds",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "engs",
    "name": "Chaos",
    "koreanname": "혼돈",
    "description": "There is no need to restrain yourself, because everything returns to the void in the end.",
    "notes": [
      "In order to stop the active effect, press ESC"
    ],
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Desolation": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9150,
      "str": 705,
      "skilldamagepercent": 0.1,
      "passive": [
        "On attack, 25% chance to activate Blade of Destruction",
        "Deals (STR X 15) magic damage to enemies in a frontal cone",
        "Reduces enemy armor by 15% [Type-A] and magic damage taken by 2% for 6 seconds",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Chaos",
        "Drains (900 + (seconds elapsed X 225)) HP per second",
        "Increases STR by 60 and skill damage by 1.5% per stack (up to 10 stacks)",
        "Reduces Blade of Destruction's cooldown to 2 seconds",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0MZ",
    "name": "Cosmic Reaper",
    "koreanname": "코즈믹 리퍼",
    "description": "Dagger infused with cosmic power",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Divine Slayer"
    ],
    "recipe": [
      {
        "Crimson Reaper": 1
      },
      {
        "Levante, the Sword of Love and Hate": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Antimatter": 1
      }
    ],
    "stats": {
      "damage": 8250,
      "agi": 780,
      "hp": 2250,
      "critmultiplier": 0.4,
      "passive": [
        "On every 12th attack, activates Dimension Cut",
        "Deals (MAIN STAT X 7.5) magic damage in an AoE",
        "On skill cast, activates Transcendence",
        "Increases AGI by 300 and HP regen by (7.5% max HP) for 7.5 seconds",
        "While awakened, Dimension Cut activates every 4th attack",
        "Skill cast Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I0F3",
    "name": "Espishu, the True Sword of Eternity",
    "koreanname": "진 영겁의 검 에스피슈",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Espishu, the Sword of Chaos"
    ],
    "recipe": [
      {
        "Espishu, the Sword of Eternity": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "God's Page": 1
      },
      {
        "Fragment of Chaos": 1
      }
    ],
    "stats": {
      "damage": 9000,
      "str": 480,
      "agi": 480,
      "mainstat": 250,
      "skilldamagepercent": 0.105,
      "passive": [
        "On attack, 10% chance to activate Chaos Strike",
        "Deals ((STR + AGI) X 6) magic damage"
      ]
    }
  },
  {
    "id": "I0AM",
    "name": "Espishu, the Sword of Chaos",
    "koreanname": "혼돈의 검 에스피슈",
    "description": "Do you wish for endless power? If so, step into the primordial chaos ..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Shadow Waltz"
    ],
    "recipe": [
      {
        "Espishu, the True Sword of Eternity": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9900,
      "str": 510,
      "agi": 510,
      "mainstat": 300,
      "skilldamagepercent": 0.12,
      "passive": [
        "On attack, 10% chance to activate Chaos Strike",
        "Deals ((STR + AGI) X 7.5) magic damage"
      ]
    }
  },
  {
    "id": "I0P4",
    "name": "Astra, the Sword of Moonlight",
    "koreanname": "월광의 검 아스트라",
    "description": "Eternal moonlight shall illuminate your lonely path.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Meacronacer, the Sword of Thousand Illusions": 1
      },
      {
        "The Ender": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      }
    ],
    "stats": {
      "damage": 10950,
      "str": 700,
      "agi": 345,
      "skilldamagepercent": 0.15,
      "passive": [
        "On attack, 10% chance to activate Moonlight Slash",
        "Deals ((MAIN STAT X 3.5) + (35% ATK DMG)) magic damage in an AoE",
        "Stuns for 0.25 seconds",
        "Every 3rd Moonlight Slash deals 2 times the normal amount"
      ],
      "active": [
        "On use, activates Endless Moonlight",
        "Stuns for 2.5 seconds",
        "Increases magic damage taken of targets from next 3 hits by 25% for 6 seconds",
        "After 4th hit, target takes (MAIN STAT X 45) magic damage",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialty - Flash of Moonlight",
        "Crusader - Flash of Immortality grants additional 10% damage reduction and 2% HP regen per second when below 50% HP"
      ]
    }
  },
  {
    "id": "I0OC",
    "name": "Calamity",
    "koreanname": "캘러미티",
    "description": "Calamity dwells within this sword",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Ruinbringer": 1
      },
      {
        "The Ender": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "damage": 8250,
      "str": 645,
      "int": 405,
      "attackspeedpercent": -0.75,
      "passive": [
        "On skill cast, activates Ruin",
        "Increases attack damage by 450, STR and INT by 30, and skill damage by 1.5% per stack for 5 seconds (up to 10 stacks)"
      ],
      "active": [
        "On use, activates Sword of Calamity",
        "Sets stacks to max for 15 seconds",
        "Deals (MAIN STAT X 60) magic damage in selected area",
        "Deals up to 100% more damage based on target's missing HP",
        "Reduces movement speed and attack damage by 50%, and silences for 2 seconds",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty - Darkened Light",
        "Paladin - Holy Divide deals 50% bonus damage."
      ]
    }
  },
  {
    "id": "I0JR",
    "name": "Atricia, the Sword of Dreams",
    "koreanname": "몽환의 검 아트리샤",
    "description": "I will lead you to the eternal slumber.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Atricia, the True Sword of Dreams"
    ],
    "recipe": [
      {
        "Oceanus, the Sword of Light": 1
      },
      {
        "Laktrisha, the Illusional Sword of Poison": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Spearhead of Death": 1
      }
    ],
    "stats": {
      "damage": 9750,
      "str": 585,
      "agi": 645,
      "skilldamagepercent": 0.075,
      "critchancepercent": 0.075,
      "passive": [
        "On skill cast, empowers next attack (up to 6 stacks)",
        "Deals (MAIN STAT X 6) pure damage with a 25% chance to crit",
        "Heals (MAIN STAT X 0.15) HP"
      ],
      "active": [
        "On use, activates Illusional Dream",
        "Consumes all stacks",
        "Deals (7.5 X MAIN STAT X stacks) magic damage in an AoE",
        "Stuns for 2 seconds",
        "Reduces damage taken by 100% and CC immunity for (stacks X 0.5) seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I01R",
    "name": "Atricia, the True Sword of Dreams",
    "koreanname": "진 몽환의 검 아트리샤",
    "description": "I will lead you to the eternal slumber.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Atricia, the Sword of Nightmares"
    ],
    "recipe": [
      {
        "Atricia, the Sword of Dreams": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      }
    ],
    "stats": {
      "damage": 10400,
      "str": 610,
      "agi": 700,
      "skilldamagepercent": 0.09,
      "critchancepercent": 0.09,
      "passive": [
        "On skill cast, empowers next attack (up to 6 stacks)",
        "Deals (3000 + MAIN STAT X 6) pure damage with a 33% chance to crit",
        "Heals (MAIN STAT X 0.15) HP"
      ],
      "active": [
        "On use, activates Illusional Dream",
        "Consumes all stacks",
        "Deals (7.5 X MAIN STAT X stacks) magic damage in an AoE",
        "Stuns for 2 seconds",
        "Reduces damage taken by 100% and CC immunity for (stacks X 0.5) seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "tlum",
    "name": "Maw of Beriel",
    "koreanname": "베리엘의 손아귀",
    "description": "None can escape the grasp of the Demon Lord.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Power of Beriel"
    ],
    "recipe": [
      {
        "Claws of Beriel": 1
      },
      {
        "Maw of Greed": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Essence of Flame": 1
      }
    ],
    "stats": {
      "damage": 8200,
      "str": 260,
      "agi": 625,
      "critmultiplier": 0.35,
      "passive": [
        "(1 + HIT COUNT X 0.125)% chance to activate Doomsday on attack",
        "Deals (ATK DMG X 1.9 + (STR + AGI) X 10.5) magic damage",
        "Stuns for 0.1 seconds"
      ]
    }
  },
  {
    "id": "tgxp",
    "name": "Power of Beriel",
    "koreanname": "베리엘의 힘",
    "description": "You feel as if you've become one with the Demon Lord himself.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Melee)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Maw of Beriel": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "damage": 9300,
      "str": 315,
      "agi": 675,
      "critmultiplier": 0.35,
      "passive": [
        "(1 + HIT COUNT X 0.125)% chance to activate Doomsday on attack",
        "Deals (ATK DMG X 1.9 + (STR + AGI) X 11.2) magic damage",
        "Stuns for 0.1 seconds"
      ],
      "active": [
        "On use, activates Grasp of Demon Lord",
        "Pull enemies close",
        "Deals (ATK DMG X 7.5) magic damage",
        "Stuns for 2 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0IQ",
    "name": "Pheles, the Bow of God",
    "koreanname": "신궁 피레스",
    "description": "A bow blessed by the God of Wind. It allows you to launch a rapid barrage of arrows.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bow)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Agnitus, the Bow of Divine Fury"
    ],
    "recipe": [
      {
        "Pheles, the Bow of Skies": 1
      },
      {
        "Heartseeker": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 8550,
      "agi": 645,
      "attackspeedpercent": 0.4,
      "passive": [
        "On attack, activates Poem of Wind",
        "Fires an arrow that deals (wind affinity X (10% ATK DMG)) pure damage",
        "50% chance to fire 2 arrows"
      ],
      "spec": [
        "Specialty - Arrow of Judgment",
        "Sniper - Storm Shaft's max stack is increased by 2"
      ]
    }
  },
  {
    "id": "I0N4",
    "name": "Soulbane",
    "koreanname": "소울베인",
    "description": "Bow for chasing souls",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bow)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Soulstalker": 1
      },
      {
        "Everfrostbane": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9750,
      "agi": 705,
      "hp": 1500,
      "skilldamagepercent": 0.15,
      "passive": [
        "On attack, 10% chance to activate Soul Reaping",
        "Deals (MAIN STAT X 9) magic damage"
      ],
      "active": [
        "On use, activates Soul Bombardment",
        "Fires 4 arrows to selected area",
        "Each arrow deals (AGI X 30) magic damage in an AoE",
        "Stuns for 2.5 seconds",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialties",
        "Bow Master - Each Freezing Shot cast deals (water affinity X (60% ATK DMG + (AGI X 24))) bonus magic damage",
        "Sniper - Increases Snipe's damage by 30%, and silences sniped target for 1.5 seconds."
      ]
    }
  },
  {
    "id": "I0N5",
    "name": "Eternal Flame",
    "koreanname": "이터널 플레임",
    "description": "Burn forevermore, my brilliant soul.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bow)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Spirit Flame"
    ],
    "recipe": [
      {
        "Hellflame": 1
      },
      {
        "Griveddon, the Bow of Certain Destruction": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9000,
      "str": 315,
      "agi": 675,
      "affinityflamepercent": 0.14,
      "passive": [
        "On attack, 15% chance to activate Mark of Flame",
        "Initially deals (flame affinity X (AGI X 4.5)) magic damage",
        "Afterwards deals (flame affinity X (AGI X 2.25)) magic damage per second and increases magic damage taken by 2% for 10 seconds",
        "Accumulates Heat while in combat (up to 15 stacks)",
        "Each stack increases skill damage and flame affinity by 1%"
      ]
    }
  },
  {
    "id": "I0N7",
    "name": "Chrono Chaser",
    "koreanname": "크로노 체이서",
    "description": "The ultimate bullet that will even tear through times to chase its target",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Gun)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Soul Chaser"
    ],
    "recipe": [
      {
        "Fiend Chaser": 1
      },
      {
        "Chronos, the Cannon of Time": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9500,
      "agi": 705,
      "int": 405,
      "attackspeedpercent": 0.4,
      "skilldamagepercent": 0.12,
      "active": [
        "On use, activates Chrono Chaser",
        "Intially deals ((ATK DMG X 7.5) + (MAIN STAT X 50)) magic damage in an AoE",
        "Stuns for 1 second",
        "Afterwards deals (1.4 X initial damage) magic damage per second for 4 seconds",
        "Continually breaks shields",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty - Evil Chaser",
        "Shooter - Break Shot now pierces non-boss units and deals 45% increased damage. Deals up to 60% bonus damage based on target's missing HP (max damage to non-boss units)"
      ]
    }
  },
  {
    "id": "I0N6",
    "name": "Last Word",
    "koreanname": "라스트 워드",
    "description": "Only your throes of death awaits.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Gun)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Final Omen"
    ],
    "recipe": [
      {
        "Punisher": 1
      },
      {
        "Chronos, the Cannon of Time": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 10500,
      "agi": 765,
      "critmultiplier": 0.35,
      "hp": 1500,
      "passive": [
        "Charges a Bullet of Penance every 4 seconds",
        "Deals ((MAIN STAT X 7.5) + (ATK DMG X 1.2)) magic damage per stack (up to 3 stacks)",
        "Stuns for 0.25 seconds"
      ],
      "spec": [
        "Specialties - Abandon All Hope",
        "Shooter - Casting Break Shot loads one Bullet of Penance",
        "Gunner - Casting Tumble loads one Bullet of Penance"
      ]
    }
  },
  {
    "id": "I0K0",
    "name": "Cosmic Star",
    "koreanname": "코즈믹 스타",
    "description": "I forge my own future.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Gun)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Abyss Fall"
    ],
    "recipe": [
      {
        "Crimson Star": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 6750,
      "agi": 345,
      "int": 635,
      "attackspeedpercent": 0.25,
      "passive": [
        "Activates Empowerment upon healing allies",
        "Increases skill damage and healing recieved by 10% for 6 seconds"
      ],
      "active": [
        "On use, activates Holy Baptism",
        "Sends 3 waves to selected area",
        "Deals (INT X 6) magic damage per wave",
        "Heals (INT X 1.5) HP per wave",
        "Cooldown: 10 seconds"
      ],
      "spec": [
        "Specialty - Cosmic Star",
        "Shooter - Twin Star: Heals allies hit for (INT X 0.5 + Target's Max HP X 15%)",
        "Shooter - Nanomachine Injection: Healing speed increased by 60% and duration increased by 50%; while buff is active, target is immune to debuffs"
      ]
    }
  },
  {
    "id": "I0N8",
    "name": "Rainmaker",
    "koreanname": "레인메이커",
    "description": "Wash away the world's faults and sins with that rain.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Gun)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Hydro Buster": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 7650,
      "int": 705,
      "healingpercent": 0.15,
      "passive": [
        "On healing allies, activates Healing Water",
        "Increases HP regen by (water affinity X (INT X 0.25)) for 3 seconds"
      ],
      "active": [
        "On use, activates Rainstorm",
        "Heals (INT X 1) HP in an AoE every 2 seconds for 6 seconds",
        "Cooldown: 20 seconds"
      ],
      "spec": [
        "Specialty - Purging Water",
        "Shooter - Twin Star: Changed to Water Bullet",
        "Shooter - Nanomachine Injection: Healing speed decreased by 50% but heal amount increased by 75% and heals all allies within 400 range"
      ]
    }
  },
  {
    "id": "I0JY",
    "name": "Crimson Hatred",
    "koreanname": "선혈빛 증오",
    "description": "My hatred can only be quelled by your blood ..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Akhelius, the Staff of Duality"
    ],
    "recipe": [
      {
        "Bloody Hatred": 1
      },
      {
        "Staff of Souls": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "God's Page": 1
      }
    ],
    "stats": {
      "damage": 7500,
      "int": 735,
      "skilldamagepercent": 0.08,
      "passive": [
        "On skill cast, temporarily increases INT by 75 and flame affinity by 2.5% (up to 5 stacks)"
      ],
      "active": [
        "On use, activates Beam of Hatred",
        "Deals (flame affinity X (INT X 2.5)) magic damage per 0.125 seconds (up to 16 stacks)",
        "Continously stuns for 0.5 seconds per tick",
        "Deals up to 100% more damage based on target's missing HP",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "ratf",
    "name": "Staff of Plague",
    "koreanname": "역병의 지팡이",
    "description": "You shall not escape the hands of plague ..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Staff of Contagion": 1
      },
      {
        "Parasitic Staff": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "God's Page": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Antimatter": 1,
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 6750,
      "int": 744,
      "attackspeedpercent": 0.35,
      "skilldamagepercent": 0.1,
      "periodicdamagepercent": 0.1,
      "active": [
        "On use, activates Chain of Plague",
        "Affects units closest to initial target",
        "If enemy: deals (INT X 0.5) magic damage per 0.5 seconds and reduces healing received by 10%",
        "If ally: heals (INT X 0.5) HP per 0.5 seconds and increases magic defense by 40% (heals half HP for self)",
        "Upon expiration, explodes and deals (INT X 6) magic damage in an AoE",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "I0M1",
    "name": "Soul of Abyss",
    "koreanname": "소울 오브 어비스",
    "description": "If you stare into the abyss, the abyss stares back at you",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Gate of Abyss"
    ],
    "recipe": [
      {
        "Staff of Abyss": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 6750,
      "int": 735,
      "hp": 2250,
      "passive": [
        "On skill cast and healing, grants Power of Abyss",
        "Increases skill damage by 12% [Type-B], and HP regen by 90",
        "Healed ally will also get empowered",
        "Lasts for 8 seconds"
      ],
      "active": [
        "On use, activates Call of Abyss",
        "Increases damage output of heroes by 8% and HP regen by (15% max HP) for 10 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0N9",
    "name": "Armageddon",
    "koreanname": "아마겟돈",
    "description": "Hope or despair doesn't matter as its end shall be met with ruin.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Prelude to Demise"
    ],
    "recipe": [
      {
        "Hell Riser": 1
      },
      {
        "Bloody Hatred": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 9000,
      "int": 795,
      "skilldamagepercent": 0.1,
      "passive": [
        "On skill cast, activates Calamity",
        "Increases attack damage by 3750 and INT by 225 for 4 seconds",
        "Cooldown: 12 seconds"
      ],
      "active": [
        "On use, activates Song of Destruction",
        "Deals ((INT X 20) + (ATK DMG X 3.75)) magic damage in an AoE per 0.25 seconds",
        "Increases enemy magic damage taken by 10% [Type-A] for 8 seconds",
        "Stuns for 2 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0FR",
    "name": "Ethenos, the True Staff of Space",
    "koreanname": "진 차원의 지팡이 에테노스",
    "description": "The only truth is your strength.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Ethenos, the Staff of Chaos"
    ],
    "recipe": [
      {
        "Ethenos, the Staff of Space": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Light": 1
      }
    ],
    "stats": {
      "damage": 8000,
      "str": 410,
      "int": 780,
      "skilldamagepercent": 0.14,
      "active": [
        "On use, activates Dimensional Explosion",
        "Deals (INT X 75) magic damage in an AoE",
        "Stuns for 1.5 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "pspd",
    "name": "Ethenos, the Staff of Chaos",
    "koreanname": "혼돈의 지팡이 에테노스",
    "description": "Do you wish for endless knowledge? If so, step into the primordial chaos ..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Ethenos, the True Staff of Space": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Darkness": 1
      }
    ],
    "stats": {
      "damage": 8700,
      "str": 470,
      "int": 870,
      "skilldamagepercent": 0.15,
      "active": [
        "On use, activates Big Bang",
        "Deals (INT X 105) magic damage in an AoE",
        "Stuns for 2.5 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0PA",
    "name": "Harmonia, the Sparkle of Life",
    "koreanname": "생명의 불꽃 하르모니아",
    "description": "Nothing can surpass the beauty of life.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Staff)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Benziena, the Earthen Heart": 1
      },
      {
        "Ispion, the Runed Ring": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "int": 720,
      "affinityearthpercent": 0.1,
      "passive": [
        "On skill cast, activates Sparkle of Life",
        "Applies to self and one random nearby hero",
        "Heals (750 + INT X 0.16) HP per 1.5 seconds for 9 seconds",
        "Increases damage reduction by 15% and movement speed by 50 for 9 seconds",
        "Cooldown: 3 seconds"
      ],
      "active": [
        "On use, activates Binding of Life",
        "Applies a 600-radius ground targeted AOE for 9 seconds",
        "Heals 2000 HP per second and activates Sparkle of Life for those within",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialties - Earth Mastery",
        "Elementalist - Seal of Earth: Duration increased by 10 seconds",
        "Elementalist - Pulse of Protection: Cooldown reduced by 3 seconds",
        "Elementalist - Earthen Protection: Radius increased by 500",
        "Alchemist - Golem's HP increased by 50%, armor is increased by 50, and is permanently affected by Sparkle of Life. Also periodically heals nearby allies."
      ]
    }
  },
  {
    "id": "I0NR",
    "name": "Bag of Demise",
    "koreanname": "종말의 배낭",
    "description": "We're already in the age of demise.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bag)",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Bag of All Evils"
    ],
    "recipe": [
      {
        "Bag of Destruction": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "damage": 8100,
      "str": 765,
      "skilldamagepercent": 0.12,
      "dtpercent": -0.24,
      "active": [
        "On use, throws Eitr",
        "Increases target's damage output by 6% for 15 seconds",
        "Lasts 30 seconds on ground",
        "Cooldown: 15 seconds"
      ],
      "spec": [
        "Merchant Specialty - Very Heavy Bag",
        "Merchant - Bag Slam: Damage is increased by 400%, and it increases target's damage taken by 5% for 8 seconds",
        "Merchant - Throwing Healing Potion: Duration increased by 5s, increases target's skill damage by 10%",
        "Merchant - Throw Money: Each coin stuns for 0.5 seconds"
      ]
    }
  },
  {
    "id": "I00R",
    "name": "Bag of All Evils",
    "koreanname": "만악의 배낭",
    "description": "Bag that should never be opened",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Bag)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Bag of Demise": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Arcane Core": 1
      },
      {
        "Ancient Tome": 1
      }
    ],
    "stats": {
      "damage": 9400,
      "str": 850,
      "skilldamagepercent": 0.16,
      "dtpercent": -0.24,
      "active": [
        "On use, throws Eitr",
        "Increases target's damage output by 6% for 15 seconds",
        "Lasts 30 seconds on ground",
        "Cooldown: 15 seconds"
      ],
      "spec": [
        "Merchant Specialty - Very Heavy Bag",
        "Merchant - Bag Slam: Damage is increased by 500%, and it increases target's damage taken by 5% for 8 seconds",
        "Merchant - Throwing Healing Potion: Duration increased by 5s, increases target's skill damage by 12.5%",
        "Merchant - Throw Money: Changed into Devour"
      ]
    }
  },
  {
    "id": "I0LU",
    "name": "Bag of Universe",
    "koreanname": "만물의 배낭",
    "description": "Bag infused with the spirit of universe",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bag)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Bag of Mother Nature": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Fragment of Chaos": 1
      }
    ],
    "stats": {
      "damage": 6900,
      "allstat": 660,
      "hpregen": 450,
      "mdpercent": 0.15,
      "active": [
        "On use, throws Elixir",
        "Heals (100% max HP)",
        "Cleanses debuffs",
        "Lasts 60 seconds on ground",
        "Cooldown: 15 seconds"
      ],
      "spec": [
        "Merchant Specialty - Very Light Bag",
        "Merchant - This Bag isn't a Decoration!: You can drink up to 2 potions at once.",
        "Merchant - Throwing Healing Potion: Refill period is reduced to 2.5 seconds, number of placeable potions increased by 6, and reduces target's damage taken by 15%.",
        "Merchant - Life Shield Scroll: Duration increased by 5 seconds and increases target's magic defense by 15%."
      ]
    }
  },
  {
    "id": "I0NS",
    "name": "Bag of Despair",
    "koreanname": "절망의 배낭",
    "description": "Don't peek inside!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Weapon (Bag)",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Bag of Explosion": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9300,
      "str": 765,
      "skilldamagepercent": 0.2,
      "dtpercent": 0.1,
      "spec": [
        "Merchant Specialty - Dangerous Bag",
        "Merchant - Throwing Healing Potion: Changed to Throw Bomb",
        "Merchant - Holy Water of Resurrection: Changed to Cursed Doll"
      ]
    }
  },
  {
    "id": "I0OD",
    "name": "Harmony of Sky and Earth",
    "koreanname": "천지조화",
    "description": "Armor crafted by an image that embodies the beautiful world",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Creation of the Sky and Earth": 1
      },
      {
        "Embrace of Nature": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 275,
      "str": 375,
      "agi": 240,
      "mdpercent": 0.12,
      "passive": [
        "Nearby allies gain passive regeneration (+1% HP per second)"
      ],
      "active": [
        "On use, activates Cosmos",
        "Increases magic defense by 100% and cleanses debuffs of nearby allies for 5 seconds",
        "Heals (25% max HP) per second",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0NH",
    "name": "Felspike Armor",
    "koreanname": "펠스파이크 아머",
    "description": "Cursed armor that has been forged with the flames of hell",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Titan's Plates"
    ],
    "recipe": [
      {
        "Hellspike Armor": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 250,
      "str": 390,
      "skilldamagepercent": 0.1,
      "passive": [
        "On absorbing enough damage, empowers next Hellspike (up to 100% max HP, up to 50% stored in one hit)",
        "Cooldown: 5 seconds before accumulating again"
      ],
      "active": [
        "On use, activates Hellspike",
        "Deals (max HP X 3) magic damage in an AoE",
        "Empowered Hellspike deals (max HP X 7.5) magic damage in an AoE",
        "Stuns for 2 seconds",
        "Increases attack damage by 1500 for 2.5 seconds",
        "Cooldown: 7.5 seconds"
      ]
    }
  },
  {
    "id": "I0P8",
    "name": "Voidshard Armor",
    "koreanname": "보이드샤드 아머",
    "description": "All of creation stills in my wake.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Dread Incarnate"
    ],
    "recipe": [
      {
        "Frostshard Armor": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "armor": 290,
      "str": 375,
      "agi": 180,
      "dtpercent": -0.15,
      "passive": [
        "If HP drops below 50%, activates Voidshard",
        "Heals (20% max HP)",
        "Deals (STR X 12.5) magic damage in an AoE",
        "Increases STR by 15%, movement speed by 75%",
        "Reduces damage taken by 7.5% for 12 seconds",
        "Cooldown: 8 seconds"
      ],
      "active": [
        "On use, activates Event Horizon",
        "Prevents HP from dropping below 1 for 3 seconds",
        "Afterwards, pauses nearby enemies for 1.5 seconds and activates Voidshard",
        "Cannot pause same unit twice within 60 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0NI",
    "name": "Nevedium, the Armor of Demonblood",
    "koreanname": "마혈의 갑주 네베디움",
    "description": "Armor drenched in demon's blood",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Benedict, the Crimson Armor of Blood": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 210,
      "agi": 345,
      "skilldamagepercent": 0.12,
      "passive": [
        "On dealing damage, accumulates Blood",
        "Converts 1% of damage dealt into max HP (up to (AGI X 2) HP)",
        "At max stacks, increases HP regen by 2%"
      ],
      "active": [
        "On use, activates Demon Break",
        "Releases stored HP",
        "Deals (stored HP X 30) pure damage in an AoE",
        "Stuns for 1.5 seconds",
        "Increases AGI by 20% and damage output by 5% for 12 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0NJ",
    "name": "Athanasia, the Armor of the Reaper",
    "koreanname": "사신의 갑주 아타나시아",
    "description": "Did you think you could kill death itself?",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Exitium, the Armor of Ruin"
    ],
    "recipe": [
      {
        "Grandine, the Plates of Wraith": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "Cold Ring of Death": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 200,
      "str": 180,
      "agi": 390,
      "skilldamagepercent": 0.12,
      "critchancepercent": 0.12,
      "passive": [
        "If HP drops below 20%, summons Reaper",
        "Prevents HP from dropping below 1 for 6 seconds",
        "Afterwards deals (50 + (AGI X 75)) pure damage in an AoE",
        "Deals up to 125% more damage based on target's missing HP",
        "Heals to full",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty - Reaper Possession",
        "Martial Artist - Nameless Arts reduces damage taken by 20% while active and grants immunity to instant death spells."
      ]
    }
  },
  {
    "id": "I0OW",
    "name": "Vest of Divine Winds",
    "koreanname": "신풍의 도복",
    "description": "Vest that bestows godly speed to user.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Astral Fury"
    ],
    "recipe": [
      {
        "Vest of Storm": 1
      },
      {
        "Guardian of the Skies": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "armor": 200,
      "agi": 435,
      "skilldamagepercent": 0.1,
      "mdpercent": 0.1,
      "passive": [
        "On skill cast, activates Wind Fury for 1.5 seconds",
        "Next 2 attacks hit 2 more times and deals (50% ATK DMG) physical damage",
        "Increases AGI by 75 and movement speed by 400 (past limit)"
      ]
    }
  },
  {
    "id": "I0IP",
    "name": "Hades, the Armor of Despair",
    "koreanname": "절망의 갑주 하데스",
    "description": "Armor that calls the souls of the dead to itself",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Cage of Twisted Souls"
    ],
    "recipe": [
      {
        "Requiem, the Armor of Lamentation": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "True Bloodstone Plates": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Skeleton Bone": 1
      }
    ],
    "stats": {
      "armor": 240,
      "str": 295,
      "agi": 160,
      "int": 160,
      "attackspeedpercent": -0.75,
      "passive": [
        "Increases nearby allies stats by 6%",
        "Activates Requiem every 6 seconds",
        "Deals ((STR + AGI + INT) X 3) magic damage in an AoE",
        "Increases enemy damage taken by 4% for 6 seconds",
        "On next attack, heals (6% max HP)"
      ]
    }
  },
  {
    "id": "I0LV",
    "name": "Robe of Archlich",
    "koreanname": "로브 오브 아크리치",
    "description": "A robe infused with spirit of the one who has devoted his life to magic",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Frost Herald's Garment"
    ],
    "recipe": [
      {
        "Robe of the Necromancer": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 225,
      "str": 150,
      "int": 360,
      "mpregen": 36,
      "skilldamagepercent": 0.1,
      "active": [
        "On use, summons Magic Field",
        "Gives user magic and CC immunity",
        "Increases magic defense by 40% of nearby allies",
        "Heals (6% max HP) and (3% max MP) per second",
        "Lasts 8 seconds",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "I0OG",
    "name": "Jupiter, the Robe of Heavens",
    "koreanname": "천상의 로브 유피테르",
    "description": "Dear Father, may your salvation be bestowed upon these innocent souls",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Diana, the Robe of Holy Maiden": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 230,
      "int": 405,
      "hp": 2250,
      "passive": [
        "Increases nearby allies skill damage by 8% & magic defense by 10%"
      ],
      "active": [
        "On use, activates Salvation",
        "Heals nearby allies to full",
        "Afterwards heals (INT X 2.5) HP per 0.5 seconds to 3 allies with lowest HP for 6 seconds",
        "Deals (INT X 7.5) pure damage and stuns for 1 second per second for 6 seconds",
        "Prevents HP from dropping below 1",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialties - Heaven's Blessing",
        "Wind Mage - Feather of Aeolus: Heals for max HP X 50%."
      ]
    }
  },
  {
    "id": "I0OF",
    "name": "Thanatos, the Robe of Hell",
    "koreanname": "지옥의 로브 타나토스",
    "description": "The power of hell.. it gets sweeter by minute.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Call of Gehenna"
    ],
    "recipe": [
      {
        "Medea, the Robe of the Witch": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 200,
      "int": 525,
      "mpregen": 60,
      "skilldamagepercent": 0.15,
      "active": [
        "On use, activates Devastation",
        "Increases INT by 330 for 7 seconds",
        "During active, accumulate stacks per skill cast",
        "Upon expiration, deals (INT X (stacks + 20) X 3) magic damage (up to 20 stacks)",
        "Stuns for 1.5 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0OH",
    "name": "Bloodseeker Plates",
    "koreanname": "혈귀의 갑주",
    "description": "I thirst for blood!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Bloodsoul Plates": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "God's Page": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 250,
      "allstat": 300,
      "skilldamagepercent": 0.075,
      "drpercent": 0.075,
      "passive": [
        "Activates Bloodthirst if HP drops below 20%",
        "Increases damage output by 7.5% and HP regen by 3% for 8 seconds",
        "Cooldown: 15 seconds"
      ],
      "active": [
        "On use, activates Bloodsoul",
        "Applies a shield of (1500 + 25% max HP) for 5 seconds",
        "Upon expiration, deals (MAIN STAT X 25) magic damage in an AoE",
        "Heals HP and MP equal to absorbed damage",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "I027",
    "name": "Robe of Storm",
    "koreanname": "폭풍의 로브",
    "description": "Feel the wrath of heaven!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Armor",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Sanguis, the Robe of Sacrifice"
    ],
    "recipe": [
      {
        "Draconic Skin Rusalka": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Aegis of Storm": 1
      }
    ],
    "stats": {
      "armor": 200,
      "int": 390,
      "movespeed": 50,
      "skilldamagepercent": 0.12,
      "passive": [
        "During combat, activates Rig of Lightning",
        "Deals (4000 + INT X 2) magic damage to enemies in 550 ~ 800 from you every second",
        "Also grants a charge every time it hits enemy",
        "When charge reaches 10 stacks, all charges are consumed and you gain 250 INT for 5 seconds",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0IR",
    "name": "Horn of Lightning God",
    "koreanname": "뇌신의 뿔",
    "description": "Horn holding the wrath of the Lightning God",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Horn of Demon God"
    ],
    "recipe": [
      {
        "Horn of Devil": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Aegis of Storm": 1,
        "Essence of Storm": 1
      },
      {
        "Pure Steel": 1
      }
    ],
    "stats": {
      "armor": 105,
      "mainstat": 72,
      "allstat": 144,
      "skilldamagepercent": 0.12,
      "critchancepercent": 0.12,
      "dtpercent": 0.08,
      "passive": [
        "Upon moving 3000 distance, unleash Lightning God's Wrath on next attack",
        "Deals (MAIN STAT X 25) pure damage",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0NB",
    "name": "Spirit of Protector",
    "koreanname": "스피릿 오브 프로텍터",
    "description": "Helm infused with the spirit of a protector",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Keeper of the Grove"
    ],
    "recipe": [
      {
        "Protector's Will": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 150,
      "str": 240,
      "dtpercent": -0.15,
      "passive": [
        "Provides Protection to any nearby allies",
        "Increases HP regen by 1% and damage reduction by 15% for 15 seconds"
      ],
      "active": [
        "On use, activates Spirit of Protector",
        "Increases damage reduction by 40% of nearby allies for 12 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0NC",
    "name": "Eye of the Reaper",
    "koreanname": "사신의 눈",
    "description": "Death stares into you..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Eye of Wallachia": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "armor": 115,
      "agi": 285,
      "hp": 1500,
      "skilldamagepercent": 0.1,
      "critchancepercent": 0.1,
      "passive": [
        "On attack, activates Eye of the Reaper",
        "Increases attack damage by 17.5%, critical damage by 0.25 and AGI by 300 for 7.5 seconds",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I0ND",
    "name": "Mask of Demigod",
    "koreanname": "반신의 가면",
    "description": "Mask that holds the strength of a demigod",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Dragon Mask": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "armor": 130,
      "agi": 255,
      "hp": 1500,
      "skilldamagepercent": 0.12,
      "hpregen": 120,
      "active": [
        "On use, activates Demigod Infusion",
        "Increases AGI by 240, critical damage by 0.25 and HP regen by 600 for 15 seconds",
        "During active, empowers the above by 10% per skill cast (up to 100%)",
        "Use again to teleport (up to 800 distance, up to 3 times)",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "I0NA",
    "name": "Radiance of the One",
    "koreanname": "절대자의 광휘",
    "description": "You're not allowed to even stare at it.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Visage of Vengeance"
    ],
    "recipe": [
      {
        "Halo of Judgment": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "God's Page": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 140,
      "str": 240,
      "agi": 210,
      "procdamagepercent": 0.1,
      "passive": [
        "On attack, activates Power per 0.75 seconds (up to 3 stacks)",
        "Deals (MAIN STAT X 5) pure damage per stack"
      ],
      "active": [
        "Blocks magic every 1 minute",
        "Lasts 5 seconds"
      ]
    }
  },
  {
    "id": "I0PN",
    "name": "Crown of Great Rage",
    "koreanname": "격노의 화관",
    "description": "A crown that amplifies the user's rage",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Crown of Extreme Anger"
    ],
    "recipe": [
      {
        "Crown of Rage": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Dragon's Eye": 1
      }
    ],
    "stats": {
      "armor": 110,
      "allstat": 225,
      "skilldamagepercent": 0.07,
      "affinityflamepercent": 0.06,
      "active": [
        "On use, activates Great Rage",
        "Consumes (40% max HP)",
        "Deals (flame affinity X (MAIN STAT X 22.5)) magic damage in an AoE",
        "Increases all stats by 1.25% consumed HP (double for main stat) and flame affinity by 5% for 15 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0NF",
    "name": "Crown of Extreme Anger",
    "koreanname": "극대노의 화관",
    "description": "I'M SO ANGRY!!!!!!!!!!!!!!!!!!!!!!!!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Crown of Cataclysm"
    ],
    "recipe": [
      {
        "Crown of Great Rage": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 120,
      "allstat": 255,
      "skilldamagepercent": 0.08,
      "affinityflamepercent": 0.075,
      "active": [
        "On use, activates Extreme Anger",
        "Consumes (50% of current HP)",
        "Deals (flame affinity X (MAIN STAT X 37.5)) magic damage to nearby enemies",
        "Increases all stats by 1.25% consumed HP (double for main stat) and flame affinity by 7.5% for 15 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0NG",
    "name": "Crown of Absolute Zero",
    "koreanname": "절대영도의 화관",
    "description": "You shall not be shaken.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Crown of Transcendance"
    ],
    "recipe": [
      {
        "Crown of Composure": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1,
        "Fragment of Hell": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 135,
      "allstat": 285,
      "skilldamagepercent": 0.1,
      "affinityiwpercent": 0.075,
      "active": [
        "On use, activates Composure",
        "Increases skill damage by 12.5% and all stats by 150 for 12 seconds",
        "Grants CC immunity for 12 seconds",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "I0NE",
    "name": "Hood of Apocalypse",
    "koreanname": "후드 오브 아포칼립스",
    "description": "A new cycle will begin after the end.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Hood of Apocrypha": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Seal of Deceiver": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "armor": 125,
      "str": 195,
      "agi": 195,
      "int": 255,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Apocalypse",
        "Deals (MAIN STAT X 37.5) magic damage in an AoE",
        "Heals (25% max HP) of nearby allies",
        "Increases HP regen by 10% for 3 seconds",
        "Stuns for 1.5 seconds",
        "Silences and reduces enemy movement speed and attack damage by 50% every 0.25 seconds (lasts 3 seconds)",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0ON",
    "name": "Horn of Demon God",
    "koreanname": "마신의 뿔",
    "description": "Return to the void !",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Horn of Dragon"
    ],
    "recipe": [
      {
        "Horn of Lightning God": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1,
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "armor": 115,
      "mainstat": 105,
      "allstat": 165,
      "skilldamagepercent": 0.15,
      "critchancepercent": 0.15,
      "dtpercent": 0.12,
      "passive": [
        "Upon moving 3000 distance, unleash Beam of Destruction on next attack",
        "Deals (MAIN STAT X 30) pure damage in a line in front of user",
        "Increases damage output by 8% for 4 seconds (only for self towards target)",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0IS",
    "name": "Eye of the Flame Lord",
    "koreanname": "화신의 눈",
    "description": "Don't stare into it directly or you'll go blind!!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Void Eye": 1
      },
      {
        "Dragon's Eye": 1
      },
      {
        "Aegis of Flame": 1,
        "Essence of Flame": 1
      },
      {
        "Skeleton Bone": 1
      },
      {
        "Essence of Anger": 1
      }
    ],
    "stats": {
      "armor": 125,
      "int": 297,
      "mdpercent": 0.1,
      "passive": [
        "Increases nearby allies attack damage and skill damage by 5%"
      ],
      "active": [
        "On use, summons 2 Flame Giants"
      ]
    }
  },
  {
    "id": "I0OM",
    "name": "Prophetia, the Origin of Knowledge",
    "koreanname": "지혜의 원천 프로피티아",
    "description": "Grants ultimate omnipotence ",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Headwear",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Prophetia, the Greater Source of Mana": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "armor": 115,
      "int": 330,
      "mp": 2250,
      "skilldamagepercent": 0.12,
      "passive": [
        "On skill cast, (proc rate X 7.5)% chance to activate Enlightenment",
        "Refreshes cooldown of a random spell"
      ],
      "active": [
        "On use, activates Magic Focus",
        "Increases INT by 375 and skill damage by 5% for 8 seconds",
        "During active, increases INT by 30 and skill damage by 0.5% per second",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I0CH",
    "name": "Heaven's Fist",
    "koreanname": "헤븐즈 피스트",
    "description": "Iron fist of mercy to those corrupted by evil !!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Demonic Fist"
    ],
    "recipe": [
      {
        "Purefrost Gauntlet": 1
      },
      {
        "Heart of Ifrit": 1
      },
      {
        "Ancient Hourglass": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Oath of Courage": 1
      }
    ],
    "stats": {
      "damage": 1800,
      "allstat": 225,
      "mainstat": 75,
      "skilldamagepercent": 0.075,
      "dtpercent": -0.075,
      "passive": [
        "Empowers next attack with Holy Fist every 6 seconds",
        "Deals 3 additional attacks with (200% ATK DMG) physical damage",
        "Reduces armor by 15% [Type-A] for 3 seconds"
      ],
      "spec": [
        "Specialties - Summary Judgement, Holy Arts",
        "Paladin - Divine Cross' damage is increased by 15%"
      ]
    }
  },
  {
    "id": "I0OE",
    "name": "Ring of Divine Winds",
    "koreanname": "신풍의 반지",
    "description": "If you wish for true freedom, let the wind guide your body.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Ring of the Storm": 1
      },
      {
        "Ring of Time": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 375,
      "movespeed": 60,
      "attackspeedpercent": 0.45,
      "passive": [
        "On attack and skill cast, chance to activate Divine Winds",
        "On skill cast, (proc rate X 15)% chance to refresh cooldown of that spell",
        "On attack, 15% chance to attack twice"
      ],
      "active": [
        "On use, teleports to target location (up to 1200 distance)",
        "Cooldown: 25 seconds"
      ]
    }
  },
  {
    "id": "I0NK",
    "name": "Ring of Hope",
    "koreanname": "희망의 반지",
    "description": "I love everything!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Bell of Divinity"
    ],
    "recipe": [
      {
        "Ring of Fervor": 1
      },
      {
        "Bell of Light": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 360,
      "hpregen": 180,
      "affinitylightpercent": 0.05,
      "passive": [
        "On direct hit, applies Fervor (single-taget spells on allies)",
        "Increases skill damage by 8% and main stat by 120 for 12 seconds"
      ],
      "active": [
        "On use, activates Hope",
        "Cleanses debuffs and heals (50% max HP) of allies with Fervor within range",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0NL",
    "name": "Ring of Despair",
    "koreanname": "절망의 반지",
    "description": "I curse everything.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Ring of Composure": 1
      },
      {
        "Grimoire of Darkness": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 375,
      "mpregen": 120,
      "passive": [
        "On direct hit, applies Composure (single-taget spells on enemies)",
        "Increases magic damage taken by 7.5% [Type-B] for 12 seconds"
      ],
      "active": [
        "On use, activates Despair",
        "Deals (water affinity X (1% max HP)) pure damage to enemies with Composure",
        "Freezes for 3 seconds",
        "Increases enemy damage taken by 5% for 2 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0LW",
    "name": "Ring of Fate",
    "koreanname": "운명의 반지",
    "description": "Ring that frees you from your fate",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Ring of Eternity"
    ],
    "recipe": [
      {
        "Ring of Time": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Essence of Storm": 1
      }
    ],
    "stats": {
      "allstat": 390,
      "skilldamagepercent": 0.1,
      "passive": [
        "If HP drops below 1, activates Time Reversal",
        "Heals to full",
        "Cooldown: 300 seconds"
      ],
      "active": [
        "On use, activates Time Distortion",
        "Refreshes the cooldown of the last used non-ultimate skill",
        "Gives immunity to stuns, silence, and knockbacks for 10 seconds",
        "Increases MP regen by 750 for 10 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0NM",
    "name": "Ring of Insanity",
    "koreanname": "광기의 반지",
    "description": "You must be out of your mind to wear this.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Crimson Curse"
    ],
    "recipe": [
      {
        "Ring of Strike": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Essence of Sea": 1
      }
    ],
    "stats": {
      "str": 405,
      "agi": 375,
      "periodicdamagepercent": 0.30,
      "healreceivedpercent": -0.30,
      "passive": [
        "On attack, 15% chance to activate Madness",
        "Next 3 hits will deal bonus (ATK DMG X 1) pure damage",
        "Increases attack damage by 7500, main stat and HP regen by 375 for 7.5 seconds",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "asbl",
    "name": "Horn of God",
    "koreanname": "신의 뿔피리",
    "description": "A misuse can result in the destruction of humanity",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Heart of Life"
    ],
    "recipe": [
      {
        "Azathos, the Pipe of Chaos": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "int": 435,
      "hp": 3000,
      "skilldamagepercent": 0.06,
      "passive": [
        "Empowers nearby allies",
        "Increases attack damage by (INT X 0.6) (up to 1800), attack speed by 15%, and HP regen by 120"
      ],
      "active": [
        "On use, activates Purification",
        "Prevents HP from dropping below 1 for 3 seconds",
        "Heals (10% max HP) and cleanses debuffs for duration",
        "Cooldown: 20 seconds"
      ]
    }
  },
  {
    "id": "I0P5",
    "name": "Ring of Frozen Soul",
    "koreanname": "얼어붙은 영혼의 반지",
    "description": "Ring imbued with dreadful ancient spirits",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Ring of Desolate Soul"
    ],
    "recipe": [
      {
        "Cold Ring of Death": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "mainstat": 555,
      "attackspeedpercent": 0.3,
      "skilldamagepercent": 0.175,
      "hpregen": 90,
      "mpregen": 45,
      "active": [
        "On use, activates Frozen Aegis",
        "Gives immunity to damage and debuffs for 3 seconds",
        "Upon expiration, deals (damage received X 10) pure damage in an AoE (up to (max HP X 10))",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialties - Ring of Frozen Soul",
        "Assassin - Shadow Slash: Damage increased by 50%."
      ]
    }
  },
  {
    "id": "I0IB",
    "name": "Latea, the Ring of Overlord",
    "koreanname": "지배자의 반지 라테아",
    "description": "The one who rules over chaos, is worthy of becoming the Overlord.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Ring of the One"
    ],
    "recipe": [
      {
        "Latea, the Ring of Chaos": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Proof of Purification": 1
      }
    ],
    "stats": {
      "allstat": 375,
      "skilldamagepercent": 0.12,
      "passive": [
        "On dealing damage, 20% chance to deal 20% bonus damage",
        "On being damaged, 10% chance to activate Absolute Protection (blocks all damage)"
      ]
    }
  },
  {
    "id": "I0PP",
    "name": "Ring of the One",
    "koreanname": "절대자의 반지",
    "description": "Ring of the one who conquered all.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Latea, the Ring of Overlord": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Essence of Storm": 1
      }
    ],
    "stats": {
      "allstat": 420,
      "skilldamagepercent": 0.125,
      "passive": [
        "On dealing damage, 20% chance to deal 25% additional damage",
        "On casting skill, 15% chance to increase damage dealt by 5% for 5 seconds",
        "On being damaged, 10% chance to activate Absolute Protection (blocks all damage)"
      ]
    }
  },
  {
    "id": "I0JZ",
    "name": "Nebula Rose",
    "koreanname": "네뷸라 로즈",
    "description": "A rose enveloped in cosmic powers.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Eternal Rose": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Fragment of Chaos": 1
      }
    ],
    "stats": {
      "int": 420,
      "hp": 1500,
      "affinityiwpercent": 0.06,
      "affinitywlpercent": 0.06,
      "passive": [
        "Magic defense of nearby allies +10%"
      ],
      "active": [
        "On use, activates Cosmic Protection",
        "Applies a shield of ((INT X 5) + (max HP X 0.2)) for 5 seconds",
        "Increases skill damage by 8% and damage reduction by 12% [Type-A] when shielded allies take spell damage for 30 seconds",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0OL",
    "name": "Demonic Fist",
    "koreanname": "데모닉 피스트",
    "description": "Demon's hand that reaches into your soul",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Heaven's Fist": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "damage": 2400,
      "allstat": 270,
      "mainstat": 90,
      "skilldamagepercent": 0.09,
      "drpercent": 0.09,
      "passive": [
        "Empowers next attack with Demon's Grasp every 5 seconds",
        "Deals 5 additional attacks with (20% ATK DMG) pure damage",
        "Heals (5% max HP)"
      ],
      "active": [
        "On use empowers next attack with Demon's Grasp",
        "Cooldown: 10 seconds"
      ],
      "spec": [
        "Specialties - Demon's Grasp",
        "Paladin - Divine Cross' damage is increased by 20%"
      ]
    }
  },
  {
    "id": "I0PO",
    "name": "Mark of Sin",
    "koreanname": "죄악의 증표",
    "description": "The deeper your sins are, the brighter it shines.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Seed of Malice"
    ],
    "recipe": [
      {
        "Grimoire of Darkness": 1
      },
      {
        "Seal of Deceiver": 1
      },
      {
        "Aegis of Flame": 1
      }
    ],
    "stats": {
      "allstat": 330,
      "mp": 3750,
      "skilldamagepercent": 0.075,
      "active": [
        "On use, activates Forbidden Magic",
        "Consumes (50% max MP)",
        "Increases main stat by (consumed MP / 60) and attack speed by 50% for 10 seconds",
        "Deals (INT X 3.75) magic damage per stack in an AoE",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialties - Transmission of Darkness, Forbidden Grimoire",
        "Priest - Dark Aurora: Holy Aurora changes to Dark Aurora [Lv. 2], removing healing effect but increasing damage dealt"
      ]
    }
  },
  {
    "id": "I0P6",
    "name": "Seed of Malice",
    "koreanname": "악의 씨앗",
    "description": "It shall spread ceaselessly as long as humans live.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Mark of Sin": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "allstat": 360,
      "mp": 4500,
      "skilldamagepercent": 0.09,
      "passive": [
        "On landing a skill hit, creates Seed of Malice",
        "Heals 1200 HP and 3000 MP",
        "Increases damage output by 2% per stack (up to 5 stacks)",
        "Seeds will gravitate towards the user if they move towards one",
        "Cooldown: 4 seconds"
      ],
      "active": [
        "On use, activates Forbidden Magic",
        "Consumes (50% current MP)",
        "Increases main stat by (MP consumed / 60) and attack speed by 60% for 10 seconds",
        "Deals (INT X 3.75) magic damage per stack in an AoE",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialties - Transmission of Darkness, Forbidden Grimoire",
        "Priest - Transmission of Darkness: Holy Aurora is replaced by Dark Aurora [Lv 3]"
      ]
    }
  },
  {
    "id": "I0JX",
    "name": "Ring of Revival",
    "koreanname": "소생의 반지",
    "description": "The life is flowing into me!",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Accessory",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Trueblood Ring": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Potion of Corruption": 1
      }
    ],
    "stats": {
      "allstat": 345,
      "hp": 2250,
      "mp": 2250,
      "healreceivedpercent": 0.15,
      "passive": [
        "On death, revives after 2 seconds with full HP and MP",
        "Cooldown: 240 seconds"
      ],
      "active": [
        "On use, activates Revival",
        "Restores 50% of HP and MP",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0NN",
    "name": "Wings of Flame Lord",
    "koreanname": "화염 군주의 날개",
    "description": "Wings of the one that rules over flame",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Living Flame"
    ],
    "recipe": [
      {
        "Wings of Phoenix": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "damage": 3900,
      "str": 285,
      "agi": 285,
      "skilldamagepercent": 0.05,
      "active": [
        "On use, activates Flame Descent (up to 1500 distance)",
        "Deals ((ATK DMG X 2.25) + (MAIN STAT X 20)) magic damage in selected area",
        "Stuns for 1.5 seconds",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialty - Phoenix",
        "Martial Artist - If you die while Nameless Art is active, you will revive with 75% HP after 2 seconds."
      ]
    }
  },
  {
    "id": "I0NO",
    "name": "Wings of Frost Lord",
    "koreanname": "서리 군주의 날개",
    "description": "Wings of the one that rules over frost",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Frost Fairy Wings": 1
      },
      {
        "Dragonic Orb": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "int": 375,
      "hp": 1500,
      "mp": 4500,
      "skilldamagepercent": 0.15,
      "affinityiwpercent": 0.08,
      "passive": [
        "On skill cast, (proc rate X 100)% chance to summon Ice Spikes",
        "Deals (water affinity X (INT X 3.75)) magic damage per spike (up to 5 spikes)"
      ]
    }
  },
  {
    "id": "I0OB",
    "name": "Wings of Night Lord",
    "koreanname": "밤의 군주의 날개",
    "description": "Wings of the one who reigns over the night",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Wings of Slayer": 1
      },
      {
        "Wings of Blood Lord": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      }
    ],
    "stats": {
      "str": 300,
      "agi": 285,
      "movespeed": 50,
      "skilldamagepercent": 0.075,
      "passive": [
        "On skill cast, empowers next attack",
        "Deals ((MAIN STAT X 2) + (AGI X 1.5)) pure damage",
        "Can crit based on user's critical chance",
        "Empowered attack stacks Madness of Night",
        "Increases AGI by 36 per second for 8 seconds (up to 10 times)",
        "At max stacks, duration cannot be extended but increases damage output by 10%"
      ]
    }
  },
  {
    "id": "ram3",
    "name": "Storm",
    "koreanname": "스톰",
    "description": "Rave, and do not stop ! One mistake can cost your life.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Bloodstorm"
    ],
    "recipe": [
      {
        "Slayer Boots": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 1200,
      "mainstat": 135,
      "allstat": 150,
      "critmultiplier": 0.2,
      "passive": [
        "On skill cast, increases critical chance by 6% for 6 seconds (stacks up to 3 times)"
      ]
    }
  },
  {
    "id": "I0NP",
    "name": "Ruler of the Skies",
    "koreanname": "창공의 지배자",
    "description": "The wings of one that rules over the grand sky",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Guardian of the Skies": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Frozen Debris": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "str": 345,
      "agi": 375,
      "skilldamagepercent": 0.1,
      "mdpercent": 0.1,
      "passive": [
        "On skill cast, activates Power of Skies",
        "During active, every 4th attack deals (MAIN STAT X 3) pure damage",
        "Increases all stats by 150 for 5 seconds",
        "Cooldown: 15 seconds"
      ],
      "active": [
        "On use, activates Star of Destruction",
        "Deals (MAIN STAT X 60) magic damage to selected area",
        "Increase enemy magic damage taken by 8% for 10 seconds",
        "Stuns for 2 seconds",
        "Cooldown: 120 seconds"
      ],
      "spec": [
        "Specialty",
        "Thunderer - When Power of Skies activates, magnetic field is recharged by 33%."
      ]
    }
  },
  {
    "id": "I0OK",
    "name": "Cape of Deep Abyss",
    "koreanname": "깊은 심연의 망토",
    "description": "The great old one awaits you..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Cloak of the Fallen Shadows": 1
      },
      {
        "Grim Heart": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Spearhead of Death": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "allstat": 325,
      "skilldamagepercent": 0.09,
      "periodicdamagepercent": 0.135,
      "passive": [
        "On direct hit, activates Drowning Abyss",
        "Single-target spells deal 15% bonus damage per skill cast over 3 seconds",
        "(Bonus damage type is same as the spell used)",
        "Increases enemy magic damage taken by 5%"
      ]
    }
  },
  {
    "id": "I0AU",
    "name": "Archangel Wings",
    "koreanname": "대천사의 날개",
    "description": "Wings blessed by archangels",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Wings of Cosmos"
    ],
    "recipe": [
      {
        "Pure Crystal Wings": 1
      },
      {
        "Guardian of the Skies": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Burning Bone Fragments": 1
      },
      {
        "Spearhead of Death": 1,
        "Fragment of Chaos": 1
      }
    ],
    "stats": {
      "allstat": 225,
      "mainstat": 75,
      "hpregen": 90,
      "mpregen": 45,
      "skilldamagepercent": 0.15,
      "passive": [
        "On skill cast, 5% chance to activate Archangel's Blessing",
        "Refreshes the cooldown of all non-ultimate skills",
        "Increases skill damage by 10% and reduces damage taken by 50% for 10 seconds",
        "Cooldown: 120 seconds"
      ]
    }
  },
  {
    "id": "I0JW",
    "name": "Protection of the Fairies",
    "koreanname": "요정의 가호",
    "description": "The fairies surround you.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Thread of Life"
    ],
    "recipe": [
      {
        "Embrace of Nature": 1
      },
      {
        "Soul of the Dead": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Proof of Purification": 1
      },
      {
        "Spearhead of Death": 1,
        "Fragment of Chaos": 1
      }
    ],
    "stats": {
      "allstat": 345,
      "affinityiwpercent": 0.05,
      "affinityflamepercent": 0.05,
      "affinitywlpercent": 0.05,
      "passive": [
        "Increases nearby allies' healing received by 15%"
      ],
      "active": [
        "On use, revives a fallen ally with full HP and MP",
        "Cooldown: 300 seconds"
      ]
    }
  },
  {
    "id": "I0N1",
    "name": "Brave Heart",
    "koreanname": "브레이브 하트",
    "description": "Bravery shall lead you to victory",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Grim Heart": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Guardian of the Skies": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "allstat": 450,
      "mdpercent": 0.2,
      "passive": [
        "Slows nearby enemies",
        "Reduces movement and attack speed by 25%"
      ],
      "active": [
        "On use, activates Bravery",
        "Heals (50% max HP) of self and (30% max HP) of nearby allies",
        "Stuns nearby enemies for 1.5 seconds",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "I0OJ",
    "name": "Wings of Immortal",
    "koreanname": "불멸자의 날개",
    "description": "You probably won't die with this wing.",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "recipe": [
      {
        "Shroud of Perseverance": 1
      },
      {
        "Soul of the Dead": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Fragment of Soul": 1
      }
    ],
    "stats": {
      "allstat": 375,
      "hp": 2250,
      "dtpercent": -0.1,
      "passive": [
        "During combat, stat gradually increases",
        "Increases main stat by 9 per 3 seconds (up to 50 stacks)",
        "Revives upon dying",
        "Cooldown: 180 seconds"
      ]
    }
  },
  {
    "id": "I0OI",
    "name": "Soul Devourer",
    "koreanname": "소울 디바우러",
    "description": "All souls are merely my prey..",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Wings",
    "color": "99FF99",
    "level": 100,
    "required_by": [
      "Blood Devourer"
    ],
    "recipe": [
      {
        "Soul Eater": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      }
    ],
    "stats": {
      "str": 255,
      "int": 480,
      "skilldamagepercent": 0.09,
      "mdpercent": 0.09,
      "passive": [
        "Heals 10% HP & MP per 5 seconds"
      ],
      "active": [
        "On use, activates Soul Devour",
        "Cleanses debuffs from user",
        "Heals (40% max HP)",
        "Cooldown: 28 seconds"
      ],
      "spec": [
        "Specialty - Soul Devour",
        "Warlock - Soul Whisper's restored HP amount is increased by 30%."
      ]
    }
  },
  {
    "id": "I0Q4",
    "name": "Heartrender",
    "koreanname": "하트렌더",
    "description": "Offer your heart!",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Shared)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "The Ender": 1
      },
      {
        "Ring of Destruction": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Crimson Rose": 1,
        "Emblem of Sacrifice": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Soul Blossom": 1,
        "Blood Essence": 1
      }
    ],
    "stats": {
      "damage": 10700,
      "mainstat": 930,
      "attackspeedpercent": 0.3,
      "skilldamagepercent": 0.075,
      "passive": [
        "Upon damaging enemies below 50% HP, activates Death's Door",
        "Deals 15% bonus damage"
      ],
      "active": [
        "On use, activates Heartrender",
        "Summons and launches a bloody spear at target, marking it and dealing 250000 magic damage and stunning it for 1 second",
        "Deals 50% bonus damage to non-boss units (includes elite units as well)",
        "If the marked target dies, the cooldown of this effect will be reset",
        "Cooldown: 20 seconds (minimum 10 seconds per cast)"
      ]
    }
  },
  {
    "id": "I078",
    "name": "Aeon Sphere",
    "koreanname": "에온 스피어",
    "description": "Orb infused with ultimate wisdom",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Shared)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Heaven's Door": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 7200,
      "allstat": 760,
      "mdpercent": 0.12,
      "affinitylightpercent": 0.12,
      "passive": [
        "Healing allies infuses them with Eternal Blessing",
        "Increases main stat by 150 + 3% [Type-A] for 6 seconds"
      ],
      "active": [
        "On use, activates Aeon Sphere",
        "Sends an orb of time at 2 target heroes",
        "Grants 16% skill damage to latched heroes",
        "Every 3.5 seconds, the target will be healed for 2000 HP",
        "Every 17.5 seconds, a random skill will be reset on the target",
        "Cooldown: 3 seconds"
      ]
    }
  },
  {
    "id": "I015",
    "name": "Spear of Judgment",
    "koreanname": "심판의 창",
    "description": "It's time of your judgment!",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Splitting of the Sky and Earth": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "damage": 10800,
      "str": 800,
      "skilldamagepercent": 0.14,
      "passive": [
        "On skill cast, activates Judgment",
        "Increases STR by 100 and skill damage by 3% per stack for 5 seconds (up to 4 stacks)",
        "At max stacks, does not extend duration"
      ],
      "active": [
        "On use, activates Final Verdict",
        "Soar high into sky then slam down in target area, dealing (STR X 50) magic damage and stunning for 2.5 seconds",
        "Sets Judgment to max stacks and grants 9% damage output for 10 seconds",
        "Cooldown: 75 sec"
      ]
    }
  },
  {
    "id": "arsc",
    "name": "Caedis, the Sword of Slaughter",
    "koreanname": "학살의 검 카에디스",
    "description": "Stained with blood that cannot be washed away",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Crimson Reaper": 1
      },
      {
        "Shackles of Heaven": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Blood Essence": 1
      }
    ],
    "stats": {
      "damage": 13600,
      "mainstat": 500,
      "movespeed": 75,
      "skilldamagepercent": 0.075,
      "passive": [
        "On attack, leaves a Mark",
        "Mark spawns from a random direction",
        "Striking the Mark from the same direction will proc and deal (ATK DMG X 3.5) magic damage",
        "Proccing the mark will increase damage gained from this weapon and the proc damage by 10%",
        "You can only assign mark to a single target at a time, and proccing the mark places this effect on 10 second cooldown"
      ],
      "active": [
        "On use, activates Slaughter",
        "Summons 4 marks around target for 10 seconds",
        "If all marks are procced, deals 300000 magic damage and stuns target for 2 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0GS",
    "name": "Divine Slayer",
    "koreanname": "디바인 슬레이어",
    "description": "A sword that has power to cut down divine beings.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "required_by": [
      "Duskblade"
    ],
    "recipe": [
      {
        "Cosmic Reaper": 1
      },
      {
        "The Ender": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9400,
      "agi": 880,
      "hp": 2500,
      "critmultiplier": 0.5,
      "passive": [
        "Every 12th attack activates Divine Slayer",
        "Deals (4500 + MAIN STAT X 7.5) magic damage in an AoE",
        "Deals 20% bonus damage to enemies below 50% HP",
        "On skill cast, activates Transcendence",
        "Increases AGI by 450 and HP regen by (Max HP X 7.5%) for 7.5 seconds",
        "Divine Cut activates every 4th attack",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I02A",
    "name": "Atricia, the Sword of Nightmares",
    "koreanname": "악몽의 검 아트리샤",
    "description": "I shall become your nightmare.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Atricia, the True Sword of Dreams": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 11000,
      "str": 610,
      "agi": 780,
      "skilldamagepercent": 0.1,
      "critchancepercent": 0.1,
      "passive": [
        "On skill cast, empowers next attack with Nightmare Slash",
        "Infuses the sword with Nightmare Energy (stacks up to 20 times; lost when exiting combat)",
        "Deals (3000 + Main Stat X 6) pure damage to target and heals you for (Main Stat X 0.15) HP",
        "Each stack increases the damage above by 1%",
        "If reactivated within 2s, becomes infused with darkness and lands as a critical strike"
      ],
      "active": [
        "On use, activates Dream Ender",
        "Consumes all stacks of Nightmare Energy, dealing (150000 + 25000 X stack) magic damage",
        "Becomes immune to damage and CC for 3 seconds",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I07F",
    "name": "Shadow Waltz",
    "koreanname": "그림자 왈츠",
    "description": "Shadow, my only partner",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Espishu, the Sword of Chaos": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Arcane Core": 1
      },
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 11500,
      "str": 610,
      "agi": 610,
      "mainstat": 340,
      "skilldamagepercent": 0.15,
      "passive": [
        "Chance to activate Umbral Edge on attack",
        "12% chance to deal (STR + AGI) X 6 magic damage to target",
        "Every 4th attack crits and builds a stack of Shadow Waltz (up to 5 stacks)"
      ],
      "active": [
        "On use, activates Shadow Waltz",
        "Consumes all stacks and for (1 X consumed stack) seconds, gains surge in movement speed",
        "Attacks will deal 7500 bonus magic damage and attacks/resulting proc effects deal 12% bonus damage",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0BD",
    "name": "Lightbringer",
    "koreanname": "라이트브링어",
    "description": "Divine blade that lights the path to victory",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 12500,
      "mainstat": 950,
      "skilldamagepercent": 0.2,
      "affinitylightpercent": 0.05,
      "passive": [
        "Chance to activate Divine Strike on attack",
        "10% chance to deal Main Stat X (5 + each stack of Sword of Justice) magic damage to target",
        "Has (100 * skill coefficient)% chance to activate after skill cast"
      ],
      "active": [
        "On use, activates Sword of Justice",
        "Each Sword of Justice summoned deals (Main Stat X 20) magic damage to target",
        "Per sword, Stuns for 1.5s and increases next skill damage against target by 25%",
        "1 sword is charged every 15s, 3 swords on ultimate"
      ]
    }
  },
  {
    "id": "I020",
    "name": "Blazing Sun",
    "koreanname": "블레이징 선",
    "description": "Flame that can never be doused",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 11500,
      "str": 900,
      "skilldamagepercent": 0.15,
      "periodicdamagepercent": 0.1,
      "affinityflamepercent": 0.075,
      "passive": [
        "Empowers next attack with Brilliance of the Sun every 3 seconds",
        "Next attack deals (ATK DMG X 0.3 + STR X 6) magic damage in AoE",
        "Grants Rising Sun, increasing ATK DMG by 200 and STR by 25 (stacks up to 20 times)",
        "Trigger interval is reduced down to 2 seconds based on lost HP"
      ],
      "active": [
        "On use, activates Supernova",
        "Consumes all stacks of Rising Sun and deals STR X (40 + 4 X stack) magic damage in 800 radius",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I01O",
    "name": "Duskblade",
    "koreanname": "황혼검",
    "description": "Dagger that puts end to all living things.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Melee)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Divine Slayer": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 10500,
      "agi": 1100,
      "critmultiplier": 0.6,
      "skilldamagepercent": 0.08,
      "passive": [
        "On basic attack, activates Twilight",
        "Deals (90000 + AGI X 30) magic damage to target and takes 10% bonus skill damage for 4 seconds",
        "Cooldown: 12 seconds, reduced by 1 second on each skill crit"
      ]
    }
  },
  {
    "id": "fgrd",
    "name": "Agnitus, the Bow of Divine Fury",
    "koreanname": "사자의 활 아그니투스",
    "description": "Kneel before the divine power.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Bow)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Pheles, the Bow of God": 1
      },
      {
        "The Ender": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "damage": 10200,
      "agi": 760,
      "attackspeedpercent": 0.4,
      "passive": [
        "On attack, activates Divine Poem",
        "Fires one or two additional arrows dealing Attack Damage X 10% pure damage (averages 1.7 arrows).",
        "These arrows can proc 'on attack' effects",
        "Applies Judgment for 5 seconds, increasing target's damage taken from Divine Poem by 10% for 3 seconds (up to 8 stacks)",
        "Judgment cooldown: 1 second"
      ],
      "spec": [
        "Specialty - Arrow of Judgment",
        "Sniper - Storm Shaft's max stack is increased by 3"
      ]
    }
  },
  {
    "id": "I0AW",
    "name": "Spirit Flame",
    "koreanname": "스피릿 플레임",
    "description": "The flame of life burns within me.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Bow)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Eternal Flame": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "damage": 10700,
      "str": 345,
      "agi": 795,
      "affinityflamepercent": 0.16,
      "passive": [
        "On attack, 15% chance to activate Mark of Flame",
        "Initially deals AGI X 5 magic damage",
        "Afterwards deals AGI X 2.5 magic damage per second and increases magic damage taken by 2.5% for 10 seconds",
        "When Heat stacks are above 10, becomes Spirit Flame, dealing 20% additional damage and increasing your damage dealt to target by 2.5% (becomes different color)",
        "Accumulates Heat while in combat",
        "Every 4 seconds, increases skill damage and flame affinity by 1% (up to 15 stacks)"
      ]
    }
  },
  {
    "id": "I0BG",
    "name": "Abyss Fall",
    "koreanname": "어비스 폴",
    "description": "The abyss shall devour you.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Gun)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Cosmic Star": 1
      },
      {
        "The Ender": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Blood Essence": 1
      }
    ],
    "stats": {
      "damage": 7800,
      "agi": 390,
      "int": 760,
      "attackspeedpercent": 0.3,
      "passive": [
        "Empowers any allies that you heal",
        "Increases skill damage and healing received by 12% for 6 seconds"
      ],
      "active": [
        "On use, activates Abyss Fall",
        "Summons a corrupt star which lands onto target area after 1.5 seconds (350 AoE)",
        "Deals (INT X 15) magic damage and 1 second stun upon impact",
        "Leaves a pool of darkness for 6 seconds that heals allies for (INT X 1)",
        "Pools deal (INT X 2.5) magic damage per second to enemies and increases their damage taken by 4%",
        "Every 10 seconds, increases stack by 1 (up to 3 stacks)"
      ],
      "spec": [
        "Specialty - Abyss Fall",
        "Shooter - Twin Star: Heals allies hit for (INT X 0.5 + Target's Max HP X 15%)",
        "Shooter - Nanomachine Injection: Healing speed increased by 60% and duration increased by 100%; while buff is active, target is immune to debuffs"
      ]
    }
  },
  {
    "id": "I0IK",
    "name": "Final Omen",
    "koreanname": "파이널 오멘",
    "description": "The end is here.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Gun)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Last Word": 1
      },
      {
        "The Ender": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 12400,
      "agi": 895,
      "critmultiplier": 0.4,
      "hp": 2000,
      "passive": [
        "Loads Bullet of Omen every 3 seconds",
        "Deals ((MAIN STAT x 7.5) + (Attack Damage x 1.4)) magic damage per stack",
        "Deals 25% bonus damage to enemies under 50% HP",
        "Stuns for 0.25 seconds",
        "Can charge up to 4 stacks"
      ],
      "spec": [
        "Specialty - Abandon All Hope",
        "Shooter - Casting Break Shot loads one Bullet of Omen",
        "Gunner - Casting Tumble loads one Bullet of Omen"
      ]
    }
  },
  {
    "id": "I09K",
    "name": "Soul Chaser",
    "koreanname": "소울 체이서",
    "description": "A mystic bullet that chases souls",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Gun)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Chrono Chaser": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Ancient Tome": 1
      }
    ],
    "stats": {
      "damage": 10500,
      "agi": 845,
      "int": 425,
      "attackspeedpercent": 0.45,
      "skilldamagepercent": 0.175,
      "passive": [
        "Skill hits accumulates Soul Gauge",
        "Each stack grants 0.07% bonus in damage dealt by skills",
        "Can gain up to 10 stacks per second, and upon reaching 100 stacks, allows usage of empowered active effect regardless of cooldown",
        "Accumulates automatically outside of combat"
      ],
      "active": [
        "On use, activates Soul Chaser",
        "Breaks shield and deals (Attack Damage X 5 + Main Stat X 35) magic damage and stuns for 1 second",
        "Empowered: Deals 25% bonus damage and increases your skill damage dealt to target by 10% for 6 seconds. Consumes all Soul Gauge and becomes unable to accumulate it for 15 seconds.",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "rwat",
    "name": "Fulminata, the Bringer of Storms",
    "koreanname": "천둥의 인도자 풀미나타",
    "description": "Staff that calls down lightning as fierce as god's rage",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "The Ender": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "damage": 10300,
      "int": 840,
      "hp": 2000,
      "skilldamagepercent": 0.05,
      "critmultiplier": 0.30,
      "passive": [
        "On attack, activates Mark of Storm",
        "Attacking the same target 4 times applies Mark of Storm",
        "The next PROC will consume the mark to activate Eye of the Storm",
        "While Eye of the Storm is active, you accumulate 20% charge for each 200 distance moved (up to 400%)",
        "If you attack again with more than 100% charge, consumes Eye of the Storm to release a burst of lightning",
        "Lightning deals magic damage to nearby enemies (can critically strike)",
        "Damage: INT X 7.5 X (100 + charge%), crit is guaranteed",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I005",
    "name": "Endless Snow",
    "koreanname": "엔드리스 스노우",
    "description": "In this endless snow, even the time freezes..",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Triple Snow": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "damage": 9400,
      "int": 880,
      "hp": 2000,
      "affinityiwpercent": 0.12,
      "passive": [
        "On skill cast, empowers next attack with Frozen Tempest",
        "Deals (INT X 5) magic damage to target",
        "If target is not affected by Frozen Tempest, creates a Frozen Tempest at target's location",
        "Frozen Tempest deals (INT X 25) magic damage over 8 seconds to nearby enemies"
      ],
      "active": [
        "On use, activates Dawn of Ice",
        "Deals (INT X 25) magic damage and freezes nearby enemies for 3 seconds",
        "After 4 seconds, ice will shatter",
        "Deals (15% damage dealt to target + INT X 2.5 X # of damage instances to target) magic damage (up to 20 damage instances)",
        "Stuns for 3 seconds",
        "Cooldown: 75 seconds"
      ],
      "spec": [
        "Specialty - Water Mastery",
        "Elementalist - Seal of Water: HP increased by 40%, duration increased by 10 seconds",
        "Elementalist - Water Beam: Range increased by 150, can heal 2 additional allies",
        "Elementalist - Refreshing Well: Radius increased by 250"
      ]
    }
  },
  {
    "id": "I0BF",
    "name": "Gate of Abyss",
    "koreanname": "드래곤의 뿔",
    "description": "Drown in this endless hell.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Soul of Abyss": 1
      },
      {
        "The Ender": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Essence of Earth": 1
      }
    ],
    "stats": {
      "damage": 7600,
      "int": 850,
      "hp": 2500,
      "passive": [
        "On skill cast and healing, grants Power of Abyss",
        "Applied to allies within 375 range on skill cast",
        "Increases skill damage by 14% [Type-B] and HP regen by 105 for 8 seconds",
        "If target is your summon, empowers next attack (cooldown: 1.5s)"
      ],
      "active": [
        "On use, activates Call of Abyss",
        "Increases damage output of heroes by 10% and HP regen by (15% max HP) for 10 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "shea",
    "name": "Akhelius, the Staff of Duality",
    "koreanname": "양면의 지팡이 아켈리우스",
    "description": "The power of fire and water endlessly rotates and repels each other.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Crimson Hatred": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Essence of Earth": 1
      }
    ],
    "stats": {
      "damage": 8400,
      "int": 790,
      "affinityflamepercent": 0.1,
      "affinityiwpercent": 0.1,
      "passive": [
        "On equip, activates Elemental Amplification",
        "If fire affinity is higher, increases fire affinity by 10%",
        "If water affinity is higher, increases water affinity by 10%"
      ],
      "active": [
        "On use, activates Elemental Release",
        "If fire affinity is higher, increases skill damage by (0.50 X fire affinity)% for 10 sconds",
        "If water affinity is higher, summons 3 water spirits every (10 - 0.10 X water affinity) seconds that attaches to nearby allies",
        "Water spirit periodically heal target if target is missing HP, up to INT X 2.5 HP",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I079",
    "name": "Prelude to Demise",
    "koreanname": "종말의 서곡",
    "description": "Embrace the new world.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Armageddon": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 10800,
      "int": 940,
      "skilldamagepercent": 0.13,
      "affinitydarkpercent": 0.06,
      "passive": [
        "On skill cast, activates Nightmare",
        "Increases ATK DMG by 4444 and MP regen by 444 for 4 seconds",
        "Cooldown: 12 seconds"
      ],
      "active": [
        "On use, activates Song of Demise",
        "Deals (ATK DMG X 5 + INT X 30) to nearby enemies",
        "Increases enemy magic damage taken by 13% [Type-A] for 8 seconds",
        "Breaks any shields effects",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I01I",
    "name": "Soul Torch",
    "koreanname": "영혼의 횃불",
    "description": "Ashes to ashes.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Weapon (Staff)",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 7000,
      "int": 1000,
      "attackspeedpercent": 0.35,
      "skilldamagepercent": 0.15,
      "affinityflamepercent": 0.12,
      "affinitydarkpercent": 0.06,
      "passive": [
        "Summons Spirit Flame every 12 seconds",
        "Upon dealing skill periodic damage, deals (INT X 3~5) bonus magic damage (cooldown: 0.75s)",
        "When used, sends a spirit flame to target area to deal (INT X 20) magic damage and amplifying your skill damage against enemies hit by 10% for 4 seconds",
        "Can maintain up to 3 spirits"
      ]
    }
  },
  {
    "id": "I00F",
    "name": "Cage of Twisted Souls",
    "koreanname": "뒤틀린 영혼의 갑주",
    "description": "Death makes me happy.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Hades, the Armor of Despair": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Soul Blossom": 1
      }
    ],
    "stats": {
      "armor": 280,
      "allstat": 300,
      "attackspeedpercent": -0.75,
      "passive": [
        "Increases nearby allies stats by 7%, enemies' damage taken by 4% [Type-B]",
        "Obtains Twisted Souls during combat",
        "You gain 1 soul every 40 seconds",
        "You gain 2 souls when an ally dies",
        "You can keep up to 5 souls, and each soul gives you 2% skill damage/magic defense and 1% HP regen"
      ],
      "active": [
        "On use, activates Lamentation",
        "For 6 seconds, deals 60000 magic damage per second to nearby enemies within 500 radius and increases their damage taken by 8% [Type-B]",
        "Deals 200% bonus damage to non-boss units",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I00G",
    "name": "Plates of Sanguine Fury",
    "koreanname": "핏빛 분노의 갑주",
    "description": "This rage can only be cooled down by your blood.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Plates of Lightning": 1
      },
      {
        "Armor of Grudge": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Soul Blossom": 1,
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "armor": 280,
      "str": 385,
      "agi": 385,
      "skilldamagepercent": 0.12,
      "mdpercent": 0.12,
      "movespeed": 50,
      "passive": [
        "On skill cast, activates Blood Nova",
        "Deals ((STR + AGI) X 4) magic damage to nearby enemies per second",
        "Regenerates max HP X 4% per second",
        "Duration: 3 seconds",
        "Cooldown: 6 seconds"
      ],
      "active": [
        "On use, activates Sanguine Fury",
        "For 8 seconds, gains 8% damage dealt but loses 12% magic defense",
        "Blood Nova will be active for the duration with 100% increased potency",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I019",
    "name": "Sanguis, the Robe of Sacrifice",
    "koreanname": "희생의 로브 상기스",
    "description": "Be purged by blood.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Robe of Storm": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Soul Blossom": 1
      }
    ],
    "stats": {
      "armor": 225,
      "int": 480,
      "movespeed": 50,
      "skilldamagepercent": 0.15,
      "passive": [
        "During combat, activates Ring of Blood",
        "Summons 5 orbs of blood that circle around user",
        "Each collision with enemy deals (5000 + INT X 2) magic damage",
        "If target is a boss unit, increases INT by 10 and skill damage by 0.25% per hit (up to 25 stacks)",
        "Upon reaching max stacks, explodes and deals (INT X 15) magic damage to nearby enemies (1000 range)",
        "Stacks last 6 seconds"
      ],
      "active": [
        "On use, adjusts the radius of Ring of Blood",
        "3 range settings are provided: close, medium, and far (250, 600, 800)"
      ]
    }
  },
  {
    "id": "I0CT",
    "name": "Titan's Plates",
    "koreanname": "거신의 갑주",
    "description": "Armor infused with mighty power",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Felspike Armor": 1
      },
      {
        "Gown of Life": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Aegis of Earth": 1
      },
      {
        "Fragment of Hell": 1
      }
    ],
    "stats": {
      "armor": 275,
      "str": 480,
      "skilldamagepercent": 0.15,
      "passive": [
        "On skill cast, activates Titanic Roar",
        "Deals (15000 + Max HP X 2.5) magic damage to nearby enemies",
        "Grants 450 ATK DMG and 75 STR for 10 seconds (stacks up to 3 times)",
        "Only activates if an enemy is nearby",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Titan's Fury",
        "Clears all debuffs",
        "Activates Titanic Roar 3 times in a row",
        "Each roar deals 150% damage",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0IL",
    "name": "Exitium, the Armor of Ruin",
    "koreanname": "파멸의 갑주 엑시티움",
    "description": "Doomsday, is it the destruction of the world, or its restoration?",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Athanasia, the Armor of the Reaper": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Blood Essence": 1,
        "Soul Blossom": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "armor": 230,
      "str": 190,
      "agi": 440,
      "skilldamagepercent": 0.14,
      "critchancepercent": 0.14,
      "passive": [
        "On attack, applies Mark of Ruin",
        "Increases your damage dealt to target up to 8% based on target's missing HP for 4 seconds",
        "If HP drops below 20%, summons Reaper",
        "Prevents HP from dropping below 1 for 6 seconds",
        "Afterwards, heals you to full and deals (AGI X 50 ~ 125) pure damage to nearby enemies based on their missing HP",
        "Cooldown 60 seconds"
      ],
      "spec": [
        "Specialties - Bringer of Ruin",
        "Martial Artist - Nameless Arts reduces damage taken by 20% while active. Also grants immunity to instant death spell"
      ]
    }
  },
  {
    "id": "I018",
    "name": "Frost Herald's Garment",
    "koreanname": "서리사자의 망토",
    "description": "The world shall be covered with snow and blizzard",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Winter Robe": 1
      },
      {
        "Robe of Archlich": 1
      },
      {
        "Aegis of Earth": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 235,
      "int": 505,
      "hp": 1500,
      "skilldamagepercent": 0.1,
      "mdpercent": 0.1,
      "affinityiwpercent": 0.05,
      "passive": [
        "On equip, enables Frost Aura",
        "Increases damage taken by enemies within 750 range by 3%"
      ],
      "active": [
        "On use, summons Frost Herald",
        "Applies shield absorbing (INT X 8) for 10 seconds",
        "Continuously fires frost missiles at nearby targets",
        "Each missile deals 10000 magic damage and freezing non-boss unit for 0.25 seconds",
        "While active, you can use item up to 3 times to dash",
        "Each dash deals 150000 magic damage and freezing non-boss units for 3 seconds in line",
        "Cooldown: 45 seconds"
      ],
      "spec": [
        "Specialty",
        "Water Mage - Improved Frozen Emotion: Reduces target's damage taken by 12%."
      ]
    }
  },
  {
    "id": "I00Q",
    "name": "Call of Gehenna",
    "koreanname": "게헨나의 부름",
    "description": "Robe infused with power of hell",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Thanatos, the Robe of Hell": 1
      },
      {
        "Mask of Truth": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Aegis of Earth": 1,
        "Essence of Earth": 1
      },
      {
        "Blood Essence": 1
      }
    ],
    "stats": {
      "armor": 220,
      "int": 600,
      "mp": 2000,
      "skilldamagepercent": 0.2,
      "passive": [
        "On skill hit, activates Hellspear",
        "Deals (INT X 15) magic damage in AoE and increases your skill damage dealt to target by 7% for 4 seconds",
        "Cooldown: 10 seconds, reduced by 2 seconds per skill cast (affected by proc coefficient)"
      ],
      "active": [
        "On use, activates Call of Gehenna",
        "For 7 seconds, increases your INT by 400 and reduces cooldown of Hell Spear to 2 seconds",
        "Afterwards, drops a large Hellspear dealing (INT X 75) magic damage",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I0EY",
    "name": "Dread Incarnate",
    "koreanname": "공포의 현신",
    "description": "It makes you tremble with fear.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Voidshard Armor": 1
      },
      {
        "Mask of Truth": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Soul Blossom": 1
      }
    ],
    "stats": {
      "armor": 300,
      "str": 575,
      "skilldamagepercent": 0.15,
      "periodicdamagepercent": 0.1,
      "passive": [
        "On skill cast, builds Dread",
        "Upon reaching 4 stacks, gains 400 STR and 3% HP regen for 5 seconds",
        "Damaging an enemy will summon a tentacle that deals 50000 magic damage in line (cooldown: 5s)",
        "Once it expires, has 5 second cooldown until it can start stacking again"
      ],
      "active": [
        "On use, activates Mayhem",
        "Sets ablaze a large area for 10 seconds, dealing 25000 damage per second",
        "While the user is standing in the area, Dread will be set to max stacks and your skills will deal 10% bonus damage",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I09F",
    "name": "Astral Fury",
    "koreanname": "성운의 분노",
    "description": "Armor blessed with astral power",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Vest of Divine Winds": 1
      },
      {
        "Gown of Life": 1
      },
      {
        "Arcane Core": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "armor": 215,
      "agi": 540,
      "skilldamagepercent": 0.15,
      "mdpercent": 0.12,
      "passive": [
        "On skill cast, activates Astral Fury",
        "Increases AGI by 150 and movement speed for 1.5 seconds",
        "Next 2 attacks strikes 2 additional times for 50% physical damage",
        "On 3rd consecutive proc, increases damage dealt by skills by 5% for 4 seconds and next 3 attacks calls down comets, each dealing 12500 magic damage (can critically strike)",
        "Proc cooldown: 0.5 seconds"
      ]
    }
  },
  {
    "id": "I01S",
    "name": "Divine Aegis",
    "koreanname": "천상의 가호",
    "description": "Robe blessed with divinity",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Armor",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "armor": 230,
      "int": 500,
      "hp": 2500,
      "passive": [
        "Increases nearby allies skill damage by 12% & magic defense by 10%",
        "Heals nearby allies to full",
        "Afterwards heals (INT X 2.5) HP per 0.5 seconds to 3 allies with lowest HP for 6 seconds",
        "Deals (INT X 7.5) pure damage and stuns for 1 second per second for 6 seconds",
        "Prevents HP from dropping below 1",
        "Cooldown: 75 seconds"
      ]
    }
  },
  {
    "id": "I00H",
    "name": "Crescendo of Madness",
    "koreanname": "핏빛 분노의 갑주",
    "description": "Who... am I?",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Eyes of the Watcher": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Soul": 1,
        "Fragment of Hell": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "armor": 140,
      "allstat": 290,
      "skilldamagepercent": 0.125,
      "affinitydarkpercent": 0.075,
      "active": [
        "On use, summons Shade of Madness",
        "Consumes max HP X 10% to spawn a shade (up to 5 shades)",
        "Using it a second time will send all summoned shades towards target",
        "Each shade deals 50000 magic damage",
        "Cooldown: 3 seconds"
      ]
    }
  },
  {
    "id": "I028",
    "name": "Crown of Cleansing",
    "koreanname": "정화의 화관",
    "description": "The more you empty your mind, the fuller it becomes.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Crown of Serenity": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Shining Fragment of Ruins":  2
      }
    ],
    "stats": {
      "armor": 135,
      "allstat": 290,
      "critchancepercent": 0.1,
      "affinitywlpercent": 0.1,
      "affinityiwpercent": 0.06,
      "affinitylightpercent": 0.06,
      "passive": [
        "15% chance to activate Serenity upon healing ally",
        "Increases skill damage by 8% and movement speed by 30",
        "Restores (target's max HP X 2% + INT X 0.15) HP and 1.2% MP per second",
        "Lasts 5 seconds"
      ],
      "active": [
        "On use, activates Cleansing",
        "Clears debuffs from all allies in 900 range and applies Serenity to them for 12 seconds",
        "Cooldown: 90 seconds"
      ],
      "spec": [
        "Specialty - Protector of Wind",
        "Wind Mage - Judgment: Damage increased by 7.5%."
      ]
    }
  },
  {
    "id": "I0D7",
    "name": "Visage of Vengeance",
    "koreanname": "복수자의 형상",
    "description": "Death to all who opposes our creed.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Radiance of the One": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "armor": 160,
      "str": 280,
      "agi": 265,
      "procdamagepercent": 0.1,
      "passive": [
        "On attack, activates Judgment",
        "Deals (Main Stat X 5) pure damage",
        "Gains 1 stack of Vengeance for 5 seconds",
        "At 6 stacks of Vengeance:",
        "→ Judgment deals 15% more damage",
        "→ Increases MAIN STAT by 200 while Vengenace lasts",
        "Cooldown: 0.75 seconds (with precharge mechanism, up to 3 charges)"
      ],
      "active": [
        "On use, activates Anti Magic Shield",
        "Blocks all magic damage for 5 seconds",
        "Cooldown: 60 seconds"
      ]
    }
  },
  {
    "id": "I06H",
    "name": "Horn of Dragon",
    "koreanname": "게이트 오브 어비스",
    "description": "Feel the might of the dragon.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Horn of Demon God": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Essence of Earth": 1,
        "Aegis of Earth": 1
      }
    ],
    "stats": {
      "armor": 120,
      "mainstat": 125,
      "allstat": 190,
      "skilldamagepercent": 0.18,
      "critchancepercent": 0.18,
      "dtpercent": 0.15,
      "passive": [
        "Upon moving 3000 distance, unleashes Dragon's Breath on next attack",
        "Launches a shockwave in a straight path and explodes",
        "Deals (MAIN STAT X 30) pure damage",
        "Increases damage output by 9% for 4 seconds (only for self towards target)",
        "Can activate up to 2 more times within 5 seconds, dealing 20% of original damage and extending debuff by 1 second",
        "Cooldown: 5 seconds"
      ]
    }
  },
  {
    "id": "I0DA",
    "name": "Crown of Cataclysm",
    "koreanname": "대격변의 화관",
    "description": "Chaos! Destruction! Oblivion!",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Crown of Extreme Anger": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Gown of Life": 1
      }
    ],
    "stats": {
      "armor": 145,
      "allstat": 300,
      "skilldamagepercent": 0.10,
      "affinityflamepercent": 0.075,
      "affinityearthpercent": 0.05,
      "active": [
        "On use, activates Cataclysm",
        "Consumes 50% of current HP",
        "For 15 seconds, increases all stats by 1.50% consumed HP (double for main stat) and flame affinity by 10% for 15 seconds",
        "While active, any magic damage you deal will trigger fiery explosion, dealing 10000 magic damage (cd: 0.75s)",
        "On reuse, sends down an inferno in target area, dealing Main Stat X 40 magic damage, increased by 2.5% for each time the proc occurred. Can only be used once per active.",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0AX",
    "name": "Crown of Transcendance",
    "koreanname": "초월의 화관",
    "description": "None can control me.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Crown of Absolute Zero": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Aegis of Earth": 1
      }
    ],
    "stats": {
      "armor": 150,
      "allstat": 315,
      "skilldamagepercent": 0.15,
      "affinityiwpercent": 0.1,
      "passive": [
        "Skill cast has chance to trigger Eclipse",
        "30% chance to activate (affected by proc coefficient)",
        "For 6 seconds, increases all stats by 100 and skill damage by 5%",
        "Active cooldown charges 100% faster while active or out of combat",
        "Cooldown: 12 seconds"
      ],
      "active": [
        "On use, activates Transcendance",
        "For 12 seconds, increases all stats by 200 and skill damage by 15%",
        "Grants CC immunity while active",
        "Overrides Eclipse",
        "Cooldown: 100 seconds"
      ]
    }
  },
  {
    "id": "I01J",
    "name": "Keeper of the Grove",
    "koreanname": "숲의 수호자",
    "description": "Helm infused with spirit of grand nature",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Spirit of Protector": 1
      },
      {
        "Gown of Life": 1
      },
      {
        "Mask of Truth": 1
      },
      {
        "Essence of Earth": 1,
        "Aegis of Earth": 1
      }
    ],
    "stats": {
      "armor": 160,
      "mainstat": 340,
      "hpregen": 100,
      "dtpercent": -0.15,
      "passive": [
        "Creates Lifeseed as you walk around",
        "Seed spawns upon travelling 1500 distance during combat.",
        "Seed will bloom after 5 seconds into a colored fruit which lasts for 30 seconds",
        "Hero can pick it up by getting close to it, gaining different effect based on type of fruit:",
        "Fire: 15% Skill Damage and 7% ATK DMG",
        "Lightning: 15% pure attack speed, 75 movement speed and 0.1x Crit Damage",
        "Earth: Regenerates (Max HP X 4%) per second, grants 20% reduction [Type-A]",
        "Golden: Grants all 3 effects",
        "Spawn Cooldown: 10 seconds"
      ],
      "active": [
        "On use, activates Will of Protector",
        "Grants 40% dr in 1000 radius around you for 10 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I01U",
    "name": "Harvester's Mask",
    "koreanname": "수확자의 가면",
    "description": "Mask imbued with dread",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "armor": 140,
      "agi": 400,
      "hp": 2000,
      "skilldamagepercent": 0.15,
      "critchancepercent": 0.125,
      "passive": [
        "On attack, activates Harvester's Eye",
        "Increases ATK DMG by 20%, crit multplier by 0.30x, AGI by 400 for 7.5 seconds",
        "While active, critical hits grant 1% bonus in skill damage (up to 10%)",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I01V",
    "name": "Diabolic Mask",
    "koreanname": "디아볼릭 마스크",
    "description": "Countless battles with demons, only to become a demon yourself.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "armor": 170,
      "str": 350,
      "agi": 325,
      "procdamagepercent": 0.15,
      "passive": [
        "On attack, activates Diabolic Flame",
        "Deals (Main Stat X 6.5) pure damage to target",
        "Charges one per 0.75s (up to 3 charges)"
      ],
      "active": [
        "On use, activates Diabolic Form",
        "For 6 seconds, becomes immune to magic damage and CC effects",
        "While active, Diabolic Flame's cooldown is reduced to 0.4 seconds",
        "Cooldown: 60s"
      ]
    }
  },
  {
    "id": "I07C",
    "name": "Echoes of the Void",
    "koreanname": "공허의 메아리",
    "description": "When you stare into the abyss, the abyss stares back at you",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "armor": 140,
      "agi": 240,
      "int": 280,
      "affinitydarkpercent": 0.075,
      "passive": [
        "Activates Malefic Vision on skill hit",
        "Activates when landing 3 consecutive skill hits on an enemy",
        "(periodic damage does not count)",
        "Deals 100000 magic damage over 5 seconds and increases damage taken by 6% [Type-B]",
        "Cooldown: 10s"
      ],
      "active": [
        "On use, activates Nether Storm",
        "Deals INT X 50 magic damage to nearby enemies and inflicts them with Malefic Vision",
        "Heals nearby allies for 25%.",
        "Creates a field for 3 seconds, periodically silencing enemies and regenerating allies for 10% HP",
        "Cooldown: 45s"
      ]
    }
  },
  {
    "id": "I01Q",
    "name": "Prophetia, the Forbidden Truth",
    "koreanname": "금단의 진리 프로피티아",
    "description": "Do you have courage to face the Truth?",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Headwear",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "armor": 130,
      "int": 400,
      "mp": 2500,
      "skilldamagepercent": 0.15,
      "passive": [
        "Periodically activates Forbidden Knowledge",
        "1 stack is gained every 3 seconds and on skill cast with (25 X proc coefficient)% chance",
        "Each stack increases INT by 10 (up to 20 stacks)",
        "Random skill is refreshed at 10/20 stacks"
      ],
      "active": [
        "On use, activates Forbidden Truth",
        "Gains 250 INT and 5% SKD for 6 seconds",
        "Consumes all stacks of Forbidden Truth, increasing stat gain by 10% per stack",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I00J",
    "name": "Star of Apotheosis",
    "koreanname": "숭배의 별",
    "description": "Soar high, above the madness of the world.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Heart of Volcano": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Soul Blossom": 1
      }
    ],
    "stats": {
      "allstat": 450,
      "skilldamagepercent": 0.12,
      "active": [
        "On use, activates Apotheosis",
        "Gains 750 all stats for 10 seconds",
        "Upon expiration, triggers an explosion dealing (base damage dealt to boss units X 15%) magic damage to nearby enemies",
        "Can use again to end prematurely",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "mlst",
    "name": "Heirloom of Lazarus",
    "koreanname": "라자루스의 가보",
    "description": "Our pact transcends death.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Ispion, the Runed Ring": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Aegis of Storm": 1
      },
      {
        "Aegis of Flame": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "str": 550,
      "agi": 200,
      "int": 200,
      "active": [
        "On use, activates Crimson Pact",
        "Choose up to 2 allied heroes to link to yourself",
        "Linked allies (and self) receive the following:",
        "(5 + link count X 5)% skill damage",
        "+15% damage reduction [Type-A]",
        "+1% HP regen",
        "Links can be reset by dropping item",
        "On second use (with linked allies), activates Blood Rune",
        "Heals for (target's max HP X 10%) every 1 second for 8 seconds",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialty",
        "Knight - Improved Seal of Mana: Radius is increased by 30%."
      ]
    }
  },
  {
    "id": "I0GR",
    "name": "Ring of Desolate Soul",
    "koreanname": "황폐한 영혼의 반지",
    "description": "Ring infused with twisted souls",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Ring of Frozen Soul": 1
      },
      {
        "Soul Blossom": 1,
        "Blood Essence": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "mainstat": 625,
      "attackspeedpercent": 0.35,
      "skilldamagepercent": 0.20,
      "hpregen": 100,
      "mpregen": 50,
      "active": [
        "On use, activates Desolate Array",
        "Grants immunity to damage, debuffs and CC effects for 3 seconds",
        "Upon expiration, deals (damage received X 15) pure damage in an aoe (up to (max HP x 15))",
        "Cooldown: 60 seconds"
      ],
      "spec": [
        "Specialties - Ring of Frozen Soul",
        "Assassin - Shadow Slash: Damage increased by 50%."
      ]
    }
  },
  {
    "id": "I0DL",
    "name": "Crimson Curse",
    "koreanname": "핏빛 저주",
    "description": "Drenched in blood that cannot be washed away",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Ring of Insanity": 1
      },
      {
        "Grail of Eternity": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Shining Fragment of Ruins": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      }
    ],
    "stats": {
      "str": 455,
      "agi": 425,
      "periodicdamagepercent": 0.35,
      "healreceivedpercent": -0.35,
      "passive": [
        "15% Chance to activate Lunacy on attack",
        "Next 3 attacks, and every 6th attack afterwards (up to 7 attacks total) deals (ATK DMG X 100%) bonus pure damage",
        "For 7.5 seconds, increases ATK DMG by 9000, Main Stat/HP regen by 425",
        "Cooldown: 15 seconds"
      ],
      "active": [
        "On use, activates Gift of the Old One",
        "Consumes 75% of your current HP to activate Lunacy",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I00V",
    "name": "Seal of Corruption",
    "koreanname": "타락의 인장",
    "description": "Countless innocent souls have been sacrificed to create this item.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Seal of Deceiver": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Aegis of Earth": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Soul Blossom": 1
      }
    ],
    "stats": {
      "str": 470,
      "int": 430,
      "skilldamagepercent": 0.12,
      "periodicdamagepercent": 0.15,
      "affinitydarkpercent": 0.04,
      "passive": [
        "During combat, activates Corruption",
        "Increases STR and INT by 4 for each stack",
        "Gains 1 stack every second and for each 25% of max HP you heal yourself",
        "Stacks up to 60 times"
      ],
      "active": [
        "On use, activates Hand of Corruption",
        "Consumes 40 stacks of Corruption",
        "Deals 150000 magic damage and silences enemies in target area for 1.5 seconds",
        "Inflicts target with Corruption for 5 seconds, dealing 50000 magic damage per second",
        "Cooldown: 30 seconds"
      ],
      "spec": [
        "Specialty - Power of Inversion",
        "Dark Knight - Unholy Tempest's damage is increased by 15%, and it always deals its maximum damage regardless of target's HP."
      ]
    }
  },
  {
    "id": "I0DR",
    "name": "Ring of Eternity",
    "koreanname": "영원의 반지",
    "description": "The haven of all desires",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Ring of Fate": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "allstat": 475,
      "skilldamagepercent": 0.14,
      "passive": [
        "If HP drops below 1, activates Fate Reversal",
        "Restore health to full (cooldown: 300 seconds)",
        "On equip, instantly stores 70 stacks",
        "On skill cast during combat, 50% chance to add 1 stack",
        "Also adds 1 stack every second"
      ],
      "active": [
        "On use, activates Time Distortion",
        "Reduce stacks by 1 per second on 50% skill cast (cooldown: 70 seconds)",
        "Refreshes the cooldown of the last used non-ultimate skill",
        "Grants 7% skill damage, 1000 HP/MP regen, and CC immunity for 10 seconds"
      ]
    }
  },
  {
    "id": "I0BE",
    "name": "Heart of Life",
    "koreanname": "영원의 반지",
    "description": "Bloom with life.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Horn of God": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Aegis of Earth": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "int": 535,
      "hp": 3550,
      "skilldamagepercent": 0.1,
      "passive": [
        "Increases ATK DMG by (INT X 0.7) (up to 2400)",
        "Increases ATK SPD by 20% and HP regen by 120",
        "Upon healing allies, amplifies the passive stat bonus given by 50% for 6 seconds (this effect has 12s cd per target)"
      ],
      "active": [
        "On use, activates Flourishing Life",
        "Prevents HP from dropping below 1 for 3 seconds",
        "Restores 12% of max health each second",
        "Cleanses debuffs for duration",
        "Has 2 charges",
        "Cooldown: 20 seconds (to gain a charge)"
      ]
    }
  },
  {
    "id": "tstr",
    "name": "Bell of Divinity",
    "koreanname": "신성의 종",
    "description": "Lord save us",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Ring of Hope": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Ancient Tome": 1
      }
    ],
    "stats": {
      "allstat": 450,
      "hpregen": 200,
      "affinitylightpercent": 0.075,
      "passive": [
        "On direct hit, applies Hope for 12 seconds",
        "Increases skill damage by 10% and main stat by 180"
      ],
      "active": [
        "On use, activates Salvation",
        "Clears debuffs from allies affected by Hope",
        "Heals them for (Max HP X 50%), increases HP regen by 500, and movement speed by 75 for 5 seconds",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I01H",
    "name": "Ring of Malevolence",
    "koreanname": "악의의 반지",
    "description": "You can feel malevolence sharp as dagger",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Emblem of Sacrifice": 1
      },
      {
        "Aegis of Earth": 1
      },
      {
        "Arcane Core": 1
      }
    ],
    "stats": {
      "mainstat": 675,
      "skilldamagepercent": 0.15,
      "critmultiplier": 0.15,
      "movespeed": 50,
      "passive": [
        "Landing skill crit on boss activates Soul Harvest",
        "Deals (MAIN STAT X 15) magic damage and restores 10% HP",
        "Cooldown: 6 seconds"
      ],
      "active": [
        "Activates Malevolence when damaging boss units below 50% HP",
        "Increases total damage by 10% [Type-B] for 5 seconds"
      ]
    }
  },
  {
    "id": "I01M",
    "name": "Ring of Genesis",
    "koreanname": "창세의 반지",
    "description": "Ring imbued with the origin of all living beings",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "allstat": 525,
      "skilldamagepercent": 0.175,
      "passive": [
        "On dealing damage, chance to deal 30% additional damage",
        "On skill cast, 15% chance to increase damage dealt by 7.5% for 5 seconds",
        "On ultimate cast, increases damage dealt by skills by 7.5% for 10 seconds",
        "On being damaged, 10% chance to activate Absolute Protection"
      ]
    }
  },
  {
    "id": "I0A6",
    "name": "Chains of Torment",
    "koreanname": "고통의 사슬",
    "description": "Deep hatred runs within this ring",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "allstat": 480,
      "mp": 6000,
      "skilldamagepercent": 0.12,
      "passive": [
        "Activates Torment on skill hit",
        "Deals 40000 magic damage",
        "If MP is below 50%, restores 12% of max MP",
        "If MP is above 50%, consumes 8% of max MP and adds (10 X consumed MP) damage",
        "Cooldown: 5 seconds"
      ],
      "active": [
        "On use, activates Howling Soul",
        "For next 5 seconds, gains 15% skill damage, 50% pure attack speed",
        "Activates Torment without MP consumption on every 3rd skill hit (up to 5 times)",
        "Cooldown: 15 seconds"
      ]
    }
  },
  {
    "id": "I09C",
    "name": "Soul Fist",
    "koreanname": "고통의 사슬",
    "description": "Deep hatred runs within this ring",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Accessory",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 3600,
      "mainstat": 120,
      "allstat": 360,
      "skilldamagepercent": 0.12,
      "dtpercent": -0.09,
      "passive": [
        "Empowers next attack with Demon's Grasp every 5 seconds",
        "Deals 5 additional attacks with (ATK DMG X 25%) pure damage",
        "Heals you for Max HP X 5%"
      ],
      "active": [
        "On use, activates Soul Resonance",
        "Increases on-hit related damage by 10% for 4 seconds",
        "Soul Grasp will be enabled every 2 seconds",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "I00W",
    "name": "Cape of Insatiable Hunger",
    "koreanname": "끝없는 갈망의 망토",
    "description": "This hunger can only be satisfied with more hunger.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Wings of Blood Lord": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Aegis of Sea": 1
      },
      {
        "Fragment of Hell": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "allstat": 280,
      "hp": 2000,
      "skilldamagepercent": 0.075,
      "movespeed": 50,
      "passive": [
        "Upon moving 400 distance, empowers next attack with Bloody Bite",
        "Deals (3000 + Attack Damage X 50%) pure damage and heals you for max HP X 8%",
        "Increases attack damage by 500, HP regen by 75 for 6 seconds",
        "Can stack infinitely, but each stack beyond first 5 has only 5% effectiveness"
      ],
      "active": [
        "On use, activates Insatiable Hunger",
        "Consumes (current HP X 35%) to empower next 3 attacks within 1.5 seconds with Bloody Bite",
        "Each empowered Bloody Bite will deal bonus 25000 pure damage",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "I00X",
    "name": "Bloodstorm",
    "koreanname": "블러드스톰",
    "description": "Storm!",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Storm": 1
      },
      {
        "Eyes of the Watcher": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Essence of Flame": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1,
        "Fragment of Soul": 1
      },
      {
        "Blood Essence": 1
      }
    ],
    "stats": {
      "damage": 1500,
      "mainstat": 180,
      "allstat": 150,
      "critmultiplier": 0.30,
      "passive": [
        "On skill cast, increases skill damage and crit chance by 5% for 6 seconds. Stacks up to 3 times."
      ],
      "active": [
        "On use, activates Bloodstorm",
        "Becomes invisible (for Assassin, triggers Dark Shroud instead) and gains 200 movement speed for 2 seconds",
        "Next attack will will be empowered, dealing MAIN STAT X 6 X crit multiplier magic damage",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "I012",
    "name": "Guardian Angel",
    "koreanname": "수호천사",
    "description": "Wings that guards over allies",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Wings of Purification": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "Essence of Storm": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Mark of Lord": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Soul Blossom": 1,
        "Crimson Rose": 1
      }
    ],
    "stats": {
      "allstat": 300,
      "mdpercent": 0.12,
      "passive": [
        "On equip, activates Guardian Aura",
        "Increases nearby allies' main stat by 80 + 4% [Type-A]",
        "Heals nearby allies within 500 radius (excluding yourself) by 2000 HP every 3 seconds",
        "(Any affected ally cannot be healed by this effect again within 3 seconds)"
      ],
      "active": [
        "On use, activate Guardian Angel",
        "Become a holy spirit for 4 seconds, taking 75% reduced damage and being able to move quickly while staying afloat",
        "Heals any allies coming into contact (400 radius) by 4000 HP and provides a shield absorbing up to 4000 damage for 5 seconds (once per ally)",
        "Casting any other skills will deactivate the transformation",
        "Cooldown: 40 seconds"
      ]
    }
  },
  {
    "id": "I0EJ",
    "name": "Wings of Cosmos",
    "koreanname": "창조의 날개",
    "description": "Flourish with life.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Archangel Wings": 1
      },
      {
        "Gown of Life": 1
      },
      {
        "Curse of Greed": 1
      },
      {
        "Essence of Sea": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Emblem of Sacrifice": 1
      }
    ],
    "stats": {
      "allstat": 300,
      "mainstat": 100,
      "hpregen": 120,
      "mpregen": 60,
      "skilldamagepercent": 0.175,
      "movespeed": 50,
      "passive": [
        "Chance to activate Rebirth on skill cast",
        "6% chance to activate",
        "After 2 seconds, refreshes cooldown of all non-ultimate skills",
        "Also activates Gift of Life with double stat bonus/duration",
        "Cooldown: 120 seconds "
      ],
      "active": [
        "On use, activates Gift of Life",
        "Increases main stat by 150, skill damage by 5%, and damage reduction by 25% for 6 seconds",
        "Cooldown: 45 seconds"
      ]
    }
  },
  {
    "id": "I0EI",
    "name": "Wings of Sacred Provenance",
    "koreanname": "신성한 기원의 날개",
    "description": "All evil shall be purged by my flame",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Gown of Life": 1
      },
      {
        "Heart of Volcano": 1
      },
      {
        "Blood Essence": 1,
        "Emblem of Sacrifice": 1
      },
      {
        "Fragment of Soul": 1
      },
      {
        "Essence of Earth": 1
      },
      {
        "Shining Fragment of Ruins": 1
      }
    ],
    "stats": {
      "mainstat": 400,
      "hp": 1500,
      "skilldamagepercent": 0.1,
      "affinityflamepercent": 0.05,
      "passive": [
        "Activate Sacred Flame on dealing magic damage",
        "Deals 11000 per arrow (3 arrows) magic damage to and around target (450 AoE)",
        "Gain a stack of Sacred Dawn",
        "Each stack increases skill damage by 1.5% and fire affinity by 0.5% for 6 seconds (up to 5 stacks)",
        "Upon max stacks, the user can no longer refresh stacks",
        "Cooldown: 2 seconds"
      ],
      "active": [
        "On use, activates Blazing Dawn",
        "Deals (66000 X stack) magic damage around user in 750 AoE",
        "User will not gain or lose Sacred Dawn stacks while this is active; all stacks will be lost at end",
        "Lasts 12 seconds",
        "Cooldown: 90 seconds"
      ]
    }
  },
  {
    "id": "I0A2",
    "name": "Thread of Life",
    "koreanname": "생명의 실",
    "description": "It vibrates with life",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Protection of the Fairies": 1
      },
      {
        "Crimson Rose": 1
      },
      {
        "Gown of Life": 1
      },
      {
        "Mask of Truth": 1
      },
      {
        "Arcane Core": 1
      }
    ],
    "stats": {
      "allstat": 420,
      "affinityflamepercent": 0.075,
      "affinityiwpercent": 0.075,
      "affinitywlpercent": 0.075,
      "passive": [
        "Skills have 5% chance to reset cooldown",
        "Increases nearby allies' healing received by 15% [Type-A]"
      ],
      "active": [
        "On use, revives a fallen ally with full HP and MP",
        "Also activates for self on death",
        "Revived ally gains immunity to harmful effects for 5s",
        "Cooldown: 240 seconds"
      ]
    }
  },
  {
    "id": "I076",
    "name": "Blood Devourer",
    "koreanname": "블러드 디바우러",
    "description": "The sky rains with your blood !",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Soul Devourer": 1
      },
      {
        "Blood Essence": 1
      },
      {
        "Twisted Fragment of Ruins": 1
      },
      {
        "Arcane Core": 1
      }
    ],
    "stats": {
      "allstat": 300,
      "mainstat": 250,
      "skilldamagepercent": 0.12,
      "mdpercent": 0.09,
      "passive": [
        "During combat, activates Flowing Blood",
        "Every 5s, heals you for 10% HP & MP, increases main stat by 15, and base attack speed by 1% (15 stacks max)"
      ],
      "active": [
        "On use, activates Soul Devour",
        "Clears all debuffs and heals you for 40% of max HP",
        "Cooldown: 28 seconds"
      ]
    }
  },
  {
    "id": "I0EX",
    "name": "Living Flame",
    "koreanname": "살아있는 불꽃",
    "description": "The flame flickers with life",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Wings of Flame Lord": 1
      },
      {
        "Soul Blossom": 1
      },
      {
        "Ancient Tome": 1
      },
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 4800,
      "str": 360,
      "agi": 360,
      "movespeed": 75,
      "passive": [
        "On attack, activates Burning Soul",
        "Deals (ATK DMG X 1.5 + Main Stat X 10) magic damage to nearby enemies and gains 10% ATK DMG for 5 seconds",
        "Cooldown: 10 seconds"
      ],
      "active": [
        "On use, activates Flame Descent",
        "Jumps and lands in target area, activating Burning Soul that inflicts 200% damage and stuns nearby enemies",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I01N",
    "name": "Soul Breath",
    "koreanname": "영혼의 숨결",
    "description": "Wings of free spirit",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "int": 490,
      "hp": 2000,
      "mp": 5000,
      "skilldamagepercent": 0.2,
      "affinityiwpercent": 0.1,
      "passive": [
        "Summons Soul Fragment on skill cast",
        "Deals (water affinity X (INT X 4)) magic damage per soul (can stack up to 5 souls)"
      ],
      "active": [
        "On ultimate cast, activates Soul Tide",
        "For 8 seconds, your skills will deal 10% more damage",
        "Soul Fragment will spawn every second"
      ]
    }
  },
  {
    "id": "I07D",
    "name": "Wings of the Void",
    "koreanname": "공허의 날개",
    "description": "Only a void vessel can harness this boundless power",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "allstat": 425,
      "skilldamagepercent": 0.12,
      "periodicdamagepercent": 0.15,
      "passive": [
        "On direct skill hit, activates Void Corrosion",
        "Deals 17% of damage dealt over 3 seconds",
        "Increases magic damage taken by target by 6%"
      ],
      "active": [
        "On use, activates Void Explosion",
        "Detonates any active Void Corrosion, dealing (1.15 X remaining damage) magic damage instantly",
        "Cooldown: 30 seconds"
      ]
    }
  },
  {
    "id": "I0EE",
    "name": "Soulstorm",
    "koreanname": "소울스톰",
    "description": "Death is our only respite.",
    "rank": "[Epic]",
    "grade": 5,
    "type": "Wings",
    "color": "733CBE",
    "level": 100,
    "recipe": [
      {
        "Mystical Materials": 1
      }
    ],
    "stats": {
      "damage": 2000,
      "mainstat": 225,
      "allstat": 175,
      "critmultiplier": 0.4,
      "passive": [
        "On skill cast, increases skill damage and crit chance by 6% for 3 seconds",
        "Stacks up to 3 times"
      ],
      "active": [
        "On use, activates Soulstorm",
        "Grants invisibility and 200 movement speed for 2 seconds",
        "Empowers next attack, dealing 40000 + Main Stat X 6 magic damage (lands as critical strike)",
        "Cooldown: 10 seconds"
      ]
    }
  },
  {
    "id": "I0FU",
    "name": "Hydra Icon",
    "koreanname": "하이드라 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Count Icon"
    ],
    "recipe": [
      {
        "Ring of Poison": 1
      },
      {
        "Hydra Poison Tooth": 1
      },
      {
        "Hydra Scale": 1
      }
    ],
    "stats": {
      "allstat": 2
    }
  },
  {
    "id": "I0FV",
    "name": "Count Icon",
    "koreanname": "백작 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Jack Icon"
    ],
    "recipe": [
      {
        "Hydra Icon": 1
      },
      {
        "Bloody Armor": 1
      },
      {
        "Bloody Robe": 1
      },
      {
        "Teperua, the Ring of Blood": 1
      }
    ],
    "stats": {
      "allstat": 3
    }
  },
  {
    "id": "I0FW",
    "name": "Jack Icon",
    "koreanname": "잭 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Mage Lord Icon"
    ],
    "recipe": [
      {
        "Count Icon": 1
      },
      {
        "Jack Pumpkin Helm": 1
      },
      {
        "Jack Pumpkin Hood": 1
      },
      {
        "Fruit Candy Pouch": 1
      },
      {
        "Orichalcum": 1
      }
    ],
    "stats": {
      "allstat": 12
    }
  },
  {
    "id": "I0FX",
    "name": "Mage Lord Icon",
    "koreanname": "마법사 왕 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Everfrost Icon"
    ],
    "recipe": [
      {
        "Jack Icon": 1
      },
      {
        "Robe of the Mage": 1
      },
      {
        "Hood of Mage": 1
      },
      {
        "Ring of Resonance": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "allstat": 12,
      "skilldamagepercent": 0.005
    }
  },
  {
    "id": "I0FY",
    "name": "Wings of Death Icon",
    "koreanname": "데드렉트 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Flame Nightmare Icon"
    ],
    "recipe": [
      {
        "Ragnaar Icon": 1
      },
      {
        "True Dragon Armor Magron": 1
      },
      {
        "True Dragon Helm Agron": 1
      },
      {
        "Dragon Heart": 1
      }
    ],
    "stats": {
      "allstat": 9,
      "hpregen": 6
    }
  },
  {
    "id": "I0G0",
    "name": "Guardian Angel Icon",
    "koreanname": "능천사 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Demon Lord Icon",
      "Archangel Icon"
    ],
    "recipe": [
      {
        "Gatekeeper Icon": 1
      },
      {
        "Karonphniamm, the Holy Sword": 1
      },
      {
        "Klenetia, the Holy Staff": 1
      },
      {
        "Sacred Armor": 1
      },
      {
        "A Page of the Bible": 1
      }
    ],
    "stats": {
      "allstat": 12,
      "drpercent": 0.01
    }
  },
  {
    "id": "I0G1",
    "name": "Corrupt Angel Icon",
    "koreanname": "타천사 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Demon Lord Icon"
    ],
    "recipe": [
      {
        "Giant Golem Icon": 1
      },
      {
        "Eximelia, the Unholy Sword": 1
      },
      {
        "Alkate, the Unholy Bow": 1
      },
      {
        "Dekaros, the Unholy Armor": 1
      },
      {
        "Corrupt Crystal Wings": 1
      },
      {
        "A Page of the Unholy Book": 1
      }
    ],
    "stats": {
      "allstat": 12,
      "critchancepercent": 0.005
    }
  },
  {
    "id": "I0G2",
    "name": "Everfrost Icon",
    "koreanname": "서리한 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Spider Lord Icon"
    ],
    "recipe": [
      {
        "Mage Lord Icon": 1
      },
      {
        "Mana Ancient Icon": 1
      },
      {
        "Robe of Everfrost": 1
      },
      {
        "Helm of Everfrost": 1
      },
      {
        "Frorist": 1
      }
    ],
    "stats": {
      "allstat": 15,
      "skilldamagepercent": 0.005,
      "mp": 120
    }
  },
  {
    "id": "I0G3",
    "name": "Spider Lord Icon",
    "koreanname": "거미 제왕 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Turtle Lord Icon"
    ],
    "recipe": [
      {
        "Everfrost Icon": 1
      },
      {
        "Tentacle Lord Icon": 1
      },
      {
        "Winter's Tear": 1
      },
      {
        "Frostbane": 1
      },
      {
        "Frozen Cobweb": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "allstat": 18,
      "skilldamagepercent": 0.005,
      "mp": 120,
      "mpregen": 3
    }
  },
  {
    "id": "I0G4",
    "name": "Demon Lord Icon",
    "koreanname": "마왕 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Corruptor Icon"
    ],
    "recipe": [
      {
        "Guardian Angel Icon": 1
      },
      {
        "Corrupt Angel Icon": 1
      },
      {
        "Claws of Destruction": 1
      },
      {
        "Bullet of Destruction": 1
      },
      {
        "Dark Matter": 1
      },
      {
        "Dark Wings": 1
      }
    ],
    "stats": {
      "allstat": 18,
      "critchancepercent": 0.005,
      "drpercent": 0.01
    }
  },
  {
    "id": "I0GV",
    "name": "Corruptor Icon",
    "koreanname": "커럽터 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Zombie Lord Icon",
      "Master Icon"
    ],
    "recipe": [
      {
        "Demon Lord Icon": 1
      },
      {
        "Spirit Beast Icon": 1
      },
      {
        "Corruptor": 1
      },
      {
        "Stalker": 1
      },
      {
        "Avenger": 1
      },
      {
        "Chaser": 1
      },
      {
        "Staff of Contagion": 1
      },
      {
        "Skull Seal": 1
      },
      {
        "Potion of Corruption": 1
      },
      {
        "Essence of Corruption": 1
      }
    ],
    "stats": {
      "allstat": 20,
      "attackspeedpercent": 0.02,
      "critchancepercent": 0.01,
      "drpercent": 0.01
    }
  },
  {
    "id": "I0GT",
    "name": "Turtle Lord Icon",
    "koreanname": "터틀 로드 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Ancient Ent Icon",
      "Master Icon"
    ],
    "recipe": [
      {
        "Spider Lord Icon": 1
      },
      {
        "Water Cannon": 1
      },
      {
        "Tunic of Subtlety": 1
      },
      {
        "Scale Protector": 1
      },
      {
        "Purified Water": 1
      },
      {
        "Oath of Courage": 1
      },
      {
        "Pure Steel": 1
      },
      {
        "Mark of Storm": 1
      },
      {
        "Mana Orb": 1
      }
    ],
    "stats": {
      "allstat": 20,
      "skilldamagepercent": 0.01,
      "mp": 120,
      "mpregen": 3
    }
  },
  {
    "id": "I0GU",
    "name": "Flame Nightmare Icon",
    "koreanname": "나이트메어 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Skeletal King Icon",
      "Master Icon"
    ],
    "recipe": [
      {
        "Mad Clown Icon": 1
      },
      {
        "Wings of Death Icon": 1
      },
      {
        "Hatred": 1
      },
      {
        "Inferno": 1
      },
      {
        "Flameshard Armor": 1
      },
      {
        "Ring of Nightmare": 1
      },
      {
        "Spirit of Nightmare": 1
      },
      {
        "Crown of Fervor": 1
      },
      {
        "Essence of Anger": 1
      },
      {
        "Mad Symbol": 1
      },
      {
        "Soul Stone": 1
      }
    ],
    "stats": {
      "allstat": 20,
      "hp": 180,
      "hpregen": 1.5
    }
  },
  {
    "id": "I0M8",
    "name": "Skeletal King Icon",
    "koreanname": "해골 왕 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Flame Nightmare Icon": 1
      },
      {
        "Death Scythe": 1
      },
      {
        "Staff of Souls": 1
      },
      {
        "Robe of the Reaper": 1
      },
      {
        "Brooch of Darkness": 1
      },
      {
        "Bone Necklace": 1
      },
      {
        "Spirit of Abyss": 1
      },
      {
        "Orb of Oblivion": 1
      },
      {
        "Fragment of Oblivion": 1
      },
      {
        "Skeleton Bone": 1
      }
    ],
    "stats": {
      "allstat": 30,
      "hp": 270,
      "hpregen": 7.5
    }
  },
  {
    "id": "I0M9",
    "name": "Zombie Lord Icon",
    "koreanname": "좀비 로드 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Corruptor Icon": 1
      },
      {
        "Parasitic Staff": 1
      },
      {
        "Hood of the Fallen": 1
      },
      {
        "Shroud of Perseverance": 1
      },
      {
        "Heart of Fire": 1
      },
      {
        "Dark Crystal": 1
      },
      {
        "Proof of Purification": 1
      }
    ],
    "stats": {
      "allstat": 30,
      "attackspeedpercent": 0.05,
      "critchancepercent": 0.02,
      "drpercent": 0.02
    }
  },
  {
    "id": "I0MA",
    "name": "Ancient Ent Icon",
    "koreanname": "에인션트 엔트 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Turtle Lord Icon": 1
      },
      {
        "Embrace of Nature": 1
      },
      {
        "Purified Water of Nature": 1
      },
      {
        "Fragment of the Wind": 1
      },
      {
        "Griseus, the Sword of Protection": 1
      },
      {
        "Ring of the Storm": 1
      },
      {
        "Spirit Orb": 1
      }
    ],
    "stats": {
      "allstat": 30,
      "skilldamagepercent": 0.015,
      "mp": 180,
      "mpregen": 6
    }
  },
  {
    "id": "I0MB",
    "name": "Archangel Icon",
    "koreanname": "주천사 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Guardian Angel Icon": 1
      },
      {
        "Guardian of the Skies": 1
      },
      {
        "Steel of God": 1
      },
      {
        "Essence of Light": 1
      },
      {
        "God's Page": 1
      }
    ],
    "stats": {
      "allstat": 35,
      "drpercent": 0.02
    }
  },
  {
    "id": "I0MC",
    "name": "Shadow Dragon Icon",
    "koreanname": "암흑룡 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Bone Dragon Icon": 1
      },
      {
        "Levante, the Sword of Love and Hate": 1
      },
      {
        "Draconic Skin Rusalka": 1
      },
      {
        "Nephthys, the Engraved Ring": 1
      },
      {
        "Essence of Darkness": 1
      },
      {
        "Antimatter": 1
      },
      {
        "Frozen Debris": 1
      }
    ],
    "stats": {
      "damagedealtpercent": 0.01
    }
  },
  {
    "id": "I0GW",
    "name": "Master Icon",
    "koreanname": "마스터 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Grandmaster Icon"
    ],
    "recipe": [
      {
        "Corruptor Icon": 1
      },
      {
        "Turtle Lord Icon": 1
      },
      {
        "Flame Nightmare Icon": 1
      },
      {
        "Lucky Acorn": 1
      }
    ],
    "stats": {
      "allstat": 25,
      "attackspeedpercent": 0.02,
      "skilldamagepercent": 0.01,
      "critchancepercent": 0.01,
      "drpercent": 0.01,
      "hp": 15,
      "mp": 15,
      "hpregen": 5,
      "mpregen": 5
    }
  },
  {
    "id": "I0MD",
    "name": "Grandmaster Icon",
    "koreanname": "그랜드마스터 아이콘",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "required_by": [
      "Legend Icon"
    ],
    "recipe": [
      {
        "Master Icon": 1
      },
      {
        "Skeletal King Icon": 1
      },
      {
        "Zombie Lord Icon": 1
      },
      {
        "Ancient Ent Icon": 1
      },
      {
        "Archangel Icon": 1
      },
      {
        "Shadow Dragon Icon": 1
      }
    ],
    "stats": {
      "allstat": 35,
      "attackspeedpercent": 0.05,
      "skilldamagepercent": 0.02,
      "critchancepercent": 0.02,
      "drpercent": 0.02,
      "damagedealtpercent": 0.02,
      "hp": 250,
      "mp": 250,
      "hpregen": 7.5,
      "mpregen": 7.5,
      "passive": [
        "Deltirama ~ Gnosis personal loot drop rate increased by 50%"
      ]
    }
  },
  {
    "id": "I02T",
    "name": "Legend Icon",
    "koreanname": "레전드 아이콘",
    "description": "!Warning! Please save a replay of this game.",
    "rank": "none",
    "grade": 0,
    "type": "Icon",
    "color": "008000",
    "recipe": [
      {
        "Grandmaster Icon": 1
      },
      {
        "Death Fiend Icon": 1
      },
      {
        "Valtora Icon": 1
      },
      {
        "Ifrit Icon": 1
      },
      {
        "Nereid Icon": 1
      },
      {
        "Agareth Icon": 1
      }
    ],
    "stats": {
      "allstat": 45,
      "attackspeedpercent": 0.05,
      "critchancepercent": 0.025,
      "dtpercent": -0.025,
      "skilldamagepercent": 0.025,
      "damagedealtpercent": 0.025,
      "hp": 300,
      "mp": 300,
      "hpregen": 10,
      "mpregen": 10,
      "passive": [
        "Deltirama ~ Alteia personal loot drop rate increased by 50%",
        "~5% Chance to activate Elemental Fury on attack and skill cast",
        "Requires 1 second cooldown interval for checking the proc",
        "Increases main stat by 2% for 30 seconds"
      ]
    }
  },
  {
    "id": "I0HJ",
    "name": "Glasses",
    "koreanname": "안경",
    "rank": "none",
    "grade": 0,
    "type": "Misc",
    "color": "D8C1BA",
    "recipe": [
      {
        "Orichalcum": 1
      },
      {
        "Mithril": 1
      },
      {
        "Adamantium": 1
      }
    ],
    "stats": {
      "passive": [
        "Your night vision becomes better."
      ]
    }
  },
  {
    "id": "I05X",
    "name": "Mithril Pickaxe",
    "koreanname": "미스릴 곡괭이",
    "rank": "[Epic]",
    "grade": 1,
    "type": "Pickaxe",
    "color": "C39BE1",
    "required_by": [
      "Abyssal Pickaxe"
    ],
    "recipe": [
      {
        "Pickaxe": 1
      },
      {
        "Mithril": 1
      }
    ],
    "stats": {
      "active": [
        "Mining Speed: Once every 8 seconds"
      ]
    }
  },
  {
    "id": "I0BI",
    "name": "Abyssal Pickaxe",
    "koreanname": "심연의 곡괭이",
    "rank": "[Epic]",
    "grade": 2,
    "type": "Pickaxe",
    "color": "9BE1E1",
    "required_by": [
      "Chaos Pickaxe"
    ],
    "recipe": [
      {
        "Mithril Pickaxe": 1
      },
      {
        "Dark Matter": 1
      }
    ],
    "stats": {
      "active": [
        "Mining Speed: Once every 6 seconds",
        "Can mine Giant Deposit"
      ]
    }
  },
  {
    "id": "I0OO",
    "name": "Chaos Pickaxe",
    "koreanname": "혼돈의 곡괭이",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Pickaxe",
    "color": "99FF99",
    "recipe": [
      {
        "Abyssal Pickaxe": 1
      },
      {
        "Fragment of Chaos": 1
      },
      {
        "Shining Fragment of Ruins": 2
      }
    ],
    "stats": {
      "active": [
        "Mining Speed: Once every 4 seconds",
        "Can mine Giant Deposit and Chaos Deposit"
      ]
    }
  },
  {
    "id": "I0HN",
    "name": "Wing Frame",
    "koreanname": "날개 틀",
    "rank": "[Epic]",
    "grade": 4,
    "type": "Material",
    "color": "FFFFFF",
    "notes": [
      "General Recipe: Wing + Wing Frame"
    ]
  }
];

export default items;