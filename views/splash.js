// screens/SplashScreen.js
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    'DMSerif': require('../assets/DMSerif.ttf'),
  });

    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.replace('Onboarding'); 
        }, 3000);
        return () => clearTimeout(timeout);
      }, []);
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>TestSwitch</Text>
        <Text style={styles.subtitle}>Your fastest way to hit the road</Text>
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
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'DMSerif',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
