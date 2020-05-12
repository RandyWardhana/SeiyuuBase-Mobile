'use strict'

import { GET_ALL_SEIYUU, GET_ALL_SEIYUU_START, GET_ALL_SEIYUU_STOP } from '../constants'
import requestGQL from '../constants/anilistQueries'

let graphQl = requestGQL.create()

export const getPokemons = (limit) => {
  return async (dispatch) => {
    try {
      const result = await graphQl.getPokemon(limit)

      dispatch({ type: GET_ALL_SEIYUU, listAllSeiyuu: result.data })
    } catch(e) {
      throw e
    }
  }
}