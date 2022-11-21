/* eslint-disable lodash-fp/use-fp */
import Bottle from 'bottlejs';
import _ from 'lodash';
import * as repositories from './repositories';
import generateValidator from './lib/validator';
import { CinemaService } from './services';


const cinemaManager = () => {
  const bottle = new Bottle();
  bottle.factory('repositories', () => {
    const result = Object.keys(repositories).reduce((acc, repoName) => (
      { ...acc, [_.lowerFirst(repoName)]: new repositories[repoName]() }
    ), {});
    return result;
  });

  bottle.service('validate', generateValidator, 'repositories');
  bottle.service('services.cinema', CinemaService, 'repositories', 'validate');

  return bottle.container;
};

export default cinemaManager;
