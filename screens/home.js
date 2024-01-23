import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const TransparentRoundedRectangle = ({ onPress }) => {
  return (
    <>
    {/*Big blue transparent rounded rectangle*/}
    <View style={styles.blueTransparentRoundedRectangle}>
      <Svg width="100%" height="100%">
        <Rect
        />
      </Svg>
    </View>
    </>
  );
};




export default function App(navigation) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    {/*TOP HALF WITH IMAGE*/}

    <Image 
source={require('../assets/profile1.jpg')}
style={{ top: -20,  height: 360, width: 400}} 
/>
    <View style={styles.container}>
      
      {/* <Image
        source={require('C:\Users\Toalima\Downloads\Untitled design.jpg')}
        style={styles.image} */}
        <View style={styles.topHalf}>

      {/*Top half big text*/}
        <Text style={[styles.text, styles.firstNameAge]}>First Name, Age
        </Text>
      </View>
      

      {/*Destinations Text underneath*/}
      <View style={styles.topSmall}>
        <Text style={[styles.text, styles.destinationText]}>{'\u{1F4CD}'}Destinations: Spain, New Zealand, Italy, Morocco
        </Text>
      </View>

        {/*Transparent Rounded Rectangle*/}
      <TransparentRoundedRectangle 
        onPress={() => console.log('Pressed')}/>
        <Text style={[styles.text, styles.profileText]}>profile</Text>
    </View>
    

      {/*BOTTOM HALF*/}
      <View style={styles.bottomHalf}>
      {/*Blue Transparent Rectangle at the bottom*/}
        <View style={styles.blueBottomRectangle}>
        </View>

      {/*Text in the center, info*/}
      <View style={styles.bottomCenter}>
        <Text style={{fontSize: 25,  fontWeight: 'semibold', color: '#00334d',marginTop: -235, marginLeft: -5}}>info {'\u2708\uFE0F'}
        </Text>
      </View>
    </View>

      {/*Text in the upper bottom half, bio*/}
      <View style={styles.upperBottomHalf}>
        <Text style={{fontSize: 25,  fontWeight: 'semibold', color: '#00334d',marginTop: 300, marginLeft: -5}}>bio {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Everything in the bottom left*/}
      <View style={styles.bottomLeft}>
        <Text style={{fontSize: 25,  fontWeight: 'semibold', color: '#00334d',marginTop: -265, marginLeft: -5}}>travel interests {'\u2708\uFE0F'}
        </Text>
      </View>

      {/*Rounded rectangle with text - bio*/}
      <View style={styles.bioRoundedRectangle}>
        <Text style={styles.bioRoundedText}> 
        This is a sample bio for the person using the app, {'\n'}
        there will be a minimum amount of words that a {'\n'}
        user can write in their bio.
        </Text>
      </View>
      

      {/*Rounded rectangle with text - info*/}
      <View style={styles.infoRoundedRectangle}>
        <Text style={styles.infoRoundedText}>gender: female
        </Text>
      </View>

      <View style={styles.secondinfoRoundedRectangle}>
        <Text style={styles.secondinfoRoundedText}>{'\u{1F307}'}based in: united states
        </Text>
      </View>

      <View style={styles.thirdinfoRoundedRectangle}>
        <Text style={styles.thirdinfoRoundedText}>{'\u{1F4B0}'}budget: 800-1000
        </Text>
      </View>
      
      <View style={styles.fourinfoRoundedRectangle}>
        <Text style={styles.fourinfoRoundedText}>travel dates: july-august
        </Text>
      </View>

      {/*Rounded rectangle with text - Travel Interests*/}
      <View style={styles.roundedRectangle}>
        <Text style={styles.roundedText}>foodie {'\u{1F355}'}
        </Text>
      </View>

      <View style={styles.secondRoundedRectangle}>
        <Text style={styles.secondRoundedText}>history buff {'\u{1F4DA}'} 
        </Text>
      </View>

      <View style={styles.thirdRoundedRectangle}>
        <Text style={styles.thirdRoundedText}>bars/clubs {'\u{1F37E}'}
        </Text>
      </View>

      <View style={styles.fourRoundedRectangle}>
        <Text style={styles.fourRoundedText}>sight seer {'\u{1F5FC}'}
        </Text>
      </View>

      <View style={styles.fiveRoundedRectangle}>
        <Text style={styles.fiveRoundedText}>swimming {'\u{1F30A}'}
        </Text>
      </View>

      {/*Status Bar*/}
      <StatusBar style="auto" />

    </ScrollView>
  );
}


{/*const windowHeight = Dimensions.get('window').height;*/}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHalf: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#5D8BA2',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    height: hp(58), // Adjust the height as needed
    shadowColor: '#000',
   
    elevation: 5,
  },
  firstNameAge: {
    fontSize: wp(9),
    fontWeight: 'bold',
    color: '#000000',
    left: wp(5),
    top:-10
  },
  topSmall: {
    position: 'absolute',
    top: '48%',
    left: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
 
  
  profileText: {
    fontSize: 17,
    fontWeight: 'thin',
    color: '#000000',
    left: '39.5%',
    top: '-33.5%',
  },
  destinationText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#000000',
  },
 
  bottomCenter: {
    position: 'absolute',
    bottom: '59%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  upperBottomHalf: {
    position: 'absolute',
    bottom: '43%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '13%',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bioRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    marginTop: hp(55.5),
    left: wp(5),
    borderRadius: 25,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    top: hp(70),
    left: wp(5),
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    top: hp(70),
    left: 160,
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    top: hp(75),
    left: wp(5),
    borderRadius: 25,
    padding:7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourinfoRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    top: hp(75),
    left: 197,
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    bottom: '8.5%',
    left: wp(5),
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    bottom: '8.5%',
    left: 120,
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    bottom: '8.5%',
    left: 250,
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    bottom: '3.3%',
    left: wp(5),
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fiveRoundedRectangle: {
    position: 'absolute',
    backgroundColor: '#faf0e8',
    bottom: '3.3%',
    left: 140,
    borderRadius: 25,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  infoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  secondinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  thirdinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fourinfoRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  roundedText: {
    fontSize: 15,
    color: '#000000',
  },
  secondRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  thirdRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fourRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  fiveRoundedText: {
    fontSize: 15,
    color: '#000000',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  bioText: {
    fontSize: 25,
  },
  infoText: {
    fontSize: 25,
  },
  travelText: {
    fontSize: 25,
  },

});