import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
function Conversation({ connectedUser }) {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)


    const onSend = () => {
        var str = $("#myInput").val();
        console.log("msg from click : ", str)
        $('#conversation').append('<div class="chat-bubble me">' + str + '</div>');
        $("#myInput").val("")
        setTimeout(updateScroll, 1000);

        $('.loadingAnswer').clone().addClass('nouv').appendTo('#conversation')
        // $('.loadingAnswer').clone().wrap('<div id="nouvLoad"></div>').appendTo('#conversation')

        setTimeout(function () { $('.loadingAnswer').fadeOut() }, 3000);
        setTimeout(function () { $('#conversation').append('<div class="chat-bubble you">this is my answer</div>'); }, 3500);
    }

    function updateScroll() {
        var element = document.getElementById("conversation");
        element.scrollTop = element.scrollHeight;
    }

    useEffect(() => {

        $('#myInput').keyup(function (e) {
            if (e.keyCode === 13) {
                var str = $("#myInput").val();
                console.log("msg from keyboard : ", str)
                $('#conversation').append('<div class="chat-bubble me">' + str + '</div>');
                /*
                  <div className=" d-flex flex-row justify-content-end">
                        <div className="chat-bubble me">Test response</div>
                        <img src={connectedUser.image} height="50" width="50"  />
                        </div>
                */
                $("#myInput").val("")
                setTimeout(updateScroll, 1000);
                $('.loadingAnswer').clone().addClass('nouv').appendTo('#conversation')
                // $('.loadingAnswer').clone().wrap('<div id="nouvLoad"></div>').appendTo('#conversation')

                setTimeout(function () { $('.loadingAnswer').fadeOut() }, 3000);
                setTimeout(function () { $('#conversation').append('<div class="chat-bubble you">this is my answer</div>'); }, 3500);
                /*
                        <div className=" d-flex flex-row">
                        <img src={require('./img/chatBotLogo.png')} height="50" width="50" />   
                        <div className="chat-bubble you">Testing chatBot2</div>
                        </div>
    */

            }
        });
    }, [])

    return (
        <>




            <div className="chat-body" id="conversation">
                <div className=" d-flex flex-row">
                    <img src={require('./img/chatBotLogo.png')} height="50" width="50" />
                    <div className="chat-start">{today.toDateString()}</div>
                    <img src={connectedUser.image} height="50" width="50" style={{ 'border-radius': '50%' }} />
                </div>
                <div className="chat-bubble you">Welcome {connectedUser.userName !== "" && connectedUser.userName.toUpperCase()} to our site, if you need help simply reply to this message, I am
                    online and ready to help.</div>

                <div className="loadingAnswer">
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
                </div>
                <div className=" d-flex flex-row">
                    {/* <img src={require('./img/chatBotLogo.png')} height="50" width="50" /> */}
                    <div className="chat-bubble you">Testing chatBot2</div>
                </div>
                <div className=" d-flex flex-row justify-content-end">
                    <div className="chat-bubble me">Test user chat</div>
                    {/* <img src={connectedUser.image} height="50" width="50" style={{ 'border-radius': '50%' }} /> */}
                </div>
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

$(document).ready(function () {

});
*/

export default Conversation
