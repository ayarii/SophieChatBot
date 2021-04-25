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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import App from '../../../../App';
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  let history = useHistory();



  
  const [color, setcolor] = React.useState("navbar-transparent");

  const onLogout = ()=>{
    console.log("clicked logout...")
    import("../../../../assets/css/style.css").then()
    import("../../../../assets/css/bootstrap.css").then()
    import("../../../../assets/css/font-awesome.css").then()
    ReactDOM.render(<App/>, document.getElementById('root'));
    unmountComponentAtNode(document.getElementById('rootAdmin'));
    history.push('/')

  }

  React.useEffect(() => {
  });


  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
            
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
        
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              
                  <Button color="primary" className="btn-round" onClick={onLogout}>Logout</Button>
              
              
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    
        
    </>
  );
}

export default AdminNavbar;
