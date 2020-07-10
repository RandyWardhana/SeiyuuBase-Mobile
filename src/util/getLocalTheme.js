import React from 'react'
import _ from 'lodash'
import DefaultPreference from 'react-native-default-preference'

const getLocalTheme = () => {
  const [theme, setTheme] = React.useState('light')

  DefaultPreference.get('localTheme').then((res) => {
    if (_.isEmpty(res)) setTheme('light')
    else setTheme(res)
  }).catch((e) => {
    throw e
  })
  
  return theme

}

export default getLocalTheme