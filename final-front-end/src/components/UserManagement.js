import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Users from './Users';
class UserManagement extends Component{
    render(){
        return(
            <div>

<section class="inner-page-banner" id="home">
</section>

<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">UserManagement</li>
	</ol>
</div>
    <section class="gallery py-5" id="gallery">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">User Management</h3>
            <div class="gallery-content">
                <div class="row">
                    
                    
                        <Users></Users>
                    
                    

                </div>
                <div id="gal1" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g1.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal2" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g2.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal3" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g3.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal4" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g4.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal5" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g5.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>
                <div id="gal6" class="popup-effect">
                    <div class="popup">
                        <img src="assets/images/g6.jpg" alt="Popup image" class="img-fluid mt-4" />
                        <a class="close" href="#gallery">&times;</a>
                    </div>
                </div>

            </div>
        </div>


    </section>
    </div>
        )
    }
}
export default UserManagement