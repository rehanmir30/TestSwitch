import React, { useState } from 'react';
import { View, Text, StyleSheet,Image, SafeAreaView, TouchableOpacity ,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

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

// Custom number input component
const NumberInput = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity 
      style={styles.numberInput}
      onPress={() => {
        // In a real app, this would open a number picker or modal
        onValueChange((value < 10) ? value + 1 : 1);
      }}
    >
      <Text style={styles.numberInputText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default function AutoSwitch({ navigation }) {
  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../../assets/DMSerif.ttf'),
      'DMSans': require('../../assets/DMSans.ttf'),
    });
  
    // Wait until font is loaded
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  const [autoSettings, setAutoSettings] = useState({
    never: true,
    testsMatchingAvailability: true,
    autoShift: true,
  });
  
  const [minDays, setMinDays] = useState(5);

  const toggleSwitch = (setting) => {
    setAutoSettings(prevState => ({
      ...prevState,
      [setting]: !prevState[setting],
    }));
  };

  return (

<ImageBackground
            source={require('../../assets/gradientBg.png')}
            style={styles.background}
            resizeMode="cover"
          >
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
           <TouchableOpacity
                                       onPress={() => navigation.navigate('Notification')}
                                       style={styles.notificationIcon}
                                     >
                                       
                                                     <Image source={require('../../assets/bell.png')} style={styles.notificationIcon} />
                                                   
                                     </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Auto Switch</Text>
        <Text style={styles.subtitle}>
          Set your specific preferences for when we should automatially move your test.
        </Text>

        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Never</Text>
            <CustomSwitch
              value={autoSettings.never}
              onValueChange={() => toggleSwitch('never')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Only Tests That Fit{'\n'}My Availability</Text>
            <CustomSwitch
              value={autoSettings.testsMatchingAvailability}
              onValueChange={() => toggleSwitch('testsMatchingAvailability')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Auto shift my test onto{'\n'}10 working days Short notice{'\n'}(These tests cant be refunded)</Text>
            <CustomSwitch
              value={autoSettings.autoShift}
              onValueChange={() => toggleSwitch('autoShift')}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Minimum Number Of Days{'\n'}Notice Need To AutoShift</Text>
            <NumberInput 
              value={minDays}
              onValueChange={setMinDays}
            />
          </View>
        </View>
      </View>

      <View style={styles.homeIndicator} />
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
    backgroundColor: '#F2F7FD',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 50,
    marginTop:20,
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
    fontSize: 24,
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#4d4d4d',
    fontWeight: '700',
    marginBottom: 30,
    fontFamily:"DMSans"
  },
  settingsContainer: {
    // backgroundColor: 'white',
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
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    fontFamily:"DMSans"
  },
  divider: {
    height: 1,
    backgroundColor: '#e2ebff',
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
  // Number input styles
  numberInput: {
    width: 36,
    height: 36,
    borderRadius: 16,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInputText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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