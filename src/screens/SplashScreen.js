import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation'

const timeout = 1500;

function SplashScreen(props) {
  
  // Run effect on first load, just like didMount()
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('App');
    }, timeout);
  }, []); //Only run once

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

export default SplashScreen;