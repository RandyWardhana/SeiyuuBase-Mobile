import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, light as theme } from '@eva-design/eva'

import { AppNavigator } from './AppNavigator'
import { getPokemons } from './redux/actions/seiyuuActions'

class App extends React.Component {
  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <AppNavigator />
        </ApplicationProvider>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    seiyuu: state.seiyuu,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: bindActionCreators(getPokemons, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)