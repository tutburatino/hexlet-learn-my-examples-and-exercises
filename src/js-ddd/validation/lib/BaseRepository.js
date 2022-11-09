// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';

export default class BaseRepository {
  constructor() {
    this.data = [];
  }

  save(entity) {
    this.data.push(entity);
  }

  find(id) {
    const result = this.data.find(entity => entity.id === id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }

  findAllBy(params) {
    const result = _.filter(this.data, params);
    return result;
  }

  findBy(params) {
    const result = this.findAllBy(params);
    return result.length > 0 ? result[0] : null;
  }
}
