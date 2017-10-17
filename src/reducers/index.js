import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import user from './user';
import applications from './applications';

export default combineReducers({
  user,
  applications,
  form
});

