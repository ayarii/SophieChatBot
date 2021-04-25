import React from 'react'
import App from '../../../App';
import ReactDOM from 'react-dom';


function QuitPoint() {
    console.log("QuitPoint...")
    ReactDOM.render(<App/>, document.getElementById('root'));
    window.location.reload(false);
}

export default QuitPoint
