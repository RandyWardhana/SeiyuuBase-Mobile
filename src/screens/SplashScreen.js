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
                width: 249,
                height: 249
              }}
              source={require('../assets/icon/Logo.png')}
            />
          </View>
          <View>
            <Text style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: 10
            }}>Seiyuu Base</Text>

            <Text style={{
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>A Site For Your Seiyuu Needs!</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}