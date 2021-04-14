import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


// redux-thunk => define asynchronous action creator in our application
const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(logger, thunk)))


export default store;