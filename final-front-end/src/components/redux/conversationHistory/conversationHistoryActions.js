import { ADD_DIALOGUE } from "./conversationHistoryTypes"

export const addDialogue = (messageUser="",messageBot="" )=> {
    return {
        type : ADD_DIALOGUE,
        payloadUser : messageUser,
        payloadBot : messageBot
    }
}