import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'

import { addDialogue } from '../redux/conversationHistory/conversationHistoryActions'
import { connectUser } from '../redux/user/userActions'
import Conversation from './Conversation'

function ConversationRegistration(props) {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const conversationHistoryState = useSelector(state => state.conversationHistory)
    const dispatch = useDispatch()
    const initialUserState = {
        "_id": "",
        "nom": "",
        "prenom": "",
        "email": "",
        "numtel": 0,
        "pays": "",
        "profession": "",
        "userName": "",
        "password": "",
        "image": "",
        "interests": [],
        "age": "",
        "sexe":""
    }
    const [connectedUser, setConnectedUser] = useState(initialUserState)
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')


    const onFileChange = event => {
        // Update the state 
        const file = event.target.files[0];
        console.log(event.target.files[0])
        previewFile(file)
    };
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }



    /*const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        return base64EncodedImage
    }*/

    const handleMessage = () => {
        var str = $("#myInputRegistration").val();
        console.log("msg from click : ", str)
        var question = $('.reg:last').text()
        console.log("question : ", question)
        if (question === "give me a password please .") {
            const pass = str.replace(/\S/gi, '*');
            $('#conversationRegistration').append('<div class="chat-bubble me">' + pass + '</div>');
        } else {
            $('#conversationRegistration').append('<div class="chat-bubble me">' + str + '</div>');
        }
        $("#myInputRegistration").val("")
        setTimeout(updateScroll, 1000);
        switch (question) {
            case "so, what's your name ?(seperated with ' ')":
                console.log('name handler');
                const arr = str.split(' ')
                setConnectedUser({
                    ...connectedUser,
                    nom: arr[0],
                    prenom: arr[1]
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">How old are you ?</div>');
                break;
            case "How old are you ?":
                console.log('old handler');
                setConnectedUser({
                    ...connectedUser,
                    age: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">are you a male or a female ?</div>');
                break;
                case "are you a male or a female ?":
                console.log('sexe handler');
                setConnectedUser({
                    ...connectedUser,
                    sexe: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">can you give me your email please ?</div>');
                break;
                case "can you give me your email please ?":
                    console.log('mail handler');
                    setConnectedUser({
                        ...connectedUser,
                        email: str
                    })
                    $('#conversationRegistration').append('<div class="chat-bubble you reg">what\'s you phone number ?</div>');
                    break;
            case "what's you phone number ?":
                console.log('phone handler');
                setConnectedUser({
                    ...connectedUser,
                    numtel: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">where are you from ?</div>');
                break;
            case "where are you from ?":
                console.log('country handler');
                setConnectedUser({
                    ...connectedUser,
                    pays: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">beautiful country ! what do you do in your life ?</div>');
                break;
            case "beautiful country ! what do you do in your life ?":
                console.log('profession handler');
                setConnectedUser({
                    ...connectedUser,
                    profession: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">please choose a username .</div>');
                break;
            case "please choose a username .":
                console.log('username handler');
                setConnectedUser({
                    ...connectedUser,
                    userName: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">give me a password please .</div>');
                break;
            case "give me a password please .":
                console.log('password handler');
                setConnectedUser({
                    ...connectedUser,
                    password: str
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">now your image(attache it below and send done as message) .</div>');
                break;
            case "now your image(attache it below and send done as message) .":
                console.log('image handler');
                if (!previewSource) return
                //let image;
                //uploadImage(previewSource).then((encoded64)=>image = encoded64)
                setConnectedUser({
                    ...connectedUser,
                    image: previewSource
                })
                $('#conversationRegistration').append('<div class="chat-bubble you reg">and finally , please tell me what are your interests(seperated with\'#\')</div>');
                break;
            case "and finally , please tell me what are your interests(seperated with'#')":
                console.log('interests handler');
                const interest = str.split('#')
                setConnectedUser({
                    ...connectedUser,
                    interests: interest
                })
                console.log(connectedUser)
                $('#conversationRegistration').append('<div class="chat-bubble you reg">thanks for your time .</div>');
                break;
            default:
                {
                AddUser(connectedUser)
                    console.log("connectedUser after add: ", connectedUser)
                    $('.content-conversation').removeClass('hide');
                    $('.holeConversationRegistration').addClass('hide');
                
                }
        }
    }


    const AddUser = async (user) => {

        axios.post(`http://localhost:5000/users/`, user)
            .then((response) => {
                console.log(response.data)
                setConnectedUser(response.data)
                dispatch(connectUser(response.data))
            })
            .catch((error) => console.log("errorAddinng  : ", error.response));

    }



    const onSend = () => {
        handleMessage()
    }


    function updateScroll() {
        var element = document.getElementById("conversationRegistration");
        element.scrollTop = element.scrollHeight;
    }

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    const prevValue = usePrevious(props.setCallables);

    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            handleMessage()
          }
    }



    useEffect(() => {
  
       /* $('#myInputRegistration').keyup(function (e) {
            if (e.keyCode === 13) {
                handleMessage()
            }})*/
        
    }, [])

    return (
        <>
            <div className="holeConversationRegistration">
                <div className="chat-body" id="conversationRegistration">
                    <div className=" d-flex flex-row">
                        <img src={require('./img/chatBotLogo.png')} height="30" width="30" />
                        <div className="chat-start">{today.toDateString()}</div>
                        <img src={require('./img/newUser.png')} height="30" width="30" style={{ 'border-radius': '50%' }} />
                    </div>
                    <div className="chat-bubbleR you reg">Welcome NEW User to our site, I am
                    online and ready to know you and help you on your registration .</div>

                    <div className="chat-bubbleR you reg">so, what's your name ?(seperated with ' ')</div>
                
                 
                </div>



                <div className="chat-input">
                    <input type="text"
                     placeholder="Type a message..." 
                     id="myInputRegistration" 
                     onKeyDown={(e)=>handleKeyDown(e)}/>
                    <div className="input-action-icon">
                        <input
                            type="file"
                            style={{ display: "none" }}
                            id="selectedFile"
                            value={fileInputState}
                            onChange={onFileChange}
                        />
                        <a onClick={() => {
                            document.getElementById('selectedFile').click()
                        }
                        } >

                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                </path>
                            </svg>
                        </a>
                        <a onClick={() => onSend()}><svg id="mess" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                            <line x1={22} y1={2} x2={11} y2={13} />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg></a>
                    </div>
                </div>


                <div className="content-conversation hide">
                    <Conversation connectedUser={connectedUser} />
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
export default ConversationRegistration

