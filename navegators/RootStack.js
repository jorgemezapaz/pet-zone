import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome';

const Stack = createNativeStackNavigator() 

const RootStack = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator
     initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootStack