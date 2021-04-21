import { SEND_MESSAGE } from './chatbotType'
import axios from 'axios' 

export const sendMessage = (sophieMessage) => {
    return{
        type : SEND_MESSAGE,
        payload : sophieMessage
    }
}

export const SendMessage = (clientMessage) => {
    return function(dispatch){
        axios.post(`http://localhost:5000/api/dialogflow/textQuery`, clientMessage)
        .then( res => {
            dispatch(sendMessage(res.data))
        })
        .catch( error => console.log("Error on sending the message to dialogflow agent !"))
    }
}