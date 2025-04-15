import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Custom switch component to match the design in the image
const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={onValueChange}
      style={[
        styles.switchTrack,
        { backgroundColor: value ? '#E8E8F0' : '#E8E8F0' }
      ]}
    >
      <View 
        style={[
          styles.switchThumb, 
          { 
            backgroundColor: value ? '#4285F4' : '#E8E8F0',
            transform: [{ translateX: value ? 20 : 0 }]
          }
        ]}
      />
    </TouchableOpacity>
  );
};

export default function Alerts({ navigation }) {
  const [alertSettings, setAlertSettings] = useState({
    allTests: true,
    testsMatchingAvailability: true,
    pauseScanning: true,
    emailAlert: true,
  });

  const toggleSwitch = (setting) => {
    setAlertSettings(prevState => ({
      ...prevState,
      [setting]: !prevState[setting],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Alerts</Text>
        <Text style={styles.subtitle}>
          Decide how you and when want us to alert you.
        </Text>

        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>All Tests</Text>
            <CustomSwitch
              value={alertSettings.allTests}
              onValueChange={() => toggleSwitch('allTests')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Only Tests That Fit{'\n'}My Availability</Text>
            <CustomSwitch
              value={alertSettings.testsMatchingAvailability}
              onValueChange={() => toggleSwitch('testsMatchingAvailability')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Pause Scanning (No Alerts)</Text>
            <CustomSwitch
              value={alertSettings.pauseScanning}
              onValueChange={() => toggleSwitch('pauseScanning')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Email Alert</Text>
            <CustomSwitch
              value={alertSettings.emailAlert}
              onValueChange={() => toggleSwitch('emailAlert')}
            />
          </View>
        </View>
      </View>

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20,
    paddingHorizontal: 16,
    height: 50,
  },
  backButton: {
    padding: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 16,
  },
  // Custom switch styles to match the design in the image
  switchTrack: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
  },
  switchThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 8,
  },
});