import React from 'react'
import { FaTimes } from 'react-icons/fa'
const User  = ({ user, onDelete }) => {
    return (
        <div class="col-md-4 col-sm-6 gal-img">
                        <a href="#gal1"><img src="assets/images/g1.jpg" alt="aegis" class="img-fluid mt-4" /></a>
                         <h3>First name : {user.nom}</h3>
                         <h5>Last Name : {user.prenom}</h5>
                         <h5>Email : {user.email}</h5>
                         <h5>Phone : {user.numtel}</h5>
                         <h5>Country : {user.pays}</h5>
                         <h5>Profession : {user.profession}</h5>
                         <h3><FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(user._id)} /></h3>
        </div>
    )
}

export default User
