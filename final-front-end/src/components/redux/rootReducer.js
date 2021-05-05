import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'
import recomReducer from './recommendations/recomReducers'
import reviewReducer from './reviews/reviewReducers'
import usersReducer from '../../dashboard/src/components/redux/user/userReducer'
import userReducer from './user/userReducer'
import conversationHistoryReducer from './conversationHistory/conversationHistoryReducer'

const rootReducer = combineReducers({
    task : taskReducer,
    recom : recomReducer,
    review : reviewReducer,
    connectedUser : userReducer,
    user : usersReducer,
    conversationHistory : conversationHistoryReducer
})

export default rootReducer