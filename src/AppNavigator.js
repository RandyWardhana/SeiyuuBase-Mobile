import React from 'react';
import { createAppContainer, createSwitchNavigator, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import SplashScreen from './screens/SplashScreen';

// React Navigation also requires installing additional dependencies:
//
// npm i react-navigation react-navigation-tabs react-native-screens react-native-reanimated react-native-gesture-handler
//
// Then install it for ios:
//
// cd ios && pod install

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const GiftsScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>GIFTS</Text>
  </Layout>
);

const UserIcon = (style) => (
  <Icon {...style} name='person-outline'/>
);

const GiftIcon = (style) => (
  <Icon {...style} name='gift-outline'/>
);

const TabBarComponent = ({ navigation }) => {

  const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
    <IconRegistry icons={EvaIconsPack}/>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
        <BottomNavigationTab title='USERS' icon={UserIcon}/>
        <BottomNavigationTab title='GIFTS' icon={GiftIcon}/>
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator({
  Users: UsersScreen,
  Gifts: GiftsScreen,
}, {
  tabBarComponent: TabBarComponent,
});

const RootNavigator = createSwitchNavigator({
  App: TabNavigator,
  Splash: SplashScreen 
}, {
  initialRouteName: 'Splash'
})

export const AppNavigator = createAppContainer(RootNavigator);