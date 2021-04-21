import { SEND_MESSAGE } from './chatbotType'

const initialState = {
    loading : false,
    agentMessage : "",
    error : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE : 
            return{
                ...state,
                agentMessage : action.payload
                
            }

        default : return state
    }
    
}

export default reducer;