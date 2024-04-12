import { StaticImageData } from 'next/image';

import CorruptAngelIcon from './earlygame/Corrupt Angel Icon.jpg';
import TheDevilsRightArmCorruptAngel from './earlygame/Corrupt Angel Icon.jpg';
import CountIcon from './earlygame/Count Icon.jpg';
import DemonLordIcon from './earlygame/Demon Lord Icon.jpg';
import SoulOfEverfrost from './earlygame/Everfrost Icon.jpg';
import EverfrostIcon from './earlygame/Everfrost Icon.jpg';
import FrostspiderLordIcon from './earlygame/Frostspider Lord Icon.jpg';
import FrostspiderQueenIcon from './earlygame/Frostspider Queen Icon.jpg';
import GuardianAngelIcon from './earlygame/Guardian Angel Icon.jpg';
import The3rdArmysGuardianAngel from './earlygame/Guardian Angel Icon.jpg';
import CastleAvalonGatekeeperIcon from "./earlygame/Guardian Spirit, Avalon's Gatekeeper Icon.jpg";
import HydraIcon from './earlygame/Hydra Icon.jpg';
import JackIcon from './earlygame/Jack Icon.jpg';
import MadClownIcon from './earlygame/Mad Clown Icon.jpg';
import MageLordIcon from './earlygame/Mage Lord Icon.jpg';
import WingsOfDeathIcon from './earlygame/Wings of Death Icon.jpg';

import CorruptorIcon from './midgame/Corruptor Icon.jpg';
import CorruptorRectus from './midgame/Corruptor Icon.jpg';
import FlameNightmareIcon from './midgame/Flame Nightmare Icon.jpg';
import SpiritBeastIcon from './midgame/Spirit Beast Icon.jpg';
import TurtleLordIcon from './midgame/Turtle Lord Icon.jpg';

import AncientEntIcon from './highgame/Ancient Ent Icon.jpg';
import ArchangelSamaelIcon from './highgame/Archangel Icon.jpg';
import BoneDragonIcon from './highgame/Bone Dragon Icon.jpg';
import ShadowDragonIrbertIcon from './highgame/Shadow Dragon Icon.jpg';
import SkeletalKingDesperiaIcon from './highgame/Skeletal King Icon.jpg';
import ShadowDragonIcon from './highgame/Shadow Dragon Icon.jpg';
import SkeletalKingIcon from './highgame/Skeletal King Icon.jpg';
import ZombieLordIcon from './highgame/Zombie Lord Icon.jpg';

import DeathFiendIcon from './lategame/Death Fiend Icon.jpg';
import IfritIcon from './lategame/Ifrit Icon.jpg';
import ValtoraIcon from './lategame/Valtora Icon.jpg';

import AgarethIcon from './endgame/Agareth Icon.jpg';
import ArcaneConstructIcon from './endgame/Arcane Construct Icon.jpg';
import DukeLazarusIcon from './endgame/Duke Lazarus Icon.jpg';
import GaiaIcon from './endgame/Gaia Icon.jpg';
import NereidIcon from './endgame/Nereid Icon.jpg';

const earlyGame: { [key: string]: StaticImageData } = {
  CorruptAngelIcon,
  TheDevilsRightArmCorruptAngel,
  CountIcon,
  DemonLordIcon,
  EverfrostIcon,
  SoulOfEverfrost,
  FrostspiderLordIcon,
  FrostspiderQueenIcon,
  GuardianAngelIcon,
  The3rdArmysGuardianAngel,
  CastleAvalonGatekeeperIcon,
  HydraIcon,
  JackIcon,
  MadClownIcon,
  MageLordIcon,
  WingsOfDeathIcon,
};

const midGame: { [key: string]: StaticImageData } = {
  CorruptorIcon,
  CorruptorRectus,
  FlameNightmareIcon,
  SpiritBeastIcon,
  TurtleLordIcon,
};

const highGame: { [key: string]: StaticImageData } = {
  AncientEntIcon,
  ArchangelSamaelIcon,
  BoneDragonIcon,
  ShadowDragonIrbertIcon,
  SkeletalKingDesperiaIcon,
  ShadowDragonIcon,
  SkeletalKingIcon,
  ZombieLordIcon,
};

const lateGame: { [key: string]: StaticImageData } = {
  DeathFiendIcon,
  IfritIcon,
  ValtoraIcon,
};

const endGame: { [key: string]: StaticImageData } = {
  AgarethIcon,
  ArcaneConstructIcon,
  DukeLazarusIcon,
  GaiaIcon,
  NereidIcon,
};

export {
  earlyGame,
  midGame,
  highGame,
  lateGame,
  endGame,
}