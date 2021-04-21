import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'
import recomReducer from './recommendations/recomReducers'
import reviewReducer from './reviews/reviewReducers'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
    task : taskReducer,
    recom : recomReducer,
    review : reviewReducer,
    connectedUser : userReducer
})

export default rootReducer