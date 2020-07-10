import React from 'react'
import { Layout } from '@ui-kitten/components'
import SafeAreaView from 'react-native-safe-area-view'

import ToggleTheme from '../components/ToggleTheme'

import getLocalTheme from '../util/getLocalTheme';

export const MainScreen = () => {
  const localTheme = getLocalTheme()
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: localTheme === 'light' ? '#FFFFFF' : '#222B46' }}>
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ToggleTheme />
      </Layout>
    </SafeAreaView>
  )
}