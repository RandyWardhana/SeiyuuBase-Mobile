import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import seiyuuReducer from './src/redux/reducers/seiyuuReducer'

const rootReducer = combineReducers(
  { seiyuu: seiyuuReducer }
)

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)