'use strict'

import { 
  GET_ALL_SEIYUU, GET_ALL_SEIYUU_START, GET_ALL_SEIYUU_STOP
} from '../constants'

const initialState = {
  listAllSeiyuu: null,

  loadingAllSeiyuu: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SEIYUU_START:
      state = {
        ...state,
        loadingAllSeiyuu: true
      }
      break
    case GET_ALL_SEIYUU:
      state = {
        ...state,
        listAllSeiyuu: action.listAllSeiyuu
      }
      break
    case GET_ALL_SEIYUU_STOP:
      state = {
        ...state,
        loadingAllSeiyuu: false
      }
      break
    default:
      break
  }

  return state
}