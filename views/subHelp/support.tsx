import React from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet, Linking, SafeAreaView ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function Support({ navigation }) {
  const contactEmail = 'contact@testswitch.co.uk';
  const [fontsLoaded] = useFonts({
      'DMSerifDisplay': require('../../assets/DMSerif-Display.ttf'),
      'DMSerif': require('../../assets/DMSerif.ttf'),
    });
  
    // Wait until font is loaded
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactEmail}`);
  };

  return (

     <ImageBackground
                source={require('../../assets/gradientBg.png')}
                style={styles.background}
                resizeMode="cover"
              >

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="chevron-back" size={24} color="#000" />
                  </TouchableOpacity>
        <View style={styles.iconContainer}>
           <TouchableOpacity
                                       onPress={() => navigation.navigate('Notification')}
                                       style={styles.notificationIcon}
                                     >
                                       
                                                     <Image source={require('../../assets/bell.png')} style={styles.notificationIcon} />
                                                   
                                     </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Support</Text>
        <Text style={styles.description}>
          If you need help with something not covered in the FAQ's or its something really important then please get in touch
        </Text>

        <TouchableOpacity style={styles.emailButton} onPress={handleEmailPress}>
          <Text style={styles.emailButtonText}>{contactEmail}</Text>
        </TouchableOpacity>
      </View>
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
    // backgroundColor: '#f5f7fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop:20,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIconText: {
    fontSize: 16,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4d4d4d',
    lineHeight: 22,
    marginBottom: 20,
  },
  emailButton: {
    backgroundColor: '#d7e9ff',
    padding: 15,
    borderRadius: 8,
    borderColor:"#96b7ff",
    alignItems: 'center',
    marginTop:40,
  },
  emailButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
});