import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Image ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

// Sample terms and conditions text
const termsText = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
];

export default function Terms({ navigation }) {
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
        
        <TouchableOpacity style={styles.bellIconContainer}>
          <View style={styles.bellIcon}>
            <Image 
              source={require('../../assets/bell.png')} 
              style={styles.bellImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      
      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        <Text style={[styles.title,{ fontFamily: 'DMSerifDisplay' }]}>Terms and Conditions</Text>
        
        {/* Terms paragraphs */}
        <View style={styles.termsContent}>
          {termsText.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f7fa',
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40, // To account for status bar height
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#000',
  },
  bellIconContainer: {
    padding: 5,
  },
  bellIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  bellImage: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    color: '#000',
  },
  termsContent: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#676767',
    marginBottom: 15,
  },
});