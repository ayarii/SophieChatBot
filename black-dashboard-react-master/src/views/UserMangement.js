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
import { connect } from 'react-redux'
import { fetchUsers, DeleteUser, AddUser,UpdateUser } from '../components/redux'
import { useSelector, useDispatch } from 'react-redux'

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


function UserManagement() {
    const [show, setShow] = useState(false)
    const initialUserState = {
        "_id":"",
        "nom": "",
        "prenom": "",
        "email": "",
        "numtel": 0,
        "pays": "",
        "profession": "",
        "userName": "",
        "password": "",
        "image":""
    }
    const [user, setUser] = useState(initialUserState)
    const [file, setFile] = useState(null)
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
        setFile(event.target.files[0]); 
        console.log(event.target.files[0])
      }; 

      const onFileUpload = () => { 
        const formData = new FormData(); 
        user.image = file
        console.log("user before : ",user)
        
        formData.append("nom",user.nom )
        formData.append("prenom",user.prenom )
        formData.append("email", user.email)
        formData.append("numtel", user.numtel)
        formData.append("pays", user.pays)
        formData.append("profession", user.profession)
        formData.append("userName", user.userName)
        formData.append("password", user.password)
        formData.append("image", user.image)
       
        // Details of the uploaded file 
        console.log("formData.image : ", formData.get("image")); 
        //delete user.image
        dispatch(AddUser(user))


        }










    const user_container = (
        userData.users.map(user =>

            <tr key={user._id}>
                <td>{user.nom} {user.prenom}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.numtel}</td>
                <td>{user.pays}</td>
                <td>{user.profession}</td>
                <td><button className="btn-fill btn btn-danger mx-3" onClick={() => dispatch(DeleteUser(user._id))} disabled = {user.userName ==="admin"}>Delete</button>
                    <button className="btn-fill btn btn-dark" onClick={() => {
                        setShow(true)
                        setUser(user)
                    }}>
                        Update
                        </button></td>
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
                                        <h3 className="title">{user._id ==="" ? "Add User" : "Update User"}</h3>
                                        <Form encType="multipart/form-data">

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
                                                            disabled = {user._id !==""}
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
                                                            disabled = {user._id !==""}
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
                                                        <label>Country</label>
                                                        <Input
                                                            type="text" value={user.pays} onChange={e => {
                                                                const newUserObj = { ...user, pays: e.target.value }
                                                                setUser(newUserObj);
                                                            }
                                                            }
                                                        />
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
                                                <Col className="px-md-1" md="4">
                                                    <FormGroup>
                                                        <label>Image</label>
                                                        <Input
                                                            type="file" onChange={onFileChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                </Row>
                                            </Row>

                                        </Form>





                                    </CardBody>
                                    <CardFooter>
                                        <Button className="btn-fill" color="success" type="submit" onClick={() => { user._id ==="" ? onFileUpload() : dispatch(UpdateUser(user)) }}>
                                        {user._id ==="" ? "Add" : "Update"}
                             </Button>
                                    </CardFooter>
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
export default UserManagement
