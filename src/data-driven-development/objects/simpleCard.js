
export default (name, damagePoints) => {
  const card = (message) => {
    switch (message) {
      case 'name':
        return name; 
      case 'damage':
        return () => damagePoints;
      default:
        return 'nonexistent method';
    }
  };
  return card;
}
