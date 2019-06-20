
export default (name, damage) => (
  { name, 
    damage: (health) => Math.round(health * damage / 100) 
  }
);
