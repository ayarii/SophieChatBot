import React from 'react'

function Footer() {
    return (
        <div>


            <div>
                {/*Bottom Four Column start*/}
                <section className="blue_section section_gap">
                    <div className="container">
                        <div className="row bottomfourcol">
                            {/* Footer About us start*/}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 bottomAbout">
                                <h5 className="heading">About us</h5>
                                <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
                                <h5>We Are Social On</h5>
                                <div className="socialshare"> <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-google" /></a> <a href="#"><i className="fa fa-vimeo-square" /></a> <a href="#"><i className="fa fa-dribbble" /></a> <a href="#"><i className="fa fa-youtube" /></a> </div>
                            </div>
                            {/* Footer About us end*/}
                            {/* Footer Recent news start*/}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <h5 className="heading">Recent News</h5>
                                <ul className="footerLinks">
                                    <li> <a href="#">Standred post with featured image</a> <span>by <a href="#">Mike Doe</a> on June 24, 2014</span> </li>
                                    <li> <a href="#">Standred post with featured image</a> <span>by <a href="#">Mike Doe</a> on June 24, 2014</span> </li>
                                    <li> <a href="#">Standred post with featured image</a> <span>by <a href="#">Mike Doe</a> on June 24, 2014</span> </li>
                                </ul>
                            </div>
                            {/* Footer Recent news end*/}
                            {/* Footer How it works start*/}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <h5 className="heading">How it Works?</h5>
                                <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
                                <ul className="list">
                                    <li>Phasellus mattis felis quis enim</li>
                                    <li>Nullam porta risus vitaeuik dapibus </li>
                                    <li>Phasellus mattis felis quis enim </li>
                                    <li>Vivamus sit amet ligulague semper</li>
                                </ul>
                            </div>
                            {/* Footer How it works end*/}
                            {/* Footer we accept start*/}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 contactInfo">
                                <h5 className="heading">We Accept</h5>
                                <p>Phasellus mattis felis quis enim viverratys accumsan. Nullam porta risus felis, vitaeuik dapibus arcu viverra eu.</p>
                                <ul>
                                    <li><img src="../images/paypal.gif" width={31} height={22} alt /></li>
                                    <li><img src="../images/amazon.gif" width={31} height={22} alt /></li>
                                    <li><img src="../images/visa.gif" width={31} height={22} alt /></li>
                                    <li><img src="../images/master.gif" width={31} height={22} alt /></li>
                                    <li><img src="../images/discover.gif" width={31} height={22} alt /></li>
                                </ul>
                            </div>
                            {/* Footer we accept end*/}
                        </div>
                    </div>
                </section>
                {/*/Bottom Four Column end */}
                {/*Footer start*/}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="pull-left">
                                <p>© 2015  eLearn Theme. All Rights Reserved</p>
                            </div>
                            <div className="pull-right"><a className="gototop smooth" href="#wrapper">Go To Top<i className="fa fa-chevron-up" /></a></div>
                        </div>
                    </div>
                </footer>
                {/*Footer end */}
            </div>









        </div>
    )
}

export default Footer
