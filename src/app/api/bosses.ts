import bosses from "info/bosses";

export const getCategorizedBosses = () => {
  const mappedBosses = Object.values(bosses);

  const endgameBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'Endgame';
  });

  const lategameBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'Late';
  });

  const highgameBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'High';
  });

  const midgameBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'Mid';
  });

  const minorBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'Minor';
  });

  const fieldBosses = mappedBosses.filter(({ type, category }) => {
    return type == 'Boss' && category == 'Field';
  });

  const mobs = mappedBosses.filter(({ type, category }) => {
    return (type == 'Mob' && category == 'Creep') || 
      (type == 'Mob' && category == 'Mid') ||
      (type == 'Mob' && category == 'High') ||
      (type == 'Mob' && category == 'Late') ||
      (type == 'Boss' && category == 'Creep');
  });

  return {
    endgameBosses,
    lategameBosses,
    highgameBosses,
    midgameBosses,
    minorBosses,
    fieldBosses,
    mobs
  }
}