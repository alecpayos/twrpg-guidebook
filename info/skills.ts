import { Skill } from "types";

const heroSkills: Skill[] = [
    {
        "id": "A0FM",
        "name": "Emergency Rations",
        "heroClass": "Sniper",
        "color": "96ed9a",
        "hotkey": "[D]",
        "icon": "SniperD",
        "cooldown": 15,
        "order": 1,
        "active": [
            "Snipers always carry around emergency rations for scenarios where they have to stay hidden for a long time.",
            "Heals for max HP X 30%",
            "Channel to additionally heal for max HP X 15% per second",
            "Recovery period 0.25 seconds",
            "Can be channeled up to 2 seconds"
        ]
    },
    {
        "id": "A0FL",
        "name": "Storm Shaft",
        "heroClass": "Sniper",
        "color": "96ed9a",
        "hotkey": "[Q]",
        "icon": "SniperQ",
        "cooldown": 6,
        "order": 2,
        "passive": [
            "Infuses the spirit of lightning into your arrows.",
            "On every 4th attack, deals AGI X 5 magic damage and stores a charge of lightning",
            "Increases AGI by 5% and attack speed by 15% for 10 seconds",
            "Stacks up to 4 times"
        ],
        "active": [
            "Fires an arrow that pierces the wind.",
            "Attack Damage X 1.5 damage",
            "Reduces target's movement speed by 50% for 2 seconds",
            "Consumes lightning charges to deal 75% bonus damage per consumed charge"
        ]
    },
    {
        "id": "A0GJ",
        "name": "Glide",
        "heroClass": "Sniper",
        "color": "dbfda8",
        "hotkey": "[W]",
        "icon": "SniperW",
        "cooldown": 4,
        "order": 3,
        "active": [
            "Swiftly disengages while attacking at the same time.",
            "Each arrow deals Attack Damage X 0.5 + AGI X 2 magic damage",
            "First 4 arrows are fired at last attacked target",
            "Fires up to 20 arrows based on moved distance"
        ]
    },
    {
        "id": "A0GS",
        "name": "Storm Aegis",
        "heroClass": "Sniper",
        "color": "62f9c8",
        "hotkey": "[E]",
        "icon": "SniperE",
        "cooldown": 15,
        "order": 4,
        "active": [
            "Surrounds yourself with a protective barrier of wind.",
            "Gains maximum charges of lightning",
            "Continuously pushes enemies outward",
            "Decreases damage dealt from outside the barrier up to 80% based on distance from attacker",
            "Lasts 5 seconds"
        ]
    },
    {
        "id": "A12B",
        "name": "Explosive Shot",
        "heroClass": "Sniper",
        "color": "c9f227",
        "hotkey": "[R]",
        "icon": "SniperR",
        "proc_rate": 0.5,
        "order": 5,
        "active": [
            "Loads next attack with explosive shells.",
            "AGI X 15 magic damage",
            "Stuns targets hit for 0.5 seconds",
            "Recharges every 8 seconds, up to 4 charges",
            "Recharge cycle affected by flame affinity: (8 / (1 + 2 X flame affinity)) seconds",
            "Chain: Glide - Decreases damage by 75% and adds splash effect",
            "Chain: Skill - Increases damage by 25% and stun duration by 200%"
        ]
    },
    {
        "id": "A0GV",
        "name": "Snipe",
        "heroClass": "Sniper",
        "color": "96ed9a",
        "hotkey": "[T]",
        "icon": "SniperT",
        "cooldown": 30,
        "order": 6,
        "passive": [
            "Captures enemies' weak points precisely from a far range.",
            "Enhanced vision",
            "Deals up to 30% bonus damage based on distance from target"
        ],
        "active": [
            "Finishes off an enemy from a far range.",
            "Attack Damage X 15 + AGI X 60 magic damage",
            "Deals 50% damage to other enemies that are hit by the arrow"
        ]
    },
    {
        "id": "A0GW",
        "name": "Demolition",
        "heroClass": "Sniper",
        "color": "b22222",
        "hotkey": "[F]",
        "icon": "SniperF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"Ruthless? Evil beings need no mercy..\" - Sniper",
            "Deals AGI X 175 magic damage",
            "Deals up to 40% bonus damage, based on target's missing health",
            "If cast from melee range, leaps before firing"
        ]
    },
    {
        "id": "A002",
        "name": "Soul Collector",
        "heroClass": "Soul Weaver",
        "color": "108f13",
        "hotkey": "[Passive]",
        "icon": "SoulWeaverPass",
        "order": 1,
        "passive": [
            "Expertise in black magic allows Soul Weaver to subjugate souls to her will.",
            "Regenerates (12 + MP regen / 30) souls per second",
            "Restores Max HP X 0.5% for each soul absorbed"
        ]
    },
    {
        "id": "A0NF",
        "name": "Harvest",
        "heroClass": "Soul Weaver",
        "color": "3e7942",
        "hotkey": "[A]",
        "icon": "SoulWeaverA",
        "cooldown": 2,
        "order": 2,
        "active": [
            "Sends out a spinning scythe that harvests the souls of enemies.",
            "Attack Damage X 150% pure damage per second (ignores target's defense)",
            "Absorbs 4 souls (10 souls for boss) per second",
            "Reduces target's healing received by 15% and movement speed by 60%",
            "Damage period reduced based on attack speed bonus"
        ]
    },
    {
        "id": "A0MW",
        "name": "Unholy Blast",
        "heroClass": "Soul Weaver",
        "color": "acd2aa",
        "hotkey": "[Q]",
        "icon": "SoulWeaverQ",
        "order": 3,
        "active": [
            "Fires shards made from concentrated souls.",
            "INT X 3 magic damage",
            "Increases damage taken by (5 + INT / 800)% and reduces speed by 40% for 5 seconds",
            "On consecutive casts, fires additional shards and stuns for 0.5 seconds"
        ]
    },
    {
        "id": "A0MZ",
        "name": "Soul Materia",
        "heroClass": "Soul Weaver",
        "color": "acd2aa",
        "hotkey": "[W]",
        "icon": "SoulWeaverW",
        "order": 4,
        "active": [
            "Surrounds self and nearby allies with spiritual barriers.",
            "Increases skill damage by (4 + INT / 375)% for 20 seconds",
            "Regenerates INT X 0.1 HP per second"
        ]
    },
    {
        "id": "A0N5",
        "name": "Soul Transfer",
        "heroClass": "Soul Weaver",
        "color": "58bb4a",
        "hotkey": "[E]",
        "icon": "SoulWeaverE",
        "cooldown": 6,
        "order": 5,
        "active": [
            "Transfers souls to or from the target.",
            "INT X 7.5 magic damage per second",
            "Absorbs 15 soul per second",
            "If ally, heals for INT X 2.5 per second",
            "Consumes 40 soul per second"
        ]
    },
    {
        "id": "A00U",
        "name": "Astral Walk",
        "heroClass": "Soul Weaver",
        "color": "58bb4a",
        "hotkey": "[R]",
        "icon": "SoulWeaverR",
        "order": 6,
        "active": [
            "Pierces through the souls of the living.",
            "INT X 9 magic damage",
            "Increases magic damage taken by enemies (Type-C) by 5% for 15 seconds",
            "Increases magic defense of you and allies by 15% for 45 seconds"
        ]
    },
    {
        "id": "A05I",
        "name": "Soul Cradle",
        "heroClass": "Soul Weaver",
        "color": "487913",
        "hotkey": "[T]",
        "icon": "SoulWeaverT",
        "cooldown": 60,
        "order": 7,
        "active": [
            "Summons a cradle that holds down the souls of the living.",
            "INT X 9 magic damage per second",
            "Periodically stuns for 1 second",
            "Prevents nearby allies' HP from dropping below 1",
            "Lasts 6 seconds"
        ]
    },
    {
        "id": "A04Q",
        "name": "Infinite Void",
        "heroClass": "Soul Weaver",
        "color": "487913",
        "hotkey": "[F]",
        "icon": "SoulWeaverF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"It's nightmare that you can't escape from !\" - Soul Weaver",
            "Pulls enemies in and silences them for 5 seconds",
            "On expiration, deals INT X 110 damage",
            "Stuns for 2.5 seconds",
            "Activation delay: 0.5 seconds"
        ]
    },
    {
        "id": "A0NE",
        "name": "Infusion",
        "heroClass": "Alchemist",
        "color": "d8f5ef",
        "hotkey": "[D]",
        "icon": "AlchemistD",
        "cooldown": 8,
        "order": 1,
        "passive": [
            "Affinity with the elementals allows one to practice effective alchemy",
            "Gains 10% bonus in INT while all elemental conjurings are active"
        ],
        "active": [
            "Use mana to allow sudden conjuring.",
            "Removes cast time and cooldown on next Conjuring",
            "Each 25% bonus in attack speed allows one more Conjuring to be affected"
        ]
    },
    {
        "id": "A0ND",
        "name": "Conjure Fire",
        "heroClass": "Alchemist",
        "color": "ecca82",
        "hotkey": "[Q]",
        "icon": "AlchemistQ",
        "proc_rate": 0,
        "cooldown": 10,
        "order": 2,
        "passive": [
            "Affinity with fire bleses you with potent power.",
            "Performing fire-related transmutation increases skill damage by 8% for 6 seconds"
        ],
        "active": [
            "Inscribe a fire transmutation circle to perform transmutations.",
            "Chainable with fire-related transmutations"
        ]
    },
    {
        "id": "A0NO",
        "name": "Blaze",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[Q] → [Q]",
        "icon": "AlchemistQ_Q",
        "proc_rate": 0.7,
        "order": 3,
        "active": [
            "Fires a flame bullet.",
            "Attack damage X 1.5 magic damage"
        ]
    },
    {
        "id": "A0NP",
        "name": "Magma Explosion",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[Q] → [W]",
        "icon": "AlchemistQ_W",
        "proc_rate": 0.7,
        "order": 4,
        "active": [
            "Draw forth magma from the grounds.",
            "INT X 7.5 bonus damage"
        ]
    },
    {
        "id": "A0NQ",
        "name": "Flamer",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[Q] → [E]",
        "icon": "AlchemistQ_E",
        "proc_rate": 0.7,
        "order": 5,
        "active": [
            "Vent powerful heat forward.",
            "Deal INT x 0.5 magic damage every 0.5 seconds for 2.5 seconds",
            "Inflicts burn that lasts 9 seconds",
            "Deals 100% bonus damage to slowed units",
            "Chainable: Stone Golem"
        ]
    },
    {
        "id": "A0NR",
        "name": "Boulder Strike",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[Q] → [R]",
        "icon": "AlchemistQ_R",
        "proc_rate": 0.7,
        "order": 6,
        "active": [
            "Drops down a flaming boulder.",
            "INT X 17 magic damage",
            "Deals 100% bonus damage to enemies below 40% HP/stunned/paused"
        ]
    },
    {
        "id": "A0NK",
        "name": "Conjure Water",
        "heroClass": "Alchemist",
        "color": "a2c6fb",
        "hotkey": "[W]",
        "icon": "AlchemistW",
        "proc_rate": 0,
        "cooldown": 10,
        "order": 7,
        "passive": [
            "Affinity with water grants regenerative properties.",
            "Water-based alchemy regenerates 15% HP over 6 seconds"
        ],
        "active": [
            "Create a transmutation circle of water to cast skills.",
            "Can be chained"
        ]
    },
    {
        "id": "A0NS",
        "name": "Water Bomb",
        "heroClass": "Alchemist",
        "color": "adbffc",
        "hotkey": "[W] → [Q]",
        "icon": "AlchemistW_Q",
        "proc_rate": 0.7,
        "order": 8,
        "active": [
            "Transmutes a water bomb.",
            "INT X 15 magic damage",
            "Explodes when it touches a boss unit or 10 seconds elapse",
            "Burning units take 133% bonus damage",
            "On recast, refreshes the duration and increases its damage by 100% (up to 3 times)",
            "Up to 1 bomb can be active at once",
            "Chain: Wind Blast (pushes the bomb away)"
        ]
    },
    {
        "id": "A0NT",
        "name": "Water Stream",
        "heroClass": "Alchemist",
        "color": "adbffc",
        "hotkey": "[W] → [W]",
        "icon": "AlchemistW_W",
        "proc_rate": 0.7,
        "order": 9,
        "active": [
            "Fire streams of water frontward.",
            "Each bullet deals INT X 0.5 magic damage",
            "Heals allies hit for 20% of damage",
            "Slow effect"
        ]
    },
    {
        "id": "A0NU",
        "name": "Icicle Transmutation",
        "heroClass": "Alchemist",
        "color": "adbffc",
        "hotkey": "[W] → [E]",
        "icon": "AlchemistW_E",
        "proc_rate": 0.7,
        "order": 10,
        "active": [
            "Transmutes an icicle.",
            "INT X 11.5 magic damage",
            "Freezes target for 1.5 seconds"
        ]
    },
    {
        "id": "A0O4",
        "name": "Healing Rain",
        "heroClass": "Alchemist",
        "color": "adbffc",
        "hotkey": "[W] → [R]",
        "icon": "AlchemistW_R",
        "proc_rate": 0.7,
        "order": 12,
        "active": [
            "Transmute a cloud that brings down rain to nearby area.",
            "Heals for INT X 0.07 per second",
            "Nullifies HP lost from Gate of Truth while active",
            "Chain: Eye of the Storm"
        ]
    },
    {
        "id": "A0NL",
        "name": "Conjure Air",
        "heroClass": "Alchemist",
        "color": "ddf8cd",
        "hotkey": "[E]",
        "icon": "AlchemistE",
        "proc_rate": 0,
        "cooldown": 10,
        "order": 13,
        "passive": [
            "Affinity with wind blesses you with energy.",
            "Performing wind-related transmutation grants 75 movement speed for 6 seconds"
        ],
        "active": [
            "Inscribes a wind transmutation circle to perform transmutations.",
            "Chainable with wind-related transmutations"
        ]
    },
    {
        "id": "A0NW",
        "name": "Burning Hand",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[E] → [Q]",
        "icon": "AlchemistE_Q",
        "proc_rate": 0.7,
        "order": 14,
        "active": [
            "Enchants your hands with fire and wind.",
            "Increase pure attack speed by 25% for 120 seconds",
            "Grants 15% chance to activate Ignite on skill cast",
            "Chain: Blaze"
        ]
    },
    {
        "id": "A0NZ",
        "name": "Eye of the Storm",
        "heroClass": "Alchemist",
        "color": "d0dab1",
        "hotkey": "[E] → [W]",
        "icon": "AlchemistE_W",
        "proc_rate": 0.7,
        "order": 15,
        "active": [
            "Summon an eye of the storm at the target location.",
            "Attacks nearby enemies with INT X .75 damage",
            "Its attack speed is temporarily increased when a Wind transmutation is performed",
            "On recast, moves the Eye to the target location and increases duration"
        ]
    },
    {
        "id": "A0O0",
        "name": "Wind Blast",
        "heroClass": "Alchemist",
        "color": "d0dab1",
        "hotkey": "[E] → [E]",
        "icon": "AlchemistE_E",
        "proc_rate": 0.7,
        "order": 16,
        "active": [
            "Send forth a strong gust of wind.",
            "INT X 7.5 bonus damage",
            "Knocks back non-boss enemies"
        ]
    },
    {
        "id": "A0O2",
        "name": "Rock storm",
        "heroClass": "Alchemist",
        "color": "d0dab1",
        "hotkey": "[E] → [R]",
        "icon": "AlchemistE_R",
        "proc_rate": 0.7,
        "order": 17,
        "active": [
            "Creates a fierce storm of rocks.",
            "Drops 5 rocks over target area",
            "Each rock deals INT X 3.3 bonus damage",
            "Chain: Magma Explosion (increases damage of rock by 100~150%)"
        ]
    },
    {
        "id": "A0NM",
        "name": "Conjure Earth",
        "heroClass": "Alchemist",
        "color": "afeb8c",
        "hotkey": "[R]",
        "icon": "AlchemistR",
        "proc_rate": 0,
        "cooldown": 10,
        "order": 18,
        "passive": [
            "Affinity with earth enhances your stamina.",
            "Earth transmutation increases magic defense by 15% for 6 seconds"
        ],
        "active": [
            "Create a transmutation circle of earth to cast skills.",
            "Can be chained"
        ]
    },
    {
        "id": "A0O3",
        "name": "Conjure Cannon",
        "heroClass": "Alchemist",
        "color": "c5aa83",
        "hotkey": "[R] → [Q]",
        "icon": "AlchemistR_Q",
        "proc_rate": 0.7,
        "order": 19,
        "active": [
            "Transmutes a cannon to fire a powerful cannonball.",
            "INT X 7.5 magic damage",
            "Also fired from existing cannons",
            "Cannon will disappear if you move far away from it or 10 seconds elapse",
            "Up to 5 cannons can be active at once"
        ]
    },
    {
        "id": "A0NV",
        "name": "Potion Transmutation",
        "heroClass": "Alchemist",
        "color": "ff8080",
        "hotkey": "[R] → [W]",
        "icon": "AlchemistR_W",
        "proc_rate": 0.7,
        "order": 20,
        "active": [
            "Conjures a useful potion.",
            "Better potions can be created with higher skill level",
            "Higher chance to create better potions with higher INT",
            "Chainable: Water Stream"
        ]
    },
    {
        "id": "A0O5",
        "name": "Ground Collapse",
        "heroClass": "Alchemist",
        "color": "c5aa83",
        "hotkey": "[R] → [E]",
        "icon": "AlchemistR_E",
        "proc_rate": 0.7,
        "order": 21,
        "active": [
            "Collapses the ground with strong pulses.",
            "INT X 6 bonus damage",
            "Decreases enemies' attack speed and movement speed by 80% for 3 seconds",
            "Chain: Stone Golem - Power Slam"
        ]
    },
    {
        "id": "A0O7",
        "name": "Stone Golem",
        "heroClass": "Alchemist",
        "color": "c5aa83",
        "hotkey": "[R] → [R]",
        "icon": "AlchemistR_R",
        "proc_rate": 0.7,
        "order": 22,
        "active": [
            "Summon a golem.",
            "Deals INT X 3 damage on attack",
            "Attains special abilities based on level",
            "Movement speed: 400"
        ]
    },
    {
        "id": "A0O8",
        "name": "Earth Protection",
        "heroClass": "Alchemist",
        "color": "afeb8c",
        "hotkey": "[R] → [R] → [Passive]",
        "icon": "AlchemistSummonPass",
        "order": 23,
        "passive": [
            "Becomes hard like the earth.",
            "Reduces damage taken by (summoner's INT / 5) (up to 70% of damage taken)",
            "Decreases magic damage taken by 40%",
            "Each earth-based transmutation performed by Alchemist grants 40 armor (max 10 stacks)"
        ]
    },
    {
        "id": "A00F",
        "name": "Recall",
        "heroClass": "Alchemist",
        "color": "52E252",
        "hotkey": "[R] → [R] → [D]",
        "order": 24,
        "icon": "Recall",
        "cooldown": 1,
        "active": [
            "Teleport to summoner's position."
        ]
    },
    {
        "id": "A0O9",
        "name": "Taunt",
        "heroClass": "Alchemist",
        "color": "afeb8c",
        "hotkey": "[R] → [R] → [Q]",
        "icon": "AlchemistR_R_Q",
        "cooldown": 8,
        "order": 25,
        "active": [
            "Focus nearby enemies' attacks onto self."
        ]
    },
    {
        "id": "A0OA",
        "name": "Rolling Golem",
        "heroClass": "Alchemist",
        "color": "c5aa83",
        "hotkey": "[R] → [R] → [W]",
        "icon": "AlchemistR_R_W",
        "cooldown": 20,
        "order": 26,
        "active": [
            "Roll in a line",
            "INT X 6 magic damage",
            "Increase damage taken by collided enemies by 6% for 8 seconds"
        ]
    },
    {
        "id": "A0OB",
        "name": "Power Slam",
        "heroClass": "Alchemist",
        "color": "c5aa83",
        "hotkey": "[R] → [R] → [E]",
        "icon": "AlchemistR_R_E",
        "cooldown": 30,
        "order": 27,
        "active": [
            "Creates a shockwave by slamming down.",
            "Summoner's attack damage X 1.5 + INT X 9 magic damage",
            "Consumes armor increased by Conjure Earth, dealing 20% bonus damage per consumed stack"
        ]
    },
    {
        "id": "A0NN",
        "name": "Philosopher's Stone",
        "heroClass": "Alchemist",
        "color": "ddb3f7",
        "hotkey": "[T]",
        "icon": "AlchemistT",
        "cooldown": 40,
        "order": 28,
        "active": [
            "Uses a mystical reagent known as Philosopher's Stone to amplify your transmutations.",
            "Resets cooldowns on all transmutations",
            "Increases damage dealt by 15% for 10 seconds",
            "Next 5 transmutations do not incur cooldown and deals 50% more damage if it hasn't been activated previously"
        ]
    },
    {
        "id": "A0OC",
        "name": "Gate of Truth",
        "heroClass": "Alchemist",
        "color": "f7b395",
        "hotkey": "[F]",
        "icon": "AlchemistF",
        "cooldown": 60,
        "order": 29,
        "active": [
            "\"I don't know what is the 'truth' of this world. However, as I look at his efforts and sacrifices in attempts to reach it, I believe something truly fascinating is awaiting him at the end of his road.\" - A Scholar of Prius",
            "Consumes Max HP X (5 + 0.50 X elapsed seconds)% per second",
            "Increases INT by 1.5% on every second and on every skill cast (up to 30%)",
            "Reduces damage taken by 25%",
            "On expiration, deals INT X 100 magic damage to nearby enemies and stuns for 2.5 seconds"
        ]
    },
    {
        "id": "A0OD",
        "name": "Obtain Truth",
        "heroClass": "Alchemist",
        "color": "80ffff",
        "hotkey": "[F] → [F]",
        "icon": "AlchemistF_F",
        "order": 30,
        "active": [
            "\"I've obtained the truth I was seeking for.\" - Alchemist",
            "Closes the Gate of Truth"
        ]
    },
    {
        "id": "A0UH",
        "name": "Dark Whisper",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[Passive]",
        "icon": "WarlockPass",
        "order": 1,
        "passive": [
            "A twisted magic that allows you to steal target's flows of life and mana.",
            "Deals INT X 0.5 magic damage on every attack",
            "Every 4th attack deals 6x damage and restores 6% HP, 50 + 10% MP"
        ]
    },
    {
        "id": "A0UG",
        "name": "Crucifixion",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[Q]",
        "icon": "WarlockQ",
        "cooldown": 0.5,
        "order": 2,
        "active": [
            "Calls an evil spirit to rip apart dimension in the form of a cross.",
            "Consumes Max MP X 30%",
            "INT X 10 + Max MP X 0.5 magic damage",
            "Deals 100% bonus damage to enemies in center and decreases their movement speed by 90% for 2 seconds"
        ]
    },
    {
        "id": "A0UI",
        "name": "Dimension Collapse",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[W]",
        "icon": "WarlockW",
        "cooldown": 0.1,
        "order": 3,
        "active": [
            "Creates an opening in dimension that spews corrupt energy to attack nearby enemies.",
            "Consumes Max MP X 30%",
            "Attacks every 2.5 seconds, dealing Max MP X 0.8 magic damage",
            "Gate's attack speed is increased by 1% for each 1% of pure attack speed bonus",
            "Can maintain up to a maximum of 2 gates"
        ]
    },
    {
        "id": "A0UJ",
        "name": "Vengeance",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[E]",
        "icon": "WarlockE",
        "cooldown": 24,
        "order": 4,
        "active": [
            "Summons a vengeful spirit that absorbs damage and reflects them back at the attackers.",
            "Deals INT X 7.5 magic damage per second for 2.5 seconds",
            "Increases movement speed by 150",
            "Absorbs own damage taken by 70% and allies' damage taken by 35%",
            "On expiration, reflects 1500% of absorbed damage as pure damage at nearby enemies"
        ]
    },
    {
        "id": "A0UK",
        "name": "Soul Grimoire",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[R]",
        "icon": "WarlockR",
        "order": 5,
        "passive": [
            "Amplifies your magic with grimoire that is inscribed with ancient demons' powers.",
            "Total damage increased by 10%, max HP increased by 25%",
            "MP regen increased by 75 + 100%"
        ],
        "active": [
            "Unleashes the grimoire and let your magic run wild.",
            "Consumes 5 souls per second",
            "Focus attacks of Dimension Collapse onto targeted area",
            "Gates have 100% increased damage and 200% increased attack speed for the cast",
            "1 soul is restored when landing Crucifixion and every 1.5 seconds (up to 20)"
        ]
    },
    {
        "id": "A0UL",
        "name": "Demonic Fury",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T]",
        "icon": "WarlockT",
        "cooldown": 75,
        "order": 6,
        "active": [
            "Obtains a demon's body at the cost of one's own soul.",
            "Consumes 150 MP per second",
            "Restores all MP and souls",
            "Armor increased by 100 & max HP and magic defense increased by 25%",
            "Changes skills partially",
            "After 5 seconds, consumed MP increases by 50% and total damage increases by 1% every second (up to 15%)"
        ]
    },
    {
        "id": "A0US",
        "name": "Hunger",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T] → [Passive]",
        "icon": "WarlockT_Pass1",
        "order": 7,
        "passive": [
            "Try to satisfy my hunger..",
            "Gains 1 stack of Hunger every 0.75 seconds (up to 10 stacks)",
            "Next attack consumes all Hunger stacks, dealing INT X 7.5 magic damage and healing you for Max HP X 4% per consumed stack"
        ]
    },
    {
        "id": "A0UR",
        "name": "Flames of Ruin",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T] → [Passive]",
        "icon": "WarlockT_Pass2",
        "order": 8,
        "passive": [
            "What can you do in the face of destruction?",
            "Dimension Collapse obtains 40% increased damage and 100% increased range",
            "Dimension Collapse lasts permanently",
            "Becomes immune to CC effects while casting Soul Grimoire"
        ]
    },
    {
        "id": "A0UQ",
        "name": "Destruction",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T] → [Q]",
        "icon": "WarlockT_Q",
        "cooldown": 12,
        "order": 9,
        "active": [
            "Embrace your end!",
            "Activates Crucifixion at target area (5 + Attack Speed / 25) times"
        ]
    },
    {
        "id": "A0UT",
        "name": "Leap of Execution",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T] → [W]",
        "icon": "WarlockT_W",
        "cooldown": 9,
        "order": 10,
        "active": [
            "Leaps forward to execute enemies.",
            "INT X 25 magic damage",
            "Deal up to 150% bonus damage based on target's lost health",
            "Stuns for 1 second"
        ]
    },
    {
        "id": "A0EL",
        "name": "Soul Offering",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[T] → [F]",
        "icon": "WarlockT_F",
        "order": 11,
        "active": [
            "Offers everything to the devil.",
            "Reduces empower interval from 1 second to 0.25 seconds",
            "Increases Hunger stack speed by 3x"
        ]
    },
    {
        "id": "A0UM",
        "name": "Apocalypse",
        "heroClass": "Warlock",
        "color": "9465e2",
        "hotkey": "[F]",
        "icon": "WarlockF",
        "cooldown": 120,
        "order": 12,
        "active": [
            "\"Seems like the time to unleash my evil left hand has come..\" - Haran",
            "INT X 50 + Max MP X 7.5 magic damage per second",
            "Roots nearby enemies",
            "Lasts 3 seconds"
        ]
    },
    {
        "id": "A0YS",
        "name": "Blood Mastery",
        "heroClass": "Blood Weaver",
        "color": "ff6666",
        "hotkey": "[Passive]",
        "icon": "BloodWeaverPass",
        "order": 1,
        "passive": [
            "Manipulates blood through black magic.",
            "Increases max HP by INT X 4",
            "Periodically charges blood gauge every (6 - 0.04 X Hero Level)",
            "On next attack, consumes blood gauge to deal Max HP X 25% pure damage and heal for Max HP X 8%"
        ]
    },
    {
        "id": "A1BB",
        "name": "Blood Claw",
        "heroClass": "Blood Weaver",
        "color": "ff1a1a",
        "hotkey": "[Q]",
        "icon": "BloodWeaverQ",
        "cooldown": 0.4,
        "order": 2,
        "passive": [
            "Unleash blades made from the spilled blood of your enemies.",
            "Activates on every 4th attack",
            "Attack Damage X 0.5 magic damage"
        ],
        "active": [
            "Focus blood into the tips of your nails.",
            "Consumes Max HP X 12%",
            "Deals Attack Damage X 0.8 magic damage",
            "Can be cast up to 4 additional times, each cast increasing damage by 125% and HP cost by 100%",
            "After 5th cast, enters cooldown for 1.5 seconds"
        ]
    },
    {
        "id": "A0YW",
        "name": "Rose Dance",
        "heroClass": "Blood Weaver",
        "color": "ff4d94",
        "hotkey": "[W]",
        "icon": "BloodWeaverW",
        "cooldown": 8,
        "order": 3,
        "active": [
            "Swiftly move by transforming into bats.",
            "Consumes Max HP X 15%",
            "Max HP X 2.5 magic damage",
            "Invulnerable while travelling"
        ]
    },
    {
        "id": "A0YY",
        "name": "Life Drain",
        "heroClass": "Blood Weaver",
        "color": "ff4d4d",
        "hotkey": "[E]",
        "icon": "BloodWeaverE",
        "cooldown": 12,
        "order": 4,
        "passive": [
            "Blood spilled by enemies become Blood Weaver's flesh.",
            "Stores 2% of damage dealt as shield",
            "Can store up to maximum of INT X 2"
        ],
        "active": [
            "Pull target toward yourself to drain life out of it.",
            "Every 0.125 seconds, inflict MAX HP x 0.3 magic damage",
            "INT X 3.75 magic damage",
            "Each damage instance restores 10% MAX HP",
            "Lasts up to 2 seconds, or until the Blood Weaver is full health"
        ]
    },
    {
        "id": "A0Z0",
        "name": "Blood Boil",
        "heroClass": "Blood Weaver",
        "color": "cc0000",
        "hotkey": "[R]",
        "icon": "BloodWeaverR",
        "cooldown": 15,
        "order": 5,
        "passive": [
            "Incites yourself through stimulation of blood.",
            "Casting a skill refills 1 blood gauge"
        ],
        "active": [
            "Rallies allies by stimulating their blood.",
            "Increases attack damage and HP by 20% for (6 + STR / 750) seconds",
            "Increases your attack speed by 50%, healing received by 20% and each attack will restore 1 blood gauge on attack",
            "Rose Dance's cast time and cooldown are removed and can be cast up to 3 times without incurring HP consumption"
        ]
    },
    {
        "id": "A0Z3",
        "name": "Crimson Pillar",
        "heroClass": "Blood Weaver",
        "color": "990000",
        "hotkey": "[T]",
        "icon": "BloodWeaverT",
        "cooldown": 30,
        "order": 6,
        "active": [
            "Purify enemies with a ritual of blood.",
            "Max HP X 15 magic damage",
            "Pulls in enemes that are far away"
        ]
    },
    {
        "id": "A0YU",
        "name": "Sacrifice",
        "heroClass": "Blood Weaver",
        "color": "990000",
        "hotkey": "[F]",
        "icon": "BloodWeaverF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"I shall beautify you even further !\"",
            "Creates 20 spears over 2 seconds, inflicting Attack Damage X 1 + MAX HP X 70% magic damage per spear",
            "Deals up to 40% bonus damage based on target's missing HP (max damage reached at 40% HP)",
            "Becomes immune to CC effects while casting"
        ]
    },
    {
        "id": "A00K",
        "name": "Flame Mastery",
        "heroClass": "Fire Mage",
        "color": "f77575",
        "hotkey": "[Passive]",
        "icon": "FireMagePass",
        "order": 1,
        "passive": [
            "Her expertise in magic allows her to bend flames to her will.",
            "Landing attacks or skills inflict Burn, dealing 40% additional damage (minimum INT X 2.5) over 2.5 seconds",
            "After casting skill, envelops feet in a trail of flame to increase movement speed by 250 for 1.5 seconds",
            "Burning unit will explode on death"
        ]
    },
    {
        "id": "A007",
        "name": "Fireball",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[Q]",
        "icon": "FireMageQ",
        "cooldown": 5,
        "order": 2,
        "active": [
            "Gather the element of fire into a single orb, and shoot it at the target.",
            "INT X 8 magic damage",
            "Deals additional damage equal to 25% of the burn damage the target is currently taking",
            "Stuns for 1 second"
        ]
    },
    {
        "id": "A00J",
        "name": "Flame Spirit",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[W]",
        "icon": "FireMageW",
        "cooldown": 10,
        "order": 3,
        "passive": [
            "Spirits of flames are able to heal allies.",
            "Increases HP regen of allies touching fire trails by (Target's Max HP X 5%)"
        ],
        "active": [
            "Summons a spirit of flame to engulf the target or the ground.",
            "Each second deals INT X 1.75 magic damage",
            "Lasts 5 seconds",
            "On ally: Removes debuffs, provides shield absorbing INT X 1.5 damage",
            "On ground: Stuns for 2 seconds, lasts 50% longer"
        ]
    },
    {
        "id": "A015",
        "name": "Flame Nova",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[E]",
        "icon": "FireMageE",
        "cooldown": 10,
        "order": 4,
        "active": [
            "Create a fiery explosion by converting mana in the atmosphere into fire.",
            "INT X 30 magic damage",
            "Damage amplified by 30% each time it travels outward"
        ]
    },
    {
        "id": "A01J",
        "name": "Flame Combustion",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[R]",
        "icon": "FireMageR",
        "cooldown": 10,
        "order": 5,
        "active": [
            "Concentrates flames into a single point, creating a massive combustion of mana.",
            "INT X 20 magic damage",
            "Amplifies Burn damage by 50% for 5 seconds"
        ]
    },
    {
        "id": "A074",
        "name": "Meteor Fragment",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[T]",
        "icon": "FireMageT",
        "cooldown": 40,
        "order": 6,
        "active": [
            "Calls down meteor fragments that are drifting around the atmosphere.",
            "Each meteorite deals INT X 15 magic damage",
            "Drops a total of 5 fragments"
        ]
    },
    {
        "id": "A0FG",
        "name": "Meteor Strike",
        "heroClass": "Fire Mage",
        "color": "b22222",
        "hotkey": "[F]",
        "icon": "FireMageF",
        "cooldown": 100,
        "order": 7,
        "passive": [
            "Fireball's base damage increased by 200%"
        ],
        "active": [
            "\"Imagine a huge rock falling through the atmosphere onto the ground. Don't worry, the Earth won't be destroyed. It's not that big, and only you will be engulfed in the explosion..  \" - Mage",
            "INT X 175 magic damage"
        ]
    },
    {
        "id": "A0CN",
        "name": "Probe",
        "heroClass": "Shooter",
        "color": "cc99ff",
        "hotkey": "[D]",
        "icon": "ShooterD",
        "cooldown": 1,
        "order": 1,
        "passive": [
            "Control drones that can assist allies.",
            "Assists Shooter's attacks with AGI X 5 pure damage (affected by attack speed)",
            "Can attach onto allies",
            "Can summon up to 3 probes"
        ],
        "active": [
            "Recall all probes back to Shooter.",
            "Assists Shooter's attacks"
        ]
    },
    {
        "id": "A0CT",
        "name": "Twin Star",
        "heroClass": "Shooter",
        "color": "ccccff",
        "hotkey": "[Q]",
        "icon": "ShooterQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Fires magic bullets in two directions.",
            "(AGI + INT) X 7.5 pure damage per bullet",
            "Consecutive hits increases damage dealt by 50% (up to 2 times)",
            "Cooldown is reset upon firing another magic bullet"
        ]
    },
    {
        "id": "A0GC",
        "name": "Water Bullet",
        "heroClass": "Shooter",
        "color": "96b8f5",
        "hotkey": "[Q]",
        "icon": "ShooterQ_2",
        "cooldown": 3,
        "order": 3,
        "active": [
            "Fires a magic water bullet that bounces around.",
            "If enemy, deals INT X 7.5 damage",
            "If ally, heals INT X 3 HP",
            "If ally, increases magic defense by 25% for 3 seconds",
            "Cooldown is reset upon firing a magic bullet",
            "Bounces twice with Hydro Buster and has 1s longer cooldown",
            "Bounces thrice with Rainmaker"
        ]
    },
    {
        "id": "A10H",
        "name": "Nanomachine Injection",
        "heroClass": "Shooter",
        "color": "b3fff0",
        "hotkey": "[W]",
        "icon": "ShooterW",
        "cooldown": 15,
        "order": 4,
        "passive": [
            "Heal allies using microscopic machines.",
            "Probes heal allies for (Target's MAX HP X 2% + INT X 0.2) health"
        ],
        "active": [
            "Form protective barriers by driving nanomachines into a frenzy.",
            "Creates a barrier that absorbs (Target's MAX HP X 25% + INT X 2.5) damage for 2 seconds",
            "Increases target's movement speed by 100",
            "Removes target's debuffs"
        ]
    },
    {
        "id": "A0LG",
        "name": "Break Shot",
        "heroClass": "Shooter",
        "color": "e6f2ff",
        "hotkey": "[E]",
        "icon": "ShooterE",
        "cooldown": 10,
        "order": 5,
        "active": [
            "Fire a charged magic bullet, and disengage using the recoil.",
            "Attack damage X 1.5 + AGI X 7.5 magic damage",
            "Deals up to 300% bonus damage based on knockback distance"
        ]
    },
    {
        "id": "A0KD",
        "name": "Distortion",
        "heroClass": "Shooter",
        "color": "80ccff",
        "hotkey": "[R]",
        "icon": "ShooterR",
        "proc_rate": 0.5,
        "order": 6,
        "active": [
            "Fires a bullet that can distort dimensions.",
            "Main Stat X 7.5 magic damage",
            "Increases target's damage taken by (7 + INT / 600)% and reduces its movement speed for 3 seconds",
            "Knocksback target if cast consecutively",
            "Recharges every 15 seconds (affected by pure attack speed)"
        ]
    },
    {
        "id": "A0VJ",
        "name": "Stardust Rain",
        "heroClass": "Shooter",
        "color": "4dffc3",
        "hotkey": "[T]",
        "icon": "ShooterT",
        "cooldown": 40,
        "order": 7,
        "passive": [
            "Enhance probes' attacks.",
            "When landing Q/E/R on a boss unit, fires additional magic bullets dealing Attack Damage X 0.3 + Main Stat X 2.5 magic damage (3 bullets for Q/R, 6 bullets for E)"
        ],
        "active": [
            "Relentlessly fire magic bullets together with the probes.",
            "Fires 24 missiles per second up to 2.5 seconds",
            "Each 1% bonus in pure attack speed increases fire count by 0.5%"
        ]
    },
    {
        "id": "A0VZ",
        "name": "Comet Storm",
        "heroClass": "Shooter",
        "color": "b3ffe6",
        "hotkey": "[F]",
        "icon": "ShooterF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"Justice rains from the sky!\" - Shooter",
            "Each bullet deals attack damage X 2.5 + Main Stat X 10 magic damage",
            "A total of 10 bullets are fired",
            "Binds target's actions for 2 seconds"
        ]
    },
    {
        "id": "A05E",
        "name": "Sword Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[D]",
        "icon": "SwordEnchanterD",
        "cooldown": 1,
        "order": 1,
        "passive": [
            "Ability to project swords.",
            "On every 8th attack, summons an Enchanted Sword",
            "On next attack, Enchanted Sword can be consumed to deal Attack Damage X 1.25 bonus damage (50% damage to nearby targets)",
            "While Enchanted Sword is active, you can quickly dash onto enemies",
            "Can summon up to 5 swords at once"
        ],
        "toggle": [
            "Prevents dash from activating."
        ]
    },
    {
        "id": "A0DH",
        "name": "Weapon Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[Q]",
        "icon": "SwordEnchanterQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Takes some swords out from the treasury.",
            "Projects 2 Enchanted Swords"
        ]
    },
    {
        "id": "A17W",
        "name": "Speed Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[W]",
        "icon": "SwordEnchanterW",
        "cooldown": 8,
        "order": 3,
        "active": [
            "Reads a chant that boosts speed.",
            "Projects 2 Enchanted Swords",
            "Increases movement speed by 400 & dodge chance by 60% for 6 seconds",
            "Sword Enchant - Projects an Enchanted Sword for every 175 distance travelled",
            "Does not stack with Power Enchant"
        ]
    },
    {
        "id": "A0DJ",
        "name": "Power Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[E]",
        "icon": "SwordEnchanterE",
        "cooldown": 15,
        "order": 4,
        "active": [
            "Reads a chant that boosts strength.",
            "Projects 2 Enchanted Swords",
            "Increases damage dealt by 5% & attack damage by 20% for 4 seconds",
            "Sword Enchant - Damage increased by 30% and attack count needed for sword projection is reduced to 2",
            "Does not stack with Speed Enchant"
        ]
    },
    {
        "id": "A0DM",
        "name": "Guard Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[R]",
        "icon": "SwordEnchanterR",
        "cooldown": 20,
        "order": 5,
        "active": [
            "Reads a chant that boosts endurance.",
            "Projects 2 Enchanted Swords",
            "Clears debuffs and reduces damage taken by 50% for 3 seconds",
            "Sword Enchant - When taking damage from melee range, halvens the damage received and strikes back with an Enchanted Sword"
        ]
    },
    {
        "id": "A0DN",
        "name": "Enchant Mastery",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[T]",
        "icon": "SwordEnchanterT",
        "cooldown": 30,
        "order": 6,
        "passive": [
            "Profound mastery allows Sword Enchanter to disintegrate the armors of her enemies.",
            "Increases damage of Sword Enchant by 30%"
        ],
        "active": [
            "Empowers your chant to make it resonate further.",
            "Next enchant affects nearby allies as well"
        ]
    },
    {
        "id": "A0DI",
        "name": "Speed Enchant - allies only",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[T] → [W]",
        "icon": "SwordEnchanterW",
        "cooldown": 30,
        "order": 7,
        "active": [
            "Reads a chant that boosts speed.",
            "Increases movement speed by 400 & dodge chance by 60% for 6 seconds"
        ]
    },
    {
        "id": "A18J",
        "name": "Power Enchant - allies only",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[T] → [E]",
        "icon": "SwordEnchanterE",
        "cooldown": 30,
        "order": 8,
        "active": [
            "Reads a chant that boosts strength.",
            "Increases damage dealt by 5% & attack damage by 20% for 4 seconds"
        ]
    },
    {
        "id": "A13Y",
        "name": "Guard Enchant - allies only",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[T] → [R]",
        "icon": "SwordEnchanterR",
        "cooldown": 30,
        "order": 9,
        "active": [
            "Reads a chant that boosts endurance.",
            "Clears debuffs and reduces damage taken by 50% for 3 seconds"
        ]
    },
    {
        "id": "A0DY",
        "name": "Ultimate Enchant",
        "heroClass": "Sword Enchanter",
        "color": "dfdfdf",
        "hotkey": "[F]",
        "icon": "SwordEnchanterF",
        "cooldown": 60,
        "order": 10,
        "active": [
            "\"I'll show you the most powerful sword I have in my treasury !!\" - Sword Enchanter",
            "AGI X 125 magic damage",
            "Stuns for 3 seconds",
            "Increases target's damage taken from Sword Enchant by 50% and reduces its healing taken by 20% for 7.5 seconds"
        ]
    },
    {
        "id": "A0EJ",
        "name": "Beyond the Horizon",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[D]",
        "icon": "GunnerD",
        "cooldown": 1,
        "order": 1,
        "passive": [
            "He insists on using a revolver even though countless firearms now surpass it in terms of power or convenience.",
            "Attacks never miss and ignore 100% of target's armor",
            "Can reload up to 6 bullets",
            "Requires 0.7 seconds of reloading when depleted",
            "Attacks deal only 40% damage to boss units"
        ],
        "active": [
            "Reloads all bullets."
        ]
    },
    {
        "id": "A0EK",
        "name": "Tumble",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[Q]",
        "icon": "GunnerQ",
        "cooldown": 4.5,
        "order": 2,
        "active": [
            "Travels a short distance by tumbling.",
            "Increases next bullet's damage by 300%",
            "Decreases damage taken by 60% while tumbling",
            "Cooldown is reset if reloaded with all bullets depleted"
        ]
    },
    {
        "id": "A0EM",
        "name": "Outlaw",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[W]",
        "icon": "GunnerW",
        "cooldown": 7.5,
        "order": 3,
        "active": [
            "Barrages nearby area with bullets.",
            "Consumes 3 bullets",
            "Each bullet inflicts attack damage X 0.25 + AGI X 2.5 magic damage",
            "Has (33% + crit chance) to critically strike",
            "If cast after Tumble, consumes 100% additional bullets"
        ]
    },
    {
        "id": "A10G",
        "name": "HE Bomb",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[E]",
        "icon": "GunnerE",
        "cooldown": 12,
        "order": 4,
        "active": [
            "Throws four highly explosive bombs.",
            "Each bomb deals AGI X 6 magic damage",
            "Inflicts burn for 6 second, dealing AGI X 8 pure damage per second",
            "If cast while tumbling, throws 3 additional bombs"
        ]
    },
    {
        "id": "A0ER",
        "name": "Fanning",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[R]",
        "icon": "GunnerR",
        "cooldown": 15,
        "order": 5,
        "active": [
            "Fires all bullets in a quick succession.",
            "Consumes all bullets",
            "Each attack deals Attack Damage X 1.75 pure damage",
            "Instantly reloads all bullets when used during Bullet Time"
        ]
    },
    {
        "id": "A0ET",
        "name": "Bullet Time",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[T]",
        "icon": "GunnerT",
        "cooldown": 40,
        "order": 6,
        "active": [
            "Discards used up revolvers instead of reloading them.",
            "Increases attack speed by 150% and reduces base attack cooldown by 50%",
            "Increases movement speed by 250",
            "Increases reload speed by 300%",
            "Reduces related skills' cooldown by 66% and resets their cooldowns",
            "Outlaw and Fanning no longer consumes bullets, and allows casting while moving",
            "Lasts 8 seconds"
        ]
    },
    {
        "id": "A0F3",
        "name": "Deadeye",
        "heroClass": "Gunner",
        "color": "dfbe9f",
        "hotkey": "[F]",
        "icon": "GunnerF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"Draw\" - Gunner",
            "Consumes all bullets",
            "Attack Damage X 20 + AGI X 100 magic damage",
            "Stuns for 1 second",
            "Deals up to 40% bonus damage based on target's missing HP"
        ]
    },
    {
        "id": "A000",
        "name": "Quick Draw",
        "heroClass": "Swordsman",
        "color": "acbde3",
        "hotkey": "[Passive]",
        "icon": "SwordsmanPass",
        "order": 1,
        "passive": [
            "Focus ki into every action to perform powerful attacks.",
            "Attack hits all enemies within radius",
            "On skill cast, empowers next attack to deal (Attack Damage X 0.85 + AGI X 5.5) pure damage",
            "Can critically strike",
            "Base attack speed decreased"
        ]
    },
    {
        "id": "A003",
        "name": "Rising Dragon Strike",
        "heroClass": "Swordsman",
        "color": "bad5fc",
        "hotkey": "[Q]",
        "icon": "SwordsmanQ",
        "cooldown": 8,
        "order": 2,
        "active": [
            "Slashes target upward with an earth-shattering slash.",
            "AGI X 3 magic damage",
            "Chain - Slice"
        ]
    },
    {
        "id": "A005",
        "name": "Slice",
        "heroClass": "Swordsman",
        "color": "929efa",
        "hotkey": "[Q] → [W]",
        "icon": "SwordsmanQ_W",
        "order": 3,
        "active": [
            "Dashes forward, quickly slashing enemies on your path.",
            "AGI X (5 + Hero Level /5) pure damage"
        ]
    },
    {
        "id": "A0BM",
        "name": "Crescent Slash",
        "heroClass": "Swordsman",
        "color": "7eaffa",
        "hotkey": "[W]",
        "icon": "SwordsmanW",
        "cooldown": 8,
        "order": 4,
        "active": [
            "Swiftly approach to attack, drawing a crescent slash.",
            "AGI X 3.75 magic damage",
            "For 4 seconds, Quick Draw lands as critical strikes against the target",
            "Chain - Wind Slash"
        ]
    },
    {
        "id": "A021",
        "name": "Wind Slash",
        "heroClass": "Swordsman",
        "color": "8eaffd",
        "hotkey": "[W] → [E]",
        "icon": "SwordsmanW_E",
        "order": 5,
        "active": [
            "Knocks back nearby enemies using wind-engulfed blade.",
            "AGI X 7 magic damage",
            "Knocks back non-boss enemies"
        ]
    },
    {
        "id": "A14O",
        "name": "Sword Storm",
        "heroClass": "Swordsman",
        "color": "8eaffd",
        "hotkey": "[E]",
        "icon": "SwordsmanE",
        "cooldown": 15,
        "order": 6,
        "active": [
            "Surrounds yourself with a fierce bladestorm.",
            "AGI X 1.5 magic damage per second for 6 seconds",
            "Increases movement speed by 200 and magic defense by 40%",
            "Ignores unit collision while active",
            "Chain - Flash Step"
        ]
    },
    {
        "id": "A0BN",
        "name": "Flash Step",
        "heroClass": "Swordsman",
        "color": "fdbf82",
        "hotkey": "[E] → [Q]",
        "icon": "SwordsmanE_Q",
        "proc_rate": 0.5,
        "order": 7,
        "active": [
            "Quickly moves to target.",
            "AGI X 4.5 magic damage",
            "Can be cast up to 4 times in succession"
        ]
    },
    {
        "id": "A0C1",
        "name": "Sword of Illusion",
        "heroClass": "Swordsman",
        "color": "6f83d2",
        "hotkey": "[R]",
        "icon": "SwordsmanR",
        "cooldown": 10,
        "order": 8,
        "passive": [
            "Finishing a combo leaves a sword of illusion behind.",
            "Each sword increases AGI by 1%",
            "Can possess up to a maximum of 8 swords"
        ],
        "active": [
            "Directs all swords toward a single target.",
            "Each sword deals AGI X 2.5 magic damage",
            "Consecutive swords deal 100% bonus damage"
        ]
    },
    {
        "id": "A0C2",
        "name": "Illusal Dance",
        "heroClass": "Swordsman",
        "color": "89a8f8",
        "hotkey": "[T]",
        "icon": "SwordsmanT",
        "cooldown": 40,
        "order": 9,
        "active": [
            "Brutally slash everything in range with rapid movements.",
            "Deals Attack Damage x 5 + AGI x 25 magic damage every second for 2.5 seconds",
            "Increases target's damage taken by 10% for 8 seconds",
            "Summons 4 Swords of Illusion"
        ]
    },
    {
        "id": "A0C4",
        "name": "Genocide Storm",
        "heroClass": "Swordsman",
        "color": "c71585",
        "hotkey": "[F]",
        "icon": "SwordsmanF",
        "cooldown": 120,
        "order": 10,
        "active": [
            "\"I couldn't see anything. Only the corpses of my comrades were left at where he slashed through.\" - A Survivor of Empire War",
            "Each slash deals AGI X 7.5 magic damage",
            "Final slash deals AGI X 125 magic damage",
            "Summons 8 Swords of Illusion"
        ]
    },
    {
        "id": "A00T",
        "name": "Seal of Wind",
        "heroClass": "Elementalist",
        "color": "66ffe0",
        "hotkey": "[D]",
        "icon": "ElementalistD",
        "cooldown": 15,
        "order": 1,
        "active": [
            "Forms a contract with the elemental of wind, which specializes in helping allies with the power of wind.",
            "HP = Elementalist's Max HP X 50%",
            "Lasts 15 seconds"
        ]
    },
    {
        "id": "A16N",
        "name": "Jump",
        "heroClass": "Elementalist",
        "color": "b3fff0",
        "hotkey": "[D] → [D]",
        "icon": "ElementalistD_D",
        "order": 2,
        "active": [
            "Jumps up high using the power of Elemental of Wind.",
            "Can only be used while nearby the Elemtental of Wind",
            "Jumps high and upon landing, deals INT X (5 + Elementalist's LV / 4) pure damage",
            "Can be used up to 5 times"
        ]
    },
    {
        "id": "A053",
        "name": "Wind Booster",
        "heroClass": "Elementalist",
        "color": "b3fff0",
        "hotkey": "[D] → [Passive]",
        "icon": "ElementalistD_Pass1",
        "order": 3,
        "passive": [
            "Allows nearby beings to move lightly as wind.",
            "Increases nearby summons' attack speed by 15%"
        ]
    },
    {
        "id": "A05F",
        "name": "Protection of Wind",
        "heroClass": "Elementalist",
        "color": "b3fff0",
        "hotkey": "[D] → [Passive]",
        "icon": "ElementalistD_Pass2",
        "order": 4,
        "passive": [
            "Becomes one with the wind.",
            "Immune to all skills and harmful effects"
        ]
    },
    {
        "id": "A01R",
        "name": "Seal of Flame",
        "heroClass": "Elementalist",
        "color": "ff8080",
        "hotkey": "[Q]",
        "icon": "ElementalistQ",
        "cooldown": 20,
        "order": 5,
        "active": [
            "Forms a contract with the spirit of flame, which specializes in powerful splashing melee attacks.",
            "HP = Elementalist's Max HP X 100%",
            "Lasts 15 seconds"
        ]
    },
    {
        "id": "Assk",
        "name": "Burning Reach",
        "heroClass": "Elementalist",
        "color": "ff8080",
        "hotkey": "[Q] → [Passive]",
        "icon": "ElementalistQ_Pass1",
        "order": 6,
        "passive": [
            "Attacks multiple enemies with volatile reach of the flame.",
            "Deals summoner's INT X 1.5 magic damage to nearby enemies on attack"
        ]
    },
    {
        "id": "Ansk",
        "name": "Fervor",
        "heroClass": "Elementalist",
        "color": "ff8080",
        "hotkey": "[Q] → [Passive]",
        "icon": "ElementalistQ_Pass2",
        "order": 7,
        "passive": [
            "Flame elementals never burn out.",
            "Reduces heal received by 100%",
            "Increases skill damage and attack speed up to 100% based on missing HP",
            "HP does not drop below 1"
        ]
    },
    {
        "id": "A08B",
        "name": "Explosion",
        "heroClass": "Elementalist",
        "color": "ff8080",
        "hotkey": "[Q] → [Q]",
        "icon": "ElementalistQ_Q",
        "cooldown": 60,
        "order": 8,
        "passive": [
            "Creates a massive explosion upon death.",
            "Summoner's INT X 22.5 magic damage",
            "Stuns for 2 seconds"
        ],
        "active": [
            "Detonates manually"
        ]
    },
    {
        "id": "A02O",
        "name": "Seal of Water",
        "heroClass": "Elementalist",
        "color": "b9cdfa",
        "hotkey": "[W]",
        "icon": "ElementalistW",
        "cooldown": 20,
        "order": 9,
        "active": [
            "Forms a contract with the elemental of water, which is specialized in healing and empowering allies.",
            "HP = Elementalist's Max HP X 150%",
            "Armor = Elementalist's Armor X 100%",
            "Lasts 20 seconds"
        ]
    },
    {
        "id": "A13P",
        "name": "Water Bolt",
        "heroClass": "Elementalist",
        "color": "adbffc",
        "hotkey": "[W] → [Passive]",
        "icon": "ElementalistW_Pass1",
        "order": 10,
        "passive": [
            "Sprinkle cold water on the enemy.",
            "Hits up to 3 enemies on each attack",
            "INT X 0.4 magic damage",
            "Reduces movement speed by 50% for 1 second"
        ]
    },
    {
        "id": "A075",
        "name": "Refreshing Well",
        "heroClass": "Elementalist",
        "color": "b3e0ff",
        "hotkey": "[W] → [Passive]",
        "icon": "ElementalistW_Pass2",
        "order": 11,
        "passive": [
            "Quenches nearby allies' thirst.",
            "Regenerates nearby allies HP and MP by 4% every second",
            "Increases all stats by 10% for 15 seconds"
        ]
    },
    {
        "id": "Ahea",
        "name": "Water Beam",
        "heroClass": "Elementalist",
        "color": "b9cdfa",
        "hotkey": "[W] → [Q]",
        "icon": "ElementalistW_Q",
        "cooldown": 0.75,
        "order": 12,
        "active": [
            "Fires a beam of water that heals allies' wounds.",
            "Heals for (Target's Missing HP X 5% + Summoner's INT X 0.3)",
            "Heals up to 4 allies"
        ]
    },
    {
        "id": "A01F",
        "name": "Surfing",
        "heroClass": "Elementalist",
        "color": "b3e0ff",
        "hotkey": "[W] → [W]",
        "icon": "WaterMageE",
        "cooldown": 6,
        "order": 13,
        "active": [
            "Liquidifies the elemental to allow it to travel rapidly to target location.",
            "Heals allies hit for (INT X 2 + target's max HP X 20%)"
        ]
    },
    {
        "id": "A03I",
        "name": "Seal of Lightning",
        "heroClass": "Elementalist",
        "color": "c39beb",
        "hotkey": "[E]",
        "icon": "ElementalistE",
        "cooldown": 30,
        "order": 14,
        "active": [
            "Forms a contract with the elemental of lightning, which is specialized in ranged attacks.",
            "HP = Elementalist's Max HP X 200%",
            "Armor = Elementalist's Armor X 100%",
            "Lasts 30 seconds"
        ]
    },
    {
        "id": "Afbk",
        "name": "Shock",
        "heroClass": "Elementalist",
        "color": "c39beb",
        "hotkey": "[E] → [Passive]",
        "icon": "ElementalistE_Pass1",
        "order": 15,
        "passive": [
            "Slowly charges electricity on each attack, and releases all of them at once.",
            "Every attack deals summoner's INT X 1.25 bonus damage",
            "Every 4th attack deals summoner's INT X 6.75 magic damage and chains to 2 additional enemies"
        ]
    },
    {
        "id": "Afbt",
        "name": "Charge",
        "heroClass": "Elementalist",
        "color": "c39beb",
        "hotkey": "[E] → [Passive]",
        "icon": "ElementalistE_Pass2",
        "order": 16,
        "passive": [
            "Charges lightning from each attack to become empowered.",
            "Restores 3 MP on every attack",
            "Every 2 points of MP increases skill damage by 1% and attack speed by 1%",
            "If MP is above 50, increases target's magic damage taken by 8% for 2 seconds"
        ]
    },
    {
        "id": "A07D",
        "name": "Lightning Beam",
        "heroClass": "Elementalist",
        "color": "c39beb",
        "hotkey": "[E] → [Q]",
        "icon": "ElementalistE_Q",
        "order": 17,
        "active": [
            "Releases contained lightning to fry enemies with high voltage.",
            "Consumes Max MP X 40% per second",
            "Deals INT X 18.5 magic damage per second"
        ]
    },
    {
        "id": "A07H",
        "name": "Blink",
        "heroClass": "Elementalist",
        "color": "b3ccff",
        "hotkey": "[E] → [E]",
        "icon": "ElementalistE_E",
        "cooldown": 6,
        "order": 18,
        "active": [
            "Moves to target point quickly."
        ]
    },
    {
        "id": "A03J",
        "name": "Seal of Earth",
        "heroClass": "Elementalist",
        "color": "afeb8c",
        "hotkey": "[R]",
        "icon": "ElementalistR",
        "cooldown": 60,
        "order": 19,
        "active": [
            "Forms a contract with the elemental of earth, which is specialized in powerful attacks and protecting allies.",
            "HP = Max HP of Elementalist X 400%",
            "Armor = Armor of Elementalist X 100%",
            "Lasts 40 seconds"
        ]
    },
    {
        "id": "A04F",
        "name": "Pillar of Earth",
        "heroClass": "Elementalist",
        "color": "dfbf9f",
        "hotkey": "[R] → [Passive]",
        "icon": "ElementalistR_Pass1",
        "order": 20,
        "passive": [
            "Raises the ground below to attack enemies.",
            "Each attack deals INT X 7.5 magic damage in a line"
        ]
    },
    {
        "id": "A04Z",
        "name": "Earthen Protection",
        "heroClass": "Elementalist",
        "color": "dfbf9f",
        "hotkey": "[R] → [Passive]",
        "icon": "ElementalistR_Pass2",
        "order": 21,
        "passive": [
            "Blessed with the endurance of the earth.",
            "Ignores debuffs and instant kill effects",
            "Reduces damage taken by you and nearby allies by 15%",
            "Upon reaching 1 HP, becomes invincible"
        ]
    },
    {
        "id": "A07L",
        "name": "Pulse of Protection",
        "heroClass": "Elementalist",
        "color": "ff8080",
        "hotkey": "[R] → [Q]",
        "icon": "ElementalistR_Q",
        "cooldown": 9,
        "order": 22,
        "active": [
            "Slams down the ground to call forth protective earth spirits hiding underneath.",
            "Grants shields to nearby allies that absorb (Target's Max HP X 20% + Summoner's INT X 2) damage",
            "Lasts 3 seconds"
        ]
    },
    {
        "id": "A089",
        "name": "Elemental Link",
        "heroClass": "Elementalist",
        "color": "ffff80",
        "hotkey": "[T]",
        "icon": "ElementalistT",
        "cooldown": 3,
        "order": 23,
        "passive": [
            "Affinity with summons allows you to bring out their potentials.",
            "Total damage increased by 12%",
            "Decreases your summons' damage taken by 40%"
        ],
        "active": [
            "Forms a spiritual link with summon, granting it various stat bonuses. The link breaks if the summon strays too far from the summoner.",
            "Provides 40% skill damage",
            "Heals for (Target's Max HP X 5%) per second",
            "Provides immunity to instant death spells",
            "Forming links with some summons may provide an additional ability to Elementalist"
        ]
    },
    {
        "id": "A08N",
        "name": "Seal of Chaos",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F]",
        "icon": "ElementalistF",
        "cooldown": 100,
        "order": 24,
        "active": [
            "\"It is a dangerous gamble, but controlling a twisted elemental boasts destructive power that matches the Demon Lord.\" - Elementalist",
            "Summons Chaos Elemental",
            "Lasts 12 seconds"
        ]
    },
    {
        "id": "A12R",
        "name": "Dark Reach",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F] → [Passive]",
        "icon": "ElementalistF_Pass1",
        "order": 25,
        "passive": [
            "Empowers attacks with corrupt power.",
            "Every attack deals INT X 2.25 magic damage",
            "Every 5th attack deals INT X 11.5 bonus damage to nearby enemies"
        ]
    },
    {
        "id": "A08P",
        "name": "Power of Chaos",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F] → [Passive]",
        "icon": "ElementalistF_Pass2",
        "order": 26,
        "passive": [
            "The power of chaos bends to none.",
            "Immune to all harmful abilities"
        ]
    },
    {
        "id": "A08S",
        "name": "Abyss Walk",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F] → [Q]",
        "icon": "ElementalistF_Q",
        "cooldown": 4,
        "order": 27,
        "active": [
            "Submerges into the abyss to quickly travel to target location.",
            "INT X 11.5 magic damage"
        ]
    },
    {
        "id": "A12S",
        "name": "Collapse Dimension",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F] → [W]",
        "icon": "ElementalistF_W",
        "cooldown": 10,
        "order": 28,
        "active": [
            "Collapses the dimension around yourself.",
            "Deals INT X 7.5 magic damage per second",
            "Pulls nearby enemies inward",
            "Lasts 1.5 seconds"
        ]
    },
    {
        "id": "A08R",
        "name": "Eye of Chaos",
        "heroClass": "Elementalist",
        "color": "#ce2b7d",
        "hotkey": "[F] → [E]",
        "icon": "ElementalistF_E",
        "cooldown": 30,
        "order": 29,
        "active": [
            "Summon the eye of Hell that emanates a powerful beam of destruction.",
            "Decimates nearby grounds"
        ]
    },
    {
        "id": "A109",
        "name": "Short Circuit",
        "heroClass": "Lightning Mage",
        "color": "99bbff",
        "hotkey": "[Passive]",
        "icon": "LightningMagePass",
        "cooldown": 0.5,
        "order": 1,
        "passive": [
            "Lightning magic reacts strongly to other lightning magic, which amplifies their effects.",
            "4th consecutive attack deals INT X 6 pure damage and applies Shock for 1.5 seconds",
            "Attacking Shocked enemies restores 4 Energy",
            "Landing skill on Shocked enemies activates Short Circuit for 1 second, allowing skills to critically strike the target for (35 + 1.5 X Crit Chance)% chance"
        ]
    },
    {
        "id": "A0Y2",
        "name": "Lightning Bolt",
        "heroClass": "Lightning Mage",
        "color": "99ebff",
        "hotkey": "[Q]",
        "icon": "LightningMageQ",
        "order": 2,
        "active": [
            "Create an orb of lightning and fling it forward.",
            "INT X 6 magic damage",
            "Creates 1 Lightning Orb"
        ]
    },
    {
        "id": "A104",
        "name": "Static Sweep",
        "heroClass": "Lightning Mage",
        "color": "3385ff",
        "hotkey": "[W]",
        "icon": "LightningMageW",
        "cooldown": 6,
        "order": 3,
        "active": [
            "Perform a kick with the speed of lightning.",
            "Attack Damage X 1.5 + AGI X 5 magic damage",
            "If used to activate Short Circuit, can be chained with an additional skill"
        ]
    },
    {
        "id": "A105",
        "name": "Breaker",
        "heroClass": "Lightning Mage",
        "color": "3385ff",
        "hotkey": "[W] → [W]",
        "icon": "LightningMageW_W",
        "order": 4,
        "active": [
            "Throws a punch with the speed of lightning.",
            "Attack Damage X 2.5 + AGI X 10 magic damage",
            "If used to activate Short Circuit, it can be chained with an additional skill"
        ]
    },
    {
        "id": "A106",
        "name": "Static Burst",
        "heroClass": "Lightning Mage",
        "color": "3385ff",
        "hotkey": "[W] → [W] → [W]",
        "icon": "LightningMageW_W_W",
        "order": 5,
        "active": [
            "Releases collected energy with an explosive burst.",
            "INT X 12.5 magic damage",
            "Short stun effect",
            "If used to activate Short Circuit, consumes all spawned Lightning Orbs and deals 100% additional damage (up to 5 times)"
        ]
    },
    {
        "id": "A107",
        "name": "Discharge",
        "heroClass": "Lightning Mage",
        "color": "b3f0ff",
        "hotkey": "[E]",
        "icon": "LightningMageE",
        "cooldown": 0.5,
        "order": 6,
        "toggle": [
            "Discharges body to quickly release mana, gaining immense speed in return.",
            "For 1 second, deals INT X 10 magic damage to collided enemies",
            "Reduces damage taken by 70% and ignores CC effects while active",
            "Can absorb Lightning Orbs, healing you for 8% HP and 20 energy and granting you Charged status, which refreshes the duration of skill and allows you to deal damage once more",
            "While Charged, Discharge and Hypercharge deals 100% increased damage"
        ]
    },
    {
        "id": "A108",
        "name": "Lightning Strike",
        "heroClass": "Lightning Mage",
        "color": "3385ff",
        "hotkey": "[R]",
        "icon": "LightningMageR",
        "cooldown": 15,
        "order": 7,
        "active": [
            "Focuses mana into a single point to call down a lightning strike.",
            "INT X 40 magic damage",
            "Stuns for 1 second",
            "Creates 5 lightning orbs"
        ]
    },
    {
        "id": "A10A",
        "name": "Hypercharge",
        "heroClass": "Lightning Mage",
        "color": "4ddbff",
        "hotkey": "[T]",
        "icon": "LightningMageT",
        "cooldown": 40,
        "order": 8,
        "active": [
            "Absorbs mana dispersed in the atmosphere to charge yourself.",
            "After 0.5 seconds, deals INT X 45 magic damage over 1 second",
            "Short stun effect",
            "Invulnerable while active",
            "If fully channeled, refills all Energy and refreshes basic skill cooldowns"
        ]
    },
    {
        "id": "A10B",
        "name": "Lightning Blade",
        "heroClass": "Lightning Mage",
        "color": "99ffff",
        "hotkey": "[F]",
        "icon": "LightningMageF",
        "cooldown": 90,
        "order": 9,
        "active": [
            "\"Disappear with the Lightning!\" - Mage",
            "Pauses target for 1 second and deals INT X 90 magic damage",
            "Breaks any shield effects and critically strikes if target is affected by Short Circuit",
            "Damage dealt is increased up to 100% based on dash distance",
            "While casting, duration of Shock and Short Circuit will be refreshed on target",
            "After cast, refills all Energy"
        ]
    },
    {
        "id": "A0TP",
        "name": "Execution Sword",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[D]",
        "icon": "CrusaderD",
        "cooldown": 6,
        "order": 1,
        "passive": [
            "Holy sword that brings down judgment upon the evil. Mana concentrates around the blade to give the sword a vibrant form.",
            "20% chance to activate Flash Sword on attack",
            "Attack damage X 0.5 + STR X 2.5 magic damage"
        ],
        "active": [
            "Sends down a flow of mana into the sword, awakening its true potential.",
            "Empowers next 3 attacks with Flash Sword",
            "Lasts 10 seconds"
        ]
    },
    {
        "id": "A0TT",
        "name": "Remains of Rage",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[Q]",
        "icon": "CrusaderQ",
        "proc_rate": 0.5,
        "order": 2,
        "active": [
            "Fires mana stored within your sword to target point.",
            "STR X 7.5 magic damage",
            "Stuns and pulls enemies toward center",
            "Reduces movement speed of targets hit by 60%, as well as increasing the damage they take by 10% for 3 seconds",
            "Restore 1 charge every 5 seconds (Up to 4 charges)"
        ]
    },
    {
        "id": "A0TQ",
        "name": "Flash of Immortality",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[W]",
        "icon": "CrusaderW",
        "cooldown": 17.5,
        "order": 3,
        "passive": [
            "The blessing of god allows crusader to become a persevering light amidst her battles.",
            "Increases nearby allies' all stats by 5% (2x for yourself)",
            "Damage received reduced by 20% if HP is below 50%"
        ],
        "active": [
            "The blessing of god bestows crusader with a divine protection.",
            "Reduces damage taken by 40%",
            "Lasts 5 seconds"
        ]
    },
    {
        "id": "A0TR",
        "name": "Strike of Honor",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[E]",
        "icon": "CrusaderE",
        "cooldown": 6,
        "order": 4,
        "active": [
            "Leaps into air and slam down, shattering the ground.",
            "Attack Damage X 2.5 magic damage",
            "STR X 10 magic damage",
            "Stuns for 1 second"
        ]
    },
    {
        "id": "A0TN",
        "name": "1st Sword Dance: Strike",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[R]",
        "icon": "CrusaderR",
        "cooldown": 15,
        "order": 5,
        "active": [
            "Dashes forward with lightning speed, striking all enemies.",
            "Attack Damage X 5 magic damage",
            "Increases damage taken by target by 10% for 8 seconds",
            "Enhance next Remains of Rage cast within 3 seconds, increasing its damage by 250% and dashing to target location to inflict stun for 1 second",
            "Chain - 2nd Sword Dance: Sword"
        ]
    },
    {
        "id": "A0TO",
        "name": "2nd Sword Dance: Sword",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[R] → [R]",
        "icon": "CrusaderR_R",
        "order": 6,
        "active": [
            "Releases mana stored within the Execution Sword to attack all nearby enemies.",
            "STR X 35 magic damage",
            "Slows affected enemies by 50% for 4 seconds",
            "Empowers next Strike of Honor cast within 3 seconds, increasing its damage and stun duration by 100%",
            "Increases HP regen by (Crusader's Max HP X 10%) for 5 seconds"
        ]
    },
    {
        "id": "A03D",
        "name": "Max Amplification: Execution Sword",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[T]",
        "icon": "CrusaderT",
        "cooldown": 30,
        "order": 7,
        "passive": [
            "Increases the power of the Execution Sword.",
            "Attack damage increased by 15% and total damage increased by 10%"
        ],
        "active": [
            "Summons an angel using your own body as a vessel to break the limits on the Execution Sword.",
            "For 9 seconds, gains max attack speed and CC immunity",
            "Heals for Max HP X 15% every second",
            "Improves Execution Sword, resetting its cooldown, increasing its damage by 150% and reducing its cooldown by 50%"
        ]
    },
    {
        "id": "A0TU",
        "name": "Original Sin",
        "heroClass": "Crusader",
        "color": "f9feb8",
        "hotkey": "[F]",
        "icon": "CrusaderF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"Light that can be bestowed upon the weak - that is the true light.\" - Astarte",
            "Slashes twice, each dealing STR X 70 magic damage",
            "If cast again, incurs a longer cooldown but delivers an additional slash dealing STR X 100 magic damage"
        ]
    },
    {
        "id": "A0CW",
        "name": "Martial Movement",
        "heroClass": "Martial Artist",
        "color": "8fbc8f",
        "hotkey": "[D]",
        "icon": "MartialArtistD",
        "cooldown": 15,
        "order": 1,
        "passive": [
            "A stance that reacts faster than the mind.",
            "Attack damage increased by 50%",
            "Movement speed increased by 125"
        ],
        "active": [
            "Evades next attack received within 1 second",
            "On issuing attack order, launches a counter attack dealing (Received Damage + 7.5 X Attack Damage) pure damage"
        ]
    },
    {
        "id": "A03V",
        "name": "Emperor's Strikes",
        "heroClass": "Martial Artist",
        "color": "8fbc8f",
        "hotkey": "[Q]",
        "icon": "MartialArtistPass",
        "order": 2,
        "passive": [
            "A martial art that strengthens the fist, passed down from the Shaolins of the orients.",
            "15% chance to deal AGI X 5 magic damage on attack"
        ]
    },
    {
        "id": "A0B4",
        "name": "Eight Palm Strike",
        "heroClass": "Martial Artist",
        "color": "98fb98",
        "hotkey": "[W]",
        "icon": "MartialArtistPass",
        "order": 3,
        "passive": [
            "Martial art that allows striking multiple foes on a single attack.",
            "Adds splash effect to attack",
            "8% chance to deal AGI x 8 magic damage to nearby enemies on attack"
        ]
    },
    {
        "id": "A0B6",
        "name": "Vacuum Palm",
        "heroClass": "Martial Artist",
        "color": "9acd32",
        "hotkey": "[E]",
        "icon": "MartialArtistPass",
        "order": 4,
        "passive": [
            "Apply sudden pressure to weak points, slowing down the target's movement.",
            "Basic attacks have a 15% chance to slow the target",
            "Temporarily decrease target's armor by 30% [Type-C] if debuff is stacked"
        ]
    },
    {
        "id": "A0B3",
        "name": "Inner Meditation",
        "heroClass": "Martial Artist",
        "color": "2e8b57",
        "hotkey": "[R]",
        "icon": "MartialArtistPass",
        "order": 5,
        "passive": [
            "Calms your mind and body to maintain control over yourself.",
            "Attack speed increased by 60%",
            "On attack, has 10% chance to temporarily increase attack damage by 100%, damage reduction by 20% for and regenerates 2% + 90 HP every second for 5 seconds",
            "Forcefully triggered when using Martial Movement or Nameless Arts"
        ]
    },
    {
        "id": "A0B5",
        "name": "Heavenly Emperor's Strikes",
        "heroClass": "Martial Artist",
        "color": "20b2aa",
        "hotkey": "[T]",
        "icon": "MartialArtistPass",
        "order": 6,
        "passive": [
            "An improved version of Emperor's strikes that boasts fearsome power.",
            "8% chance to deal Attack Damage X 0.4 + AGI X 12 magic damage on attack",
            "Activates at least once when attacking 10 consecutive times"
        ]
    },
    {
        "id": "A17U",
        "name": "Nameless Arts",
        "heroClass": "Martial Artist",
        "color": "80ffff",
        "hotkey": "[F]",
        "icon": "MartialArtistF",
        "cooldown": 90,
        "order": 7,
        "active": [
            "\"None can match the skills of the martial artists of Eloren. Having obtained the knowledge of all advanced martial arts, each one of their techniques is deadly.\" - A Continent Traveller",
            "Enables Inner Meditation",
            "Increases damage dealt by counter by 60%, all other skills by 100% and reduces attack cooldown by 50%",
            "Gains immunity to debuffs and CC effects",
            "If cast once, lasts 4 seconds and has 30 seconds cooldown",
            "If cast twice, lasts 6 seconds and has 60 seconds cooldown"
        ]
    },
    {
        "id": "A0JZ",
        "name": "Oriental Spear Mastery",
        "heroClass": "Lancer",
        "color": "e2f9ae",
        "hotkey": "[D]",
        "icon": "LancerD",
        "cooldown": 5,
        "order": 1,
        "passive": [
            "Spear techniques passed down from the orients that boasts destructive power.",
            "Spear attacks can critically strike",
            "Attack speed bonus granted by AGI is halved"
        ],
        "active": [
            "Temporarily augment the destructive power of spear techniques.",
            "For 4 seconds, every attack deals STR X 1.25 bonus magic damage",
            "Attack speed maximized",
            "Boosts next skill cast within duration"
        ]
    },
    {
        "id": "A0K9",
        "name": "Pierce",
        "heroClass": "Lancer",
        "color": "f0e388",
        "hotkey": "[Q]",
        "icon": "LancerQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Pierces through enemies.",
            "Attack damage X 1 + STR X 7.5 pure damage",
            "Increases damage taken by target by 5% for 15 seconds",
            "Empowered: Increases the critical chance of your spear attacks by 50% for 40 seconds"
        ]
    },
    {
        "id": "A0K6",
        "name": "Flash Strike",
        "heroClass": "Lancer",
        "color": "e9f08e",
        "hotkey": "[W]",
        "icon": "LancerW",
        "cooldown": 8,
        "order": 3,
        "active": [
            "Attack nearby enemies with a swift spear strike.",
            "Attack damage X 0.9 + STR X 4.5 magic damage",
            "Enemies hit are slowed by 90% for 2 seconds",
            "Resets duration of Oriental Spear Mastery",
            "Empowered: Increases the damage you deal to target with spear attacks by 100% for 5 seconds"
        ]
    },
    {
        "id": "A0K4",
        "name": "Nerve Strike",
        "heroClass": "Lancer",
        "color": "86ea64",
        "hotkey": "[E]",
        "icon": "LancerE",
        "cooldown": 8,
        "order": 4,
        "active": [
            "Strikes target's vital point.",
            "Attack damage X 1.2 + STR X 6 magic damage",
            "If target has barriers, breaks them and lands as a critical strike",
            "Empowered: Deals up to 40~100% bonus damage based on target's missing HP"
        ]
    },
    {
        "id": "A0K3",
        "name": "Battle Recovery",
        "heroClass": "Lancer",
        "color": "80ff80",
        "hotkey": "[R]",
        "icon": "LancerR",
        "cooldown": 1.5,
        "order": 5,
        "passive": [
            "Replenish ki in preparation for a fierce battle.",
            "Restores 4% of ki every second",
            "If ki is restored, HP is also restored for equal %",
            "Increases your damage dealt by 20% if ki is over 50%, increases your healing received by 40% if ki is below 50%"
        ],
        "active": [
            "Disengage and prepare for the next battle.",
            "Moves back 600 distance",
            "Reduces damage taken by 50% for 1.5 seconds"
        ]
    },
    {
        "id": "A0K8",
        "name": "Meteor Spear",
        "heroClass": "Lancer",
        "color": "ffcbc1",
        "hotkey": "[T]",
        "icon": "LancerT",
        "cooldown": 30,
        "order": 6,
        "active": [
            "Focus ki into spear and launch it forward.",
            "STR X 70 magic damage",
            "Increases all stats by 10% for self and allies within 1000 range from explosion",
            "Resets cooldown of Oriental Spear Mastery"
        ]
    },
    {
        "id": "A0KE",
        "name": "Dragon Slam",
        "heroClass": "Lancer",
        "color": "df4040",
        "hotkey": "[F]",
        "icon": "LancerF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"She disappeared the moment I saw her on the battlefield.. and then suddenly appeared at the center of the enemies' base, which formed a mountain of corpses.\" - Empire War Veteran",
            "STR X 140 magic damage",
            "Deals 50% bonus damage to enemies within 325 radius from target point",
            "Restores 100 ki"
        ]
    },
    {
        "id": "A0E0",
        "name": "Scythe Mastery",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[D]",
        "icon": "ReaperD",
        "cooldown": 12,
        "order": 1,
        "passive": [
            "Her agility shines, even while wielding a scythe larger than her body.",
            "Increases attack speed by 50%",
            "Increases movement speed by 100"
        ],
        "active": [
            "Quickly dashes to prepare your scythe attacks.",
            "Instantly dashes up to 600 distance toward current destination point",
            "Refreshes cooldowns on Whirl of Death and Death's Dash"
        ]
    },
    {
        "id": "A0E1",
        "name": "Whirl of Death",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[Q]",
        "icon": "ReaperQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Attacks nearby enemies by spinning your scythe.",
            "Attack damage X 0.33 + AGI X 5 magic damage",
            "On next 3 attack(s), reactivates with 25% damage"
        ]
    },
    {
        "id": "A0E2",
        "name": "Consecutive Strikes",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[W]",
        "icon": "ReaperW",
        "cooldown": 4,
        "order": 3,
        "passive": [
            "Pursuits the target relentlessly.",
            "Landing same type of attack increases its damage by 2.5%",
            "Landing skill will stack it 10 times",
            "Can stack up to 40 times",
            "Combo stacks lasts for 4 seconds"
        ],
        "active": [
            "For 1.5 seconds, attack twice on every attack",
            "Landing different types of attacks will not reset the stacks while active"
        ]
    },
    {
        "id": "A0E3",
        "name": "Death's Dash",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[E]",
        "icon": "ReaperE",
        "cooldown": 8,
        "order": 4,
        "active": [
            "Pierces through the target, delivering a deadly strike.",
            "AGI X 12 magic damage",
            "Critically strikes",
            "While active, Whirl of Death (Q) will deal an additional 200% damage and Death's Dash's damage is increased by 50%"
        ]
    },
    {
        "id": "A0E5",
        "name": "Death's Slash",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[R]",
        "icon": "ReaperR",
        "cooldown": 15,
        "order": 5,
        "active": [
            "Relentlessly slashes the target.",
            "Attacks with Attack Damage X 12% every 0.05 seconds",
            "While active, reduces damage taken by 80% and becomes immune to CC effects",
            "Can be maintained up to 1 second"
        ]
    },
    {
        "id": "A0E6",
        "name": "Extreme Focus",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[T]",
        "icon": "ReaperT",
        "cooldown": 15,
        "order": 6,
        "passive": [
            "Clears your mind to focus on taking the life of the target.",
            "Enters a focused state for 4 seconds on 5% chance on attack or when casting Death's Slash",
            "Reduces damage received by 30%",
            "Death's Dash can be instantly cast once"
        ],
        "active": [
            "Enters focused state immediately",
            "Lasts 4 seconds"
        ]
    },
    {
        "id": "A0EA",
        "name": "Death Mark",
        "heroClass": "Reaper",
        "color": "ff9999",
        "hotkey": "[F]",
        "icon": "ReaperF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"You are already dead. You just haven't caught up to it yet.\" - Reaper",
            "For 10 seconds, increases damage you deal to the target by 20~40% based on target's missing HP",
            "Upon expiration, deals AGI X 125 magic damage to the target"
        ]
    },
    {
        "id": "A05M",
        "name": "Dark Shroud",
        "heroClass": "Assassin",
        "color": "606aca",
        "hotkey": "[D]",
        "icon": "AssassinD",
        "order": 1,
        "passive": [
            "Ability to meld into darkness and assassinate effortlessly.",
            "Allows all skills to critically strike",
            "Enters stealth if out of combat for 2.5 seconds",
            "Backstabbing enemies while stealthed deals AGI X 5 bonus damage",
            "Reduces damage taken by 30% while stealthed"
        ],
        "toggle": [
            "TOGGLE OFF: Enable invisibility",
            "TOGGLE ON: Disable invisibility"
        ]
    },
    {
        "id": "A05L",
        "name": "Shadow Slash",
        "heroClass": "Assassin",
        "color": "7f7f7f",
        "hotkey": "[Q]",
        "icon": "AssassinQ",
        "cooldown": 3,
        "order": 2,
        "active": [
            "Performs a frontal slash aimed toward weak spots.",
            "Attack damage X 0.5 + AGI X 5 magic damage",
            "If an enemy is hit, obtains Shadow Mark for 10 seconds, increasing critical chance by 6% (up to 5 stacks)",
            "At max stacks, the duration no longer refreshes but resets cooldown on Shadow Slash and Shadow Rush"
        ]
    },
    {
        "id": "A05N",
        "name": "Ambush",
        "heroClass": "Assassin",
        "color": "8080c0",
        "hotkey": "[W]",
        "icon": "AssassinW",
        "cooldown": 10,
        "order": 3,
        "active": [
            "Melds into the darkness to strike the enemy from behind.",
            "Attack damage X 1.25 + AGI X 7.5 magic damage",
            "Stuns for 1.5 seconds",
            "After cast, increases attack damage by 25% for 6 seconds",
            "Critical strike is guaranteed if used while invisible"
        ]
    },
    {
        "id": "A11L",
        "name": "Shadow Walk",
        "heroClass": "Assassin",
        "color": "7f7f7f",
        "hotkey": "[E]",
        "icon": "AssassinE",
        "cooldown": 12.5,
        "order": 4,
        "active": [
            "Becomes one with the shadow to avoid being seen by enemies.",
            "Becomes invisible and temporarily gains bonus movement speed",
            "Next attack within 6 seconds inflicts Attack Damage X 1.5 + AGI X 9 magic damage",
            "Stuns for 1 second",
            "If struck from behind, damage increased by 50%"
        ]
    },
    {
        "id": "A05V",
        "name": "Smoke Bomb",
        "heroClass": "Assassin",
        "color": "8080c0",
        "hotkey": "[R]",
        "icon": "AssassinR",
        "cooldown": 15,
        "order": 5,
        "active": [
            "Throw down a poisonous smoke bomb that confuses enemies.",
            "AGI x 1 magic damage each second for 6 seconds",
            "Reduces damage taken by allies by 40%",
            "While staying within the smoke, invisibility transition speed increased by 300% and not interrupted by your attacks"
        ]
    },
    {
        "id": "A06G",
        "name": "Shadow Rush",
        "heroClass": "Assassin",
        "color": "6e6eaa",
        "hotkey": "[T]",
        "icon": "AssassinT",
        "cooldown": 20,
        "order": 6,
        "active": [
            "Summons shadows from all directions and rush toward the target point.",
            "Deals AGI X 6 damage 6 times",
            "Summons 5 additional shadows that imitate next Shadow Slash or Ambush, each dealing 50% of original damage"
        ]
    },
    {
        "id": "A06E",
        "name": "Night Fury",
        "heroClass": "Assassin",
        "color": "8080ff",
        "hotkey": "[F]",
        "icon": "AssassinF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"Both sides of war tend to avoid fighting in the night because 'she' wanders around..\" - A Survivor of Empire War",
            "Delivers 12 slashes, each dealing AGI X 4 magic damage",
            "Final strike deals AGI X 45 magic damage",
            "Deals 10% bonus damage for each stack of Shadow Mark",
            "Critically strikes enemies within 250 distance from the center"
        ]
    },
    {
        "id": "A0N1",
        "name": "Feather of Aeolus",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[D]",
        "icon": "WindMageD",
        "cooldown": 10,
        "order": 1,
        "active": [
            "Swiftly move by riding on the wind.",
            "Moves at least 400 units",
            "Increases movement speed and reduces damage taken by 40% for 2 seconds after casting",
            "Leaves behind a feather that you can recall back to"
        ]
    },
    {
        "id": "A0PN",
        "name": "Blessing of Zephyrus",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[Q]",
        "icon": "WindMageQ_2",
        "cooldown": 1.5,
        "order": 2,
        "passive": [
            "Warm spirits that heal the master's allies.",
            "Summons a spirit with (33 + Pure Attack Speed / 3)% chance on attack(critical strikes guarantee a spirit), and with every 300 distance traveled",
            "When 3 spirits are summoned, your next attack heals an ally for 150 + INT X 0.75 health"
        ],
        "toggle": [
            "Change to attack mode."
        ]
    },
    {
        "id": "A0PN2",
        "name": "Arrow of Zephyrus",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[Q]",
        "icon": "WindMageQ_1",
        "cooldown": 1.5,
        "order": 3,
        "passive": [
            "Fierce spirits that chase the master's enemies.",
            "Summons a spirit with 30% chance on attack (critical strikes guarantee a spirit), and with every 300 distance traveled",
            "When 3 spirits are summoned, your next attack deals attack damage X 0.25 + INT X 2 magic damage"
        ],
        "toggle": [
            "Change to healing mode."
        ]
    },
    {
        "id": "A19P",
        "name": "Gentle Winds",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[W]",
        "icon": "WindMageW",
        "cooldown": 6,
        "order": 4,
        "active": [
            "Send out gentle winds infused with mana.",
            "INT X 10 magic damage",
            "Upon reaching allies, heal INT X 2.5 HP",
            "Cooldown reset upon casting Feather of Aeolus",
            "When combined, forms a tornado for 5 seconds, dealing Attack Damage X 2 magic damage per second and activating Grace of Zephyrus (scales with attack speed)"
        ]
    },
    {
        "id": "A0PT",
        "name": "Mirror of Aeolus",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[E]",
        "icon": "WindMageE",
        "cooldown": 25,
        "order": 5,
        "passive": [
            "Heals grant resistance to allies.",
            "Creates barrier that absorbs damage equal to 20% X healed amount",
            "Stacks up to a maximum of INT X 1"
        ],
        "active": [
            "Summon a mirror of eon to redirect harm back to attackers.",
            "For 9 seconds, absorbs 45% of damage taken by nearby allies",
            "Upon expiration or casting again, deals INT X 20 + absorbed damage X 10 (max: INT X 200) magic damage to nearby enemies",
            "Knocks back non-boss units"
        ]
    },
    {
        "id": "A0PZ",
        "name": "Light Breeze",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[R]",
        "icon": "WindMageR",
        "cooldown": 5,
        "order": 6,
        "active": [
            "Call down a light breeze on target area.",
            "Creates a field that lasts for 40 seconds",
            "Heals allies for 25 + INT X 0.25 per second",
            "Increase target's HP by 10%, skill damage by (5 + INT / 600)% for 5 seconds"
        ]
    },
    {
        "id": "A0Q1",
        "name": "Horn of Notus",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[T]",
        "icon": "WindMageT",
        "cooldown": 45,
        "order": 7,
        "active": [
            "Blows a horn gifted with divine powers.",
            "Each pulse deals INT X 7.5 magic damage and slows enemies hit",
            "Each pulse restores INT X 2 health and grants debuff immunity for 3 seconds",
            "Creates up to 6 pulses"
        ]
    },
    {
        "id": "A0PY",
        "name": "Guardian of Wind",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F]",
        "icon": "WindMageF",
        "cooldown": 100,
        "order": 8,
        "active": [
            "(Aisha) \"Dear divine beings! I thank you for bestowing all these blessings upon me !\"\n(Guardian) Grrrgrgrgr (it's because you're too cute)",
            "Summons a Guardian",
            "Lasts 50 seconds"
        ]
    },
    {
        "id": "A0Q3",
        "name": "Wind Guardian",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F] → [Passive]",
        "icon": "WindMageF_Pass",
        "order": 9,
        "passive": [
            "The use of mana allows this deity to temporarily stay in the middle realm.",
            "Increased magic defense",
            "Immunity to instant death, debuff and knockback",
            "Disappears when HP or MP runs out",
            "Applies barrier to allies within 750 radius before disappearing"
        ]
    },
    {
        "id": "A0Q4",
        "name": "Gift",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F] → [Q]",
        "icon": "WindMageF_Q",
        "order": 10,
        "active": [
            "Vayu's blessing that heals wounds and bestows revitalization.",
            "Heals for INT X 0.5 per second",
            "Increases healed allies' magic defense by 25%",
            "Consumes 3 MP per second"
        ]
    },
    {
        "id": "A0Q5",
        "name": "Anger",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F] → [W]",
        "icon": "WindMageF_W",
        "cooldown": 9,
        "order": 11,
        "active": [
            "The anger of Vayu sweeps across, obliterating any foes in its path.",
            "Deals (AGI + INT) X 7.5 magic damage to enemies hit",
            "Drags enemies along"
        ]
    },
    {
        "id": "A0Q7",
        "name": "Blessing of Vayu",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F] → [E]",
        "icon": "WindMageF_E",
        "cooldown": 20,
        "order": 12,
        "active": [
            "Bestows the blessing of life.",
            "Consumes 50 MP",
            "Revives a dead ally nearby after 1.5 seconds"
        ]
    },
    {
        "id": "A0Q6",
        "name": "Judgment of Vayu",
        "heroClass": "Wind Mage",
        "color": "aef4c7",
        "hotkey": "[F] → [R]",
        "icon": "WindMageF_R",
        "cooldown": 15,
        "order": 13,
        "active": [
            "Brings down judgment on enemies.",
            "Each attack deals 1(AGI + INT) X 20 magic damage",
            "Attacks up to (5 + Pure Attack Speed / 15)% times",
            "Disappears after cast"
        ]
    },
    {
        "id": "A03F",
        "name": "This Bag isn't a Decoration!",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[D]",
        "icon": "MerchantD",
        "cooldown": 5,
        "order": 1,
        "passive": [
            "Slaps enemy hard with a bag filled with many things.",
            "Basic attacks inflict Attack Damage X 0.15 + STR X 1 magic damage"
        ],
        "active": [
            "Takes a random thing out of the bag to use it.",
            "Healing Potion - Heals for Max HP X 40%",
            "Speed Potion - Increases attack speed by 100% and movement speed by 100 for 6 seconds"
        ]
    },
    {
        "id": "A0GJ",
        "name": "This Bag is Kinda Dangerous!",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[D]",
        "icon": "MerchantD_2",
        "cooldown": 10,
        "order": 2,
        "passive": [
            "A bag filled with dangerous goodies.",
            "Basic attacks inflict attack damage X 0.08 + STR X 0.38 magic damage",
            "Charges 1 bomb every second (up to 5)"
        ],
        "active": [
            "Takes out a lot of bombs at once.",
            "Charges all bombs"
        ]
    },
    {
        "id": "A0D9",
        "name": "Bag Slam",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[Q]",
        "icon": "MerchantQ",
        "cooldown": 8,
        "order": 3,
        "active": [
            "Pummels enemy down with a bag filled with many things.",
            "Attack Damage X 1.5 + STR X 7.5 magic damage",
            "Stuns for 1 second"
        ]
    },
    {
        "id": "A1BC",
        "name": "Throwing Healing Potion",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[W]",
        "icon": "MerchantW",
        "proc_rate": 0.33,
        "order": 4,
        "active": [
            "Throws a potion made with your own blood, which is thick as troll's blood.",
            "Heals target for STR X 2.5 HP",
            "Increases target's HP regen by (Target's Max HP X 3% + Your own HP Regen) for 10 seconds",
            "Potion lasts 300 seconds, and you can maintain up to 5 potions on ground at once",
            "1 potion is refilled every 4 seconds (up to 5 potions)"
        ]
    },
    {
        "id": "A129",
        "name": "Throw Bomb",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[W]",
        "icon": "MerchantW2",
        "order": 5,
        "active": [
            "Throws a bomb.",
            "STR X 7.5 magic damage",
            "Causes chain explosion on nearby bombs, adding 0.5 seconds stun and 75% damage (stacks up to 4 times)",
            "Explodes after 30 seconds or if thrown into another bomb",
            "Up to 10 bombs can be planted at once",
            "STR X 8 magic damage"
        ]
    },
    {
        "id": "A0DB",
        "name": "Life Shield Scroll",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[E]",
        "icon": "MerchantE",
        "cooldown": 25,
        "order": 6,
        "active": [
            "Provides regenerating barriers to nearby allies by sacrificing your own health.",
            "Consumes HP X 30%",
            "Provides shield that absorbs Consumed HP X 150% damage",
            "Shield is recharged by 10% every second",
            "Lasts 10 seconds"
        ]
    },
    {
        "id": "A0DC",
        "name": "Throw Money",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[R]",
        "icon": "MerchantR",
        "cooldown": 15,
        "order": 7,
        "active": [
            "Throws money with great force, inflicting tetanus on enemies hit.",
            "Each coin inflicts STR X 1.5 magic damage",
            "For 5 seconds, deals STR X 1.5 magic damage per second and increases damage taken by (4 + STR / 1200)%",
            "Throws up to 10 coins"
        ]
    },
    {
        "id": "A1BM",
        "name": "Devour",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[R]",
        "icon": "MerchantR_2",
        "cooldown": 20,
        "order": 8,
        "active": [
            "Opens up the devouring bag.",
            "Channeled for maximum for 3 seconds, pulling in nearby enemies and dealing STR X 20 magic damage per second",
            "Upon finishing, deals STR X 40 magic damage, stuns for 2 seconds and increases damage taken by (5 + STR / 1000)% for 6 seconds"
        ]
    },
    {
        "id": "A0DD",
        "name": "Holy Water of Resurrection",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[T]",
        "icon": "MerchantT",
        "cooldown": 90,
        "order": 9,
        "active": [
            "Revives an ally by using a bottle of holy water, which is very rare.",
            "Revives a nearby ally",
            "Heals Max HP/MP X 100%",
            "Revived ally cannot die for 5 seconds",
            "If killed while not on cooldown, it is used for yourself"
        ]
    },
    {
        "id": "A128",
        "name": "Dangerous Explosive",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[T]",
        "icon": "MerchantT2",
        "cooldown": 60,
        "order": 10,
        "active": [
            "Plants a very dangerous explosive.",
            "Plants an explosive that can be damaged",
            "After 10 seconds, explodes dealing STR X 40 + damage taken X 5% pure damage and stunning for 3 seconds",
            "Damage accumulated from Merchant is multiplied 4x"
        ]
    },
    {
        "id": "A0GI",
        "name": "Cursed Doll",
        "heroClass": "Merchant",
        "color": "bfa3d5",
        "hotkey": "[T]",
        "icon": "MerchantT3",
        "cooldown": 60,
        "order": 11,
        "active": [
            "Plants a cursed doll.",
            "Plants a doll that can be damaged",
            "After 10 seconds, explodes dealing STR X 60 + damage taken X 5% pure damage and stunning for 3 seconds",
            "Damage accumulated from Merchant is tripled"
        ]
    },
    {
        "id": "A0D8",
        "name": "Scroll of God's Blessing",
        "heroClass": "Merchant",
        "color": "ddddbb",
        "hotkey": "[F]",
        "icon": "MerchantF",
        "cooldown": 60,
        "order": 12,
        "active": [
            "\"Damn it.. there goes my rarest scroll! If I wasn't a merchant dealing with customer relationships, I'd never have used it for him.. \" - Merchant",
            "Empowers target with Indomitable Strength for 12 seconds",
            "Grants immunity to slow effects",
            "Increases damage dealt by target by 30%",
            "Decreases damage taken by target by 60%",
            "Heals for Max HP X 30% per second",
            "Except for self, the target cannot be affected by Indomitable Strength again for 120 seconds"
        ]
    },
    {
        "id": "A0MS",
        "name": "Fierce Strikes",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[Passive]",
        "icon": "ThundererPass_1",
        "order": 1,
        "passive": [
            "Continuously attack like flowing water.",
            "Basic attacks ignore 70% of target's armor",
            "Every 4th basic attack will strike twice"
        ]
    },
    {
        "id": "A102",
        "name": "Three Talon Strike",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[Q]",
        "icon": "ThundererQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Focuses strength onto the tip of the spear to deliver powerful strikes.",
            "Next 3 attacks are converted into pure type, each dealing Attack Damage X 1.5 + (STR + AGI) X 5 damage",
            "Lasts 10 seconds",
            "3rd attack critically strikes and knocks-up non-boss target"
        ]
    },
    {
        "id": "A0MX",
        "name": "Magnetic Field",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[Passive]",
        "icon": "ThundererPass_2",
        "order": 3,
        "passive": [
            "Surrounds yourself with a magnetic field to become less affected by air resistance.",
            "Builds magnetic field upon dealing damage or receiving damage (up to 10% per second)",
            "Max attack damage bonus: (STR + AGI) X 2.5",
            "Max attack speed bonus: 75%",
            "Max reduction bonus: 20%"
        ]
    },
    {
        "id": "A0N4",
        "name": "Lightning Rush",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[W]",
        "icon": "ThundererW",
        "cooldown": 8,
        "order": 4,
        "active": [
            "Dashes with the speed of lightning.",
            "(STR + AGI) X 15 magic damage",
            "Stuns enemies hit for 1 second",
            "Recharges Magnetic Field up to 25% based on distance travelled"
        ]
    },
    {
        "id": "A103",
        "name": "Thunder Shield",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[E]",
        "icon": "ThundererE",
        "cooldown": 20,
        "order": 5,
        "active": [
            "Activates a shield of thunder to protect yourself and damage nearby enemies.",
            "Deals (STR + AGI) X 6 magic damage per second",
            "Reduces damage taken by 40%",
            "After 3 seconds, consumes 15% of Magnetic Field per second"
        ]
    },
    {
        "id": "A0N0",
        "name": "Heart Break",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[R]",
        "icon": "ThundererR",
        "cooldown": 30,
        "order": 6,
        "active": [
            "Delivers a fatal blow by striking target's heart.",
            "Attack Damage X 5 + (STR + AGI) X 40 magic damage",
            "Consumes Magnetic Field to deal up to a maximum of 150% bonus damage",
            "Breaks barriers and stuns for 1.5 second if max gauge is consumed"
        ]
    },
    {
        "id": "A0N3",
        "name": "Thunderfury",
        "heroClass": "Thunderer",
        "color": "fe2101",
        "hotkey": "[F]",
        "icon": "ThundererF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"Disappear with the thunder!\" - Thunderer",
            "Calls down 25 lightning strikes over 4 seconds, each dealing Main Stat X 10 magic damage and stunning for 1 second",
            "Restores 25% of Magnetic Field every second while inside the area"
        ]
    },
    {
        "id": "A01K",
        "name": "Bloodbath",
        "heroClass": "Berserker",
        "color": "ff8080",
        "hotkey": "[Passive]",
        "icon": "BerserkerPass",
        "order": 1,
        "passive": [
            "Drowns in enemies' blood to become immersed in battle.",
            "Heals for Max HP X 6% on each attack",
            "20% chance to inflict Bleeding for 5 seconds on attack",
            "Deals Attack Damage X 30% magic damage per second"
        ]
    },
    {
        "id": "A04S",
        "name": "Brandish",
        "heroClass": "Berserker",
        "color": "8b0000",
        "hotkey": "[Q]",
        "icon": "BerserkerQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Dashes forward slashing through enemies. ",
            "Consumes HP X 5%",
            "Attack DamageX 0.75 pure damage",
            "Can be cast 3 times in a row, with last cast dealing 200% damage"
        ]
    },
    {
        "id": "A01B",
        "name": "Howling",
        "heroClass": "Berserker",
        "color": "8b0000",
        "hotkey": "[W]",
        "icon": "BerserkerW",
        "cooldown": 5,
        "order": 3,
        "active": [
            "Consumes life to let out a fierce roar.",
            "Consumes HP X 30%",
            "Max HP (1 + 0.03 X hero level) pure damage",
            "Increases magic damage taken by target by 10% for 3 seconds"
        ]
    },
    {
        "id": "A0LL",
        "name": "Blood Fury",
        "heroClass": "Berserker",
        "color": "ff0000",
        "hotkey": "[E]",
        "icon": "BerserkerE",
        "order": 4,
        "passive": [
            "As the hunger for blood increases, so do berserker's combat abilities.",
            "Increases attack damage up to (STR X 6), total damage up to 20%, move speed up to 125, and damage reduction up to 40% based on missing HP",
            "Each attack increases STR by 10%, attack speed by 25% for 6 seconds (stacks up to 3 times)"
        ],
        "toggle": [
            "Drowns in blood to bring out full combat abilities.",
            "Consumes HP X 30% per second (down to Max HP X 30%)",
            "HP regeneration and healing are reduced by 85% and cannot bring Berserker's HP above 30%"
        ]
    },
    {
        "id": "A0FI",
        "name": "Blade Rush",
        "heroClass": "Berserker",
        "color": "ff0000",
        "hotkey": "[R]",
        "icon": "BerserkerR",
        "cooldown": 10,
        "order": 5,
        "active": [
            "Rushes forward with a spinning blade of death.",
            "Consumes HP X 20%",
            "Spins for 1.5 seconds, dealing Attack Damage X 1.5 + STR X 15 magic damage per second",
            "Deals 33% bonus damage to bleeding targets and reapplies bleeding",
            "Become immune to CC effects while active"
        ]
    },
    {
        "id": "A037",
        "name": "Berserk",
        "heroClass": "Berserker",
        "color": "8b0000",
        "hotkey": "[T]",
        "icon": "BerserkerT",
        "cooldown": 30,
        "order": 6,
        "passive": [
            "Shrouds your sword with madness.",
            "On attack, you have up to 10~25% chance based on missing HP to activate Madness, dealing Attack Damage X 30% + STR X 3 bonus magic damage",
            "Casting Brandish empowers next attack with bonus damage"
        ],
        "active": [
            "Driven by madness, Berserker becomes a killing machine whose sole purpose is to battle.",
            "Consumes HP X 70%",
            "For 6 seconds, increases total damage by 15% and attack speed by 100%",
            "Every attack activates Bleeding and has 35% chance to trigger Madness",
            "HP will not drop below 1 and becomes immune to instant death effects"
        ]
    },
    {
        "id": "A00A",
        "name": "Rabid Storm",
        "heroClass": "Berserker",
        "color": "FF0000",
        "hotkey": "[F]",
        "icon": "BerserkerF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"It is not a human but rather a monster! A monster crazed by battle! How could she move like that.. It sends shivers down my spines just to think about running into her as enemies in a war.\" - Survivor of Empire War",
            "Each slash deals STR X 5 magic damage",
            "Final slam deals STR X 100 magic damage",
            "Fully restores HP after cast"
        ]
    },
    {
        "id": "A01N",
        "name": "Elven Arrow",
        "heroClass": "Bow Master",
        "color": "b6de69",
        "hotkey": "[Passive]",
        "icon": "BowMasterD",
        "order": 1,
        "passive": [
            "The elven archers of ancient origin possess superior intellect and archery skills.",
            "Increasees move speed by 100",
            "Every 4 seconds, empowers next attack with a magical explosion, dealing AGI X 6 magic damage",
            "Every 4 seconds, stacks a charge of Magic Arrow (up to 2 charges)",
            "Casting Flame Shot or Freezing Shot will consume a stack of Magic Arrow and not incur any cooldown"
        ]
    },
    {
        "id": "A05W",
        "name": "Flame Shot",
        "heroClass": "Bow Master",
        "color": "4682b4",
        "hotkey": "[Q]",
        "icon": "BowMasterQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Dash back and shoot a powerful arrow of fire at the same time.",
            "Attack Damage X 0.6 + AGI X 5 magic damage",
            "Stuns for 1 second",
            "Deals 100% bonus damage to already stunned targets"
        ]
    },
    {
        "id": "A05Y",
        "name": "Freezing Shot",
        "heroClass": "Bow Master",
        "color": "4682b4",
        "hotkey": "[W]",
        "icon": "BowMasterW",
        "cooldown": 6,
        "order": 3,
        "active": [
            "Fires multiple frozen arrows in a frontal cone.",
            "Attack damage X 0.6 + AGI X 6 magic damage",
            "Slows target by 40% for 2 seconds",
            "Damage is applied only once regardless of arrows hit"
        ]
    },
    {
        "id": "A060",
        "name": "Guardian Scout",
        "heroClass": "Bow Master",
        "color": "bf81d3",
        "hotkey": "[E]",
        "icon": "BowMasterE",
        "cooldown": 12,
        "order": 4,
        "passive": [
            "Summons a faithful guardian that follows Bow Master around.",
            "Increases nearby hero's attack damage and main stat by 8%",
            "Supports every attack with Attack Damage X 0.075 + AGI X 0.375bonus damage",
            "Can critically strike"
        ],
        "active": [
            "Sends out the guardian to support your allies.",
            "Increases nearby allies' HP regen by (Target's Max HP X 10%) for 3 seconds"
        ]
    },
    {
        "id": "A061",
        "name": "Purestorm Shot",
        "heroClass": "Bow Master",
        "color": "ddf45b",
        "hotkey": "[R]",
        "icon": "BowMasterR",
        "cooldown": 15,
        "order": 5,
        "active": [
            "Fires a mana-infused arrow to repeatedly strike down lightnings upon target.",
            "Every 0.5 seconds, deals AGI X 3 magic damage",
            "Lasts 8 seconds",
            "Can activate Lightning Strike 3 times while active"
        ]
    },
    {
        "id": "A06A",
        "name": "Arrow Rain",
        "heroClass": "Bow Master",
        "color": "80ff80",
        "hotkey": "[T]",
        "icon": "BowMasterT",
        "cooldown": 30,
        "order": 6,
        "active": [
            "Summons countless magical arrows to bombard target area.",
            "Summons 24 arrows",
            "Each arrow deals attack damage X 0.5 + AGI X 4 magic damage",
            "If chained with Flame Shot, damage increased by 20%",
            "If chained with Freezing Shot, freezes enemies hit for 2.5 seconds"
        ]
    },
    {
        "id": "A0QN",
        "name": "Heartseeker",
        "heroClass": "Bow Master",
        "color": "80ff80",
        "hotkey": "[T]",
        "icon": "BowMasterT_2",
        "cooldown": 20,
        "order": 7,
        "active": [
            "Bombards target area with heart-seeking arrows.",
            "Fires 5 arrows that each deal attack damage X 1.2 + AGI X 12 magic damage",
            "Stuns targets hit for 2.5 seconds and reduces their armor by 175 for 6 seconds"
        ]
    },
    {
        "id": "A06X",
        "name": "Magic Ballista",
        "heroClass": "Bow Master",
        "color": "88f0e6",
        "hotkey": "[F]",
        "icon": "BowMasterF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"Without a warning, our enemies were swept across like dust by a magical arrow she shot.\" - A soldier of battlefield",
            "Summons 6 small arrows that deals AGI X 15 magic damage each",
            "Afterwards, fires a large arrow that deals AGI X 125 magic damage",
            "On cast, resets cooldown of Flame Shot and Freezing Shot",
            "Gains 1 charge of Elven Arrow each time small arrow is fired"
        ]
    },
    {
        "id": "A08U",
        "name": "Release Mana",
        "heroClass": "Knight",
        "color": "66c2ff",
        "hotkey": "[D]",
        "icon": "KnightD",
        "order": 1,
        "passive": [
            "Prolonged training allows knight to never run out of mana.",
            "Increases max MP by (STR + INT) X 5",
            "Restores max MP X 10% per second"
        ],
        "active": [
            "Release mana to strengthen your body.",
            "Increases damage reduction by 15%",
            "Converts restored MP into HP 50% of restored MP"
        ]
    },
    {
        "id": "A01O",
        "name": "Grand Sword",
        "heroClass": "Knight",
        "color": "00bfff",
        "hotkey": "[Q]",
        "icon": "KnightQ",
        "proc_rate": 0.5,
        "cooldown": 0.5,
        "order": 2,
        "active": [
            "Performs a mighty slash with mana-infused sword.",
            "Consumes Max MP X 40%",
            "Attack Damage X 0.7 + Max MP X 0.7 magic damage",
            "Reactivates with halved effectiveness on attack for 4 seconds"
        ]
    },
    {
        "id": "A00B",
        "name": "Blitz",
        "heroClass": "Knight",
        "color": "afaff5",
        "hotkey": "[W]",
        "icon": "KnightW",
        "proc_rate": 0.5,
        "order": 3,
        "active": [
            "Quickly dash across the battlefield.",
            "Consumes Max MP X 40%",
            "STR X 10 magic damage",
            "Knockbacks enemies toward charge direction",
            "Colliding from far distance breaks barriers and deals up to (8 X damage reduction + 4 X magic defense)% bonus damage",
            "Breaking a barrier increases this skill's damage by 50%",
            "Release Mana ON: Pierces through enemies and grants shield for 3 seconds that absorbs up to (Knight's Reduction X Knight's Max MP) to collided allies"
        ]
    },
    {
        "id": "A019",
        "name": "Instincts",
        "heroClass": "Knight",
        "color": "4169e1",
        "hotkey": "[E]",
        "icon": "KnightE",
        "cooldown": 12,
        "order": 4,
        "passive": [
            "Gifted talent to predict and move out of danger.",
            "20% chance to reduce received damage by half",
            "Always activates while casting skill"
        ],
        "active": [
            "Focus keenly to maximize instincts.",
            "Becomes immune to debuff for 2 seconds",
            "Evades next attack",
            "Chain - Assault"
        ]
    },
    {
        "id": "A0WG",
        "name": "Assault",
        "heroClass": "Knight",
        "color": "66c2ff",
        "hotkey": "[E] → [E]",
        "icon": "KnightE_2",
        "order": 5,
        "active": [
            "Quickly approaches target to perform a series of slashes.",
            "Attack 6 times dealing Attack Damage X 0.6 pure damage each time",
            "If used after dodging, lands as critical strike"
        ]
    },
    {
        "id": "A00D",
        "name": "Mana Blaster",
        "heroClass": "Knight",
        "color": "73b9ff",
        "hotkey": "[R]",
        "icon": "KnightR",
        "proc_rate": 0.5,
        "cooldown": 1.5,
        "order": 6,
        "passive": [
            "Reduce magical effects imposed upon Knight.",
            "Creates a mana orb every 3 seconds (up to 3 orbs)",
            "Each orb increases magic defense by 8%"
        ],
        "active": [
            "Materialize mana into an orb.",
            "Consumes Max MP X 10% per orb created",
            "If 3 orbs are charged, it sends all 3 orbs to target location with each orb dealing 400% max MP",
            "If Release Mana is toggled on, each orb stuns target",
            "If Release Mana is toggled off, each orb slows target movement speed by 50% for 3 seconds",
            "If less than 3 orbs were charges, does not go on cooldown"
        ]
    },
    {
        "id": "A0KB",
        "name": "Mana Blast",
        "heroClass": "Knight",
        "color": "73b9ff",
        "hotkey": "[R] → [R]",
        "icon": "KnightR_R",
        "proc_rate": 0.5,
        "cooldown": 1.5,
        "order": 7,
        "active": [
            "Fires all mana orbs.",
            "Each orb deals MP X 0.7 magic damage",
            "Reduces movement speed by 50% for 3 seconds",
            "Release Mana ON: Stuns for 1 second"
        ]
    },
    {
        "id": "A00N",
        "name": "Seal of Mana",
        "heroClass": "Knight",
        "color": "73b9ff",
        "hotkey": "[T]",
        "icon": "KnightT",
        "cooldown": 15,
        "order": 8,
        "passive": [
            "Inscribe seal of mana onto enemies to amplify magic taken.",
            "On landing hit with a skill, applies Seal of Mana (up to 6 stacks)",
            "On landing hit with another skill of Knight, consumes all stacks of Seal of Mana",
            "For each stack consumed, deals 20% bonus damage and restores max MP X 2% (max MP X 4% for boss)"
        ],
        "active": [
            "Inscribes seal of mana onto the ground to protect allies from damage.",
            "Shares Knight's reduction and healing with allies",
            "Restores Knight's MP by 10% per second",
            "Lasts 6 seconds"
        ]
    },
    {
        "id": "A00S",
        "name": "Excalibur",
        "heroClass": "Knight",
        "color": "ffff00",
        "hotkey": "[F]",
        "icon": "KnightF",
        "cooldown": 60,
        "order": 9,
        "active": [
            "\"Corrupt evils that must not exist in this world! The end is nigh. O Holy sword, grant me victory over my foes!\" - Knight during the God-Devil War",
            "STR X 75 magic damage",
            "For each second channeled, size increased & damage increased by 50%",
            "Can be channeled up to a maximum of 2 seconds",
            "Grants 100% damage reduction and immunity to debuffs/CC effects to allies hit for 5 seconds"
        ]
    },
    {
        "id": "A131",
        "name": "Deathblade",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[D]",
        "icon": "DarkKnightD",
        "order": 1,
        "passive": [
            "A cursed blade that feeds upon life to give powerful abilities in return.",
            "Every 7 seconds, empowers next attack, dealing Main Stat X 7.5 magic damage and ripping a soul out of it",
            "Resets cooldown of Soul Break"
        ],
        "active": [
            "Harvests souls.",
            "Absorbs souls in a straight line, healing for Max HP X 6% + INT X 2 per absorbed soul"
        ]
    },
    {
        "id": "A0BI",
        "name": "Soul Break",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[Q]",
        "icon": "DarkKnightQ",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Delivers a fierce strike that breaks the target's soul apart.",
            "Attack damage X 0.75 + STR X 5.5 magic damage",
            "Damage is increased by 100% for each 0.2 second channeled, and rips out target's soul if channeled to max",
            "If cast twice consecutively, next cast has no cast time and has 50% increased damage"
        ]
    },
    {
        "id": "A0BK",
        "name": "Abyssal Slam",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[W]",
        "icon": "DarkKnightW",
        "cooldown": 10,
        "order": 3,
        "active": [
            "Slams down with strength powerful enough to awaken dormant souls lying beneath the grounds.",
            "Attack damage X 1 + (STR X INT) X 10 magic damage",
            "Activates Deathblade and summons 3 souls",
            "STR Main Stat: Increases damage of Abyssal Slam by (Hero Level X 2)%"
        ]
    },
    {
        "id": "A0CR",
        "name": "Unholy Light",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[E]",
        "icon": "DarkKnightE",
        "cooldown": 15,
        "order": 4,
        "active": [
            "Offers an unholy prayer.",
            "Consumes Max HP X 25% per second",
            "On finish, deals Max HP X 3 magic damage to nearby enemies",
            "On finish, receives shield that absorbs Consumed HP X 100% damage for 8 seconds",
            "While casting, becomes immune to CC effects and reduces damage taken by 80%",
            "INT Main Stat: Nearby allies also receive shield and damage reduction"
        ]
    },
    {
        "id": "A12M",
        "name": "Dark Arts",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[R]",
        "icon": "DarkKnightR",
        "order": 5,
        "active": [
            "Practices dark arts.",
            "Upon killing an enemy or absorbing a soul, restores 1 SP (max 5)",
            "SP can be used to cast skills"
        ]
    },
    {
        "id": "A12N",
        "name": "Death Coil",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[R] → [Q]",
        "icon": "DarkKnightR_Q",
        "proc_rate": 0.5,
        "order": 6,
        "active": [
            "Shoots a coil infused with dark magic.",
            "Deals Main Stat X 7.5 magic damage to enemy",
            "Heals allies for INT X 3"
        ]
    },
    {
        "id": "A12O",
        "name": "Death's Grasp",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[R] → [W]",
        "icon": "DarkKnightR_W",
        "proc_rate": 0.5,
        "order": 7,
        "active": [
            "Grasps target's soul.",
            "Stuns target for 2 seconds",
            "INT Main Stat: Pulls target toward you"
        ]
    },
    {
        "id": "A12P",
        "name": "Defile",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[R] → [E]",
        "icon": "DarkKnightR_E",
        "proc_rate": 0.5,
        "order": 8,
        "active": [
            "Defiles nearby ground.",
            "For 15 seconds, deals Main Stat X 2.25 magic damage per second",
            "Reduces target's speed by 25%",
            "INT Main Stat: Increases magic damage taken by target by (4 + INT / 375)%"
        ]
    },
    {
        "id": "A12Q",
        "name": "Eyes of Terror",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[R] → [R]",
        "icon": "DarkKnightR_R",
        "proc_rate": 0.5,
        "cooldown": 25,
        "order": 9,
        "active": [
            "Gathers souls into a ball and blasts it away.",
            "Main Stat X 15 magic damage",
            "Upon arrival, deals damage again and summons 4 souls",
            "STR Main Stat: Deals 200% bonus damage",
            "INT Main Stat: Breaks barrier effects"
        ]
    },
    {
        "id": "A0CY",
        "name": "Requiem",
        "heroClass": "Dark Knight",
        "color": "8080ff",
        "hotkey": "[T]",
        "icon": "DarkKnightT",
        "cooldown": 30,
        "order": 10,
        "active": [
            "Bestows eternal rest to the souls of the dead.",
            "Main Stat X 25 magic damage",
            "Seals target's abilities for 2 seconds",
            "STR Main Stat: Consumes summoned souls to deal Main Stat X 12.5 bonus damage per soul",
            "INT Main Stat: Increases nearby allies HP regen by INT X 1 and magic defense by 60% for 6 seconds",
            "Summons 4 additional souls afterwards"
        ]
    },
    {
        "id": "A0D7",
        "name": "Unholy Tempest",
        "heroClass": "Dark Knight",
        "color": "8080c0",
        "hotkey": "[F]",
        "icon": "DarkKnightF",
        "cooldown": 120,
        "order": 11,
        "active": [
            "\"Cry !\" - Dark Knight",
            "Deals Main Stat X 115 magic damage over 2 seconds",
            "Periodically stuns target and deals up to 50% bonus damage based on target's missing HP",
            "On finish, resets cooldowns on other skills"
        ]
    },
    {
        "id": "A00V",
        "name": "Moonlight Link",
        "heroClass": "Arcane Mage",
        "color": "d7afeb",
        "hotkey": "[D]",
        "icon": "ArcaneMageD",
        "cooldown": 10,
        "order": 1,
        "active": [
            "Restore injuries with mana in the atmosphere.",
            "Restores HP & MP 35%",
            "Refreshes cooldowns"
        ]
    },
    {
        "id": "A00W",
        "name": "Magic Star",
        "heroClass": "Arcane Mage",
        "color": "82e1ff",
        "hotkey": "[Q]",
        "icon": "ArcaneMageQ",
        "proc_rate": 0.8,
        "cooldown": 6,
        "order": 2,
        "active": [
            "Fires a magical orb shaped like a star.",
            "Max MP X 1 magic damage",
            "Heals allies for 25% of damage",
            "If 2 magic stars collide with each other, creates an explosion dealing 500% damage"
        ]
    },
    {
        "id": "A00Y",
        "name": "Flash Storm",
        "heroClass": "Arcane Mage",
        "color": "91b9e1",
        "hotkey": "[W]",
        "icon": "ArcaneMageW",
        "proc_rate": 0.8,
        "cooldown": 8,
        "order": 3,
        "active": [
            "Pulls down mana in the atmosphere as a shattering strike.",
            "Max MP X 2.5 magic damage",
            "Stuns for 0.5 seconds",
            "Increases magic damage taken from Mage by 4% for 30 seconds (Stacks up to 3 times)"
        ]
    },
    {
        "id": "A013",
        "name": "Gravity Field",
        "heroClass": "Arcane Mage",
        "color": "d79bff",
        "hotkey": "[E]",
        "icon": "ArcaneMageE",
        "proc_rate": 0.8,
        "cooldown": 10,
        "order": 4,
        "active": [
            "Damage and slow enemies by amplifying the gravity.",
            "Pulls in enemies",
            "Deals INT X 2.5 magic damage per second",
            "Lasts 5 seconds"
        ]
    },
    {
        "id": "A10V",
        "name": "Illusion",
        "heroClass": "Arcane Mage",
        "color": "91b9e1",
        "hotkey": "[R]",
        "icon": "ArcaneMageR",
        "proc_rate": 0.8,
        "cooldown": 10,
        "order": 5,
        "active": [
            "Dashes forward leaving a magical illusion behind.",
            "Illusion explodes after 3 seconds, dealing INT X 6 magic damage",
            "Becomes invisible and takes 40% reduced damage",
            "Can be cast twice in a row",
            "Chain: Magic Star"
        ]
    },
    {
        "id": "A07J",
        "name": "Barrage",
        "heroClass": "Arcane Mage",
        "color": "4bebaf",
        "hotkey": "[T]",
        "icon": "ArcaneMageT",
        "proc_rate": 0.8,
        "cooldown": 10,
        "order": 6,
        "active": [
            "Fires magical missiles everywhere.",
            "Each missile deals INT X 10 magic damage",
            "Fires 5 missiles"
        ]
    },
    {
        "id": "A07F",
        "name": "Starlight",
        "heroClass": "Arcane Mage",
        "color": "80ffff",
        "hotkey": "[F]",
        "icon": "ArcaneMageF",
        "cooldown": 60,
        "order": 7,
        "active": [
            "\"It's not an ordinary spell. This parade of stars that formed from the harmony of mana will captivate anyone's mind who sees it.\" - Mage",
            "Summons 5 stars for 8 seconds",
            "Every second, each star fires a magic missile dealing INT X 2 magic damage",
            "When you Magic Star, each star fires a magic missile dealing  INT X 4 magic damage",
            "On use, resets cooldown on Moonlight Link"
        ]
    },
    {
        "id": "A07I",
        "name": "Protection of Stars",
        "heroClass": "Arcane Mage",
        "color": "80ffff",
        "hotkey": "[F] → [F]",
        "icon": "ArcaneMageF_F",
        "cooldown": 100,
        "order": 8,
        "active": [
            "\"Did you know that mana-filled stars are whimsy?\" - Mage",
            "Protects target ally",
            "Fires missiles toward allies every 0.5 seconds that heals for INT X 2.5",
            "Lasts 4 seconds"
        ]
    },
    {
        "id": "A0WB",
        "name": "Frozen Emotion",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[D]",
        "icon": "WaterMageD",
        "order": 1,
        "passive": [
            "Imbues skills with cold energy.",
            "Landing two normal skills consecutively makes target vulnerable",
            "Next skill against a vulnerable unit will be empowered, dealing 150% bonus damage"
        ],
        "active": [
            "Embraces target with cold spirit.",
            "Deals INT X 2 bonus magic damage on attack",
            "Increases skill damage by (5 + INT / 500)%",
            "Absorbs up to INT X 0.5 damage (recharges by 10% per second)",
            "Can be applied on to 3 allies (always active on self)"
        ]
    },
    {
        "id": "A00Z",
        "name": "Ice Shard",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[Q]",
        "icon": "WaterMageQ",
        "cooldown": 3,
        "order": 2,
        "active": [
            "Forms an ice crystal and launches it at the target.",
            "INT X 6 + Max MP X 0.5 magic damage",
            "Freezes for 0.5 seconds",
            "Cooldown is reset upon casting another skill"
        ]
    },
    {
        "id": "A016",
        "name": "Frozen Burst",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[W]",
        "icon": "WaterMageW",
        "cooldown": 3,
        "order": 3,
        "active": [
            "Pulls up cold energy beneath the ground.",
            "Consumes Max MP X 15%",
            "Max MP X 2 magic damage"
        ]
    },
    {
        "id": "A010",
        "name": "Tidal Riding",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[E]",
        "icon": "WaterMageE",
        "cooldown": 8,
        "order": 4,
        "active": [
            "Rides gently on the waves.",
            "INT X 8 magic damage",
            "Refills barrier on allies hit",
            "Empowered: Refills caster's MP"
        ]
    },
    {
        "id": "A017",
        "name": "Frost Nova",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[R]",
        "icon": "WaterMageR",
        "cooldown": 12,
        "order": 5,
        "active": [
            "Releases a burst of cold energy, freezing everything nearby.",
            "INT X 40 magic damage",
            "Freezes for 2 seconds"
        ]
    },
    {
        "id": "A011",
        "name": "Glacier Orb",
        "heroClass": "Water Mage",
        "color": "87cefa",
        "hotkey": "[T]",
        "icon": "WaterMageT",
        "cooldown": 30,
        "order": 6,
        "active": [
            "Summons a magical orb that releases frosty aura.",
            "For 8 seconds, deals INT X 5 magic damage per second",
            "Periodically freezes for 1 second",
            "Chain: Increases Ice Shard's damage by 300%"
        ]
    },
    {
        "id": "A00L",
        "name": "Ice Age",
        "heroClass": "Water Mage",
        "color": "4682b4",
        "hotkey": "[F]",
        "icon": "WaterMageF",
        "cooldown": 75,
        "order": 7,
        "active": [
            "\"Looking at you all reminds me of ice sculptures. Well, not that one captures my attention.\" - Mage",
            "Pauses nearby enemies for 2 seconds",
            "Upon expiration, deals INT X 125 + Max MP X 15 pure damage"
        ]
    },
    {
        "id": "A0LF",
        "name": "Shatter",
        "heroClass": "Water Mage",
        "color": "c2c8f5",
        "hotkey": "[F] → [F]",
        "icon": "WaterMageF_F",
        "order": 8,
        "active": [
            "\"Oops. That was a mistake..\" - Mage",
            "Ends Ice Age immediately"
        ]
    },
    {
        "id": "A01M",
        "name": "Heal",
        "heroClass": "Priest",
        "color": "faf4b6",
        "hotkey": "[D]",
        "icon": "PriestD",
        "cooldown": 6,
        "order": 1,
        "active": [
            "Heal target's wounds",
            "Heals for INT X 0.5 HP every second",
            "Additionally heals for Max HP X 10% per second if target is a summon",
            "Reduces target's damage taken by 20% while active",
            "Lasts for 12 seconds"
        ]
    },
    {
        "id": "A01A",
        "name": "Holy Wave",
        "heroClass": "Priest",
        "color": "f0e68c",
        "hotkey": "[Q]",
        "icon": "PriestQ",
        "cooldown": 4,
        "order": 2,
        "active": [
            "Release holy mana in the shape of a line.",
            "INT X 5 magic damage",
            "Heals allies for INT X 2.5 HP",
            "If the target is affected by Recovery, clears any debuffs on the target"
        ]
    },
    {
        "id": "A00R",
        "name": "Divine Orb",
        "heroClass": "Priest",
        "color": "fffacd",
        "hotkey": "[W]",
        "icon": "PriestW",
        "cooldown": 20,
        "order": 3,
        "active": [
            "Summons a holy orb that can be used to assist allies.",
            "Summons an orb that can be controlled for 12 seconds",
            "Deals INT X 5 magic damage to enemies hit",
            "Increases allies' movement speed by 200 and regenerates their HP by 8% per second",
            "Replicates Holy Wave and Holy Aurora cast by Priest",
            "Hitting a target with both waves will deal additional INT X 30 magic damage"
        ]
    },
    {
        "id": "A092",
        "name": "Holy Aurora",
        "heroClass": "Priest",
        "color": "b6de69",
        "hotkey": "[E]",
        "icon": "PriestE",
        "cooldown": 20,
        "order": 4,
        "passive": [
            "The priest's presence alone brings great support to her allies.",
            "Increases nearby allies' attack damage by 5% and all stats by (Priest's INT X 0.06)"
        ],
        "active": [
            "Creates a holy ring to protect allies and bring down judgment on enemies",
            "Deals INT X 5 magic damage per second",
            "Heals for 50 + INT X 0.7 per second",
            "Lasts 7 seconds and increases in radius by 50% over duration",
            "Chain - Release Light"
        ]
    },
    {
        "id": "A19K",
        "name": "Release Light",
        "heroClass": "Priest",
        "color": "f0e68c",
        "hotkey": "[E] → [E]",
        "icon": "PriestE_Release",
        "order": 5,
        "active": [
            "Releases a holy nova.",
            "Heals allies within radius for INT X 2.5",
            "Increases target's skill damage by (7 + INT / 450)% for 5 seconds",
            "Buff duration is increased up to 100% based on how long Holy Aurora was maintained"
        ]
    },
    {
        "id": "A0FF",
        "name": "Dark Aurora [Lv 1]",
        "heroClass": "Priest",
        "color": "8000ff",
        "hotkey": "[E]",
        "icon": "PriestE_2",
        "cooldown": 10,
        "order": 6,
        "passive": [
            "The priest's presence alone brings great support to her allies.",
            "Increases nearby allies' attack damage by 5% and all stats by (Priest's INT X 0.05)"
        ],
        "active": [
            "Devastates target ground with corrupt energy to cause havoc.",
            "Every second, inflict INT X 15 magic damage",
            "Can be channeled for 3 seconds",
            "Damage interval decreases based on attack speed"
        ]
    },
    {
        "id": "A0FF2",
        "name": "Dark Aurora [Lv 2]",
        "heroClass": "Priest",
        "color": "8000ff",
        "hotkey": "[E]",
        "icon": "PriestE_2",
        "cooldown": 10,
        "order": 7,
        "passive": [
            "The priest's presence alone brings great support to her allies.",
            "Increases nearby allies' attack damage by 5% and all stats by (Priest's INT X 0.05)"
        ],
        "active": [
            "Devastates target ground with corrupt energy to cause havoc.",
            "Every second, inflict INT X 20 magic damage",
            "Can be channeled for 3 seconds",
            "Damage interval decreases based on attack speed"
        ]
    },
    {
        "id": "A0FF3",
        "name": "Dark Aurora [Lv 3]",
        "heroClass": "Priest",
        "color": "8000ff",
        "hotkey": "[E]",
        "icon": "PriestE_2",
        "cooldown": 10,
        "order": 8,
        "passive": [
            "The priest's presence alone brings great support to her allies.",
            "Increases nearby allies' attack damage by 5% and all stats by (Priest's INT X 0.05)"
        ],
        "active": [
            "Devastates target ground with corrupt energy to cause havoc.",
            "Every second, inflict INT X 25 magic damage",
            "Can be channeled for 3 seconds",
            "Damage interval decreases based on attack speed"
        ]
    },
    {
        "id": "A01E",
        "name": "Divine Light",
        "heroClass": "Priest",
        "color": "f0e68c",
        "hotkey": "[R]",
        "icon": "PriestR",
        "cooldown": 25,
        "order": 9,
        "active": [
            "Convert targeted area's mana into holy energy, creating a holy explosion.",
            "INT X 45 magic damage",
            "Stuns enemies within area for 0.5 seconds and blinds them for 5 seconds",
            "Grants barriers to allies within area that absorbs INT X 6 damage for 6 seconds"
        ]
    },
    {
        "id": "A02F",
        "name": "Heaven's Gate",
        "heroClass": "Priest",
        "color": "fffacd",
        "hotkey": "[T]",
        "icon": "PriestT",
        "cooldown": 90,
        "order": 10,
        "active": [
            "Temporarily opens the gate of heaven to summon an angel bound to the Priest by an old contract",
            "Summons Angel 'Raguel'",
            "Lasts for 120 seconds"
        ]
    },
    {
        "id": "A0WK",
        "name": "Holy Power",
        "heroClass": "Priest",
        "color": "ffff99",
        "hotkey": "[T] → [Passive]",
        "icon": "PriestT_Pass",
        "order": 11,
        "passive": [
            "Cleanses multiple enemies using power bestowed by the god.",
            "Attacks all nearby targets at once",
            "Magic defense increased by 30%",
            "Immune to CC effects"
        ]
    },
    {
        "id": "A00F2",
        "name": "Recall",
        "heroClass": "Priest",
        "color": "52E252",
        "hotkey": "[T] → [D]",
        "icon": "Recall",
        "cooldown": 1,
        "order": 12,
        "active": [
            "Teleport to summoner's position."
        ]
    },
    {
        "id": "A02Y",
        "name": "Holy Light",
        "heroClass": "Priest",
        "color": "ffff80",
        "hotkey": "[T] → [Q]",
        "icon": "PriestT_Q",
        "cooldown": 15,
        "order": 13,
        "active": [
            "Surround ally in light to heal his/her wounds.",
            "Restores all HP",
            "Removes all debuffs"
        ]
    },
    {
        "id": "A082",
        "name": "Leap of Faith",
        "heroClass": "Priest",
        "color": "ffff80",
        "hotkey": "[T] → [W]",
        "icon": "PriestT_W",
        "cooldown": 15,
        "order": 14,
        "active": [
            "Pulls target ally toward your location.",
            "Grants invulnerability to target and self while casting"
        ]
    },
    {
        "id": "A048",
        "name": "Divine Blessing",
        "heroClass": "Priest",
        "color": "ffff80",
        "hotkey": "[T] → [F]",
        "icon": "PriestT_F",
        "cooldown": 60,
        "order": 15,
        "active": [
            "Gift target with god's blessing.",
            "Revives a fallen ally after 2 seconds of channeling",
            "After revival, target takes 50% reduced damage for 3 seconds",
            "Has 100 seconds of cooldown shared between summons"
        ]
    },
    {
        "id": "A02N",
        "name": "Heaven Field",
        "heroClass": "Priest",
        "color": "ffff00",
        "hotkey": "[F]",
        "icon": "PriestF",
        "cooldown": 120,
        "order": 16,
        "active": [
            "\"As my body suddenly start bursting out light, I've felt like I could keep on fighting without ever growing tired. It was only later that I realized the Priest had arrived.\" - Soldier of Empire Army",
            "Summons Heaven Field for 30 seconds",
            "For allies on the field, increases their damage dealt by 5%, reduces their damage taken by 15% and regenerates their HP by 10% per second",
            "For your summons on the field, increases their attack speed by 50%"
        ]
    },
    {
        "id": "Aspb",
        "name": "Holy Aura",
        "heroClass": "Paladin",
        "color": "b9faff",
        "hotkey": "[D]",
        "icon": "PaladinD",
        "order": 1,
        "active": [
            "Holy power allows you to emit a powerful aura.",
            "Every 7th attack empowers next attack with Judgment",
            "Attack Damage X 1 magic damage",
            "If STR is main stat, total damage is increased by 10%",
            "If INT is main stat, total damage is decreased by 40% but aura radius is increased by 50% and Devotion Effect is activated"
        ]
    },
    {
        "id": "A031",
        "name": "Aura of Retribution",
        "heroClass": "Paladin",
        "color": "ff8080",
        "hotkey": "[D] → [Q]",
        "icon": "PaladinD_Q",
        "order": 2,
        "passive": [
            "An aspect of crusader who calls down retribution on his foes.",
            "Increase nearby allies' attack damage by 10%",
            "Judgment - Deals 150% bonus damage",
            "Sigil - Increases skill damage by 12% for 20 seconds",
            "Devotion: Increases skill damage by additional (INT / 750)%"
        ]
    },
    {
        "id": "A032",
        "name": "Aura of Protection",
        "heroClass": "Paladin",
        "color": "ffff80",
        "hotkey": "[D] → [W]",
        "icon": "PaladinD_W",
        "order": 3,
        "passive": [
            "An aspect of protector who defends his allies.",
            "Increases nearby allies' magic defense by 15%",
            "Judgment - Reduces damage dealt by target by 25% for 2 seconds",
            "Sigil - Grants a shield that absorbs (STR + INT X 2) damage for 4 seconds",
            "Devotion: When chained with Holy Grace, shield amount and duration is increased by 100%"
        ]
    },
    {
        "id": "A05T",
        "name": "Aura of Restoration",
        "heroClass": "Paladin",
        "color": "ffff80",
        "hotkey": "[D] → [E]",
        "icon": "PaladinD_E",
        "order": 4,
        "passive": [
            "Aspect of priest that cures the inner wounds of allies.",
            "Increases nearby allies' HP regen by target's max HP X 1% + INT X 0.2",
            "Judgment - Restores max HP X 30%",
            "Sigil - Heals for target's max HP X 20% + INT X 2",
            "Devotion: Additionally heals for INT X 1 every 4 seconds for 20 seconds"
        ]
    },
    {
        "id": "A0AJ",
        "name": "Aura of Awakening",
        "heroClass": "Paladin",
        "color": "b9faff",
        "hotkey": "[D] → [R]",
        "icon": "PaladinD_R",
        "order": 5,
        "passive": [
            "An aspect of paragon who awakens his allies.",
            "Increases nearby allies' movement speed by 75",
            "Judgment - Stuns target for 0.5 seconds",
            "Sigil - Removes debuffs",
            "Devotion: When chained with Holy Grace, grants immunity to debuffs for 3 seconds"
        ]
    },
    {
        "id": "A02M",
        "name": "Holy Divide",
        "heroClass": "Paladin",
        "color": "f5f59b",
        "hotkey": "[Q]",
        "icon": "PaladinQ",
        "cooldown": 4,
        "order": 6,
        "active": [
            "Sends out a holy wave that only damages evil.",
            "Attack Damage X 1 magic damage",
            "Heals you for INT X 2 HP",
            "Leaves Mark of Light for 3 seconds that allows your next attack from range to dash to the target and deal pure damage instead",
            "Cooldown reset on casting other skills",
            "Devotion: Heals any allies hit as well"
        ]
    },
    {
        "id": "A09L",
        "name": "Divine Spirit",
        "heroClass": "Paladin",
        "color": "ecca82",
        "hotkey": "[W]",
        "icon": "PaladinW",
        "proc_rate": 0.5,
        "order": 7,
        "passive": [
            "Summons holy spirits that boosts your mobility.",
            "Summons every 6 seconds (up to 3 spirits)",
            "Devotion: Summon cooldown reduced based on INT"
        ],
        "active": [
            "Merges with the holy spirit to move at the speed of light.",
            "STR X 5 magic damage",
            "Deals 150% bonus damage to enemies afflicted with Mark of Light",
            "Activates Judgment on next attack",
            "Provides Sigil to a single ally",
            "Devotion: Grants Sigil to 2 allies"
        ]
    },
    {
        "id": "A027",
        "name": "Holy Grace",
        "heroClass": "Paladin",
        "color": "f9d544",
        "hotkey": "[E]",
        "icon": "PaladinE",
        "cooldown": 15,
        "order": 8,
        "passive": [
            "Receives the blessing of angels.",
            "Max HP and healing received increased by 15%"
        ],
        "active": [
            "Applies Judgment to nearby enemies",
            "Applies Sigil to nearby allies",
            "Summons 2 holy spirits",
            "Devotion: Effect radius increased by 50%"
        ]
    },
    {
        "id": "A09M",
        "name": "Divine Cross",
        "heroClass": "Paladin",
        "color": "fafac8",
        "hotkey": "[R]",
        "icon": "PaladinR",
        "cooldown": 15,
        "order": 9,
        "active": [
            "Summons a holy cross to bring down judgment on enemies.",
            "Attack Damage X 8 magic damage",
            "Stuns target for 1.5 seconds",
            "Deals up to 75% bonus damage based on target's missing HP (max damage to immobile targets)",
            "Devotion: Breaks shield effects and increases damage taken by target by (5 + INT / 1000)% for 6 seconds"
        ]
    },
    {
        "id": "A09N",
        "name": "Divine Shield",
        "heroClass": "Paladin",
        "color": "fafac8",
        "hotkey": "[T]",
        "icon": "PaladinT",
        "cooldown": 30,
        "order": 10,
        "active": [
            "Summons a holy shield to protect yourself from harm.",
            "For 5 seconds, regenerates 15% HP per second and decreases damage taken by 80%",
            "On recast, deals (STR X 25 X elapsed seconds) magic damage to nearby enemies and stuns for 2.5 seconds",
            "Devotion: Applies to nearby allies"
        ]
    },
    {
        "id": "A006",
        "name": "Genesis",
        "heroClass": "Paladin",
        "color": "ffd700",
        "hotkey": "[F]",
        "icon": "PaladinF",
        "cooldown": 120,
        "order": 11,
        "active": [
            "\"Embrace the lights of heaven.\" - Paladin",
            "Releases a pulse every second to deal AD X 2.5 + STR X 40 magic damage",
            "Calls down rays of light on two allies every 0.25 seconds, healing them for INT X 5",
            "Lasts 4 seconds",
            "Devotion: Each pulse provides allies with buff for 4 seconds, increasing their total damage by 5% and preventing their HP from dropping below 1"
        ]
    },
    {
        "id": "A0K5",
        "name": "Slash",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[A]",
        "icon": "PBA",
        "order": 1,
        "passive": [
            "Delivers an attack that ignores target's armor",
            "Can be cast up to 3 times in a row",
            "Restores 1 soul if all 3 attacks land",
            "Cooldown is reduced based on bonus attack speed",
            "Deals only 60% damage to boss units"
        ]
    },
    {
        "id": "A11N",
        "name": "Soul",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[D]",
        "icon": "PBD",
        "order": 2,
        "passive": [
            "Restores 1 soul every 1.5 seconds",
            "Can hold up to 8 souls",
            "Each soul regenerates your HP by 0.5% per second"
        ],
        "active": [
            "Turns toward target direction."
        ]
    },
    {
        "id": "A0II",
        "name": "Alacrity",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[Q]",
        "icon": "PBQ",
        "order": 3,
        "passive": [
            "When performing a slash, has 40% chance to consume a soul to deal AGI X 6 bonus magic damage",
            "Can critically strike"
        ],
        "toggle": [
            "Disables the skill."
        ]
    },
    {
        "id": "A11P",
        "name": "Crescent",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[W]",
        "icon": "PBW",
        "proc_rate": 0.5,
        "order": 4,
        "active": [
            "Attack damage X 1 + AGI X 7.5 magic damage",
            "Slows target's movement speed by 90% for 3 seconds",
            "Pulls in non-boss units"
        ]
    },
    {
        "id": "A11O",
        "name": "Daze",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[E]",
        "icon": "PBE",
        "proc_rate": 0.5,
        "order": 5,
        "active": [
            "Attack damage X 1.4 + AGI X 10 magic damage",
            "Lands as critical strike on boss units"
        ]
    },
    {
        "id": "A0JD",
        "name": "Harmony",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[R]",
        "icon": "PBR",
        "cooldown": 10,
        "order": 6,
        "active": [
            "Dodges next attack",
            "On successful dodge, restores 8 souls and resets cooldowns of Crescent and Daze"
        ]
    },
    {
        "id": "A0KC",
        "name": "Release",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[T]",
        "icon": "PBT",
        "cooldown": 30,
        "order": 7,
        "active": [
            "Removes all soul consumption for 8 seconds and reduces some skills' cooldowns",
            "Enables dash while active",
            "Alacrity: Damage is increased by 25% and critical strike is guaranteed"
        ]
    },
    {
        "id": "A0K1",
        "name": "Obliterate",
        "heroClass": "Phantom Blade",
        "color": "c8f9dd",
        "hotkey": "[F]",
        "icon": "PBF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "Pauses enemies for a short time",
            "Delivers Attack Damage X 17.5 magic damage at the end",
            "Lands as critical strike",
            "Deals up to 40% bonus damage based on target's missing HP"
        ]
    },
    {
        "id": "A0TX",
        "name": "Perfect Harmony",
        "heroClass": "Hermit",
        "color": "71d7bb",
        "hotkey": "[D]",
        "icon": "HermitD",
        "order": 1,
        "passive": [
            "Forms a harmonious balance between attacking and healing.",
            "Every 4th attack heals you and 2 nearby allies for 25 + INT X 0.5 + Target's MAX HP X 2%",
            "If AGI is highest, your skills deal 75% more damage",
            "If STR or INT is highest, your skills heal and regenerate for 100% more and activates Harmony"
        ]
    },
    {
        "id": "A0M9",
        "name": "Flowing Fist",
        "heroClass": "Hermit",
        "color": "acddbd",
        "hotkey": "[Q]",
        "icon": "HermitQ",
        "order": 2,
        "active": [
            "Strikes target's weak points.",
            "Attack Damage X 1.5 + Main Stat X 5 pure damage",
            "Grants increased attack speed for 1.5 seconds",
            "Deals Main Stat X 1 pure damage on each attack",
            "If cast from melee range or while Wind Walk is active, deals 100% bonus damage and stuns for 0.5 seconds",
            "Harmony: Ki cost is removed and can be cast on allies"
        ]
    },
    {
        "id": "A0MA",
        "name": "Restoration",
        "heroClass": "Hermit",
        "color": "94b9f8",
        "hotkey": "[W]",
        "icon": "HermitW",
        "order": 3,
        "active": [
            "Heals wounds of allies within target area.",
            "Instantly heals for Main Stat X 0.75",
            "Heals for (STR + INT) X 0.15 every second",
            "Reduces damage taken by 15%",
            "Lasts 8~4 seconds based on distance from target point",
            "Harmony: Duration increased by 50%"
        ]
    },
    {
        "id": "A0QB",
        "name": "Wind Walk",
        "heroClass": "Hermit",
        "color": "cffae8",
        "hotkey": "[E]",
        "icon": "HermitE",
        "cooldown": 4.5,
        "order": 4,
        "passive": [
            "Calms your mind and body by walking.",
            "Restores HP 5% / 10 ki per second while walking"
        ],
        "active": [
            "Increases movement speed for 1 second",
            "Increases passive's restoration by 200%",
            "Harmony: Resets cooldown on Flowing Fist"
        ]
    },
    {
        "id": "A0SR",
        "name": "Orb of Harmony",
        "heroClass": "Hermit",
        "color": "b9f9e6",
        "hotkey": "[R]",
        "icon": "HermitR",
        "order": 5,
        "active": [
            "Summons an orb that heals allies.",
            "Regenerates HP by Main Stat X 0.25 per second",
            "Regenerates resource point by 5% per second",
            "Increases skill damage by 10%",
            "Lasts 5~10 seconds based on duration traveled",
            "Harmony: Skill damage bonus is further increased by (Main Stat / 500)%"
        ]
    },
    {
        "id": "A0T5",
        "name": "Purge",
        "heroClass": "Hermit",
        "color": "9abfed",
        "hotkey": "[T]",
        "icon": "HermitT",
        "cooldown": 15,
        "order": 6,
        "active": [
            "Purges inner evil within the soul.",
            "Deals Main Stat X 40 magic damage to nearby enemies and stuns for 1.5 seconds",
            "Clears debuffs of allies",
            "Also activates from any summoned Orb of Harmony",
            "Harmony: Grants shield absorbing Main Stat X 5 damage for 5 seconds",
            "Chain - Inner Release"
        ]
    },
    {
        "id": "A0TW",
        "name": "Inner Release",
        "heroClass": "Hermit",
        "color": "bee7fc",
        "hotkey": "[T] → [T]",
        "icon": "HermitT_2",
        "order": 7,
        "active": [
            "Releases all of your power.",
            "Knocks back nearby enemies and stuns them for 1.5 seconds",
            "Harmony: Pulls enemies in instead of knocking them back"
        ]
    },
    {
        "id": "A0TA",
        "name": "Purify",
        "heroClass": "Hermit",
        "color": "bee7fc",
        "hotkey": "[F]",
        "icon": "HermitF",
        "cooldown": 60,
        "order": 9,
        "active": [
            "\"This water shall cleanse your body and soul.\" - Hermit",
            "Deals Main Stat X 50 magic damage per second and breaks shield",
            "Your HP will not drop below 1 while casting this",
            "Harmony: Clears debuffs of allies, heals them for Target's Max HP X 15% per second and prevents their HP from going below 1",
            "Lasts 3 seconds"
        ]
    },
    {
        "id": "A0TY",
        "name": "Magical Broom",
        "heroClass": "Witch",
        "color": "e1b8fa",
        "hotkey": "[D]",
        "icon": "WitchD",
        "cooldown": 10,
        "order": 1,
        "passive": [
            "A broom filled with uncontrollable mana.",
            "Every attack deals INT X 2 magic damage",
            "On skill cast, gains explosive attack speed for 1.5 seconds"
        ],
        "active": [
            "Hops onto your broom.",
            "Increases movement speed by 500 for 1.5 seconds",
            "Ignores unit collision and slowing effects"
        ]
    },
    {
        "id": "A0TZ",
        "name": "Death Bomb",
        "heroClass": "Witch",
        "color": "9f7ee2",
        "hotkey": "[Q]",
        "icon": "WitchQ",
        "cooldown": 5,
        "order": 2,
        "active": [
            "Explosion... is an art!",
            "INT X 10 magic damage",
            "Stuns for 1 second",
            "Can be channeled up to 1.5 seconds, increasing damage by 200% and range/stun duration by 50% every 0.75 seconds",
            "Channeling speed can be increased by attack speed"
        ]
    },
    {
        "id": "A0UF",
        "name": "Star Shower",
        "heroClass": "Witch",
        "color": "efcdf3",
        "hotkey": "[W]",
        "icon": "WitchW",
        "proc_rate": 0.5,
        "order": 3,
        "active": [
            "Shoots stars out of your broom.",
            "INT X 4.5 magic damage",
            "Heals for INT X 1.5 (50% effectiveness for self)",
            "Refills 1 charge every 6 seconds",
            "Can hold up to 4 charges",
            "Can pierce enemies"
        ]
    },
    {
        "id": "A0V8",
        "name": "Mystical Cauldron",
        "heroClass": "Witch",
        "color": "bb8be2",
        "hotkey": "[E]",
        "icon": "WitchE",
        "cooldown": 18,
        "order": 4,
        "active": [
            "Summons a cauldron filled with magical items.",
            "Creates a potion every 1.5 seconds for 18 seconds",
            "Potion lasts for 30 seconds and heals for INT X 3",
            "Increases target's main stat by (4 + INT / 1000)% for 60 seconds"
        ]
    },
    {
        "id": "A0V9",
        "name": "Hex",
        "heroClass": "Witch",
        "color": "bba8e1",
        "hotkey": "[R]",
        "icon": "WitchR",
        "cooldown": 20,
        "order": 5,
        "active": [
            "A master of witchcraft can even stop the time itself.",
            "Freezes enemies for 1.5 seconds",
            "Grants immunity to harmful effects to allies for 2 seconds"
        ]
    },
    {
        "id": "A0VC",
        "name": "Hell Gate",
        "heroClass": "Witch",
        "color": "ab0c0c",
        "hotkey": "[T]",
        "icon": "WitchT",
        "cooldown": 60,
        "order": 6,
        "active": [
            "Summons a fallen angel who has formed a contract with Witch a long time ago.",
            "Summons Armaros"
        ]
    },
    {
        "id": "A00F3",
        "name": "Recall",
        "heroClass": "Witch",
        "color": "8b3636",
        "hotkey": "[T] → [D]",
        "icon": "Recall",
        "cooldown": 1,
        "order": 7,
        "passive": [
            "Teleport to summoner's position."
        ]
    },
    {
        "id": "A0Z1",
        "name": "Fallen Power",
        "heroClass": "Witch",
        "color": "8b3636",
        "hotkey": "[T] → [Passive]",
        "icon": "WitchT_Passive",
        "order": 8,
        "passive": [
            "A fallen angel cannot receive the blessings of the God.",
            "Each attack deals INT X 2 magic damage",
            "Magic defense increased by 40%"
        ]
    },
    {
        "id": "A0WJ",
        "name": "Arrow of Destruction",
        "heroClass": "Witch",
        "color": "6045c9",
        "hotkey": "[T] → [Q]",
        "icon": "WitchT_Q",
        "cooldown": 30,
        "order": 9,
        "active": [
            "INT X 40 magic damage",
            "Breaks barriers"
        ]
    },
    {
        "id": "A0XO",
        "name": "Mark of Power",
        "heroClass": "Witch",
        "color": "6045c9",
        "hotkey": "[T] → [W]",
        "icon": "WitchT_W",
        "cooldown": 1,
        "order": 10,
        "passive": [
            "Armaros's Power",
            "Increases damage dealt by 5%",
            "Reduces damage taken by 20%",
            "Increases attack speed by 25%"
        ],
        "active": [
            "Brands the target with power.",
            "Can be applied on 3 targets",
            "Will dissipate after 15 seconds if Armaros is unsummoned",
            "Lasts 45 seconds"
        ]
    },
    {
        "id": "A0YX",
        "name": "Unleash",
        "heroClass": "Witch",
        "color": "6045c9",
        "hotkey": "[T] → [E]",
        "icon": "WitchT_E",
        "order": 11,
        "active": [
            "Every 4th attack deals INT X 10 magic damage",
            "Increases attack speed by 250%",
            "Increases movement speed by 300",
            "Becomes immune to all harmful effects",
            "Vanishes after 8 seconds"
        ]
    },
    {
        "id": "A0VI",
        "name": "Death Field",
        "heroClass": "Witch",
        "color": "a498e9",
        "hotkey": "[F]",
        "icon": "WitchF",
        "cooldown": 120,
        "order": 12,
        "active": [
            "\"Get away from here. I will be using this zone as my lab..\" - Witch",
            "Deals INT X 15 magic damage per second",
            "Increases target's magic damage taken (Type-D) by 10%",
            "Lasts 8 seconds"
        ]
    },
    {
        "id": "A0IJ",
        "name": "Combo Mastery",
        "heroClass": "Fighter",
        "color": "c1c6c9",
        "hotkey": "[D]",
        "icon": "FighterD",
        "order": 1,
        "passive": [
            "Lands your attacks with a flow.",
            "Fulfilling one of conditions below will trigger a combo effect, restoring 1 energy",
            "When repeating an action (ex. AAA, WWW)",
            "When alternating between different action (ex. AWA, AWE): Empowers next skill",
            "If you activate a different combo than before (ex. AAA -> AWA): Increases attack damage by 10% and damage dealt by skills by 12% (stacks up to 5 times; resets on failure)"
        ]
    },
    {
        "id": "A0AM",
        "name": "Swing",
        "heroClass": "Fighter",
        "color": "f1ae9d",
        "hotkey": "[A]",
        "icon": "FighterA",
        "cooldown": 0.15,
        "order": 2,
        "active": [
            "Swings your arm forward.",
            "Attack Damage X 50% physical damage",
            "Ignores 50% of target's armor",
            "3rd hit deals 200% damage and resets cooldown of A",
            "Empowered: Restores 1 energy"
        ]
    },
    {
        "id": "A0GN",
        "name": "Skull Pounder",
        "heroClass": "Fighter",
        "color": "9e8e83",
        "hotkey": "[Q]",
        "icon": "FighterQ",
        "cooldown": 5,
        "order": 3,
        "active": [
            "Strikes down hard with a force strong enough to crack skulls.",
            "Attack damage X 0.75 + STR X 5 magic damage",
            "If target is CRACKED, cooldown is reset",
            "If target is SHATTERED, consumes it to deal 200% damage",
            "Empowered: Deals 300% damage and if target is CRACKED, has chance to leave it SHATTERED for 5 seconds (chance increases based on fail count)"
        ]
    },
    {
        "id": "A0HN",
        "name": "Footwork",
        "heroClass": "Fighter",
        "color": "c2d4df",
        "hotkey": "[W]",
        "icon": "FighterW",
        "order": 4,
        "active": [
            "Quickly steps back.",
            "Next attack allows you to dash to target and ignore 100% of its armor",
            "Reduce target's movement speed by 75% for 2 seconds",
            "Does not activate 'on skill cast' effects",
            "Empowered: Deals 300% damage and has 20% chance to leave target CRACKED for 6 seconds. If Combo Mastery is at max stacks, this will be guaranteed (can only occur if CRACKED hasn't been procced in last 15 seconds)"
        ]
    },
    {
        "id": "A0HR",
        "name": "Chain Blow",
        "heroClass": "Fighter",
        "color": "efcd5c",
        "hotkey": "[E]",
        "icon": "FighterE",
        "cooldown": 0.15,
        "order": 5,
        "passive": [
            "Attacks your target relentlessly.",
            "If activating a combo different from before, has 33% chance to reset cooldown",
            "If target is SHATTERED, cooldown will be greatly reduced"
        ],
        "active": [
            "Attack damage X 0.6 + STR X 6 magic damage",
            "Empowered: Increases target's damage taken by 6% for 12 seconds and deal STR X 3 magic damage every second"
        ]
    },
    {
        "id": "A0MN",
        "name": "Iron Body",
        "heroClass": "Fighter",
        "color": "9e8e83",
        "hotkey": "[R]",
        "icon": "FighterR",
        "cooldown": 12,
        "order": 6,
        "passive": [
            "Strengthens your body.",
            "Reduces damage taken by 20%"
        ],
        "active": [
            "Temporarily hardens your muscle as strong as steel.",
            "Reduces 70% of damage taken for 1.5 seconds",
            "While active, HP does not drop below 1 and grants immunity to CC effects"
        ]
    },
    {
        "id": "A0K7",
        "name": "Dragon Fist",
        "heroClass": "Fighter",
        "color": "ff7e6a",
        "hotkey": "[T]",
        "icon": "FighterT",
        "cooldown": 40,
        "order": 7,
        "active": [
            "Gathers energy into your fist to release a powerful strike.",
            "Attack damage X 5 + STR X 30 magic damage",
            "Empowered: Restores all energy and deals up to 250% damage based on traveled distance"
        ]
    },
    {
        "id": "A0KA",
        "name": "Takedown",
        "heroClass": "Fighter",
        "color": "d15e2c",
        "hotkey": "[F]",
        "icon": "FighterF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"Let's wrestle!\" -Fighter",
            "Hurls your body forward and latches onto a boss enemy",
            "Each hit deals STR X 6 magic damage",
            "Final hit deals STR X 85 magic damage and applies SHATTERED for 5 seconds"
        ]
    },
    {
        "id": "A141",
        "name": "Fantasm",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[D]",
        "icon": "TricksterD",
        "order": 1,
        "active": [
            "Creates an illusion that can mimic you.",
            "Illusion only deals 50% damage",
            "Has 5 second recast cooldown if killed"
        ]
    },
    {
        "id": "A18M",
        "name": "Recall",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[D] → [D]",
        "icon": "TricksterD",
        "order": 2,
        "active": [
            "Orders your illusion.",
            "If used on illuion, the illusion will be unsummoned"
        ]
    },
    {
        "id": "A13Q",
        "name": "Hidden Fang",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[Q]",
        "icon": "TricksterQ",
        "cooldown": 5,
        "order": 3,
        "passive": [
            "An expert mastery of dagger.",
            "Increases crit chance by 20%"
        ],
        "active": [
            "An expert mastery of dagger.",
            "Attack damage X 0.7 + AGI X 5 magic damage",
            "Can critically strike"
        ]
    },
    {
        "id": "A13R",
        "name": "Wonder Hand",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[W]",
        "icon": "TricksterW",
        "cooldown": 5,
        "order": 4,
        "passive": [
            "The movement of his hands are said to be almost magical.",
            "On attack, increases AGI by 2.5% for 6 seconds (stacks up to 8 times)",
            "On skill cast, empowers next attack to strike 3 additional times, each dealing AGI X 1 pure damage"
        ],
        "active": [
            "AGI X 7.5 magic damage",
            "Temporarily boosts your movement speed",
            "Can critically strike"
        ]
    },
    {
        "id": "A13U",
        "name": "Devil's Mirror",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[E]",
        "icon": "TricksterE",
        "cooldown": 12,
        "order": 5,
        "active": [
            "Switches position with your illusion.",
            "AGI X 10 magic damage",
            "Consumes all marks placed on target to increase damage by 200% per mark"
        ]
    },
    {
        "id": "A13W",
        "name": "Card Trick",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[R]",
        "icon": "TricksterR",
        "cooldown": 3,
        "order": 6,
        "passive": [
            "\"Handling cards is a basic in our trade.\"",
            "Charges 1 card every 9 seconds",
            "Can store up to 4 cards"
        ],
        "active": [
            "Sends out all your cards.",
            "Deals AGI X 4 magic damage per second for 15 seconds",
            "By right-clicking a card, you can teleport to it and reset cooldown on Hidden Fang"
        ]
    },
    {
        "id": "A14D",
        "name": "Retrieve Cards",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[R] → [R]",
        "icon": "TricksterR",
        "order": 7,
        "active": [
            "Retrieves all your cards."
        ]
    },
    {
        "id": "A140",
        "name": "Stage Finisher",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[T]",
        "icon": "TricksterT",
        "cooldown": 30,
        "order": 8,
        "passive": [
            "Leaves a mark on target hit by Hidden Fang",
            "Each mark on target increases the damage you deal to target with your skills by 5%"
        ],
        "active": [
            "Delivers a grand finale.",
            "Consumes all marks to deal Attack Damage X 1 + AGI X 12.5 magic damage each",
            "Can critically strike"
        ]
    },
    {
        "id": "A13Z",
        "name": "Sinister Trick",
        "heroClass": "Trickster",
        "color": "89ddb5",
        "hotkey": "[F]",
        "icon": "TricksterF",
        "cooldown": 120,
        "order": 9,
        "active": [
            "\"Ladies and gentlemen... here's a magic trick. I shall make this one disappear from the world.\" - Trickster",
            "Pauses target",
            "Afterwards, summons 30 spikes to pierce target dealing AGI X 5 magic damage per spike",
            "Marks the target in all directions and resets cooldown on Stage Finisher"
        ]
    },
    {
        "id": "A15H",
        "name": "Go Forth Meeko!",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[D]",
        "icon": "ShrinePriestessD",
        "cooldown": 10,
        "order": 1,
        "passive": [
            "Summons a pet fox that follows the Shrine Priestess.",
            "Meeko will revive after 15 seconds if killed"
        ],
        "active": [
            "Orders Meeko to attack.",
            "Meeko will rush to target location and leave a Rune of Flame",
            "The rune will explode after 0.75 seconds, dealing INT X 15 magic damage",
            "If a Flame Talisman is consumed, this skill can be casted once without incurring cooldown"
        ]
    },
    {
        "id": "A15Z",
        "name": "Bullet of Fire",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[D] → [A]",
        "icon": "ShrineFoxA",
        "order": 2,
        "passive": [
            "Sends forth fire.",
            "Recharges 1 bullet per 6 seconds (up to 4)",
            "If you have any bullets, automatically fires the bullet to deal INT X 20 magic damage"
        ],
        "toggle": [
            "On use, toggles auto-cast"
        ]
    },
    {
        "id": "A15T",
        "name": "Spirit of Flame",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[D] → [Q]",
        "icon": "ShrineFoxQ",
        "cooldown": 2,
        "order": 3,
        "active": [
            "Becomes a spirit of fire to attach yourself to Shrine Priestess.",
            "Increases Shrine Priestess' skill damage by 5%",
            "Becomes invulnerable while active"
        ]
    },
    {
        "id": "A15V",
        "name": "Touch of Grace",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[D] → [W]",
        "icon": "ShrineFoxW",
        "cooldown": 5,
        "order": 4,
        "active": [
            "Approaches target to heal it",
            "Heals target's HP by INT X 0.75",
            "This skill's cooldown is reset if Go Forth! Meeko is cast"
        ]
    },
    {
        "id": "A15W",
        "name": "Shield of Grace",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[D] → [E]",
        "icon": "ShrineFoxE",
        "cooldown": 20,
        "order": 5,
        "active": [
            "Creates a barrier to absorb damage.",
            "Creates a barrier absorbing INT X 2 damage for 4 seconds",
            "If attached to Shrine Priestess, also grants her a barrier"
        ]
    },
    {
        "id": "A15D",
        "name": "Water Explosion",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[Q]",
        "icon": "ShrinePriestessQ",
        "cooldown": 8,
        "order": 6,
        "active": [
            "Gathers element of water and detonates it.",
            "INT X 7.5 magic damage",
            "Charges up to maximum of 3 seconds, increasing damage by 100% and radius per second",
            "If enhanced by Water Talisman, it will no longer require charging, have bigger AoE, and heal nearby allies' HP by INT X 3"
        ]
    },
    {
        "id": "A15E",
        "name": "Water Sphere",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[W]",
        "icon": "ShrinePriestessW",
        "cooldown": 4,
        "order": 7,
        "active": [
            "Gathers element of water and fires it.",
            "INT X 10 magic damage",
            "Meeko will also send out a small fire, dealing INT X 5 magic damage",
            "If enhanced by Water Talisman, encapsulates enemies hit in water bubbles for 2.5 seconds, which will cause next skill of Shrine Priestess to deal 15% + INT X 5 bonus damage to target"
        ]
    },
    {
        "id": "A15K",
        "name": "Water Pillar",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[E]",
        "icon": "ShrinePriestessE",
        "cooldown": 15,
        "order": 8,
        "active": [
            "Gathers element of water and causes an explosion.",
            "For 2 seconds, pulls targets center and deal INT X 7.5 magic damage per second",
            "Creates an explosion afterwards, dealing INT X 30 magic damage",
            "If enhanced with Water Talisman, creates a water pillar for 6 seconds that deals INT X 5 magic damage per second and knocks you up"
        ]
    },
    {
        "id": "A15L",
        "name": "Form Talismans",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[R]",
        "icon": "ShrinePriestessR",
        "cooldown": 12,
        "order": 9,
        "active": [
            "Forms talismans that can be used to enhance skills.",
            "Forms 2 Water Talismans and 1 Fire Talisman",
            "If you have a Water Talisman when casting skill, it is consumed automatically to enhance the skill which deals (1 X Fire Affinity)% bonus damage",
            "If you have a Fire Talisman when casting skill, you can additionally cast a fire version of the skill within 4 seconds which deals (1 X Water Affinity)% bonus damage",
            "After casting Form Talismans, you can activate Water Dome once"
        ]
    },
    {
        "id": "A15M",
        "name": "Water Dome",
        "heroClass": "Shrine Priestess",
        "color": "b0d9ee",
        "hotkey": "[R] → [R]",
        "icon": "ShrinePriestessR_R",
        "cooldown": 10,
        "order": 10,
        "active": [
            "Forms a dome made of water.",
            "Creates a dome of water that lasts for 20 seconds at target location",
            "Allies within the dome are healed for INT X 0.2 HP per second",
            "Allies within the dome receive 12% water affinity and have damage taken reduced by 20%"
        ]
    },
    {
        "id": "A15O",
        "name": "Spirit Fusion",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T]",
        "icon": "ShrinePriestessT",
        "cooldown": 60,
        "order": 11,
        "active": [
            "Obtains a strong power by combining with Meeko.",
            "For 8 seconds, your skill damage is increased by 0.5% X (Water Affinity + Fire Affinity)",
            "Your skills are converted to fire skills while Spirit Fusion is active"
        ]
    },
    {
        "id": "A15C",
        "name": "Spirit Shift",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T] → [D]",
        "icon": "ShrinePriestessT_D",
        "proc_rate": 0.5,
        "cooldown": 2.5,
        "order": 12,
        "active": [
            "Turns into a spirit to quickly move to target location.",
            "Deals INT X 7.5 magic damage to nearby enemies",
            "Temporarily becomes invulnerable"
        ]
    },
    {
        "id": "A15G",
        "name": "Fire Explosion",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T] → [Q]",
        "icon": "ShrinePriestessT_Q",
        "cooldown": 5,
        "order": 13,
        "active": [
            "Gathers element of fire and detonates it.",
            "Deals INT X 40 magic damage to nearby enemies"
        ]
    },
    {
        "id": "A15F",
        "name": "Fire Sphere",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T] → [W]",
        "icon": "ShrinePriestessT_W",
        "cooldown": 3,
        "order": 14,
        "active": [
            "Gathers element of water and fires it.",
            "INT X 15 magic damage",
            "Meeko will also send out a small fire, dealing INT X 5 magic damage",
            "Applies Mark of Flame on targets hit for 4 seconds, making next Go Forth Meeko! or Spirit Shift consume the mark and deal 50% more damage"
        ]
    },
    {
        "id": "A15J",
        "name": "Fire Pillar",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T] → [E]",
        "icon": "ShrinePriestessT_E",
        "cooldown": 8,
        "order": 15,
        "active": [
            "Gathers element of fire to create pillars of fire in a line.",
            "Each pillar delas INT X 15 magic damage",
            "Stuns targets hit for 1.5 seconds"
        ]
    },
    {
        "id": "A15N",
        "name": "Fire Dome",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[T] → [R]",
        "icon": "ShrinePriestessT_R",
        "cooldown": 10,
        "order": 16,
        "active": [
            "Forms a barrier made of fire.",
            "Converts summoned Water Dome into Fire Dome",
            "Enemies within the dome receive INT X 2 magic damage per second",
            "Allies within the dome receive 12% fire affinity"
        ]
    },
    {
        "id": "A15S",
        "name": "Dance of Fire",
        "heroClass": "Shrine Priestess",
        "color": "eebfb0",
        "hotkey": "[F]",
        "icon": "ShrinePriestessF",
        "cooldown": 120,
        "order": 17,
        "active": [
            "\"Feel the wrath of Fox God.\" - Shrine Priestess",
            "Summons the Fox God to cause 4 fire explosions and create 5 Fire Talismans",
            "Each explosion deals INT X 20 magic damage and heals allies for INT X 2",
            "On expiration, deals INT X 50 magic damage"
        ]
    },
    {
        "id": "A1AF",
        "name": "Gather Light",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[D]",
        "icon": "LightseekerD",
        "cooldown": 3,
        "order": 1,
        "active": [
            "Gathers and consumes all Orbs of Light nearby.",
            "Heals for (Max HP X 2%) per orb"
        ]
    },
    {
        "id": "A1AG",
        "name": "Light Dash",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[Q]",
        "icon": "LightseekerQ",
        "cooldown": 8,
        "order": 2,
        "active": [
            "In a flash of light, dashes towards target location immediately.",
            "STR X 8 magic damage",
            "Leaves an Orb of Light at your original location",
            "Can be cast twice in a row"
        ]
    },
    {
        "id": "A1AI",
        "name": "Converging Light",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[W]",
        "icon": "LightseekerW",
        "cooldown": 6,
        "order": 2,
        "active": [
            "Sends all Orbs of Light towards target location.",
            "Each orb deals STR X 5 magic damage"
        ]
    },
    {
        "id": "A1AJ",
        "name": "Scatter Light",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[E]",
        "icon": "LightseekerE",
        "cooldown": 15,
        "order": 3,
        "active": [
            "Infuses your light into the ground, causing the ground to erupt with Orbs of Light.",
            "Spawns 3 orbs, then pushes them outward",
            "Chain - Resonance of Light"
        ]
    },
    {
        "id": "A1AK",
        "name": "Resonance of Light",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[E] → [E]",
        "icon": "LightseekerE_2",
        "cooldown": 0,
        "order": 4,
        "active": [
            "Creates a pulse of light that resonates with Orbs of Light nearby.",
            "Gains Empowering Light for each orb resonated (up to 20 stacks)",
            "Empowering Light is removed upon exiting combat"
        ]
    },
    {
        "id": "A1AM",
        "name": "Light Seeker",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[R]",
        "icon": "LightseekerR",
        "cooldown": 10,
        "order": 5,
        "active": [
            "Gathers light into your knee and kick outward.",
            "STR X 6.5 magic damage",
            "Can be charged up to 1 second, increases the damage dealt up to 500%",
            "Consumes Empowering light, increasing damage dealt by 15% and charge speed by 5% per stack"
        ]
    },
    {
        "id": "A1AO",
        "name": "Enlightenment",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[T]",
        "icon": "LightseekerT",
        "cooldown": 0,
        "order": 6,
        "passive": [
            "Absorbing an Orb of Light generates a Mote of Light (stacks up to 50)",
            "Upon generating 4 motes, active is enabled"
        ],
        "active": [
            "Resets cooldown of basic skills",
            "At full Motes of Light, consumes it all to become empowered",
            "Increases damage dealt by skills by 25% for 10 seconds and allows 4 additional resets",
            "Charges all Empowering Light and allows it to empower 2 skill casts"
        ]
    },
    {
        "id": "A1AR",
        "name": "Light of Judgment",
        "heroClass": "Lightseeker",
        "color": "f2f7b9",
        "hotkey": "[F]",
        "icon": "LightseekerF",
        "cooldown": 120,
        "order": 7,
        "active": [
            "\"No one can escape the Light of Judgment.\" - Lightseeker",
            "STR X 80 magic damage",
            "Stuns for 2 seconds",
            "Leaves a pool of light for 2.5 seconds, dealing STR X 25 magic damage per second",
            "Consumes Empowering light, increasing damage dealt by 5% per stack"
        ]
    },
    {
        "id": "A1AT",
        "name": "Heavy Tech",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[D]",
        "icon": "BlasterD",
        "order": 1,
        "passive": [
            "Equipped with heavy but high-tech armaments..",
            "Basic attacks are converted into Flame Type , deal 25% bonus damage, ignore all armor and splash for 50% damage",
            "Every second, gains a shield that absorbs up to Max HP X 1% damage (stacks up to Max HP X 25%)",
            "If using a gun without STR stat, converts 125% of AGI to STR",
            "You do not gain attack speed from AGI increase, and only half from other sources"
        ]
    },
    {
        "id": "A1AU",
        "name": "Rapid Fire",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[Q]",
        "icon": "BlasterQ",
        "cooldown": 8,
        "order": 2,
        "active": [
            "Focuses your firing power.",
            "Increases attack speed by 100% for 2.5 seconds"
        ]
    },
    {
        "id": "A1AW",
        "name": "Steam Blast",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[W]",
        "icon": "BlasterW",
        "cooldown": 6,
        "order": 3,
        "active": [
            "Blasts fiery steam toward target direction.",
            "STR X 3 magic damage",
            "Burns target for 25 seconds, allowing basic attacks against target to have 30% chance to deal 30% bonus damage and apply as pure damage"
        ]
    },
    {
        "id": "A1AX",
        "name": "Buster Shot",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[E]",
        "icon": "BlasterE",
        "cooldown": 10,
        "order": 4,
        "passive": [
            "Basic attacks and Homing Missiles against bosses have 15% chance to critically strike and apply Armor Break",
            "Increases damage dealt by your attacks to target by 15% for 4 seconds (stacks up to 2 times)"
        ],
        "active": [
            "Charges to fires a destructive missile.",
            "Attack Damage X 1 + STR X 10 magic damage and slow",
            "Converts Armor Break into Critical Break for 2 seconds, which also increases damage dealt by your skills",
            "Cooldown is reset if target is boss with max stacks",
            "Consumes Critical Break to land as critical strike",
            "Charging speed is affected by attack speed"
        ]
    },
    {
        "id": "A1AZ",
        "name": "Mecha Call",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[R]",
        "icon": "BlasterR",
        "cooldown": 30,
        "order": 5,
        "active": [
            "Calls down assist from the sky.",
            "Summons 4 drones for 15 seconds that assist your attacks, dealing (STR + INT) X 5 magic damage (cooldown: 1s)",
            "Fully recharges barrier and basic skill cooldowns",
            "Chain Cast - Mecha Blast"
        ]
    },
    {
        "id": "A1B0",
        "name": "Mecha Blast",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[R → R]",
        "icon": "BlasterR2",
        "cooldown": 0,
        "proc_rate": 0.5,
        "order": 6,
        "active": [
            "Sends your drone to causes an explosion.",
            "STR X 7.5 magic damage",
            "Converts Armor Break into Critical Break",
            "Consumes Critical Break to land as critical strike"
        ]
    },
    {
        "id": "A1B1",
        "name": "Homing Missile",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[T]",
        "icon": "BlasterT",
        "cooldown": 5,
        "proc_rate": 0.5,
        "order": 7,
        "passive": [
            "Loads missiles periodically.",
            "1 missile is loaded every 3 seconds and on every 5th attack",
            "3 missiles are loaded on casting Buster Shot",
            "10 missiles are loaded on casting Mecha Call",
            "You can store up to 25 missiles, and at max capacity your next attack will release an excess missile (cooldown: 2s)"
        ],
        "active": [
            "Bombards target area with all your homing missiles.",
            "Every 0.1s, deals STR X 6 magic damage and short stun",
            "Refreshes Critical Break",
            "Firing speed is affected by pure attack speed"
        ]
    },
    {
        "id": "A1B2",
        "name": "Orbital Bombardment",
        "heroClass": "Blaster",
        "color": "d09696",
        "hotkey": "[F]",
        "icon": "BlasterF",
        "cooldown": 120,
        "order": 8,
        "active": [
            "\"Blast away!\" - Blaster",
            "For 2.5 seconds, deals STR X 7 magic damage and short stun every 0.25 seconds",
            "Applies Critical Break to boss",
            "Afterwards, drops a big bomb dealing STR X 50 magic damage",
            "Lands as critical strike"
        ]
    }
];

export default heroSkills