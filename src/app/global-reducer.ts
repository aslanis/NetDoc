import { combineReducers } from 'redux';
import storageModuleReducer from '../modules/storage/reducers';

const netDocReducer = combineReducers({
    storageReducer: storageModuleReducer
});

export default netDocReducer;