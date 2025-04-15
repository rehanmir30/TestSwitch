import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Faded Title above image */}
      <Text style={styles.fadedTitle}>TestSwitch</Text>

      {/* Image */}
      <Image
        source={require('../assets/onBoarding.png')}
        style={styles.image}
        resizeMode="contain"
      />

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
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  
  fadedTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#A0AEC0',
    opacity: 0.2,
    marginTop: 20,
  },
  
  image: {
    width: '100%',
    height: 280,
    marginTop: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: '#000',
  },

  infoBox: {
    marginHorizontal: 10,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },

  icon: {
    fontSize: 18,
  },

  linkText: {
    marginTop: 15,
    fontSize: 15,
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
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
