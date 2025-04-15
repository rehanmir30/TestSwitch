import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Faded Title above image */}
      <View style={styles.coloredBackground}>
  <Text style={styles.fadedTitle}>TestSwitch</Text>

  <Image
    source={require('../assets/onBoarding.png')}
    style={styles.image}
    resizeMode="contain"
  />
</View>

      {/* Title and Subtext */}
      <Text style={styles.title}>TestSwitch</Text>
      <Text style={styles.subtitle}>Your fastest way to hit the road</Text>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          <Text style={styles.icon}>ℹ️ </Text>
          You must have a practical driving test booked with the DVSA before using our service.
        </Text>

        <Text style={styles.linkText}>
          Don’t have a test yet?{' '}
          <Text
            style={styles.bookLink}
            onPress={() => navigation.navigate('BookNow')}
          >
            Book here!
          </Text>
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff',  },
  
  coloredBackground: {
    backgroundColor: '#DDE8FF',
    // padding: 20,
    // borderRadius: 12, // optional, for rounded corners
    alignItems: 'center', // centers the content horizontally
    justifyContent: 'center',
    marginBottom: 20, // space below the section
  },

  fadedTitle: {
    backgroundColor:'#DDE8FF',
    fontSize: 61,
    textAlign: 'center',
    color: '#407BFF',
    opacity: 0.24,
    marginTop: 20,
  },
  
  image: {
    backgroundColor:'#DDE8FF',
    width: '100%',
    height: 280,
    
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#000',
  },

  infoBox: {
    marginHorizontal: 10,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 19,
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal:40,
  },

  icon: {
    fontSize: 18,
  },

  linkText: {
    marginTop: 15,
    fontSize: 19,
    textAlign: 'center',
  },

  bookLink: {
    color: '#FF4D4D',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal:20
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
