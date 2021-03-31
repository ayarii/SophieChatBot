import React, { Component } from "react";
import { Card, Button, Container} from 'react-bootstrap';
import recom from "../recommendations.json";
import Recom from "./Recommendation"
import {Link} from 'react-router-dom';
import './Recommendation.css'

function News() {
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
        <div className="recom-container">

            <div className="container">
            <div className="row">
                {recom.filter(recom => recom.category == "News").map((recom, index) => (
                        <Recom recom={recom} key={index}></Recom>                  
                    ))}
            </div>
        </div>
        </div>
        </div>
    )
}

export default News