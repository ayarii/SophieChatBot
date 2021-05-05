import {Link} from 'react-router-dom';
import React ,{ useState, useEffect }from 'react'
import {fetchRecoms} from './redux/recommendations/recomActions'
import { useSelector, useDispatch } from 'react-redux'
import './Recommendation.css'
import Recommendation from "./Recommendation";

function Courses() {

    const userData = useSelector((state) => state.recom)
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

    const courses_container = (
        userData.recoms.reverse().filter(recom => recom.category == "Course").map(recommendation =>
    
          <Recommendation key={recommendation._id} recommendation={recommendation}   />  
        ))

    return (
        <div>
        <section class="inner-page-banner" id="home">
        </section>
        <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                        <Link to='/recommendations'>Recommendations</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Courses</li>
                    </ol>
        </div> 
        <div className="recom-container">

            <div className="container">
            <div className="row">
                {courses_container}
            </div>
        </div>
        </div>
        </div>
    )
}

export default Courses