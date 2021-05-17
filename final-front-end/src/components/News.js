import Recommendation from "./Recommendation";
import {Link} from 'react-router-dom';
import React ,{ useState, useEffect }from 'react'
import {fetchRecoms} from './redux/recommendations/recomActions'
import { useSelector, useDispatch } from 'react-redux'
import './Recommendation.css'

function News() {

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

    const news_container = (
        userData.recoms.reverse().filter(recom => recom.userId === userConnectedData.user._id).filter(recom => recom.category == "News").map(recommendation =>
    
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
                        <li class="breadcrumb-item active" aria-current="page">News</li>
                    </ol>
        </div>  
{       userConnectedData.connected? 
        (<div className="recom-container">

            <div className="container">
            <div className="row">
                {news_container}
            </div>
        </div>
        </div>
        ) : (<h1 className="yel">You should sign in to consult your recommendations</h1>)}
        </div>
    )
}

export default News