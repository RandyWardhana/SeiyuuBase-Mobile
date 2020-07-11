import React from 'react'
import { Layout, Input, Button } from '@ui-kitten/components'
import SafeAreaView from 'react-native-safe-area-view'


import ToggleTheme from '../components/ToggleTheme'
import getLocalTheme from '../util/getLocalTheme';
import { HeaderHome } from '../components/HeaderHome';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

export const MainScreen = () => {
  const localTheme = getLocalTheme()

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Text>Finds</Text>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={{ backgroundColor: localTheme === 'light' ? '#FFFFFF' : '#222B46'}}>
      <View>
        {/* <ToggleTheme /> */}
        <View>
          <HeaderHome />
        </View>
        <View style={styles.searchContainer}>
          <Input
            style={styles.searchBox}
            disabled={true}
            placeholder={'Search Seiyuu'}
            size='small'
            accessoryRight={renderIcon}
          />
          <Button style={styles.btnFind} >Find</Button>
        </View>
        <View style={{ backgroundColor: 'red', flex: 1}}>
          <Text>Top Seiyuu</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  searchBox: {
    width: '70%',
    height: 40,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    bottom: 0,
    paddingTop: 0
  },
  btnFind: {
    backgroundColor: '#9561E2',
    height: 40,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16
  }
})