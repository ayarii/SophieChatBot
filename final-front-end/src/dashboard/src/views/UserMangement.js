/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from 'react'
import { fetchUsers, DeleteUser, AddUser, UpdateUser } from '../components/redux'
import { useSelector, useDispatch } from 'react-redux'
import { CountryDropdown } from 'react-country-region-selector';
import { Modal } from 'react-bootstrap'
import { FaTimes, FaPlusCircle } from 'react-icons/fa';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Input,
    FormGroup,
    Form,
    CardFooter,
    Button
} from "reactstrap";


function UserDetails(props) {

    const [show, setShow] = useState(false)
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







    const initialUserState = {
        "_id": "",
        "nom": "",
        "prenom": "",
        "email": "",
        "numtel": 0,
        "pays": "",
        "profession": "",
        "userName": "",
        "password": "",
        "image": "",
        "age": "",
        "sexe": "",
        "interests": []
    }
    const [user, setUser] = useState(initialUserState)
    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const [isFormShown, setIsFormShown] = useState(false)
    const [userDetails, setUserDetails] = useState(initialUserState)
    const [strings, setStrings] = useState(new StronglyTypedArray())
    const [newInterest, setNewInterest] = useState('')

    const showForm = () => { { !isFormShown ? setIsFormShown(true) : setIsFormShown(false) } }



    // Show Add User
    const showAdd = () => {
        setShow(!show)
        setUser(initialUserState)
    }



    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])



    /* useEffect(() => {
         fetchUsers()
     }, [])*/


    const onFileChange = event => {
        // Update the state 
        const file = event.target.files[0];
        console.log(event.target.files[0])
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


    const onAdd = (e) => {
        e.preventDefault()
        console.log("submitting : ", e)
        if (!previewSource) return
        uploadImage(previewSource)
        dispatch(AddUser(user))
    }


    const onUpdate = (e, user) => {
        e.preventDefault()
        console.log("user : ", user)
        console.log("submitting : ", e)
        if (previewSource) uploadImage(previewSource)
        dispatch(UpdateUser(user))
    }







    const user_container = (
        userData.users.map(user =>

            <tr key={user._id}>
                <td><img src={user.image} width="50" height="50" /> </td>
                <td>{user.nom} {user.prenom}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.numtel}</td>
                <td>{user.pays}</td>
                <td>{user.profession}</td>
                <td><button className="btn-fill btn btn-danger mx-3" onClick={() => dispatch(DeleteUser(user._id))} disabled={user.userName === "admin"}>Delete</button>
                    <button className="btn-fill btn btn-dark" onClick={() => {
                        setShow(true)
                        setUser(user)
                    }}>
                        Update
                        </button>

                    <button className="btn-fill btn btn-dark" onClick={() => {
                        console.log("details ...")
                        const arr = new StronglyTypedArray();
                        arr.set(user.interests);
                        setStrings(arr)
                        setUserDetails(user)
                        showForm()
                    }}>
                        Show Details
                        </button>

                </td>
            </tr>

        )
    )


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3" className="d-flex flex-row-reverse"><i className="tim-icons icon-simple-add" onClick={showAdd} role="button"></i></CardTitle>
                            </CardHeader>
                            {show &&
                                <>
                                    <CardBody>
                                        <h3 className="title">{user._id === "" ? "Add User" : "Update User"}</h3>
                                        <Form onSubmit={(e) => { user._id === "" ? onAdd(e) : onUpdate(e, user) }}>

                                            <Row>
                                                {/*Testing User Id if its null or not for the update method*/}
                                                <Col className="px-md-1" md="6">
                                                    <FormGroup>
                                                        <label>Username</label>
                                                        <Input
                                                            type="text" value={user.userName} onChange={e => {
                                                                const newUserObj = { ...user, userName: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                            disabled={user._id !== ""}
                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col className="px-md-1" md="6">
                                                    <FormGroup>
                                                        <label>Password</label>
                                                        <Input
                                                            type="password" value={user.password} onChange={e => {
                                                                const newUserObj = { ...user, password: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                            disabled={user._id !== ""}
                                                        />
                                                    </FormGroup>
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col className="pr-md-1" md="6">
                                                    <FormGroup>
                                                        <label>First Name</label>
                                                        <Input
                                                            type="text" value={user.nom} onChange={e => {
                                                                const newUserObj = { ...user, nom: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pl-md-1" md="6">
                                                    <FormGroup>
                                                        <label>Last Name</label>
                                                        <Input
                                                            type="text" value={user.prenom} onChange={e => {
                                                                const newUserObj = { ...user, prenom: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label htmlFor="exampleInputEmail1">
                                                            Email address
                        </label>
                                                        <Input placeholder="mike@email.com" type="email" value={user.email} onChange={e => {
                                                            const newUserObj = { ...user, email: e.target.value }
                                                            setUser(newUserObj);
                                                        }
                                                        }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="pr-md-1" md="4">
                                                    <FormGroup>
                                                        <label>Age</label>
                                                        <Input
                                                            className="form-control"
                                                            type="number"
                                                            value={user.age} onChange={e => {
                                                                const newUserObj = { ...user, age: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col className="pr-md-1" md="4">


                                                    <FormGroup>
                                                        <label>Gender</label>

                                                        <div class="form-check">
                                                            <input className="form-check-input"
                                                                type="radio"
                                                                value="male" onChange={e => {
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
                                                                value="female" onChange={e => {
                                                                    const newUserObj = { ...user, sexe: e.target.value }
                                                                    setUser(newUserObj);
                                                                }
                                                                }
                                                                checked={user.sexe === "female"} />
                                                            <label class="form-check-label" for="flexRadioDefault2">
                                                                Female
                                            </label>
                                                        </div>


                                                    </FormGroup>
                                                </Col>



                                            </Row>
                                            <Row>
                                                <Col className="pr-md-1" md="4">
                                                    {/* <FormGroup>
                                                        <label>Country</label>
                                                        <Input
                                                            type="text" value={user.pays} onChange={e => {
                                                                const newUserObj = { ...user, pays: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup> */}
                                                    <FormGroup>
                                                        <label>Country</label>
                                                        <CountryDropdown id="selectCountry"
                                                            value={user.pays}
                                                            defaultOptionLabel={user.pays}
                                                            onChange={(val) => {
                                                                const newUserObj = { ...user, pays: val }
                                                                setUser(newUserObj);
                                                            }} />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="px-md-1" md="4">
                                                    <FormGroup>
                                                        <label>Phone</label>
                                                        <Input
                                                            type="number" value={user.numtel} onChange={e => {
                                                                const newUserObj = { ...user, numtel: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col className="px-md-1" md="4">
                                                    <FormGroup>
                                                        <label>Profession</label>
                                                        <Input
                                                            type="text" value={user.profession} onChange={e => {
                                                                const newUserObj = { ...user, profession: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Row>
                                                    <Col className="px-md-1" md="12">
                                                        {/* <FormGroup>
                                                            <label>Image</label>
                                                            <Input
                                                                type="file" onChange={onFileChange}
                                                            />
                                                        </FormGroup> */}
                                                        <FormGroup>
                                                            <label htmlFor="exampleFormControlFile1">Image</label>
                                                            <input type="file"
                                                                className="form-input"
                                                                value={fileInputState}
                                                                onChange={onFileChange}
                                                            />

                                                        </FormGroup>



                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-md-center">
                                                    <Col className="px-md-1" md="12" >
                                                        {previewSource && (
                                                            <img src={previewSource} alt="chosen" height="50" width="100" style={{ 'border-radius': '50%' }} />
                                                        )}

                                                    </Col>
                                                </Row>
                                            </Row>

                                            <Row>
                                                <Col className="pt-md-2" md="4">
                                                    <FormGroup>
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
                                                    </FormGroup>

                                                </Col>







                                                <Col className="mt-md-2" md="4">
                                                    <FormGroup>
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
                                                        <div class="d-flex justify-content-center">

                                                            <Button className="btn-fill mt-5" color="success" type="submit" >
                                                                {user._id === "" ? "Add" : "Update"}
                                                            </Button>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>


















                                            <CardFooter>

                                            </CardFooter>
                                        </Form>
                                    </CardBody>

                                </>
                            }
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3">Users List</CardTitle>
                            </CardHeader>
                            <CardBody>
                                {userData.loading ? <h2>Loading <i className="tim-icons icon-refresh-02"></i> </h2> : userData.error ? <h2>{userData.error}</h2> :

                                    <Table className="tablesorter" responsive>
                                        <thead className="text-primary">
                                            <tr>
                                                <th>Image</th>
                                                <th>Full Name</th>
                                                <th>UserName</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Country</th>
                                                <th>Profession</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>



                                            {user_container}



                                        </tbody>

                                    </Table>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal
                    show={isFormShown}
                    onHide={() => setIsFormShown(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title >
                            <div className="d-flex flex-row">
                                <img src={userDetails.image} height="70" width="70" style={{ 'border-radius': '50%' }} className="mx-2" />
                                <h4 style={{ color: "green" }}>{userDetails.userName} Details</h4>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="row">
                            <div className="col-lg-6">
                                <p> <b>First name :</b> {userDetails.nom} </p>
                                <p> <b>Last name : </b>{userDetails.prenom} </p>
                                <p> <b>Email : </b>{userDetails.email} </p>
                                <p> <b>Phone number : </b>{userDetails.nom} </p>
                                <p> <b>Age : </b>{userDetails.age} </p>
                                <p> <b>Country : </b>{userDetails.pays} </p>
                                <p> <b>Gender : </b>{userDetails.sexe} </p>
                            </div>

                            <div className="col-lg-6">
                                <p> <b>interests :</b> </p>
                                {strings.values.map((interest, index) => (
                                    <div key={index}>
                                        <p> {interest} </p>
                                    </div>

                                ))}
                            </div>



                        </div>

















                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}






/*
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

*/


//export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
export default UserDetails
