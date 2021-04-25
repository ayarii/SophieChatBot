import { ADD_DIALOGUE, FINISH_CONVERSATION } from "./conversationHistoryTypes"

export const addDialogue = (messageUser="",messageBot="" )=> {
    return {
        type : ADD_DIALOGUE,
        payloadUser : messageUser,
        payloadBot : messageBot
    }
}

export const finishDialogue = ()=> {
    return {
        type : FINISH_CONVERSATION
    }
}