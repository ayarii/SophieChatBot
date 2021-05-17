import React ,{ useState, useEffect }from 'react'
import { fetchReviews, DeleteReview, AddReview} from './redux/reviews/reviewActions'
import {fetchUsers} from '../dashboard/src/components/redux/user/userActions'
import { useSelector, useDispatch } from 'react-redux'
import { Card} from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Reviews() {

  const reviewData = useSelector((state) => state.review)
  const userConnectedData = useSelector((state) => state.connectedUser)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchReviews())
      dispatch(fetchUsers())
      console.log(userConnectedData)
  }, [])

/*   const getUser = () => {
    axios.get('http://185.117.75.79:5000/users/607ac861c2efcd3bf4652f70').then(reponse => {
    console.log(reponse.data)    
    return reponse.data})
    } */
    
    const [review, setReview] = useState({userId: userConnectedData.user._id , userImg: userConnectedData.user.image})

  const onAddReview = () => {
      if (!userConnectedData.connected){
          alert("You should connect first")
      }
      else{
        console.log(review);
        dispatch(AddReview(review))
        alert("We really appreciate you taking the time to share your rating with us. We look forward to seeing you again soon.")
      }
  }



  const review_container = (
    reviewData.reviews.slice(0, 3).map(review =>
        <div className="mx-4">
        <Card style={{ width: '18rem', border: 'none' }}>
        <div className="image">
        {Boolean(userConnectedData.user._id === review.userId) ? <h3 className="close"><FaTimes style={{  cursor: 'pointer' }} onClick={() => dispatch(DeleteReview(review._id))} /></h3> : "" }        
        <Card.Img className="card-img" src={review.userImg} width="277px" height="370px" />
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
        <h5 className="rev">Your opinions add value. Thank you !</h5>
        <div className="row">
        {review_container}
        </div>
        {userConnectedData.connected? (
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
        ) : ("")}

    </div>  
    )
}

export default Reviews