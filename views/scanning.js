import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  Image,
  ActivityIndicator
} from 'react-native';

export default function VerifyingScreen({ navigation }) {
  const [progress, setProgress] = useState(0);

   useEffect(() => {
          const timeout = setTimeout(() => {
            navigation.navigate('Dashboard'); 
          }, 3000);
          return () => clearTimeout(timeout);
        }, []);

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Logo with circular progress indicator */}
        <View style={styles.logoContainer}>
          {/* Gray circle background */}
          <View style={styles.circleBackground} />
          
          {/* Blue dot at the top of the circle */}
          <View style={styles.progressDot} />
          
          {/* Logo */}
          <View style={styles.logoWrapper}>
            <Image 
              source={require('../assets/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Verifying text */}
        <Text style={styles.verifyingText}>VERIFYING</Text>
        
        {/* Message text */}
        <Text style={styles.messageText}>
          Thank you for submitting your details. We are checking details you have provided.
        </Text>
        
        {/* Time estimate text */}
        <Text style={styles.timeText}>
          This can take up to 2 minutes please stay on the app.
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff', // Light blue background
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleBackground: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#e0e0e0', // Gray color for the circle
  },
  progressDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#2D7DF6', // Blue color for the dot
    borderRadius: 5,
    top: 0,
    alignSelf: 'center',
  },
  logoWrapper: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  verifyingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D7DF6', // Blue color
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
    lineHeight: 26,
  },
  timeText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginBottom: 60,
    lineHeight: 26,
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 40,
    left: 50,
    right: 50,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000', // Black progress bar
    borderRadius: 2,
  },
});