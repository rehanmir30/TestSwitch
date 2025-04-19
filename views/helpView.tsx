import React from 'react';
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
import { useFonts } from 'expo-font';

export default function HelpView({ navigation, activeScreen = 'Home' }) {
  const helpItems = [
    {
      id: 'Tips',
      title: 'Tips',
      icon: require('../assets/tips.png'),
      backgroundColor: '#e9fffe',
      borderColor:"#00aca6"
    },
    {
      id: 'Support',
      title: 'Support',
      icon: require('../assets/support.png'),
      backgroundColor: '#f6f9ff',
      borderColor:"#016bec"
    },
    {
      id: 'FAQs',
      title: "FAQ's",
      icon: require('../assets/faqs.png'),
      backgroundColor: '#fffcee',
      borderColor:"#c7ae34"
    },
    {
      id: 'Feedback',
      title: 'Feedback',
      icon: require('../assets/feedback.png'),
      backgroundColor: '#FFF6F4',
      borderColor:"#e1715b"
    },
    {
      id: 'Terms',
      title: 'Terms and Conditions',
      icon: require('../assets/terms.png'),
      backgroundColor: '#f1fff5',
      borderColor:"#34c759"
    },
    {
      id: 'Privacy',
      title: 'Privacy Policy',
      icon: require('../assets/privacy.png'),
      backgroundColor: '#fef0ff',
      borderColor:"#f04dff"
    },
  ];

  const handleItemPress = (id) => {
    navigation.navigate(id);
  };

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

  return (

    <ImageBackground
                source={require('../assets/gradientBg.png')}
                style={styles.background}
                resizeMode="cover"
              >

    <SafeAreaView style={styles.container}>
      {/* Header (fixed) */}
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
                       
                                     <Image source={require('../assets/bell.png')} style={styles.notificationIcon} />
                                   
                     </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Help</Text>

        {helpItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.helpItem, { backgroundColor: item.backgroundColor ,borderColor:item.borderColor}]}
            onPress={() => handleItemPress(item.id)}
          >
            <View style={styles.itemLeftSection}>
              <Image
                source={item.icon}
                style={styles.itemIcon}
                resizeMode="contain"
              />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Image
              source={require('../assets/chevron-right.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}

        <View style={styles.disclaimerSection}>
          <Text style={[styles.disclaimerTitle,{ fontFamily: 'DMSerifDisplay' }]}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This Service is in no way associated or affiliated with the DVSA or
            any government agencies.
          </Text>
          <Text style={[styles.copyrightText,{ fontFamily: 'DMSerifDisplay' }]}>2025@TestSwitch Ltd.</Text>
          <Text style={styles.companyNumber}>Company Number 1234455</Text>

          <TouchableOpacity style={styles.removeAccountButton}>
            <Text style={styles.removeAccountText}>Remove Account</Text>
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
    // backgroundColor: '#F6F9FC',
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
  scrollContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
  },
  helpItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  itemLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily:"DMSans"
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  disclaimerSection: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  disclaimerTitle: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#676767',
    fontWeight:700,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily:"DMSans",
    paddingHorizontal: 20,
  },
  copyrightText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  companyNumber: {
    fontSize: 12,
    color: '#676767',
    fontWeight: '700',
    fontFamily:"DMSans",
    marginBottom: 20,
  },
  removeAccountButton: {
    backgroundColor: '#ffdada',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fb504e',
    marginBottom:50,
  },
  removeAccountText: {
    color: '#fd504e',
    fontWeight: '500',
    fontSize: 16,
  },
});
