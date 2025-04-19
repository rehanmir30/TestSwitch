import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';

export default function SettingsView({ navigation }) {

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

    <ScrollView style={styles.container}>
      
       
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
               
                             <Image source={require('../assets/bell.png')} style={styles.notificationIcon} />
                           
             </TouchableOpacity>
           </View>
      {/* Title */}
      <Text style={[styles.sectionTitle,{ fontFamily: 'DMSerifDisplay' }]}>Settings</Text>

      {/* Menu Buttons */}
      <TouchableOpacity 
  style={[styles.card, { backgroundColor: '#f6f9ff', borderColor: '#016bec' }]}
  onPress={() => navigation.navigate('TestCenters')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/test-centers.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Test Centers</Text>
  </View>
  {/* <Text style={styles.arrow}>›</Text> */}
  <Image
                source={require('../assets/chevron-right.png')}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#FFF6F4', borderColor: '#E1715b' }]}
  onPress={() => navigation.navigate('Availability')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/calender.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Availability</Text>
  </View>
  {/* <Text style={styles.arrow}>›</Text> */}
  <Image
                source={require('../assets/chevron-right.png')}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#fef0ff', borderColor: '#f04dff' }]}
  onPress={() => navigation.navigate('Alerts')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/alert.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Alerts</Text>
  </View>
  {/* <Text style={styles.arrow}>›</Text> */}
  <Image
                source={require('../assets/chevron-right.png')}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.card, { backgroundColor: '#f1fff5', borderColor: '#34c759' }]}
  onPress={() => navigation.navigate('AutoSwitch')}
>
  <View style={styles.cardContent}>
    <Image source={require('../assets/auto-switch.png')} style={styles.cardIcon} />
    <Text style={styles.cardText}>Auto Switch</Text>
  </View>
  {/* <Text style={styles.arrow}>›</Text> */}
   <Image
                source={require('../assets/chevron-right.png')}
                style={styles.arrowIcon}
                resizeMode="contain"
              />
</TouchableOpacity>
<View style={styles.gap}></View>
<TouchableOpacity 
  style={[styles.card, styles.logoutCard]}
  onPress={() => {
    // Add logout logic here
    // navigation.navigate('Login'); // or wherever you want to go after logout
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
marginTop:150
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

  arrowIcon: {
    width: 20,
    height: 20,
  },

  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  container: {
    paddingHorizontal: 16,
    // backgroundColor: '#FFFFFF',
    flex: 1,
  },
  // header: {
  //   marginTop:20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
  // logo: {
  //   width: 32,
  //   height: 32,
  //   resizeMode: 'contain',
  // },
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
    padding: 8,
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
    width: 40,
    height: 40,
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
