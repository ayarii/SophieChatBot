import React, { useEffect, useState } from 'react'
import { FaTimes, FaPlusCircle, FaUserEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Modal } from 'react-bootstrap'
import { CountryDropdown } from 'react-country-region-selector';
import { connectUser } from './redux/user/userActions';

function Profile() {

    const connectedUserRedux = useSelector(state => state.connectedUser.user)

    var StronglyTypedArray = function () {
        this.values = [];
        this.push = function (value) {
            this.values.push(value);
        };
        this.get = function (index) {
            return this.values[index]
        }
        this.set = function (values) {
            this.values = values;
        }
    }

    var strings = new StronglyTypedArray();
    strings.set(connectedUserRedux.interests);


    const initialUserState = {
        "_id": connectedUserRedux._id,
        "nom": connectedUserRedux.nom,
        "prenom": connectedUserRedux.prenom,
        "email": connectedUserRedux.email,
        "numtel": connectedUserRedux.numtel,
        "pays": connectedUserRedux.pays,
        "profession": connectedUserRedux.profession,
        "userName": connectedUserRedux.userName,
        "password": connectedUserRedux.password,
        "image": connectedUserRedux.image,
        "age": connectedUserRedux.age,
        "sexe": connectedUserRedux.sexe,
        "interests": strings.values
    }


    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [user, setUser] = useState(initialUserState)
    const [newInterest, setNewInterest] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [isFormShown, setIsFormShown] = useState(false)
    const showForm = () => { { !isFormShown ? setIsFormShown(true) : setIsFormShown(false) } }
    const dispatch = useDispatch()



    const onFileChange = event => {
        // Update the state 
        const file = event.target.files[0];
        previewFile(file)
    };
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage)
        user.image = base64EncodedImage
    }

    const UpdateUser = (e) => {
        e.preventDefault()
        if (previewSource) uploadImage(previewSource)
        axios.put(`http://185.117.75.79:5000/users/${user._id}`, user)
            .then(() => {
                dispatch(connectUser(user))
                showForm()
            }, (error) => {
                console.log({ "error updating ": error });
            });
    }

