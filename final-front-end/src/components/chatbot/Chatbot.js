import React, { useState } from 'react'
import $ from 'jquery';
import axios from 'axios'
import Conversation from './Conversation';
import { useSelector, useDispatch } from 'react-redux'
import { connectUser } from '../redux/user/userActions';

function Chatbot() {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [linkedIn, setlinkedIn] = useState("")
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const dispatch = useDispatch()

    const onFileChange = event => {
        // Update the state 
        setFileInputState(event.target.files[0])
        console.log(event.target.files[0])
        previewFile(event.target.files[0])
    };
    const previewFile = (file)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            setPreviewSource(reader.result)
        }
    }


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
        "image": ""
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
                $('.content-conversation').removeClass('hide');
            }).catch((error) => {
                console.log("errorLogin  : ", error.response.data.error)
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
       .then(response =>{
          console.log(response.data) 
          $('#resumeSpinner').addClass('hide');
            // adding user's info in setConnectedUser
            const fullName = response.data.name
            const interests = response.data.interests
            const interestsArray = interests.split("\n");
            console.log("interestsArray : ", interestsArray)
            const array = fullName.split(" ")
            setConnectedUser({
                ...connectedUser,
                nom: array[0],
                prenom: array[1],
                profession: response.data.education ? response.data.education.substr(0, 50) : "not_able_to_scrape" ,
                email : response.data.email ? response.data.email.substr(0, 50) :"not_able_to_scrape",
                interests :  interestsArray
            })

          $('.chat-mail-resume').addClass('hide');
          $('.chat-mail-folowed-resume').removeClass('hide');


       })
       .catch(error=>{
           console.log(error.message)
           $('#resumeSpinner').addClass('hide');
       })

    }









    const onLinkedInDone = () => {
        $('#linkInSpinner').removeClass('hide');
        axios.post(`http://localhost:5000/users/linkedIn`, { link: linkedIn })
            .then((response) => {
                console.log("responseLinkedIn : ", response)
                const fullName = response.data.userProfile.fullName
                const array = fullName.split(" ")
                const skills = response.data.skills
                var interests = []
                skills.forEach(skill =>{
                    interests.push(skill.skillName)
                });
                console.log("interests : ", interests)
                setConnectedUser({
                    ...connectedUser,
                    nom: array[0],
                    prenom: array[1],
                    profession: response.data.userProfile.title,
                    pays: response.data.userProfile.location.country,
                    image: response.data.userProfile.photo,
                    interests : interests
                })

                $('#linkInSpinner').addClass('hide');
                $('.chat-mail-linkedIn').addClass('hide');
                $('.chat-mail-folowed-linkedIn').removeClass('hide');
            }).catch((error) => {
                console.log("errorLinkedIn  : ", error.response.data.error)
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

    const uploadImage = async(base64EncodedImage) =>{
        //console.log(base64EncodedImage)
        return base64EncodedImage
    }


    const onAddUserThroughResume = (e,user) => {
        e.preventDefault()
        
        if(!previewSource)return;
        uploadImage(previewSource).then((imageEnc)=>{
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

    return (
        <div>

            {/* Chat bot UI start */}



            <div className="chat-screen">
                <div className="chat-header">
                    <div className="chat-header-title d-flex justify-content-start">
                        <img src={require('./img/chatBotIcon.png')} height="30" width="30" /><h4 className="ml-3"> Sophie </h4>
                    </div>
                </div>
                <div className="chat-mail">
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

                <div className="chat-mail-registration hide my-5" >
                    <div className="row">
                        <div className="col-md-12 text-center my-4">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <h4>Create an account with : </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <button id="LinkedIn" className="btn btn-primary btn-rounded btn-block my-2">LinkedIn</button>
                            <button id="Resume" className="btn btn-warning btn-rounded btn-block my-2">Resume</button>
                            <button id="Chat" className="btn btn-secondary btn-rounded btn-block my-2">Chat</button>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-linkedIn hide my-5">
                    <div className="row">
                        <div className="col-md-12 text-center my-4 " >
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
                        <div id="linkInSpinner" className="spinner-border text-warning my-2 hide" role="status">
                            <span className="sr-only">Loading...</span>
                            <span><img src={require('./img/chatBotIcon.png')} height="30" width="30" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 my-2">
                            <div className="form-group">
                                <button id="SaveLinkedIn" className="btn btn-primary btn-rounded btn-block my-2" onClick={() => onLinkedInDone()}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-folowed-linkedIn hide chat-mail">
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



                <div className="chat-mail-folowed-resume hide chat-mail">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <p>Hi {connectedUser.nom} {connectedUser.prenom}👋! Please fill out the form below to complete your registration : </p>
                        </div>
                    </div>
                    <form  onSubmit={(e) => onAddUserThroughResume(e,connectedUser)}>
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
                                <input type="text" className="form-control" placeholder="Country"
                                    value={connectedUser.pays}
                                    onChange={e => {
                                        const newUserObj = { ...connectedUser, pays: e.target.value }
                                        setConnectedUser(newUserObj);
                                    }
                                    } />

                                <div id="alertUserNameExist" className="alert alert-danger hide" role="alert">
                                    UserName exist !
                                </div>
                            </div>
                        </div>
                        
                            <div className="col-md-12 mb-5">
                                <div className="form-group">
                                <label  htmlFor="exampleFormControlFile1">Image</label>
                                    <input type="file"
                                        className="form-control-file"
                                        name="image"
                                        onChange={onFileChange}
                                    />
                                </div>
                            </div>
                        


                        <div className="col-md-12">
                            <button className="btn btn-primary btn-rounded btn-block"  type="submit">Finish</button>
                        </div>
                    </div>
                </form>
                </div>
                









                <div className="chat-mail-resume hide my-5">
                    <div className="row">
                        <div className="col-md-12 text-center my-4">
                            <img src={require('./img/chatBotLogo.png')} height="100" width="100" />
                            <h4>Please import me your resume : </h4>
                            <div id="resumeSpinner" className="spinner-border text-warning my-2 hide" role="status">
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
                    <Conversation connectedUser={connectedUser} />
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


    $('#SaveResume').click(function () {
        /*  $('.chat-mail-resume').addClass('hide');
          $('.content-conversation').removeClass('hide');*/
    });


    $('#Resume').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-mail-resume').removeClass('hide');
    });




    $('#Chat').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.content-conversation').removeClass('hide');
    });









});
export default Chatbot
