import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import compareVersions from 'compare-versions';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
        
      <Image
        source={require('../assets/travelbg2.jpg')}
        style={styles.backgroundImage}
      />
      <LinearGradient
        colors={['transparent','rgba(0,0,0,.1)']}
        style={[styles.gradient, {}]}
      />
      

      <Text style={{fontSize: wp(15), fontWeight: 'bold', color: '#00334d',  marginTop: hp(5) }}>TakeOff:</Text>   
      <Text style={{fontSize: wp(8), color: '#5D8BA2'}}>Friends + Travel</Text>

      <Image 
        source={require('../assets/appLogo.png')}
        style={{ height: 200 }} 
        />
      
      <View style={{ marginTop: hp(30) }}>
       <TouchableOpacity
         onPress={() => navigation.navigate('SignUp')}
         style={{ paddingVertical: 10, backgroundColor: '#ffeee0', marginHorizontal: 14, borderRadius: 25 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Sign Up</Text>
      </TouchableOpacity>


  <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2)}}>
    <Text style={{ color: '#ffeee0', fontWeight: '600' }}>Already have an account?</Text>
    <TouchableOpacity >
    <Text style={{ fontWeight: '600', color: '#00334d' }}> Log In</Text>
    </TouchableOpacity>
  </View>
   
   
    </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'contain' based on your preference
    position: 'absolute',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: hp(100), // green : #87e8a7 tan :#ffeee0 light blue: 6eb8f0
  },
 
 
});

export default WelcomeScreen;
