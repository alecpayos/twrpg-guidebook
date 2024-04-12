# The World RPG Guidebook

This is a personal project for the game TWRPG. I made this to alleviate \
my concerns regarding the usability of the suggested websites by the game mods.

<br>

The website currently has 2 features
 - Item browsing and their respective stats
 - Hero browsing and their respective builds

<br>

Features to add
 - Item alt recipes
 - Hero skills and their descriptions.
 - Bosses page
 - Boss tactics
 - Everything related to bosses

<br>

## Items

This section categorizes all of the items into 13 categories
 - Weapons
 - Headwear
 - Armor
 - Accessory
 - Wings
 - Materials
 - Miscellaneous
 - Pickaxe
 - Token
 - Icons
 - Food
 - Coin
 - Uncategorized (Mix)

<br>

The only possible props any item can have can be seen in the Item type. \
[export type Item = { ... }](./src//app/api/types.ts#L133)

<br>

## Heroes

This section categorizes all of the Heroes into 3 categories
  | STRENGTH    | AGILITY         | INTELLIGENCE     |
  | :---------- | :-------------- | :--------------- |
  | Crusader    | Sniper          | Soul Weaver      |
  | Lancer      | Shooter         | Alchemist        |
  | Merchant    | Sword Enchanter | Warlock          |
  | Berserker   | Gunner          | Blood Weaver     |
  | Knight      | Swordsman       | Fire Mage        |
  | Dark Knight | Martial Artist  | Elementalist     |
  | Paladin     | Reaper          | Lightning Mage   |
  | Fighter     | Assassin        | Wind Mage        |
  | Lightseeker | Thunderer       | Arcane Mage      |
  | Blaster     | Bow Master      | Water Mage       |
  |             | Phantom Blade   | Priest           |
  |             | Hermit          | Witch            |
  |             | Trickster       | Shrine Priestess |

<br>

The only possible props any hero can have can be seen in the Hero type. \
[export type Hero = { ... }](./src//app/api/types.ts#L185)

<br>

## Disclaimer

This is a personal project.