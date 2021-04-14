import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Provider } from 'react-redux'

import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Recommendations from './components/Recommendations';
import RecommendationDetails from './components/RecommendationDetails';
import News from './components/News';
import Courses from './components/Courses';
import Events from './components/Events';
import TasksManagement from './components/TasksManagement';
import store from './components/redux/store'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      
      <Provider store={store}>
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path='/'component={Home}/>
              <Route exact path='/TasksManager' component={TasksManagement}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/testimonial' component={Testimonial}/>
              <Route exact path='/recommendations' component={Recommendations} />
              <Route exact path='/recommendations/events' component={Events} />
              <Route exact path='/recommendations/news' component={News} />
              <Route exact path='/recommendations/courses' component={Courses} />
              <Route path='/recommendations/:id' component={RecommendationDetails} />   
            </Switch>
          <Footer/>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
