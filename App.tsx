import React from 'react';
import WelcomeScreen from './screens/welcome';
import SignUpScreen from './screens/signUp';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Welcsdsdsome', headerShown: false}}
        />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcsdsdsome', headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} 
                  options={{title: 'Back to start',
                  headerStyle: {
                    backgroundColor: '#87e8a7', 
                  },
                  headerTitleStyle: {
                    color: '#00334d', 
                  },
                }} />

          <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Back',
                
                  headerStyle: {
                    backgroundColor: '#c8d5e3', // Dark blue color
      
                  },
                  headerTitleStyle: {
                    color: '#00334d', // White text color
  
                  },
                }}
        />
        

        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

