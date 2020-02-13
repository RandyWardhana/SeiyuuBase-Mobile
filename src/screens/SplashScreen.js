import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'

const timeout = 3000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      this.props.navigation.navigate('App');
    }, timeout);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9561E2'
        }}>
        <View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: 10
            }}>
            <Image
              style={{
                width: 100,
                height: 100
              }}
              source={require('../assets/icon/Logo.png')}
            />
          </View>
          <Text style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold'
          }}>A Site For Your Seiyuu Needs!</Text>
        </View>
      </SafeAreaView>
    );
  }
}