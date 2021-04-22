import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import { connect } from 'react-redux'

import { addDialogue } from '../redux/conversationHistory/conversationHistoryActions'

function Conversation(props) {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
     const conversationHistoryState = useSelector(state => state.conversationHistory)
     const dispatch = useDispatch()
     const connectedUserRedux = useSelector(state => state.connectedUser.user)

const hundleMessage = ()=>{
    var str = $("#myInput").val();
    console.log("msg from click : ", str)
    $('#conversation').append('<div class="chat-bubble me">' + str + '</div>');
    $("#myInput").val("")
    setTimeout(updateScroll, 1000);
    const textQueryMessage = {
        text: str
    }
    axios.post(`http://localhost:5000/api/dialogflow/textQuery`, textQueryMessage)
        .then(res => {
            //setSophieResponse(res.data)
            console.log(res.data)
            $('#conversation').append('<div class="chat-bubble you">' + res.data + '</div>');
            dispatch(addDialogue(textQueryMessage.text, res.data))
            //props.addDialogue(textQueryMessage.text, res.data)
            //console.log(props.conversationHistory)
        })
        .catch((error) => {
            console.log("The error while sending the message is :" + error)
            //setSophieResponse("Error while sending the message ! please try again.")
        })

}









    const onSend = () => {
        hundleMessage()
    }

    function updateScroll() {
        var element = document.getElementById("conversation");
        element.scrollTop = element.scrollHeight;
    }







    useEffect(() => {
        

        $('#myInput').keyup(function (e) {
            if (e.keyCode === 13) {

                hundleMessage()
            }
        });
    }, [])

    return (
        <>




            <div className="chat-body" id="conversation">
                <div className=" d-flex flex-row">
                    <img src={require('./img/chatBotLogo.png')} height="50" width="50" />
                    <div className="chat-start">{today.toDateString()}</div>
                  { connectedUserRedux &&(  <img src={connectedUserRedux.image} height="50" width="50" style={{ 'border-radius': '50%' }} /> )}
                </div>
                { connectedUserRedux &&(   <div className="chat-bubble you">Welcome {connectedUserRedux.userName !== "" && connectedUserRedux.userName.toUpperCase()} to our site, if you need help simply reply to this message, I am
                    online and ready to help.</div> )}

            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type a message..." id="myInput" />
                <div className="input-action-icon">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                        </path>
                    </svg></a>
                    <a onClick={() => onSend()}><svg id="mess" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                        <line x1={22} y1={2} x2={11} y2={13} />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg></a>
                </div>
            </div>





        </>


    )


}

/*
const mapStateToProps = state => {
    return {
        conversationHistory: state.conversationHistory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDialogue: (userMessage, botMessage) => dispatch(addDialogue(userMessage, botMessage))
    }
}
*/



/*

$(document).ready(function () {

});
*/
export default Conversation

