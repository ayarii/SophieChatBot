import { ADD_DIALOGUE } from "./conversationHistoryTypes"



const initialSate = {
    userMessages:[],
    botMessages:[],
    understands:[]
}


const conversationHistoryReducer = (state = initialSate, action)=>{
    switch (action.type){
        case ADD_DIALOGUE : return{
            userMessages : [...(state.userMessages),action.payloadUser],
            botMessages : [...(state.botMessages),action.payloadBot],
            understands : [...(state.understands),action.payloadBot==="Sorry, I didn't get that. Can you rephrase?" ? false : true]
        }
        default : return state
    }
}


export default conversationHistoryReducer