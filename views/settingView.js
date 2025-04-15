import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,ImageBackground} from 'react-native';

export default function SettingsView({ navigation }) {
  return (
    
    <ImageBackground
            source={require('../assets/gradientBg.png')}
            style={styles.background}
            resizeMode="cover"
          >

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
  style={[styles.card, { backgroundColor: '#f6f9ff', borderColor: '#016bec' }]}
  onPress={() => navigation.navigate('TestCenters')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/test-centers.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Test Centers</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#FFF6F4', borderColor: '#E1715b' }]}
  onPress={() => navigation.navigate('Availability')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/calender.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Availability</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#fef0ff', borderColor: '#f04dff' }]}
  onPress={() => navigation.navigate('Alerts')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/alert.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Alerts</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#f1fff5', borderColor: '#34c759' }]}
  onPress={() => navigation.navigate('AutoSwitch')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/auto-switch.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Auto Switch</Text>
  </View>
  <Text style={styles.arrow}>›</Text>
</TouchableOpacity>
<View style={styles.gap}></View>
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
    </ImageBackground> 
  );
}

const styles = StyleSheet.create({

  gap:{
    marginTop:150,
  },

  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  container: {
    padding: 20,
    // backgroundColor: '#FFFFFF',
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
    fontSize: 24,
    fontWeight: 400,
    color: '#000',
    marginLeft:4
  },
  profileIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '400',
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
    fontSize: 22,
    fontWeight: '700',
  },
  arrow: {
    fontSize: 24,
    color: '#afafaf',
  },
});
