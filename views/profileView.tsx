import React from 'react';
import { useFonts } from 'expo-font';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';

export default function ProfileView({ navigation, activeScreen = 'Home' }) {
  const userData = {
    name: 'Johndow3',
    email: 'johndow3@gmail.com',
    testCentre: 'Inverness (Longman Drive)',
    licenseNumber: 'ABC1234567IURG',
    testReference: '658492',
    testDate: '08-03-2025',
    testTime: '02:40pm',
    countdown: {
      days: 114,
      hours: 19,
      minutes: 16,
    },
    subscription: 'Premium',
  };
const [fontsLoaded] = useFonts({
    'DMSerifDisplay': require('../assets/DMSerif-Display.ttf'),
    'DMSerif': require('../assets/DMSerif.ttf'),
  });

  // Wait until font is loaded
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
                style={{flex:1}}
                resizeMode="cover"
              >

    <SafeAreaView style={styles.container}>
      {/* Header - Fixed */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.logoText,{ fontFamily: 'DMSerifDisplay' }]}>TestSwitch</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.notificationIcon}
        >
          <Image
            source={require('../assets/bell.png')}
            style={styles.notificationImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Profile</Text>

        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>J</Text>
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>{userData.name}</Text>
            <Text style={styles.userEmail}>{userData.email}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Test Centre</Text>
          <Text style={styles.infoValue}>{userData.testCentre}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>License Number</Text>
          <Text style={styles.infoValue}>{userData.licenseNumber}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Test Reference Number</Text>
          <Text style={styles.infoValue}>{userData.testReference}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Test Date</Text>
          <Text style={styles.infoValue}>
            {userData.testDate} / {userData.testTime}
          </Text>
        </View>

        <View style={styles.countdownContainer}>
          <View style={styles.countdownGroup}>
            <View style={styles.digitGroup}>
              <Text style={styles.countdownNumber}>1</Text>
              <Text style={styles.countdownNumber}>1</Text>
              <Text style={styles.countdownNumber}>4</Text>
            </View>
            <Text style={styles.countdownLabel}>Days</Text>
          </View>

          <View style={styles.countdownSeparator}>
            <Text style={styles.countdownDot}>•</Text>
            <Text style={styles.countdownDot}>•</Text>
          </View>

          <View style={styles.countdownGroup}>
            <View style={styles.digitGroup}>
              <Text style={styles.countdownNumber}>1</Text>
              <Text style={styles.countdownNumber}>9</Text>
            </View>
            <Text style={styles.countdownLabel}>Hours</Text>
          </View>

          <View style={styles.countdownSeparator}>
            <Text style={styles.countdownDot}>•</Text>
            <Text style={styles.countdownDot}>•</Text>
          </View>

          <View style={styles.countdownGroup}>
            <View style={styles.digitGroup}>
              <Text style={styles.countdownNumber}>1</Text>
              <Text style={styles.countdownNumber}>6</Text>
            </View>
            <Text style={styles.countdownLabel}>Minutes</Text>
          </View>
        </View>

        <View style={styles.subscriptionContainer}>
          <View style={styles.subscriptionInfo}>
            <Image
              source={require('../assets/diamond.png')}
              style={styles.diamondIcon}
            />
            <View style={styles.subscriptionText}>
              <Text style={[styles.subscriptionTitle,{ fontFamily: 'DMSerifDisplay' }]}>Subscription</Text>
              <Text style={styles.subscriptionDetails}>
                You are subscribed to TestSwitch Premium
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.restoreButton}>
            <Text style={styles.restoreButtonText}>Restore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginLeft: 5,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationImage: {
    width: 30,
    height: 30,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    margin:"auto"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E6EFFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  userDetails: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  infoCard: {
    // backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    padding: 16,
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#7b7b7b',
    marginBottom: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000',
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  countdownGroup: {
    alignItems: 'center',
  },
  digitGroup: {
    flexDirection: 'row',
  },
  countdownNumber: {
    width: 30,
    height: 36,
    backgroundColor: '#ebf1ff',
    color: '#016bec',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
    marginHorizontal: 2,
    borderRadius: 4,
  },
  countdownLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginTop: 4,
    textAlign: 'center',
  },
  countdownSeparator: {
    height: 36,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  countdownDot: {
    fontSize: 20,
    color: '#016bec',
    fontWeight: 'bold',
  },
  subscriptionContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECF1FD',
    borderRadius: 16,
    borderColor:"#016bec",
    padding: 16,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:60
  },
  subscriptionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  diamondIcon: {
    width: 40,
    height: 40,
  },
  subscriptionText: {
    marginLeft: 12,
    flex: 1,
  },
  subscriptionTitle: {
    fontSize: 21,
    color: '#016bex',
    fontWeight: '400',
  },
  subscriptionDetails: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  restoreButton: {
    marginBottom:-90,
    backgroundColor: '#4285F4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  restoreButtonText: {
    color: '#FFFFFF',
    fontSize:16
    // fontWeight: 'bold',
  },
  bottomPadding: {
    height: 30,
  },
});
