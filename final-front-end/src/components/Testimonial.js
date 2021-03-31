import React from 'react'
import {Link} from 'react-router-dom';

function Testimonial() {
    return (
        <div>
    <section class="inner-page-banner" id="home">
    </section>
    <div class="breadcrumb-agile">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                    <Link to='/'>Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Testimonial</li>
                </ol>
    </div>          
    <section class="banner-bottom  py-5">
        <div class="container py-md-5">
			<h3 class="heading text-center mb-3 mb-sm-5">Happy Learners</h3>
            <div class="row mt-lg-5 mt-4">
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/t1.jpg" width="277" heigt="370" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Mark MUSTACH</h3>
                        <p>This course has taught me a lot of techniques in searching information for my academic researches.</p>
                    </div>
                </div>

                <div class="col-md-4 team-gd second text-center my-md-0 my-5">
                    <div class="team-img mb-4">
                        <img src="assets/images/t2.jpg" width="277" heigt="370" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3">Isabella MUSTACHIO</h3>
                        <p>The course was very comprehensive and easy to understand.</p>
                    </div>
                </div>
                <div class="col-md-4 team-gd text-center">
                    <div class="team-img mb-4">
                        <img src="assets/images/t3.jpg" width="277" heigt="370" class="img-fluid" alt="user-image" />
                    </div>
                    <div class="team-info">
                        <h3 class="mt-md-4 mt-3"> Amelia HAIRISTA</h3>
                        <p>Extremely valuable for researching techniques. Teachers were outstanding.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
      </div>
      )
      }

export default Testimonial