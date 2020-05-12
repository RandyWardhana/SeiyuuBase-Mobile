import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './src/App'
import store from './store'
import { name as appName } from './app.json'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql-pokemon.now.sh/' }),
  cache: new InMemoryCache()
})

class SeiyuuBase extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => SeiyuuBase)