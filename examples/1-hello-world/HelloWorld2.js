// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HelloWorld1 from './HelloWorld1';
import FacebookLogin from '../2-login-screen/FacebookLogin';
import BMICalculator from '../9-bmi-calculator/BMICalculator';
import RegisterFormTabs from '../4-register-form/RegisterFormTabs';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer id="comp1">
      <Stack.Navigator id="comp2" initialRouteName="HelloPage">
        <Stack.Screen id="comp3"
          name="HelloPage"
          component={HelloWorld1}
          options={{
            title: 'Hello Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen id="comp4"
          name="FacebookPage"
          component={FacebookLogin}
          options={{
            title: 'Facebook Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen id="comp5"
          name="BMI"
          component={BMICalculator}
          options={{
            title: 'BMI Calculator Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen id="comp6"
          name="RegisterPage"
          component={RegisterFormTabs}
          options={{
            title: 'Register Form Tabs', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
