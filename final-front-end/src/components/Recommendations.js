/*import React ,{ useState, useEffect }from 'react'
import Recommendation from './Recommendation'
import {Link} from 'react-router-dom';
import {fetchRecoms} from './redux/recommendations/recomActions';
import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux';
import store from './redux/store'

function Recommendations() {

  const [recoms, setRecoms] = useState([])
  useEffect(() => {
      const getRecoms = async () => { // async becaus we're calling fetch tasks which returns a promise
        const recomsFromServer = await fetchRecoms()
        setRecoms(recomsFromServer);
      }
      getRecoms()
    }, [])//if you have a value where you want this to run if that value changes like recom or something

  // Fetch recom
  const fetchRecoms = async () => {
      const res = await fetch('http://localhost:5000/recommendations')
      const data = await res.json()
      console.log(data)
      return data
  }
    return (

      <div>
        <div className="mt-5">
        <div className="mb-5">
        <div className="container">
        <div className="rec-container">
        <div className="row">
        <h2>Events :</h2>
        <Link className="View" to={"/recommendations/events"}> View More </Link>
        </div>
            <div className="container">
            <div className="row">
            {recoms.filter(recom => recom.category == "Events").slice(0, 3).map((recommendation) => (
            <Recommendation key={recommendation._id} recommendation={recommendation}  />    
            ))}
            </div>
        </div>
        </div>
        <div className="rec-container">
        <div className="row">
        <h2>Courses :</h2>
        <Link className="View" to={"/recommendations/courses"}> View More </Link>
        </div>
            <div className="container">
            <div className="row">
            {recoms.filter(recom => recom.category == "Courses").slice(0, 3).map((recommendation) => (
            <Recommendation key={recommendation._id} recommendation={recommendation}   />    
            ))}
            </div>
        </div>
        </div>
        <div className="rec-container">
        <div className="row">
        <h2>News :</h2>
        <Link className="View" to={"/recommendations/news"}> View More </Link>
        </div>
            <div className="container ">
            <div className="row">
            {recoms.filter(recom => recom.category == "News").slice(0, 3).map((recommendation) => (
            <Recommendation key={recommendation._id} recommendation={recommendation}   />    
            ))}
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>

      </div>

    )
}

export default Recommendations*/

import React ,{ useState, useEffect }from 'react'
import {fetchRecomsRequest, fetchRecoms} from './redux/recommendations/recomActions'
import { useSelector, useDispatch } from 'react-redux'
import Recommendation from './Recommendation'
import {Link} from 'react-router-dom';

function Recommendations() {

  const userData = useSelector((state) => state.recom)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchRecoms())
  }, [])

  const news_container = (
    userData.recoms.reverse().filter(recom => recom.category == "News").slice(0, 3).map(recommendation =>

      <Recommendation key={recommendation._id} recommendation={recommendation}   />  
    )
)

  const courses_container = (
  userData.recoms.reverse().filter(recom => recom.category == "Courses").slice(0, 3).map(recommendation =>

    <Recommendation key={recommendation._id} recommendation={recommendation}   />  
  ))
  
  const events_container = (
    userData.recoms.reverse().filter(recom => recom.category == "Events").slice(0, 3).map(recommendation =>

      <Recommendation key={recommendation._id} recommendation={recommendation}   />  
    ))

    return (
      <div>
      <section class="inner-page-banner" id="home">
      </section>
      <div class="breadcrumb-agile">
      <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
          <Link to='/'>Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Recommendations</li>
      </ol>
  </div>      

      <div>
        <div className="mt-5">
        <div className="mb-5">
        <div className="container">
        <div className="rec-container">
        <div className="row">
        <h2>Events :</h2>
        <Link className="View" to={"/recommendations/events"}> View More </Link>
        </div>
            <div className="container">
            <div className="row">
              {events_container}
            </div>
        </div>
        </div>
        <div className="rec-container">
        <div className="row">
        <h2>Courses :</h2>
        <Link className="View" to={"/recommendations/courses"}> View More </Link>
        </div>
            <div className="container">
            <div className="row">
              {courses_container}
            </div>
        </div>
        </div>
        <div className="rec-container">
        <div className="row">
        <h2>News :</h2>
        <Link className="View" to={"/recommendations/news"}> View More </Link>
        </div>
            <div className="container ">
            <div className="row">
              {news_container}
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>

      </div>
      </div>
    )
}

export default Recommendations