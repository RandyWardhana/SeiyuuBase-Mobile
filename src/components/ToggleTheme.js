import React, { useContext } from 'react'
import { Button } from '@ui-kitten/components'

import { ThemeContext } from '../theme-context'

const ToggleTheme = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <Button onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
  )
}

export default ToggleTheme