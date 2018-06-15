import { combineReducers } from 'redux';
import postit from './postits'
import nextId from './nextid'
import filter from './filter'

const rootReducer = combineReducers({
    postit,
    nextId,
    filter,
  })
  
  export default rootReducer