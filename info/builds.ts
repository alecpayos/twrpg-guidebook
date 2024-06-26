import { Build } from "types";

const heroBuilds: Build[] = [
    {
        "for": "Berserker",
        "type": "Early Endgame",
        "order": 1,
        "stat": "STR",
        "version": "60z",
        "items": {
            "Chaos": [],
            "Radiance of the One": [],
            "Ring of Insanity": [
                "Ring of Fate"
            ],
            "VoidShard Armor": [
                "Bloodseeker Plates",
                "Felspike Armor"
            ],
            "Cape of Deep Abyss": []
        }
    },
    {
        "for": "Berserker",
        "type": "Endgame",
        "order": 2,
        "stat": "STR",
        "version": "60z",
        "items": {
            "Heartrender": [],
            "Visage of Vengeance": [],
            "Crimson Curse": [],
            "Titan's Plates": [
                "Plates of Sanguine Fury"
            ],
            "Wings of Sacred Provenance": []
        }
    },
    {
        "for": "Crusader",
        "type": "Early Game",
        "order": 1,
        "stat": "STR",
        "version": "60g",
        "description": [
            "Just equip anything you found the best"
        ],
        "items": {
            "Bahanar, the Sword of Illusion": [
                "Trident"
            ],
            "Helm of Battle": [],
            "Ring of Intrusion": [],
            "Purelight Armor": [],
            "Corrupt Crystal Wings": [
                "Wings of Purification"
            ]
        }
    },
    {
        "for": "Crusader",
        "type": "Coin Gear",
        "order": 2,
        "stat": "STR",
        "version": "60v",
        "description": [
            "Coin Gear",
            "Optional gears will be used later on but not worth to use them now, gather them first."
        ],
        "items": {
            "Bahanar, the True Sword of Illusion": [
                "Aglaia, the Spear of Heavenly Flows"
            ],
            "Horn of Devil": [
                "Archangel Halo",
                "Helm of Battle"
            ],
            "Ring of Intrusion": [
                "Heart of Ifrit",
                "Purefrost Gauntlet"
            ],
            "Flameshard Armor": [
                "Purelight Armor",
                "Reactive Armor"
            ],
            "Corrupt Crystal Wings": [
                "Cape of Corrupt Flame"
            ]
        }
    },
    {
        "for": "Crusader",
        "type": "Shadow Dragon Gear",
        "order": 3,
        "stat": "STR",
        "version": "60v",
        "description": [
            "Optional gears will be used later on but not worth to use them now, gather them first."
        ],
        "items": {
            "Meacronacer, the Sword of Thousand Illusions": [
                "Tiberius, the Spear of Lightning",
                "Aglaia, the Spear of Heavenly Flows"
            ],
            "Halo of Judgment": [
                "Horn of Devil"
            ],
            "Ring of Time": [
                "Heart of Ifrit",
                "Purefrost Gauntlet"
            ],
            "Requiem, the Armor of Lamentation": [
                "frostshard Armor",
                "Hellspike Armor"
            ],
            "Pure Crystal Wings": []
        }
    },
    {
        "for": "Crusader",
        "type": "Tower Gear",
        "order": 4,
        "stat": "STR",
        "version": "64f2",
        "items": {
            "Splitting of the Sky and Earth": [],
            "Horn of Lightning God": [],
            "Heaven's fist": [],
            "Felspike Armor": [],
            "Archangel Wings": []
        }
    },
    {
        "for": "Crusader",
        "type": "Agareth Gear",
        "order": 5,
        "stat": "STR",
        "version": "64f2",
        "description": [
            "Just don't die - Lch#3181",
            "Why would you use defensive gear in endgame, get supports.",
            "Weapon - Astra > Splitting > The Ender > Meacronacer",
            "Voidshard Armor pause is stupidly strong in duke, but only 1 works in a team"
        ],
        "items": {
            "Astra, the Sword of Moonlight": [],
            "Horn of Demon God": [],
            "Demonic Fist": [
                "Ring of Frozen Soul"
            ],
            "Felspike Armor": [
                "Voidshard Armor"
            ],
            "Archangel Wings": []
        }
    },
    {
        "for": "Crusader",
        "type": "Arcana Gear",
        "order": 6,
        "stat": "STR",
        "version": "64f2",
        "guidelink": [
            "https://i.imgflip.com/5sgfje.jpg"
        ],
        "description": [
            "Why are you even reading this?",
            "Go Farm Duke and Gaia",
            "Weapon in dummy - Spear of Judgment > All",
            "Weapon in real fight - Heartrender only and only"
        ],
        "items": {
            "Heartrender": [
                "Spear of Judgment"
            ],
            "Horn of Dragon": [],
            "Demonic Fist": [
                "Heirloom of Lazarus",
                "Ring of Desolate Soul"
            ],
            "Titan's Plates": [
                "Dread Incarnate"
            ],
            "Wings of Sacred Provenance": [
                "Wings of Cosmos"
            ]
        }
    },
    {
        "for": "Dark Knight",
        "type": "Burst damage",
        "order": 1,
        "stat": "STR",
        "version": "60o",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=4399"
        ],
        "description": [
            "Use Crown of Extreme Anger Path until Crescendo",
            "Wings of Sacred Provenance give stable damage, while Wings of Cosmos passive is pure random",
            "If Cage isn't needed in run, use Titan's Plates for higher damage"
        ],
        "items": {
            "Spear of Judgment": [],
            "Crescendo of Madness": [
                "Crown of Extreme Anger"
            ],
            "Seal of Corruption": [],
            "Cage of Twisted Souls": [
                "Titan's Plates"
            ],
            "Wings of Sacred Provenance": [
                "Wings of Cosmos"
            ]
        }
    },
    {
        "for": "Dark Knight",
        "type": "Debuff-Support",
        "order": 2,
        "stat": "INT",
        "version": "60o",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=4399"
        ],
        "description": [
            "Main items for getting the most out of R - E while maintaining a good presence.",
            "Use Harmonia when your team really need healers or if you want to use Heart of Life",
            "Swap Helmets and Rings for situanionary, dont overlap items with teammates",
            "Heartrender, Heirloom, Soul devourer so much valuable for teams. Just use them."
        ],
        "items": {
            "Armageddon": [
                "Heartrender",
                "Harmonia, the Sparkle of Life"
            ],
            "Prophetia, the Origin of Knowledge": [
                "Hood of Apocalypse",
                "Eye of the Flame Lord"
            ],
            "Ring of Despair": [
                "Heirloom of Lazarus",
                "Nebula Rose"
            ],
            "Cage of Twisted Souls": [],
            "Wings of Immortal": [
                "Soul Devourer",
                "Brave Heart"
            ]
        }
    },
    {
        "for": "Fighter",
        "type": "Burst T Combo",
        "order": 1,
        "stat": "STR",
        "version": "61z2",
        "guidelink": [
            "https://www.twrpg.com/viewtopic.php?f=4&t=6999&p=34467#p34467"
        ],
        "items": {
            "Spear of Judgment": [
                "Astra, the Sword of Moonlight"
            ],
            "Horn of Dragon": [],
            "Crimson Curse": [
                "Ring of Desolate Soul"
            ],
            "Titan's Plates": [],
            "Cape of Insatiable Hunger": [
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Knight",
        "type": "Support",
        "order": 1,
        "stat": "STR",
        "version": "44b",
        "description": [
            "Use Hades if no one else on your team has it for debuffs"
        ],
        "items": {
            "Eternal Winter": [],
            "Spirit of Protector": [],
            "Heirloom of Lazarus": [],
            "Harmony of Sky and Earth": [
                "Cage of Twisted Souls"
            ],
            "Brave Heart": [
                "Protection of the Fairies"
            ]
        }
    },
    {
        "for": "Knight",
        "type": "DPS",
        "order": 2,
        "stat": "INT",
        "version": "61t",
        "description": [
            "Very squishy, only recommended with prior boss knowledge",
            "Main items are used for max DPS, alt items trade DPS for either burst/survivability/utility"
        ],
        "items": {
            "Heartrender": [
                "The Ender"
            ],
            "Horn of Dragon": [
                "Crown of Transcendance",
                "Crescendo of Madness"
            ],
            "Demonic Fist": [
                "Star of Apotheosis"
            ],
            "Vest of Divine Winds": [],
            "Wings of Frost Lord": [
                "Soul Devourer",
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Knight",
        "type": "Burst",
        "order": 3,
        "stat": "STR",
        "version": "62t2",
        "description": [
            "This build is not the best build available for knight since INT Builds are dominating atm, but does a great burst and does decent dps.",
            "Takes a while to get used with caedis mechanics and double E procs 3 (4 if lucky) marks at once."
        ],
        "items": {
            "Caedis, the Sword of Slaughter": [],
            "Crown of Transcendance": [],
            "Crimson Curse": [],
            "Astral Fury": [],
            "Cape of Deep Abyss": []
        }
    },
    {
        "for": "Lancer",
        "type": "DPS/Burst",
        "order": 1,
        "stat": "STR",
        "version": "62w",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=3341"
        ],
        "description": [
            "Use alternate ring and its downgrades until you can build Ring of Malevolence"
        ],
        "items": {
            "Spear of Judgment": [
                "Heartrender"
            ],
            "Horn of Dragon": [],
            "Ring of Malevolence": [
                "Ring of Desolate Soul"
            ],
            "Titan's Plates": [
                "Plates of Sanguine Fury"
            ],
            "Bloodstorm": []
        }
    },
    {
        "for": "Lancer",
        "type": "DPS/Burst (more AA oriented)",
        "order": 2,
        "stat": "STR",
        "version": "57b",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=3341"
        ],
        "items": {
            "Astra, The Sword of Moonlight": [],
            "Horn of Demon God": [],
            "Demonic Fist": [],
            "Plates of Sanguine Fury": [
                "Felspike Armor"
            ],
            "Bloodstorm": [
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Merchant",
        "type": "Support",
        "order": 1,
        "stat": "STR",
        "version": "62z4",
        "description": [
            "If your team lacks cleanse you can use Bag of Universe"
        ],
        "items": {
            "Bag of All Evils": [
                "Bag of Universe"
            ],
            "Keeper of the Grove": [
                "Eye of the Flame Lord"
            ],
            "Heirloom of Lazarus": [
                "Ring Of Eternity"
            ],
            "Cage of Twisted Souls": [
                "Harmony of Sky and Earth"
            ],
            "Thread of Life": [
                "Guardian Angel",
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Merchant",
        "type": "Damage",
        "order": 2,
        "stat": "STR",
        "version": "62z4",
        "items": {
            "Bag of Despair": [
                "Bag of Universe"
            ],
            "Crown of Cataclysm": [],
            "Star of Apotheosis": [
                "Ring of Eternity"
            ],
            "Dread Incarnate": [
                "Plates of Sanguine Fury"
            ],
            "Wings of Sacred Provenance ": []
        }
    },
    {
        "for": "Paladin",
        "type": "DPS",
        "order": 1,
        "stat": "STR",
        "version": "64g3",
        "description": [
            "Use The Ender/Calamity till Caedis",
            "Bloodstorm is main wing for now, may replace in the future"
        ],
        "items": {
            "Caedis, the Sword of Slaughter": [],
            "Horn of Dragon": [],
            "Demonic Fist": [],
            "Titan's Plates": [],
            "Bloodstorm": []
        }
    },
    {
        "for": "Paladin",
        "type": "Support",
        "order": 2,
        "stat": "INT",
        "version": "62r",
        "items": {
            "Heaven's Door": [],
            "Keeper of the Grove": [
                "Crown of Cleansing",
                "Eye of the Flame Lord"
            ],
            "Bell of Divinity": [
                "Heirloom of Lazarus"
            ],
            "Cage of Twisted Souls": [
                "Jupiter the Robe of Heavens"
            ],
            "Thread of Life": [
                "Guardian Angel",
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Assassin",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "60o",
        "description": [
            "Minor",
            "Bracket items are fillers."
        ],
        "items": {
            "Asmodeus, the Archdevil's Greatsword": [],
            "Grim Visage": [],
            "Demonis, the Devil Lord's Ring": [],
            "Cruoris, the Armor of Blood": [],
            "Slayer Boots": [
                "Corrupt Crystal Wings"
            ]
        }
    },
    {
        "for": "Assassin",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "60o",
        "description": [
            "Coins",
            "Bracket items are fillers."
        ],
        "items": {
            "Avenger": [
                "Asmodeus, the Archdevil's Greatsword"
            ],
            "Grim Visage": [],
            "Ring of the Reaper": [
                "Latea, the Ring of Chaos"
            ],
            "Cruoris, the Armor of Blood": [],
            "Wings of Fury": []
        }
    },
    {
        "for": "Assassin",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "60o",
        "description": [
            "SK ~ SD",
            "Farm the items in the bracket first as they are easier to get",
            "Stick to the main gear once it's crafted",
            "Swap your armor based on what you need. Benedict for burst and Grandine for survivability."
        ],
        "items": {
            "Crimson Reaper": [
                "Death Scythe",
                "Laktrisha, the Illusional Sword of Poison"
            ],
            "Eye of Wallachia": [
                "Dragon Mask"
            ],
            "Cold Ring of Death": [
                "Brooch of Darkness"
            ],
            "Benedict, the Crimson Armor of Blood": [
                "Grandine, the Plates of Wraith"
            ],
            "Wings of Slayer": [
                "Pure Crystal Wings"
            ]
        }
    },
    {
        "for": "Assassin",
        "type": "Endgame",
        "order": 4,
        "stat": "AGI",
        "version": "60o",
        "description": [
            "DF ~ Aga",
            "Mask of Demigod should only be crafted after Nevedium and Ring of Frozen Soul have been completed",
            "Swap your armor based on what you need. Nevedium for burst and Athanasia for survivability."
        ],
        "items": {
            "Cosmic Reaper": [],
            "Eye of the Reaper": [
                "Mask of Demigod"
            ],
            "Ring of Frozen Soul": [],
            "Nevedium, the Armor of Demonblood": [
                "Athanasia, the Armor of the Reaper"
            ],
            "Storm": []
        }
    },
    {
        "for": "Assassin",
        "type": "Omega Endgame",
        "order": 5,
        "stat": "AGI",
        "version": "62z3",
        "items": {
            "Divine Slayer": [],
            "Eye of the Reaper": [
                "Mask of Demigod"
            ],
            "Ring of Malevolence": [
                "Ring of Desolate Soul"
            ],
            "Astral Fury": [
                "Exitium, the Armor of Ruin"
            ],
            "Bloodstorm": []
        }
    },
    {
        "for": "Bow Master",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "60z",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Frostbane": [],
            "Grim Visage": [],
            "Demonis, the Devil Lord's Ring": [],
            "Vest of Protection": [],
            "Slayer Boots": []
        }
    },
    {
        "for": "Bow Master",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "60z",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Flame Explosion": [],
            "Grim Visage": [],
            "Latea, the Ring of Chaos": [],
            "Vest of Cyclone": [],
            "Wings of Fury": []
        }
    },
    {
        "for": "Bow Master",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "60z",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Everfrostbane": [
                "Hellflame"
            ],
            "Eye of Wallachia": [],
            "Cold Ring of Death": [],
            "Vest of Storm": [],
            "Wings of Slayer": []
        }
    },
    {
        "for": "Bow Master",
        "type": "End Game - Agnitus",
        "order": 4,
        "stat": "AGI",
        "version": "60z",
        "description": [
            "Current BIS build. Focused heavily around DPS and is really good at it.",
            "Must follow Ring of Insanity path for ring and Storm Path for wings."
        ],
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Agnitus, the Bow of Divine Fury": [],
            "Eye of the Reaper": [],
            "Crimson Curse": [],
            "Vest of Divine Winds": [],
            "Bloodstorm": []
        }
    },
    {
        "for": "Bow Master",
        "type": "End Game - Soulbane",
        "order": 5,
        "stat": "AGI",
        "version": "60z",
        "description": [
            "Good for short and fast fights, good for burst but mediocre for dps"
        ],
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Soulbane": [],
            "Eye of the Reaper": [],
            "Ring of Frozen Soul": [
                "Ring of the One"
            ],
            "Vest of Divine Winds": [],
            "Wings of Night Lord": []
        }
    },
    {
        "for": "Bow Master",
        "type": "End Game - Eternal Flame",
        "order": 6,
        "stat": "AGI",
        "version": "60z",
        "description": [
            "In longer fights like Gaia, Duke or very slow Agareth Runs it is better than Soulbane build and should be preferred over Soulbane build"
        ],
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6892"
        ],
        "items": {
            "Eternal Flame": [],
            "Eye of the Reaper": [],
            "Ring of Frozen Soul": [
                "Ring of the One"
            ],
            "Vest of Divine Winds": [],
            "Wings of Night Lord": []
        }
    },
    {
        "for": "Gunner",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "Minor Bosses",
            "Item in brackets are fillers."
        ],
        "items": {
            "Bullet of Ruin": [],
            "Grim Visage": [
                "Archangel Halo",
                "Helm of Battle"
            ],
            "Demonis, the Devil Lord's Ring": [],
            "Vest of Protection": [],
            "Slayer Boots": []
        }
    },
    {
        "for": "Gunner",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "Coin Bosses",
            "Item in brackets are fillers."
        ],
        "items": {
            "Bullet of Ruin": [],
            "Grim Visage": [
                "Archangel Halo",
                "Helm of Battle"
            ],
            "Ring of Nightmare": [
                "Ring of the Reaper"
            ],
            "Vest of Cyclone": [],
            "Wanderer's Cape": []
        }
    },
    {
        "for": "Gunner",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "SK ~ SD",
            "Swap your armor based on what you need. Vest of Storm for damage and Grandine for survivability."
        ],
        "items": {
            "Punisher": [],
            "Eye of Wallachia": [
                "Halo of Judgment",
                "Dragon Mask"
            ],
            "Ring of Strike": [
                "Cold Ring of Death"
            ],
            "Vest of Storm": [
                "Grandine, the Plates of Wraith"
            ],
            "Wings of Phoenix": []
        }
    },
    {
        "for": "Gunner",
        "type": "Endgame",
        "order": 4,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "DF ~ Aga",
            "Swap your armor based on what you need. Vest of Divine Winds for damage and Athanasia for survivability."
        ],
        "items": {
            "Last Word": [],
            "Eye of the Reaper": [
                "Mask of Demigod"
            ],
            "Ring of Insanity": [],
            "Vest of Divine Winds": [
                "Athanasia, the Armor of the Reaper"
            ],
            "Storm": [
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Gunner",
        "type": "Omega Endgame",
        "order": 5,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "Duke ~ TBA",
            "Butts -Mii",
            "Swap your armor based on what you need. Vest of Divine Winds for damage and Athanasia for survivability."
        ],
        "items": {
            "Last Word": [],
            "Eye of the Reaper": [
                "Mask of Demigod"
            ],
            "Ring of Insanity": [],
            "Vest of Divine Winds": [
                "Athanasia, the Armor of the Reaper"
            ],
            "Bloodstorm": [
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Hermit",
        "type": "STR Full Support",
        "order": 1,
        "stat": "STR",
        "version": "59z",
        "guidelink": [
            "https://docs.google.com/document/d/1xJGcGKLWDBu8iDUAcjknk1QRK34MYfPMnFRphjuLo3g/edit?usp=sharing"
        ],
        "description": [
            "For more heals, look at the INT Full Support build",
            "If your team uses serenity, then you can switch to another helm",
            "Use deep abyss as a fill in"
        ],
        "items": {
            "Eternal Winter": [
                "Heaven's Door"
            ],
            "Crown of Cleansing": [
                "Spirit of Protector"
            ],
            "Ring of Hope": [],
            "Harmony of Sky and Earth": [
                "Cage of Twisted Souls"
            ],
            "Protection of the Fairies": [
                "Cape of Deep Abyss",
                "Guardian Angel"
            ]
        }
    },
    {
        "for": "Hermit",
        "type": "INT Full Support",
        "order": 2,
        "stat": "INT",
        "version": "60o",
        "guidelink": [
            "https://docs.google.com/document/d/1xJGcGKLWDBu8iDUAcjknk1QRK34MYfPMnFRphjuLo3g/edit?usp=sharing"
        ],
        "description": [
            "For more protection, look at the STR Full Support build",
            "If your team uses serenity/RoH/Jupiter, then you can switch to an alt helm for more buff/debuff variants",
            "Use Heaven's Door for lowman",
            "Use Harmonia for healing if no healer present (such as priest)"
        ],
        "items": {
            "Soul of Abyss": [
                "Heaven's Door",
                "Harmonia, the Sparkle of Life"
            ],
            "Crown of Cleansing": [
                "Hood of Apocalypse",
                "Eye of the Flame Lord"
            ],
            "Ring of Hope": [
                "Heirloom of Lazarus"
            ],
            "Jupiter, the Robe of Heavens": [
                "Frost Herald's Garment"
            ],
            "Protection of the Fairies": [
                "Guardian Angel"
            ]
        }
    },
    {
        "for": "Hermit",
        "type": "AGI Full DPS",
        "order": 3,
        "stat": "AGI",
        "version": "59z",
        "description": [
            "For full support builds, check out the first two builds",
            "Use Cage as a fill in for your team"
        ],
        "items": {
            "Divine Slayer": [],
            "Eye of the Reaper": [
                "Visage of Vengeance"
            ],
            "Ring of Insanity": [],
            "Vest of Divine Winds": [],
            "Ruler of the Skies": []
        }
    },
    {
        "for": "Martial Artist",
        "type": "DPS - Early",
        "order": 1,
        "stat": "AGI",
        "version": "61x",
        "items": {
            "Claws of Destruction": [],
            "Grim Visage": [],
            "Ring of Nightmare": [],
            "Guardian Vest": [],
            "Cape of Corrupt Flame": []
        }
    },
    {
        "for": "Martial Artist",
        "type": "DPS - Mid",
        "order": 2,
        "stat": "AGI",
        "version": "61x",
        "items": {
            "Claws of Beriel": [],
            "Eye of Wallachia": [],
            "Ring of Strike": [],
            "Grandine, the Plates of Wraith": [],
            "Cloak of the Fallen Shadows": []
        }
    },
    {
        "for": "Martial Artist",
        "type": "DPS - Late",
        "order": 3,
        "stat": "AGI",
        "version": "61x",
        "items": {
            "Maw of Beriel": [],
            "Eye of Wallachia": [],
            "Ring of Insanity": [],
            "Athanasia, the Armor of the Reaper": [],
            "Cloak of the Fallen Shadows": []
        }
    },
    {
        "for": "Martial Artist",
        "type": "DPS - End",
        "order": 4,
        "stat": "AGI",
        "version": "60u",
        "description": [
            "The use of Nevedium is for a more advanced build. It can increase your overall dps, but it may not be useful for beginners"
        ],
        "items": {
            "Caedis, the Sword of Slaughter": [
                "Power of Beriel"
            ],
            "Eye of the Reaper": [],
            "Crimson Curse": [
                "Demonic Fist"
            ],
            "Exitium, the Armor of Ruin": [
                "Nevedium, the Armor of Demonblood"
            ],
            "Cape of Deep Abyss": [
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Phantom Blade",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "Minor Bosses",
            "Item in brackets are fillers."
        ],
        "items": {
            "Tepethia, the Crimson Sword of Requiem": [],
            "Grim Visage": [
                "Archangel Halo",
                "Helm of Battle"
            ],
            "Ring of Sage": [],
            "Vest of Protection": [],
            "Slayer Boots": []
        }
    },
    {
        "for": "Phantom Blade",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "Coin Bosses",
            "Item in brackets are fillers.",
            "Ring of Resonance/Time/Fate for double T or Ring of Nightmare/Strike/Insanity for stronger hitting attack/spells but at the cost of RNG."
        ],
        "items": {
            "Storm Reaver": [],
            "Grim Visage": [
                "Archangel Halo",
                "Helm of Battle"
            ],
            "Ring of Intrusion": [
                "Ring of Nightmare"
            ],
            "Vest of Cyclone": [],
            "Wings of Fury": []
        }
    },
    {
        "for": "Phantom Blade",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "SK ~ SD",
            "Farm the items in the bracket first as they are easier to get.",
            "Swap your armor based on what you need. Vest of Storm for damage and Grandine for survivability.",
            "Ring of Resonance/Time/Fate for double T or Ring of Nightmare/Strike/Insanity for stronger hitting attack/spells but at the cost of RNG."
        ],
        "items": {
            "Crimson Reaper": [
                "Death Scythe"
            ],
            "Eye of Wallachia": [
                "Halo of Judgment"
            ],
            "Ring of Time": [
                "Ring of Strike"
            ],
            "Vest of Storm": [
                "Grandine, the Plates of Wraith"
            ],
            "Wings of Slayer": []
        }
    },
    {
        "for": "Phantom Blade",
        "type": "Endgame",
        "order": 4,
        "stat": "AGI",
        "version": "59a",
        "description": [
            "DF ~ Aga",
            "Ring of Resonance/Time/Fate for double T or Ring of Nightmare/Strike/Insanity for stronger hitting attack/spells but at the cost of RNG.",
            "Radiance of the One should only be crafted if you have finished your main items and have spare Mark of Lords."
        ],
        "items": {
            "Cosmic Reaper": [
                "The Ender"
            ],
            "Eye of the Reaper": [
                "Radiance of the One"
            ],
            "Ring of Fate": [
                "Ring of Insanity"
            ],
            "Vest of Divine Winds": [],
            "Wings of Night Lord": [
                "Storm"
            ]
        }
    },
    {
        "for": "Phantom Blade",
        "type": "Omega Endgame",
        "order": 5,
        "stat": "AGI",
        "version": "60v",
        "description": [
            "Duke+",
            "The real exercise for fingering -3Years",
            "9/10 would break my keyboard and fingers again -Ches",
            "Ring of Resonance/Time/Fate/Eternity for double T or Ring of Nightmare/Strike/Insanity/Crimson Curse for stronger hitting attack/spells but at the cost of RNG."
        ],
        "items": {
            "Heartrender": [
                "Divine Slayer"
            ],
            "Eye of the Reaper": [],
            "Crimson Curse": [
                "Ring of Eternity"
            ],
            "Vest of Divine Winds": [],
            "Bloodstorm": [
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Reaper",
        "type": "DPS",
        "order": 1,
        "stat": "AGI",
        "version": "62k",
        "description": [
            "\"this might not be the very optimal build but its way better and up to date than the current one\" - Takashiro"
        ],
        "items": {
            "Divine Slayer": [],
            "Horn of Dragon": [],
            "Crimson Curse": [],
            "Vest of Divine Winds": [],
            "Ruler of the Skies": []
        }
    },
    {
        "for": "Shooter",
        "type": "Damage",
        "order": 1,
        "stat": "AGI",
        "version": "61y",
        "description": [
            "if you want an int variant of damage @phony; and i'll tell you why you're wrong."
        ],
        "items": {
            "Chrono Chaser": [],
            "Crown of Transcendence": [
            ],
            "Ring of Desolate Soul": [],
            "Nevedium, the Armor of Demonblood": [],
            "Wings of Cosmos": []
        }
    },
    {
        "for": "Shooter",
        "type": "Healing focused support",
        "order": 2,
        "stat": "INT",
        "version": "61y",
        "description": [
            "Items can vary depending on team comp, swap to Protection of the Fairies to revive allies."
        ],
        "items": {
            "Rainmaker": [],
            "Crown of Cleansing": [
                "Eye of the Flame Lord",
                "Hood of Apocalypse"
            ],
            "Ring of Hope": [
                "Heirloom of Lazarus",
                "Nebula Rose",
                "Horn of God"
            ],
            "Jupiter, the Robe of Heavens": [
                "Frost Herald's Garment",
                "Harmony of Sky and Earth"
            ],
            "Guardian Angel": [
                "Wings of Immortal",
                "Protection of the Fairies"
            ]
        }
    },
    {
        "for": "Shooter",
        "type": "TOP ECHELON AUXILIARY",
        "order": 3,
        "stat": "INT",
        "version": "61y",
        "description": [
            "Swap items according to team composition.",
            "Revive non-chad gamers with Protection of The Fairies.",
            "Can use damage items to attribute to greater bursts."
        ],
        "items": {
            "Abyss Fall": [],
            "Crown of Cleansing": [
                "Eye of the Flame Lord",
                "Prophetia, the Origin of Knowledge"
            ],
            "Ring of Despair": [
                "Heirloom of Lazarus",
                "Nebula Rose",
                "Horn of God"
            ],
            "Frost Herald's Garment": [
                "Jupiter, the Robe of Heavens",
                "Thanatos, the Robe of Hell"
            ],
            "Guardian Angel": [
                "Wings of Immortal",
                "Protection of the Fairies",
                "Wings of Cosmos"
            ]
        }
    },
    {
        "for": "Shrine Priestess",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62z",
        "items": {
            "Hatred": [],
            "Crown of Fervor": [],
            "Ring of the Reaper": [],
            "Frozen Robe": [],
            "Fairy Wings": []
        }
    },
    {
        "for": "Shrine Priestess",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62z",
        "items": {
            "Bloody Hatred": [],
            "Crown of Rage": [],
            "Cold Ring of Death": [],
            "Medea, the Robe of the Witch": [],
            "Frost Fairy Wings": []
        }
    },
    {
        "for": "Shrine Priestess",
        "type": "Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62z",
        "items": {
            "Crimson Hatred": [],
            "Crown of Extreme Anger": [],
            "Ring of Frozen Soul": [],
            "Thanatos, the Robe of Hell": [],
            "Wing of Frost Lord": []
        }
    },
    {
        "for": "Shrine Priestess",
        "type": "End Game",
        "order": 4,
        "stat": "INT",
        "version": "62z",
        "description": [
            "Use Ring of Eternity if you want to have double T combo"
        ],
        "items": {
            "Akhelius, the Staff of Duality": [],
            "Crown of Cataclysm": [],
            "Star of Apotheosis": [
                "Ring of Eternity"
            ],
            "Call of Gehenna": [],
            "Wings of Sacred Provenance": []
        }
    },
    {
        "for": "Sniper",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "63g",
        "items": {
            "Flame Explosion": [],
            "Grim Visage": [],
            "Ring of Nightmare": [],
            "Vest of Cyclone": [],
            "Wings of Fury": []
        }
    },
    {
        "for": "Sniper",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "63g",
        "items": {
            "Hellflame": [],
            "Crown of Rage": [],
            "Ring of Strike": [],
            "Vest of Storm": [],
            "Wings of Slayer": []
        }
    },
    {
        "for": "Sniper",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "63g",
        "items": {
            "Eternal Flame": [],
            "Crown of Extreme Anger": [],
            "Ring of Insanity": [],
            "Vest of Divine Winds": [],
            "Wings of Night Lord": []
        }
    },
    {
        "for": "Sniper",
        "type": "End Game",
        "order": 4,
        "stat": "AGI",
        "version": "63g",
        "items": {
            "Spirit Flame": [],
            "Crown of Cataclysm": [],
            "Crimson Curse": [],
            "Astral Fury": [],
            "Wings of Sacred Provenance": []
        }
    },
    {
        "for": "Sword Enchanter",
        "type": "DPS / buffer",
        "order": 1,
        "stat": "AGI",
        "version": "60v",
        "guidelink": [
            "https://www.twrpg.com/viewtopic.php?f=4&t=6886"
        ],
        "description": [
            "Crimson Curse is abit more damage but much less survivability, not worth the mats.",
            "Use Cape of Deep Abyss if debuff stackable."
        ],
        "items": {
            "Heartrender": [],
            "Horn of Dragon": [],
            "Demonic Fist": [
                "Crimson Curse"
            ],
            "Vest of Divine Winds": [],
            "Cape of Insatiable Hunger": [
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Swordsman",
        "type": "Early Game",
        "order": 1,
        "stat": "AGI",
        "version": "62z3",
        "description": [
            "Minor"
        ],
        "items": {
            "Asmodeus, the Archdevil's Greatsword": [
                "Laksha, the Reigning Sword of Poison"
            ],
            "Grim Visage": [
                "Helm of Battle"
            ],
            "Demonis, the Devil Lord's Ring": [],
            "Cruoris, the Armor of Blood": [
                "Vest of Protection"
            ],
            "Cape of the Count": [
                "Corrupt Crystal Wings"
            ]
        }
    },
    {
        "for": "Swordsman",
        "type": "Mid Game",
        "order": 2,
        "stat": "AGI",
        "version": "62z3",
        "description": [
            "Coin Gear"
        ],
        "items": {
            "Laksha, the Ancient Sword of Poison": [
                "Avenger"
            ],
            "Grim Visage": [
                "Helm of Battle",
                "Horn of Devil"
            ],
            "Latea, the Ring of Chaos": [
                "Ring of the Reaper"
            ],
            "Cruoris, the Armor of Blood": [
                "Vest of Cyclone"
            ],
            "Wings of Fury": [
                "Corrupt Crystal Wings"
            ]
        }
    },
    {
        "for": "Swordsman",
        "type": "Late Game",
        "order": 3,
        "stat": "AGI",
        "version": "62z3",
        "description": [
            "SK->SD",
            "Grandine is a great defensive armor to help you learn the boss patterns if you're having trouble surviving."
        ],
        "items": {
            "Oceanus, the Sword of Light": [
                "Laktrisha, the Illusional Sword of Poison"
            ],
            "Dragon Mask": [],
            "Cold Ring of Death": [],
            "Benedict, the Crimson Armor of Blood": [
                "Vest of Storm",
                "Grandine, the Plates of Wraith"
            ],
            "Wings of Slayer": []
        }
    },
    {
        "for": "Swordsman",
        "type": "End Game",
        "order": 4,
        "stat": "AGI",
        "version": "62z3",
        "description": [
            "DF->Agareth",
            "Because Swordsman requires 4 Mark of Lords, I'd recommend focusing on building Mask of Demigod and Wings of Night Lord first, as they work perfectly with Swordsman."
        ],
        "items": {
            "Atricia, the Sword of Dreams": [],
            "Mask of Demigod": [
                "Horn of Demon God"
            ],
            "Ring of Frozen Soul": [
                "Ring of the One"
            ],
            "Nevedium, the Armor of Demonblood": [
                "Vest of Divine Winds",
                "Athanasia, the Armor of the Reaper"
            ],
            "Wings of Night Lord": []
        }
    },
    {
        "for": "Swordsman",
        "type": "Arcana",
        "order": 5,
        "stat": "AGI",
        "version": "62z3",
        "description": [
            "Duke->AC"
        ],
        "items": {
            "Atricia, the Sword of Nightmares": [],
            "Horn of Dragon": [],
            "Ring of Malevolence": [
                "Ring of Desolate Soul"
            ],
            "Astral Fury": [
                "Exitium, the Armor of Ruin"
            ],
            "Wings of Night Lord": []
        }
    },
    {
        "for": "Thunderer",
        "type": "DoT",
        "order": 1,
        "stat": "AGI",
        "version": "60o",
        "guidelink": [
            "https://docs.google.com/document/d/1O33M0XcWHd_dprsXT0s5BBS5KIEl-4wO5YhgsNz-gsg"
        ],
        "description": [
            "Use Visage if the run is lacking supports and you need AMS",
            "Use Exitium if you think you need to save yourself",
            "Use Ruler if there is already a Ring of Despair or another Deep Abyss in the team"
        ],
        "items": {
            "Espishu, the Sword of Chaos": [],
            "Eye of the Reaper": [
                "Visage of Vengeance"
            ],
            "Crimson Curse": [],
            "Plates of Sanguine Fury": [
                "Exitium, the Armor of Ruin"
            ],
            "Cape of Deep Abyss": [
                "Ruler of the Skies"
            ]
        }
    },
    {
        "for": "Thunderer",
        "type": "Burst DPS",
        "order": 2,
        "stat": "AGI",
        "version": "51b",
        "guidelink": [
            "https://docs.google.com/document/d/1O33M0XcWHd_dprsXT0s5BBS5KIEl-4wO5YhgsNz-gsg"
        ],
        "items": {
            "Astra, the Sword of Moonlight": [],
            "Crown of Absolute Zero": [],
            "Ring of Insanity": [
                "Ring of the One"
            ],
            "Nevedium, the Armor of Demonblood": [],
            "Ruler of the Skies": []
        }
    },
    {
        "for": "Trickster",
        "type": "End Game DPS",
        "order": 1,
        "stat": "AGI",
        "version": "62l2",
        "description": [
            "Using ring of the one if there is a lot of support/cleanses in group.",
            "Using clone for items only work if clone stays alive; Otherwise the effects does not work.",
            "Clone will not have the option for Heaven's Door. So your main will only have the Weapon.",
            "Protection of the fairies good for end game runs where your team doesn't have enough revives."
        ],
        "items": {
            "Divine Slayer": [],
            "Horn of Dragon": [
                "Eye of the Reaper"
            ],
            "Ring of Malevolence": [
                "Ring of the One"
            ],
            "Exitium, the Armor of Ruin": [],
            "Bloodstorm": [
                "Protection of the fairies"
            ]
        }
    },
    {
        "for": "Trickster",
        "type": "Optional Support",
        "order": 2,
        "stat": "AGI",
        "version": "62l2",
        "items": {
            "Eternal Winter": [
                "Heaven's Door"
            ],
            "Crown of Cleansing": [
                "Spirit of Protector"
            ],
            "Heart of Life": [
                "Heirloom of Lazarus"
            ],
            "Harmony of Sky and Earth": [
                "Jupiter, the Robe of Heavens"
            ],
            "Protection of the fairies": []
        }
    },
    {
        "for": "Alchemist",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Just equip anything you found the best and start gathering whatever is necessary for future crafts, part of it is below."
        ],
        "items": {
            "Pumpkin Rod": [
                "Benziena, the Rod of Earth",
                "Staff of Void"
            ],
            "Prophetia, the Source of Mana": [],
            "Ring of the Sage": [
                "Ring of the Dead"
            ],
            "Frozen Robe": [],
            "Fairy Wings": [
                "Wings of Purification"
            ]
        }
    },
    {
        "for": "Alchemist",
        "type": "Coin Gear",
        "order": 2,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Coin Gear",
            "Optional gears will be used later on but not worth to use them now, gather them first.",
            "There are two Benziena, one for Staff of Domination and one for the spec. (Rush Earthen Pillar mainly)"
        ],
        "items": {
            "Staff of Contagion": [
                "Benziena, the Earthen Pillar",
                "Staff of Madness",
                "Benziena, the Earthen Soul"
            ],
            "Prophetia, the Source of Mana": [
                "Crown of Fervor",
                "Horns of Destruction"
            ],
            "Ring of the Reaper": [
                "Ring of Intrusion",
                "Soul Drinker"
            ],
            "Robe of the Reaper": [
                "Frozen Robe"
            ],
            "Fairy Wings": [
                "Wings of Purification"
            ]
        }
    },
    {
        "for": "Alchemist",
        "type": "Shadow Dragon Gear",
        "order": 3,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Optional gears will be used later on but not worth to use them now, gather them first."
        ],
        "items": {
            "Staff of Domination": [
                "Benziena, the Earthen Heart"
            ],
            "Prophetia, the Greater Source of Mana": [
                "Crown of Composure",
                "Crown of Rage"
            ],
            "Cold Ring of Death": [
                "Ring of Time"
            ],
            "Medea, the Robe of the Witch": [
                "Draconic Skin Rusalka"
            ],
            "Frost Fairy Wings": [
                "Soul Eater"
            ]
        }
    },
    {
        "for": "Alchemist",
        "type": "Tower Gear",
        "order": 4,
        "stat": "INT",
        "version": "60v",
        "description": [
            "If you have Zombie Lord or Grandmaster Icon, you can skip Staff of Plague. Eventually, you can keep using Staff of Domination until you get the required icons.",
            "Robe of Storm is only to prepare for its upgrade, keep using Medea. Do not use Ring of Time as an active ring, it will only be used for Ring of Divine Winds although you can skip it if you will go only for Ring of Frozen Soul",
            "Although I like Crown of Great Rage and its other upgrades, you can keep using Prophetia if you'd like.",
            "You do not have many upgrades until Agareth, persevere through my friend."
        ],
        "items": {
            "Staff of Plague": [
                "The Ender",
                "Staff of Domination",
                "Harmonia, the Sparkle of Life"
            ],
            "Crown of Great Rage": [
                "Prophetia, the Greater Source of Mana",
                "Crown of Composure"
            ],
            "Cold Ring of Death": [
                "Ring of Time"
            ],
            "Medea, the Robe of the Witch": [
                "Robe of Storm"
            ],
            "Frost Fairy Wings": [
                "Soul Eater"
            ]
        }
    },
    {
        "for": "Alchemist",
        "type": "Agareth Gear",
        "order": 5,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Just don't die - Maki",
            "Why would you use defensive gear in endgame, get supports.",
            "Weapon - Ethenos only with Ring of Divine Winds and Zombie Lord/Grandmaster Icon but it can be skipped as you'll get your core weapon (Heartrender) at Duke tier and The Ender isn't so bad if you have icons.",
            "Armor - Either craft Thanatos or decide to skip it for Sanguis at Duke tier if you can manage to get boosted by your team or pubs.",
            "Ring - Read above, I believe that Ring of Divine Winds is a bit better at this tier until you get Heartrender and Ring of Desolate Soul with Zombie Lord/Grandmaster Icon",
            "Helm - Preference, but Prophetia is likely better right here, Crown of Absolute Zero for CC immunity, Crown of Extreme Anger will be used for Attack speed buff with item swap (not mandatory craft)",
            "Wings - Curse of Greed if you have good supports and can afford the extra damage taken. Soul Devourer otherwise which will give you a cleanse, defensive stats etc. I do not like Wings of Frost Lord anymore."
        ],
        "items": {
            "Ethenos, the Staff of Chaos": [
                "The Ender",
                "Staff of Plague",
                "Harmonia, the Sparkle of Life"
            ],
            "Prophetia, the Origin of Knowledge": [
                "Crown of Absolute Zero",
                "Crown of Extreme Anger"
            ],
            "Ring of Divine Winds": [
                "Ring of Frozen Soul"
            ],
            "Thanatos, the Robe of Hell": [
                "Robe of Storm"
            ],
            "Curse of Greed": [
                "Soul Devourer"
            ]
        }
    },
    {
        "for": "Alchemist",
        "type": "Arcana Gear",
        "order": 6,
        "stat": "INT",
        "version": "61w2",
        "guidelink": [
            "https://twrpg.com/viewtopic.php?f=4&t=6452"
        ],
        "description": [
            "Why are you even reading this?",
            "Go Farm Duke and Gaia",
            "Fire Wing are ass",
            "Learn Fire Affinity item swap on your own if you wanna do it"
        ],
        "items": {
            "Heartrender": [],
            "Crown of Cataclysm": [],
            "Ring of Desolate Soul": [],
            "Sanguis, the Robe of Sacrifice": [],
            "Wings of Sacred Provenance": [
                "Soul Devourer"
            ]
        }
    },
    {
        "for": "Arcane Mage",
        "type": "DPS with support",
        "order": 1,
        "stat": "INT",
        "version": "51b",
        "guidelink": [
            "https://docs.google.com/document/d/1xU6mbtDapoO8pdKIPZU6KkZrOExuD7sLMGWxLXVn5EA"
        ],
        "description": [
            "Archangel wings and Crimson Hatred are \"bridge\" items before reach agareth and should not be main items",
            "Accessory progression: Mana Heart Frost → Seal of Deceiver → Latea, the Ring of Overlord → Ring of the One"
        ],
        "items": {
            "Ethenos, the Staff of Chaos": [
                "Crimson Hatred"
            ],
            "Prophetia, the Origin of Knowledge": [],
            "Ring of the One": [
                "Ring of Fate"
            ],
            "Thanatos, the Robe of Hell": [],
            "Wings of Frost Lord": [
                "Archangel Wings"
            ]
        }
    },
    {
        "for": "Blood Weaver",
        "type": "Early game",
        "order": 1,
        "stat": "INT",
        "version": "62z6",
        "items": {
            "Staff of Contagion": [],
            "Crown of Fervor": [],
            "Ring of Nightmare": [],
            "Frozen Robe": [],
            "Cape of Corrupt Flame": []
        }
    },
    {
        "for": "Blood Weaver",
        "type": "Mid game",
        "order": 2,
        "stat": "INT",
        "version": "62z6",
        "items": {
            "The Ender": [],
            "Crown of Composure": [],
            "Ring of strike": [],
            "Medea, the Robe of the Witch": [],
            "Cloak of the Fallen Shadows": []
        }
    },
    {
        "for": "Blood Weaver",
        "type": "Late game",
        "order": 3,
        "stat": "INT",
        "version": "62z6",
        "items": {
            "The Ender": [],
            "Crown of Absolute Zero": [],
            "Ring of Insanity": [],
            "Thanatos, the Robe of Hell": [],
            "Cape of Deep Abyss": []
        }
    },
    {
        "for": "Blood Weaver",
        "type": "End game",
        "order": 4,
        "stat": "INT",
        "version": "64d",
        "items": {
            "Heartrender": [],
            "Crown of Transcendance": [],
            "Ring of the One": [],
            "Call of Gehenna": [],
            "Wings of Sacred Provenance": []
        }
    },
    {
        "for": "Elementalist",
        "type": "DPS",
        "order": 1,
        "stat": "INT",
        "version": "38b",
        "description": [
            "Use Apocalypse for survival if needed, it comes with some support as well",
            "Use Cold Ring of Death is someone else on your team has Horn of God for DPS",
            "Use Winter Robe for survival if needed",
            "Brave Heart is a defensive option if needed"
        ],
        "items": {
            "Chaos Dagger": [
                "Staff of Plague"
            ],
            "Eye of the Flame Lord": [
                "Prophetia, the Greater Source of Mana",
                "Hood of Apocalypse"
            ],
            "Ring of Divine Winds": [
                "Horn of God",
                "Cold Ring of Death"
            ],
            "Jupiter, the Robe of Heavens": [
                "Winter Robe",
                "Thanatos, the Robe of Hell"
            ],
            "Archangel Wings": [
                "Brave Heart"
            ]
        }
    },
    {
        "for": "Elementalist",
        "type": "Support",
        "order": 2,
        "stat": "INT",
        "version": "38b",
        "description": [
            "Use Apocalypse for survival if needed, it comes with some support as well",
            "Use Winter Robe for survival if needed",
            "Brave Heart is a defensive option if needed"
        ],
        "items": {
            "Triple Snow": [
                "Benziena, the Earthen Soul"
            ],
            "Eye of the Flame Lord": [
                "Prophetia, the Greater Source of Mana",
                "Hood of Apocalypse"
            ],
            "Nebula Rose": [
                "Horn of God"
            ],
            "Jupiter, the Robe of Heavens": [
                "Winter Robe"
            ],
            "Protection of the Fairies": [
                "Brave Heart"
            ]
        }
    },
    {
        "for": "Fire Mage",
        "type": "Burst",
        "order": 1,
        "stat": "INT",
        "version": "61w2",
        "items": {
            "Akhelius, the Staff of Duality": [],
            "Crown of Cataclysm": [],
            "Star of Apotheosis": [
                "Seal of Corruption"
            ],
            "Sanguis robe of sacrifice": [
                "Thanatos, robe of hell"
            ],
            "Wings of Sacred Provenance": [
                "Wings of Cosmos"
            ]
        }
    },
    {
        "for": "Lightning Mage",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Belius, the Archdevil's Staff": [],
            "Horns of Destruction": [],
            "Ring of the Reaper": [],
            "Frozen Robe": [],
            "Fairy Wings": []
        }
    },
    {
        "for": "Lightning Mage",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Parasitic Staff": [],
            "Crown of Serenity": [],
            "Cold Ring of Death": [],
            "Medea, the Robe of the Witch": [],
            "Soul Eater": []
        }
    },
    {
        "for": "Lightning Mage",
        "type": "Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "The Ender": [],
            "Horn of Demon God": [],
            "Ring of Frozen Soul": [],
            "Thanatos, the Robe of Hell": [],
            "Storm": []
        }
    },
    {
        "for": "Lightning Mage",
        "type": "End Game",
        "order": 4,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Fulminata, the Bringer of Storms": [],
            "Horn of Dragon": [],
            "Ring of Malevolence": [],
            "Call of Gehenna": [],
            "Bloodstorm": []
        }
    },
    {
        "for": "Priest",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Staff of Void": [],
            "Eye of the Abyss": [],
            "Living Dragon Heart": [],
            "Fairy Robe": [],
            "Wings of Purification": []
        }
    },
    {
        "for": "Priest",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Staff of Abyss": [],
            "Void Eye": [],
            "Azathos, the Pipe of Chaos": [],
            "Diana, the Robe of Holy Maiden": [],
            "Soul of the Dead": []
        }
    },
    {
        "for": "Priest",
        "type": "Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Soul of Abyss": [],
            "Eye of the Flame Lord": [],
            "Horn of God": [],
            "Diana, the Robe of Holy Maiden": [],
            "Protection of the Fairies": []
        }
    },
    {
        "for": "Priest",
        "type": "Full Support",
        "order": 4,
        "stat": "INT",
        "version": "64h",
        "description": [
            "Secondary items are better used in case main ones are used by another ally",
            "Use Wings of Immortal if no other reviver"
        ],
        "items": {
            "Gate of Abyss": [
                "Heaven's Door"
            ],
            "Crown of Cleansing": [
                "Eye of the Flame Lord"
            ],
            "Heart of Life": [
                "Bell of Light"
            ],
            "Jupiter, the Robe of Heavens": [
                "Frost Herald's Garment"
            ],
            "Guardian Angel": [
                "Wings of Immortal",
                "Protection of the Fairies"
            ]
        }
    },
    {
        "for": "Soul Weaver",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Minors to Coin"
        ],
        "items": {
            "Benziena, the Earthen Soul": [
                "Staff of Void"
            ],
            "Hood of Grim Reaper": [
                "Void Eye"
            ],
            "Azathos, the Pipe of Chaos": [],
            "Fairy Garment": [
                "Frozen Robe"
            ],
            "Frozen Heart": []
        }
    },
    {
        "for": "Soul Weaver",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "60v",
        "description": [
            "SK - SD",
            "If run is lacking heal, go use Benziena, Earthen Heart.",
            "If you want to boost your team damage to use Hell Riser / Staff of Abyss"
        ],
        "items": {
            "Hell Riser": [
                "Staff of Abyss",
                "Benziena, the Earthen Heart"
            ],
            "Hood of Apocrypha": [
                "Void Eye"
            ],
            "Ring of Composure": [
                "Azathos, the Pipe of Chaos"
            ],
            "Diana, the Robe of Holy Maiden": [
                "Druid Mantle"
            ],
            "Soul Eater": [
                "Grim Heart",
                "Embrace of Nature"
            ]
        }
    },
    {
        "for": "Soul Weaver",
        "type": "End Game",
        "order": 3,
        "stat": "INT",
        "version": "60v",
        "description": [
            "Valtora - Agareth+",
            "You can use Hell Riser if your team is already using Soul of Abyss",
            "If both are taken you can go Harmonia, Sparkle of Life.",
            "You can use Druid Mantle to close portals in Agareth with its passive also with Druid Mantle you can heal long range carries.",
            "You can use Hood of Apocrpyha if you missing healing in runs or else go Eye of Flame Lord if no one uses it.",
            "If you dont have cleanse in runs you can stick to Horn of God but if your team not having problem with cleanse use Ring of Composure to boost their damage."
        ],
        "items": {
            "Soul of Abyss": [
                "Armageddon",
                "Harmonia, Sparkle of Life"
            ],
            "Hood of Apocalypse": [
                "Eye of the Flame Lord"
            ],
            "Horn of God": [
                "Ring Of Despair",
                "Nebula Rose"
            ],
            "Jupiter, the Robe of Heavens": [
                "Hades, the Armor of Despair",
                "Druid Mantle"
            ],
            "Protection of the Fairies": [
                "Soul Devourer",
                "Wings of Immortal"
            ]
        }
    },
    {
        "for": "Soul Weaver",
        "type": "Arcana",
        "order": 4,
        "stat": "INT",
        "version": "62s2",
        "description": [
            "Duke+",
            "You can use Armageddon if your team is already using Gate of Abyss.",
            "If both are taken you can go Harmonia, Sparkle of Life.",
            "Having 2 Heirloom wont be a problem if you have more than 2 dps players but you can go Ring of Despair if no one using Cape of Deep Abyss.",
            "add tip Only use Crescendo of Madness it if all helmet options are taken for affinity.",
            "Only use Heart of Life when you are wearing Guardian Angel.",
            "If you still have question, my discord is Darsinki#0004 always open to help."
        ],
        "items": {
            "Gate of Abyss": [
                "Armageddon",
                "Harmonia, Sparkle of Life"
            ],
            "Keeper of the Grove": [
                "Hood of Apocalypse",
                "Crescendo of Madness"
            ],
            "Heirloom of Lazarus": [
                "Ring of Despair",
                "Heart of Life"
            ],
            "Cage of Twisted Souls": [
                "Jupiter, the Robe of Heavens"
            ],
            "Guardian Angel": [
                "Protection of the Fairies",
                "Soul Devourer",
                "Wings of Immortal"
            ]
        }
    },
    {
        "for": "Warlock",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Staff of Contagion": [],
            "Prophetia, the Source of Mana": [],
            "Ring of Deep Darkness": [],
            "Frozen Robe": [],
            "Fairy Wings": []
        }
    },
    {
        "for": "Warlock",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Parasitic Staff": [],
            "Prophetia, the Greater Source of Mana": [],
            "Grimoire of Darkness": [],
            "Medea, the Robe of the Witch": [],
            "Soul Eater": []
        }
    },
    {
        "for": "Warlock",
        "type": "Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Staff of Plague": [],
            "Prophetia, the Origin of Knowledge": [],
            "Seed of Malice": [],
            "Thanatos, the Robe of Hell": [],
            "Soul Devourer": []
        }
    },
    {
        "for": "Warlock",
        "type": "End Game",
        "order": 4,
        "stat": "INT",
        "version": "62s2",
        "items": {
            "Heartrender": [],
            "Crescendo of Madness": [],
            "Seed of Malice": [],
            "Call of Gehenna": [],
            "Blood Devourer": []
        }
    },
    {
        "for": "Water Mage",
        "type": "Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62z",
        "description": [
            "Minor."
        ],
        "items": {
            "Ripple Snow": [],
            "Prophetia, the Source of Mana": [
                "Hood of Everfrost"
            ],
            "Demonis, the Devil Lord's Ring": [
                "Winter Rose",
                "Ring of Deep Darkness"
            ],
            "Frozen Robe": [],
            "Fairy Wings": []
        }
    },
    {
        "for": "Water Mage",
        "type": "Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62z",
        "description": [
            "Coin Gears."    
        ],
        "items": {
            "Twin Snow": [],
            "Crown of Fervor": [
                "Prophetia, the Source of Mana"
            ],
            "Latea, the Ring of Chaos": [
                "Ring of the Reaper"
            ],
            "Frozen Robe": [
                "Robe of the Sage"
            ],
            "Fairy Wings": []
        }
    },
    {
        "for": "Water Mage",
        "type": "Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62z",
        "description": [
            "SK -> SD"
        ],
        "items": {
            "Triple Snow": [
                "Ethenos, the Staff of Space"
            ],
            "Crown of Composure": [
                "Prophetia, the Greater Source of Mana"
            ],
            "Cold Ring of Death": [
                "Grimoire of Darkness"
            ],
            "Medea, the Robe of the Witch": [
                "Winter Robe",
                "Robe of the Necromancer"
            ],
            "Frost Fairy Wings": []
        }
    },
    {
        "for": "Water Mage",
        "type": "End Game",
        "order": 4,
        "stat": "INT",
        "version": "62z",
        "description": [
            "DF -> Agareth",
            "Winter Robe is still a viable option while learning new bosses or when there aren't enough supports due to its 12% damage reduction specialty and shield active.",
            "Use any ring you like; they're all effective at adding damage, but Ring of Frozen Soul offers a useful defensive active."
        ],
        "items": {
            "Ethenos, the Staff of Chaos": [
                "Triple Snow"
            ],
            "Crown of Absolute Zero": [],
            "Ring of Frozen Soul": [
                "Ring of the One",
                "Seed of Malice"
            ],
            "Thanatos, the Robe of Hell": [
                "Robe of Archlich",
                "Winter Robe"
            ],
            "Wings of Frost Lord": []
        }
    },
    {
        "for": "Water Mage",
        "type": "Arcana",
        "order": 5,
        "stat": "INT",
        "version": "60u",
        "description": [
            "Duke -> TBD",
            "Ring of Desolate Soul provides higher consistent damage with a good defensive active, whereas Star provides a tremendous burst in stats for 10 seconds and an end explosion inflicting massive damage but has less overall stats when not active and a 90 second cooldown."
        ],
        "items": {
            "Endless Snow": [],
            "Crown of Transcendance": [],
            "Ring of Desolate Soul": [
                "Star of Apotheosis"
            ],
            "Call of Gehenna": [
                "Frost Herald's Garment"
            ],
            "Wing of Frost Lord": []
        }
    },
    {
        "for": "Wind Mage",
        "type": "Support",
        "order": 1,
        "stat": "INT",
        "version": "61e",
        "description": [
            "Try to get Eye of the Flame Lord before crown or if it is taken by hermit already",
            "Use Heart of Life if Hope is taken",
            "All other rings listed is usable if both heart and hope is taken",
            "Use Immortal wings if guardian is taken",
            "Use Protection of the fairies for pre-agareth and swap wings"
        ],
        "items": {
            "Chaos Dagger": [],
            "Crown of Cleansing": [
                "Eye of the Flame"
            ],
            "Ring of Hope": [
                "Heart of Life",
                "Heirloom of Lazarus",
                "Ring of Eternity",
                "Ring of Divine Winds"
            ],
            "Jupiter, the Robe of Heavens": [],
            "Guardian Angel": [
                "Wings of Immortal",
                "Protection of the Fairies"
            ]
        }
    },
    {
        "for": "Witch",
        "type": "DPS: Early Game",
        "order": 1,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Staff of Contagion": [],
            "Prophetia, the Source of Mana": [],
            "Ring of Deep Darkness": [],
            "Frozen Robe": [],
            "Fairy Wings": []
        }
    },
    {
        "for": "Witch",
        "type": "DPS: Mid Game",
        "order": 2,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Parasitic Staff": [],
            "Prophetia, the Greater Source of Mana": [],
            "Grimoire of Darkness": [],
            "Frozen Robe": [],
            "Soul Eater": []
        }
    },
    {
        "for": "Witch",
        "type": "DPS: Late Game",
        "order": 3,
        "stat": "INT",
        "version": "62k",
        "items": {
            "Staff of Plague": [],
            "Prophetia, the Greater Source of Mana": [],
            "Mark of Sin": [],
            "Robe of Storm": [],
            "Soul Eater": []
        }
    },
    {
        "for": "Witch",
        "type": "DPS",
        "order": 4,
        "stat": "INT",
        "version": "64g3",
        "description": [
            "DPS build is currently not worth the shot and requires high skill compared to support build",
            "Only worthwhile if there are too many supports in the lobby"
        ],
        "items": {
            "Heartrender": [],
            "Crescendo of Madness": [],
            "Seal of Corruption": [
                "Ring of Desolate Soul"
            ],
            "Call of Gehenna": [
                "Sanguis, the Robe of Sacrifice"
            ],
            "Wings of Sacred Provenance": [
                "Cape of Deep Abyss"
            ]
        }
    },
    {
        "for": "Witch",
        "type": "Support",
        "order": 5,
        "stat": "INT",
        "version": "64g3",
        "description": [
			"Just use whatever the team needs/lacks",
			"Heaven's Door for low man, Harmonia, Hood of Apocalypse, Guardian Angel and Brave Heart for the lack of healers",
            "Eye of the Flame Lord if nobody else uses it on high man",
            "Cage if there is nothing else to use, just take turns with its active ability",
            "Guardian Angel if nobody else uses it"
		],
        "items": {
            "Armageddon": [
                "Harmonia, the Sparkle of Life",
                "Heaven's Door",
                "Chaos Dagger"
            ],
            "Keeper of the Grove": [
                "Eye of the Flame Lord",
                "Hood of Apocalypse",
                "Crescendo of Madness"
            ],
            "Heart of Life": [
                "Ring of Despair",
                "Heirloom of Lazarus",
				"Ring of Eternity",
				"Seal of Corruption"
            ],
            "Jupiter, the Robe of Heavens": [
                "Cage of Twisted Souls",
				"Frost Herald's Garment"
            ],
            "Thread of Life": [
                "Guardian Angel",
                "Wings of Immortal",
                "Brave Heart",
                "Blood Devourer"
            ]
        }
    },
    {
        "for": "Lightseeker",
        "type": "Minor Gear",
        "order": 1,
        "stat": "STR",
        "version": "62r",
        "description": [
            "Minor build is just whatever you find until make main items tbh."
        ],
        "items": {
            "Sanguiel, the Bloodspear of Requiem": [
                "Niflheim"
            ],
            "Horns of Destruction": [],
            "Ring of Darkness": [],
            "Infected Crab Armor": [
                "Plates of Regeneration"
            ],
            "Corrupt Crystal Wings": [
                "Frozen Heart"
            ]
        }
    },
    {
        "for": "Lightseeker",
        "type": "Coin Gear",
        "order": 2,
        "stat": "STR",
        "version": "62r",
        "description": [
            "Flameshard path is bad until \"Dread Incarnate\" but you can go if you don't wanna build optional items.",
            "Purelight path is usefull for team but only usefull if no one uses it."
        ],
        "items": {
            "Aglaia, the Spear of Heavenly Flows": [],
            "Crown of Fervor": [],
            "Latea, the Ring of Chaos": [],
            "Reactive Armor": [
                "Purelight Armor",
                "Flameshard Armor"
            ],
            "Corrupt Crystal Wings": [
                "Frozen Heart"
            ]
        }
    },
    {
        "for": "Lightseeker",
        "type": "Mid Gear",
        "order": 3,
        "stat": "STR",
        "version": "62r",
        "description": [
            "Use Aglaia until Splitting better than tiberius due to passive."
        ],
        "items": {
            "Aglaia, the Spear of Heavenly Flows": [],
            "Crown of Composure": [],
            "Cold Ring of Death": [],
            "Hellspike Armor": [
                "Requiem, the Armor of Lamentation",
                "Frostshard Armor"
            ],
            "Pure Crystal Wings": [
                "Grim Heart"
            ]
        }
    },
    {
        "for": "Lightseeker",
        "type": "Late Gear",
        "order": 4,
        "stat": "STR",
        "version": "62r",
        "description": [
            "if crafted Roto use it until Rods/Star, use Rofs when protection needed."
        ],
        "items": {
            "Splitting of the Sky and Earth": [],
            "Crown of Absolute Zero": [],
            "Ring of Frozen Soul": [
                "Ring of the One"
            ],
            "Felspike Armor": [
                "Hades, the Armor of Despair",
                "Voidshard Armor"
            ],
            "Archangel Wings": [
                "Brave Heart"
            ]
        }
    },
    {
        "for": "Lightseeker",
        "type": "Endgame Gear",
        "order": 5,
        "stat": "STR",
        "version": "62r",
        "items": {
            "Spear of Judgment": [],
            "Crown of Transcendance": [],
            "Ring of Desolate Soul": [
                "Star of Apotheosis"
            ],
            "Dread Incarnate": [
                "Cage of Twisted Souls",
                "Titan's Plates"
            ],
            "Wings of Sacred Provenance": [
                "Wings of Cosmos"
            ]
        }
    },
    {
        "for": "Blaster",
        "type": "Burst",
        "order": 1,
        "stat": "STR",
        "version": "62w",
        "description": [
            "Recommended build"
        ],
        "items": {
            "Soul Chaser": [],
            "Crown of Cataclysm": [],
            "Ring of Malevolence": [
                "Ring of Desolate Soul"
            ],
            "Dread Incarnate": [],
            "Wings of Sacred Provenance": [
                "Bloodstorm"
            ]
        }
    },
    {
        "for": "Blaster",
        "type": "AGA",
        "order": 2,
        "stat": "STR",
        "version": "62w",
        "description": [
            "Main options provide burst, while alt options provide survival",
            "Use Voidshard Armor for Survival ability before getting Dread Incarnate",
            "Last Word is AA build",
            "Storm for crit"
        ],
        "items": {
            "Chrono chaser": [
                "Last word"
            ],
            "Crown of Extreme Anger": [],
            "Ring of Frozen Soul": [
                "Ring of Insanity"
            ],
            "Fepsike Armor": [
                "Voidshard Armor"
            ],
            "Storm": [
                "Wings of Deep Abyss",
                "Wings of Flame Lord"
            ]
        }
    },
    {
        "for": "Blaster",
        "type": "Periodic DMG and skill dmg",
        "order": 3,
        "stat": "STR",
        "version": "62w",
        "description": [
            "Cheap build good dmg"
        ],
        "items": {
            "Soul Chaser": [],
            "Crown of Cataclysm": [],
            "Crimson Curse": [],
            "Dread Incarnate": [],
            "Wings of the Void": []
        }
    },
    {
        "for": "Blaster",
        "type": "Physical/Pure Dealer AA",
        "order": 4,
        "stat": "STR",
        "version": "62w",
        "description": [
            "Chill but it doesn't have attack speed only use for towner troll"
        ],
        "items": {
            "Final Omen": [],
            "Crown of Cataclysm": [
                "Visage of Vengeance"
            ],
            "Ring of Malevolence": [
                "Ring of Divine Winds",
                "Crimson Curse",
                "Ring of Desolate Soul"
            ],
            "Dread Incarnate": [],
            "Wings of Sacred Provenance": [
                "Bloodstorm"
            ]
        }
    }
];

export default heroBuilds