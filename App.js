import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Expo, { AppLoading, Asset, Font } from 'expo';


const AuthStackNavigator = createStackNavigator ({

      Welcome: WelcomeScreen,
      SignIn: SignInScreen,
      SignUp: SignUpScreen

})
export default createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStackNavigator
})
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
