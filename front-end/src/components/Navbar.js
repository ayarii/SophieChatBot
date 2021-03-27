import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Features from './Features';
import UsersManagement from './UsersManagement';


function Navbar() {
  return (
    <div>


     
        {/* Preloader */}
        <div id="preloader">
          <div id="status" />
        </div>
        {/*Header start */}
        <header>
          {/*menu start*/}
          <div className="menu">
            <div className="navbar-wrapper">
              <div className="container">
                {/* Navbar start */}

                <div className="navwrapper">
                  <div className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                      <div className="logo"><a href="/features"><span className="img-circle">e</span>learn</a> </div>
                      <nav className="navArea">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                        </div>
                        <div className="navbar-collapse collapse">
                          <ul className="nav navbar-nav" id="navigation">
                            <BrowserRouter basename="/">
                              <li className="menuItem" id="home"><a href="/wrapper">Home</a></li>
                              <li className="menuItem"><a href="/features">features</a></li>
                              <li className="menuItem"><a href="/UsersManagement">UsersManagement</a></li>
                              <li className="menuItem"><a href="/courses">courses</a></li>
                              <li className="menuItem"><a href="/teachers">teachers</a></li>
                              <li className="menuItem"><a href="/pricing">pricing</a></li>
                              <li className="menuItem"><a href="/testimonial">Testimonial</a></li>
                              <li><a href="blog-medium-image.html">blog</a></li>
                              <li className="menuItem"><a href="/contact">Contact</a></li>

                              <Switch>
                                <Route
                                  path="/features" className="menuItem"
                                  render={(props) => <Features {...props} />}
                                ></Route>
                              </Switch>

                              <Switch>
                                <Route
                                  path="/usersManagement" className="menuItem"
                                  render={(props) => <UsersManagement {...props} />}
                                ></Route>
                              </Switch>

                            </BrowserRouter>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Navbar end */}
              </div>
            </div>
          </div>
          {/*menu end*/}

   
</header>

       

       
      





    </div>
  )
}

export default Navbar
