import React from 'react'
import ReactDOM from 'react-dom';


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./Admin/Admin.js";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
import { useSelector } from 'react-redux';
/*
import "../assets/scss/black-dashboard-react.scss";
import "../assets/demo/demo.css";
import "../assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

*/





function EnterPoint() {
  const connectedUserRedux = useSelector(state => state.connectedUser)
  console.log("EnterPoint ...",connectedUserRedux.user)
  if(connectedUserRedux.user.userName ==="admin"){
    import("../assets/scss/black-dashboard-react.scss").then(() => {
   });
    import("../assets/demo/demo.css").then(() => {
   });
    import("../assets/css/nucleo-icons.css").then(() => {
   });
    import("@fortawesome/fontawesome-free/css/all.min.css").then(() => {
   });
  }
  


  ReactDOM.render(
            <BrowserRouter>
              <Switch>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                {/* <Redirect from="/" to="/admin/dashboard" /> */}
              </Switch>
            </BrowserRouter>,
        document.getElementById("rootAdmin")
      );
}

export default EnterPoint
