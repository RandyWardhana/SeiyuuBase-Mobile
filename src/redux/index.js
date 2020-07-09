import { applyMiddleware, compose, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

import rootReducer from './reducer'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk))
)

export default store