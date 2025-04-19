import React, { useEffect, useState, } from 'react';
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';

export default function VerifyingScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../assets/DMSerif.ttf'),
      'DMSans': require('../assets/DMSans.ttf'),
    });
    // Wait until font is loaded
      if (!fontsLoaded) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        );
      }
    
  const [progress, setProgress] = useState(0);

   useEffect(() => {
          const timeout = setTimeout(() => {
            navigation.navigate('Dashboard'); 
          }, 3000);
          return () => clearTimeout(timeout);
        }, []);

  
  return (
     <ImageBackground
                    source={require('../assets/gradientBg.png')}
                    style={styles.background}
                    resizeMode="cover"
                  >
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
  <Video
    source={require('../assets/scanning.mp4')}
    style={styles.video}
    isLooping
    shouldPlay
    isMuted
    // resizeMode="cover"
  />
  <Image 
    source={require('../assets/logo.png')} 
    style={styles.logoOverlay}
    resizeMode="contain"
  />
</View>



        {/* Verifying text */}
        <Text style={[styles.verifyingText, { fontFamily: 'DMSerifDisplay' }]}>VERIFYING</Text>
        
        {/* Message text */}
        <Text style={[styles.messageText,{ fontFamily: 'DMSans' }]}>
          Thank you for submitting your details. We are checking details you have provided.
        </Text>
        
        {/* Time estimate text */}
        <Text style={[styles.timeText,{ fontFamily: 'DMSans' }]}>
          This can take up to 2 minutes please stay on the app.
        </Text>

      </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#e6f0ff', // Light blue background
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    marginLeft:-70,
    borderRadius: 100, // Optional: make it circular if you want
  },
  logoOverlay: {
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 1,
  },
  

  // logoContainer: {
  //   width: 120,
  //   height: 120,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
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
    // fontWeight: 'bold',
    color: '#016BEC', // Blue color
    marginBottom: 20,
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight:900,
    color: '#000',
    lineHeight: 26,
  },
  timeText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontWeight:900,
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