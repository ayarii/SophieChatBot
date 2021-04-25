import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./assets/css/style.css"
import "./assets/css/bootstrap.css"
import "./assets/css/font-awesome.css"
import AppBot from './AppBot';


ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<AppBot/>, document.getElementById('rootBot'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
