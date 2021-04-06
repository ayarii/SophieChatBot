import React from 'react'
import $ from 'jquery'; 

function Chatbot() {
    return (
        <div>
            {/* Chat bot UI start */}
            <div className="chat-screen">
                <div className="chat-header">
                    <div className="chat-header-title">
                        Sophie ChatBot 😀
      </div>
                    <div className="chat-header-option hide">
                        <span className="dropdown custom-dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                    <circle cx={12} cy={12} r={1} />
                                    <circle cx={19} cy={12} r={1} />
                                    <circle cx={5} cy={12} r={1} />
                                </svg>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink1" style={{ willChange: 'transform' }}>
                                <a className="dropdown-item" href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#bc32ef" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1={16} y1={13} x2={8} y2={13} />
                                        <line x1={16} y1={17} x2={8} y2={17} />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
              Send Transcriptions
            </a>
                                <a className="dropdown-item end-chat" href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#bc32ef" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-power">
                                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                                        <line x1={12} y1={2} x2={12} y2={12} />
                                    </svg>
              End Chat
            </a>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="chat-mail">
                    <div className="row">
                        <div className="col-md-12 text-center mb-2">
                            <p>Hi 👋! Please fill out the form below to authentificate and start chatting with me 💖</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="UserName" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <button className="btn btn-primary btn-rounded btn-block">Start Chat</button>
                        </div>
                        <div className="col-md-12">
                            <div className="powered-by"><a href="#">I dont have an account </a></div>
                        </div>
                    </div>
                </div>

                <div className="chat-mail-registration hide my-5">
                    <div className="row">
                        <div className="col-md-12 text-center my-4">
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















                <div className="chat-body hide" id="conversation">
                    <div className="chat-start">Monday, 1:27 PM</div>
                    <div className="chat-bubble you">Welcome to our site, if you need help simply reply to this message, we are
                    online and ready to help.</div>
                    <div className="chat-bubble me">Hi, I am back</div>
                    <div className="chat-bubble me">I just want my Report Status.</div>
                    <div className="chat-bubble me">As i am not getting any weekly reports nowadays.</div>
                    <div className="chat-bubble me">Testing chatBot</div>
                    <div className="chat-bubble you">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', display: 'block', shapeRendering: 'auto', width: 43, height: 20 }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <circle cx={0} cy="44.1678" r={15} fill="#ffffff">
                                <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.6s" />
                            </circle>
                            <circle cx={45} cy="43.0965" r={15} fill="#ffffff">
                                <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.39999999999999997s">
                                </animate>
                            </circle>
                            <circle cx={90} cy="52.0442" r={15} fill="#ffffff">
                                <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.19999999999999998s">
                                </animate>
                            </circle>
                        </svg>
                    </div>
                    <div className="chat-bubble me">Testing chatBot2</div>
                    <div className="chat-bubble you">Test from bot</div>
                </div>
                <div className="chat-input hide">
                    <input type="text" placeholder="Type a message..." id="myInput" />
                    <div className="input-action-icon">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                            </path>
                        </svg></a>
                        <a><svg id="mess" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                            <line x1={22} y1={2} x2={11} y2={13} />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg></a>
                    </div>
                </div>
                <div className="chat-session-end hide">
                    <h5>This chat session has ended</h5>
                    <p>Thank you for chatting with us, If you can take a minute and rate this chat:</p>
                    <div className="rate-me">
                        <div className="rate-bubble great">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                </path>
                            </svg></span>
          Great
        </div>
                        <div className="rate-bubble bad">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-down">
                                <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17">
                                </path>
                            </svg></span>
          Bad
        </div>
                    </div>
                    <a className="transcript-chat">Need a Transcript?</a>
                    <div className="powered-by">Powered by Assistant</div>
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

    $('.chat-mail button').click(function () {
        $('.chat-mail').addClass('hide');
        $('.chat-body').removeClass('hide');
        $('.chat-input').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });

    $('.chat-mail a').click(function () {
        $('.chat-mail').addClass('hide');
        $('.chat-mail-registration').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });

    $('#LinkedIn').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-body').removeClass('hide');
        $('.chat-input').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });

    $('#Chat').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-body').removeClass('hide');
        $('.chat-input').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });

    $('#Resume').click(function () {
        $('.chat-mail-registration').addClass('hide');
        $('.chat-body').removeClass('hide');
        $('.chat-input').removeClass('hide');
        $('.chat-header-option').removeClass('hide');
    });






    $('.end-chat').click(function () {
        $('.chat-body').addClass('hide');
        $('.chat-input').addClass('hide');
        $('.chat-session-end').removeClass('hide');
        $('.chat-header-option').addClass('hide');
    });



    function updateScroll() {
        var element = document.getElementById("conversation");
        element.scrollTop = element.scrollHeight;
    }

    $('#mess').click(function () {
        var str = $("#myInput").val();
        $('#conversation').append('<div class="chat-bubble me">' + str + '</div>');
        $("#myInput").val("")
        setInterval(updateScroll, 1000);
    });

    $('#myInput').keyup(function (e) {
        if (e.keyCode == 13) {
            var str = $("#myInput").val();
            $('#conversation').append('<div class="chat-bubble me">' + str + '</div>');
            $("#myInput").val("")
            setInterval(updateScroll, 1000);
        }
    });


});
export default Chatbot
