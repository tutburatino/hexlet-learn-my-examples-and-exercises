// @ts-check

// BEGIN (write your solution here)
export default class BaseRepository {
  constructor() {
    this.repository = new Map();
  }

  save(entity) {
    this.repository.set(entity.id, entity);
  }

  find(id) {
    const result = this.repository.get(id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }
}
// END
