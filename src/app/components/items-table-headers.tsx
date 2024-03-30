import { getItemMatches } from "../api/items";

const hide = (index: number, items: any[]) => {
  const headerNames = [
    'damage','armor','constitution','statsgain','affinities',
    'dexterities','targeted','defense','survival'
  ];

  return !getItemMatches(headerNames[index], items) ? 'hidden' : '';
}

export const DamageColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(0, items)}`}>
      <p>DAMAGE</p>
    </div>
  );
}

export const ArmorColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(1, items)}`}>
      <p>ARMOR</p>
    </div>
  );
}

export const ConstitutionColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(2, items)}`}>
      <div className="flex flex-col items-center border-r-1 border-black pe-2">
        <p>REGEN</p>
        <p>HP - MP</p>
      </div>
      <div className="flex flex-col items-center ps-2">
        <p>GAIN</p>
        <p>HP - MP</p>
      </div>
    </div>
  );
}

export const StatsGainColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex flex-col items-center ${hide(3, items)}`}>
      <p>STATS GAIN</p>
      <p>MAIN/ALL STATS | STR/AGI/INT</p>
    </div>
  );
}

export const AffinitiesColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex flex-col items-center ${hide(4, items)}`}>
      <p>AFFINITIES (%)</p>
      <section className="flex">
        <p>ICE</p>
        <p className="mx-1">/</p>
        <p>WATER</p>
        <p className="mx-1">/</p>
        <p>LIGHT</p>
        <p className="mx-1">/</p>
        <p>DARK</p>
        <p className="mx-1">/</p>
        <p>FLAME</p>
        <p className="mx-1">/</p>
        <p>EARTH</p>
      </section>
    </div>
  );
}

export const DexterityColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(5, items)}`}>
      <p>AS %</p>
      <p className="mx-1">/</p>
      <p>MS</p>
      <p className="mx-1">/</p>
      <p>CRIT %</p>
      <p className="mx-1">/</p>
      <p>CRIT (x)</p>
    </div>
  );
}

export const BossTargetedColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex flex-col justify-center ${hide(6, items)}`}>
      <div className="flex justify-center">
        <p>PRD DMg %</p>
        <p className="mx-1">/</p>
        <p>SKILL DMG %</p>
      </div>
      <div className="flex justify-center">
        <p>PROC DMG %</p>
        <p className="mx-1">/</p>
        <p>AA DMG %</p>
      </div>
    </div>
  );
}

export const DefenseColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(7, items)}`}>
      <p>DMG RDC</p>
      <p className="mx-1">/</p>
      <p>DMG TKN</p>
      <p className="mx-1">/</p>
      <p>MAGIC DEF</p>
    </div>
  );
}

export const SurvivalColumnHeader = ({ items }: { items: any[] }) => {
  return (
    <div className={`flex justify-center ${hide(8, items)}`}>
      <p>DODGE %</p>
      <p className="mx-1">/</p>
      <p>HEALING %</p>
      <p className="mx-1">/</p>
      <p>HEAL REC %</p>
    </div>
  );
}