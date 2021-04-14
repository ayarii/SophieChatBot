import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'

const rootReducer = combineReducers({
    task : taskReducer,

})

export default rootReducer