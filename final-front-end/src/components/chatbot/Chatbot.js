import React, { useState } from 'react'
import $ from 'jquery';
import axios from 'axios'
import Conversation from './Conversation';
import { useSelector, useDispatch } from 'react-redux'
import { connectUser, disconnectUser } from '../redux/user/userActions';
import ConversationRegistration from './ConversationRegistration';
import { finishDialogue } from '../redux/conversationHistory/conversationHistoryActions';
import { CountryDropdown } from 'react-country-region-selector';
import moment from 'moment'


function Chatbot() {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [linkedIn, setlinkedIn] = useState("")
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [childCallables, setChildCallables] = useState(false)
    const [eventToSend, setEventToSent] = useState({ event: "TomorrowTasksReminder" })
    const [reminderMessageForBeginDates, setreminderMessageForBeginDates] = useState("")
    const [reminderMessageForEndDates, setreminderMessageForEndDates] = useState("")

    const dispatch = useDispatch()

    const isDeadlineComing = (date) =>{
        var dateInString = moment(date).format("yyyy-MM-DD")
        var after3Days = new Date(today)
        after3Days.setDate(after3Days.getDate() + 3)
        after3Days = moment(after3Days).format("yyyy-MM-DD")
        console.log(dateInString)
        console.log(after3Days.substr(0,4) === dateInString.substr(0-4))
        console.log(after3Days.substr(5,7) === dateInString.substr(5,7))
        console.log(parseInt(after3Days.substr(8,10)) > parseInt(dateInString.substr(8,10)))
        return ( 
                after3Days.substr(0,4) === dateInString.substr(0-4) && 
                after3Days.substr(5,7) === dateInString.substr(5,7) && 
                parseInt(after3Days.substr(8,10)) > parseInt(dateInString.substr(8,10)))
    }

    

    

    const reminderForEndDates = (userId) => {
        axios.post(`http://localhost:5000/api/dialogflow/eventQuery`, eventToSend)
            .then(response => {
                if (response.data[0].queryResult.fulfillmentText === "REMINDER : You have a task tommorow") {
                    axios.get('http://localhost:5000/tasks')
                        .then(res => {



                            const endDateTasksList = res.data.filter(task =>
                                task.userId === userId &&
                                task.status === "InProgress" &&
                                isDeadlineComing(task.beginDate)
                            )


                            // let changedWords = []
                            // if(tasksList.length===0){
                            //     changedWords.push(" task")
                            //     changedWords.push(".")
                            // }else if(tasksList.length===1){
                            //     changedWords.push(" task")
                            //     changedWords.push(" which is :")
                            // }else if(tasksList.length>1){
                            //     changedWords.push(" tasks")
                            //     changedWords.push(" which are :")
                            // }

                            console.log(" Coming DDL Tasks :", endDateTasksList)
                            let toRemindTaskNames = " "
                            endDateTasksList.forEach(task => toRemindTaskNames += task.title + " / ")
                            setreminderMessageForEndDates(
                                "Also keep in mind that you have " +
                                endDateTasksList.length +
                                " tasks that will end up in the next few days : " +
                                toRemindTaskNames)


                        })
                }
            })

    }

    // Making the Reminder text for user tasks
    const reminderForBeginDates = (userId) => {
        axios.post(`http://localhost:5000/api/dialogflow/eventQuery`, eventToSend)
        .then(response => {
            if(response.data[0].queryResult.fulfillmentText === "REMINDER : You have a task tommorow"){
                axios.get('http://localhost:5000/tasks')
                .then(res => {

                    let tomorrow = new Date(today)
                    console.log(tomorrow)
                
                    const beginDateTasksList = res.data.filter(task => 
                        task.userId === userId && 
                        task.status === "ToDo" &&
                        task.beginDate === moment(tomorrow).format("yyyy-MM-DD")
                    )

                    let test = new Date(today)
                    test.setDate(tomorrow.getDate() + 1)
                    console.log(isDeadlineComing(test))
                    

                    let changedWords = []
                    if(beginDateTasksList.length===0){
                        changedWords.push(" task")
                        changedWords.push(".")
                    }else if(beginDateTasksList.length===1){
                        changedWords.push(" task")
                        changedWords.push(" which is :")
                    }else if(beginDateTasksList.length>1){
                        changedWords.push(" tasks")
                        changedWords.push(" which are :")
                    }

                    console.log("Tomorrow tasks :", beginDateTasksList)
                    let toRemindTaskNames = " "
                    beginDateTasksList.forEach(task => toRemindTaskNames += task.title + " / ")
                    setreminderMessageForBeginDates(
                        "Just to remind you that you have " + 
                        beginDateTasksList.length + 
                        changedWords[0] +
                        " that begin today" +
                        changedWords[1] +
                        toRemindTaskNames )


                })
            }
        })

        axios.post(`http://185.117.75.79:5000/api/dialogflow/eventQuery`, eventToSend)
            .then(response => {
                if (response.data[0].queryResult.fulfillmentText === "REMINDER : You have a task tommorow") {
                    axios.get('http://localhost:5000/tasks')
                        .then(res => {

                            let tomorrow = new Date(today)
                            tomorrow.setDate(tomorrow.getDate() + 1)

                            const beginDateTasksList = res.data.filter(task =>
                                task.userId === userId &&
                                task.status === "ToDo" &&
                                task.beginDate === moment(tomorrow).format("DD/MM/YYYY")
                            )


                            let changedWords = []
                            if (beginDateTasksList.length === 0) {
                                changedWords.push(" task")
                                changedWords.push(".")
                            } else if (beginDateTasksList.length === 1) {
                                changedWords.push(" task")
                                changedWords.push(" which is :")
                            } else if (beginDateTasksList.length > 1) {
                                changedWords.push(" tasks")
                                changedWords.push(" which are :")
                            }

                            console.log("Tomorrow tasks :", beginDateTasksList)
                            let toRemindTaskNames = " "
                            beginDateTasksList.forEach(task => toRemindTaskNames += task.title + " / ")
                            setreminderMessageForBeginDates(
                                "Just to remind you that you have " +
                                beginDateTasksList.length +
                                changedWords[0] +
                                " that begin today" +
                                changedWords[1] +
                                toRemindTaskNames)


                        })
                }
            })

    }


    const onFileChange = event => {
        // Update the state 
        setFileInputState(event.target.files[0])
        console.log(event.target.files[0])
        previewFile(event.target.files[0])
    };
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }


    const initialUserState = {
        "_id": "",
        "nom": "",
        "prenom": "",
        "email": "",
        "numtel": "",
        "pays": "",
        "profession": "",
        "userName": "",
        "password": "",
        "image": "",
        "age": "",
        "sexe": ""
    }
    const [connectedUser, setConnectedUser] = useState(initialUserState)
    const onLogin = () => {
        console.log({ password, userName })

        axios.post(`http://localhost:5000/users/login`, { password, userName })
            .then((response) => {
                console.log("responseLogin : ", response)
                setConnectedUser(response.data.user)
                console.log(response.data.user)
                $('.chat-mail').addClass('hide');
                dispatch(connectUser(response.data.user))
                //do the same with all the login forms
                $('.content-conversation').removeClass('hide');

                reminderForBeginDates(response.data.user._id)
                reminderForEndDates(response.data.user._id)
            }).catch((error) => {
                if (error.response.data.error === "User Not found !") {
                    $('#alertUserNotFound').removeClass('hide')
                }
                else if (error.response.data.error === "incorrect password !") {
                    $('#alertUserNotFound').addClass('hide')
                    $('#alertPasswordIncorrect').removeClass('hide')
                }
            });



    }


    const onSub = (e) => {
        e.preventDefault()
        $('#resumeSpinner').removeClass('hide');
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "myFile",
            fileInputState
        );

        axios.post(`http://localhost:5000/users/resumeUpload`, formData)
            .then((response) => {
                console.log("responseResume : ", response)
            }).catch((error) => {
                console.log("errorResume  : ", error.response.data.error)
            });


        axios.get(`http://localhost:5000/users/resumeScrapping/${fileInputState.name}`)
            .then(response => {
                console.log(response.data)
                $('#resumeSpinner').addClass('hide');
                // adding user's info in setConnectedUser
                let fullName=""
                let array =["",""]
                if (response.data.name) {
                     fullName = response.data.name
                     array = fullName.split(" ")
                }
                let interests = ""
                let interestsArray = []
                if (response.data.interests) {
                     interests = response.data.interests
                     interestsArray = interests.split("\n");
                    console.log("interestsArray : ", interestsArray)
                }
                
                setConnectedUser({
                    ...connectedUser,
                    nom: array[0],
                    prenom: array[1],
                    profession: response.data.education ? response.data.education.substr(0, 50) : "not_able_to_scrape",
                    email: response.data.email ? response.data.email.substr(0, 50) : "not_able_to_scrape",
                    interests: interestsArray
                })

                $('.chat-mail-resume').addClass('hide');
                $('.chat-mail-folowed-resume').removeClass('hide');


            })
            .catch(error => {
                console.log(error.message)
                $('#resumeSpinner').addClass('hide');
            })

    }









    const onLinkedInDone = () => {
        setConnectedUser(initialUserState)
        $('#linkInSpinner').removeClass('hide');
        axios.post(`http://localhost:5000/users/linkedIn`, { link: linkedIn })
            .then((response) => {
                console.log("responseLinkedIn : ", response)
                let fullName = ""
                let array = ["", ""]
                if(response.data.userProfile.fullName){
                 fullName = response.data.userProfile.fullName
                 array = fullName.split(" ")
               
            }
            let skills=[]
            var interests = []
            if(response.data.skills){
             skills = response.data.skills
                skills.forEach(skill => {
                    interests.push(skill.skillName)
                });
                console.log("interests : ", interests)
            }
                setConnectedUser({
                    ...connectedUser,
                    nom: array[0],
                    prenom: array[1],
                    profession: response.data.userProfile.title ? response.data.userProfile.title : "not_able_to_scrape",
                    pays: response.data.userProfile.location ? response.data.userProfile.location.country : "not_able_to_scrape",
                    image: response.data.userProfile.photo ? response.data.userProfile.photo : "not_able_to_scrape",
                    interests: interests
                })

                $('#linkInSpinner').addClass('hide');
                $('.chat-mail-linkedIn').addClass('hide');
                $('.chat-mail-folowed-linkedIn').removeClass('hide');
            }).catch((error) => {
                console.log("errorLinkedIn  : ", error)
                $('#linkInSpinner').addClass('hide');

            });

    }


    const onAddUser = (user) => {
        console.log(user)
        axios.post(`http://localhost:5000/users/`, user)
            .then((response) => {
                console.log(response.data)
                setConnectedUser(response.data)
                dispatch(connectUser(response.data))
                $('.chat-mail-folowed-linkedIn').addClass('hide');
                $('.content-conversation').removeClass('hide');
            })
            .catch((error) => console.log("errorAddinng  : ", error.response));
    }

    const uploadImage = async (base64EncodedImage) => {
        //console.log(base64EncodedImage)
        return base64EncodedImage
    }


    const onAddUserThroughResume = (e, user) => {
        e.preventDefault()

        if (!previewSource) return;
        uploadImage(previewSource).then((imageEnc) => {
            user.image = imageEnc
            console.log("user : ", user)
            axios.post(`http://localhost:5000/users/throughResume`, user)
                .then((response) => {
                    console.log("response.data : ", response.data)
                    setConnectedUser(response.data)
                    dispatch(connectUser(response.data))
                    $('.chat-mail-folowed-resume').addClass('hide');
                    $('.content-conversation').removeClass('hide');
                })
                .catch((error) => console.log("errorAddinng  : ", error.response));

        })

    }


    const onLogout = () => {
        setChildCallables(!childCallables)
        setConnectedUser(initialUserState)
        dispatch(finishDialogue())
        setPassword("")
        setUserName("")
        $('.chat-mail').removeClass('hide');
        $('.chat-mail-registration').addClass('hide');
        $('.chat-mail-linkedIn').addClass('hide');
        $('.chat-mail-folowed-linkedIn').addClass('hide');
        $('.chat-mail-folowed-resume').addClass('hide');
        $('.chat-mail-resume').addClass('hide');
        $('.content-conversation').addClass('hide');
        // $('.chat-bubble').text("")
        $('.content-conversationRegistration').addClass('hide');
        dispatch(disconnectUser())

        setreminderMessageForBeginDates("")
        setreminderMessageForEndDates("")
    }

    return (

        <div>

            {/* Chat bot UI start */}



            <div className="chat-screen">
                <div className="chat-header">
                    <div className="chat-header-title d-flex flex-row">
                        <div className="d-flex justify-content-start mr-5">
                            <img src={require('./img/chatBotIcon.png')} height="30" width="30" /><h4 className="ml-3 mr-5"> Sophie </h4>
                        </div>

                        <div className="justify-content-end ml-5">
                            <a style={{ cursor: "pointer" }} onClick={() => onLogout()}> <img src={require('./img/logout.png')} height="30" width="30" /> </a>
                        </div>

                    </div>

                </div>

                <div className="chat-mail chat-body my-1">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <p>Hi 👋! Please fill out the form below to authentificate and start chatting with me 💖</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="UserName" value={userName} onChange={e => setUserName(e.target.value)} />
                                <div id="alertUserNotFound" className="alert alert-danger hide" role="alert">
                                    UserName not found !
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                                <div id="alertPasswordIncorrect" className="alert alert-danger hide" role="alert">
                                    Password incorrect !
                                    </div>

                            </div>
                        </div>

                        <div className="col-md-12">
                            <button className="btn btn-primary btn-rounded btn-block" onClick={() => onLogin()}>Start Chat</button>
                        </div>
                        <div className="col-md-12">
                            <div className="powered-by"><a href="#">I dont have an account </a></div>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-registration hide my-1 chat-body" >
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <h4>Create an account with : </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 my-2">
                            <button id="LinkedIn" className="btn btn-primary btn-rounded btn-block my-2">LinkedIn</button>
                            <button id="Resume" className="btn btn-warning btn-rounded btn-block my-2">Resume</button>
                            <button id="Chat" className="btn btn-secondary btn-rounded btn-block my-2">Chat</button>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-linkedIn hide my-1 chat-body">
                    <div className="row">
                        <div className="col-md-12 text-center my-1 " >
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <h4>Please give me your linkedIn : </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="form-group">
                                <input type="text"
                                    value={linkedIn}
                                    onChange={e => setlinkedIn(e.target.value)}
                                    className="form-control"
                                    placeholder="Link"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center ">
                        <div id="linkInSpinner" className="spinner-border text-warning my-1 hide" role="status">
                            <span className="sr-only">Loading...</span>
                            <span><img src={require('./img/chatBotIcon.png')} height="30" width="30" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 my-2">
                            <div className="form-group">
                                <button id="SaveLinkedIn" className="btn btn-primary btn-rounded btn-block my-1" onClick={() => onLinkedInDone()}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-folowed-linkedIn hide chat-mail chat-body my-1">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <p>Hi {connectedUser.nom} {connectedUser.prenom}👋! Please fill out the form below to complete your registration : </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="UserName"
                                    value={connectedUser.userName}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, userName: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />

                                <div id="alertUserNameExist" className="alert alert-danger hide" role="alert">
                                    UserName exist !
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="password" className="form-control"
                                    placeholder="Password"
                                    value={connectedUser.password}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, password: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="number" className="form-control"
                                    placeholder="Phone"
                                    value={connectedUser.numtel}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, numtel: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="number" className="form-control"
                                    placeholder="Age"
                                    value={connectedUser.age}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, age: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="form-group ml-5 p-2 ">
                                <input type="radio"
                                    id="male"
                                    name="sexe"
                                    value={connectedUser.sexe}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, sexe: "male" }
                                        setConnectedUser(newUserObj);
                                    }
                                    }
                                />
                                <label for="male">male</label>
                            </div>

                            <div className="form-group p-2">
                                <input type="radio"
                                    id="female"
                                    name="sexe"
                                    value={connectedUser.sexe}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, sexe: "female" }
                                        setConnectedUser(newUserObj);
                                    }
                                    }
                                />
                                <label for="female">female</label>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="email" className="form-control"
                                    placeholder="Email"
                                    value={connectedUser.email}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, email: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />
                            </div>
                        </div>


                        <div className="col-md-12">
                            <button className="btn btn-primary btn-rounded btn-block" onClick={() => onAddUser(connectedUser)}>Finish</button>
                        </div>
                    </div>
                </div>



                <div className="chat-mail-folowed-resume hide chat-mail chat-body my-1">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <p>Hi {connectedUser.nom} {connectedUser.prenom}👋! Please fill out the form below to complete your registration : </p>
                        </div>
                    </div>
                    <form onSubmit={(e) => onAddUserThroughResume(e, connectedUser)}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UserName"
                                        value={connectedUser.userName}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, userName: e.target.value }
                                            setConnectedUser(newUserObj);
                                        }
                                        } />

                                    <div id="alertUserNameExist" className="alert alert-danger hide" role="alert">
                                        UserName exist !
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="password" className="form-control"
                                        placeholder="Password"
                                        value={connectedUser.password}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, password: e.target.value }
                                            setConnectedUser(newUserObj);
                                        }
                                        } />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="number" className="form-control"
                                        placeholder="Phone"
                                        value={connectedUser.numtel}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, numtel: e.target.value }
                                            setConnectedUser(newUserObj);
                                        }
                                        } />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="number" className="form-control"
                                        placeholder="Age"
                                        value={connectedUser.age}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, age: e.target.value }
                                            setConnectedUser(newUserObj);
                                        }
                                        } />
                                </div>
                            </div>

                            <div className="d-flex flex-row">
                                <div className="form-group ml-5 p-2 ">
                                    <input type="radio"
                                        id="male"
                                        name="sexe"
                                        value={connectedUser.sexe}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, sexe: "male" }
                                            setConnectedUser(newUserObj);
                                        }
                                        }
                                    />
                                    <label for="male">male</label>
                                </div>

                                <div className="form-group p-2">
                                    <input type="radio"
                                        id="female"
                                        name="sexe"
                                        value={connectedUser.sexe}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, sexe: "female" }
                                            setConnectedUser(newUserObj);
                                        }
                                        }
                                    />
                                    <label for="female">female</label>
                                </div>

                            </div>


                            {/* <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Country"
                                        value={connectedUser.pays}
                                        onChange={e => {
                                            const newUserObj = { ...connectedUser, pays: e.target.value }
                                            setConnectedUser(newUserObj);
                                        }
                                        } />


                                </div>
                            </div> */}

                            <div className="col-md-12">
                                <CountryDropdown
                                    value={connectedUser.pays}
                                    onChange={(val) => {
                                        const newUserObj = { ...connectedUser, pays: val }
                                        setConnectedUser(newUserObj);
                                    }} />

                            </div>








                            <div className="col-md-12 mb-5">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Image</label>
                                    <input type="file"
                                        className="form-control-file"
                                        name="image"
                                        onChange={onFileChange}
                                    />
                                </div>
                            </div>



                            <div className="col-md-12">
                                <button className="btn btn-primary btn-rounded btn-block" type="submit">Finish</button>
                            </div>
                        </div>
                    </form>
                </div>










                <div className="chat-mail-resume hide my-1 chat-body">
                    <div className="row">
                        <div className="col-md-12 text-center my-1">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <h4>Please import your resume : </h4>
                            <div id="resumeSpinner" className="spinner-border text-warning my-1 hide" role="status">
                                <span className="sr-only">Loading...</span>
                                <span><img src={require('./img/chatBotIcon.png')} height="30" width="30" /></span>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => onSub(e)}
                        enctype="multipart/form-data"
                        method="POST" >
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="form-group">
                                    <input type="file"
                                        className="form-control-file"
                                        name="myFile"
                                        accept="application/pdf"

                                        onChange={onFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="form-group">
                                    <button id="SaveResume" className="btn btn-primary btn-rounded btn-block my-2" type="submit" >Done</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>














                <div className="content-conversation hide">
                    <Conversation reminderMessageForEndDates={reminderMessageForEndDates} reminderMessageForBeginDates={reminderMessageForBeginDates} connectedUser={connectedUser} setCallables={childCallables} />
                </div>

                <div className="content-conversationRegistration hide">
                    <ConversationRegistration setCallables={childCallables} />
                </div>

            </div>








            <div className="chat-bot-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square animate">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ">
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
            </div>


            {/* Chat Bot UI Ends */}
            {/*HTML Body starts*/}
            {/*HTML Body ends*/}
            {/* BEGIN GLOBAL MANDATORY SCRIPTS */}
            <script src="js/jquery-3.1.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/select2.min.js"></script>













        </div>


    )
}
/*
$(document).ready(function () {
                $(".select2_el").select2({
                });
});
*/
$(document).ready(function () {
    //Toggle fullscreen
    $(".chat-bot-icon").click(function (e) {
        $(this).children('img').toggleClass('hide');
        $(this).children('svg').toggleClass('animate');
        $('.chat-screen').toggleClass('show-chat');
    });


    $('.chat-mail a').click(function () {
        $('.chat-mail').addClass('hide');
        $('.chat-mail-registration').removeClass('hide');
    });

    $('#LinkedIn').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-mail-linkedIn').removeClass('hide');
    });


    // $('#SaveResume').click(function () {
    //     /*  $('.chat-mail-resume').addClass('hide');
    //       $('.content-conversation').removeClass('hide');*/
    // });


    $('#Resume').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-mail-resume').removeClass('hide');
    });




    $('#Chat').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.content-conversationRegistration').removeClass('hide');
    });









});

export default Chatbot