useEffect(() => {
    console.log("change redux user")
    if(connectedUserRedux._id!=="")
    setUser(initialUserState)
    
}, [connectedUserRedux._id])






    return (
        <div>
            <section className="inner-page-banner" id="home"></section>
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Profile
              </li>
                </ol>
            </div>
            <section className="content-info py-5">
                <div className="container py-md-5">
                    <div className="text-center px-lg-5">
                        <h3 className="heading text-center mb-3 mb-sm-5">Profile {connectedUserRedux._id !== "" && connectedUserRedux.userName}</h3>
                        <h2 className="heading text-center mb-3 mb-sm-5" style={{ color: "orange" }}>
                            {connectedUserRedux._id === "" && 'Please login to '}    edit your profile
                </h2>
                    </div>
                    {connectedUserRedux._id !== "" && (
                        <div className="contact-w3pvt-form mt-5">
                            <form onSubmit={(e) => { UpdateUser(e) }}
                                className="w3layouts-contact-fm"
                            >
                                <div class="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            {previewSource ? (
                                                <img src={previewSource} alt="chosen" height="200" width="200" style={{ 'border-radius': '50%' }} />
                                            ) : (<img src={connectedUserRedux.image} height="200" width="200" style={{ 'border-radius': '50%' }} />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            style={{ display: "none" }}
                                            id="selectedFile"
                                            value={fileInputState}
                                            onChange={onFileChange}
                                        />
                                        <h3 className="m-2"><FaUserEdit style={{ cursor: 'pointer' }} onClick={() => {
                                            document.getElementById('selectedFile').click()
                                        }}></FaUserEdit></h3>
                                        <div className="col-lg-6 mt-5">
                                            <div className="form-group">
                                                <label>interests</label>
                                                {user.interests.map((interest, index) => (

                                                    <div className="d-flex flex-row" key={index}>
                                                        <input
                                                            className="form-control my-1"
                                                            type="text"
                                                            value={interest} onChange={e => {
                                                                const interestsArr = user.interests
                                                                interestsArr[index] = e.target.value;
                                                                const newUserObj = { ...user, interests: interestsArr }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                        <h5><FaTimes style={{ cursor: 'pointer' }} onClick={() => {
                                                            //user.interests.splice(index, 1);
                                                            console.log("interest : ", interest)
                                                            console.log("index : ", index)
                                                            const newArr = user.interests.filter((val) => interest !== val)
                                                            const newUserObj = { ...user, interests: newArr }
                                                            setUser(newUserObj);
                                                        }}
                                                        /></h5>
                                                    </div>

                                                ))}
                                            </div>









                                            <div className="form-group mt-2">
                                                <label>New Interest</label>
                                                <div className="d-flex flex-row mt-2">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={newInterest} onChange={e => {
                                                            setNewInterest(e.target.value);
                                                        }
                                                        }
                                                    />


                                                    <h5><FaPlusCircle style={{ cursor: 'pointer' }} onClick={() => {

                                                        const newArr = user.interests;
                                                        newArr.push(newInterest)
                                                        const newUserObj = { ...user, interests: newArr }
                                                        setUser(newUserObj);
                                                        setNewInterest('')
                                                    }}
                                                    /></h5>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.nom} onChange={e => {
                                                    const newUserObj = { ...user, nom: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.prenom} onChange={e => {
                                                    const newUserObj = { ...user, prenom: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                value={user.email} onChange={e => {
                                                    const newUserObj = { ...user, email: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>PhoneNumber</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                value={user.numtel} onChange={e => {
                                                    const newUserObj = { ...user, numtel: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Age</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                value={user.age} onChange={e => {
                                                    const newUserObj = { ...user, age: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>

                                        {/* <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.pays} onChange={e => {
                                                    const newUserObj = { ...user, pays: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div> */}
                                        <div className="form-group">
                                            <label>Country</label>
                                            <CountryDropdown id="selectCountry"
                                                value={user.pays}
                                                defaultOptionLabel={user.pays}
                                                onChange={(val) => {
                                                    const newUserObj = { ...user, pays: val }
                                                    setUser(newUserObj);
                                                }} />
                                        </div>



                                        <div className="form-group">
                                            <label>profession</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.profession} onChange={e => {
                                                    const newUserObj = { ...user, profession: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>userName</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.userName} onChange={e => {
                                                    const newUserObj = { ...user, userName: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div>

                                        {/* <div className="form-group">
                                        <label>Set New password if you want to change the old one</label>
                                        <div className="d-flex flex-row"> 
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={newPassword} onChange={e => {
                                                setNewPassword(e.target.value);
                                            }
                                            }
                                        />
                                    
                                    <div className="form-group mx-auto">
                                        <button className="btn submit mx-2" onClick={() => {
                                            const newUserObj = { ...user, sexe:newPassword }
                                            setUser(newUserObj);
                                        }}>Confirm edit</button>
                                    </div>
                                    </div>
                                    </div>   */}


                                        {/* <div className="form-group">
                                            <label>Gender</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                value={user.sexe} onChange={e => {
                                                    const newUserObj = { ...user, sexe: e.target.value }
                                                    setUser(newUserObj);
                                                }
                                                }
                                            />
                                        </div> */}

                                        {/* <div className="form-group">
                                            <label>Gender</label>
                                            
                                            <div class="form-check">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    value={user.sexe} onChange={e => {
                                                        const newUserObj = { ...user, sexe: e.target.value }
                                                        setUser(newUserObj);
                                                    }
                                                    }
                                                    checked={user.sexe === "male"} />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    Male
                                                </label>
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    value={user.sexe} onChange={e => {
                                                        const newUserObj = { ...user, sexe: e.target.value }
                                                        setUser(newUserObj);
                                                    }
                                                    }
                                                    checked={user.sexe === "female"} />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Female
                                            </label>
                                            </div>

                                            
                                            </div> */}


                                        <div className="form-group mx-auto mt-5 d-flex justify-content-center">
                                            <button type="submit" class="btn submit">
                                                Edit
                                            </button>
                                        </div>


                                    </div>
                                </div>




                            </form>
                        </div>
                    )}
                </div>
            </section>

            <Modal
                show={isFormShown}
                onHide={() => setIsFormShown(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        editing succeeded:
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{ color: 'green' }}> your profile has been edited successfully !   </h3>
                </Modal.Body>
            </Modal>




        </div>
    );
}

export default Profile
