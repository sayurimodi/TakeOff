import React from 'react';
import WelcomeScreen from './screens/welcome';
import SignUpScreen from './screens/signUp';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



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
          options={{title: 'Hi, First Name Last Name!',
          headerStyle: {
            backgroundColor: '#cedeed', 
          },
          headerTitleStyle: {
            color: '#00334d',  fontSize: wp(5)
          },
        }} />
        
        <Stack.Screen name="SignUp" component={SignUpScreen} 
                  options={{title: 'Back ',
                  headerStyle: {
                    backgroundColor: '#cedeed', 
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
                    backgroundColor: '#cedeed', // Dark blue color
      
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

