import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={welcome}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SignUp" component={signUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};