import { combineReducers } from "redux";

import auth from './auth/reducer';
import user from './user/reducer';
import storageless from './storageless/reducer'

export default combineReducers({ auth, user, storageless })
