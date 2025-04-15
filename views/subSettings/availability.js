import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Availability({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/bell.png')} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Availability</Text>
      <Text style={styles.subtitle}>
        Set your general availability by the hour and also specific periods of unavailability, such as appointments and holidays.
      </Text>

      {/* Availability Button */}
      <TouchableOpacity
        style={[styles.card, { borderColor: '#8BB1FF' }]}
        onPress={() => navigation.navigate('AvailabilityDetails')}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/availability-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Availability</Text>
        </View>
        <Icon name="chevron-forward" size={22} color="#000" />
      </TouchableOpacity>

      {/* Specific Unavailability Button */}
      <TouchableOpacity
        style={[styles.card, { borderColor: '#FF8C66' }]}
        onPress={() => navigation.navigate('SpecificUnavailability')}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/unavailability-icon.png')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Specific Unavailability</Text>
        </View>
        <Icon name="chevron-forward" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:20,
      marginBottom: 25,
    },
    bellIcon: {
      width: 26,
      height: 26,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#000',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#444',
      marginBottom: 30,
    },
    card: {
      borderWidth: 1,
      borderRadius: 12,
      padding: 16,
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
      width: 24,
      height: 24,
      marginRight: 12,
      resizeMode: 'contain',
    },
    cardText: {
      fontSize: 16,
      fontWeight: '600',
    },
  });
  