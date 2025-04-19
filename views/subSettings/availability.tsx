import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function Availability({ navigation }) {

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

  return (

    <ImageBackground
                source={require('../../assets/gradientBg.png')}
                style={styles.background}
                resizeMode="cover"
              >

    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
       <TouchableOpacity
                             onPress={() => navigation.navigate('Notification')}
                             style={styles.notificationIcon}
                           >
                             
                                           <Image source={require('../../assets/bell.png')} style={styles.notificationIcon} />
                                         
                           </TouchableOpacity>
      </View>

      {/* Title and Subtitle */}
      <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Availability</Text>
      <Text style={styles.subtitle}>
        Set your general availability by the hour and also specific periods of unavailability, such as appointments and holidays.
      </Text>

      {/* Availability Button */}
      <TouchableOpacity
        style={[styles.card, { borderColor: '#96b7ff' }]}
        onPress={() => navigation.navigate('AvailabilitySub')}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/availability-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Availability</Text>
        </View>
        <Icon name="chevron-forward" size={22} color="#000" />
      </TouchableOpacity>

      {/* Specific Unavailability Button */}
      <TouchableOpacity
        style={[styles.card, { borderColor: '#e1715b' }]}
        onPress={() => navigation.navigate('SpecificUnAvailability')}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/unavailability-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Specific Unavailability</Text>
        </View>
        <Icon name="chevron-forward" size={22} color="#000" />
      </TouchableOpacity>
    </View>
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
      padding: 20,
      // backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:20,
      marginBottom: 25,
    },
    notificationIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // bellIcon: {
    //   width: 30,
    //   height: 30,
    //   resizeMode: 'contain',
    // },
    title: {
      fontSize: 24,
      fontWeight: '400',
      color: '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 18,
      color: '#4d4d4d',
      marginBottom: 30,
      fontWeight: '700',
      fontFamily:"DMSans"
    },
    card: {
      borderWidth: 1,
      borderRadius: 12,
      padding: 8,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F9F9F9',
    },
    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardIcon: {
      width: 40,
      height: 40,
      marginRight: 12,
      resizeMode: 'contain',
    },
    cardText: {
      fontSize: 22,
      fontWeight: '700',
    },
  });
  