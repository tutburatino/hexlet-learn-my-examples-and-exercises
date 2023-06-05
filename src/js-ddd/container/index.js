// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import Bottle from 'bottlejs';
import services from './services';
import entities from './entities';
import repositories from './repositories';
import generateValidator from './lib/validator';


export default () => {
  const bottle = new Bottle();
  bottle.factory('repositories', () => {
    const result = Object.keys(repositories).reduce((acc, repoName) => (
      { ...acc, [_.lowerFirst(repoName)]: new repositories[repoName]() }
    ), {});
    return result;
  });

  bottle.factory('entities', () => entities);

  // BEGIN
  bottle.factory('validate', generateValidator);

  bottle.factory('services', (container) => {
    const result = Object.keys(services).reduce((acc, serviceName) => {
      const service = new services[serviceName](container);
      return { ...acc, [_.lowerFirst(serviceName)]: service };
    }, {});
    return result;
  });

  return bottle.container;
  // END
};
