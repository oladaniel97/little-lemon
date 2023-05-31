import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '../screens/onboarding';
import Profile from '../screens/profile';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/home';


const Stack =  createNativeStackNavigator();

const OnboardingPage= ()=>{
    return(
        <Stack.Navigator initialRouteName={Onboarding} screenOptions={{headerShown:false}}>
            <Stack.Screen name='Onboarding' component={Onboarding}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState('OnboardingPage')

    const HandleAuth = async()=>{
        try {
            const value = await AsyncStorage.getItem('login')
            SetIsLoggedIn(value !== null ? 'Home' : 'OnboardingPage')
        } catch (error) {
            console.log('error',error)
        }
    }
    useEffect(()=>{
        HandleAuth()
    },[])

  return (
    
        <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isLoggedIn}>
        {isLoggedIn === 'OnboardingPage' ? (
          <Stack.Screen name='OnboardingPage' component={OnboardingPage} />
        ) : (
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default AppNavigation

