// screens/SplashScreen.js
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

const [fontsLoaded] = useFonts({
    'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
    'DMSerif': require('../assets/DMSerif.ttf'),
    'DMSans': require('../assets/DMSans.ttf'),
  });

  
  
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.replace('Onboarding'); 
        }, 3000);
        return () => clearTimeout(timeout);
      }, []);
      if (!fontsLoaded) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        );
      }
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>TestSwitch</Text>
        <Text style={[styles.subtitle,{ fontFamily: 'DMSans' }]}>Your fastest way to hit the road</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 88,
    height: 88,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 48,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight:"bold"
  },
});
