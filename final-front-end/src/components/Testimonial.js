import React ,{ useEffect }from 'react'
import { fetchReviews, DeleteReview} from './redux/reviews/reviewActions'
import { useSelector, useDispatch } from 'react-redux'
import { Card} from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Testimonial() {

  const userData = useSelector((state) => state.review)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchReviews())
  }, [])


  const review_container = (
    userData.reviews.reverse().map(review =>
        <div className="mx-4 mb-3">
        <Card style={{ width: '18rem' }}>
        <div className="image-container">
        <h3><FaTimes style={{  cursor: 'pointer' }} onClick={() => dispatch(DeleteReview(review._id))} /></h3>          
        <Card.Img className="card-img-top" variant="top" src="./assets/images/springboot.jpg" />
        </div>
        <Card.Body className="card-content">
            <Card.Title className="card-title">{review.comment}</Card.Title>
        </Card.Body>
        </Card>
        </div>
    )
)

    return (
        
        <div>
        <section class="inner-page-banner" id="home">
        </section>
        <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
            <Link to='/'>Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Reviews</li>
        </ol>
    </div>   

    <div className="container">
        <h3 className="yel">Reviews</h3>
        <div className="row">
        {review_container}
        </div>
    </div>  
    </div>
    )
}

export default Testimonial