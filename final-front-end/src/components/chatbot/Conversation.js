import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import moment from 'moment'
import { GoToTasksManagementInterface } from '../redux/tasks/tasksActions'

import { addDialogue } from '../redux/conversationHistory/conversationHistoryActions'
import { Link, useHistory } from 'react-router-dom'
import history from '../../history'

function Conversation(props) {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const dispatch = useDispatch()
    const connectedUserRedux = useSelector(state => state.connectedUser.user)

    // const [eventToSend, setEventToSent] = useState({ event : "TomorrowTasksReminder"})

    
    const [toTasksManagement, setToTasksManagement] = useState(false)
    


//   // to compare the difference between begin date of the task and today.
//       const isItTomorrow = (date, diff) => {
//         let todayDate = moment(new Date())
//         let taskBeginDate = moment(date, "DD/MM/YYYY")
//         console.log(todayDate.format("M") === taskBeginDate.format("M"))
//         return todayDate.format("M") === taskBeginDate.format("M") 
//     }

    
    // useEffect(() => {
    //     return <Link to="/tasksManager">Go to </Link>
    // }, [toTasksManagement])

    // useEffect(() => {
    //     axios.post(`http://localhost:5000/api/dialogflow/eventQuery`, eventToSend)
    //     .then(response => {
    //         if(response.data[0].queryResult.fulfillmentText === "REMINDER : You have a task tommorow"){
    //             axios.get('http://localhost:5000/tasks')
    //             .then(res => {
    //                 const toRemindTasksList = res.data.filter(task => isItTomorrow(task.removeBeginDate, 1))
    //                 console.log(toRemindTasksList)
    //             })
    //         }
    //     })
    // },[eventToSend])

    const hundleMessage = () => {
        var str = $("#myInput").val();
        console.log("msg from click : ", str)
        $('#conversation').append('<div class="d-flex flex-row-reverse"><div class="chat-bubble me">' + str + '</div></div>');
        $('.userImage:last').clone().insertBefore(".me:last")
        $("#myInput").val("")
        setTimeout(updateScroll, 1000);
        if(str=="hizni"){
            console.log("redirection ..")
            history.push('/TasksManager');
        }
        const textQueryMessage = {
            text: str
        }
        axios.post(`http://localhost:5000/api/dialogflow/textQuery`, textQueryMessage)
            .then(res => {
                console.log(res.data)
                let chatbotResponse = res.data
                //console.log("res.data[0].queryResult : ", res.data[0].queryResult)
                if(res.data[0].queryResult) chatbotResponse = res.data[0].queryResult.fulfillmentText
            
                $('#conversation').append('<div class="d-flex flex-row"><img class="botImage" src="https://res.cloudinary.com/esprit456/image/upload/v1617904764/e-learning/id9xkfigxaozuwuimiox.png" height="30" width="30"/><div class="chat-bubble you">' + chatbotResponse + '</div></div>');
                //$('.botImage:last').clone().insertAfter(".you:last")
                dispatch(addDialogue(textQueryMessage.text, chatbotResponse))
                //props.addDialogue(textQueryMessage.text, res.data)
                //console.log(props.conversationHistory)

                //Looking if the Intent is : "CT1 - Confirming Tasks Management Direction (CT2)" 
                //to direct him to Tasks Management interface
                if(res.data[0].queryResult.intent.displayName === "CT1 - Confirming Tasks Management Direction (CT2)"){
                    setToTasksManagement(true)
                    console.log('going to tasks manager')
                }
            })
            .catch((error) => {
                console.log("The error while sending the message is :" + error)
            })

    }









    const onSend = () => {
        hundleMessage()
    }

    function updateScroll() {
        var element = document.getElementById("conversation");
        element.scrollTop = element.scrollHeight;
    }




    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }


    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            hundleMessage()
          }
    }

    const prevValue = usePrevious(props.setCallables);

    useEffect(() => {
        if (props.setCallables !== prevValue) {
            $('.chat-bubble').remove()
            $('.userImage').remove()
            $('.botImage').remove()
            console.log("setClalable different !")
        } 
        
    }, [props.setCallables])

    return (
        <>




            <div className="chat-body" id="conversation">
                <div className=" d-flex flex-row">
                    <img src={require('./img/chatBotLogo.png')} height="30" width="30" />
                    <div className="chat-start">{today.toDateString()}</div>
                    {connectedUserRedux._id!=="" && (<img className="userImage" src={connectedUserRedux.image} height="30" width="30" style={{ 'border-radius': '50%' }} />)}
                </div>
                <div className=" d-flex flex-row">
                    <img className="botImage" src={require('./img/chatBotLogo.png')} height="30" width="30" />
                    {connectedUserRedux._id!=="" && (<div className="chat-bubble you">Welcome {connectedUserRedux.userName !== "" && connectedUserRedux.userName.toUpperCase()} to our site, if you need help simply reply to this message, I am
                    online and ready to help. </div>)}
                </div>
                <div className=" d-flex flex-row">
                    <img className="botImage" src={require('./img/chatBotLogo.png')} height="30" width="30" />
                    {connectedUserRedux._id!=="" && (<div className="chat-bubble you">{props.reminderMessageForBeginDates}</div>)}
                </div>
                <div className=" d-flex flex-row">
                    <img className="botImage" src={require('./img/chatBotLogo.png')} height="30" width="30" />
                    {connectedUserRedux._id!=="" && (<div className="chat-bubble you">{props.reminderMessageForEndDates}</div>)}
                </div>
                    {connectedUserRedux.role==="admin" && (<div className="chat-bubble you">By the way, you can manage your users and check some statistics ☝️</div>)}
                    
            </div>
            <div className="chat-input">
                <input type="text"
                 placeholder="Type a message..." 
                 id="myInput"
                 onKeyDown={(e)=>handleKeyDown(e)} />
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
$(document).ready(function () {





})

export default Conversation

