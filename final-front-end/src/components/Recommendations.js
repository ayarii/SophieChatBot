import React ,{ useState, useEffect }from 'react'
import {fetchRecoms} from './redux/recommendations/recomActions'
import { useSelector, useDispatch } from 'react-redux'
import Recommendation from './Recommendation'
import {Link} from 'react-router-dom';
import { filter } from 'underscore';

function Recommendations() {

  const recomData = useSelector((state) => state.recom)
  const userConnectedData = useSelector((state) => state.connectedUser)

  const dispatch = useDispatch()
  useEffect(() => {
    if (userConnectedData.connected){
      dispatch(fetchRecoms())
      console.log("userConnectedData : ", userConnectedData)}
    else {
      alert("You should connect first.")
    }

  }, [])


  const news_container = (
    recomData.recoms.filter(recom => recom.userId === userConnectedData.user._id).filter(recom => recom.category === "News").slice(0, 3).map(recommendation =>

      <Recommendation key={recommendation._id} recommendation={recommendation}   />  
    )
)

  const courses_container = (
  recomData.recoms.filter(recom => recom.userId === userConnectedData.user._id).filter(recom => recom.category === "Course").slice(0, 3).map(recommendation =>

    <Recommendation key={recommendation._id} recommendation={recommendation}   />  
  ))
  
  const events_container = (
    recomData.recoms.filter(recom => recom.userId === userConnectedData.user._id).filter(recom => recom.category === "Events").slice(0, 3).map(recommendation =>

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
{       userConnectedData.connected? 
(        <div className="mt-5">
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
        </div>) : (<h1 className="yel">You should sign in to consult your recommendations</h1>)}

      </div>
      </div>
    )
}

export default Recommendations