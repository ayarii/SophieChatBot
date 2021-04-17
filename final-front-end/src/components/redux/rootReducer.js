import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'
import recomReducer from './recommendations/recomReducers'
import reviewReducer from './reviews/reviewReducers'

const rootReducer = combineReducers({
    task : taskReducer,
    recom : recomReducer,
    review : reviewReducer,
})

export default rootReducer