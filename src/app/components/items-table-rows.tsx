import { getItemAttrMatches } from "api/items";

export const DamageRows = ({ item }: { item: any }) => {
  return (
    <div className={`flex justify-center`}>
      <p className="text-yellow-500">{item.stats?.damage}</p>
    </div>
  );
}

export const ArmorRows = ({ item }: { item: any }) => {
  const armor = Math.round((item.stats?.armor || 0) * 100);
  const isEmpty = !getItemAttrMatches('armor', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p className="text-yellow-500">{armor}</p>
    </div>
  )
}

export const StatsGainRows = ({ item }: { item: any }) => {
  const isEmpty = !getItemAttrMatches('statsgain', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{item.stats?.mainstat || 0}</p> -
      <p>{item.stats?.allstat || 0}</p>
      <p className="mx-2">|</p>
      <p className={item.stats?.str ? 'text-red-400' : ''}>{item.stats?.str || 0}</p>
      <p className="mx-1">/</p>
      <p className={item.stats?.agi ? 'text-green-400' : ''}>{item.stats?.agi || 0}</p>
      <p className="mx-1">/</p>
      <p className={item.stats?.int ? 'text-blue-400' : ''}>{item.stats?.int || 0}</p>
    </div>
  );
}

export const ConstitutionRows = ({ item }: { item: any }) => {
  const isEmpty = !getItemAttrMatches('constitution', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{item.stats?.hpregen || 0}</p> -
      <p>{item.stats?.mpregen || 0}</p>
      <p className="mx-2">|</p>
      <p>{item.stats?.hp || 0}</p> -
      <p>{item.stats?.mp || 0}</p>
    </div>
  );
}

export const AffinityRows = ({ item }: { item: any }) => {
  const dark = Math.round((item.stats?.affinitydarkpercent || 0) * 100);
  const flame = Math.round((item.stats?.affinityflamepercent || 0) * 100);
  const earth = Math.round((item.stats?.affinityearthpercent || 0) * 100);
  let light = Math.round(item.stats?.affinitylightpercent * 100);
  let ice, water;
  ice = water = light = 0;

  if (item.stats?.affinityiwpercent) {
    ice = water = Math.round((item.stats?.affinityiwpercent) * 100);
  } else if (item.stats?.affinitywlpercent) {
    water = light = Math.round((item.stats?.affinitywlpercent) * 100);
  } else if (item.stats?.affinitylightpercent) {
    light = Math.round((item.stats?.affinitylightpercent) * 100);
  }

  const isEmpty = !getItemAttrMatches('affinities', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p className={ice ? 'text-sky-300' : ''}>{ice}</p>
      <p className="mx-1">/</p>
      <p className={water ? 'text-blue-600' : ''}>{water}</p>
      <p className="mx-1">/</p>
      <p className={light ? 'text-yellow-500' : ''}>{light}</p>
      <p className="mx-1">/</p>
      <p className={dark ? 'text-gray-600' : ''}>{dark}</p>
      <p className="mx-1">/</p>
      <p className={flame ? 'text-red-400' : ''}>{flame}</p>
      <p className="mx-1">/</p>
      <p className={earth ? 'text-green-400' : ''}>{earth}</p>
    </div>
  );
}

export const DexterityRows = ({ item }: { item: any }) => {
  const as = Math.round((item.stats?.attackspeedpercent || 0) * 100);
  const ms = Math.round((item.stats?.movespeed || 0) * 100);
  const crit = Math.round((item.stats?.critchancepercent || 0) * 100);
  const critmult = Math.round((item.stats?.critmultiplier || 0) * 100);
  const isEmpty = !getItemAttrMatches('dexterities', item) ? 'hidden' : '';

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{as}</p>
      <p className="mx-1">/</p>
      <p>{ms}</p>
      <p className="mx-1">/</p>
      <p>{crit}</p>
      <p className="mx-1">/</p>
      <p>{critmult}</p>
    </div>
  );
}

export const BossTargetedRows = ({ item }: { item: any }) => {
  const periodic = Math.round((item.stats?.periodicdamagepercent || 0) * 100);
  const skilldmg = Math.round((item.stats?.skilldamagepercent || 0) * 100);
  const procdmg = Math.round((item.stats?.procdamagepercent || 0) * 100);
  const aadmg = Math.round((item.stats?.aadamagepercent || 0) * 100);
  const isEmpty = !getItemAttrMatches('targeted', item) ? 'hidden' : ''

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <div className="flex justify-center">
        <p>{periodic}</p>
        <p className="mx-1">/</p>
        <p>{skilldmg}</p>
      </div>
      <p className="mx-2">|</p>
      <div className="flex justify-center">
        <p>{procdmg}</p>
        <p className="mx-1">/</p>
        <p>{aadmg}</p>
      </div>
    </div>
  );
};

export const DefenseRows = ({ item }: { item: any }) => {
  const dmgreduc = Math.round((item.stats?.drpercent || 0) * 100);
  const dmgtkn = Math.round((item.stats?.dtpercent || 0) * 100);
  const magicdef = Math.round((item.stats?.mdpercent || 0) * 100);
  const isEmpty = !getItemAttrMatches('defense', item) ? 'hidden' : ''

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{dmgreduc}</p>
      <p className="mx-1">/</p>
      <p>{dmgtkn}</p>
      <p className="mx-1">/</p>
      <p>{magicdef}</p>
    </div>
  );
};

export const SurvivalRows = ({ item }: { item: any }) => {
  const dodge = Math.round((item.stats?.dodgechancepercent || 0) * 100);
  const healing = Math.round((item.stats?.healingpercent || 0) * 100);
  const healreceived = Math.round((item.stats?.healreceivedpercent || 0) * 100);
  const isEmpty = !getItemAttrMatches('survival', item) ? 'hidden' : ''

  return (
    <div className={`flex justify-center ${isEmpty}`}>
      <p>{dodge}</p>
      <p className="mx-1">/</p>
      <p>{healing}</p>
      <p className="mx-1">/</p>
      <p>{healreceived}</p>
    </div>
  );
};