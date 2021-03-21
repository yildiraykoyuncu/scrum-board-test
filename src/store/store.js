import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store