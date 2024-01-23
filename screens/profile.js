import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const questions = [
  'What is your full name?',
  'What is your gender?',
  'How old are you?',
  'What city are you based in?',
  'What are your preferred destinations?',
  'What are your preferred dates of travel?',
  'What kind of activities do you wish to do while traveling?',
  'What is your budget for this trip?',
  'What age do you prefer your travel companion to be?',
  'What hobbies/interests do you want them to have?',
  'What location should they be based in?',
  'What gender do you want them to be?',
];

function ProfileScreen({navigation}){
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [profileCreated, setProfileCreated] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer('');
    } else {
      setProfileCreated(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswer('');
      setProfileCreated(false);
    }
  };

  const resetProfile = () => {
    setCurrentQuestionIndex(0);
    setAnswer('');
    setProfileCreated(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#c8d5e3' }]}>

        <Image
        source={require('../assets/profilebg.jpg')}
        style={styles.backgroundImage}
      />
      {profileCreated ? (
        <View style={styles.profileContainer}>
          <Text style={{ fontSize: 40,
    fontWeight: 'bold',
  marginTop: -150,
  marginBottom:50,
    color: '#00334d',
    textAlign: 'center'}}>Thank You! </Text>
    
          <Text style={styles.profileMessage}>Your Profile is being created!</Text>

          <TouchableOpacity
        onPress={resetProfile} 
         style={{ paddingVertical: 10, paddingHorizontal: 20,backgroundColor: '#6eb8f0', borderRadius: 25,  marginTop: 15, shadowColor: 'black',elevation: 2 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#00334d' }}>Restart</Text>
      </TouchableOpacity>
          
          
          
          

          <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
         style={{ paddingVertical: 10, paddingHorizontal: 20,backgroundColor: '#6eb8f0', borderRadius: 25,  marginTop: 15, shadowColor: 'black',elevation: 2 }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#00334d' }}>Home</Text>
      </TouchableOpacity>

        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{questions[currentQuestionIndex]}</Text>
          <View style={styles.answerContainer}>
            <TextInput
              style={styles.answerBox}
              value={answer}
              onChangeText={(text) => setAnswer(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Back"
              onPress={handleBack}
              disabled={currentQuestionIndex === 0}
              
              style={styles.button}
            />
            <Button
              title="Next"
              onPress={handleNext}
            
              style={styles.button}
              
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // or 'contain' based on your preference
    position: 'absolute',
  },
  questionContainer: {
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00334d',
    marginBottom: 20,
  },
  answerContainer: {
    height: 40,
    marginBottom: 20,
    width: 200,
  },
  answerBox: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10, // Rounded corners for the text input box
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  button: {
    borderRadius: 100,
    color:'#6eb8f0',
    
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileMessage: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00334d',
    marginBottom: 20
  },
});

export default ProfileScreen;
