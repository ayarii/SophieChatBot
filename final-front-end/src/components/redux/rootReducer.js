import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'
import recomReducer from './recommendations/recomReducers'
import reviewReducer from './reviews/reviewReducers'
import userReducer from './user/userReducer'
import conversationHistoryReducer from './conversationHistory/conversationHistoryReducer'

const rootReducer = combineReducers({
    task : taskReducer,
    recom : recomReducer,
    review : reviewReducer,
    connectedUser : userReducer,
    conversationHistory : conversationHistoryReducer
})

export default rootReducer