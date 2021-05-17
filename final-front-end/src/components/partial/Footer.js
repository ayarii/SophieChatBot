import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer class="footer-content">
        <div class="layer footer">
            <div class="container-fluid">
                <div class="row footer-top-inner-w3ls">
                    <div class="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <a href="/">Sophie Chatbot</a>
                        </h2>
                        <p class="my-3">
                            Sophie is a chatbot that helps you to reach your learning goals. 
                        </p>
                        <p class="mb-3">
                        It trigger you with many recommendations in your interests.
                        </p>
                        <p>
                            Moreover, it creates a scenario full of tasks to supervise you in your process.
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Calling Agent Disponibility</h3>
                            <hr/>
                            <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                <li>
                                    <p> Monday - Friday 08.00 am - 10.00 pm</p>

                                </li>
                                <li class="my-2">
                                    <p>Saturday 10.00 am - 05.00 pm</p>

                                </li>
                                <li class="my-2">
                                    <p>Sunday 11.00 am - 05.00 pm</p>

                                </li>


                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div class="footer-w3pvt">
                            <h3 class="mb-3 w3pvt_title">Contact</h3>
                            <hr/>
                            <div class="last-w3ls-contact">
                                <p>
                                    <span style={{fontWeight : "bolder"}}> Email : </span>
                                    <a href="mailto:sophiechatbot05@gmail.com">sophiechatbot05@gmail.com</a>
                                </p>
                            </div>
                            <div class="last-w3ls-contact my-2">
                                <p><span style={{fontWeight : "bolder"}}> Phone Number : </span>(+216) 50953369</p>
                            </div>
                            <div class="last-w3ls-contact">
                                <p>
                                    <span style={{fontWeight : "bolder"}}> Address :</span>
                                    
                                    <br/>Ariana Essoghra, Raoued, Ariana, 2081</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="move-top text-right"><a href="#home" class="move-top" > <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
        )
    }
}
export default Footer