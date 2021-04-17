import React ,{ useState, useEffect }from 'react'
import { fetchReviews, DeleteReview, AddReview} from './redux/reviews/reviewActions'
import { useSelector, useDispatch } from 'react-redux'
import { Card} from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Reviews() {

  const userData = useSelector((state) => state.review)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchReviews())
  }, [])

  const [review, setReview] = useState({userId: "606f7bc0997e2d34ccedadca"})

  //const user = () => {
    //  dispatch(getUser)
  //}

  const onAddReview = () => {
      console.log(review);
      dispatch(AddReview(review))
      alert("We really appreciate you taking the time to share your rating with us. We look forward to seeing you again soon.")
  }


  const review_container = (
    userData.reviews.slice(0, 3).map(review =>
        <div className="mx-4">
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
    <div className="container">
        <div className="row">
        <h3 className="yel">Reviews</h3>
        <Link className="ViewR" to="/testimonial">View More</Link>
        </div>
        <div className="row">
        {review_container}
        </div>
        <div className="form">
            <div className="row">
                <textarea placeholder="Enter your comment" 
                    onChange = {(e) => setReview({
                        ...review, comment : e.target.value 
                    })}
                />
                <button onClick={onAddReview} className="sub" >Submit</button>
            </div>
        </div>
    </div>  
    )
}

export default Reviews