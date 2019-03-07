import { combineReducers } from 'redux'
import auth from '../auth/reducers'
import dogs from '../dogs/reducers'


export default combineReducers({
    auth,
    dogs,
})
