import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, ScrollView,ImageBackground } from 'react-native';

export default function HomeView({ navigation, activeScreen = 'Home' }) {
  return (
     <ImageBackground
                source={require('../assets/gradientBg.png')}
                style={styles.background}
                resizeMode="cover"
              >
    
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.appName}>TestSwitch</Text>
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
        <View style={styles.scanningContainer}>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoIcon}>i</Text>
          </TouchableOpacity>
          <View style={styles.scanningContent}>
            <View style={styles.scanIconContainer}>
              <Image source={require('../assets/bell.png')} style={styles.scanIcon} />
            </View>
            <Text style={styles.scanningText}>Scanning for cancellations</Text>
          </View>
        </View>
        
        {/* Days Saved Section */}
        <View style={styles.daysSavedContainer}>
          <Text style={styles.daysSavedText}>22 days saved with TestSwitch</Text>
        </View>
        
        {/* Alerts Section */}
        <View style={styles.alertsSection}>
          <Text style={styles.sectionTitle}>Latest Alerts</Text>
          
          <View style={[styles.alertCard, { backgroundColor: '#FFEFEC' }]}>
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
            {/* <View style={styles.alertRightSection}>
              <Image source={require('../assets/car-icon.png')} style={styles.alertRightIcon} />
            </View> */}
          </View>
          
          <Text style={styles.sectionTitle}>Previous Alerts</Text>
          
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
            {/* <View style={styles.alertRightSection}>
              <Image source={require('../assets/car-icon.png')} style={styles.alertRightIcon} />
            </View> */}
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
    // backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 8,
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
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 32,
    height: 32,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
  },
  waveEmoji: {
    fontSize: 20,
    marginHorizontal: 4,
  },
  scanningContainer: {
    backgroundColor: '#0055BB',
    borderRadius: 10,
    padding: 20,
    marginBottom: 8,
    position: 'relative',
  },
  infoButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  infoIcon: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  scanningContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  scanIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  scanningText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
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
    // backgroundColor: '#FFEFEC',
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
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
    fontWeight:"bold"
  },
  alertRightSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  alertRightIcon: {
    width: 16,
    height: 16,
    tintColor: '#555',
  },
  premiumButton: {
    backgroundColor: '#3D74DF',
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 30,
  },
  heartIconContainer: {
    marginRight: 8,
  },
  heartIcon: {
    width: 18,
    height: 18,
    tintColor: 'white',
  },
  premiumButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});