import {combineReducers} from 'redux';
import {loadData} from './load-data/load-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: loadData,
  [NameSpace.USER]: user
});
