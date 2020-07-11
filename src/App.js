import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import * as eva from '@eva-design/eva'
import DefaultPreference from 'react-native-default-preference'
import { Action } from 'core-anilist-libs'

import { AppNavigator } from './AppNavigator'
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
  const seiyuuList = useSelector(state => state.seiyuu)
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    updateLocalTheme(nextTheme)
  }

  const barTheme = theme === 'light' ? 'dark-content' : 'light-content'
  const backgroundBarTheme = theme === 'light' ? '#FFFFFF' : '#222B46'

  useEffect(() => {
    dispatch(Action.seiyuuActions.getPokemons())
  }, [])

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle={barTheme} backgroundColor={backgroundBarTheme} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <AppNavigator />
          {/* <MainScreen /> */}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App;