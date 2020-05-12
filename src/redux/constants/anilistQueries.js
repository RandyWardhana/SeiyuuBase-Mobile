'use strict'

import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const create = () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://graphql-pokemon.now.sh/' }),
    cache: new InMemoryCache()
  })

  const getPokemon = (limit) => {
    const request = gql`
    query {
      pokemons(first: ${limit}) {
        name
      }
    }`
    return client.query({ query: request })
  }

  return { getPokemon }
}

export default { create }