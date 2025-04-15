import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, SafeAreaView ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Support({ navigation }) {
  const contactEmail = 'contact@testswitch.co.uk';

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
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.notificationIconText}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Support</Text>
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
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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