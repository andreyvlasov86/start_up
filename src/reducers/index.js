import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import auth from './auth'
import dogs from '../store/dogs/reducers'


export default combineReducers({
    todos,
    visibilityFilter,
    auth,
    dogs,
})
