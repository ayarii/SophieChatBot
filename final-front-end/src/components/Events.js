import {Link} from 'react-router-dom';
import Recommendation from "./Recommendation";
import React ,{ useState, useEffect }from 'react'
import {fetchRecoms} from './redux/recommendations/recomActions'
import { useSelector, useDispatch } from 'react-redux'
import './Recommendation.css'

function Events() {

    const userData = useSelector((state) => state.recom)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecoms())
    }, [])

    const events_container = (
        userData.recoms.reverse().filter(recom => recom.category === "Events").map(recommendation =>
    
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
                            <li class="breadcrumb-item active" aria-current="page">Events</li>
                        </ol>
            </div>  
        <div className="recom-container">

            <div className="container">
            <div className="row">
                {events_container}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Events