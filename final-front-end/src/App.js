import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import About from './components/About';
import Services from './components/Services';
import Single from './components/Single';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import UserManagement from './components/UserManagement';
import UserClassification from './components/UserClassification';
import Testimonial from './components/Testimonial';
import Recommendations from './components/Recommendations';
import RecommendationDetails from './components/RecommendationDetails';
import News from './components/News';
import Courses from './components/Courses';
import Events from './components/Events';
import TasksManagement from './components/TasksManagement';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/TasksManager' component={TasksManagement}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/testimonial' component={Testimonial} /> 
            <Route exact path='/recommendations' component={Recommendations} />
            <Route exact path='/recommendations/events' component={Events} />
            <Route exact path='/recommendations/news' component={News} />
            <Route exact path='/recommendations/courses' component={Courses} />
            <Route path='/recommendations/:id' component={RecommendationDetails} />   
          </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
