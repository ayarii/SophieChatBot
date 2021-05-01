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
import Dashboard from "./views/Dashboard.js";
import UserManagement from "./views/UserMangement";

var routes = [
  {
    path: "/dashboard",
    name: "User classificcation",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-mangement",
    name: "User Management",
    rtlName: "إدارةالمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserManagement,
    layout: "/admin",
  },

  
];
export default routes;
