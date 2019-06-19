
export default (name, percent) => {
    const card = (message) => {
      switch (message) {
        case 'name':
          return name; 
        case 'damage':
          return (health) => Math.round(health * percent / 100);
        default:
          return 'nonexistent method';
      }
    };
    return card;
  }
  