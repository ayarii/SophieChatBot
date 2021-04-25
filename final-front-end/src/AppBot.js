import React from 'react'
import { Provider } from 'react-redux'
import Chatbot from './components/chatbot/Chatbot'
import store from './components/redux/store'

function AppBot() {
    return (
       
            <Provider store={store}>
                <Chatbot/>
            </Provider>
       
    )
}

export default AppBot
