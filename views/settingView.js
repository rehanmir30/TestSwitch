import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function SettingsView({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>TestSwitch</Text>
        {/* <TouchableOpacity>
          <Image source={require('../assets/profile-icon.png')} style={styles.profileIcon} />
        </TouchableOpacity> */}
      </View>

      {/* Title */}
      <Text style={styles.sectionTitle}>Settings</Text>

      {/* Menu Buttons */}
      <TouchableOpacity 
  style={[styles.card, { backgroundColor: '#E6F0FF', borderColor: '#2D7DF6' }]}
  onPress={() => navigation.navigate('TestCenters')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/test-centers.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Test Centers</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#FFF2F0', borderColor: '#FF8C66' }]}
  onPress={() => navigation.navigate('Availability')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/calender.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Availability</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#FBEFFF', borderColor: '#D67EFF' }]}
  onPress={() => navigation.navigate('Alerts')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/alert.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Alerts</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#ECFFF0', borderColor: '#44C37F' }]}
  onPress={() => navigation.navigate('AutoSwitch')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/auto-switch.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Auto Switch</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, styles.logoutCard]}
  onPress={() => {
    // Add logout logic here
    navigation.navigate('Login'); // or wherever you want to go after logout
  }}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/logout.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Logout</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    color: '#000',
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    color: '#888',
  },
});
