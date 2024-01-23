import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';



export default function SignUpScreen({navigation}) {


  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      // Passwords don't match, throw an error or display a message
      alert("Passwords don't match. Please enter matching passwords.");
      return;
    }

    // Continue with your sign-up logic here
    // ...

    // For demonstration purposes, alert the successful sign-up
    alert('Sign-up successful!');
  };


  

  return (
    <View style={styles.container}>
     
      
      <Image 
        source={require('../assets/city.png')}
        style={{ marginTop: -420, height: 150, width: 350}} 
        />

      <Text style={{ fontSize: wp(10), fontWeight: 'bold', color: '#00334d', marginTop: 33 }}>TakeOff:</Text>

      <View style={styles.whiteBox}>


      



       <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
         style={{ paddingVertical: 10, backgroundColor: '#6eb8f0', marginHorizontal: 100, borderRadius: 25,  marginTop: 15, shadowColor: 'black',elevation: 2 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#00334d' }}>Sign Up!</Text>
      </TouchableOpacity>



      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00334d',  marginTop: 20, marginLeft: 10}}>Email address:    </Text>

        <TextInput
         style={[styles.textInput, { marginTop: 10 }]}
          placeholder="  Enter your email"
          placeholderTextColor="#00334d"
        />
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00334d',marginTop: 10, marginLeft: 10}}>Password:    </Text>

        <TextInput
          style={[styles.textInput, { marginTop: 10 }]}
          placeholder="  Enter your password"
          placeholderTextColor="#00334d"
          secureTextEntry={!showPassword}
          value={password}
            onChangeText={(text) => setPassword(text)}
          />
         
        
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00334d',marginTop: 10, marginLeft: 10}}>Confirm password:    </Text>

<TextInput
  style={[styles.textInput, { marginTop: 10 }]}
  placeholder="  Enter your password again"
  placeholderTextColor="#00334d"
  secureTextEntry={!showPassword}
  value={confirmPassword}
  onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            onPressIn={() => setShowPassword(true)}
            onPressOut={() => setShowPassword(false)}
            style={{ marginLeft: 10, marginTop: -5 }}
          >
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#00334d' }}>
              Show Passwords
            </Text>
          </TouchableOpacity>

<Image 
        source={require('../assets/planeFlying.png')}
        style={{ marginTop: -5, marginLeft: 30,  height: 100, width: wp(75) }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87e8a7',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  whiteBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#faf0e8',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    height: hp(65), // Adjust the height as needed
    shadowColor: '#000',
   
    elevation: 5, // For Android
  },
  textInput: {
    height: 40,
    borderColor: '#00334d',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#00334d',
    shadowColor: '#87e8a7',
   
    elevation: 1, // For Android
  },
});
