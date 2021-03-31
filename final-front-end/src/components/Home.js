import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends  Component{
    render(){
        return(
            <div>
                
// {/* <!-- //header -->
// <!-- banner --> */}
<div class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul class="banner_slide_bg">
			<li>
				<div class="slider-info bg1">
					<div class="bs-slider-overlay">
						<div class="banner-text">
							<div class="container">
								<h2 class="movetxt agile-title text-capitalize">Organize and manage your tasks with Sophie </h2>
								<p>a helpfull virtual learning assistant</p>
								
								<Link to='/contact' class="btn">Start now</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				
			</li>
			<li>
				<div class="slider-info bg3">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
							<h2 class="movetxt agile-title text-capitalize">We Design and Create Hair Style Latest</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
							<Link to='/contact' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="slider-info bg4">
					<div class="bs-slider-overlay1">
						<div class="banner-text">
							<div class="container">
								<h4 class="movetxt agile-title text-capitalize">We design latest trending haircuts </h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
								<Link to='/contact' class="btn">Get appointment</Link>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="navigation"> 
			<div>
			  <label for="slides_1"></label>
			  <label for="slides_2"></label>
			  <label for="slides_3"></label>
			  <label for="slides_4"></label>
			</div>
		</div>
	</div>
</div>
// {/* <!-- //banner -->


//  <!-- /services --> */}
    <section class="services py-5" id="services">
        <div class="container py-md-5">
		<h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <Link to="/single"><img src="assets/images/loula.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4> Student Bot Support</h4>
							<p>School, college or university chatbots can improve the quality of your administration and services.
								 They curate answers on demand resolving issues fast and in a way that feels natural.</p>
							
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
					<Link to="/single"><img src="assets/images/thenya.png" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4>Increased Engagement</h4>
							<p>Online chatting and messaging are part of our daily habits. Allowing students and teachers access services in this manner increases engagement through convenience and familiarity.</p>
                            <a href="single.html" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div  center class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <Link to="/single"><img src="assets/images/theltha.jpg" alt="news image" class="img-fluid" /></Link>
                        <div class="ab-info-con">
                            <h4> Interactive Learning</h4>
							<p>Digitalization of learning experiences is not a new concept but educational chatbots take it to a whole new level allowing rich interactions and learning in & outside of the classroom, 24/7.</p>
							
                            
                        </div>
                    </div>
                </div>
				
				
        </div>
    </section>
    {/* // <!-- /services -->
 
	
// {/* <!-- //pricing -->
//   <!--/order-now--> */}
    <section class="order-sec py-5">
        <div class="container py-md-5">
            <div class="test-info text-center">
                <h3 class="tittle order">
                    <span>IF YOU NEED ANY CONTACT </span>Our team will respond to you as soon as possible</h3>
                <h4 class="tittle my-2">  </h4>

                <div class="read-more mx-auto m-0 text-center">
					<Link to="/contact" class="read-more scroll btn">Click here</Link> 
				</div>
            </div>
        </div>
    </section>
//     {/* <!--//order-now-->


// <!-- subscribe --> */}
<section class="subscribe" id="subscribe">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div class="news-icon mr-3">
					<span class="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div class="text">
					<h3>Subscribe To Our Newsletter</h3>
				</div>
			</div>
			<div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Enter your email here" required="" />
					<button class="btn1"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form>
				<p>we never share your email with anyone else</p>
			</div>
		</div>
	</div>
</section>
// {/* <!-- //subscribe -->
// <!-- footer --> */}
    
    </div>
        )
    }
}
export default Home