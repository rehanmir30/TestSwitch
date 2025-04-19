import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Video } from 'expo-av';
import TestSwitchPopup from './testPopup';

export default function HomeView({ navigation, activeScreen = 'Home' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleAccept = () => {
    // Add your logic here for what happens when user accepts
    console.log('Test slot accepted');
    setPopupVisible(false);
  };

  const handleDecline = () => {
    // Add your logic here for what happens when user declines
    console.log('Test slot declined');
    setPopupVisible(false);
  };

  const [fontsLoaded] = useFonts({
    'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
    'DMSerif': require('../assets/DMSerif.ttf'),
    'DMSans': require('../assets/DMSans.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/gradientBg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, flexGrow: 1 }}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo.png')} style={styles.logo} />
              <Text onPress={handleOpenPopup} style={[styles.appName, { fontFamily: 'DMSerifDisplay' }]}>TestSwitch</Text>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Image source={require('../assets/bell.png')} style={styles.notificationIcon} />
            </TouchableOpacity>
          </View>

          {/* Welcome Section */}
          <Text style={styles.welcomeText}>
            Hey<Text style={styles.waveEmoji}>👋</Text>, Johndoe3
          </Text>

          {/* Scanning Section */}
          <View style={{ width: '100%', aspectRatio: 2.2, borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => {
                if (isPlaying) {
                  videoRef.current.playAsync();
                  setIsPlaying(false);
                } else {
                  videoRef.current.playAsync();
                  setIsPlaying(true);
                }
              }}
              activeOpacity={0.9}
              style={{ width: '100%', height: '100%' }}
            >
              <Video
                ref={videoRef}
                source={isPlaying?require('../assets/searching1.mp4'):require('../assets/offline.mp4')}
                style={{ width: '100%', height: '100%' }}
                isLooping
                shouldPlay={true}
                isMuted
                resizeMode="cover"
              />
              <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center' }}>
                <Text style={{ color: 'white' , fontSize: 16, fontFamily:"DMSans",fontWeight: 'bold' }}>
                  {isPlaying ? 'Scanning for cancellations' : 'DVSA is currently offline'}
                </Text>
              </View>
              <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Text style={{ color: 'white', fontSize: 28, fontFamily: 'DMSerifDisplay' }}>
                  {isPlaying ? 'Scanning' : 'Offline'}
                </Text>
              </View>
              <View style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 24,
                height: 24,
                borderRadius: 14,
                borderWidth: 1.5,
                borderColor: 'white' ,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ color:'white', fontWeight: 'bold', fontSize: 16 }}>i</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Days Saved Section */}
          <View style={styles.daysSavedContainer}>
            <Text style={styles.daysSavedText}>22 days saved with TestSwitch</Text>
          </View>

          {/* Alerts Section */}
          <View style={styles.alertsSection}>
            <Text style={[styles.sectionTitle, { fontFamily: 'DMSerifDisplay' }]}>Latest Alerts</Text>

            
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
  <View style={[styles.alertCard, { backgroundColor: '#FFEFEC', width: 300 }]}>
    <View style={styles.alertLeftSection}>
      <View style={[styles.alertIconContainer, { backgroundColor: '#FFD6CE' }]}>
        <Image source={require('../assets/car-icon.png')} style={styles.alertIcon} />
      </View>
    </View>
    <View style={styles.alertContent}>
      <Text style={styles.alertDay}>Friday</Text>
      <View style={styles.alertDetails}>
        <View style={styles.alertDetail}>
          <Image source={require('../assets/calendar-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>6th June 2025</Text>
        </View>
        <View style={styles.alertDetail}>
          <Image source={require('../assets/clock-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>02:42 PM</Text>
        </View>
      </View>
      <View style={styles.alertDetail}>
        <Image source={require('../assets/location-icon.png')} style={styles.detailIcon} />
        <Text style={styles.detailText}>Inverness (Longman Drive)</Text>
      </View>
      <View style={styles.alertDetail}>
        <Image source={require('../assets/expire-icon.png')} style={styles.detailIcon} />
        <Text style={styles.detailText}>Expired on 25-03-2025</Text>
      </View>
    </View>
  </View>

  <View style={[styles.alertCard, { backgroundColor: '#FEECFF', width: 300 }]}>
    <View style={styles.alertLeftSection}>
      <View style={[styles.alertIconContainer, { backgroundColor: '#FBCEFF' }]}>
        <Image source={require('../assets/car-icon.png')} style={styles.alertIcon} />
      </View>
    </View>
    <View style={styles.alertContent}>
      <Text style={styles.alertDay}>Friday</Text>
      <View style={styles.alertDetails}>
        <View style={styles.alertDetail}>
          <Image source={require('../assets/calendar-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>6th June 2025</Text>
        </View>
        <View style={styles.alertDetail}>
          <Image source={require('../assets/clock-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>02:42 PM</Text>
        </View>
      </View>
      <View style={styles.alertDetail}>
        <Image source={require('../assets/location-icon.png')} style={styles.detailIcon} />
        <Text style={styles.detailText}>Inverness (Longman Drive)</Text>
      </View>
      <View style={styles.alertDetail}>
        <Image source={require('../assets/expire-icon.png')} style={styles.detailIcon} />
        <Text style={styles.detailText}>Expired on 25-03-2025</Text>
      </View>
    </View>
  </View>
</ScrollView>

            <Text style={[styles.sectionTitle, { fontFamily: 'DMSerifDisplay' }]}>Previous Alerts</Text>

            <View style={[styles.alertCard, { backgroundColor: '#FEECFF' }]}>
              <View style={styles.alertLeftSection}>
                <View style={[styles.alertIconContainer, { backgroundColor: '#FBCEFF' }]}>
                  <Image source={require('../assets/car-icon.png')} style={styles.alertIcon} />
                </View>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertDay}>Friday</Text>
                <View style={styles.alertDetails}>
                  <View style={styles.alertDetail}>
                    <Image source={require('../assets/calendar-icon.png')} style={styles.detailIcon} />
                    <Text style={styles.detailText}>6th June 2025</Text>
                  </View>
                  <View style={styles.alertDetail}>
                    <Image source={require('../assets/clock-icon.png')} style={styles.detailIcon} />
                    <Text style={styles.detailText}>02:42 PM</Text>
                  </View>
                </View>
                <View style={styles.alertDetail}>
                  <Image source={require('../assets/location-icon.png')} style={styles.detailIcon} />
                  <Text style={styles.detailText}>Inverness (Longman Drive)</Text>
                </View>
                <View style={styles.alertDetail}>
                  <Image source={require('../assets/expire-icon.png')} style={styles.detailIcon} />
                  <Text style={styles.detailText}>Expired on 25-03-2025</Text>
                </View>
              </View>
            </View>

            <View style={[styles.alertCard, { backgroundColor: '#ECF2FF' }]}>
              <View style={styles.alertLeftSection}>
                <View style={[styles.alertIconContainer, { backgroundColor: '#CCDCFF' }]}>
                  <Image source={require('../assets/car-icon.png')} style={styles.alertIcon} />
                </View>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertDay}>Friday</Text>
                <View style={styles.alertDetails}>
                  <View style={styles.alertDetail}>
                    <Image source={require('../assets/calendar-icon.png')} style={styles.detailIcon} />
                    <Text style={styles.detailText}>6th June 2025</Text>
                  </View>
                  <View style={styles.alertDetail}>
                    <Image source={require('../assets/clock-icon.png')} style={styles.detailIcon} />
                    <Text style={styles.detailText}>02:42 PM</Text>
                  </View>
                </View>
                <View style={styles.alertDetail}>
                  <Image source={require('../assets/location-icon.png')} style={styles.detailIcon} />
                  <Text style={styles.detailText}>Inverness (Longman Drive)</Text>
                </View>
                <View style={styles.alertDetail}>
                  <Image source={require('../assets/expire-icon.png')} style={styles.detailIcon} />
                  <Text style={styles.detailText}>Expired on 25-03-2025</Text>
                </View>
              </View>
            </View>

            {/* Premium Button */}
            <TouchableOpacity style={styles.premiumButton}>
              <View style={styles.heartIconContainer}>
                <Image source={require('../assets/heart-icon.png')} style={styles.heartIcon} />
              </View>
              <Text style={styles.premiumButtonText}>UPGRADE TO PREMIUM</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <TestSwitchPopup
  visible={popupVisible}
  onClose={handleClosePopup}
  onAccept={handleAccept}
  onDecline={handleDecline}
/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: '400',
    marginLeft: 5,
    color: '#000',
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 18,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 40,
    height: 40,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
    fontFamily:"DMSans"
  },
  waveEmoji: {
    fontSize: 20,
    marginHorizontal: 4,
  },
  daysSavedContainer: {
    backgroundColor: '#003F8C',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  daysSavedText: {
    color: 'white',
    fontSize: 20,
    fontFamily:"DMSans",
    fontWeight: 'bold',
  },
  alertsSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
  alertCard: {
    flexDirection: 'row',
    marginRight:10,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  alertLeftSection: {
    justifyContent: 'flex-start',
    paddingTop: 5,
    marginRight: 8,
  },
  alertIconContainer: {
    width: 45,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  alertContent: {
    flex: 1,
  },
  alertDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily:"DMSans",
    color: '#000',
  },
  alertDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  alertDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    marginRight: 12,
  },
  detailIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  detailText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    fontFamily:"DMSans"
  },
  premiumButton: {
    backgroundColor: '#3D74DF',
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 100,
  },
  heartIconContainer: {
    marginRight: 8,
  },
  heartIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  premiumButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily:'DMSans',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
