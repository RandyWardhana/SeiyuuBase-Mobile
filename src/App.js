import React from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import DefaultPreference from 'react-native-default-preference'

import { AppNavigator } from './AppNavigator'
import { getPokemons } from './redux/actions/seiyuuActions'
import { MainScreen } from './screens/MainScreen'
import { ThemeContext } from './theme-context';

const updateLocalTheme = (theme) => {
  DefaultPreference.set('localTheme', theme).then((res) => {})
  .catch((e) => {
    throw e
  })
}

const App = () => {

  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    updateLocalTheme(nextTheme)
  }

  const barTheme = theme === 'light' ? 'dark-content' : 'light-content'

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle={barTheme} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          {/* <AppNavigator /> */}
          <MainScreen />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  )
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