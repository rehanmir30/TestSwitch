import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeView({ navigation, activeScreen = 'Home' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.subText}>Active Screen: {activeScreen}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Added white background as common practice
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10, // Added some spacing
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
});