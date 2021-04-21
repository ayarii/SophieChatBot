import {combineReducers} from 'redux'
import taskReducer from './tasks/taskReducers'
import recomReducer from './recommendations/recomReducers'
import reviewReducer from './reviews/reviewReducers'
import userReducer from './user/userReducer'
import chatbotReducer from './chatbot/chatbotReducer'
import conversationHistoryReducer from './conversationHistory/conversationHistoryReducer'

const rootReducer = combineReducers({
    task : taskReducer,
    recom : recomReducer,
    review : reviewReducer,
    connectedUser : userReducer,
    dialogflowAgentAnswers : chatbotReducer,
    conversationHistory : conversationHistoryReducer
})

export default rootReducer